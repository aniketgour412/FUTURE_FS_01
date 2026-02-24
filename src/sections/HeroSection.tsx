import { motion } from 'framer-motion'
import { Mail, Phone, Github, Code2 } from 'lucide-react'
import heroPhoto from '../assets/hero-photo.jpeg'

const floatingShapes = [
  { size: 'w-2.5 h-2.5', color: 'bg-accent', top: '22%', left: '7%', delay: 0, dur: 4 },
  { size: 'w-1.5 h-1.5', color: 'bg-accent-purple', top: '58%', left: '4%', delay: 0.8, dur: 5 },
  { size: 'w-3 h-3', color: 'bg-accent-warm', top: '76%', right: '8%', delay: 1.2, dur: 4.5 },
  { size: 'w-1.5 h-1.5', color: 'bg-accent-teal', top: '28%', right: '5%', delay: 1.8, dur: 3.5 },
  { size: 'w-2 h-2', color: 'bg-accent-rose', top: '45%', right: '12%', delay: 0.5, dur: 6 },
]

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-primary">

      {/* ── Advanced Mesh Background ── */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Animated Orbs for Depth */}
        <motion.div
          className="absolute -top-[10%] -left-[5%] w-[70%] h-[70%] rounded-full opacity-[0.22] blur-[120px]"
          style={{ background: 'radial-gradient(circle, #2d5be3 0%, #7c3aed 100%)' }}
          animate={{ x: [-20, 20, -20], y: [-10, 30, -10], rotate: [0, 45, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
        />
        <motion.div
          className="absolute top-[20%] -right-[15%] w-[60%] h-[60%] rounded-full opacity-[0.18] blur-[100px]"
          style={{ background: 'radial-gradient(circle, #0ea5e9 0%, #10b981 100%)' }}
          animate={{ x: [20, -30, 20], y: [20, -20, 20] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'linear', delay: 2 }}
        />
        <motion.div
          className="absolute -bottom-[20%] left-[10%] w-[50%] h-[50%] rounded-full opacity-[0.15] blur-[110px]"
          style={{ background: 'radial-gradient(circle, #fb7185 0%, #f59e0b 100%)' }}
          animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.25, 0.15] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
        />
      </div>

      {/* Fine grid overlay */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(rgba(45,91,227,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(45,91,227,0.06) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
          maskImage: 'radial-gradient(ellipse 70% 70% at 50% 50%, black 20%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 70% 70% at 50% 50%, black 20%, transparent 100%)',
        }}
      />

      {/* Floating squares */}
      {floatingShapes.map((s, i) => (
        <motion.div
          key={i}
          className={`absolute z-[2] ${s.size} ${s.color} rounded-sm opacity-[0.45] pointer-events-none`}
          style={{ top: s.top, left: s.left, right: s.right, rotate: 45 }}
          animate={{ y: [0, -20, 0], opacity: [0.3, 0.6, 0.3], rotate: [45, 90, 45] }}
          transition={{ duration: s.dur, repeat: Infinity, ease: 'easeInOut', delay: s.delay }}
        />
      ))}

      <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8 w-full">
        <div className="grid lg:grid-cols-2 items-center gap-10 lg:gap-12 min-h-screen py-24">

          {/* ── Left: Text ── */}
          <motion.div
            className="order-2 lg:order-1 text-center lg:text-left"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Professional Badge */}
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/10 mb-8 shadow-sm backdrop-blur-md"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <span className="relative flex w-2 h-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-50" />
                <span className="relative inline-flex rounded-full w-2 h-2 bg-accent" />
              </span>
              <span className="text-[10px] font-extrabold tracking-[0.25em] text-white/50 uppercase">Available for new opportunities</span>
            </motion.div>

            {/* Label */}
            <motion.p
              className="text-[10px] sm:text-[11px] font-bold tracking-[0.3em] uppercase text-accent mb-3 font-body"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Front-End Architectural Specialist
            </motion.p>

            {/* Name */}
            <motion.h1
              className="font-heading font-extrabold text-white mb-2"
              style={{ fontSize: 'clamp(3.5rem, 8vw, 6rem)', lineHeight: 0.95, letterSpacing: '-0.04em' }}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.35 }}
            >
              Aniket <span className="text-white/10">.</span>
            </motion.h1>

            {/* Role */}
            <motion.div
              className="mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.5 }}
            >
              <h2
                className="font-heading font-bold text-white/80"
                style={{ fontSize: 'clamp(1.25rem, 3vw, 2.25rem)', letterSpacing: '-0.02em', lineHeight: 1.2 }}
              >
                Building high-performance, <br className="hidden sm:block" />
                <span className="gradient-text">user-centric web interfaces.</span>
              </h2>
            </motion.div>

            {/* Premium Bio */}
            <motion.p
              className="text-white/60 text-sm sm:text-base max-w-[480px] mx-auto lg:mx-0 leading-[1.8] mb-12 font-body font-medium"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.65 }}
            >
              I specialize in bridging the gap between sophisticated design and technical implementation, crafting accessible digital experiences that prioritize scalability and motion.
            </motion.p>

            {/* Professional Contact row */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 sm:gap-8 items-center lg:items-start justify-center lg:justify-start"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <motion.a
                href="mailto:aniketgourkv@gmail.com"
                className="flex items-center gap-3 text-[11px] sm:text-xs font-bold text-white/90 group font-body"
                whileTap={{ scale: 0.95 }}
              >
                <motion.span
                  className="p-3.5 rounded-2xl bg-white/[0.05] border border-white/10 group-hover:bg-accent group-hover:border-transparent transition-all shadow-lg overflow-hidden relative"
                  whileTap={{ scale: 0.9, backgroundColor: "#3b82f6" }}
                >
                  <Mail className="w-5 h-5 text-accent group-hover:text-white transition-colors relative z-10" />
                  <motion.div
                    className="absolute inset-0 bg-accent transition-opacity opacity-0 pointer-events-none"
                    whileTap={{ opacity: 1 }}
                  />
                </motion.span>
                aniketgourkv@gmail.com
              </motion.a>
              <motion.a
                href="tel:+919555758227"
                className="flex items-center gap-3 text-[11px] sm:text-xs font-bold text-white/90 group font-body"
                whileTap={{ scale: 0.95 }}
              >
                <motion.span
                  className="p-3.5 rounded-2xl bg-white/[0.05] border border-white/10 group-hover:bg-accent-purple group-hover:border-transparent transition-all shadow-lg overflow-hidden relative"
                  whileTap={{ scale: 0.9, backgroundColor: "#8b5cf6" }}
                >
                  <Phone className="w-5 h-5 text-accent-purple group-hover:text-white transition-colors relative z-10" />
                  <motion.div
                    className="absolute inset-0 bg-accent-purple transition-opacity opacity-0 pointer-events-none"
                    whileTap={{ opacity: 1 }}
                  />
                </motion.span>
                +91 9555758227
              </motion.a>
              <motion.a
                href="https://github.com/aniketgour412"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-[11px] sm:text-xs font-bold text-white/90 group font-body"
                whileTap={{ scale: 0.95 }}
              >
                <motion.span
                  className="p-3.5 rounded-2xl bg-white/[0.05] border border-white/10 group-hover:bg-accent-teal group-hover:border-transparent transition-all shadow-lg overflow-hidden relative"
                  whileTap={{ scale: 0.9, backgroundColor: "#14b8a6" }}
                >
                  <Github className="w-5 h-5 text-accent-teal group-hover:text-white transition-colors relative z-10" />
                  <motion.div
                    className="absolute inset-0 bg-accent-teal transition-opacity opacity-0 pointer-events-none"
                    whileTap={{ opacity: 1 }}
                  />
                </motion.span>
                GitHub
              </motion.a>
            </motion.div>
          </motion.div>

          {/* ── Right: Industrial Photo Composition ── */}
          <motion.div
            className="relative flex justify-center order-1 lg:order-2"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Tech Ring */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-[500px] max-h-[500px] opacity-[0.03] select-none pointer-events-none text-white">
              <svg viewBox="0 0 100 100" className="w-full h-full animate-[spin_40s_linear_infinite]">
                <path id="circlePath" fill="none" stroke="currentColor" d="M 10, 50 a 40,40 0 1,1 80,0 40,40 0 1,1 -80,0" />
                <text className="font-heading font-extrabold text-[8px] uppercase tracking-widest fill-white">
                  <textPath xlinkHref="#circlePath">
                    React • TypeScript • Tailwind • Framer Motion • Frontend Engineering •
                  </textPath>
                </text>
              </svg>
            </div>

            {/* Dark industrial geometric bg */}
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-[3.5rem] rotate-[10deg] shadow-[0_32px_96px_rgba(0,0,0,0.25)]"
              style={{
                width: 'clamp(220px,38vw,420px)',
                height: 'clamp(220px,38vw,420px)',
                background: 'linear-gradient(140deg, #11111f 0%, #1e1e35 50%, #0c0c1a 100%)',
              }}
            />

            {/* Floating icon badge */}
            <motion.div
              className="absolute top-[5%] right-[0%] w-14 h-14 lg:w-20 lg:h-20 rounded-2xl flex items-center justify-center border border-white/10 shadow-2xl backdrop-blur-xl z-20 bg-white/[0.05]"
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <Code2 className="w-6 h-6 lg:w-8 lg:h-8 text-accent" />
            </motion.div>

            {/* Photo with double border */}
            <div
              className="relative z-10 p-2 rounded-full bg-gradient-to-tr from-accent/20 to-accent-purple/20 shadow-[0_24px_80px_rgba(0,0,0,0.2)]"
              style={{ width: 'clamp(180px,30vw,360px)', height: 'clamp(180px,30vw,360px)' }}
            >
              <div className="w-full h-full rounded-full overflow-hidden border-4 border-white/10">
                <img
                  src={heroPhoto}
                  alt="Aniket"
                  className="w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-700"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Industrial scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden sm:flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-accent to-transparent relative overflow-hidden">
          <motion.div
            className="absolute top-0 left-0 w-full h-1/2 bg-white/20"
            animate={{ y: [0, 48, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>
        <span className="text-[10px] font-extrabold tracking-[0.3em] uppercase text-white/20">explore</span>
      </motion.div>
    </section>
  )
}
