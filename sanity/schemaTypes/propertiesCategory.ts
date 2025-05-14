import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'propertiesCategory',
  title: 'Properties Category',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'name',
    },
  },
}) 