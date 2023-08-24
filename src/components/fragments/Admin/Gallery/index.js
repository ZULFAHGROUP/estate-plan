import  React, {useState} from 'react';
import { Modal } from 'react-responsive-modal';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
  
export default function Gallery({ estatePlans, customers }) {
  const [open, setOpen] = useState(false);
  const [estate_plan, setEstatePlan] = useState('');
  const [details, setDetails] = useState('');
  const [user_id, setUserId] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const createEstatePlan = async(e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const data = {
      estate_plan,
      details,
      customer: user_id
    }
    const response = await axios.post('https://mapp-asset-tracker.azurewebsites.net/api/v1/admin/estate-plans', data, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + JSON.parse(localStorage.getItem('token'))
      }
    })

    if (response.data.status === true) { 
      setIsSubmitting(false);
      setOpen(false);
      toast("Estate plans successfully created");
      window.location.reload();
    }
  }


  const getEmailFromUserId = (user_id) => {
    const _customers = JSON.parse(localStorage.getItem('customers'))
    const _result = _customers.filter(item => item.user_id == user_id)
    return _result[0].email
  }

  return (
    <div>
      <h1>Estate Plans</h1><hr /> <br />
      <button style={{backgroundColor:"blue", padding:"10px", color:"#fff", borderRadius:"5px"}} className="btn " onClick={() => setOpen(true)}>
         + New 
      </button>

     
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
      
      <div className="rounded-t-xl bg-gradient-to-r from-emerald-50 to-teal-100 p-10">
          {
            estatePlans.length > 0 ?
              <table className="table">
                <thead>
                  <tr>
                    <th className="px-4 py-2 text-emerald-600">sn</th>
                    <th className="px-4 py-2 text-emerald-600">Estate Plan</th>
                    <th className="px-4 py-2 text-emerald-600">Details</th>
                    <th className="px-4 py-2 text-emerald-600">Account</th>
                    <th className="px-4 py-2 text-emerald-600">createdAt</th>
                  </tr>
                </thead>
                <tbody>
                  {
            
                    estatePlans.map((item, i) => {
                      return (<tr key={i}>
                        <td className="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">{i + 1}.</td>
                        <td className="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">{item.estate_plan}</td>
                        <td className="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">{item.details}</td>
                        <td className="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">{getEmailFromUserId(item.user_id)}</td>
                        <td className="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">{(item.created_at).split('T')[0]}</td>
                    
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
                      customers.map((item, i) => {
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
