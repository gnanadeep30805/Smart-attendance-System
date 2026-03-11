function Sidebar(){

  return(

    <div className="w-64 h-screen bg-gray-900 text-white p-6">

      <h2 className="text-2xl font-bold mb-8">
        Menu
      </h2>

      <ul className="space-y-5">

        <li className="hover:text-gray-300 cursor-pointer">
          Dashboard
        </li>

        <li className="hover:text-gray-300 cursor-pointer">
          Mark Attendance
        </li>

        <li className="hover:text-gray-300 cursor-pointer">
          Attendance History
        </li>

      </ul>

    </div>

  )
}

export default Sidebar