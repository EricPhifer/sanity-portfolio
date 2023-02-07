import { BsSegmentedNav as icon } from 'react-icons/bs';

export default {
    name: 'projectPages',
    title: 'Project Pages',
    type: 'document',
    icon,
    fields: [
      { 
        name: 'title', 
        title: 'Title for CMS Display', 
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
    ],
  }