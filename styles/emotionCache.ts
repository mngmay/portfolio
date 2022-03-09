import createCache from '@emotion/cache';

// the key is the prefix that comes before class names
// key also will be set as value of the data-emotion attribute for any styling emotion inserts
// prepend needed to ensure the injectFirst of mui styles is followed and our CSS is not overwritten
const createEmotionCache = () => {
  return createCache({ key: 'css', prepend: true });
};

export default createEmotionCache;
