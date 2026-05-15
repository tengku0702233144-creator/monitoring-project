import Sidebar from "../components/Sidebar";
import { Settings, Shield, UserCog } from "lucide-react";

export default function SettingsPage() {
  return (
    <div className="flex min-h-screen bg-[#f5f5f5]">

      <Sidebar isOpen={true} setIsOpen={() => {}} />

      <main className="flex-1 p-4 md:p-8">

        <div className="mb-8">

          <p className="uppercase tracking-[4px] text-gray-500 text-sm">
            System Settings
          </p>

          <h1 className="text-5xl font-black">
            Pengaturan Sistem
          </h1>
        </div>

        <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          <div className="bg-white rounded-[30px] p-8 shadow-sm">

            <div className="bg-yellow-400 w-fit p-4 rounded-2xl mb-6">

              <UserCog />
            </div>

            <h2 className="text-3xl font-black mb-4">
              Pengaturan Akun
            </h2>

            <p className="text-gray-500">
              Kelola informasi akun administrator dan akses user.
            </p>
          </div>

          <div className="bg-white rounded-[30px] p-8 shadow-sm">

            <div className="bg-yellow-400 w-fit p-4 rounded-2xl mb-6">

              <Shield />
            </div>

            <h2 className="text-3xl font-black mb-4">
              Keamanan Sistem
            </h2>

            <p className="text-gray-500">
              Atur keamanan aplikasi dan monitoring akses sistem.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}