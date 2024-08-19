import {useEffect, useState} from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
export default function Nin() {
    const [customers, setCustomers] = useState(JSON.parse(localStorage.getItem('customers')));
   
    useEffect(() => {
        setCustomers( () =>{
            return customers.filter((item) =>  item.nin != null && item.is_nin_verified == false)
        });
    }, []);

    const updateNinStatus = async(email, nin, status) => {
        try {
            alert("Are you sure you want to update this customer's nin status?");

            const token = localStorage.getItem('token');
            if(!token) {
                toast.error("Please login to continue");
                return;
              
              }
              console.log("sdfghj",token);
                 //call the api to update the customer nin status
                const response = await axios({
                    method: 'patch',
                    url: `https://mapp-asset-tracker.azurewebsites.net/api/v1/admin/verify-nin/${nin}/${email}/${status}`,
                    headers: {
                        'Content-Type': 'application/json',
                         Authorization: 'Bearer ' + JSON.parse(token)
                    }

                })
                alert(response.data.message);
                if (response.data.status === false) {
                    alert(response.data.message);
                    return;
                }
               
                toast(response.data.message);
                //update the local storage
                let customers = JSON.parse(localStorage.getItem('customers'));
                let customerIndex = customers.findIndex((item) => item.email === email);
                customers[customerIndex].is_nin_verified = true;
                localStorage.setItem('customers', JSON.stringify(customers));


                //redirect to the same page

               window.location.reload();
                
       
           
           
        }catch (error) {
           
            toast.error(error.response.data.message);
        }
    }
   
    return (
        <div>
        <h1>Customer Nin</h1><hr /><br />
        {
            customers.length > 0 ? (
                <table className="table-auto">
                <thead>
                    <tr>
                        <th className="px-4 ">Sn</th>
                        <th className="px-4 "> FullName</th>
                        {/* <th className="px-4 "> Email</th> */}
                        <th className="px-4"> Phone</th>
                        <th className="px-4">Nin</th>
                        {/* <th className="px-4">Status</th> */}
                        <th className="px-4">Action</th>
                    </tr>
                </thead>
                {
                    customers.map((item, i) => {
                        return (
                            <tbody key={i}>
                                <tr>
                                    <td className="border px-4">{i+1}.</td>
                                    <td className="border px-4">{`${item.surname} ${item.othernames}`}</td>
                                    {/* <td className="border px-4">{item.email}</td> */}
                                    <td className="border px-4">{item.phone}</td>
                                    <td className="border px-4">{item.nin}</td>
                                    {/* <td className="border px-4">{item.nin_status}</td> */}
                                    <td className="border p-4">
                                        <button  style={{backgroundColor:"#008145", padding:"5px", color:"#fff", borderRadius:"5px"}} className="rounded-md text-sm" onClick={()=> updateNinStatus(item.email,item.nin, "approve")}>Approve</button>
                                         &nbsp;&nbsp;&nbsp;
                                        <button  style={{backgroundColor:"red", padding:"3px", color:"#fff", borderRadius:"5px"}} onClick={()=> updateNinStatus(item.email,item.nin, "reject")} >Reject</button>
                                    </td>
                                </tr>
                            </tbody>
                        )
                    })
                }
            </table>
            ) : <h2>No customer with nin verification request yet</h2>
        }
       


        </div>
    );
}
