# Deployment Guide

## Vercel Deployment (Recommended)

### Method 1: GitHub Integration (Easiest)

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Accredian Enterprise landing page"
   git branch -M main
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```

2. **Deploy with Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js
   - Click "Deploy"
   - Your site will be live in ~2 minutes!

### Method 2: Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Deploy**
   ```bash
   cd accredian-enterprise
   vercel
   ```

3. **Follow prompts**
   - Link to your Vercel account
   - Configure project settings
   - Deploy!

### Method 3: Manual Deploy

1. **Build locally**
   ```bash
   npm run build
   ```

2. **Test production build**
   ```bash
   npm run start
   ```

3. **Deploy the `.next` folder** to your hosting provider

## Environment Variables

No environment variables are required for basic deployment. For production enhancements:

```env
# Optional: Add these for future enhancements
NEXT_PUBLIC_SITE_URL=https://your-domain.com
NEXT_PUBLIC_GA_ID=your-google-analytics-id

# For database integration (future)
DATABASE_URL=your-database-url

# For email notifications (future)
SMTP_HOST=smtp.example.com
SMTP_USER=your-email
SMTP_PASS=your-password
```

## Post-Deployment Checklist

- [ ] Test all navigation links
- [ ] Submit the lead form
- [ ] Test on mobile devices
- [ ] Verify responsiveness at different screen sizes
- [ ] Check loading performance (Google PageSpeed)
- [ ] Test browser compatibility (Chrome, Firefox, Safari, Edge)
- [ ] Verify all sections scroll smoothly
- [ ] Check SEO meta tags in browser dev tools

## Custom Domain Setup (Vercel)

1. Go to your project in Vercel
2. Navigate to Settings > Domains
3. Add your custom domain
4. Update DNS records as instructed
5. Wait for DNS propagation (~24 hours max)

## Performance Optimization

### For Production

1. **Enable Image Optimization**
   - Replace placeholder logos with actual images
   - Use Next.js `<Image>` component

2. **Add Analytics**
   ```bash
   npm install @vercel/analytics
   ```

3. **Enable Caching**
   - Vercel automatically handles this
   - Configure in `next.config.js` if needed

## Troubleshooting

### Build Errors

**Issue**: TypeScript errors during build
- **Solution**: Run `npm run build` locally first to catch errors

**Issue**: Missing dependencies
- **Solution**: Delete `node_modules` and `package-lock.json`, then `npm install`

### Runtime Errors

**Issue**: API route not working
- **Solution**: Check `/app/api/lead/route.ts` is correctly placed

**Issue**: Styles not loading
- **Solution**: Verify Tailwind is properly configured in `tailwind.config.js`

## Support

For deployment issues:
- Check [Vercel Documentation](https://vercel.com/docs)
- Check [Next.js Documentation](https://nextjs.org/docs)
- Review build logs in Vercel dashboard
