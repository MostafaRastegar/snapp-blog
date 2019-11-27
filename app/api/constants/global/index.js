export const API_URL_ROOT = process.env.APP_URL;
const APP_BASE_CANONICAL_URL = process.env.APP_BASE_CANONICAL_URL;

export const websiteUrl = (relativePath = '') => {
  if (relativePath === '/') {
    relativePath = '';
  }

  return APP_BASE_CANONICAL_URL + relativePath;
};

export const globalHeader = () => {
  return {
    'Content-Type': 'application/json',
    'X-Requested-With':'XMLHttpRequest'
  };
};
