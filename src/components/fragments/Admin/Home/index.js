import * as React from 'react';
import { FaSearch } from 'react-icons/fa';
import Loading from '../Loader/1494.gif'
import { useState, useEffect } from 'react';
import { Modal } from 'react-responsive-modal';
import './style.css'


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

  useEffect(() => { 
    setAssetsData(assets)

  }, [assets])

  const clickSearchIcon = (item) => { 

  
    setOpen({
      openDialog: true,
      itemUser: item.user_id,
      itemSurname: item.surname,
      itemOthernames: item.othernames,
      itemEmail: item.email,
      itemPhone: item.phone_number,
      itemGender : item.gender,
      itemAddress: item.address,
      itemDob: item.dob,
      itemNin: item.nin,
      itemBvn: item.bvn,
      itemMaritalStatus: item.marital_status,

    })
     const _userAsset = assetsData.filter((x) => x.user_id === item.user_id);
     setUserFilteredAsset(_userAsset)

}



  return (
    <div>
      <h1>Welcome Trustees</h1><br />
      {
      
         <div className="rounded-t-xl bg-gradient-to-r from-emerald-50 to-teal-100 p-10">
          {
            customers.length > 1
              ? 
              <table className="table-auto">
                <thead>
                  <tr>
                    <th className="px-4 py-2 text-emerald-600">sn</th>
                    <th className="px-4 py-2 text-emerald-600">Title</th>
                    <th className="px-4 py-2 text-emerald-600">Surname</th>
                    <th className="px-4 py-2 text-emerald-600">Othernames</th>
                    <th className="px-4 py-2 text-emerald-600">Email</th>
                    <th className="px-4 py-2 text-emerald-600">Phone</th>
                    <th className="px-4 py-2 text-emerald-600">Gender</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    
                    customers.map((item, i) =>
                    {
                    
                        return(<tr key={i+1}>
                          <td className="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">{i+1}.</td>
                          <td className="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">{item.title}</td>
                          <td className="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">{item.surname}</td>
                            <td className="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">{item.othernames}</td>
                            <td className="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">{item.email}</td>
                            <td className="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">{item.phone_number}</td>
                            <td className="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">{item.gender}</td>
                            <td className="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">
                            <FaSearch className="text-emerald-600" onClick={()=> clickSearchIcon(item)} />
                            </td>
                      </tr>)
                      })
                    
                  }
                
                  
                </tbody>
              </table>
              :
              <div className="flex justify-center items-center">
                No data yet
              </div>
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
          <p>Customers Details</p><hr /><br />
         
          <div className="flex flex-row  rounded-t-xl bg-gradient-to-r from-emerald-50 to-teal-100 p-10">
            <div>
              <table className="table-auto">
              {/* <tr>
                  <th className="px-4 py-2 text-emerald-600">id</th>
                  <td className="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">{open.itemUser}</td>
                </tr> */}
                <tr>
                  <th className="px-4 py-2 text-emerald-600">Surname</th>
                  <td className="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">{open.itemSurname}</td>
                </tr>
                <tr>
                  <th className="px-4 py-2 text-emerald-600">Othernames</th>
                  <td className="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">{open.itemOthernames}</td>
                </tr>
                <tr>
                  <th className="px-4 py-2 text-emerald-600">Email</th>
                  <td className="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">{open.itemEmail}</td>
                </tr>
                <tr>
                  <th className="px-4 py-2 text-emerald-600">Phone</th>
                  <td className="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">{open.itemPhone ?? '-'}</td>
                </tr>
                <tr>
                  <th className="px-4 py-2 text-emerald-600">Gender</th>
                  <td className="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">{open.itemGender ?? '-'}</td>
                </tr>
                <tr>
                  <th className="px-4 py-2 text-emerald-600">Address</th>
                  <td className="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">{open.itemAddress ?? '-'}</td>
                </tr>
                <tr>
                  <th className="px-4 py-2 text-emerald-600">DOB</th>
                  <td className="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">{open.itemDob ?? '-'}</td>
                </tr>
                <tr>
                  <th className="px-4 py-2 text-emerald-600">NIN</th>
                  <td className="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">{open.itemNin ?? '-'}</td>
                </tr>
                <tr>
                  <th className="px-4 py-2 text-emerald-600">BVN</th>
                  <td className="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">{open.itemBvn ?? '-'}</td>
                </tr>
                <tr>
                  <th className="px-4 py-2 text-emerald-600">Marital Status</th>
                  <td className="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">{open.itemMaritalStatus ?? '-'}</td>
                </tr>
        
              </table>
            </div>
            <div style={{padding:'20px'}}></div>
            <div>
              Assets <hr />
              {
                userFilteredAsset.length < 1 
                  ?
                  <div className="flex justify-center items-center p-2">
                    No Assets added yet
                  </div>
                  :
                  (
                    <table className="table">
                    <thead>
                      <tr>
                        <th className="px-4 py-2 text-emerald-600">sn</th>
                        <th className="px-4 py-2 text-emerald-600">Asset Name</th>
                        <th className="px-4 py-2 text-emerald-600">Amount</th>
                        <th className="px-4 py-2 text-emerald-600">Currency</th>
                      </tr>
                    </thead>
                    <tbody>
              {
               
                userFilteredAsset.map((item, i) => {
                  return (
                    
                      <tr>
                       <td className="px-4 py-2 text-emerald-600">{i + 1 }</td>
                       <td className="px-4 py-2 text-emerald-600">{item.asset_name }</td>
                       <td className="px-4 py-2 text-emerald-600">{(item.amount).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") }</td>
                       <td className="px-4 py-2 text-emerald-600">{item.currency}</td>
                      </tr>)
                })
                  }
                  
                  </tbody>
                  </table>
                  )

              }
                  
            </div>
            <div style={{padding:'20px'}}></div>
            <div>
              Beneficiray
            </div>
            
       
          </div>

      </Modal>
      } 

    </div>
  );
}
