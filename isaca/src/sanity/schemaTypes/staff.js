export default {
  name: 'staff',
  title: 'Staff',
  type: 'document',
  fields: [
    defineField({
      name: 'staffName',
      title: 'Staff Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'staffPosition',
      title: 'Staff Position',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'staffPhoto',
      title: 'Staff Photo',
      type: 'image',
      options: {
        hotspot: true
      },
    })
  ]
}