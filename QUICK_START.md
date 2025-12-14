# Quick Start Guide

## 🎯 What You Have

Your portfolio is now set up with:
- ✅ Animated hero section
- ✅ Scrollable timeline with 5 sample projects
- ✅ Responsive header and footer
- ✅ Scroll progress indicator
- ✅ Framer Motion animations throughout
- ✅ Dark mode support
- ✅ Custom scrollbar styling

## 🏃 Run Your Portfolio

```powershell
# Start the development server
npm run dev
```

Then open http://localhost:3000

## ✏️ Quick Customization Checklist

### 1. Update Personal Info
- [ ] Edit hero text in `src/app/page.tsx` (lines 24-31)
- [ ] Update navigation links in `src/app/components/Header.tsx`
- [ ] Change social links in `src/app/components/Footer.tsx`
- [ ] Update metadata in `src/app/layout.tsx`

### 2. Add Your Projects
- [ ] Edit `src/app/data/projects.ts`
- [ ] Replace placeholder images in `public/images/`
- [ ] Update project descriptions and tags

### 3. Customize Colors (Optional)
The default gradient is blue-600 → purple-600. To change:
- Search for `from-blue-600 to-purple-600` in components
- Replace with your preferred Tailwind colors

### 4. Test Animations
- Scroll down to see timeline animations
- Hover over project cards
- Try the navigation links
- Check mobile view (F12 → Toggle device toolbar)

## 🎨 Component Overview

```
Header.tsx         → Navigation bar at top
ScrollProgress.tsx → Progress bar (appears when scrolling)
Timeline.tsx       → Contains all projects
ProjectCard.tsx    → Individual project display
Footer.tsx         → Bottom section with links
```

## 🐛 Common Issues

**Images not showing?**
- Make sure images are in `public/images/`
- Check file extensions match in `projects.ts`

**Animations not working?**
- Framer Motion is already installed
- Make sure components have `'use client'` directive

**Dark mode issues?**
- Uses system preference by default
- Toggle in your OS settings to test

## 📦 Production Deployment

```powershell
# Build for production
npm run build

# Test production build locally
npm start
```

Deploy to Vercel (recommended):
1. Push to GitHub
2. Import in Vercel
3. Deploy automatically

## 🎓 Learn More

- **Framer Motion docs**: https://www.framer.com/motion/
- **Next.js docs**: https://nextjs.org/docs
- **Tailwind CSS**: https://tailwindcss.com/docs

---

Need help? Check PROJECT_DOCS.md for detailed information!
