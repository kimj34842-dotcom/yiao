export interface SiteSettingsData {
  displayName: string
  tagline: string
  bio: string
  avatarUrl: string | null
  email: string
  githubUrl: string
  linkedinUrl: string
  ctaHeadline: string
  heroTags: Array<{ _key?: string; label: string; color: string }>
  jobTags: Array<{ _key?: string; label: string; color: string }>
  stats: Array<{ _key?: string; label: string; value: string; unit: string; desc: string }>
  educationTitle: string
  educationPeriod: string
  educationStatus: string
  educationDesc: string
}

export interface SkillItem {
  title: string
  desc: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon: any
  points: string[]
  color: string
  shadowColor: string
  tagStyle: string
}
