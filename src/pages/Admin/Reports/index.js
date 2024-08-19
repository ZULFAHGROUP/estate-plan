import React, { useEffect } from 'react';
import Reports from '../../../components/fragments/Admin/Reports';

export default function Content() {
  useEffect(() => {
    document.title = 'Reports';
  }, []);

  return (
    <div>
      <Reports />
    </div>
  );
}
