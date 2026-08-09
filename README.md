# Anupam Singh — Portfolio

A dark, animated, single-page developer portfolio built with React 18, TypeScript, Vite, Tailwind CSS, and Framer Motion.

## Run it locally

```bash
npm install
npm run dev
```

Open http://localhost:5173.

## Edit your content

Everything on the page — name, summary, experience bullets, projects, skills, education, contact links — lives in **one file**:

```
src/data/resume.ts
```

Edit that file and the whole site updates. No CMS, no database.

A few things worth doing before you deploy:

- **Resume PDF**: the "Resume" button in the hero links to `/Anupam_Singh_Resume.pdf`. Drop your resume PDF into the `public/` folder with that exact name (or update `profile.resumeUrl` in `src/data/resume.ts`).
- **Project links**: `projects[].liveUrl` and `projects[].githubUrl` in `src/data/resume.ts` currently point at placeholders — swap in the real repo/live URLs for Blogify and NeoDrive.
- **Favicon**: `public/favicon.svg` is a simple placeholder "A" mark — swap it for your own if you'd like.

## Build for production

```bash
npm run build   # outputs to dist/
npm run preview # preview the production build locally
```

## Deploy

The `dist/` folder is a static site — deploy it anywhere static hosting is supported:

- **Vercel**: import the repo, framework preset "Vite", no config needed.
- **Netlify**: build command `npm run build`, publish directory `dist`.
- **GitHub Pages / S3 / CloudFront**: upload the contents of `dist/` after building.

## Stack

- React 18 + TypeScript
- Vite
- Tailwind CSS
- Framer Motion (scroll reveals, page transitions, hover interactions)
- lucide-react (icons)
