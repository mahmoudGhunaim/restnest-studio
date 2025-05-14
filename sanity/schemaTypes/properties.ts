import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'properties',
  title: 'Properties',
  type: 'document',
  fields: [
    defineField({
      name: 'IDP',
      title: 'IDP',
      type: 'number',
    }),
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'city',
      title: 'City',
      type: 'string',
    }),
    defineField({
      name: 'state',
      title: 'State',
      type: 'string',
    }),
    defineField({
      name: 'bathroomsNumber',
      title: 'Bathrooms Number',
      type: 'string',
    }),
    defineField({
      name: 'bedrooms',
      title: 'Bedrooms',
      type: 'string',
    }),
    defineField({
      name: 'bedroom',
      title: 'Bedroom',
      type: 'array',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'guests',
      title: 'Guests',
      type: 'string',
    }),
    defineField({
      name: 'hideFromPropertiesList',
      title: 'Hide From Properties List',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'extraordinarySpaces',
      title: 'Extraordinary Spaces',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'imageurl',
      title: 'Images',
      type: 'array',
      of: [{type: 'image'}],
    }),
    defineField({
      name: 'latitude',
      title: 'Latitude',
      type: 'number',
    }),
    defineField({
      name: 'longitude',
      title: 'Longitude',
      type: 'number',
    }),
    defineField({
      name: 'order',
      title: 'Order',
      type: 'number',
    }),
    defineField({
      name: 'price',
      title: 'Price',
      type: 'number',
    }),
    defineField({
      name: 'propertiesCategory',
      title: 'Properties Category',
      type: 'reference',
      to: [{type: 'propertiesCategory'}],
    }),
    defineField({
      name: 'ratesAndMinNights',
      title: 'Rates And Min Nights',
      type: 'array',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'squareMeters',
      title: 'Square Meters',
      type: 'string',
    }),
    defineField({
      name: 'amenities',
      title: 'Amenities',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'amenity'}],
        },
      ],
    }),
    defineField({
      name: 'bookings',
      title: 'Bookings',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'booking'}],
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'city',
      media: 'imageurl.0',
    },
  },
}) 