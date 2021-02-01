(() => ({
  name: 'Toolbar',
  icon: 'ContainerIcon',
  category: 'LAYOUT',
  structure: [
    {
      name: 'Toolbar',
      options: [
        {
          type: 'VARIABLE',
          label: 'Title',
          key: 'title',
          value: ['Type your content here...'],
          configuration: {
            as: 'MULTILINE',
          },
        },
      ],
      descendants: [],
    },
  ],
}))();
