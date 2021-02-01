(() => ({
  name: 'ToolbarTitle',
  icon: 'TitleIcon',
  category: 'TOOLBAR',
  structure: [
    {
      name: 'ToolbarTitle',
      options: [
        {
          type: 'VARIABLE',
          label: 'Title',
          key: 'title',
          value: ['Text'],
          configuration: {
            as: 'MULTILINE',
          },
        },
      ],
      descendants: [],
    },
  ],
}))();
