import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'amenity',
  title: 'Amenity',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'icon',
      title: 'Icon',
      type: 'image',
    }),
    defineField({
      name: 'amenityCategory',
      title: 'Amenity Category',
      type: 'reference',
      to: [{type: 'amenityCategory'}],
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'amenityCategory.category',
      media: 'icon',
    },
  },
}) 