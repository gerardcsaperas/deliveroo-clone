export default {
  name: 'restaurant',
  title: 'Restaurant',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Restaurant name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'shortDescription',
      title: 'Short description',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'image',
      title: 'Image of the restaurant',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'lat',
      title: 'Latitude of the restaurant',
      type: 'number',
    },
    {
      name: 'long',
      title: 'Longitude of the restaurant',
      type: 'number',
    },
    {
      name: 'address',
      title: 'Restaurant address',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'rating',
      title: 'Restaurant rating',
      type: 'number',
      validation: (Rule) =>
        Rule.required()
          .min(1)
          .max(5)
          .error("Please enter a value between 1 and 5"),
    },
    {
      name: 'cuisine',
      title: 'Cuisine',
      type: 'reference',
      to: [{ type: "cuisine" }],
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'dishes',
      type: 'array',
      title: 'Dishes',
      of: [
        {
          type: "reference",
          to: [{ type: "dish" }]
        }
      ]
    }
  ],
}
