const CustomerDetails = ({ customer }) => {
    return (
        <table className="table-auto">
 
          <tr>
            <th className="border px-4 py-2 text-emerald-600">sn</th>
            <th className="border px-4 py-2 text-emerald-600">Surname</th>
            <th className="border px-4 py-2 text-emerald-600">Othernames</th> 
            <th className="border px-4 py-2 text-emerald-600">Email</th>
            <th className="border px-4 py-2 text-emerald-600">Phone</th>
            <th className="border px-4 py-2 text-emerald-600">Gender</th>
            <th className="border px-4 py-2 text-emerald-600">Address</th>
            <th className="border px-4 py-2 text-emerald-600">DOB</th>
            <th className="border px-4 py-2 text-emerald-600">NIN</th>
            <th className="border px-4 py-2 text-emerald-600">BVN</th>
            <th className="border px-4 py-2 text-emerald-600">Marital Status</th>
            <th className="border px-4 py-2 text-emerald-600">Created At</th>
          </tr>
          <tr>
            <td className="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">1.</td>
            <td className="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">{customer.itemOthernames}</td>
            <td className="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">{customer.itemSurname}</td>
            <td className="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">{customer.itemEmail}</td>
            <td className="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">{customer.itemPhone ?? '-'}</td>
            <td className="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">{customer.itemGender ?? '-'}</td>
            <td className="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">{customer.itemAddress ?? '-'}</td>
            <td className="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">{customer.itemDob ?? '-'}</td>
            <td className="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">{customer.itemNin ?? '-'}</td>
            <td className="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">{customer.itemBvn ?? '-'}</td>
            <td className="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">{customer.itemMaritalStatus ?? '-'}</td>
            <td className="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">{customer.itemCreatedAt.split('T')[0] ?? '-'}</td>
         
        
          </tr>

  
        </table>
    )
}

export default CustomerDetails;