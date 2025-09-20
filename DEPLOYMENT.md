# Deploying to Vercel

This guide will help you deploy your ASC 606 Revenue Recognition Calculator to Vercel for free hosting.

## Prerequisites

- A [Vercel account](https://vercel.com/signup) (free)
- [Git](https://git-scm.com/) installed on your computer
- A [GitHub account](https://github.com/signup) (recommended)

## Method 1: Deploy via GitHub (Recommended)

### Step 1: Push to GitHub

1. **Initialize Git repository** (if not already done):
   ```bash
   git init
   git add .
   git commit -m "Initial commit: ASC 606 Revenue Recognition Calculator"
   ```

2. **Create a new repository on GitHub**:
   - Go to [GitHub](https://github.com)
   - Click "New repository"
   - Name it `multi-year-revrec` or similar
   - Don't initialize with README (since you already have files)
   - Click "Create repository"

3. **Connect and push to GitHub**:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/multi-year-revrec.git
   git branch -M main
   git push -u origin main
   ```

### Step 2: Deploy on Vercel

1. **Go to Vercel**:
   - Visit [vercel.com](https://vercel.com)
   - Sign up/login with your GitHub account

2. **Import Project**:
   - Click "New Project"
   - Import your `multi-year-revrec` repository
   - Click "Deploy"

3. **Configure (Optional)**:
   - Project Name: `asc606-revenue-calculator`
   - Framework Preset: Other (or None)
   - Root Directory: `./`
   - Build Command: (leave empty for static site)
   - Output Directory: (leave empty)

4. **Deploy**:
   - Click "Deploy"
   - Wait 1-2 minutes for deployment
   - Your app will be live at `https://your-project-name.vercel.app`

## Method 2: Deploy via Vercel CLI

### Step 1: Install Vercel CLI

```bash
# Install globally
npm i -g vercel

# Or use without installing
npx vercel
```

### Step 2: Deploy

1. **Navigate to your project directory**:
   ```bash
   cd multi_year_revrec
   ```

2. **Login to Vercel**:
   ```bash
   vercel login
   ```

3. **Deploy**:
   ```bash
   vercel
   ```

4. **Follow the prompts**:
   - Set up and deploy? `Y`
   - Which scope? (select your account)
   - Link to existing project? `N`
   - What's your project's name? `asc606-revenue-calculator`
   - In which directory is your code located? `./`
   - Want to override settings? `N`

5. **Production deployment**:
   ```bash
   vercel --prod
   ```

## Method 3: Drag and Drop (Simplest)

1. **Prepare files**:
   - Create a zip file with all your project files:
     - `index.html`
     - `styles.css`
     - `script.js`
     - `README.md`
     - `demo.md`

2. **Deploy**:
   - Go to [vercel.com](https://vercel.com)
   - Sign up/login
   - Drag your project folder onto the Vercel dashboard
   - Your site will be deployed instantly

## Configuration Options

### Custom Domain (Optional)

After deployment, you can add a custom domain:

1. Go to your project dashboard on Vercel
2. Click "Domains"
3. Add your custom domain
4. Follow DNS configuration instructions

### Environment Variables (Not needed for this project)

Since this is a static frontend app, no environment variables are required.

### Performance Optimizations

Vercel automatically provides:
- ✅ Global CDN
- ✅ Automatic HTTPS
- ✅ Compression
- ✅ Caching
- ✅ Image optimization (if needed later)

## Updating Your Deployment

### Via GitHub (Automatic)
- Push changes to your GitHub repository
- Vercel automatically redeploys on every push to `main`

### Via CLI
```bash
vercel --prod
```

### Via Drag & Drop
- Upload your updated files again

## Troubleshooting

### Common Issues

1. **404 Error**: Make sure your main file is named `index.html`

2. **CSS/JS Not Loading**: Check that file paths are relative (no leading `/`)

3. **Build Failed**: For static sites, ensure no build process is configured

### Getting Help

- [Vercel Documentation](https://vercel.com/docs)
- [Vercel Support](https://vercel.com/support)
- [Community Discord](https://vercel.com/discord)

## Your Deployed App

Once deployed, your ASC 606 Revenue Recognition Calculator will be available 24/7 at your Vercel URL with:
- ⚡ Lightning-fast loading
- 🌍 Global availability
- 🔒 Automatic HTTPS
- 📱 Mobile responsive
- 💰 Free hosting (within Vercel's generous limits)

## Next Steps

After deployment:
1. Test your calculator with the demo examples in `demo.md`
2. Share the URL with your team
3. Consider adding analytics (Google Analytics, Vercel Analytics)
4. Monitor usage and gather feedback for improvements

---

**Need help?** The deployment should take less than 5 minutes using any of these methods!