(() => ({
  name: 'Modal',
  icon: 'DialogIcon',
  category: 'LAYOUT',
  structure: [
    {
      name: 'Modal',
      options: [
        {
          type: 'TOGGLE',
          label: 'Visible',
          key: 'visible',
          value: false,
        },
        {
          type: 'TEXT',
          label: 'z-index',
          key: 'zIndex',
          value: '',
        },
      ],
      descendants: [
        {
          name: 'Header',
          options: [],
          descendants: [
            {
              name: 'Toolbar',
              options: [
                {
                  type: 'VARIABLE',
                  label: 'Title',
                  key: 'title',
                  value: ['Modal'],
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
                      name: 'Button',
                      options: [
                        {
                          type: 'VARIABLE',
                          label: 'Title',
                          key: 'buttonText',
                          value: ['Modal'],
                          configuration: {
                            as: 'MULTILINE',
                          },
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
                      value: ['Modal'],
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
        },
      ],
    },
  ],
}))();
