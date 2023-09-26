const schema = {
  name: "resource",
  title: "Resource",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      require,
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "slug",
      title: "slug",
      type: "slug",
      options: {source: 'title'}
    },
    {
      name: "downloadLink",
      title: "Download Link",
      type: "url",
      validation: (Rule: any) => Rule.required()
    },
    {
      name: "views",
      title: "views",
      type: "number",
      initialValue: 0
    },
    {
      name: "poster",
      title: "Poster",
      type: "image",
      validation: (Rule: any) => Rule.required(),
      options: {
        hotspot: true
      }
    },
    {
      name: "category",
      title: "Category",
      type: "string",
      validation: (Rule: any) => Rule.required(),
      options: {
        list: ['other', 'Next13', 'frontend', 'backend', 'Fullstack']
      }
    },
  ],
};

export default schema;
