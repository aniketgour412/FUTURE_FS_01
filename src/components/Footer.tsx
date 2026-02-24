import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-primary">
      <motion.div
        className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8 py-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {/* Ultra-thin top border glow line */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
      </motion.div>
    </footer>
  )
}
