export type ThemeColor = 'pink' | 'blue' | 'yellow' | 'purple'

interface ColorTokens {
  gradient: string
  color: string
  shadowColor: string
  tagStyle: string
  accentBg: string
  accentText: string
  accentIcon: string
}

export const colorMap: Record<ThemeColor, ColorTokens> = {
  pink: {
    gradient: 'from-[#FFD5E5] to-[#E8DDF2]',
    color: 'bg-[#FFD5E5]/60 border-[#FFD5E5]',
    shadowColor: 'shadow-[4px_4px_0px_0px_var(--chiikawa-pink)] hover:shadow-[8px_8px_0px_0px_var(--chiikawa-pink)]',
    tagStyle: 'bg-[#FFD5E5]/60 text-[#853D55] border-[#FFD5E5]',
    accentBg: 'bg-[#FFD5E5]/40',
    accentText: 'text-[#853D55]',
    accentIcon: 'text-[#853D55]',
  },
  blue: {
    gradient: 'from-[#D2EBF7] to-[#E8DDF2]',
    color: 'bg-[#D2EBF7]/60 border-[#D2EBF7]',
    shadowColor: 'shadow-[4px_4px_0px_0px_var(--hachiware-blue)] hover:shadow-[8px_8px_0px_0px_var(--hachiware-blue)]',
    tagStyle: 'bg-[#D2EBF7]/60 text-[#2B5E75] border-[#D2EBF7]',
    accentBg: 'bg-[#D2EBF7]/40',
    accentText: 'text-[#2B5E75]',
    accentIcon: 'text-[#2B5E75]',
  },
  yellow: {
    gradient: 'from-[#FFF1C5] to-[#FFD5E5]',
    color: 'bg-[#FFF1C5]/60 border-[#FFF1C5]',
    shadowColor: 'shadow-[4px_4px_0px_0px_var(--usagi-yellow)] hover:shadow-[8px_8px_0px_0px_var(--usagi-yellow)]',
    tagStyle: 'bg-[#FFF1C5]/60 text-[#7A5F13] border-[#FFF1C5]',
    accentBg: 'bg-[#FFF1C5]/40',
    accentText: 'text-[#7A5F13]',
    accentIcon: 'text-[#7A5F13]',
  },
  purple: {
    gradient: 'from-[#E8DDF2] to-[#D2EBF7]',
    color: 'bg-[#E8DDF2]/60 border-[#E8DDF2]',
    shadowColor: 'shadow-[4px_4px_0px_0px_var(--momonga-purple)] hover:shadow-[8px_8px_0px_0px_var(--momonga-purple)]',
    tagStyle: 'bg-[#E8DDF2]/60 text-[#63437A] border-[#E8DDF2]',
    accentBg: 'bg-[#E8DDF2]/40',
    accentText: 'text-[#63437A]',
    accentIcon: 'text-[#63437A]',
  },
}
