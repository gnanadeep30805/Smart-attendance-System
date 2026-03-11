function Navbar(){

  return(

    <nav className="bg-blue-600 text-white px-8 py-4 flex justify-between items-center">

      <h1 className="text-xl font-bold">
        Smart Attendance
      </h1>

      <div className="flex gap-6">

        <button className="hover:text-gray-200">
          Dashboard
        </button>

        <button className="hover:text-gray-200">
          History
        </button>

        <button className="bg-red-500 px-4 py-1 rounded-lg hover:bg-red-600">
          Logout
        </button>

      </div>

    </nav>

  )
}

export default Navbar