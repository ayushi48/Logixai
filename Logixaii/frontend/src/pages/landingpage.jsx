
import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import Typed from "typed.js";
import MainCarousel from "./carousel";
import FeatureCards from "./featurecard";
import Footer from "./footer";

export default function LandingPage() {
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: [
        "Intelligence with LogixAI",
        "Build Websites Instantly with AI",
        "Design, Convert & Edit — All in One Platform",
        "Smart AI Tools for Modern Creators",
      ],
      typeSpeed: 70,
      backSpeed: 40,
      backDelay: 1500,
      loop: true,
      showCursor: true,
      cursorChar: "|",
    });

    return () => typed.destroy();
  }, []);

  return (
    <div className="min-h-screen bg-linear-to-b from-[#0b061a] via-[#120a2a] to-[#0b061a] text-white">

      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 backdrop-blur-xl bg-white/5 border-b border-white/10 px-4 sm:px-6 md:px-12 py-4 flex flex-col sm:flex-row gap-4 sm:gap-0 sm:justify-between sm:items-center">
        <p className="text-2xl md:text-3xl font-extrabold bg-linear-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent text-center sm:text-left">
          🚀 LogixAI
        </p>

        <div className="flex gap-3 justify-center">
          <Link
            to="/login"
            className="px-4 sm:px-5 py-2 rounded-lg bg-linear-to-r from-purple-600 to-pink-600 text-lg sm:text-xl shadow-lg shadow-purple-500/40 hover:scale-105 transition-all"
          >
            Login
          </Link>

          <Link
            to="/signup"
            className="px-4 sm:px-5 py-2 rounded-lg bg-linear-to-r from-purple-600 to-pink-600 text-lg sm:text-xl shadow-lg shadow-purple-500/40 hover:scale-105 transition-all"
          >
            Sign Up
          </Link>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-12 px-4 sm:px-6 md:px-12 py-16 md:py-20 items-center">

        {/* LEFT */}
        <div className="text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
            Unlock the Future of <br />
            <span ref={typedRef} className="text-purple-400"></span>
          </h1>

          <p className="mt-6 text-gray-400 max-w-xl mx-auto md:mx-0 text-base sm:text-lg">
            AI Instructor, Website Builder, Image Converter & Background Remover — all in one intelligent platform.
          </p>

          <Link
            to="/signup"
            className="inline-block mt-10 bg-linear-to-r from-purple-600 to-pink-600 px-8 sm:px-10 py-3 sm:py-4 rounded-xl font-semibold text-lg sm:text-2xl shadow-xl shadow-purple-500/40 hover:scale-105 transition-all"
          >
            Get Started for Free
          </Link>
        </div>

        {/* RIGHT */}
        <div className="relative flex justify-center md:justify-end">
          <div className="absolute w-[80%] h-[80%] bg-purple-500/20 blur-[100px] rounded-full"></div>

          <section className="w-full px-2 sm:px-6 md:px-0">
            <div className="relative max-w-full sm:max-w-xl md:max-w-lg lg:max-w-xl mx-auto">
              <div className="overflow-hidden transform-gpu hover:scale-105 transition-all duration-500 hover:-translate-y-2 rounded-3xl shadow-[0_0_60px_rgba(236,72,153,0.35)]">
                <video
                  src="/firstpage.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="auto"
                  disablePictureInPicture
                  controls={false}
                  className="w-full h-auto object-cover"
                />
              </div>

              <p className="text-center mt-6 text-gray-400 text-sm sm:text-lg">
                See how LogixAI builds websites, answers quickly, edits images instantly & removes background using AI
              </p>
            </div>
          </section>
        </div>
      </section>

      {/* FEATURE CARDS */}
      <div className="px-4 sm:px-6 md:px-12 pb-24 md:pb-32 max-w-8xl mx-auto">
        <FeatureCards />
      </div>

      {/* CAROUSEL */}
      <section className="px-4 sm:px-6 md:px-12 pb-24 md:pb-32">
        <div className="max-w-7xl mx-auto">
          <MainCarousel />
        </div>
      </section>

      {/* === YOUR CARD SECTION (UNCHANGED) === */}
      <section className="px-4 sm:px-6 md:px-12 pb-24 md:pb-32">
        <div className="max-w-8xl mx-auto">
          <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-extrabold mb-12 md:mb-16">
            <span className="bg-linear-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              AI-Powered Capabilities
            </span>
          </h2>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

            {/* Card 1 */}
            <div className="transform-gpu transition-transform duration-500 ease-out hover:scale-105 backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 shadow-lg shadow-purple-500/30 hover:shadow-[0_0_60px_rgba(236,72,153,0.35)]">
              <h3 className="text-2xl font-semibold text-purple-400 mb-3">
                AI Conversational Assistant
              </h3>
              <p className="text-gray-400 leading-relaxed">
                An advanced AI-powered conversational engine similar to ChatGPT, capable of
                understanding natural language queries, maintaining context, and generating
                accurate, human-like responses across technical, educational, and general domains.
              </p>
            </div>

            {/* Card 2 */}
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 shadow-lg shadow-purple-500/30 transform-gpu transition-transform duration-500 ease-out hover:scale-105 hover:shadow-[0_0_60px_rgba(236,72,153,0.35)]">
              <h3 className="text-2xl font-semibold text-purple-400 mb-3">
                AI Website Builder
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Automatically generates complete, responsive websites using AI, delivering
                production-ready HTML, CSS, and JavaScript code based on user requirements,
                ensuring scalability, clean structure, and modern UI/UX standards.
              </p>
            </div>

            {/* Card 3 */}
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 shadow-lg shadow-purple-500/30 transform-gpu transition-transform duration-500 ease-out hover:scale-105 hover:shadow-[0_0_60px_rgba(236,72,153,0.35)]">
              <h3 className="text-2xl font-semibold text-purple-400 mb-3">
                AI Image Format Converter
              </h3>
              <p className="text-gray-400 leading-relaxed">
                High-performance AI-based image conversion system supporting PNG, JPG, JPEG,
                WEBP, and AVIF formats, optimized for quality preservation, compression efficiency,
                and fast processing across devices.
              </p>
            </div>

            {/* Card 4 */}
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 shadow-lg shadow-purple-500/30 transform-gpu transition-transform duration-500 ease-out hover:scale-105 hover:shadow-[0_0_60px_rgba(236,72,153,0.35)]">
              <h3 className="text-2xl font-semibold text-purple-400 mb-3">
                AI Background Removal
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Intelligent background removal powered by computer vision and deep learning,
                enabling precise subject detection and clean cutouts suitable for e-commerce,
                design workflows, and professional visual content.
              </p>
            </div>

            {/* Card 5 */}
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 shadow-lg shadow-purple-500/30 transform-gpu transition-transform duration-500 ease-out hover:scale-105 hover:shadow-[0_0_60px_rgba(236,72,153,0.35)]">
              <h3 className="text-2xl font-semibold text-purple-400 mb-3">
                End-to-End AI Automation
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Unified AI-driven platform integrating conversation intelligence, web generation,
                and image processing, reducing manual effort and significantly improving
                productivity through automated decision-making pipelines.
              </p>
            </div>

            {/* Card 6 */}
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 shadow-lg shadow-purple-500/30 transform-gpu transition-transform duration-500 ease-out hover:scale-105 hover:shadow-[0_0_60px_rgba(236,72,153,0.35)]">
              <h3 className="text-2xl font-semibold text-purple-400 mb-3">
                Scalable & Secure Architecture
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Built with a modern, scalable architecture supporting secure API integration,
                optimized performance, and future extensibility, ensuring reliability for
                real-world AI applications and enterprise-ready deployments.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}
