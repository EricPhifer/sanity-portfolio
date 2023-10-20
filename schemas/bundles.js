
import { TbSection as icon } from 'react-icons/tb';

export default {
    name: 'bundles',
    title: 'Bundles',
    type: 'document',
    icon,
    fields: [
    
        {
          name: 'title',
          title: 'Title for Image',
          type: 'string',
      },
      {
        name: 'description',
        title: 'Description of Product',
        type: 'array',
          of: [{type: 'block'}]
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
          title: 'Credit to the Creator or Owner of the Image',
          type: 'string',
      },
      {
        name: 'sourcelink',
        title: 'Link to Image or Creators Work',
        type: 'string',
      },
      {
          name: 'link',
          title: 'Stripe link for product purchase',
          description: 'This should start with https:// and end with a top level domain (e.g. .com, .net, etc)',
          type: 'string',
      },
      {
          name: 'examplelink',
          title: 'Link to see examples of this bundle',
          type: 'string',
      },
      {
          name: 'landinglink',
          title: 'Link to the landing page for this bundle',
          description: 'This should start with https:// and end with a top level domain (e.g. .com, .net, etc)',
          type: 'string',
      },
     
    ],
    preview: {
        select: {
          title: 'title',
          media: 'image'
        },
      },
  }