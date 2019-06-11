const buildQueryParameters = ({
  page,
  apiKey,
  perPage = 6,
  tags = [],
  extras = ['description', 'owner_name', 'tags', 'url_n'],
  method = 'flickr.photos.search',
  format = 'json',
  text = '', 
}) => [
  `method=${method}`,
  `api_key=${apiKey}`,
  `tags=${tags.join(',')}`,
  `per_page=${perPage}`,
  `page=${page}`,
  `format=${format}`,
  `extras=${extras}`,
  `nojsoncallback=1`,
  `safeSearch=1`,
  text && `text=${text}`
]
.filter(Boolean)
.join('&');

export default buildQueryParameters;