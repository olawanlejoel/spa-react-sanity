export default {
  name: "category",
  title: "Category",
  type: "document",
  fields: [{
      title: "Title",
      name: "title",
      type: "string",
    },
    {
      title: "Slug",
      name: "slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    {
      title: "Description",
      name: "description",
      type: "text",
    },
    {
      title: "Image",
      name: "image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      title: "Hex Code",
      name: "hexCode",
      type: "string",
    },
  ],
}