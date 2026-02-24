import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { AlignJustify as Menu, X } from 'lucide-react'

const NAV_ITEMS = ['About', 'Skills', 'Contact'] as const
type NavItem = (typeof NAV_ITEMS)[number]

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const close = useCallback(() => setIsOpen(false), [])

  const scrollTo = useCallback(
    (section: NavItem) => {
      document.getElementById(section.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })
      close()
    },
    [close],
  )

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  return (
    <>
      <motion.nav
        className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-lg transition-all duration-500 rounded-2xl border ${scrolled
            ? 'glass-card shadow-2xl shadow-black/50'
            : 'bg-transparent border-transparent'
          }`}
        initial={{ y: -100, x: '-50%', opacity: 0 }}
        animate={{ y: 0, x: '-50%', opacity: 1 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="px-6 py-3.5 flex items-center justify-between">
          <a href="#" className="font-heading font-black text-xl tracking-tight text-white group relative">
            Portfolio<span className="text-accent group-hover:animate-pulse">.</span>
          </a>

          <div className="hidden sm:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={(e) => {
                  e.preventDefault()
                  scrollTo(item)
                }}
                className="text-[10px] font-extrabold uppercase tracking-[0.25em] text-white/40 hover:text-white transition-all relative py-1 group"
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-accent group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="sm:hidden p-2 text-white/70 hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            animate={{ opacity: 1, backdropFilter: 'blur(12px)' }}
            exit={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            className="fixed inset-0 z-[45] bg-primary/80 md:hidden"
            onClick={close}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="flex flex-col items-center justify-center min-h-screen gap-10 px-8"
              onClick={(e) => e.stopPropagation()}
            >
              {NAV_ITEMS.map((item, i) => (
                <motion.button
                  key={item}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  onClick={() => scrollTo(item)}
                  className="text-2xl font-heading font-extrabold text-white/50 hover:text-white transition-colors tracking-tight"
                >
                  {item}
                </motion.button>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
