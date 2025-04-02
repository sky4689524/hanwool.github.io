const markdownContent = `
If you're deploying your **Next.js 13+** app to **GitHub Pages** and running into issues where your **JavaScript and CSS aren't loading**, you're not alone. This issue usually comes down to how GitHub Pages handles static files — especially those in folders that start with an underscore like \`/_next\`.

Let me walk you through **how to fix it step-by-step**. 👇

---

## 🧠 The Problem

By default, GitHub Pages uses **Jekyll**, which **ignores folders starting with \`_\`**, like:

\`\`\`
/_next/static/...
\`\`\`

This means your app's static assets (JS, CSS) won't be served — resulting in a broken site with missing styles and scripts. 😵

---

## ✅ The Solution

### 1. Add \`.nojekyll\` file

This file disables Jekyll processing on GitHub Pages.

You can add this manually in the \`out\` folder after \`next export\`, or automatically via a script:

\`\`\`bash
touch out/.nojekyll
\`\`\`

Or use [\`shx\`](https://www.npmjs.com/package/shx) to make it cross-platform compatible (for Windows users):

\`\`\`bash
npm install --save-dev shx
\`\`\`

---

### 2. Install \`gh-pages\`

You’ll need the \`gh-pages\` package to deploy the \`out\` folder to your GitHub Pages branch.

Install it with:

\`\`\`bash
npm install --save-dev gh-pages
\`\`\`

This tool will handle publishing your static site to the correct branch (typically \`gh-pages\` or \`main\`).

---

### 3. Update \`next.config.js\`

Configure your app for static export:

\`\`\`js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Static export for GitHub Pages
  basePath: '',     // Leave empty for username.github.io
};

module.exports = nextConfig;
\`\`\`

> If you're deploying to a **project page** (e.g., \`username.github.io/my-app\`), set:
>
> \`\`\`js
> basePath: '/my-app',
> assetPrefix: '/my-app',
> \`\`\`

---

### 4. Update your \`package.json\` scripts

\`\`\`json
"scripts": {
  "dev": "next dev",
  "build": "next build",
  "export": "next export",
  "postexport": "shx touch out/.nojekyll",
  "deploy": "next build && npm run postexport && gh-pages -d out --nojekyll --cname https://yourusername.github.io"
}
\`\`\`

> 📝 Replace \`https://yourusername.github.io\` with your GitHub URL.

---

## 🏁 Deployment Command

\`\`\`bash
npm run deploy
\`\`\`

Boom 💥 — your Next.js site should be live and functional!

---

## 🔄 GitHub Pages Branch

1. Go to GitHub → Settings → Pages
2. Source: Deploy from branch
3. Branch: \`gh-pages\`, folder: \`/ (root)\`
4. Save ✅

---

## 🔗 Bonus Tips

- Use \`--cname\` for custom domains
- Use proper \`basePath\` if using a project subfolder
- Automate deploys with GitHub Actions

---

## 📦 Example Repo

Check out: [sky4689524.github.io](https://github.com/sky4689524/sky4689524.github.io)

---

## 🧰 Tools Used

- [Next.js 13+](https://nextjs.org/)
- [gh-pages](https://www.npmjs.com/package/gh-pages)
- [shx](https://www.npmjs.com/package/shx)
`;

export default markdownContent;