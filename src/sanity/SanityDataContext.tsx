import React, { createContext, useContext, useEffect, useState } from 'react'
import {
  Database, MessageSquare, CheckCircle2, BarChart3,
  Brain, FileText, Layers, Zap,
} from 'lucide-react'
import { sanityClient } from './client'
import { ALL_DATA_QUERY } from './queries'
import { colorMap } from './colorMap'
import type { SiteSettingsData, SkillItem } from './types'
import type { ProjectData } from '../data/projects'
import type { NoteData } from '../data/notes'
import { staticDefaults } from './staticDefaults'

export interface AppData {
  siteSettings: SiteSettingsData
  projects: ProjectData[]
  notes: NoteData[]
  skills: SkillItem[]
}

const AppDataContext = createContext<AppData>(staticDefaults)

export const useAppData = () => useContext(AppDataContext)

const lucideIconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Database, MessageSquare, CheckCircle2, BarChart3, Brain, FileText, Layers, Zap,
}

function buildIcon(iconName: string, themeColor: string) {
  const Comp = lucideIconMap[iconName] || Database
  const cm = colorMap[themeColor as keyof typeof colorMap] || colorMap.blue
  return React.createElement(Comp, { className: `w-6 h-6 ${cm.accentIcon}` })
}

function transformProject(sp: Record<string, any>): ProjectData {
  const cm = colorMap[sp.themeColor as keyof typeof colorMap] || colorMap.blue
  const paragraphs: string[] = typeof sp.fullContent === 'string'
    ? sp.fullContent.split(/\n\n+/).filter(Boolean)
    : (sp.fullContent || [])
  return {
    slug: sp.slug,
    title: sp.title || '',
    desc: sp.desc || '',
    fullContent: paragraphs,
    tags: sp.tags || [],
    icon: buildIcon(sp.iconName || 'Database', sp.themeColor || 'blue'),
    color: cm.gradient,
    shadowColor: cm.shadowColor,
    borderColor: 'hover:border-text',
    stat: sp.stat || '',
    statLabel: sp.statLabel || '',
    tagStyle: cm.tagStyle,
    accentBg: cm.accentBg,
    accentText: cm.accentText,
  }
}

function transformNote(sn: Record<string, any>): NoteData {
  const cm = colorMap[sn.themeColor as keyof typeof colorMap] || colorMap.pink
  const paragraphs: string[] = typeof sn.fullContent === 'string'
    ? sn.fullContent.split(/\n\n+/).filter(Boolean)
    : (sn.fullContent || [])
  return {
    slug: sn.slug,
    title: sn.title || '',
    date: sn.date || '',
    readTime: sn.readTime || '',
    summary: sn.summary || '',
    fullContent: paragraphs,
    tags: sn.tags || [],
    shadowColor: cm.shadowColor,
    accentBg: cm.accentBg,
    accentIcon: cm.accentIcon,
    tagStyle: cm.tagStyle,
  }
}

function transformSkill(ss: Record<string, any>): SkillItem {
  const cm = colorMap[ss.themeColor as keyof typeof colorMap] || colorMap.blue
  return {
    title: ss.title || '',
    desc: ss.desc || '',
    icon: buildIcon(ss.iconName || 'Database', ss.themeColor || 'blue'),
    points: ss.points || [],
    color: cm.color,
    shadowColor: cm.shadowColor,
    tagStyle: cm.tagStyle,
  }
}

export const AppDataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [data, setData] = useState<AppData>(staticDefaults)

  useEffect(() => {
    sanityClient.fetch(ALL_DATA_QUERY)
      .then((raw: Record<string, any>) => {
        if (!raw) return
        setData({
          siteSettings: raw.siteSettings
            ? { ...staticDefaults.siteSettings, ...raw.siteSettings }
            : staticDefaults.siteSettings,
          projects: raw.projects?.length
            ? raw.projects.map(transformProject)
            : staticDefaults.projects,
          notes: raw.notes?.length
            ? raw.notes.map(transformNote)
            : staticDefaults.notes,
          skills: raw.skills?.length
            ? raw.skills.map(transformSkill)
            : staticDefaults.skills,
        })
      })
      .catch(console.error)
  }, [])

  return <AppDataContext.Provider value={data}>{children}</AppDataContext.Provider>
}
