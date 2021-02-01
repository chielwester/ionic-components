(() => ({
  name: 'Page',
  icon: 'ContainerIcon',
  category: 'LAYOUT',
  structure: [
    {
      name: 'Page',
      options: [
        {
          type: 'TEXT',
          label: 'id',
          key: 'id',
          value: 'this-page',
        },
        {
          type: 'TOGGLE',
          label: 'Visible',
          key: 'visible',
          value: true,
        },
        {
          type: 'TEXT',
          label: 'Z-Index',
          key: 'zIndex',
          value: 105,
        },
      ],
      descendants: [],
    },
  ],
}))();
