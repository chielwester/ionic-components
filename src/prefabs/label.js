(() => ({
  name: 'Label',
  icon: 'TitleIcon',
  category: 'CONTENT',
  structure: [
    {
      name: 'Label',
      options: [
        {
          type: 'VARIABLE',
          label: 'Label text',
          key: 'labelText',
          value: ['Label'],
          configuration: {
            condition: {
              type: 'HIDE',
              option: 'variant',
              comparator: 'EQ',
              value: 'icon',
            },
          },
        },
      ],
      descendants: [],
    },
  ],
}))();
