import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { schemaTypes } from './src/sanity/schemas'

export default defineConfig({
  name: 'camille-portfolio',
  title: 'Camille 作品集后台',
  projectId: '8r77iooa',
  dataset: 'production',
  plugins: [
    deskTool({
      structure: (S) =>
        S.list()
          .id('root')
          .title('内容管理')
          .items([
            S.listItem()
              .title('网站设置')
              .id('siteSettings')
              .child(
                S.document()
                  .schemaType('siteSettings')
                  .documentId('siteSettings')
              ),
            S.divider(),
            S.documentTypeListItem('project').title('精选项目'),
            S.documentTypeListItem('note').title('学习笔记'),
            S.documentTypeListItem('skill').title('个人优势'),
          ]),
    }),
  ],
  schema: {
    types: schemaTypes,
  },
})
