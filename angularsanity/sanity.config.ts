import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'AngularSanity',
  projectId: 'w28i4fn3',
  dataset: 'production',
  apiVersion: '2022-03-07',
  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
