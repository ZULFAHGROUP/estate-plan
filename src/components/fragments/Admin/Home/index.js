import * as React from 'react';
import { FaSearch } from 'react-icons/fa';
import Loading from '../Loader/1494.gif'
import { useState, useEffect } from 'react';
import { Modal } from 'react-responsive-modal';
import './style.css'
import DataTable from 'react-data-table-component';

export default function Home({ customers, assets }) {
  const [open, setOpen] = useState({
    openDialog: false,
    user_id: '',
    itemSurname: '',
    itemOthernames: '',
    itemEmail: '',
    itemPhone: '',
    itemGender: '',
    itemAddress: '',
    itemDob: '',
    itemNin: '',
    itemBvn: '',
    itemMaritalStatus: '',
  
  });
  const [loading, setLoading] = useState(true);
  const [assetsData, setAssetsData] = useState([]);
  const [userFilteredAsset, setUserFilteredAsset] = useState([])
  const columns = [
    
    {
      name: 'Sn',
      selector: row => row.sn,
      sortable: true,
    },
    {
      name: 'Surname',
      selector: row => row.surname,
    },
    {
      name: 'Othernames',
      selector: row => row.othernames,
    },
    {
      name: 'Email',
      selector: row => row.email,
      sortable: true,
    },
    {
      name: 'Created At',
      selector: row => row.created_at.split('T')[0],
      sortable: true,
    },
  ];
  

  
  useEffect(() => { 
    setAssetsData(assets)

  }, [assets])

  const clickSearchIcon = (item) => { 

  
    setOpen({
      openDialog: true,
      itemUser: item.user_id,
      itemSurname: item.surname.toUpperCase(),
      itemOthernames: item.othernames.toUpperCase(),
      itemEmail: item.email,
      itemPhone: item.phone_number,
      itemGender : item.gender,
      itemAddress: item.address,
      itemDob: item.dob,
      itemNin: item.nin,
      itemBvn: item.bvn,
      itemMaritalStatus: item.marital_status,
      itemCreatedAt: item.created_at,


    })
     const _userAsset = assetsData.filter((x) => x.user_id === item.user_id);
     setUserFilteredAsset(_userAsset)

}



  return (
    <div>
     
      {
      
         <div className="rounded-t-xl bg-gradient-to-r from-emerald-50 to-teal-100 p-10">
          {
            customers.length && <DataTable title="Customers" columns={columns} data={customers} pagination striped={true}  highlightOnHover={true} onRowClicked={(row) => {clickSearchIcon(row)}}/> 
             
          }
          </div>
      }
     
      

     {open.openDialog && <Modal
                              open={open}
                              onClose={() => setOpen({openDialog: false})}
                              center
                                classNames={{
                                overlay: 'customOverlay',
                                modal: 'customModal',
                                overlayAnimationIn: 'customEnterOverlayAnimation',
                                overlayAnimationOut: 'customLeaveOverlayAnimation',
                                modalAnimationIn: 'customEnterModalAnimation',
                                modalAnimationOut: 'customLeaveModalAnimation',
                            }}
                            animationDuration={800}
                          >
       
         
          <div className="flex flex-row  rounded-t-xl bg-gradient-to-r from-emerald-50 to-teal-100 p-10">
            <div>
            <p>Customers Details</p><br />
              <table className="table-auto">
              {/* <tr>
                  <th className="px-4 py-2 text-emerald-600">id</th>
                  <td className="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">{open.itemUser}</td>
                </tr> */}
                <tr>
                  <th className="border px-4 py-2 text-emerald-600">sn</th>
                  <th className="border px-4 py-2 text-emerald-600">Surname</th>
                  <th className="border px-4 py-2 text-emerald-600">Othernames</th> 
                  <th className="border px-4 py-2 text-emerald-600">Email</th>
                  <th className="border px-4 py-2 text-emerald-600">Phone</th>
                  <th className="border px-4 py-2 text-emerald-600">Gender</th>
                  <th className="border px-4 py-2 text-emerald-600">Address</th>
                  <th className="border px-4 py-2 text-emerald-600">DOB</th>
                  <th className="border px-4 py-2 text-emerald-600">NIN</th>
                  <th className="border px-4 py-2 text-emerald-600">BVN</th>
                  <th className="border px-4 py-2 text-emerald-600">Marital Status</th>
                  <th className="border px-4 py-2 text-emerald-600">Created At</th>
                </tr>
                <tr>
                  <td className="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">1.</td>
                  <td className="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">{open.itemOthernames}</td>
                  <td className="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">{open.itemSurname}</td>
                  <td className="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">{open.itemEmail}</td>
                  <td className="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">{open.itemPhone ?? '-'}</td>
                  <td className="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">{open.itemGender ?? '-'}</td>
                  <td className="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">{open.itemAddress ?? '-'}</td>
                  <td className="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">{open.itemDob ?? '-'}</td>
                  <td className="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">{open.itemNin ?? '-'}</td>
                  <td className="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">{open.itemBvn ?? '-'}</td>
                  <td className="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">{open.itemMaritalStatus ?? '-'}</td>
                  <td className="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">{open.itemCreatedAt.split('T')[0] ?? '-'}</td>
               
              
                </tr>

        
              </table>
              <br />
      
             <p>Assets Details</p><br />
              {
                userFilteredAsset.length < 1 
                  ?
                  <div className="flex justify-center items-center p-2">
                    No Assets added yet
                  </div>
                  :
                  (
                    <table className="table-auto">
                    <thead>
                      <tr>
                        <th className="border px-4 py-2 text-emerald-600">sn</th>
                        <th className="border px-4 py-2 text-emerald-600">Asset Name</th>
                        <th className="border px-4 py-2 text-emerald-600">Amount</th>
                        <th className="border px-4 py-2 text-emerald-600">Currency</th>
                        <th className="border px-4 py-2 text-emerald-600">.</th>
                      </tr>
                    </thead>
                    <tbody>
              {
               
                userFilteredAsset.map((item, i) => {
                  return (
                    
                      <tr>
                       <td className="border px-4 py-2 text-emerald-600">{i + 1 }</td>
                       <td className="border px-4 py-2 text-emerald-600">{item.asset_name }</td>
                       <td className="border px-4 py-2 text-emerald-600">{(item.amount).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") }</td>
                       <td className="border px-4 py-2 text-emerald-600">{item.currency}</td>
                       <td className="border px-4 py-2 text-emerald-600">{item.currency === "Naira" ? "₦" : item.currency === "$" ? item.currency==="Euro"  : "€"}</td>
                      </tr>)
                })
                  }
                  
                  </tbody>
                  </table>
                  )

              }

              <br /><br />
              <p> Beneficiary Details</p><br />
              <table className="table-auto">
                <thead>
                  <tr>
                    <th className="border px-4 py-2 text-emerald-600">sn</th>
                    <th className="border px-4 py-2 text-emerald-600">Fullname</th>
                    <th className="border px-4 py-2 text-emerald-600">Relationship</th>
                    <th className="border px-4 py-2 text-emerald-600">Phone Number</th>
                    <th className="border px-4 py-2 text-emerald-600">Email</th>
                    <th className="border px-4 py-2 text-emerald-600">Gender</th>
                    <th className="border px-4 py-2 text-emerald-600">Created At</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border px-4 py-2 text-emerald-600">1.</td>
                    <td className="border px-4 py-2 text-emerald-600">John Doe</td>
                    <td className="border px-4 py-2 text-emerald-600">Father</td>
                    <td className="border px-4 py-2 text-emerald-600">08012345678</td>
                    <td className="border px-4 py-2 text-emerald-600">roshbon@gmail.com</td>
                    <td className="border px-4 py-2 text-emerald-600">Male</td>
                    <td className="border px-4 py-2 text-emerald-600">2021-09-09</td>
                  </tr>
                </tbody>
              </table>

                  
            
            </div>
          
          
         
           
            
       
          </div>

      </Modal>
      } 

    </div>
  );
}
