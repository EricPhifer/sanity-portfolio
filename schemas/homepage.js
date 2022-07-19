import { AiOutlineHome as icon } from 'react-icons/ai';

export default {
    name: 'homepage',
    title: 'Homepage',
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
          name: 'projectlist',
          title: 'List of Projects',
          type: 'array',
          of: [
            { type: 'Projects' }
          ]
        }
    ],
  }