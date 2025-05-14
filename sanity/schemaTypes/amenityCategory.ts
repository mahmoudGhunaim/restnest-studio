import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'amenityCategory',
  title: 'Amenity Category',
  type: 'document',
  fields: [
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'category',
    },
  },
}) 