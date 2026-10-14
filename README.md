# IT & Integrations Portfolio

A responsive, accessible, single-page portfolio built with Vite and plain HTML/CSS/JavaScript. Designed for deployment on Vercel.

## Customize first

Open `src.js` and update the `profile` object near the top:
- `name` and `initials`
- `email` (**currently a placeholder**)
- `linkedin` and `github` (blank links are intentionally hidden)
- `resume`: set to `/resume.pdf` after placing a PDF résumé into `public/resume.pdf`

Review every project description and skill before applying to jobs. Wording currently distinguishes hands-on practice from paid work. Add project links to the `link` value for each project if you have repositories or demos.

## Local development

1. Install Node.js 20 or newer.
2. Run `npm install`.
3. Run `npm run dev` and open the local URL shown.
4. Check the website on mobile and desktop.

## Deploy to Vercel

1. Create a GitHub repository and upload all files in this folder.
2. On https://vercel.com/new, import the repository.
3. Vercel should detect **Vite**. Build command: `npm run build`. Output directory: `dist`.
4. Click **Deploy**. Copy your `*.vercel.app` URL into job applications.
5. Updates pushed to GitHub will automatically redeploy.

## Before sharing

- Replace the sample name and email.
- Add your résumé and real profile links.
- Verify each claim in the projects and skills sections.
- Test all buttons and links.
- Consider adding screenshots or repository links for project credibility.
