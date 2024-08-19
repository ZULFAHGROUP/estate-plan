const BeneficiaryDetails = () => {
    return(
        <table className="table-auto">
        <thead>
          <tr>
            <th className="border px-4 py-2 text-emerald-600">sn</th>
            <th className="border px-4 py-2 text-emerald-600">Fullname</th>
            <th className="border px-4 py-2 text-emerald-600">Relationship</th>
            <th className="border px-4 py-2 text-emerald-600">Phone Number</th>
            <th className="border px-4 py-2 text-emerald-600">Email</th>
            <th className="border px-4 py-2 text-emerald-600">Gender</th>
            <th className="border px-4 py-2 text-emerald-600">Created At</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border px-4 py-2 text-emerald-600">1.</td>
            <td className="border px-4 py-2 text-emerald-600">John Doe</td>
            <td className="border px-4 py-2 text-emerald-600">Father</td>
            <td className="border px-4 py-2 text-emerald-600">08012345678</td>
            <td className="border px-4 py-2 text-emerald-600">roshbon@gmail.com</td>
            <td className="border px-4 py-2 text-emerald-600">Male</td>
            <td className="border px-4 py-2 text-emerald-600">2021-09-09</td>
          </tr>
        </tbody>
      </table>

    )
}

export default BeneficiaryDetails;