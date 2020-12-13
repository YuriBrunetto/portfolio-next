import sanityClient from '@sanity/client'

export default sanityClient({
  projectId: 'riefhc9z',
  dataset: 'production',
  useCdn: true,
})
