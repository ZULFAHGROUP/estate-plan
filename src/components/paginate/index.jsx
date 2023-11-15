import React from 'react';
 
const Paginate = ({ postsPerPage, totalPosts }) => {
   const pageNumbers = [];
 
   for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
      pageNumbers.push(i);
   }
 
   return (
      <div className="pagination-container">
         {/* ... */}
      </div>
   );
};
 
export default Paginate;