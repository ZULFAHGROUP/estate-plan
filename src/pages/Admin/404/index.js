import React, { useEffect } from 'react';

export default function PageNotFound() {
  useEffect(() => {
    document.title = 'Page Not Found';
  }, []);

  return (
    <div className="flex justify-center items-center h-full">
      <h1>404 page not found</h1>
    </div>
  );
}
