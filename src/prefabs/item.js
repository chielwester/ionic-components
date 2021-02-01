(() => ({
  name: 'Item',
  icon: 'ListItemIcon',
  category: 'CONTENT',
  structure: [
    {
      name: 'Item',
      options: [
        {
          type: 'VARIABLE',
          label: 'Text',
          key: 'text',
          value: ['Text'],
          configuration: {
            as: 'MULTILINE',
          },
        },
        {
          type: 'TEXT',
          label: 'selectedItem',
          key: 'selectedItem',
          value: '',
        },
        {
          value: '',
          label: 'Page',
          key: 'linkTo',
          type: 'ENDPOINT',
          configuration: {
            condition: {
              type: 'SHOW',
              option: 'linkType',
              comparator: 'EQ',
              value: 'internal',
            },
          },
        },
      ],
      descendants: [],
    },
  ],
}))();
