import { useEffect } from 'react';

const SEO = ({
  title,
  description,
  canonical,
  ogImage = '/mt.soledad.jpg',
  ogType = 'website'
}) => {
  useEffect(() => {
    // Update title
    document.title = title;

    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    }

    // Update Open Graph tags
    const ogTags = {
      'og:title': title,
      'og:description': description,
      'og:image': ogImage,
      'og:type': ogType,
      'og:url': canonical || window.location.href,
    };

    Object.entries(ogTags).forEach(([property, content]) => {
      let tag = document.querySelector(`meta[property="${property}"]`);
      if (tag) {
        tag.setAttribute('content', content);
      }
    });

    // Update Twitter tags
    const twitterTags = {
      'twitter:title': title,
      'twitter:description': description,
      'twitter:image': ogImage,
    };

    Object.entries(twitterTags).forEach(([name, content]) => {
      let tag = document.querySelector(`meta[name="${name}"]`);
      if (tag) {
        tag.setAttribute('content', content);
      }
    });

    // Update canonical
    let canonicalTag = document.querySelector('link[rel="canonical"]');
    if (canonicalTag && canonical) {
      canonicalTag.setAttribute('href', canonical);
    }
  }, [title, description, canonical, ogImage, ogType]);

  return null;
};

export default SEO;
