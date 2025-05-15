import { useEffect, useState } from "react";
import api from "../../shared/axiosInstance";

interface User {
  _id: string;
  name: string;
  email: string;
  role: string;
}

const User = () => {
  const [users, setUsers] = useState<User[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await api.get("/resumeDownload/get");
        setUsers(res.data.users);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <>
      <section className="text-center text-white m-0 p-0">
        {!users.length && <p>Loading...</p>}
        {users.length > 0 && (
          <div className="max-h-[300px] overflow-y-auto" id="scrlbr">
            <table className="m-auto w-full bg-[#293343] rounded">
              <thead className="sticky top-0 z-10 text-xl text-left text-gray-300 rounded uppercase border-b border-gray-500 bg-[#1c2330]">
                <tr>
                  <th className="px-8 py-6 border-b">Name</th>
                  <th className="px-8 py-6 border-b">Email</th>
                  <th className="px-8 py-6 border-b">Role</th>
                </tr>
              </thead>
              <tbody className="text-left w-full">
                {users.map((user) => (
                  <tr key={user._id}>
                    <td className="px-6 py-3">{user.name}</td>
                    <td className="px-6 py-3">{user.email}</td>
                    <td className="px-6 py-3">{user.role}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>
    </>
  );
};
export default User;
