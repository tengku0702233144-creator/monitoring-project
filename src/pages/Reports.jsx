import Sidebar from "../components/Sidebar";
import { FileText, Download } from "lucide-react";

export default function Reports() {

  const reports = [
    "Laporan Proyek Bulanan",
    "Laporan Gudang Material",
    "Laporan Absensi Karyawan",
  ];

  return (
    <div className="flex min-h-screen bg-[#f5f5f5]">

      <Sidebar isOpen={true} setIsOpen={() => {}} />

      <main className="flex-1 p-4 md:p-8">

        <div className="mb-8">

          <p className="uppercase tracking-[4px] text-gray-500 text-sm">
            Reporting System
          </p>

          <h1 className="text-5xl font-black">
            Laporan Monitoring
          </h1>
        </div>

        <section className="space-y-6">

          {reports.map((report, index) => (
            <div
              key={index}
              className="bg-white rounded-[30px] p-6 shadow-sm flex items-center justify-between"
            >

              <div className="flex items-center gap-5">

                <div className="bg-yellow-400 p-4 rounded-2xl">

                  <FileText />
                </div>

                <h2 className="text-2xl font-black">
                  {report}
                </h2>
              </div>

              <button className="bg-black text-white px-5 py-3 rounded-2xl flex items-center gap-2">

                <Download size={18} />

                Download
              </button>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
}