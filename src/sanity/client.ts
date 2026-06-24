import { createClient } from '@sanity/client'

export const sanityClient = createClient({
  projectId: '8r77iooa',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2024-01-01',
})
