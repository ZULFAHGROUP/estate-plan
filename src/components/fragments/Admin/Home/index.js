import * as React from 'react';
import { FaSearch } from 'react-icons/fa';
import Loading from '../Loader/1494.gif'
import { useState, useEffect  } from 'react';
import { Modal } from 'react-responsive-modal';
import './style.css'
import DataTable from 'react-data-table-component';
import { CSVLink } from "react-csv";

import AssetDetails from './components/AssetDetails';
import BeneficiaryDetails from './components/BeneficiaryDetails';

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
  const [customerFilteredData, setCustomerFilteredData] = useState([])


  const columns = [
    
    {
      name: 'Sn',
      selector: (row, i) => i+1,
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
    const _customerFilteredData = customers.map((item, i) => {
      return {
        sn: i + 1,
        title: item.title,
        surname: item.surname.toUpperCase(),
        othernames: item.othernames.toUpperCase(),
        email: item.email,
        phone_number: item.phone,
        gender: item.gender,
        address: item.address,
        landmark: item.landmark,
        dob: item.dob,
        nin: item.nin,
        bvn: item.bvn,
        marital_status: item.marital_status,
        religion: item.religion,
        maiden_name: item.maiden_name,
        created_at:item.created_at,
        updated_at: item.updated_at
      }
    })

    setCustomerFilteredData(_customerFilteredData)

  }, [assets, customers])

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
      itemNinStatus: item.is_nin_verified,
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
            customers.length &&
            ( <>
                <div style={{"float": 'right'}}>
                <CSVLink data={customerFilteredData}> Download</CSVLink>
                 </div> <br /><br />
                <DataTable title="Customers" columns={columns} data={customers} pagination striped={true}  highlightOnHover={true} onRowClicked={(row) => {clickSearchIcon(row)}}/> 
              </>
            )
          }
          </div>
      }
     
      

     {open.openDialog && 
      <Modal
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
       
         
          <div className="flex flex-row font-sans text-sm rounded-t-xl bg-gradient-to-r from-emerald-50 to-teal-100 p-10">
            <div>
            <p className="font-bold">Customers Details</p><br />
              <table className="table-auto">
              {/* <tr>
                  <th className="px-4 py-2 text-emerald-600">id</th>
                  <td className="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">{open.itemUser}</td>
                </tr> */}
                <tr>
                  {/* <th className="border px-4 py-2 text-emerald-600">sn</th> */}
                  <th className="border px-4 py-2 text-emerald-600">Surname</th>
                  <th className="border px-4 py-2 text-emerald-600">Othernames</th> 
                  <th className="border px-4 py-2 text-emerald-600">Email</th>
                  <th className="border px-4 py-2 text-emerald-600">Phone</th>
                  <th className="border px-4 py-2 text-emerald-600">Gender</th>
                  <th className="border px-4 py-2 text-emerald-600">Address</th>
                  <th className="border px-4 py-2 text-emerald-600">DOB</th>
                  <th className="border px-4 py-2 text-emerald-600">NIN</th>
                  <th className="border px-4 py-2 text-emerald-600">Nin status</th>
                  <th className="border px-4 py-2 text-emerald-600">Marital Status</th>
                  <th className="border px-4 py-2 text-emerald-600">Created At</th>
                </tr>
                <tr>
                  {/* <td className="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">1.</td> */}
                  <td className="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">{open.itemOthernames}</td>
                  <td className="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">{open.itemSurname}</td>
                  <td className="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">{open.itemEmail}</td>
                  <td className="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">{open.itemPhone ?? '-'}</td>
                  <td className="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">{open.itemGender ?? '-'}</td>
                  <td className="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">{open.itemAddress ?? '-'}</td>
                  <td className="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">{open.itemDob ?? '-'}</td>
                  <td className="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">{open.itemNin ?? '-'}</td>
                  <td className="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">{open.itemNinStatus == 0 ? "-" : "verified"}</td>
                  <td className="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">{open.itemMaritalStatus ?? '-'}</td>
                  <td className="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">{open.itemCreatedAt.split('T')[0] ?? '-'}</td>
               
              
                </tr>

        
              </table>
              <br />

             <p className="font-bold"> Assets Details</p><br />
             <AssetDetails userFilteredAsset={userFilteredAsset} />

              <br /><br />
              <p className="font-bold"> Beneficiary Details</p><br />
              <BeneficiaryDetails />
                  
            
            </div>
          
          
         
           
            
       
          </div>

      </Modal>
      } 

    </div>
  );
}
