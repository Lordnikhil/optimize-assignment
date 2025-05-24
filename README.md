# Frontend Assignment: Landing site Optimization

## Task

You're given a simple landing website. Written in Next.js, using TypeScript.

The website has:

- landing page
- demo page
- blog
- gallery
- pricing

Your task is to **optimize performance and fix any issues you find** while preserving the functionality. You are free to identify any bugs through out the project and apply any optimizations you see fit

---

## Submission

Please submit a GitHub repo or ZIP file with:

- Your updated working code (npm install; npm run build; npm start)
- An accompanying PDF file or readme explaining all the changes you did in Where/What/Why format

**[Bonus]** Deploy the site to a free platform (e.g., Netlify, Vercel, Render) and share the live link.

## Example of Changes Documentation

### Where/What/Why Format Example:

1. **Where**: `src/pages/blog/[slug].tsx`
2. **What**: Added dynamic imports for blog content
3. **Why**: To reduce initial bundle size and improve First Contentful Paint (FCP)
4. **Reference**: Documentation URL (optional)

---


## Changes Documentation


1. **Where**: `blog/[slug]/page.tsx`
  - **What**: Added dynamic imports for blog content
  - **Why**: To reduce initial bundle size and improve First Contentful Paint (FCP)

2. **Where**: `app/gallery/page.tsx`, `app/components/BlogPostCard.tsx`
  - **What**: Changed image tag from img to Next.js image component
  - **Why**: To lazy load images and seemed to fix UI issues
  - **Reference**: https://nextjs.org/docs/pages/api-reference/components/image

3. **Where**: `app/components/FontShowcase.tsx`
  - **What**: Changed font import from Tailwind classes to Next.js font module
  - **Why**: To load founts without any layout shift
  - **Reference**: https://nextjs.org/docs/pages/api-reference/components/font

3. **Where**: `app/layout.tsx`
  - **What**: Removed links to load fonts
  - **Why**: Not the right way to load fonts in Next.js
  - **Reference**: https://nextjs.org/docs/pages/api-reference/components/font

4. **Where**: `next.config.js`
  - **What**: Whitelisted pexels hostname
  - **Why**: To lazy load images using Next.js image component
  - **Reference**: https://nextjs.org/docs/pages/api-reference/components/image#remotepatterns

5. **Where**: `app\globals.css`
  - **What**: Added text color to a darker shade for input & textarea elements
  - **Why**: Text not clearly visible while typing in input & textarea
  - **Reference**: https://v1.tailwindcss.com/docs/adding-base-styles

6. **Where**: `app/pricing/page.tsx`
  - **What**: Changed horizontal scroll for pricing container element
  - **Why**: Was not able to scroll horizontally to view all pricing plans

7. **Where**: `app/gallery/page.tsx`
  - **What**: Added a check to eagerly load first 6 images only and lazy load rest of them
  - **Why**: Pexels api returns alot of entries by default, loading all images at same time will slow down bandwidth

8. **Where**: `app/pricing/page.tsx`, `app/blog/page.tsx`, `app/components/Gallery.tsx`, `app\gallery\page.tsx`, `app\pricing\page.tsx`
  - **What**: Declared variables for all list rendering
  - **Why**: For better code readability, memory allocation and garbage collection