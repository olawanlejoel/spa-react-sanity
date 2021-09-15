// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Foods',
  name: 'foods',
  type: 'document',
  fields: [{
      title: 'Food Name',
      name: 'foodName',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      title: 'A little description',
      name: 'foodDesc',
      type: 'text',
      options: {
        maxLength: 200,
      },
      validation: Rule => Rule.required()
    },
    {
      title: "Food Image",
      name: "foodImage",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "category",
      title: "Category",
      type: "reference",
      to: {
        type: "category"
      }
    },
  ]
}