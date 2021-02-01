(() => ({
  name: 'Basic',
  icon: 'ContainerIcon',
  category: 'TEMPLATES',
  structure: [
    {
      name: 'Menu',
      options: [],
      descendants: [
        {
          name: 'List',
          options: [],
          descendants: [
            {
              name: 'Item',
              options: [
                {
                  type: 'VARIABLE',
                  label: 'Title',
                  key: 'title',
                  value: ['Help'],
                  configuration: {
                    as: 'MULTILINE',
                  },
                },
              ],
              descendants: [],
            },
            {
              name: 'Item',
              options: [
                {
                  type: 'VARIABLE',
                  label: 'Title',
                  key: 'title',
                  value: ['Instellingen'],
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
    {
      name: 'Page',
      options: [],
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
                  value: ['Type your content here...'],
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
          name: 'Content',
          options: [],
          descendants: [],
        },
      ],
    },
  ],
}))();
