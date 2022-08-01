import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

// Layout
import footer from './footer';
import navigation from './navigation';
// Homepage
import homepage from './homepage';
// Privacy Policy & Terms
import privacyPolicy from './privacyPolicy';
import termsConditions from './termsConditions';
// Components
import PageLinks from '../components/PageLinks';
import Projects from '../components/Projects';
// Service Pages
import servicesites from './servicesites';
import servicetags from './servicetags';

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    // Layout Content
    navigation,
    footer,
    // Homepage
    homepage,
    // Privacy Policy & Terms
    privacyPolicy,
    termsConditions,
    // Components
    PageLinks,
    Projects,
    // Service Pages
    servicesites,
    servicetags
  ]),
})
