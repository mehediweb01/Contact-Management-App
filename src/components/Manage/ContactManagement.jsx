import { useState } from "react";
import { AccountData } from "../../db";

const ContactManagement = () => {
  // filtering
  const [filter, setFilter] = useState("");
  const handleChange = (e) => {
    setFilter(e.target.value);
  };

  return (
    <div>
      {/* filtering */}
      <div className="mb-6 w-full">
        <input
          type="text"
          placeholder="Filter by name"
          onChange={handleChange}
          className="!bg-white border border-slate-500 w-full"
        />
      </div>
      <table className="border-separate bg-slate-400 w-full rounded-md">
        <thead>
          <tr className="border border-slate-500 px-2 py-1 ">
            <th>Name</th>
            <th>Email</th>
            <th>Phone Number</th>
          </tr>
        </thead>
        <tbody>
          {AccountData.filter((item) => {
            return filter.toLowerCase() === ""
              ? item
              : item.name.toLowerCase().includes(filter);
          }).map((details) => (
            <tr key={details.id} className="border border-slate-500 px-2 py-1 ">
              <td>{details.name}</td>
              <td>{details.email}</td>
              <td>{details.number}</td>
              <td>
                <button className="hover:text-slate-600">Edit</button>
              </td>
              <td>
                <button
                  className="hover:text-red-600"
                  onClick={() => {
                    return AccountData.splice(
                      AccountData.indexOf(details.id),
                      1
                    );
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ContactManagement;
