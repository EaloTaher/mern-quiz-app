import { useEffect, useState } from "react";
import { getServerData } from "../helper/helper";

export default function ResultTable() {
  const [data, setData] = useState([]);
  useEffect(() => {
    getServerData(`${import.meta.env.VITE_SERVER_HOSTNAME}/api/result`, (res) =>
      setData(res)
    );
  }, []);

  return (
    <div>
      <table className="rounded-t-lg m-5 w-5/6 mx-auto bg-gray-800 text-gray-200">
        <thead>
          <tr className="text-left border-b border-gray-300">
            <th className="px-4 py-3">Name</th>
            <th className="px-4 py-3">Attempts</th>
            <th className="px-4 py-3">Earn Points</th>
            <th className="px-4 py-3">Result</th>
          </tr>
        </thead>
        <tbody>
          {data.length === 0 ? (
            <tr>
              <td colSpan="4" className="px-4 py-3 text-center">
                No Data found
              </td>
            </tr>
          ) : (
            data.map((v, i) => (
              <tr key={i} className="bg-gray-700 border-b border-gray-600">
                <td className="px-4 py-3">{v?.username || ""}</td>
                <td className="px-4 py-3">{v?.attempts || 0}</td>
                <td className="px-4 py-3">{v?.points || 0}</td>
                <td
                  style={{
                    color: `${
                      v?.achieved === "Passed" ? "#2aff95" : "#ff2a66"
                    }`,
                  }}
                  className="px-4 py-3"
                >
                  {v?.achieved || ""}
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
