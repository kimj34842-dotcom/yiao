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

export const project = {
  name: 'project',
  title: '精选项目',
  type: 'document',
  orderings: [
    { title: '排序', name: 'order', by: [{ field: 'order', direction: 'asc' }] },
  ],
  fields: [
    {
      name: 'title',
      title: '项目标题',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'slug',
      title: '链接标识（URL）',
      type: 'slug',
      options: { source: 'title' },
      description: '点击"Generate"自动生成，也可手动修改。决定项目详情页的网址',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'order',
      title: '排列顺序',
      type: 'number',
      description: '数字越小越靠前。如：1、2、3',
    },
    {
      name: 'themeColor',
      title: '主题色',
      type: 'string',
      options: { list: colorOptions },
      description: '决定卡片颜色和阴影风格',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'iconName',
      title: '图标',
      type: 'string',
      options: { list: iconOptions },
      description: '卡片左侧展示的图标',
    },
    {
      name: 'stat',
      title: '核心数字',
      type: 'string',
      description: '如"5W+"，大字展示在卡片左侧',
    },
    {
      name: 'statLabel',
      title: '数字说明',
      type: 'string',
      description: '如"高质量图文对"',
    },
    {
      name: 'desc',
      title: '项目简介',
      type: 'text',
      rows: 4,
      description: '列表页显示的摘要（建议 100 字以内，超出自动截断）',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'tags',
      title: '技术标签',
      type: 'array',
      of: [{ type: 'string' }],
      options: { layout: 'tags' },
      description: '输入后按回车添加标签',
    },
    {
      name: 'fullContent',
      title: '详情页正文',
      type: 'text',
      rows: 20,
      description: '详情页的完整正文。【重要】用空行（连续回车两次）来分隔段落，每段会单独显示',
    },
  ],
  preview: {
    select: { title: 'title', subtitle: 'stat' },
    prepare: ({ title, subtitle }: any) => ({
      title,
      subtitle: subtitle ? `核心数字：${subtitle}` : '',
    }),
  },
}
