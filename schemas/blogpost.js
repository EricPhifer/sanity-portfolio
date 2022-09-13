import { AiOutlineHome as icon } from 'react-icons/ai';

export default {
  name: 'blogpost',
  title: 'Blog Posts',
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
      title: 'Post Image', 
      type: 'image',
      options: {
        hotspot: true
      } 
    },
    { 
      name: 'content', 
      title: 'Content', 
      type: 'array',
      of: [{type: 'block'}]
    }
  ],
}