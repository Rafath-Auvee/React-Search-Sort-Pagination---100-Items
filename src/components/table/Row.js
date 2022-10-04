import React from "react";

const Row = ({ data }) => {
  return (
    <div>
      <div className="overflow-x-auto">
        <table className={`table w-full `}>
          <thead>
            <tr className="bg-green-500">
              <th>ID</th>
              <th className="text-1xl">Name</th>
              <th className="text-1xl">State</th>
              <th className="text-1xl">Age</th>
              <th className="text-1xl">Spicy</th>
              <th className="text-1xl">Salty</th>
              <th className="text-1xl">Sweet</th>
            </tr>
          </thead>
          <tbody>
            {/* ({console.log(user)}) */}

            {data.map((item, index) => (
              <tr key={index}>
                <td className="no-underline">{index + 1}</td>
                <td className="no-underline">{item.name}</td>
                <td className="no-underline">{item.state}</td>
                <td className="no-underline">{item.age}</td>
                <td className="no-underline">{item.spicy}</td>
                <td className="no-underline">{item.salty}</td>
                <td className="no-underline">{item.sweet}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Row;
