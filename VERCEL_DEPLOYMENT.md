# Vercel Deployment Guide - YOUR PART

This guide explains exactly what YOU need to do to deploy your portfolio to Vercel. Follow each step carefully.

---

## STEP 1: Create a GitHub Repository (5 minutes)

### What's Already Done:
- Your code is initialized with Git
- All files are staged and committed locally

### Your Task:

1. **Create a GitHub account** (if you don't have one):
   - Go to https://github.com
   - Click "Sign up"
   - Complete the registration

2. **Create a new repository**:
   - Click the "+" icon in the top-right corner
   - Select "New repository"
   - Repository name: `portfolio` (or any name you prefer)
   - Description: "Professional Finance Portfolio Website"
   - Choose "Public" (so Vercel can access it)
   - **DO NOT** initialize with README, .gitignore, or license (we already have these)
   - Click "Create repository"

3. **Copy the repository URL**:
   - After creation, you'll see a screen with commands
   - Copy the HTTPS URL (looks like: `https://github.com/YOUR_USERNAME/portfolio.git`)

4. **Add remote and push code** (run these commands in your terminal):

```bash
# Go to your project directory
cd /path/to/your/portfolio

# Add the remote repository
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git

# Rename branch to main (Vercel prefers this)
git branch -M main

# Push your code to GitHub
git push -u origin main
```

After this, your code is on GitHub! You should see all files in your repository.

---

## STEP 2: Create a Vercel Account (3 minutes)

1. **Go to Vercel**:
   - Open https://vercel.com
   - Click "Sign Up"

2. **Sign up with GitHub**:
   - Choose "Continue with GitHub"
   - Authorize Vercel to access your GitHub account
   - Complete the setup

---

## STEP 3: Deploy to Vercel (5 minutes)

### On Vercel Dashboard:

1. **Click "Add New"** → **"Project"**

2. **Import your repository**:
   - You should see your GitHub account's repositories
   - Find and click on `portfolio` (or your repo name)
   - Click "Import"

3. **Configure Project**:
   - **Project Name**: Leave as `portfolio` (or rename if desired)
   - **Framework Preset**: Should auto-detect as "Vite"
   - **Root Directory**: `./` (leave as default)
   - Click "Continue"

4. **Add Environment Variables** (CRITICAL STEP):
   - You should see a section: "Environment Variables"
   - Add two variables:

   **First Variable:**
   - Name: `VITE_SUPABASE_URL`
   - Value: Your Supabase project URL (from your `.env` file)
   - Click "Add"

   **Second Variable:**
   - Name: `VITE_SUPABASE_ANON_KEY`
   - Value: Your Supabase anonymous key (from your `.env` file)
   - Click "Add"

   **Where to find these values?**
   - Open your local `.env` file
   - Copy the values after the `=` sign

5. **Deploy**:
   - Click "Deploy"
   - Wait 1-2 minutes while Vercel builds your site
   - You'll see a congratulations screen with your live URL!

---

## STEP 4: Your Site is Live! (What to Do Next)

### Automatic Deployments:
- Every time you push code to GitHub, Vercel automatically rebuilds and deploys
- No manual steps needed after the initial setup

### Update Your Portfolio:
1. Make changes locally to your code
2. Commit and push to GitHub:
   ```bash
   git add .
   git commit -m "Update portfolio content"
   git push
   ```
3. Vercel automatically deploys the changes (usually within 1 minute)

### Adding Content (Database Updates):
- Login to your Supabase dashboard
- Add projects, publications, or references
- Changes appear instantly on your live site (no redeployment needed)

---

## STEP 5: Set a Custom Domain (Optional)

If you want a custom domain (e.g., yourname.com instead of vercel.com):

1. **In Vercel Dashboard**:
   - Go to your project settings
   - Click "Domains"
   - Click "Add Custom Domain"
   - Enter your domain name
   - Follow the instructions to update DNS records with your domain provider

2. **Update Your Domain DNS**:
   - Go to your domain provider (GoDaddy, Namecheap, etc.)
   - Update DNS records as per Vercel's instructions
   - Wait 24-48 hours for DNS to propagate

---

## TROUBLESHOOTING

### "Build Failed" Error:
- Check that your Supabase credentials in environment variables are correct
- Make sure all files were committed to GitHub
- Check the build logs in Vercel dashboard for specific errors

### "Database Connection Error":
- Verify `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` are correct
- Make sure Supabase database is running (check at supabase.com)
- Clear Vercel cache: Go to Settings → Git → "Clear cache" → Redeploy

### "Environment Variables Not Working":
- Go to Vercel project settings
- Click "Environment Variables"
- Verify both variables are added
- Redeploy the project (Settings → Deployments → Click the latest → Redeploy)

---

## HELPFUL LINKS

- **Your Live Site**: Check Vercel dashboard for your URL
- **Supabase Dashboard**: https://app.supabase.com (manage your database)
- **GitHub Repository**: https://github.com/YOUR_USERNAME/portfolio
- **Vercel Dashboard**: https://vercel.com/dashboard

---

## SUMMARY OF YOUR TASKS

| Step | Task | Time |
|------|------|------|
| 1 | Create GitHub account & repository | 5 min |
| 2 | Push code to GitHub | 2 min |
| 3 | Create Vercel account | 3 min |
| 4 | Import project to Vercel | 2 min |
| 5 | Add environment variables | 2 min |
| 6 | Deploy | 2 min |
| **Total** | **All tasks** | **~15 min** |

---

## You're Done! 🎉

Your portfolio is now live on the internet! Share your Vercel URL with recruiters and connections.

For future updates:
- Make changes locally
- Push to GitHub
- Vercel automatically deploys

That's it!
