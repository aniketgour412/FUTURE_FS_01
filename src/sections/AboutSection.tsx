import { motion } from 'framer-motion'
import { Code2, Palette, BookOpen, Zap } from 'lucide-react'

const highlights = [
  {
    icon: Code2,
    title: 'Modern Architecture',
    description: 'Committed to writing scalable, maintainable, and highly efficient modular codebases.',
    iconBg: 'bg-gradient-to-br from-accent/12 to-accent/5',
    iconColor: 'text-accent',
    borderColor: 'border-l-accent',
    tag: 'Core',
    tagBg: 'bg-accent/10 text-accent',
  },
  {
    icon: Palette,
    title: 'Visual Precision',
    description: 'Obsessed with pixel-perfect layouts, fluid motion, and sophisticated user interfaces.',
    iconBg: 'bg-gradient-to-br from-accent-rose/12 to-accent-rose/5',
    iconColor: 'text-accent-rose',
    borderColor: 'border-l-accent-rose',
    tag: 'Design',
    tagBg: 'bg-accent-rose/10 text-accent-rose',
  },
  {
    icon: BookOpen,
    title: 'Strategic Growth',
    description: 'Rapidly adapting to next-gen technologies and industry standards to stay ahead.',
    iconBg: 'bg-gradient-to-br from-accent-purple/12 to-accent-purple/5',
    iconColor: 'text-accent-purple',
    borderColor: 'border-l-accent-purple',
    tag: 'Vision',
    tagBg: 'bg-accent-purple/10 text-accent-purple',
  },
]

const stats = [
  { value: '5+', label: 'Technologies' },
  { value: '1yr+', label: 'Industry Immersion' },
]

export default function AboutSection() {
  return (
    <section id="about" className="relative py-24 md:py-32 overflow-hidden bg-primary">
      {/* Visual Depth */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.05] pointer-events-none select-none overflow-hidden">
        <div className="absolute top-0 right-0 font-heading font-black text-[20vw] leading-none text-white select-none opacity-5 -translate-y-1/2 translate-x-1/4">
          BIO
        </div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8">

        {/* Professional Header */}
        <div className="grid lg:grid-cols-2 gap-10 items-end mb-16 md:mb-20">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <div className="accent-line mb-4" />
            <p className="section-label mb-3">Professional Bio</p>
            <h2 className="font-heading font-extrabold text-white mb-0" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', letterSpacing: '-0.04em', lineHeight: 1 }}>
              Defining the <br /> <span className="text-white/30">Digital Standard.</span>
            </h2>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
            <p className="text-white/60 text-base font-medium font-body max-w-sm leading-relaxed">
              I am a frontend developer dedicated to constructing robust, future-proof interfaces that elevate the user experience.
            </p>
          </motion.div>
        </div>

        {/* Stats Grid */}
        <motion.div className="flex flex-wrap gap-12 sm:gap-20 mb-20" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55 }}>
          {stats.map((s) => (
            <div key={s.label} className="text-left group cursor-default">
              <div className="font-heading font-extrabold text-white group-hover:text-accent transition-colors" style={{ fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', letterSpacing: '-0.05em', lineHeight: 1.0 }}>{s.value}</div>
              <div className="text-white/30 text-[10px] font-bold font-body mt-2 tracking-[0.2em] uppercase">{s.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Strategic Grid */}
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-start">

          {/* Story card – Focus on results and passion */}
          <motion.div className="lg:col-span-3" initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.65, delay: 0.1 }}>
            <div className="glass-card rounded-[2.5rem] p-8 sm:p-12 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-accent/[0.05] to-transparent rounded-3xl" />

              <div className="flex items-center gap-3 mb-8">
                <div className="w-8 h-[2px] bg-accent" />
                <span className="section-label text-accent">The Mission</span>
              </div>

              <div className="space-y-6">
                <p className="text-white font-heading font-bold text-xl sm:text-2xl leading-tight tracking-tight">
                  Engineering Intuitive Solutions <br /> through Modern Technologies.
                </p>
                <p className="text-white/70 leading-relaxed font-body font-medium text-base">
                  My professional journey is centered on the intersection of design thinking and logic. I don't just build sites; I build systems. My goal is to deliver products that are as performant as they are beautiful.
                </p>
                <p className="text-white/70 leading-relaxed font-body font-medium text-base">
                  By leveraging modern frameworks like React and mastering the nuances of CSS architecture, I ensure every project is built upon a solid, professional foundation.
                </p>
              </div>

              <div className="mt-10 pt-8 border-t border-white/[0.05] flex items-center gap-4">
                <div className="p-3 rounded-2xl bg-white/[0.05]">
                  <Zap className="w-5 h-5 text-accent" />
                </div>
                <span className="text-xs font-bold tracking-widest uppercase text-white/40">Dedicated to Excellence</span>
              </div>
            </div>
          </motion.div>

          {/* Highlights – Professional Pillar Cards */}
          <div className="lg:col-span-2 space-y-4">
            {highlights.map((item, i) => (
              <motion.div
                key={item.title}
                className="glass-card rounded-3xl p-6 relative overflow-hidden group"
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.15 + i * 0.1 }}
              >
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-2xl ${item.iconBg} shrink-0 group-hover:scale-110 transition-transform`}>
                    <item.icon className={`w-5 h-5 ${item.iconColor}`} />
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                      <h3 className="font-heading text-white font-bold text-base tracking-tight">{item.title}</h3>
                      <span className={`text-[9px] font-extrabold px-2 py-0.5 rounded-full ${item.tagBg} tracking-[0.15em] uppercase`}>
                        {item.tag}
                      </span>
                    </div>
                    <p className="text-white/50 text-[13px] leading-relaxed font-body font-medium">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
