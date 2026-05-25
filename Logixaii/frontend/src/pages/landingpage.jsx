
// import { Link } from "react-router-dom";
// import { useEffect, useRef } from "react";
// import Typed from "typed.js";
// import MainCarousel from "./carousel";
// import FeatureCards from "./featurecard";
// import Footer from "./footer";

// export default function LandingPage() {
//   const typedRef = useRef(null);

//   useEffect(() => {
//     const typed = new Typed(typedRef.current, {
//       strings: [
//         "Intelligence with LogixAI",
//         "Build Websites Instantly with AI",
//         "Design, Convert & Edit — All in One Platform",
//         "Smart AI Tools for Modern Creators",
//       ],
//       typeSpeed: 70,
//       backSpeed: 40,
//       backDelay: 1500,
//       loop: true,
//       showCursor: true,
//       cursorChar: "|",
//     });

//     return () => typed.destroy();
//   }, []);

//   return (
//     <div className="min-h-screen bg-linear-to-b from-[#0b061a] via-[#120a2a] to-[#0b061a] text-white">

//       {/* NAVBAR */}
//       <nav className="sticky top-0 z-50 backdrop-blur-xl bg-white/5 border-b border-white/10 px-4 sm:px-6 md:px-12 py-4 flex flex-col sm:flex-row gap-4 sm:gap-0 sm:justify-between sm:items-center">
//         <p className="text-2xl md:text-3xl font-extrabold bg-linear-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent text-center sm:text-left">
//           🚀 LogixAI
//         </p>

//         <div className="flex gap-3 justify-center">
//           <Link
//             to="/login"
//             className="px-4 sm:px-5 py-2 rounded-lg bg-linear-to-r from-purple-600 to-pink-600 text-lg sm:text-xl shadow-lg shadow-purple-500/40 hover:scale-105 transition-all"
//           >
//             Login
//           </Link>

//           <Link
//             to="/signup"
//             className="px-4 sm:px-5 py-2 rounded-lg bg-linear-to-r from-purple-600 to-pink-600 text-lg sm:text-xl shadow-lg shadow-purple-500/40 hover:scale-105 transition-all"
//           >
//             Sign Up
//           </Link>
//         </div>
//       </nav>

//       {/* HERO SECTION */}
//       <section className="grid grid-cols-1 md:grid-cols-2 gap-12 px-4 sm:px-6 md:px-12 py-16 md:py-20 items-center">

//         {/* LEFT */}
//         <div className="text-center md:text-left">
//           <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
//             Unlock the Future of <br />
//             <span ref={typedRef} className="text-purple-400"></span>
//           </h1>

//           <p className="mt-6 text-gray-400 max-w-xl mx-auto md:mx-0 text-base sm:text-lg">
//             AI Instructor, Website Builder, Image Converter & Background Remover — all in one intelligent platform.
//           </p>

//           <Link
//             to="/signup"
//             className="inline-block mt-10 bg-linear-to-r from-purple-600 to-pink-600 px-8 sm:px-10 py-3 sm:py-4 rounded-xl font-semibold text-lg sm:text-2xl shadow-xl shadow-purple-500/40 hover:scale-105 transition-all"
//           >
//             Get Started for Free
//           </Link>
//         </div>

//         {/* RIGHT */}
//         <div className="relative flex justify-center md:justify-end">
//           <div className="absolute w-[80%] h-[80%] bg-purple-500/20 blur-[100px] rounded-full"></div>

//           <section className="w-full px-2 sm:px-6 md:px-0">
//             <div className="relative max-w-full sm:max-w-xl md:max-w-lg lg:max-w-xl mx-auto">
//               <div className="overflow-hidden transform-gpu hover:scale-105 transition-all duration-500 hover:-translate-y-2 rounded-3xl shadow-[0_0_60px_rgba(236,72,153,0.35)]">
//                 <video
//                   src="/firstpage.mp4"
//                   autoPlay
//                   muted
//                   loop
//                   playsInline
//                   preload="auto"
//                   disablePictureInPicture
//                   controls={false}
//                   className="w-full h-auto object-cover"
//                 />
//               </div>

//               <p className="text-center mt-6 text-gray-400 text-sm sm:text-lg">
//                 See how LogixAI builds websites, answers quickly, edits images instantly & removes background using AI
//               </p>
//             </div>
//           </section>
//         </div>
//       </section>

