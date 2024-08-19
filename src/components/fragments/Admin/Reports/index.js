import  React, {useState} from 'react';



export default function Reports() {
    const [user_id, setUserId] = useState('');
    const [customers, setCustomers] = useState(JSON.parse(localStorage.getItem('customers')));
    return (
        <div>
        <h1>Customer Reports</h1><hr /><br />
            <div>
                     <select onChange={(e) => setUserId(e.target.value)}
                        className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}>
                        <option value="">Select Customer Email</option>
                            {
                            customers.sort((a, b) => a.email.localeCompare(b.email)).map((item, i) =>  {
                                return(<option key={i} value={item.id}>{item.email}</option>)
                            })
                            }
                        </select>
                        <button style={{backgroundColor:"#008145", padding:"7px", color:"#fff", borderRadius:"5px"}} className="rounded-md text-sm" onClick={()=>alert("cool")}>Generate Report</button>
                       
            </div>
        </div>
    );
}
