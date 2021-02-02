(() => ({
  name: 'Menu',
  icon: 'NavbarIcon',
  category: 'CONTENT',
  structure: [
    {
      name: 'Menu',
      options: [
        {
          label: 'Menu Position',
          key: 'menuPosition',
          value: 'end',
          type: 'CUSTOM',
          configuration: {
            as: 'BUTTONGROUP',
            dataType: 'string',
            allowedInput: [
              { name: 'Left', value: 'start' },
              { name: 'Right', value: 'end' },
            ],
          },
        },
      ],
      descendants: [],
    },
  ],
}))();
