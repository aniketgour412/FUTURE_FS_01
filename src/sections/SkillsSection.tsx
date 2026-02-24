import { motion } from 'framer-motion'
import { Code2, Palette, Zap } from 'lucide-react'

const skillCategories = [
  {
    category: 'Frontend Engineering',
    icon: Code2,
    description: 'Core technologies for building robust and interactive web architectures.',
    accentTop: 'border-t-accent',
    iconBg: 'bg-gradient-to-br from-accent/12 to-accent/5',
    iconColor: 'text-accent',
    checkColor: 'text-accent',
    skills: ['React & TypeScript', 'Modern JavaScript (ES6+)', 'Redux / Context API', 'RESTful API Integration', 'HTML5 / Semantic Web'],
  },
  {
    category: 'Design & Interface',
    icon: Palette,
    description: 'Specializing in visual precision, responsive systems, and motion design.',
    accentTop: 'border-t-accent-rose',
    iconBg: 'bg-gradient-to-br from-accent-rose/12 to-accent-rose/5',
    iconColor: 'text-accent-rose',
    checkColor: 'text-accent-rose',
    skills: ['Tailwind CSS', 'Framer Motion', 'Responsive Architecture', 'UX Design Principles', 'CSS Grid / Flexbox'],
  },
  {
    category: 'Operations & Workflow',
    icon: Zap,
    description: 'Tools and methodologies that ensure code quality and deployment efficiency.',
    accentTop: 'border-t-accent-teal',
    iconBg: 'bg-gradient-to-br from-accent-teal/12 to-accent-teal/5',
    iconColor: 'text-accent-teal',
    checkColor: 'text-accent-teal',
    skills: ['Git Version Control', 'Vite / Webpack', 'npm / pnpm Package Management', 'Liquid Layouts', 'Cross-browser Stability'],
  },
]

export default function SkillsSection() {
  return (
    <section id="skills" className="relative py-24 md:py-32 overflow-hidden bg-primary">
      {/* Visual Depth */}
      <div className="absolute top-0 right-0 w-full h-full opacity-[0.05] pointer-events-none select-none overflow-hidden">
        <div className="absolute bottom-0 left-0 font-heading font-black text-[18vw] leading-none text-white select-none opacity-5 translate-y-1/4 -translate-x-1/4">
          STACK
        </div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8">

        {/* Professional Header */}
        <motion.div className="mb-16 md:mb-20" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.65 }}>
          <div className="accent-line mb-4" />
          <p className="section-label mb-3">Technical Expertise</p>
          <h2 className="font-heading font-extrabold text-white mb-4" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', letterSpacing: '-0.04em', lineHeight: 1 }}>
            Engineered for <br /><span className="text-white/30">the Modern Web.</span>
          </h2>
          <p className="text-white/50 text-base font-medium font-body max-w-lg leading-relaxed">
            A specialized toolset curated for efficiency, stability, and high-quality user experiences.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.category}
              className={`glass-card rounded-[2rem] p-8 border-t-[3px] ${cat.accentTop} transition-all duration-400 hover:-translate-y-2 flex flex-col relative overflow-hidden group`}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <div className="flex items-center gap-4 mb-3 group-hover:translate-x-1 transition-transform">
                <div className={`p-3 rounded-2xl ${cat.iconBg} shrink-0`}>
                  <cat.icon className={`w-5 h-5 ${cat.iconColor}`} />
                </div>
                <h3 className="font-heading font-bold text-white tracking-tight" style={{ fontSize: '1.2rem', letterSpacing: '-0.02em' }}>{cat.category}</h3>
              </div>

              <p className="text-white/40 text-[13px] font-body font-medium mb-8 leading-relaxed h-[60px]">{cat.description}</p>

              <div className="space-y-3 mt-auto">
                {cat.skills.map((skill, si) => (
                  <motion.div
                    key={skill}
                    className="flex items-center gap-3 group/item"
                    initial={{ opacity: 0, x: -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.25 + si * 0.05 }}
                  >
                    <Zap className={`w-3 h-3 shrink-0 ${cat.checkColor} opacity-70 group-hover/item:opacity-100 transition-opacity`} />
                    <span className="text-[13px] font-bold font-body text-white/70 tracking-tight group-hover/item:text-white transition-colors">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
