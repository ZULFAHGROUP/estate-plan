const AssetDetails = ({ userFilteredAsset }) => {
    return(
        
        userFilteredAsset.length < 1 
          ?
          <div className="flex justify-start items-center p-2">
            No Assets added yet
          </div>
          :
          (
            <table className="table-auto">
            <thead>
              <tr>
                <th className="border px-4 py-2 text-emerald-600">sn</th>
                <th className="border px-4 py-2 text-emerald-600">Asset Name</th>
                <th className="border px-4 py-2 text-emerald-600">Amount</th>
                <th className="border px-4 py-2 text-emerald-600">Currency</th>
                <th className="border px-4 py-2 text-emerald-600">.</th>
              </tr>
            </thead>
            <tbody>
      {
       
        userFilteredAsset.map((item, i) => {
          return (
            
              <tr>
               <td className="border px-4 py-2 text-emerald-600">{i + 1 }</td>
               <td className="border px-4 py-2 text-emerald-600">{item.asset_name }</td>
               <td className="border px-4 py-2 text-emerald-600">{(item.amount).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") }</td>
               <td className="border px-4 py-2 text-emerald-600">{item.currency}</td>
               <td className="border px-4 py-2 text-emerald-600">{item.currency === "Naira" ? "₦" : item.currency === "$" ? item.currency==="Euro"  : "€"}</td>
              </tr>)
        })
          }
          
          </tbody>
          </table>
          )

        )
}

export default AssetDetails;