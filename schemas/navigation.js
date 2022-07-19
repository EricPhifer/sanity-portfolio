import { BsSegmentedNav as icon } from 'react-icons/bs';

export default {
    name: 'navigation',
    title: 'Navigation',
    type: 'document',
    icon,
    fields: [
      { 
        name: 'title', 
        title: 'Title for CMS Display', 
        type: 'string' 
      },
      { 
        name: 'mainlogo', 
        title: 'Logo', 
        type: 'image',
        options: {
          hotspot: true
        }
      },
      { 
        name: 'mainalt', 
        title: 'Alternative text for Main Logo', 
        type: 'string' 
      },
      { 
        name: 'footericon', 
        title: 'Footer Icon', 
        type: 'image',
        options: {
          hotspot: true
        }
      },
      { 
        name: 'footeralt', 
        title: 'Alternative text for Main Image', 
        type: 'string' 
      },
      {
        name: 'nativelinks',
        title: 'Links to Native Pages',
        type: 'array',
        of: [
          { type: 'PageLinks' }
        ],
      },
      {
        name: 'externallinks',
        title: 'Links to "External" Pages',
        type: 'array',
        of: [
          { type: 'PageLinks' }
        ],
      }
    ],
  }