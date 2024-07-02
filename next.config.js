/**
 * @type {import('next').NextConfig}
 */

const { name } = require('./package.json');

const getLinkBasePath = (subPath) => {
  if((!subPath || !subPath.length) && process.env.NODE_ENV === 'development') {
    return '/';
  } 

  const slashSubPath = subPath ? `/${subPath}` : '';

  if (process.env.PREVIEW_BUILD) {
    return `/integration/1ds-ssg/${name}/${process.env.VERSION}${slashSubPath}`
  } else {
    return `/${name}${slashSubPath}`
  }
}

const getBasePath = () => {
  if (process.env.NODE_ENV === 'development') {
    return '';
  } else if (process.env.PREVIEW_BUILD) {
    return `/integration/1ds-ssg/${name}/${process.env.VERSION}`
  } else {
    return `/${name}`
  }
}

const nextConfig = {
  basePath: getBasePath(),
  getLinkBasePath,
  images: {
    unoptimized: true,
  },
  
  // Optional: Change links `/me` -> `/me/` and emit `/me.html` -> `/me/index.html`
  // trailingSlash: true,
 
  // Optional: Prevent automatic `/me` -> `/me/`, instead preserve `href`
  // skipTrailingSlashRedirect: true,
 
  // Optional: Change the output directory `out` -> `dist`
  // distDir: 'dist',
}

 
module.exports = nextConfig