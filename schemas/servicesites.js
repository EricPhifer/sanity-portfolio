import { RiLayout3Line as icon } from 'react-icons/ri';

export default {
    name: 'servicesites',
    title: 'Site Templates',
    type: 'document',
    icon,
    fields: [
        {
          name: 'title',
          title: 'Title',
          type: 'string',
        },
        {
          name: 'slug',
          title: 'Slug',
          type: 'slug',
          options: {
            source: 'title',
          }
        },
        {
          name: 'image', 
          title: 'Background Image', 
          type: 'image',
          options: {
            hotspot: true
          } 
        },
        {
          name: 'description',
          title: 'Description of Site',
          type: 'text',
        },
        {
          name: 'sitelink',
          title: 'Site Link',
          type: 'string',
        },
        {
          name: 'tags',
          title: 'Tags',
          type: 'array',
          of: [
            {
                type: 'reference',
                  to: [{ type: 'servicetags' }]
            }
          ]
        }
    ],
  }