const colorOptions = [
  { title: '吉伊粉', value: 'pink' },
  { title: '小八蓝', value: 'blue' },
  { title: '乌萨奇黄', value: 'yellow' },
  { title: '飞鼠紫', value: 'purple' },
]

const tagFields = [
  { name: 'label', title: '标签文字', type: 'string' },
  {
    name: 'color',
    title: '颜色',
    type: 'string',
    options: { list: colorOptions },
  },
]

export const siteSettings = {
  name: 'siteSettings',
  title: '网站设置',
  type: 'document',
  __experimental_actions: ['update', 'publish'],
  fields: [
    {
      name: 'displayName',
      title: '显示名称',
      type: 'string',
      description: '你的名字，显示在头像下方和页脚',
    },
    {
      name: 'tagline',
      title: '首屏大标题',
      type: 'string',
      description: 'Hero 区域最大的那行标题文字',
    },
    {
      name: 'bio',
      title: '个人介绍',
      type: 'text',
      rows: 4,
      description: '头像右侧的自我介绍（支持换行）',
    },
    {
      name: 'avatar',
      title: '头像图片',
      type: 'image',
      options: { hotspot: true },
      description: '建议上传正方形图片，会自动裁剪为圆形',
    },
    {
      name: 'email',
      title: '邮箱',
      type: 'string',
      description: '点击"复制我的邮箱"按钮复制的邮箱地址',
    },
    {
      name: 'githubUrl',
      title: 'GitHub 链接',
      type: 'url',
    },
    {
      name: 'linkedinUrl',
      title: 'LinkedIn 链接',
      type: 'url',
    },
    {
      name: 'ctaHeadline',
      title: '底部 CTA 大标题',
      type: 'string',
      description: '联系区域的大标题，如"寻找实习 / 全职机会，欢迎联系！"',
    },
    {
      name: 'heroTags',
      title: 'Hero 角色标签',
      type: 'array',
      of: [{ type: 'object', fields: tagFields }],
      description: '首屏标题下方的四个角色标签',
    },
    {
      name: 'jobTags',
      title: '求职意向标签',
      type: 'array',
      of: [{ type: 'object', fields: tagFields }],
      description: '底部联系区域的求职意向标签',
    },
    {
      name: 'stats',
      title: '经历统计数据',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'label', title: '指标名称', type: 'string' },
          { name: 'value', title: '数值', type: 'string', description: '如"10万+"' },
          { name: 'unit', title: '单位', type: 'string', description: '如"条"，可留空' },
          { name: 'desc', title: '副描述', type: 'string' },
        ],
      }],
      description: '经历区域四个统计数字卡片（最多 4 个）',
      validation: (Rule: any) => Rule.max(4),
    },
    {
      name: 'educationTitle',
      title: '教育经历 · 专业名称',
      type: 'string',
    },
    {
      name: 'educationPeriod',
      title: '教育经历 · 时间段',
      type: 'string',
      description: '如"2023 - 至今"',
    },
    {
      name: 'educationStatus',
      title: '教育经历 · 状态标签',
      type: 'string',
      description: '如"在读大三"，显示为小 Badge',
    },
    {
      name: 'educationDesc',
      title: '教育经历 · 描述',
      type: 'text',
      rows: 3,
    },
  ],
}
