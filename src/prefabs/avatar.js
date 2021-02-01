(() => ({
  name: 'Avatar',
  icon: 'ImageIcon',
  category: 'CONTENT',
  structure: [
    {
      name: 'Avatar',
      options: [
        {
          type: 'CUSTOM',
          label: 'Position',
          key: 'position',
          value: 'none',
          configuration: {
            as: 'BUTTONGROUP',
            dataType: 'string',
            allowedInput: [
              { name: 'None', value: 'none' },
              { name: 'Start', value: 'start' },
              { name: 'End', value: 'end' },
            ],
          },
        },
      ],
      descendants: [],
    },
  ],
}))();
