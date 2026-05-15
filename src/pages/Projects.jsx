import { useState, useEffect } from "react";

import Sidebar from "../components/Sidebar";

import {
  FolderKanban,
  Search,
  Plus,
  CalendarDays,
  Trash2,
} from "lucide-react";

export default function Projects() {

  const [projects, setProjects] = useState(() => {

  const savedProjects =
    localStorage.getItem("projects");

  return savedProjects
    ? JSON.parse(savedProjects)
    : [
        {
          name: "Pembangunan Jalur Kereta",
          status: "On Progress",
          progress: "78%",
          deadline: "12 Juni 2026",
        },
        {
          name: "Gudang Material Utama",
          status: "Monitoring",
          progress: "55%",
          deadline: "28 Juli 2026",
        },
        {
          name: "Perawatan Rel Perkotaan",
          status: "Finished",
          progress: "92%",
          deadline: "02 Mei 2026",
        },
      ];
});

  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {

  localStorage.setItem(
    "projects",
    JSON.stringify(projects)
  );

}, [projects]);

  return (
    <div className="flex min-h-screen bg-[#f5f5f5]">

      <Sidebar isOpen={true} setIsOpen={() => {}} />

      <main className="flex-1 p-4 md:p-8">

        {/* TOPBAR */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">

          <div>
            <p className="text-gray-500 uppercase tracking-[4px] text-sm">
              Project Management
            </p>

            <h1 className="text-5xl font-black">
              Monitoring Proyek
            </h1>
          </div>

          <button className="flex items-center gap-2 bg-yellow-400 px-5 py-4 rounded-2xl font-bold hover:scale-105 transition-all">

            <Plus size={20} />

            Tambah Proyek
          </button>
        </div>

        {/* SEARCH */}
<div className="bg-white p-6 rounded-3xl shadow-sm mb-8">

  <h2 className="text-2xl font-black mb-5">
    Tambah Proyek Baru
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

    <input
      type="text"
      placeholder="Nama proyek"
      id="projectName"
      className="border border-gray-200 rounded-2xl px-5 py-4 outline-none"
    />

    <input
      type="text"
      placeholder="Progress"
      id="projectProgress"
      className="border border-gray-200 rounded-2xl px-5 py-4 outline-none"
    />

    <input
      type="text"
      placeholder="Deadline"
      id="projectDeadline"
      className="border border-gray-200 rounded-2xl px-5 py-4 outline-none"
    />
  </div>

  <button
    onClick={() => {

  const newProject = {
    name: document.getElementById("projectName").value,
    progress: document.getElementById("projectProgress").value,
    deadline: document.getElementById("projectDeadline").value,
    status: "On Progress",
  };

  if (editIndex !== null) {

    const updatedProjects = [...projects];

    updatedProjects[editIndex] = newProject;

    setProjects(updatedProjects);

    setEditIndex(null);

  } else {

    setProjects([...projects, newProject]);
  }

  document.getElementById("projectName").value = "";
  document.getElementById("projectProgress").value = "";
  document.getElementById("projectDeadline").value = "";
}}
    className="mt-5 bg-yellow-400 px-6 py-4 rounded-2xl font-bold hover:scale-105 transition-all"
  >
    Simpan Proyek
  </button>
</div>

        {/* PROJECT GRID */}
        <section className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">

          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-[30px] p-6 shadow-sm hover:shadow-xl transition-all duration-300"
            >

              <div className="flex items-center justify-between mb-6">

                <div className="bg-yellow-400 p-4 rounded-2xl">

                  <FolderKanban />
                </div>

                <span className="bg-green-100 text-green-700 px-4 py-2 rounded-xl text-sm font-semibold">
                  {project.status}
                </span>
              </div>

              <h2 className="text-2xl font-black mb-4">
                {project.name}
              </h2>

              <div className="mb-4">

                <div className="flex items-center justify-between mb-2">

                  <span className="text-gray-500">
                    Progress
                  </span>

                  <span className="font-bold">
                    {project.progress}
                  </span>
                </div>

                <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">

                  <div
                    className="h-full bg-yellow-400 rounded-full"
                    style={{
                      width: project.progress,
                    }}
                  />
                </div>
              </div>

              <div className="flex items-center gap-3 text-gray-500 mt-6">

                <CalendarDays size={18} />

                <span>
                  Deadline {project.deadline}
                </span>
              </div>
              <div className="flex gap-3 mt-6">

  <button
    onClick={() => {

      document.getElementById("projectName").value =
        project.name;

      document.getElementById("projectProgress").value =
        project.progress;

      document.getElementById("projectDeadline").value =
        project.deadline;

      setEditIndex(index);
    }}
    className="bg-blue-500 text-white px-5 py-3 rounded-2xl hover:scale-105 transition-all"
  >
    Edit
  </button>

  <button
    onClick={() => {

      const updatedProjects = projects.filter(
        (_, i) => i !== index
      );

      setProjects(updatedProjects);
    }}
    className="bg-red-500 text-white px-5 py-3 rounded-2xl flex items-center gap-2 hover:scale-105 transition-all"
  >
    <Trash2 size={18} />

    Hapus
  </button>

</div>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
}