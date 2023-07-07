import { AiOutlineHome as icon } from 'react-icons/ai';

export default {
    name: 'bloghome',
    title: 'Blog Home',
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
          title: 'Alternative Text for Image',
          type: 'string',
        },
        {
          name: 'source',
          title: 'Source for Image',
          type: 'string',
        },
    ],
  }