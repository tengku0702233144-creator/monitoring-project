import {
  Menu,
  Moon,
  Sun,
  Bell,
  Settings,
  FolderKanban,
  Package,
  Users,
  Wallet,
  Search,
  Activity,
  TriangleAlert,
  BarChart3,
} from "lucide-react";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AnalyticsChart from "../components/AnalyticsChart";
import Sidebar from "../components/Sidebar";

export default function Dashboard() {
    const [isOpen, setIsOpen] = useState(false);
    const [darkMode, setDarkMode] = useState(false);
    const navigate = useNavigate();
    const stats = [
    {
      title: "Total Proyek",
      value: "12",
      desc: "3 proyek aktif bulan ini",
      icon: <FolderKanban size={28} />,
    },
    {
      title: "Stok Gudang",
      value: "1.248",
      desc: "Monitoring barang realtime",
      icon: <Package size={28} />,
    },
    {
      title: "Karyawan Hadir",
      value: "86%",
      desc: "Absensi hari ini",
      icon: <Users size={28} />,
    },
    {
      title: "Arus Kas",
      value: "Rp 248JT",
      desc: "Pembukuan terbaru",
      icon: <Wallet size={28} />,
    },
  ];

  const projects = [
    {
      name: "Pembangunan Jalur Kereta",
      progress: "78%",
      status: "On Progress",
    },
    {
      name: "Gudang Material Utama",
      progress: "55%",
      status: "Monitoring",
    },
    {
      name: "Perawatan Rel Perkota",
      progress: "92%",
      status: "Finished",
    },
  ];

  const activities = [
    "Mandor upload progress proyek",
    "Barang masuk gudang utama",
    "Karyawan melakukan absensi",
    "Pembukuan arus kas diperbarui",
  ];

  return (
  <div
  className={`flex min-h-screen w-screen overflow-hidden transition-all duration-300 ${
    darkMode
      ? "bg-[#0f0f0f] text-white"
      : "bg-[#f5f5f5] text-black"
  }`}
>

    <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />

            {/* MAIN */}
      <main className="flex-1 p-4 md:p-8 overflow-x-hidden w-full">


        {/* TOPBAR */}
        <div className="flex items-center justify-between mb-8">

          <div className="flex items-center gap-4 bg-white px-5 py-3 rounded-2xl shadow-sm w-[420px]">

            <Search size={20} />

            <input
              type="text"
              placeholder="Cari proyek atau data monitoring..."
              className="outline-none w-full bg-transparent"
            />
          </div>

          <div className="flex items-center gap-5">

            <button
  className="lg:hidden bg-white p-4 rounded-2xl shadow-sm"
  onClick={() => setIsOpen(true)}
>
  <Menu />
</button>

<button
  className="bg-white p-4 rounded-2xl shadow-sm hover:scale-105 transition-all"
  onClick={() => setDarkMode(!darkMode)}
>
  {darkMode ? <Sun /> : <Moon />}
</button>

<button className="bg-white p-4 rounded-2xl shadow-sm hover:scale-105 transition-all">
  <Bell />
</button>

<button className="bg-white p-4 rounded-2xl shadow-sm hover:scale-105 transition-all">
  <Settings />
</button>

<button
  onClick={() => {

    localStorage.removeItem("isLoggedIn");

    navigate("/login");
  }}
  className="bg-red-500 text-white px-5 py-4 rounded-2xl font-bold hover:scale-105 transition-all"
>
  Logout
</button>

            <div className="flex items-center gap-3 bg-white px-4 py-2 rounded-2xl shadow-sm">

              <img
                src="https://i.pravatar.cc/100"
                alt="admin"
                className="w-12 h-12 rounded-full"
              />

              <div>
                <p className="font-bold">
                  Admin Utama
                </p>

                <p className="text-sm text-gray-500">
                  Project Manager
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* HERO */}
        <section className="bg-gradient-to-r from-yellow-400 to-orange-500 rounded-[40px] p-10 text-black shadow-xl mb-8 flex justify-between items-center gap-10 flex-wrap">

          <div className="max-w-[700px]">

            <p className="tracking-[6px] uppercase font-semibold mb-4">
              Sistem Informasi Monitoring
            </p>

            <h1 className="text-6xl font-black leading-tight mb-6">
              Dashboard Monitoring
              <br />
              Proyek & Gudang
            </h1>

            <p className="text-xl leading-relaxed">
              Sistem terintegrasi untuk monitoring proyek,
              absensi karyawan, kontrol stok barang,
              dan pembukuan arus kas secara realtime.
            </p>
          </div>

          <div className="bg-[#ffffff30] backdrop-blur-md p-8 rounded-[30px] border border-white/30 min-w-[320px]">

            <h2 className="text-3xl font-black mb-8">
              Quick Monitoring
            </h2>

            {[
              ["Progress Proyek", "78%"],
              ["Absensi Karyawan", "86%"],
              ["Kontrol Gudang", "92%"],
            ].map((item, index) => (
              <div key={index} className="mb-6">

                <div className="flex justify-between mb-2 font-semibold">
                  <span>{item[0]}</span>
                  <span>{item[1]}</span>
                </div>

                <div className="w-full h-4 bg-white/50 rounded-full overflow-hidden">

                  <div
                    className="h-full bg-black rounded-full"
                    style={{ width: item[1] }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* STATS */}
        <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">

          {stats.map((item, index) => (
            <div
              key={index}
              className="bg-white p-7 rounded-[30px] shadow-sm hover:-translate-y-1 transition-all duration-300"
            >

              <div className="flex justify-between items-center mb-5">

                <div>
                  <p className="text-gray-500">
                    {item.title}
                  </p>

                  <h2 className="text-5xl font-black mt-3">
                    {item.value}
                  </h2>
                </div>

                <div className="bg-yellow-400 text-black p-4 rounded-2xl">
                  {item.icon}
                </div>
              </div>

              <p className="text-gray-400">
                {item.desc}
              </p>
            </div>
          ))}
        </section>
                {/* CONTENT */}
        <section className="grid grid-cols-1 xl:grid-cols-3 gap-6 mb-8">

          {/* TABLE */}
          <div className="xl:col-span-2 bg-white rounded-[35px] p-8 shadow-sm">

            <div className="flex justify-between items-center mb-8 flex-wrap gap-4">

              <div>
                <p className="uppercase text-sm tracking-[3px] text-gray-500">
                  Monitoring
                </p>

                <h2 className="text-4xl font-black mt-2">
                  Data Proyek
                </h2>
              </div>

              <button className="bg-yellow-400 px-6 py-3 rounded-2xl font-bold hover:scale-105 transition-all">
                Export Laporan
              </button>
            </div>

            <div className="overflow-auto">

              <table className="w-full min-w-[600px]">

                <thead>
                  <tr className="bg-[#121212] text-white text-left">

                    <th className="p-5 rounded-l-2xl">
                      Nama Proyek
                    </th>

                    <th className="p-5">
                      Progress
                    </th>

                    <th className="p-5 rounded-r-2xl">
                      Status
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {projects.map((item, index) => (
                    <tr
                      key={index}
                      className="border-b border-gray-100"
                    >

                      <td className="p-5 font-semibold">
                        {item.name}
                      </td>

                      <td className="p-5">
                        {item.progress}
                      </td>

                      <td className="p-5">

                        <span className="bg-yellow-100 text-yellow-700 px-4 py-2 rounded-xl text-sm font-bold">
                          {item.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* ACTIVITY */}
          <div className="bg-[#121212] text-white rounded-[35px] p-8 shadow-xl">

            <div className="flex items-center gap-4 mb-8">

              <div className="bg-yellow-400 text-black p-4 rounded-2xl">
                <Activity size={30} />
              </div>

              <div>
                <p className="uppercase tracking-[3px] text-gray-400 text-sm">
                  Realtime
                </p>

                <h2 className="text-4xl font-black">
                  Aktivitas
                </h2>
              </div>
            </div>

            <div className="space-y-5">

              {activities.map((item, index) => (
                <div
                  key={index}
                  className="bg-[#1f1f1f] p-5 rounded-2xl border border-gray-800"
                >

                  <div className="flex items-start gap-4">

                    <div className="bg-yellow-400 p-2 rounded-xl text-black">
                      <Bell size={18} />
                    </div>

                    <div>

                      <p className="font-semibold leading-relaxed">
                        {item}
                      </p>

                      <p className="text-gray-500 text-sm mt-1">
                        Baru saja diperbarui
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
                {/* BOTTOM */}
        <section className="grid grid-cols-1 xl:grid-cols-2 gap-6">

          {/* PROBLEM */}
          <div className="bg-white rounded-[35px] p-8 shadow-sm">

            <div className="flex items-center gap-4 mb-6">

              <div className="bg-yellow-400 p-4 rounded-2xl">
                <TriangleAlert size={28} />
              </div>

              <div>

                <p className="uppercase tracking-[3px] text-gray-500 text-sm">
                  Permasalahan
                </p>

                <h2 className="text-4xl font-black">
                  Kondisi Saat Ini
                </h2>
              </div>
            </div>

            <div className="space-y-4 mt-8">

              {[
                "Tidak terintegrasi antar bagian",
                "Data tersebar Excel & WhatsApp",
                "Sulit kontrol stok barang",
                "Monitoring belum realtime",
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-gray-100 p-5 rounded-2xl font-medium"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* SOLUTION */}
          <div className="bg-[#121212] text-white rounded-[35px] p-8 shadow-xl">

            <div className="flex items-center gap-4 mb-6">

              <div className="bg-yellow-400 text-black p-4 rounded-2xl">
                <BarChart3 size={28} />
              </div>

              <div>

                <p className="uppercase tracking-[3px] text-gray-400 text-sm">
                  Solusi Utama
                </p>

                <h2 className="text-4xl font-black">
                  Sistem Integrasi
                </h2>
              </div>
            </div>

            <div className="space-y-4 mt-8">

              {[
                "Monitoring proyek realtime",
                "Sistem absensi digital",
                "Kontrol stok gudang",
                "Integrasi seluruh data perusahaan",
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-[#1f1f1f] border border-gray-800 p-5 rounded-2xl"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
                </section>

        <div className="mt-8">
          <AnalyticsChart />
        </div>

      </main>
    </div>
  );
}