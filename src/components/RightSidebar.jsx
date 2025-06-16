import { FiSliders, FiGrid } from "react-icons/fi";

export default function RightSidebar() {
  return (
    <aside className="w-16 h-full bg-[#0d0d0d] border-l border-gray-800 flex flex-col items-center py-6 space-y-8 text-gray-300">
      <FiSliders className="text-xl hover:text-white cursor-pointer" />
      <FiGrid className="text-xl hover:text-white cursor-pointer" />
    </aside>
  );
}