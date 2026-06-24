const colorOptions = [
  { title: '吉伊粉', value: 'pink' },
  { title: '小八蓝', value: 'blue' },
  { title: '乌萨奇黄', value: 'yellow' },
  { title: '飞鼠紫', value: 'purple' },
]

const iconOptions = [
  { title: '数据库 (Database)', value: 'Database' },
  { title: '对话框 (MessageSquare)', value: 'MessageSquare' },
  { title: '勾选 (CheckCircle2)', value: 'CheckCircle2' },
  { title: '图表 (BarChart3)', value: 'BarChart3' },
  { title: 'AI 大脑 (Brain)', value: 'Brain' },
  { title: '文档 (FileText)', value: 'FileText' },
  { title: '图层 (Layers)', value: 'Layers' },
  { title: '闪电 (Zap)', value: 'Zap' },
]

export const skill = {
  name: 'skill',
  title: '个人优势',
  type: 'document',
  orderings: [
    { title: '排序', name: 'order', by: [{ field: 'order', direction: 'asc' }] },
  ],
  fields: [
    {
      name: 'title',
      title: '优势名称',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'order',
      title: '排列顺序',
      type: 'number',
      description: '数字越小越靠前',
    },
    {
      name: 'themeColor',
      title: '主题色',
      type: 'string',
      options: { list: colorOptions },
      description: '决定卡片图标颜色和阴影风格',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'iconName',
      title: '图标',
      type: 'string',
      options: { list: iconOptions },
    },
    {
      name: 'desc',
      title: '能力描述',
      type: 'text',
      rows: 4,
      description: '对该优势的详细说明',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'points',
      title: '要点标签',
      type: 'array',
      of: [{ type: 'string' }],
      options: { layout: 'tags' },
      description: '卡片底部的技能标签，建议 3-5 个',
    },
  ],
  preview: {
    select: { title: 'title', subtitle: 'themeColor' },
  },
}
