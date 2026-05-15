import { motion } from "framer-motion";
import { Lock, Mail } from "lucide-react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const navigate = useNavigate();
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0f0f0f] p-6">

      {/* CARD */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md bg-white/10 backdrop-blur-xl border border-white/10 rounded-[40px] p-10 text-white shadow-2xl"
      >

        {/* HEADER */}
        <div className="text-center mb-10">

          <h1 className="text-5xl font-black text-yellow-400">
            PT SA'ADAH DINAR
          </h1>

          <p className="text-gray-400 mt-3">
            Monitoring System Login
          </p>
        </div>

        {/* EMAIL */}
        <div className="mb-6">

          <label className="block mb-3 text-sm text-gray-400">
            Email
          </label>

          <div className="flex items-center gap-3 bg-[#1a1a1a] border border-gray-800 rounded-2xl px-5 py-4">

            <Mail size={20} />

            <input
              type="email"
              placeholder="admin@sog.com"
              className="bg-transparent outline-none w-full"
            />
          </div>
        </div>

        {/* PASSWORD */}
        <div className="mb-8">

          <label className="block mb-3 text-sm text-gray-400">
            Password
          </label>

          <div className="flex items-center gap-3 bg-[#1a1a1a] border border-gray-800 rounded-2xl px-5 py-4">

            <Lock size={20} />

            <input
              type="password"
              placeholder="••••••••"
              className="bg-transparent outline-none w-full"
            />
          </div>
        </div>

        {/* BUTTON */}
<button
  onClick={() => {

    localStorage.setItem("isLoggedIn", "true");
    
    toast.success("Login berhasil");

    setTimeout(() => {
      navigate("/");
    }, 1000);
  }}
  className="w-full bg-yellow-400 text-black py-4 rounded-2xl font-bold hover:scale-105 transition-all duration-300"
>
  Masuk Dashboard
</button>

        {/* FOOTER */}
        <p className="text-center text-gray-500 text-sm mt-8">
          Secure Enterprise Monitoring System
        </p>
      </motion.div>
    </div>
  );
}