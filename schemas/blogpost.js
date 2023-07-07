import { GrBlog as icon } from 'react-icons/gr';

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
      name: 'release',
      title: 'Date of Release',
      type: 'datetime',
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
      name: 'alt',
      title: 'Alternative Text for Image',
      type: 'string',
    },
      {
      name: 'source',
      title: 'Source Info for Image',
      type: 'string',
    },
    { 
      name: 'content', 
      title: 'Content', 
      type: 'array',
      of: [{type: 'block'}]
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