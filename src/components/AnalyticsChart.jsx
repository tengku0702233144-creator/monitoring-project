import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  Tooltip,
} from "recharts";

export default function AnalyticsChart() {

  const data = [
    { month: "Jan", proyek: 30 },
    { month: "Feb", proyek: 45 },
    { month: "Mar", proyek: 40 },
    { month: "Apr", proyek: 70 },
    { month: "Mei", proyek: 90 },
    { month: "Jun", proyek: 120 },
  ];

  return (
    <div className="bg-white rounded-[30px] p-6 shadow-sm">

      <div className="flex items-center justify-between mb-6">

        <div>
          <p className="text-sm text-gray-400 uppercase tracking-widest">
            Analytics
          </p>

          <h2 className="text-3xl font-black">
            Progress Monitoring
          </h2>
        </div>

        <div className="bg-yellow-400 text-black px-4 py-2 rounded-2xl font-bold">
          2026
        </div>
      </div>

      <div className="h-[300px]">

        <ResponsiveContainer width="100%" height="100%">

          <AreaChart data={data}>

            <XAxis dataKey="month" />

            <Tooltip />

            <Area
              type="monotone"
              dataKey="proyek"
              stroke="#facc15"
              fill="#facc15"
              fillOpacity={0.3}
              strokeWidth={4}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}