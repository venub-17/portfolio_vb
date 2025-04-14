const User = () => {
  return (
    <>
      <section className="text-center text-white m-0 p-0">
        <div className="max-h-20 max-sm:max-h-none ">
          <table className="min-w-full w-3/4 bg-[#293343] rounded">
            <thead className="sticky top-0 z-10 text-xl text-center text-gray-300 rounded uppercase border-b border-gray-500 bg-[#1c2330]">
              <tr>
                <th className="px-8 py-6 border-b">Name</th>
                <th className="px-8 py-6 border-b">Email</th>
                <th className="px-8 py-6 border-b">Phone</th>
                <th className="px-8 py-6 border-b">Company</th>
              </tr>
            </thead>
            <tbody className="overflow-scroll">
              <tr>
                <td className="px-6 py-3 ">Data 1</td>
                <td className="px-6 py-3 ">Data 3</td>
                <td className="px-6 py-3 ">Data 3</td>
                <td className="px-6 py-3 ">Data 3</td>
              </tr>
              <tr>
                <td className="px-6 py-3 ">Data 6</td>
                <td className="px-6 py-3 ">Data 5</td>
                <td className="px-6 py-3 ">Data 6</td>
                <td className="px-6 py-3 ">Data 6</td>
              </tr>
              <tr>
                <td className="px-6 py-3 ">Data 7</td>
                <td className="px-6 py-3 ">Data 8</td>
                <td className="px-6 py-3 ">Data 9</td>
                <td className="px-6 py-3 ">Data 9</td>
              </tr>
              <tr>
                <td className="px-6 py-3 ">Data 7</td>
                <td className="px-6 py-3 ">Data 8</td>
                <td className="px-6 py-3 ">Data 9</td>
                <td className="px-6 py-3 ">Data 9</td>
              </tr>
              <tr>
                <td className="px-6 py-3 ">Data 7</td>
                <td className="px-6 py-3 ">Data 8</td>
                <td className="px-6 py-3 ">Data 9</td>
                <td className="px-6 py-3 ">Data 9</td>
              </tr>
              <tr>
                <td className="px-6 py-3 border-b border-gray-500">Data 7</td>
                <td className="px-6 py-3 border-b border-gray-500">Data 8</td>
                <td className="px-6 py-3 border-b border-gray-500">Data 8</td>
                <td className="px-6 py-3 border-b border-gray-500">Data 9</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};
export default User;
