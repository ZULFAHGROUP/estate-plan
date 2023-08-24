import React, { useEffect, useState } from 'react';
import Gallery from '../../../components/fragments/Admin/Gallery';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

export default function Content() {
  const [estatePlans, setEstatePlans] = useState([]);
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    document.title = 'Estate Plans';
    axios.get('https://mapp-asset-tracker.azurewebsites.net/api/v1/admin/estate-plans', {
      headers: {
        'Content-Type': 'application/json',
         Authorization: 'Bearer ' + JSON.parse(localStorage.getItem('token'))
      }
    })
      .then((response) => {
        setEstatePlans(response.data.data);
        setCustomers(JSON.parse(localStorage.getItem('customers')));
    
    }
    ).catch((error) => { 
        if(error.response.status == 401) {
          localStorage.clear();
          <Redirect to="/login" />
        }
      });
  }, []);

  return (
    <div>
      <Gallery estatePlans={estatePlans} customers={customers} />
    </div>
  );
}
