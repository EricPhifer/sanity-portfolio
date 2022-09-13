import { AiOutlineTag as icon } from 'react-icons/ai';

export default {
  name: 'servicetags',
  title: 'Service Tags',
  type: 'document',
  icon,
  fields: [
    {
      name: 'tagtitle',
      title: 'Tag Title',
      type: 'string',
    },
  ],
}