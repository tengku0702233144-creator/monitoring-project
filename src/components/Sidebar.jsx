import {
  House,
  HardHat,
  Boxes,
  Users,
  FileText,
  Settings,
  X,
} from "lucide-react";

import { NavLink } from "react-router-dom";

export default function Sidebar({ isOpen, setIsOpen }) {

  const menus = [
    {
      name: "Dashboard",
      path: "/",
      icon: <House size={20} />,
    },
    {
      name: "Proyek",
      path: "/projects",
      icon: <HardHat size={20} />,
    },
    {
      name: "Gudang",
      path: "/warehouse",
      icon: <Boxes size={20} />,
    },
    {
      name: "Absensi",
      path: "/attendance",
      icon: <Users size={20} />,
    },
    {
      name: "Laporan",
      path: "/reports",
      icon: <FileText size={20} />,
    },
    {
      name: "Pengaturan",
      path: "/settings",
      icon: <Settings size={20} />,
    },
  ];

  return (
    <>
      {/* OVERLAY MOBILE */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* SIDEBAR */}
      <aside
        className={`
          fixed lg:static top-0 left-0 z-50
          h-screen w-[280px]
          bg-[#121212] text-white p-6
          flex flex-col justify-between
          transition-transform duration-300
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          lg:translate-x-0
        `}
      >

        <div>

          {/* HEADER */}
          <div className="flex items-center justify-between mb-10">

            <div>
              <h1 className="text-4xl font-black text-yellow-400">
                PT. SA'ADAH DINAR
              </h1>

              <p className="text-gray-400 text-sm mt-1">
                Monitoring System
              </p>
            </div>

            <button
              className="lg:hidden"
              onClick={() => setIsOpen(false)}
            >
              <X />
            </button>
          </div>

          {/* MENU */}
          <nav className="space-y-4">

            {menus.map((menu, index) => (
              <NavLink
                key={index}
                to={menu.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `flex items-center gap-4 px-5 py-4 rounded-2xl transition-all duration-300 font-medium ${
                    isActive
                      ? "bg-yellow-400 text-black"
                      : "bg-[#1f1f1f] hover:bg-yellow-400 hover:text-black"
                  }`
                }
              >
                {menu.icon}

                <span>
                  {menu.name}
                </span>
              </NavLink>
            ))}
          </nav>
        </div>

        {/* STATUS */}
        <div className="bg-[#1f1f1f] p-5 rounded-3xl border border-gray-800">

          <p className="text-sm text-gray-400 mb-2">
            System Status
          </p>

          <div className="flex items-center gap-2">

            <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>

            <span className="font-semibold">
              Realtime Active
            </span>
          </div>
        </div>
      </aside>
    </>
  );
}