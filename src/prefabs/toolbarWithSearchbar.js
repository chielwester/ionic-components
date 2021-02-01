(() => ({
  name: 'ToolbarWithSearchBar',
  icon: 'ContainerIcon',
  category: 'TOOLBAR',
  structure: [
    {
      name: 'Toolbar',
      options: [
        {
          type: 'VARIABLE',
          label: 'Title',
          key: 'title',
          value: [],
          configuration: {
            as: 'MULTILINE',
          },
        },
      ],
      descendants: [
        {
          name: 'Searchbar',
          options: [
            {
              type: 'VARIABLE',
              label: 'value',
              key: 'value',
              value: [],
              configuration: {
                as: 'MULTILINE',
              },
            },
          ],
          descendants: [],
        },
      ],
    },
  ],
}))();