//       {/* FEATURE CARDS */}
//       <div className="px-4 sm:px-6 md:px-12 pb-24 md:pb-32 max-w-8xl mx-auto">
//         <FeatureCards />
//       </div>

//       {/* CAROUSEL */}
//       <section className="px-4 sm:px-6 md:px-12 pb-24 md:pb-32">
//         <div className="max-w-7xl mx-auto">
//           <MainCarousel />
//         </div>
//       </section>

//       {/* === YOUR CARD SECTION (UNCHANGED) === */}
//       <section className="px-4 sm:px-6 md:px-12 pb-24 md:pb-32">
//         <div className="max-w-8xl mx-auto">
//           <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-extrabold mb-12 md:mb-16">
//             <span className="bg-linear-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
//               AI-Powered Capabilities
//             </span>
//           </h2>

//           {/* Cards Grid */}
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

//             {/* Card 1 */}
//             <div className="transform-gpu transition-transform duration-500 ease-out hover:scale-105 backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 shadow-lg shadow-purple-500/30 hover:shadow-[0_0_60px_rgba(236,72,153,0.35)]">
//               <h3 className="text-2xl font-semibold text-purple-400 mb-3">
//                 AI Conversational Assistant
//               </h3>
//               <p className="text-gray-400 leading-relaxed">
//                 An advanced AI-powered conversational engine similar to ChatGPT, capable of
//                 understanding natural language queries, maintaining context, and generating
//                 accurate, human-like responses across technical, educational, and general domains.
//               </p>
//             </div>

//             {/* Card 2 */}
//             <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 shadow-lg shadow-purple-500/30 transform-gpu transition-transform duration-500 ease-out hover:scale-105 hover:shadow-[0_0_60px_rgba(236,72,153,0.35)]">
//               <h3 className="text-2xl font-semibold text-purple-400 mb-3">
//                 AI Website Builder
//               </h3>
//               <p className="text-gray-400 leading-relaxed">
//                 Automatically generates complete, responsive websites using AI, delivering
//                 production-ready HTML, CSS, and JavaScript code based on user requirements,
//                 ensuring scalability, clean structure, and modern UI/UX standards.
//               </p>
//             </div>

//             {/* Card 3 */}
//             <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 shadow-lg shadow-purple-500/30 transform-gpu transition-transform duration-500 ease-out hover:scale-105 hover:shadow-[0_0_60px_rgba(236,72,153,0.35)]">
//               <h3 className="text-2xl font-semibold text-purple-400 mb-3">
//                 AI Image Format Converter
//               </h3>
//               <p className="text-gray-400 leading-relaxed">
//                 High-performance AI-based image conversion system supporting PNG, JPG, JPEG,
//                 WEBP, and AVIF formats, optimized for quality preservation, compression efficiency,
//                 and fast processing across devices.
//               </p>
//             </div>

//             {/* Card 4 */}
//             <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 shadow-lg shadow-purple-500/30 transform-gpu transition-transform duration-500 ease-out hover:scale-105 hover:shadow-[0_0_60px_rgba(236,72,153,0.35)]">
//               <h3 className="text-2xl font-semibold text-purple-400 mb-3">
//                 AI Background Removal
//               </h3>
//               <p className="text-gray-400 leading-relaxed">
//                 Intelligent background removal powered by computer vision and deep learning,
//                 enabling precise subject detection and clean cutouts suitable for e-commerce,
//                 design workflows, and professional visual content.
//               </p>
//             </div>

//             {/* Card 5 */}
//             <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 shadow-lg shadow-purple-500/30 transform-gpu transition-transform duration-500 ease-out hover:scale-105 hover:shadow-[0_0_60px_rgba(236,72,153,0.35)]">
//               <h3 className="text-2xl font-semibold text-purple-400 mb-3">
//                 End-to-End AI Automation
//               </h3>
//               <p className="text-gray-400 leading-relaxed">
//                 Unified AI-driven platform integrating conversation intelligence, web generation,
//                 and image processing, reducing manual effort and significantly improving
//                 productivity through automated decision-making pipelines.
//               </p>
//             </div>

//             {/* Card 6 */}
//             <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 shadow-lg shadow-purple-500/30 transform-gpu transition-transform duration-500 ease-out hover:scale-105 hover:shadow-[0_0_60px_rgba(236,72,153,0.35)]">
//               <h3 className="text-2xl font-semibold text-purple-400 mb-3">
//                 Scalable & Secure Architecture
//               </h3>
//               <p className="text-gray-400 leading-relaxed">
//                 Built with a modern, scalable architecture supporting secure API integration,
//                 optimized performance, and future extensibility, ensuring reliability for
//                 real-world AI applications and enterprise-ready deployments.
//               </p>
//             </div>

