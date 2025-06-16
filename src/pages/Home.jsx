// icon imports
import {
    FiMessageSquare,
    FiBarChart2,
    FiImage,
    FiCpu,
    FiSave,
    FiCopy, 
    FiCode,
    FiShare2,
    FiRefreshCw,
    FiMoreVertical
} from "react-icons/fi";

// image imports 

import audioDialogImg from "../assets/audio-dialog.jpg";
import coDevelopImg from "../assets/co-develop.jpg";
import imageGenerationImg from "../assets/image-generation.jpg";
import speechGenerationImg from "../assets/speech-generation.jpg";


const whatsNewItems = [
    {
        title: "Native search generation",
        desc: "Generate high quality text to speech with Gemini",
        img: speechGenerationImg,
    },
    {
        title: "Use audio-to-audio dialog",
        desc: "Try Gemini's manual, real-time dialog with audio and video inputs",
        img: audioDialogImg,
    },
    {
        title: "Native image generation",
        desc: "Introduce text and image generation with the new Gemini 2.0 Flash",
        img: imageGenerationImg,
    },
    {
        title: "Explore and co-develop apps",
        desc: "Add control functions with interactive, open source examples",
        img: coDevelopImg,
    }
]

export default function Home() {
    const menuItems = [
        { icon: <FiMessageSquare />, label: "Chat Prompt", active: true },
        { icon: <FiBarChart2 />, label: "Stream" },
        { icon: <FiImage />, label: "Generate Media" },
        { icon: <FiCpu />, label: "Build" },
        { icon: <FiCpu />, label: "Helping" },
    ];

    return (
        <div className="flex flex-1">
            {/* Sidebar */}
            <aside className="w-64 h-full bg-[#0d0d0d] text-gray-300 px-4 py-6 border-r border-gray-800 flex flex-col justify-between">
                <div>

                    {/* Menu Items */}
                    <div className="flex flex-col gap-2 mb-8">
                        {menuItems.map((item, index) => (
                            <div
                                key={index}
                                className={`flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer hover:bg-[#1a1a1a] ${item.active ? "bg-[#2a2a2a] text-white font-medium" : ""
                                    }`}
                            >
                                <span className="text-xl">{item.icon}</span>
                                <span className="text-sm">{item.label}</span>
                            </div>
                        ))}
                    </div>

                    {/* Enable Saving */}
                    <div className="flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer hover:bg-[#1a1a1a]">
                        <span className="text-xl"><FiSave /></span>
                        <span className="text-sm">Enable saving</span>
                    </div>
                </div>

                {/* Footer */}
                <p className="text-xs text-gray-500 px-2">
                    The results are based on any web available provided or not. <a href="#" className="text-blue-400 underline hover:text-blue-300">Learn more.</a>
                </p>
            </aside>

            {/* Main Content */}
            <div className="flex-1 px-10 py-6 bg-[#000000] text-white overflow-y-auto">
                {/*  Chat Header*/}
                <div className="w-full px-4 py-2 flex justify-between items-center bg-[#1c1c1c] rounded-t-2xl rounded-b-2xl mb-2">
                    <h2 className="text-white text-lg font-semibold">Chat Prompt</h2>
                    <div className="flex items-center gap-4 text-gray-300 text-lg">
                        <button title="Copy" className="hover:text-white">
                            <FiCopy /> 
                        </button>
                        <button title="View Code" className="hover:text-white">
                            <FiCode />
                        </button>
                        <button title="Share" className="hover:text-white">
                            <FiShare2 /> 
                        </button>
                        <button title="Save" className="hover:text-white">
                            <FiSave /> 
                        </button>
                        <button title="Refresh" className="hover:text-white">
                            <FiRefreshCw /> 
                        </button>
                        <button title="More Options" className="hover:text-white">
                            <FiMoreVertical /> 
                        </button>
                    </div>
                </div>

                <h2 className="text-3xl font-medium text-center text-white mb-6">
                    Welcome to <span className="text-blue-500">AI Studio</span>
                </h2>

                <div className="flex items-center justify-center mb-8">
                    <div className="bg-[#1e1e1e] rounded-full px-6 py-3 text-gray-300 w-[600px] flex items-center justify-between">
                        <input
                            type="text"
                            placeholder="Create a detailed description of an alien planet"
                            className="bg-transparent outline-none flex-1 text-white placeholder-gray-400"
                        />
                        <button className="bg-[#333] px-4 py-1 rounded-full text-sm font-medium ml-2">
                            Run Ctrl ↵
                        </button>
                    </div>
                </div>

                {/* What's New Section */}

                <h3 className="text-lg mb-4">What's new</h3>
                <div className="grid grid-cols-2 gap-4">
                    {whatsNewItems.map((item, i) => (
                        <div key={i} className="bg-[#1f1f1f] p-4 rounded-2xl flex gap-4 items-start">
                            <img src={item.img} alt={item.title} className="w-14 h-14 object-cover rounded-xl" />
                            <div>
                                <h4 className="font-semibold text-white">{item.title}</h4>
                                <p className="text-sm text-gray-400">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

