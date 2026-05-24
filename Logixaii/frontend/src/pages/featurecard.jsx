

import { useNavigate } from "react-router-dom";

export default function FeatureCards() {
  const navigate = useNavigate();

  // 🔐 Replace with real auth state later
  const isLoggedIn = false;

  const features = [
    {
      title: "LogixAI Chat",
      description:
        "Advanced AI conversational assistant similar to ChatGPT, capable of understanding context, answering technical queries, and assisting users across learning, development, and productivity tasks.",
      tags: ["AI", "Chat", "React", "LLM"],
      route: "/chat",
      image: "/chat.jpeg",
       codeUrl: "https://github.com/ayushi48",
    },
    {
      title: "AI Website Builder",
      description:
        "Automatically generates complete, responsive websites using AI. Converts user prompts into clean HTML, CSS, and React components with modern UI/UX standards.",
      tags: ["React", "Website", "AI", "Automation"],
      route: "/website-builder",
      image: "/web.jpeg",
        codeUrl: "https://github.com/ayushi48",
    },
    {
      title: "AI Image Converter",
      description:
        "High-performance image conversion system supporting PNG, JPG, JPEG, WEBP, and AVIF formats with optimized quality and compression.",
      tags: ["Image Processing", "Format Conversion", "Optimization", "Performance"],
      route: "/imageconverter",
      image: "/img.jpeg",
        codeUrl: "https://github.com/ayushi48",
    },
    {
      title: "AI Background Remover",
      description:
        "AI-powered background removal using computer vision to precisely detect subjects and generate clean cutouts for design, e-commerce, and content creation.",
      tags: ["Computer Vision", "Image Segmentation", "Deep Learning", "Design"],
      route: "/backgroundremover",
      image: "/bg.jpeg",
        codeUrl: "https://github.com/ayushi48",
    },
  ];


  const handleCodeClick = (url) => {
  window.open(url, "_blank", "noopener,noreferrer");
};


  const handleLiveDemo = (route) => {
    if (isLoggedIn) {
      navigate(route);
    } else {
      navigate("/login");
    }
  };

  return (
    <section className="px-6 md:px-12 py-24 ">
      <div className="max-w-8xl mx-auto ">

        {/* Heading */}
        <h2 className="text-center text-4xl md:text-5xl font-extrabold mb-16">
          <span className="bg-linear-to-r from-fuchsia-400 via-purple-400 to-pink-500 bg-clip-text text-transparent">
            LogixAI Core Features
          </span>
        </h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 h-full">
          {features.map((item, index) => (
            <div
              key={index}
              className="
                relative rounded-3xl p-8
                bg-white/5 backdrop-blur-2xl
                border border-white/10
                shadow-[0_0_40px_rgba(168,85,247,0.15)]
                transition-all duration-500
                hover:-translate-y-2
                hover:shadow-[0_0_60px_rgba(236,72,153,0.35)]
              "
            >
              {/* Glow border */}
              <div className="absolute inset-0 rounded-3xl bg-linear-to-r from-purple-500/20 via-pink-500/20 to-fuchsia-500/20 blur-xl opacity-0 hover:opacity-100 transition" />

              {/* Content */}
              <div className="relative z-10">
                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-4">
                  {item.title}
                </h3>

                {/* Image */}
                <div className="mb-6 overflow-hidden rounded-2xl border border-white/10">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-[75%] object-cover hover:scale-105 transition duration-500"
                  />
                </div>

                {/* Description */}
                <p className="text-gray-300 leading-relaxed mb-6">
                  {item.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-3 mb-8">
                  {item.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="
                        px-4 py-1 text-sm rounded-full
                        bg-purple-500/10 text-purple-300
                        border border-purple-400/20
                      "
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-4">
                  <button
                    onClick={() => handleLiveDemo(item.route)}
                    className="
                      px-6 py-3 rounded-xl font-semibold text-white
                      bg-linear-to-r from-purple-500 via-fuchsia-500 to-pink-500
                      hover:scale-105 transition-all
                      shadow-lg shadow-pink-500/30
                    "
                  >
                    Live Demo
                  </button>

                  {/* <button
                    className="
                      px-6 py-3 rounded-xl font-semibold text-white
                      border border-white/20
                      hover:bg-white/10 transition
                    "
                  >
                    Code
                  </button> */}


<button
  onClick={() => handleCodeClick(item.codeUrl)}
  className="
    px-6 py-3 rounded-xl font-semibold text-white
    border border-white/20
    hover:bg-white/10 transition
  "
>
  Code
</button>


                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

