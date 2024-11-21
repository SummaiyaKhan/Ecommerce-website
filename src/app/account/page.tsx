import Link from "next/link";

export default function Account() {
    return(
        <div className="mb-28" >
             {/* Breadcrumb */}
      <div className="ml-32 mt-8">
        <ul className="flex text-sm">
          <Link href={"/"}><li className="text-gray-500">Home /</li>
          </Link>
          
          <li className="font-medium text-black ml-1">Account</li>
        </ul>
      </div>
      <div className="w-[800px] bg-gradient-to-b from-gray-50 to-white shadow-2xl rounded-lg mx-auto mt-5 p-10">

  {/* Form Container */}
  <div className="w-full h-auto border border-gray-200 rounded-xl bg-white p-8">
    {/* Left and Right Side Inputs */}
    <div className="flex gap-8 mb-8">
      <div className="flex flex-col w-1/2 gap-4">
  <h1 className="text-red-600 font-medium text-xl text-center -ml-40">Edit Your Profile</h1>
        <label className="text-gray-700 font-semibold text-sm ">First Name</label>
        <input
          type="text"
          placeholder="Md"
          className="border border-gray-300 p-3 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500"
        />
        <label className="text-gray-700 font-semibold text-sm">Email</label>
        <input
          type="email"
          placeholder="rimell@gmail.com"
          className="border border-gray-300 p-3 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500"
        />
      </div>

      <div className="flex flex-col w-1/2 gap-4 mt-12">
        <label className="text-gray-700 font-semibold text-sm">Last Name</label>
        <input
          type="text"
          placeholder="Rimel"
          className="border border-gray-300 p-3 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500"
        />
        <label className="text-gray-700 font-semibold text-sm">Address</label>
        <input
          type="text"
          placeholder="Kingston, 5237, United States"
          className="border border-gray-300 p-3 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500"
        />
      </div>
    </div>

    {/* Password Change Section */}
    <div className="flex flex-col gap-4 mb-8">
      <h2 className="text-gray-800 font-bold text-base">Password Changes</h2>
      <input
        type="password"
        placeholder="Current Password"
        className="border border-gray-300 p-3 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500"
      />
      <input
        type="password"
        placeholder="New Password"
        className="border border-gray-300 p-3 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500"
      />
      <input
        type="password"
        placeholder="Confirm New Password"
        className="border border-gray-300 p-3 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500"
      />
    </div>

    {/* Buttons Section */}
    <div className="flex justify-between items-center">
      {/* Cancel Button */}
      <button className="bg-gray-300 text-gray-700 px-10 py-3 rounded-lg shadow hover:bg-gray-400 transition-all duration-300">
        Cancel
      </button>
      {/* Save Button */}
      <button className="bg-red-600 text-white px-10 py-3 rounded-lg shadow hover:bg-red-700 transition-all duration-300">
        Save Changes
      </button>
    </div>
  </div>
</div>


        </div>
    )
}