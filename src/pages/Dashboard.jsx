import { FiCopy, FiDownload } from "react-icons/fi";
import { 
  FiMessageSquare, 
  FiBarChart2, 
  FiImage, 
  FiCpu, 
  FiClock, 
  FiSave 
} from "react-icons/fi";

export default function Dashboard() {
  const codeSnippet = `curl "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=YOUR_API_KEY" \\
  -H 'Content-Type: application/json' \\
  -X POST \\
  -d '{
    "contents": [
      {
        "parts": [
          {
            "text": "Explain how AI works in a few words"
          }
        ]
      }
    ]
  }'`;

  // function to copy 
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(codeSnippet);
      alert("Code copied to clipboard!");
    } catch (err) {
      alert("Failed to copy code.");
    }
  };

  // function to download 

  const handleDownload = () => {
    const blob = new Blob([codeSnippet], { type: "text/plain" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "api-request.sh";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const menuItems = [
    { icon: <FiMessageSquare />, label: "Chat", active: true },
    { icon: <FiBarChart2 />, label: "Stream" },
    { icon: <FiImage />, label: "Generate Media" },
    { icon: <FiCpu />, label: "Build" },
    { icon: <FiClock />, label: "History" },
    { icon: <FiSave />, label: "Enable saving" },
  ];

  return (
    <div className="flex flex-1">
      {/* sidebar */}
      
      <div className="w-64 h-full bg-[#0d0d0d] text-gray-300 px-4 py-6 border-r border-gray-800">
        <div className="flex flex-col gap-2">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className={`flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer hover:bg-[#1a1a1a] ${
                item.active ? "bg-[#2a2a2a] text-white font-medium" : ""
              }`}
            >
              <span className="text-xl">{item.icon}</span>
              <span className="text-sm">{item.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 px-10 py-6 bg-[#0d0d0d] text-white overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-3xl font-medium mb-1">API Keys</h2>
            <p className="text-gray-400">Quickly test the Gemini API</p>
          </div>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full text-sm font-medium">
            + Create API key
          </button>
        </div>

        <a
          href="https://developers.generativeai.google/api/rest/generativelanguage/models/generateContent"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 underline mb-4 inline-block"
        >
          API quickstart guide
        </a>

        {/* Code Block */}
        <div className="bg-[#1f1f1f] p-4 rounded-xl font-mono text-sm overflow-x-auto mb-4">
          <pre className="text-white whitespace-pre-wrap">{codeSnippet}</pre>
        </div>

        {/* Code Controls */}
        <div className="flex gap-4 text-sm text-gray-300">
          <button
            onClick={handleCopy}
            className="flex items-center gap-2 hover:text-white"
          >
            <FiCopy />
            Copy
          </button>
          <button
            onClick={handleDownload}
            className="flex items-center gap-2 hover:text-white"
          >
            <FiDownload />
            Download
          </button>
        </div>
      </div>
    </div>
  );
}