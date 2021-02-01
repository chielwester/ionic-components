(() => ({
  name: 'Buttons',
  icon: 'ButtonGroupIcon',
  category: 'CONTENT',
  structure: [
    {
      name: 'Buttons',
      options: [
        {
          type: 'CUSTOM',
          label: 'Position',
          key: 'slot',
          value: 'start',
          configuration: {
            as: 'BUTTONGROUP',
            dataType: 'string',
            allowedInput: [
              { name: 'Start', value: 'start' },
              { name: 'End', value: 'end' },
            ],
          },
        },
      ],
      descendants: [
        {
          name: 'Button',
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
    },
  ],
}))();
