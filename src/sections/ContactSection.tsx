import { motion } from 'framer-motion'
import { Mail, Phone, Github, Zap, ExternalLink } from 'lucide-react'

const contactInfo = [
  {
    icon: Mail,
    label: 'Corporate Email',
    value: 'aniketgourkv@gmail.com',
    href: 'mailto:aniketgourkv@gmail.com',
    accentColor: 'text-accent',
    bgColor: 'bg-accent',
    borderColor: 'border-accent/20',
  },
  {
    icon: Phone,
    label: 'Direct Line',
    value: '+91 9555758227',
    href: 'tel:+919555758227',
    accentColor: 'text-accent-purple',
    bgColor: 'bg-accent-purple',
    borderColor: 'border-accent-purple/20',
  },
  {
    icon: Github,
    label: 'Developer Profile',
    value: 'aniketgour412',
    href: 'https://github.com/aniketgour412',
    accentColor: 'text-accent-teal',
    bgColor: 'bg-accent-teal',
    borderColor: 'border-accent-teal/20',
  },
]

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative py-28 md:py-40 overflow-hidden noise bg-primary"
    >
      {/* Animated Mesh Gradients */}
      <motion.div
        className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full pointer-events-none blur-[100px] opacity-[0.15]"
        style={{ background: 'radial-gradient(circle, #3b82f6 0%, transparent 70%)' }}
        animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.25, 0.15] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute -bottom-20 -left-20 w-[600px] h-[600px] rounded-full pointer-events-none blur-[100px] opacity-[0.12]"
        style={{ background: 'radial-gradient(circle, #8b5cf6 0%, transparent 70%)' }}
        animate={{ scale: [1.1, 1, 1.1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
      />

      {/* Industrial grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)',
          backgroundSize: '52px 52px',
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-5 sm:px-8">

        {/* Global Header */}
        <motion.div
          className="text-center mb-16 md:mb-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Professional Status */}
          <motion.div
            className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full border border-white/[0.08] mb-12 backdrop-blur-xl bg-white/[0.03]"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Zap className="w-3.5 h-3.5 text-accent" fill="currentColor" />
            <span className="text-white/50 text-[10px] font-extrabold tracking-[0.3em] uppercase">Industry Ready • Open to Collaboration</span>
          </motion.div>

          <h2 className="font-heading font-extrabold text-white mb-6 leading-none" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', letterSpacing: '-0.05em' }}>
            Initiate a <br /> <span className="gradient-text">Partnership.</span>
          </h2>

          <p className="text-white/40 text-base sm:text-lg font-body font-medium leading-relaxed max-w-md mx-auto">
            Currently vetting opportunities for frontend engineering roles and technical collaborations.
          </p>
        </motion.div>

        {/* Business Cards */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          {contactInfo.map((info, i) => (
            <motion.a
              key={info.label}
              href={info.href}
              className={`flex items-center gap-4 px-6 py-5 rounded-[2rem] bg-white/[0.03] border border-white/[0.05] hover:border-white/[0.12] transition-all duration-500 group relative overflow-hidden`}
              whileHover={{ y: -6, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

              <div className={`p-4 rounded-2xl bg-white/[0.05] border ${info.borderColor} group-hover:${info.bgColor} group-hover:border-transparent shadow-inner shrink-0 group-hover:scale-110 transition-all duration-500 relative overflow-hidden`}>
                <info.icon className={`w-6 h-6 ${info.accentColor} group-hover:text-white transition-colors duration-500 relative z-10`} />
                <motion.div
                  className="absolute inset-0 transition-opacity opacity-0 group-hover:opacity-100"
                  style={{ backgroundColor: info.accentColor === 'text-accent' ? '#3b82f6' : info.accentColor === 'text-accent-purple' ? '#8b5cf6' : '#14b8a6' }}
                  whileTap={{ opacity: 1 }}
                />
              </div>
              <div className="min-w-0 flex-1 relative z-10">
                <p className="text-white/30 text-[10px] font-extrabold tracking-[0.2em] uppercase font-body mb-1">{info.label}</p>
                <p className={`text-white/90 group-hover:${info.accentColor} text-[13px] sm:text-sm font-bold font-body break-all tracking-tight transition-colors duration-400`}>
                  {info.value}
                </p>
              </div>
              <ExternalLink className={`w-4 h-4 ${info.accentColor} opacity-20 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-400 shrink-0`} />
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
