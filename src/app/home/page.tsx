"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { LuKeyboard, LuPlus } from "react-icons/lu";
import { useRouter } from "next/navigation";
import Navbar from "@/components/ui/Navbar";
export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("home");
  const router=useRouter();
  return (
    <div className="star-background bg-black min-h-screen flex flex-col relative text-white">
      {/* Navbar */}
      <Navbar />
      {/* Main Container */}
      <div className="relative flex flex-col md:flex-row items-center justify-center flex-1 p-10 gap-12 overflow-hidden">
        {/* Large Dotted Circle (Top Left) - Hidden on Small Screens */}
        <div className="hidden sm:block absolute top-[-100px] left-[-100px] w-96 h-96 border-8 border-dashed border-[#f1a650] rounded-full blur"></div>

        {/* Small Solid Circle (Top Right) - Hidden on Small Screens */}
        <div className="hidden sm:block absolute top-10 right-[-30px] w-16 h-16 border border-[#F97316] rounded-full"></div>

        {/* Transparent Card */}
        <div className="w-full max-w-md bg-transparent p-8 text-center relative z-10">
          <div className="flex justify-between items-center mb-4 border-b border-[#f1a650] pb-3">
            <input
              className="w-full bg-transparent text-[#f1a650] placeholder-[#f1a650] focus:outline-none text-lg"
              placeholder="Enter meeting code or link"
            />
            {/* Keyboard Icon */}
            <button className="text-[#f1a650]">
              <LuKeyboard size={28} />
            </button>
          </div>

          {/* Buttons Container */}
          <div className="flex flex-col items-center gap-5 mt-8">
            <button className="w-4/5 bg-[#F97316] py-3 hover:bg-orange-500 rounded-md text-black text-lg">
              Join
            </button>
            <button className="w-4/5 py-3 border border-[#F97316] rounded-md text-[#F97316] hover:bg-[#F97316] hover:text-black flex items-center justify-center gap-3 text-lg">
              <LuPlus size={22} />
              Create A Meet
            </button>
          </div>
        </div>

        {/* Illustration (Hidden on small screens) */}
        <Image
          src="/Connected world-cuate 2.png"
          alt="Connected World"
          width={450}
          height={450}
          className="hidden sm:block relative z-10"
        />

        {/* Blur Circle (Bottom Right) - Hidden on Small Screens */}
        <div className="hidden sm:block absolute bottom-[-100px] right-[-100px] w-60 h-60 bg-[#f9731660] rounded-full blur-3xl"></div>
      </div>
    </div>
  );
}
