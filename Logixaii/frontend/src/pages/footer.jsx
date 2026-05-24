


import { Link } from "react-router-dom";
import { Github, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#05010d]">

      {/* Deep Glow */}
      <div className="absolute inset-0 bg-linear-to-b from-[#120a2a] via-[#0b061a] to-black" />
      <div className="absolute -top-48 left-1/2 -translate-x-1/2 w-175 h-175 bg-purple-800/20 blur-[180px]" />
      <div className="absolute bottom-0 right-0 w-125 h-125 bg-pink-800/10 blur-[160px]" />

      {/* Content */}
      <div className="relative z-10 px-6 md:px-12 py-24 max-w-8xl mx-auto">

        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-14 border-b border-white/10 pb-16">

          {/* Brand */}
          <div>
            <h3 className="text-4xl font-extrabold bg-linear-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              🚀 LogixAI
            </h3>
            <p className="mt-6 text-gray-300 leading-relaxed text-base">
              A next-generation AI platform for intelligent conversations, website
              generation, image processing, and automation — built for modern creators
              and developers.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-xl font-semibold text-white mb-6">Product</h4>
            <ul className="space-y-4 text-gray-300 text-base">
              <li><Link to="/chat" className="hover:text-purple-400 transition">AI Chat</Link></li>
              <li><Link to="/website-builder" className="hover:text-purple-400 transition">Website Builder</Link></li>
              <li><Link to="/imageconverter" className="hover:text-purple-400 transition">Image Converter</Link></li>
              <li><Link to="/backgroundremover" className="hover:text-purple-400 transition">Background Remover</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xl font-semibold text-white mb-6">Company</h4>
            <ul className="space-y-4 text-gray-300 text-base">
              <li><Link to="/about" className="hover:text-purple-400 transition">About</Link></li>
              <li><Link to="/features" className="hover:text-purple-400 transition">Features</Link></li>
              <li><Link to="/contact" className="hover:text-purple-400 transition">Contact</Link></li>
              <li><Link to="/privacy" className="hover:text-purple-400 transition">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-xl font-semibold text-white mb-6">Connect</h4>

            <div className="flex gap-5">
              {[
                { icon: <Github size={22} />, link: "https://github.com/ayushi48" },
                { icon: <Linkedin size={22} />, link: "https://www.linkedin.com/in/ayushi-kumari48/" },
                { icon: <Instagram size={22} />, link: "#" },
              ].map((item, i) => (
                <a
                  key={i}
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  className="
                    p-4 rounded-xl
                    bg-white/5 border border-white/10
                    text-gray-300
                    hover:text-white
                    hover:bg-white/10
                    hover:shadow-[0_0_30px_rgba(236,72,153,0.45)]
                    hover:scale-110
                    transition-all duration-300
                  "
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-2 flex flex-col md:flex-row justify-between items-center text-gray-400 text-base">
          <p>© {new Date().getFullYear()} LogixAI. All rights reserved.</p>
          <p className="mt-4 md:mt-0">
            Crafted with ❤️ using MERN STACK & AI
          </p>
        </div>

      </div>
    </footer>
  );
}
