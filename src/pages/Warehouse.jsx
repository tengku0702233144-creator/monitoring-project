import Sidebar from "../components/Sidebar";
import { Package, Search, Boxes } from "lucide-react";

export default function Warehouse() {

  const items = [
    {
      name: "Besi Baja",
      stock: "248 Unit",
      status: "Available",
    },
    {
      name: "Semen Cor",
      stock: "120 Sak",
      status: "Low Stock",
    },
    {
      name: "Kabel Industri",
      stock: "520 Meter",
      status: "Available",
    },
  ];

  return (
    <div className="flex min-h-screen bg-[#f5f5f5]">

      <Sidebar isOpen={true} setIsOpen={() => {}} />

      <main className="flex-1 p-4 md:p-8">

        <div className="mb-8">

          <p className="uppercase tracking-[4px] text-gray-500 text-sm">
            Warehouse Monitoring
          </p>

          <h1 className="text-5xl font-black">
            Gudang Material
          </h1>
        </div>

        <div className="bg-white rounded-3xl p-5 shadow-sm flex items-center gap-4 mb-8">

          <Search />

          <input
            type="text"
            placeholder="Cari barang..."
            className="outline-none w-full"
          />
        </div>

        <section className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">

          {items.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-[30px] p-6 shadow-sm"
            >

              <div className="bg-yellow-400 w-fit p-4 rounded-2xl mb-6">

                <Package />
              </div>

              <h2 className="text-3xl font-black mb-3">
                {item.name}
              </h2>

              <p className="text-gray-500 mb-4">
                Stok: {item.stock}
              </p>

              <span className="bg-green-100 text-green-700 px-4 py-2 rounded-xl text-sm font-bold">
                {item.status}
              </span>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
}