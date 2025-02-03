const Table = ({ data, columns, actions }) => {
  return (
    <div className=" mx-2 border border-gray-200 rounded-md">
      <table className="w-full divide-y divide-gray-200 text-sm text-left text-gray-500">
        <thead className="text-xs text-gray-700 uppercase bg-yellow-400">
          <tr className="divide-x divide-gray-300">
            {columns.map((col, idx) => (
              <th key={idx} className="px-4 py-3">
                {col.label}
              </th>
            ))}
            {actions && <th className="px-4 py-3">Actions</th>}
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((item, rowIndex) => (
              <tr key={rowIndex} className="border-b">
                {columns.map((col, colIndex) => (
                  <td key={colIndex} className="px-4 py-3">
                    {col.render ? col.render(item) : item[col.field]}
                  </td>
                ))}
                {actions && ( 
                    <td className="px-3 py-2 flex justify-center items-center" >{actions(item)}</td>
                )}
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={columns.length + (actions ? 1 : 0)} className="text-center py-4">
                No enquiries found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
