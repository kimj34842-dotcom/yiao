import React, { useState, lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Experience } from './components/Experience'
import { Projects } from './components/Projects'
import { Notes } from './components/Notes'
import { Skills } from './components/Skills'
import { Contact } from './components/Contact'
import { NoteDetail } from './pages/NoteDetail'
import { ProjectDetail } from './pages/ProjectDetail'
import { AppDataProvider, useAppData } from './sanity/SanityDataContext'

const StudioPage = lazy(() => import('./pages/StudioPage'))

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.34, 1.56, 0.64, 1] as any },
  },
}

const HomePage: React.FC = () => {
  const { siteSettings } = useAppData()
  const [showToast, setShowToast] = useState(false)
  const [toastCoords, setToastCoords] = useState({ x: 0, y: 0 })

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault()
    navigator.clipboard.writeText(siteSettings.email).then(() => {
      setToastCoords({ x: e.clientX, y: e.clientY - 40 })
      setShowToast(true)
      setTimeout(() => setShowToast(false), 2000)
    }).catch(console.error)
  }

  return (
    <div className="min-h-screen bg-bg text-text selection:bg-accent-pink/50 selection:text-text relative">
      <Navbar onCopyEmail={handleCopyEmail} />
      <Hero />

      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }} variants={sectionVariants}>
        <Experience onCopyEmail={handleCopyEmail} />
      </motion.div>

      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }} variants={sectionVariants}>
        <Projects />
      </motion.div>

      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }} variants={sectionVariants}>
        <Notes />
      </motion.div>

      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }} variants={sectionVariants}>
        <Skills />
      </motion.div>

      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }} variants={sectionVariants}>
        <Contact onCopyEmail={handleCopyEmail} />
      </motion.div>

      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: -10 }}
            transition={{ type: 'spring', stiffness: 300, damping: 15 }}
            style={{ position: 'fixed', left: toastCoords.x - 80, top: toastCoords.y, zIndex: 9999 }}
            className="px-4 py-2 rounded-full bg-text text-bg text-xs font-semibold shadow-lg flex items-center gap-1.5 pointer-events-none border border-border/10"
          >
            <span>(•͈⌔•͈⑅)</span>
            <span>已复制到剪贴板啦！</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

const App: React.FC = () => (
  <Routes>
    <Route
      path="/studio/*"
      element={
        <Suspense fallback={<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh', fontFamily: 'sans-serif', color: '#8A7E7D' }}>后台加载中…</div>}>
          <StudioPage />
        </Suspense>
      }
    />
    <Route
      path="/*"
      element={
        <AppDataProvider>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/notes/:slug" element={<NoteDetail />} />
            <Route path="/projects/:slug" element={<ProjectDetail />} />
          </Routes>
        </AppDataProvider>
      }
    />
  </Routes>
)

export default App
