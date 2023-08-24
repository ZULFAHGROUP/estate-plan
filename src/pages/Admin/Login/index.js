import React, { useEffect } from 'react';
import Login from '../../../components/fragments/Admin/Login';

export default function Content() {
  useEffect(() => {
    document.title = 'Login';
  }, []);

  return (
    <div>
      <Login />
    </div>
  );
}
