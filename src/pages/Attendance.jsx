import Sidebar from "../components/Sidebar";
import { Users, Clock3 } from "lucide-react";

export default function Attendance() {

  const employees = [
    {
      name: "Andi Saputra",
      status: "Hadir",
      time: "07:45",
    },
    {
      name: "Budi Hartono",
      status: "Izin",
      time: "-",
    },
    {
      name: "Rizky Pratama",
      status: "Hadir",
      time: "07:58",
    },
  ];

  return (
    <div className="flex min-h-screen bg-[#f5f5f5]">

      <Sidebar isOpen={true} setIsOpen={() => {}} />

      <main className="flex-1 p-4 md:p-8">

        <div className="mb-8">

          <p className="uppercase tracking-[4px] text-gray-500 text-sm">
            Employee Attendance
          </p>

          <h1 className="text-5xl font-black">
            Absensi Karyawan
          </h1>
        </div>

        <section className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">

          {employees.map((employee, index) => (
            <div
              key={index}
              className="bg-white rounded-[30px] p-6 shadow-sm"
            >

              <div className="bg-yellow-400 w-fit p-4 rounded-2xl mb-6">

                <Users />
              </div>

              <h2 className="text-3xl font-black mb-4">
                {employee.name}
              </h2>

              <div className="flex items-center gap-3 text-gray-500 mb-4">

                <Clock3 size={18} />

                <span>
                  Jam Masuk: {employee.time}
                </span>
              </div>

              <span className="bg-green-100 text-green-700 px-4 py-2 rounded-xl text-sm font-bold">
                {employee.status}
              </span>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
}