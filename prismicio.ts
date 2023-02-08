import * as prismic from '@prismicio/client'
import * as prismicNext from '@prismicio/next'

export function createClient({
  previewData,
  req,
  ...config
}: prismicNext.CreateClientConfig = {}) {
  const client = prismic.createClient('gbkp-kmkj', config)

  prismicNext.enableAutoPreviews({ client, previewData, req })

  return client
}