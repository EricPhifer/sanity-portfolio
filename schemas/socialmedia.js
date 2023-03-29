import { TiSocialYoutube as icon } from 'react-icons/ti';

export default {
    name: 'socialmedia',
    title: 'Social Media',
    type: 'document',
    icon,
    fields: [
        {
          name: 'title',
          title: 'Title',
          type: 'string',
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
          name: 'alt',
          title: 'Alternative Text',
          type: 'text',
        },
        {
          name: 'sitelink',
          title: 'Site Link',
          type: 'string',
        },
    ],
  }