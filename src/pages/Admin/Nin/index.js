import React, { useEffect } from 'react';
import Nin from '../../../components/fragments/Admin/Nin';

export default function Content() {
  useEffect(() => {
    document.title = 'Customer Nin';
  }, []);

  return (
    <div>
      <Nin />
    </div>
  );
}
