(() => ({
  name: 'ToolbarWithBackButton',
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
              name: 'BackButton',
              options: [
                {
                  type: 'TEXT',
                  label: 'Title',
                  key: 'title',
                  value: 'Back',
                },
              ],
              descendants: [],
            },
          ],
        },
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
    },
  ],
}))();
