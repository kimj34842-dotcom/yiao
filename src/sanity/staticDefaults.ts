import React from 'react'
import { Database, MessageSquare, CheckCircle2, BarChart3 } from 'lucide-react'
import type { SiteSettingsData, SkillItem } from './types'
import { projects } from '../data/projects'
import { notes } from '../data/notes'

export const staticSiteSettings: SiteSettingsData = {
  displayName: 'Camille',
  tagline: '嗨，很高兴见到你！',
  bio: '大三在读，数据科学与大数据专业。\n将数据科学的严谨性与 AI 训练的创造性相结合，致力于构建高质量数据闭环，驱动大模型在垂直场景精准落地。',
  avatarUrl: null,
  email: 'camille_aitrainer@163.com',
  githubUrl: 'https://github.com',
  linkedinUrl: 'https://linkedin.com',
  ctaHeadline: '寻找实习 / 全职机会，欢迎联系！',
  heroTags: [
    { label: 'AI Trainer', color: 'pink' },
    { label: 'Data Science', color: 'blue' },
    { label: 'Prompt Engineering', color: 'yellow' },
    { label: 'RLHF', color: 'purple' },
  ],
  jobTags: [
    { label: 'AI 训练师', color: 'pink' },
    { label: '数据标注工程师', color: 'blue' },
    { label: 'Prompt 工程师', color: 'yellow' },
  ],
  stats: [
    { label: '标注与清洗数据', value: '10万+', unit: '条', desc: '多模态/文本高质量数据集' },
    { label: 'Prompt 优化迭代', value: '500+', unit: '次', desc: '覆盖主流大模型与复杂场景' },
    { label: '参与 AI 项目', value: '5+', unit: '个', desc: '包含数据集构建与对齐评估' },
    { label: '专业绩点排名', value: 'Top 10%', unit: '', desc: '数据科学与大数据专业' },
  ],
  educationTitle: '数据科学与大数据技术专业',
  educationPeriod: '2023 - 至今',
  educationStatus: '在读大三',
  educationDesc: '系统学习了机器学习、深度学习、数据挖掘、统计学及 Python 数据分析，为 AI 训练奠定了坚实的数据底座。',
}

export const staticSkills: SkillItem[] = [
  {
    title: '数据标注与清洗',
    desc: '熟练掌握文本、图像、多模态数据的清洗与标注流程。能够设计高效的启发式过滤规则，剔除噪声数据，构建高质量的微调（SFT）数据集。',
    icon: React.createElement(Database, { className: 'w-6 h-6 text-[#2B5E75]' }),
    points: ['SFT 数据集构建', '多模态数据对齐', '噪声过滤与去重', '标注指南制定'],
    color: 'bg-[#D2EBF7]/60 border-[#D2EBF7]',
    shadowColor: 'shadow-[4px_4px_0px_0px_var(--hachiware-blue)] hover:shadow-[8px_8px_0px_0px_var(--hachiware-blue)]',
    tagStyle: 'bg-[#D2EBF7]/60 text-[#2B5E75] border-[#D2EBF7]',
  },
  {
    title: 'Prompt 工程设计',
    desc: '深入理解大模型涌现能力与上下文学习。擅长设计 Few-shot、CoT（思维链）、ReAct 等复杂 Prompt 架构，有效引导模型输出，降低幻觉率。',
    icon: React.createElement(MessageSquare, { className: 'w-6 h-6 text-[#7A5F13]' }),
    points: ['Few-shot / CoT 设计', '角色扮演与场景适配', '防注入与安全防御', 'Prompt 自动化评测'],
    color: 'bg-[#FFF1C5]/60 border-[#FFF1C5]',
    shadowColor: 'shadow-[4px_4px_0px_0px_var(--usagi-yellow)] hover:shadow-[8px_8px_0px_0px_var(--usagi-yellow)]',
    tagStyle: 'bg-[#FFF1C5]/60 text-[#7A5F13] border-[#FFF1C5]',
  },
  {
    title: '模型评估与反馈',
    desc: '掌握主流大模型的评测方法。能够设计多维度的量化评估指标，进行人工偏好标注（RLHF），通过精准的反馈闭环驱动模型迭代对齐。',
    icon: React.createElement(CheckCircle2, { className: 'w-6 h-6 text-[#853D55]' }),
    points: ['多维度量化评测', 'RLHF 偏好标注', 'Bad Case 归因分析', '模型安全合规评估'],
    color: 'bg-[#FFD5E5]/60 border-[#FFD5E5]',
    shadowColor: 'shadow-[4px_4px_0px_0px_var(--chiikawa-pink)] hover:shadow-[8px_8px_0px_0px_var(--chiikawa-pink)]',
    tagStyle: 'bg-[#FFD5E5]/60 text-[#853D55] border-[#FFD5E5]',
  },
  {
    title: '数据分析与挖掘',
    desc: '具备扎实的数据科学功底。熟练使用 Python (Pandas, NumPy) 进行探索性数据分析（EDA），能够从海量交互日志中挖掘用户意图与模型缺陷。',
    icon: React.createElement(BarChart3, { className: 'w-6 h-6 text-[#63437A]' }),
    points: ['Python 数据分析', 'EDA 探索性分析', '交互日志意图挖掘', '可视化图表呈现'],
    color: 'bg-[#E8DDF2]/60 border-[#E8DDF2]',
    shadowColor: 'shadow-[4px_4px_0px_0px_var(--momonga-purple)] hover:shadow-[8px_8px_0px_0px_var(--momonga-purple)]',
    tagStyle: 'bg-[#E8DDF2]/60 text-[#63437A] border-[#E8DDF2]',
  },
]

export const staticDefaults = {
  siteSettings: staticSiteSettings,
  projects,
  notes,
  skills: staticSkills,
}
