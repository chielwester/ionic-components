(() => ({
  name: 'ListHeader',
  icon: 'TitleIcon',
  category: 'CONTENT',
  structure: [
    {
      name: 'ListHeader',
      options: [
        {
          type: 'VARIABLE',
          label: 'Header text',
          key: 'headerText',
          value: ['Header'],
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
