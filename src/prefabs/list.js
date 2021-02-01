(() => ({
  name: 'List',
  icon: 'OrderedListIcon',
  category: 'LAYOUT',
  structure: [
    {
      name: 'List',
      options: [],
      descendants: [
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
    },
  ],
}))();
