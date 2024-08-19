import  React, {useState} from 'react';
import { Modal } from 'react-responsive-modal';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
  
export default function Gallery({ estatePlans, customers }) {
  const [open, setOpen] = useState(false);
  const [estate_plan, setEstatePlan] = useState('');
  const [details, setDetails] = useState('');
  const [user_id, setUserId] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const createEstatePlan = async(e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    if(!token) {
      toast("Please login to continue");
      return;
    
    }
    setIsSubmitting(true);
    const data = {
      estate_plan,
      details,
      customer: user_id
    }
    const response = await axios.post('https://mapp-asset-tracker.azurewebsites.net/api/v1/admin/estate-plans', data, {
      headers: {
        'Content-Type': 'application/json',
         Authorization: 'Bearer ' + JSON.parse(token)
      }
    })

    if (response.data.status === true) { 
      setIsSubmitting(false);
      setOpen(false);
      toast("Estate plans successfully created");
      window.location.reload();
    }
  }
  //group estate plans
 
  const simpleWill = estatePlans.map(item => {
    return{
      user_id: item.user_id,
      name: "Simple Will",
      simplewill_title: item.simplewill_title,
      simplewill_surname: item.simplewill_surname,
      simplewill_firstname: item.simplewill_firstname,
      simplewill_othername: item.simplewill_othername,
      simplewill_email: item.simplewill_email,
      simplewill_phone: item.simplewill_phone,
      simplewill_marital_status: item.simplewill_marital_status,
      simplewill_marriage_type: item.simplewill_marriage_type,
      simplewill_means_of_id: item.simplewill_means_of_id,
      simplewill_asset_pfa: item.simplewill_asset_pfa,
      simplewill_rsa_no: item.simplewill_rsa_no,
      simplewill_bankname: item.simplewill_bankname,
      simplewill_bank_details: item.simplewill_bank_details,
      simplewill_beneficiary_details: item.simplewill_beneficiary_details,
      simplewill_will_executors: item.simplewill_will_executors,
      simplewill_spouses:item.simplewill_spouses,
      simplewill_dependent: item.simplewill_dependent,
      created_at: item.created_at,
      updated_at: item.updated_at
    }
  })
  const simpleWillUpdated = simpleWill.filter(item =>  item.simplewill_title !== null)
  const comprehensiveWill = estatePlans.map(item => {
    return{
      user_id: item.user_id,
      name: "Comprehensive Will",
      comprehensivewill_document_owned: item.comprehensivewill_document_owned,
      comprehensivewill_settlor_name: item.comprehensivewill_settlor_name,
      comprehensivewill_religion: item.comprehensivewill_religion,
      comprehensivewill_marital_status: item.comprehensivewill_marital_status,
      comprehensivewill_marriage_type: item.comprehensivewill_marriage_type,
      comprehensivewill_customary_tradition: item.comprehensivewill_customary_tradition,
      comprehensivewill_address: item.comprehensivewill_address,
      comprehensivewill_email: item.comprehensivewill_email,
      comprehensivewill_phone: item.comprehensivewill_phone,
      comprehensivewill_occupation: item.comprehensivewill_occupation,
      comprehensivewill_children: JSON.parse(item.comprehensivewill_children),
      comprehensivewill_beneficiary: JSON.parse(item.comprehensivewill_beneficiary),
      comprehensivewill_assets: JSON.parse(item.comprehensivewill_assets),
      comprehensivewill_others: JSON.parse(item.comprehensivewill_others),
      comprehensivewill_executors_appointment: JSON.parse(item.comprehensivewill_executors_appointment),
      comprehensivewill_executors_appointment_expectation: item.comprehensivewill_executors_appointment_expectation,
      created_at: item.created_at,
      updated_at: item.updated_at
    }
  })
  const comprehensiveWillUpdated = comprehensiveWill.filter(item =>  item.comprehensivewill_settlor_name !== null)
  const nominatedFunds = estatePlans.map(item => {
      return{
        user_id: item.user_id,
        name: "Nominated Funds",
        nominatedfund_nominator_name: item.nominatedfund_nominator_name,
        nominatedfund_nominator_address: item.nominatedfund_nominator_address,
        nominatedfund_nominator_email: item.nominatedfund_nominator_email,
        nominatedfund_nominator_phone: item.nominatedfund_nominator_phone,
        nominatedfund_nominator_occupation: item.nominatedfund_nominator_occupation,
        nominatedfund_beneficiary: JSON.parse(item.nominatedfund_beneficiary),
        created_at: item.created_at,
        updated_at: item.updated_at
      }

  })
  const nominatedFundsUpdated = nominatedFunds.filter(item =>  item.nominatedfund_nominator_name !== null)
  const trustSettlor = estatePlans.map(item => {
    return {
      user_id: item.user_id,
      name: "Trust Settlor",
      trust_settlor_name: item.trust_settlor_name,
      trust_settlor_address: item.trust_settlor_address,
      trust_settlor_occupation: item.trust_settlor_occupation,
      trust_beneficiary: item.trust_beneficiary,
      trust_asset_contribution: item.trust_asset_contribution,
      trust_how_often_for_contribution: item.trust_how_often_for_contribution,
      currency: item.currency,
      trust_trustees_advise: item.trust_trustees_advise,
      trust_education_level: item.trust_education_level,
      created_at: item.created_at,
      updated_at: item.updated_at
    }
  })
  const trustSettlorUpdated = trustSettlor.filter(item =>  item.trust_settlor_name!== null)


  const getEmailFromUserId = (user_id) => {
    const _customers = JSON.parse(localStorage.getItem('customers'))
    const _result = _customers.filter(item => item.user_id === user_id)
    return _result[0].email
  }

  return (
    <div>
      <h1>Estate Plans</h1><hr /> <br />
      {/* <button style={{backgroundColor:"#008145", padding:"10px", color:"#fff", borderRadius:"5px"}} className="btn " onClick={() => setOpen(true)}>
         + New 
      </button> */}

          <Tabs>
            <TabList>
              <Tab >Simple will</Tab>
              <Tab>Comprehensive Will</Tab>
              <Tab>Nominated Funds</Tab>
              <Tab>Trust Settlor</Tab>
            </TabList>

            {/* simple will */}
            <TabPanel>
            {
              <div className="rounded-t-xl font-sans text-sm bg-gradient-to-r from-emerald-50 to-teal-100 p-10">
                  {
                    simpleWillUpdated.length > 0 ?
                      <table className="table w-[100%]">
                        <thead>
                          <tr>
                            <th className="px-4 py-2 text-emerald-600">sn</th>
                            <th className="px-4 py-2 text-emerald-600">Title</th>
                            <th className="px-4 py-2 text-emerald-600">Surname</th>
                            <th className="px-4 py-2 text-emerald-600">Othername(s)</th>
                            {/* <th className="px-4 py-2 text-emerald-600">Email</th> */}
                            <th className="px-4 py-2 text-emerald-600">Phone</th>
                            <th className="px-4 py-2 text-emerald-600">Marital Status</th>
                            {/* <th className="px-4 py-2 text-emerald-600">Marriage Type</th> */}
                            {/* <th className="px-4 py-2 text-emerald-600">MeansofID</th> */}
                            {/* <th className="px-4 py-2 text-emerald-600">Spouses</th> */}
                            <th className="px-4 py-2 text-emerald-600">PFA</th>
                            <th className="px-4 py-2 text-emerald-600">RSA number</th>
                            <th className="px-4 py-2 text-emerald-600">Created date</th>
                            
                          </tr>
                        </thead>
                        <tbody>
                          {
                          
                    
                          simpleWillUpdated.map((item, i) => {
                              return (<tr key={i}>
                                <td className="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">{i + 1}.</td>
                                <td className="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">{item.simplewill_title}</td>
                                <td className="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">{item.simplewill_surname}</td>
                                <td className="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">{item.simplewill_firstname} {item.simplewill_othername}</td>
                                {/* <td className="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">{getEmailFromUserId(item.user_id)}</td> */}
                                <td className="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">{item.simplewill_phone}</td>
                                <td className="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">{item.simplewill_marital_status}</td>
                                {/* <td className="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">{item.simplewill_marriage_type}</td> */}
                                {/* <td className="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">{item.simplewill_means_of_id}</td> */}
                                {/* <td className="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">{item.simplewill_spouses}</td> */}
                                <td className="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">{item.simplewill_asset_pfa}</td>
                                <td className="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">{item.simplewill_rsa_no}</td>
                                <td className="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">{(item.created_at).split('T')[0]}</td>
                                <td className="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">
                                  <button style={{backgroundColor:"#008145", padding:"5px", color:"#fff", borderRadius:"5px"}} className="btn">View</button>
                                </td>
                                <td className="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">
                                  <button style={{backgroundColor:"#008145", padding:"5px", color:"#fff", borderRadius:"5px"}} className="btn">Generate</button>
                                </td>
                            
                              </tr>)
                            })
                    
                          }
                
                
                        </tbody>
                      </table>
                      :
                      <div className="flex justify-center items-center pt-10">
                        No data yet
                      </div>
                  }
              </div>
            }
            </TabPanel>

            {/* comprehensive Will */}
            <TabPanel>
              {
              <div className="rounded-t-xlfont-sans text-sm bg-gradient-to-r from-emerald-50 to-teal-100 p-10">
                  {
                    comprehensiveWillUpdated.length > 0 ?
                      <table className="table w-[100%]">
                        <thead>
                          <tr>
                            <th className="px-4 py-2 text-emerald-600">sn</th>
                            <th className="px-4 py-2 text-emerald-600">Owned</th>
                            <th className="px-4 py-2 text-emerald-600">Settlor Name</th>
                            <th className="px-4 py-2 text-emerald-600">Address</th>
                            <th className="px-4 py-2 text-emerald-600">Email</th>
                            <th className="px-4 py-2 text-emerald-600">Phone</th>
                            <th className="px-4 py-2 text-emerald-600">Religion</th>
                            <th className="px-4 py-2 text-emerald-600">Marital Status</th>
                            {/* <th className="px-4 py-2 text-emerald-600">Marriage Type</th> */}
                            {/* <th className="px-4 py-2 text-emerald-600">MeansofID</th> */}
                            {/* <th className="px-4 py-2 text-emerald-600">Spouses</th> */}
                            <th className="px-4 py-2 text-emerald-600">Occupation</th>
                            <th className="px-4 py-2 text-emerald-600">Will Executors Expectation</th>
                            <th className="px-4 py-2 text-emerald-600">Created date</th>
                            <th className="px-4 py-2 text-emerald-600">*</th>
                          </tr>
                        </thead>
                        <tbody>
                          {
                          comprehensiveWillUpdated.map((item, i) => {
                              return (<tr key={i}>
                                <td className="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">{i + 1}.</td>
                                <td className="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">{item.comprehensivewill_document_owned}</td>
                                <td className="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">{item.comprehensivewill_settlor_name}</td>
                                <td className="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">{item.comprehensivewill_address}</td>
                                <td className="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">{item.comprehensivewill_email}</td>
                                <td className="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">{item.comprehensivewill_phone}</td>
                                <td className="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">{item.comprehensivewill_religion}</td>
                                <td className="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">{item.comprehensivewill_marital_status}</td>
                                {/* <td className="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">{getEmailFromUserId(item.user_id)}</td>
                                <td className="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">{item.simplewill_phone}</td>
                                {/* <td className="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">{item.simplewill_marriage_type}</td> */}
                                {/* <td className="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">{item.simplewill_means_of_id}</td> */}
                                {/* <td className="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">{item.simplewill_spouses}</td> */}
                                <td className="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">{item.comprehensivewill_occupation}</td>
                                <td className="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">{item.comprehensivewill_executors_appointment_expectation}</td>
                                <td className="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">{(item.created_at).split('T')[0]}</td>
                                <td className="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">
                                  <button style={{backgroundColor:"#008145", padding:"5px", color:"#fff", borderRadius:"5px"}} className="btn">View</button>
                                </td>
                                <td className="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">
                                  <button style={{backgroundColor:"#008145", padding:"5px", color:"#fff", borderRadius:"5px"}} className="btn">Generate</button>
                                </td>
                            
                              </tr>)
                            })
                    
                          }
                
                
                        </tbody>
                      </table>
                      :
                      <div className="flex justify-center items-center pt-10">
                        No data yet
                      </div>
                  }
              </div>
            }

            </TabPanel>

            {/* Nominated Funds */}
            <TabPanel>
             
            {
              <div className="rounded-t-xl font-sans text-sm bg-gradient-to-r from-emerald-50 to-teal-100 p-10">
                  {
                    nominatedFundsUpdated.length > 0 ?
                      <table className="table w-[100%]">
                        <thead>
                          <tr>
                            <th className="px-4 py-2 text-emerald-600">sn</th>
                            <th className="px-4 py-2 text-emerald-600">Name</th>
                            <th className="px-4 py-2 text-emerald-600">Address</th>
                            <th className="px-4 py-2 text-emerald-600">Email</th>
                            <th className="px-4 py-2 text-emerald-600">Phone</th>
                            <th className="px-4 py-2 text-emerald-600">Occupation</th>
                            <th className="px-4 py-2 text-emerald-600">Created date</th>
                            
                          </tr>
                        </thead>
                        <tbody>
                          {
                          
                    
                          nominatedFundsUpdated.map((item, i) => {
                              return (<tr key={i}>
                                <td className="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">{i + 1}.</td>
                                <td className="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">{item.nominatedfund_nominator_name}</td>
                                <td className="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">{item.nominatedfund_nominator_address}</td>
                                <td className="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">{item.nominatedfund_nominator_email}</td>
                                <td className="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">{item.nominatedfund_nominator_phone}</td>
                                <td className="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">{item.nominatedfund_nominator_occupation}</td>
                                <td className="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">{(item.created_at).split('T')[0]}</td>
                                <td className="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">
                                  <button style={{backgroundColor:"#008145", padding:"5px", color:"#fff", borderRadius:"5px"}} className="btn">View</button>
                                </td>
                                <td className="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">
                                  <button style={{backgroundColor:"#008145", padding:"5px", color:"#fff", borderRadius:"5px"}} className="btn">Generate</button>
                                </td>
                            
                              </tr>)
                            })
                    
                          }
                
                
                        </tbody>
                      </table>
                      :
                      <div className="flex justify-center items-center pt-10">
                        No data yet
                      </div>
                  }
              </div>
            }

            </TabPanel>

            {/* Trust Settlor */}
            <TabPanel>
             
            {
              <div className="rounded-t-xl font-sans text-sm bg-gradient-to-r from-emerald-50 to-teal-100 p-10">
                  {
                    trustSettlorUpdated.length > 0 ?
                      <table className="table w-[100%]">
                        <thead>
                          <tr>
                            <th className="px-4 py-2 text-emerald-600">sn</th>
                            <th className="px-4 py-2 text-emerald-600">Name</th>
                            <th className="px-4 py-2 text-emerald-600">Address</th>
                            <th className="px-4 py-2 text-emerald-600">Occupation</th>
                            <th className="px-4 py-2 text-emerald-600">Asset Contribution</th>
                            <th className="px-4 py-2 text-emerald-600">How (Often) Contribution</th>
                            <th className="px-4 py-2 text-emerald-600">Education Level</th>
                            <th className="px-4 py-2 text-emerald-600">Currency</th>
                            <th className="px-4 py-2 text-emerald-600">Created date</th>
                            
                          </tr>
                        </thead>
                        <tbody>
                          {
                          
                    
                          trustSettlorUpdated.map((item, i) => {
                              return (<tr key={i}>
                                <td className="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">{i + 1}.</td>
                                <td className="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">{item.trust_settlor_name}</td>
                                <td className="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">{item.trust_settlor_address}</td>
                                <td className="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">{item.trust_settlor_occupation}</td>
                                <td className="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">{item.trust_asset_contribution}</td>
                                <td className="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">{item.trust_how_often_for_contribution}</td>
                                <td className="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">{item.trust_education_level}</td>
                                <td className="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">{item.currency}</td>
                                <td className="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">{(item.created_at).split('T')[0]}</td>
                                <td className="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">
                                  <button style={{backgroundColor:"#008145", padding:"5px", color:"#fff", borderRadius:"5px"}} className="btn">View</button>
                                </td>
                                <td className="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">
                                  <button style={{backgroundColor:"#008145", padding:"5px", color:"#fff", borderRadius:"5px"}} className="btn">Generate</button>
                                </td>
                            
                              </tr>)
                            })
                    
                          }
                
                
                        </tbody>
                      </table>
                      :
                      <div className="flex justify-center items-center pt-10">
                        No data yet
                      </div>
                  }
              </div>
            }


            </TabPanel>
      </Tabs>
      {/* <form >
          <div>
            <label htmlFor="username">Email</label>
            <input
              type="text"
              className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
              id="username"
              placeholder="Your Email"
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
              id="password"
              placeholder="Your Password"
            />
          </div>

          <div className="flex justify-center items-center mt-6">
            <button
              className={`py-2 px-4 text-sm text-white rounded border bg-sky-400 border-sky-400 w-full`}>
              Login
            </button>
          </div>
        </form> */}
     
      {
        open &&
        <Modal
        open={open}
        onClose={() => setOpen(false)}
        center
        classNames={{
          overlayAnimationIn: 'customEnterOverlayAnimation',
          overlayAnimationOut: 'customLeaveOverlayAnimation',
          modalAnimationIn: 'customEnterModalAnimation',
          modalAnimationOut: 'customLeaveModalAnimation',
        }}
        animationDuration={800}
      >
        <p>New Estate Plan</p><hr /><br />
          <form onSubmit={createEstatePlan}>
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
              </div>
              <div>
                <input
                  type="text"
                  className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                  id="username"
                placeholder="Estate Plan Name"
                onChange={(e) => setEstatePlan(e.target.value)}
                />
              </div>
              <div>
                <textarea
                   className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                   id="details"
                    placeholder="Tell us this user estate plan"
                    onChange={(e)=>setDetails(e.target.value)}
                  />
                
              </div>
              <div className="flex justify-center items-center mt-6">
              <button
                style={{backgroundColor:'#008145'}}
                  className={`py-2 px-4 text-sm text-white rounded border  w-full`}>
                  {isSubmitting ? 'Loading, Please wait...' : 'Create Estate Plan'}
                </button>
              </div>
          </form>
      </Modal>
      } 
    </div>
  );
}