//           </div>
//         </div>
//       </section>

//       {/* FOOTER */}
//       <Footer />
//     </div>
//   );
// }








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
        "Build Websites Instantly",
        "Design, Convert & Edit with AI",
        "Smart Tools for Creators",
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

  const capabilities = [
    {
      icon: "✦",
      title: "AI Conversational Assistant",
      description:
        "Advanced AI engine similar to ChatGPT — understands context, answers technical queries, and assists across learning, development, and productivity tasks.",
      glow: "rgba(139,92,246,0.3)",
      color: "#a78bfa",
    },
    {
      icon: "◈",
      title: "AI Website Builder",
      description:
        "Generates complete, responsive websites from prompts — production-ready HTML, CSS, and React with modern UI/UX standards.",
      glow: "rgba(236,72,153,0.3)",
      color: "#f472b6",
    },
    {
      icon: "◉",
      title: "AI Image Converter",
      description:
        "High-performance conversion supporting PNG, JPG, WEBP, AVIF — optimized for quality, compression, and speed.",
      glow: "rgba(244,63,94,0.3)",
      color: "#fb7185",
    },
    {
      icon: "⬡",
      title: "AI Background Removal",
      description:
        "Computer vision-powered background removal — precise subject detection and clean cutouts for design and e-commerce.",
      glow: "rgba(168,85,247,0.3)",
      color: "#c084fc",
    },
    {
      icon: "⟁",
      title: "End-to-End AI Automation",
      description:
        "Unified platform integrating conversation, web generation, and image processing to automate your creative pipeline.",
      glow: "rgba(99,102,241,0.3)",
      color: "#818cf8",
    },
    {
      icon: "⬢",
      title: "Scalable & Secure",
      description:
        "Modern architecture with secure API integration, optimized performance, and enterprise-ready extensibility.",
      glow: "rgba(167,139,250,0.3)",
      color: "#a78bfa",
    },
  ];

  return (
    <div style={{ minHeight: "100vh", background: "linear-gradient(160deg,#05010d 0%,#0d0520 35%,#120a2a 65%,#0b061a 100%)", color: "#fff", overflowX: "hidden", fontFamily: "'DM Sans',sans-serif", boxSizing: "border-box" }}>

      {/* ── GLOBAL STYLES ── */}
      <style>{`
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Syne:wght@700;800&display=swap');

        html { scroll-behavior: smooth; }

        /* Orbs */
        .orb { position: fixed; border-radius: 50%; filter: blur(100px); pointer-events: none; z-index: 0; animation: drift 14s ease-in-out infinite alternate; }
        .orb1 { width: min(500px,60vw); height: min(500px,60vw); background: radial-gradient(circle, rgba(139,92,246,0.16) 0%, transparent 70%); top: -80px; left: -80px; }
        .orb2 { width: min(420px,50vw); height: min(420px,50vw); background: radial-gradient(circle, rgba(236,72,153,0.12) 0%, transparent 70%); top: 30vh; right: -60px; animation-delay: -5s; }
        .orb3 { width: min(350px,45vw); height: min(350px,45vw); background: radial-gradient(circle, rgba(217,70,239,0.10) 0%, transparent 70%); bottom: 20vh; left: 35%; animation-delay: -10s; }
        @keyframes drift { 0%{transform:translate(0,0) scale(1)} 50%{transform:translate(20px,-30px) scale(1.04)} 100%{transform:translate(-15px,15px) scale(0.97)} }

        /* Shimmer nav border */
        .nav-border::after { content:''; position:absolute; bottom:0; left:0; right:0; height:1px; background:linear-gradient(90deg,transparent,rgba(168,85,247,0.5),rgba(236,72,153,0.5),transparent); animation:shimmer 3s ease-in-out infinite; }
        @keyframes shimmer { 0%,100%{opacity:0.3} 50%{opacity:1} }

        /* Pill badge */
        .pill { display:inline-flex; align-items:center; gap:6px; padding:5px 14px; border-radius:999px; background:rgba(168,85,247,0.1); border:1px solid rgba(168,85,247,0.25); font-size:11px; font-weight:600; letter-spacing:0.1em; text-transform:uppercase; color:#c084fc; }

        /* Stat pill */
        .stat-p { display:inline-flex; align-items:center; gap:6px; padding:8px 16px; border-radius:999px; background:rgba(255,255,255,0.04); border:1px solid rgba(255,255,255,0.08); font-size:13px; }

        /* Video glow frame */
        .vid-frame { border-radius:20px; overflow:hidden; box-shadow: 0 0 0 1px rgba(168,85,247,0.2), 0 20px 60px rgba(0,0,0,0.55), 0 0 60px rgba(168,85,247,0.12), 0 0 100px rgba(236,72,153,0.08); animation:floatY 4s ease-in-out infinite alternate; }
        @keyframes floatY { 0%{transform:translateY(0)} 100%{transform:translateY(-10px)} }

        /* Gradient divider */
        .grad-line { height:1px; background:linear-gradient(90deg,transparent,rgba(168,85,247,0.35),rgba(236,72,153,0.35),transparent); }

        /* Cap card */
        .cap-card { position:relative; border-radius:18px; padding:28px; background:rgba(255,255,255,0.03); border:1px solid rgba(255,255,255,0.07); transition:all 0.4s cubic-bezier(0.23,1,0.32,1); overflow:hidden; }
        .cap-card:hover { transform:translateY(-5px); background:rgba(255,255,255,0.05); }
        .cap-card::before { content:''; position:absolute; inset:0; border-radius:18px; padding:1px; background:linear-gradient(135deg,rgba(168,85,247,0.25),transparent 50%,rgba(236,72,153,0.15)); -webkit-mask:linear-gradient(#fff 0 0) content-box,linear-gradient(#fff 0 0); -webkit-mask-composite:xor; mask-composite:exclude; pointer-events:none; }

        /* Icon badge */
        .icon-b { width:46px; height:46px; border-radius:12px; display:flex; align-items:center; justify-content:center; font-size:20px; margin-bottom:16px; }

        /* Primary btn */
        .btn-primary { display:inline-flex; align-items:center; gap:6px; padding:12px 28px; border-radius:12px; background:linear-gradient(135deg,#9333ea,#d946ef,#ec4899); color:#fff; font-weight:700; font-size:15px; text-decoration:none; border:none; cursor:pointer; box-shadow:0 6px 30px rgba(147,51,234,0.4); transition:all 0.25s; white-space:nowrap; }
        .btn-primary:hover { transform:translateY(-2px); box-shadow:0 10px 40px rgba(236,72,153,0.5); }

        /* Secondary btn */
        .btn-sec { display:inline-flex; align-items:center; gap:6px; padding:12px 24px; border-radius:12px; border:1px solid rgba(168,85,247,0.3); color:rgba(255,255,255,0.75); font-weight:500; font-size:15px; text-decoration:none; background:rgba(168,85,247,0.06); transition:all 0.2s; white-space:nowrap; }
        .btn-sec:hover { background:rgba(168,85,247,0.14); color:#fff; }

        /* ══ RESPONSIVE LAYOUT ══ */

        /* Navbar */
        .nav-inner { max-width:1200px; margin:0 auto; display:flex; align-items:center; justify-content:space-between; height:64px; padding:0 20px; }
        .brand-txt { font-family:'Syne',sans-serif; font-weight:800; font-size:20px; background:linear-gradient(135deg,#c084fc,#f472b6); -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text; }

        /* Hero */
        .hero-wrap { max-width:1200px; margin:0 auto; padding:56px 20px 48px; display:grid; grid-template-columns:1fr 1fr; gap:48px; align-items:center; position:relative; z-index:1; }
        .hero-h1 { font-family:'Syne',sans-serif; font-weight:800; font-size:clamp(26px,3vw,44px); line-height:1.15; letter-spacing:-0.02em; margin-bottom:18px; }
        .hero-sub { color:rgba(255,255,255,0.48); font-size:15px; line-height:1.7; max-width:440px; margin-bottom:32px; }
        .hero-ctas { display:flex; align-items:center; gap:12px; flex-wrap:wrap; }
        .hero-stats { display:flex; gap:10px; margin-top:36px; flex-wrap:wrap; }

        /* Section wrapper */
        .sec-wrap { max-width:1200px; margin:0 auto; padding:0 20px; }

        /* Caps grid */
        .caps-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:18px; }

        /* ── BREAKPOINTS ── */

        /* Tablet: ≤1024px */
        @media (max-width:1024px) {
          .caps-grid { grid-template-columns:repeat(2,1fr) !important; }
        }

        /* Large mobile / small tablet: ≤768px */
        @media (max-width:768px) {
          .hero-wrap { grid-template-columns:1fr !important; gap:32px !important; padding:40px 16px 36px !important; }
          .hero-h1 { font-size:clamp(24px,6vw,36px) !important; }
          .hero-sub { font-size:14px !important; }
          .vid-col { order:-1; }
          .vid-frame { max-width:480px; margin:0 auto; }
          .hero-stats { gap:8px; }
          .stat-p { font-size:12px; padding:6px 12px; }
        }

        /* Mobile: ≤480px */
        @media (max-width:480px) {
          .nav-inner { padding:0 14px; height:58px; }
          .brand-txt { font-size:18px; }
          .hero-wrap { padding:32px 14px 28px !important; gap:24px !important; }
          .hero-h1 { font-size:clamp(22px,7vw,30px) !important; }
          .btn-primary, .btn-sec { font-size:14px; padding:10px 20px; }
          .hero-ctas { gap:10px; }
          .caps-grid { grid-template-columns:1fr !important; }
          .pill { font-size:10px; }
        }

        /* Very small: ≤360px */
        @media (max-width:360px) {
          .hero-h1 { font-size:20px !important; }
          .btn-primary { padding:10px 16px; font-size:13px; }
          .btn-sec { padding:10px 14px; font-size:13px; }
        }
      `}</style>

      {/* ── ORBS ── */}
      <div className="orb orb1" />
      <div className="orb orb2" />
      <div className="orb orb3" />

      {/* ════════════════ NAVBAR ════════════════ */}
      <nav className="nav-border" style={{ position:"sticky", top:0, zIndex:50, background:"rgba(5,1,13,0.72)", backdropFilter:"blur(20px) saturate(1.8)", borderBottom:"1px solid transparent" }}>
        <div className="nav-inner">

          {/* Brand */}
          <div style={{ display:"flex", alignItems:"center", gap:"9px", flexShrink:0 }}>
            <div style={{ width:34, height:34, borderRadius:9, background:"linear-gradient(135deg,#a855f7,#ec4899)", display:"flex", alignItems:"center", justifyContent:"center", fontSize:16, boxShadow:"0 0 16px rgba(168,85,247,0.45)", flexShrink:0 }}>🚀</div>
            <span className="brand-txt">LogixAI</span>
          </div>

          {/* Buttons */}
          <div style={{ display:"flex", alignItems:"center", gap:"10px" }}>
            <Link to="/login" style={{ padding:"8px 18px", borderRadius:9, border:"1px solid rgba(255,255,255,0.12)", color:"rgba(255,255,255,0.78)", fontSize:14, fontWeight:500, textDecoration:"none", background:"rgba(255,255,255,0.04)", transition:"all 0.2s", whiteSpace:"nowrap" }}
              onMouseEnter={e=>{e.currentTarget.style.background="rgba(255,255,255,0.09)";e.currentTarget.style.borderColor="rgba(168,85,247,0.4)"}}
              onMouseLeave={e=>{e.currentTarget.style.background="rgba(255,255,255,0.04)";e.currentTarget.style.borderColor="rgba(255,255,255,0.12)"}}>
              Login
            </Link>
            <Link to="/signup" className="btn-primary" style={{ fontSize:14, padding:"8px 18px", borderRadius:9 }}>
              Get Started →
            </Link>
          </div>
        </div>
      </nav>

      {/* ════════════════ HERO ════════════════ */}
      <section className="hero-wrap">

        {/* LEFT */}
        <div>
          <div className="pill" style={{ marginBottom:18 }}>
            <span style={{ color:"#a855f7", fontSize:"7px" }}>●</span>
            Next-Gen AI Platform
          </div>

          <h1 className="hero-h1">
            Unlock the Future of
            <br />
            <span ref={typedRef} style={{ background:"linear-gradient(135deg,#c084fc 0%,#e879f9 40%,#f472b6 80%,#fb7185 100%)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text" }} />
          </h1>

          <p className="hero-sub">
            AI Chat, Website Builder, Image Converter &amp; Background Remover — all in one intelligent platform built for creators.
          </p>

          <div className="hero-ctas">
            <Link to="/signup" className="btn-primary">
              Start for Free ✦
            </Link>
            <Link to="/chat" className="btn-sec">
              Try AI Chat →
            </Link>
          </div>

          <div className="hero-stats">
            {[{val:"4 Tools",lbl:"Built-in"},{val:"AI-First",lbl:"Architecture"},{val:"MERN",lbl:"Stack"}].map((s,i)=>(
              <div className="stat-p" key={i}>
                <span style={{ fontWeight:700, color:"#c084fc" }}>{s.val}</span>
                <span style={{ color:"rgba(255,255,255,0.38)", fontSize:11 }}>{s.lbl}</span>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT — video */}
        <div className="vid-col" style={{ position:"relative" }}>
          <div style={{ position:"absolute", top:-50, right:-50, width:"min(260px,40vw)", height:"min(260px,40vw)", background:"radial-gradient(circle,rgba(168,85,247,0.22) 0%,transparent 70%)", filter:"blur(50px)", borderRadius:"50%", pointerEvents:"none" }} />
          <div style={{ position:"absolute", bottom:-30, left:-30, width:"min(180px,30vw)", height:"min(180px,30vw)", background:"radial-gradient(circle,rgba(236,72,153,0.18) 0%,transparent 70%)", filter:"blur(40px)", borderRadius:"50%", pointerEvents:"none" }} />

          <div className="vid-frame">
            <video src="/firstpage.mp4" autoPlay muted loop playsInline preload="auto" disablePictureInPicture controls={false} style={{ width:"100%", height:"auto", display:"block" }} />
          </div>
          <p style={{ textAlign:"center", marginTop:14, color:"rgba(255,255,255,0.3)", fontSize:12, letterSpacing:"0.02em" }}>↑ Live demo — chat, builder, image tools</p>
        </div>
      </section>

      {/* ── DIVIDER ── */}
      <div className="sec-wrap" style={{ marginBottom:0 }}>
        <div className="grad-line" />
      </div>

      {/* ════════════════ FEATURE CARDS ════════════════ */}
      <div style={{ position:"relative", zIndex:1 }}>
        <FeatureCards />
      </div>

      {/* ════════════════ CAROUSEL ════════════════ */}
      <section style={{ padding:"0 20px 80px", position:"relative", zIndex:1 }}>
        <div style={{ maxWidth:1200, margin:"0 auto" }}>
          <MainCarousel />
        </div>
      </section>

      {/* ════════════════ CAPABILITIES ════════════════ */}
      <section style={{ padding:"0 20px 100px", position:"relative", zIndex:1 }}>
        <div style={{ maxWidth:1200, margin:"0 auto" }}>

          <div style={{ textAlign:"center", marginBottom:56 }}>
            <div className="pill" style={{ display:"inline-flex", marginBottom:14 }}>
              <span style={{ color:"#a855f7", fontSize:"7px" }}>●</span>
              Platform Capabilities
            </div>
            <h2 style={{ fontFamily:"'Syne',sans-serif", fontWeight:800, fontSize:"clamp(26px,3.5vw,44px)", lineHeight:1.15, letterSpacing:"-0.02em" }}>
              <span style={{ background:"linear-gradient(135deg,#c084fc 0%,#e879f9 50%,#f472b6 100%)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text" }}>
                AI-Powered Capabilities
              </span>
            </h2>
            <p style={{ color:"rgba(255,255,255,0.38)", fontSize:15, maxWidth:460, margin:"12px auto 0", lineHeight:1.65 }}>
              Everything you need to build, create, and automate — powered by cutting-edge AI.
            </p>
          </div>

          <div className="caps-grid">
            {capabilities.map((cap,i)=>(
              <div key={i} className="cap-card"
                onMouseEnter={e=>{e.currentTarget.style.boxShadow=`0 16px 50px ${cap.glow},0 0 0 1px rgba(168,85,247,0.18)`}}
                onMouseLeave={e=>{e.currentTarget.style.boxShadow="none"}}>
                <div className="icon-b" style={{ background:`${cap.color}18`, boxShadow:`0 6px 20px ${cap.glow}`, color:cap.color }}>{cap.icon}</div>
                <h3 style={{ fontFamily:"'Syne',sans-serif", fontWeight:700, fontSize:16, color:"#fff", marginBottom:10, letterSpacing:"-0.01em" }}>{cap.title}</h3>
                <p style={{ color:"rgba(255,255,255,0.42)", fontSize:13.5, lineHeight:1.7 }}>{cap.description}</p>
                <div style={{ height:2, marginTop:22, borderRadius:999, background:`linear-gradient(90deg,${cap.color}80,transparent)`, opacity:0.55 }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════ FOOTER ════════════════ */}
      <Footer />
    </div>
  );
}

