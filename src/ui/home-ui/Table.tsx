import { TablePhone } from "..";

const Table = () => {
  return (
    <section>
      <div className="flex md:flex-row flex-col lg:ml-[100px] md:ml-[50px] mx-[20px] mt-[100px]">
        <div className="flex flex-col">
          <div className="flex text-[28px] font-bold  ">
            Compare our plans and find the right one for you.
          </div>
          <p className="text-neutral-400 text-base font-normal md:mr-[100px] ">
            StreamVibe offers three different plans to fit your needs: Basic,
            Standard, and Premium. Compare the features of each plan and choose
            the one that's right for you.
          </p>
        </div>
      </div>

      <TablePhone />

      <div className="relative overflow-x-auto mx-[50px] lg:mx-[100px] hidden md:flex rounded-lg mt-[50px] border-[#262626] border font-manrope">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-white uppercase bg-[#0F0F0F]">
            <tr className="">
              <th scope="col" className="px-6 py-5 border-r border-[#9999]">
                Features
              </th>
              <th scope="col" className="px-6 py-3 border-r border-[#9999]">
                Basic
              </th>
              <th scope="col" className="px-6 py-3 border-r border-[#9999]">
                Standard
                <span className="bg-[#e50000] ml-[10px] p-[3px]">Popular</span>
              </th>
              <th scope="col" className="px-6 py-3">
                Premium
              </th>
            </tr>
          </thead>
          <tbody className="text-[#999999] bg-[#262626]">
            <tr className="border-b bg-[#1a1a1a9a] border-[#9999]">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-[#999999] border-[#9999] border-r whitespace-nowrap"
              >
                Price
              </th>
              <td className="px-6 py-4 border-r border-[#9999]">$9.99/month</td>
              <td className="px-6 py-4 border-r border-[#9999]">
                $12.99/month
              </td>
              <td className="px-6 py-4">$14.99/month</td>
            </tr>
            <tr className="border-b bg-[#1a1a1a9a] border-[#9999]">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-[#999999] border-[#9999] border-r whitespace-nowrap"
              >
                Content
              </th>
              <td className="px-6 py-4 border-r border-[#9999]">
                Access to a wide selection of movies and shows, including some
                new releases.
              </td>
              <td className="px-6 py-4 border-r border-[#9999]">
                Access to a wider selection of movies and shows, including most
                new releases and exclusive content
              </td>
              <td className="px-6 py-4 ">
                Access to a widest selection of movies and shows, including all
                new releases and Offline Viewing
              </td>
            </tr>
            <tr className="border-b bg-[#1a1a1a9a] border-[#9999]">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-[#999999] border-[#9999] border-r whitespace-nowrap"
              >
                Devices
              </th>
              <td className="px-6 py-4 border-r border-[#9999]">
                Watch on One device simultaneously
              </td>
              <td className="px-6 py-4 border-r border-[#9999]">
                Watch on Two device simultaneously
              </td>
              <td className="px-6 py-4 ">
                Watch on Four device simultaneously
              </td>
            </tr>
            <tr className="border-b bg-[#1a1a1a9a] border-[#9999]">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-[#999999] border-[#9999] border-r whitespace-nowrap"
              >
                Free Trial
              </th>
              <td className="px-6 py-4 border-r border-[#9999]">7 days</td>
              <td className="px-6 py-4 border-r border-[#9999]">7 days</td>
              <td className="px-6 py-4 ">7 days</td>
            </tr>
            <tr className="border-b bg-[#1a1a1a9a] border-[#9999]">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-[#999999] border-[#9999] border-r whitespace-nowrap"
              >
                Cancel Anytime
              </th>
              <td className="px-6 py-4 border-r border-[#9999]">Yes</td>
              <td className="px-6 py-4 border-r border-[#9999]">Yes</td>
              <td className="px-6 py-4 ">Yes</td>
            </tr>
            <tr className="border-b bg-[#1a1a1a9a] border-[#9999]">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-[#999999] border-[#9999] border-r whitespace-nowrap"
              >
                HDR
              </th>
              <td className="px-6 py-4 border-r border-[#9999]">No</td>
              <td className="px-6 py-4 border-r border-[#9999]">Yes</td>
              <td className="px-6 py-4 ">Yes</td>
            </tr>
            <tr className="border-b bg-[#1a1a1a9a] border-[#9999]">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-[#999999] border-[#9999] border-r whitespace-nowrap"
              >
                Dolby Atoms
              </th>
              <td className="px-6 py-4 border-r border-[#9999]">No</td>
              <td className="px-6 py-4 border-r border-[#9999]">Yes</td>
              <td className="px-6 py-4 ">Yes</td>
            </tr>
            <tr className="border-b bg-[#1a1a1a9a] border-[#9999]">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-[#999999] border-[#9999] border-r whitespace-nowrap"
              >
                Ad - Free
              </th>
              <td className="px-6 py-4 border-r border-[#9999]">No</td>
              <td className="px-6 py-4 border-r border-[#9999]">Yes</td>
              <td className="px-6 py-4 ">Yes</td>
            </tr>
            <tr className="border-b bg-[#1a1a1a9a] border-[#9999]">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-[#999999] border-[#9999] border-r whitespace-nowrap"
              >
                Offline viewing
              </th>
              <td className="px-6 py-4 border-r border-[#9999]">No</td>
              <td className="px-6 py-4 border-r border-[#9999]">
                Yes, for select titles
              </td>
              <td className="px-6 py-4 ">Yes, for all titles</td>
            </tr>
            <tr className="bg-[#1a1a1a9a]">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-[#999999] border-[#9999] border-r whitespace-nowrap"
              >
                Family Sharing
              </th>
              <td className="px-6 py-4 border-r border-[#9999]">No</td>
              <td className="px-6 py-4 border-r border-[#9999]">
                Yes, up to 5 family members
              </td>
              <td className="px-6 py-4 "> Yes, up to 6 family members</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Table;
