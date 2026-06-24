const colorOptions = [
  { title: '吉伊粉', value: 'pink' },
  { title: '小八蓝', value: 'blue' },
  { title: '乌萨奇黄', value: 'yellow' },
  { title: '飞鼠紫', value: 'purple' },
]

export const note = {
  name: 'note',
  title: '学习笔记',
  type: 'document',
  orderings: [
    { title: '日期（最新优先）', name: 'dateDesc', by: [{ field: 'date', direction: 'desc' }] },
  ],
  fields: [
    {
      name: 'title',
      title: '笔记标题',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'slug',
      title: '链接标识（URL）',
      type: 'slug',
      options: { source: 'title' },
      description: '点击"Generate"自动生成。决定笔记详情页的网址',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'date',
      title: '发布日期',
      type: 'date',
      options: { dateFormat: 'YYYY-MM-DD' },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'readTime',
      title: '预计阅读时长',
      type: 'string',
      description: '如"8 min"',
    },
    {
      name: 'themeColor',
      title: '主题色',
      type: 'string',
      options: { list: colorOptions },
      description: '决定卡片颜色风格',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'summary',
      title: '摘要',
      type: 'text',
      rows: 3,
      description: '列表页显示的简短摘要，也会在详情页顶部引用块中展示',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'tags',
      title: '标签',
      type: 'array',
      of: [{ type: 'string' }],
      options: { layout: 'tags' },
    },
    {
      name: 'fullContent',
      title: '正文内容',
      type: 'text',
      rows: 25,
      description: '【重要】用空行（连续回车两次）来分隔段落，每段会单独显示',
    },
  ],
  preview: {
    select: { title: 'title', subtitle: 'date' },
    prepare: ({ title, subtitle }: any) => ({ title, subtitle }),
  },
}
