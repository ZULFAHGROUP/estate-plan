import React, { useEffect, useState } from 'react';
import Home from '../../../components/fragments/Admin/Home';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

export default function Content() {
  const [customers, setCustomers] = useState([]);
  const [assets, setAssets] = useState([]);

  useEffect(() => {
    document.title = 'Home';
    axios.get('https://mapp-asset-tracker.azurewebsites.net/api/v1/admin/customers', {
      headers: {
        'Content-Type': 'application/json',
         Authorization: 'Bearer ' + JSON.parse(localStorage.getItem('token'))
      }
    })
    .then((response) => {
        localStorage.setItem('customers', JSON.stringify(response.data.data));
        setCustomers(response.data.data);
        // console.log(response.data.data);
    }
    ).catch((error) => {
        if(error.response.status == 401) {
          localStorage.removeItem('token');
          localStorage.removeItem('customers');
          <Redirect to="/login" />
        }
    });

    axios.get('https://mapp-asset-tracker.azurewebsites.net/api/v1/admin/assets', {
      headers: {
       'Content-Type': 'application/json',
        Authorization: 'Bearer ' + JSON.parse(localStorage.getItem('token'))
          
      }
    })
    .then((response) => {
      
      localStorage.setItem('assets', JSON.stringify(response.data.data));
      setAssets([...response.data.data]);
      // console.log(response.data.data);
    })
    .catch((error) => {
      if(error.response.status == 401) {
        localStorage.removeItem('token');
        localStorage.removeItem('customers');
        <Redirect to="/login" />
      }
  });

  }, []);

  return (
    <div>
      <Home customers={customers} assets={assets} />
    </div>
  );
}
