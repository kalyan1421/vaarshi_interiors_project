# Vaarshi Interiors - Deployment Guide

## 🚀 Live Website
**URL**: https://vaarahi-interiors.web.app  
**Firebase Project**: vaarahi-interiors

## 📋 Quick Deployment

### One-command Deploy
```bash
npm run deploy
```

### Manual Deploy
```bash
npm run build
firebase deploy --only hosting
```

### Preview Deploy (Testing)
```bash
npm run deploy:preview
```

## 🔧 Project Structure
- **Frontend**: React + TypeScript + Vite
- **Build Output**: `dist/public/`
- **Assets**: Images from `attached_assets/`
- **Hosting**: Firebase Hosting

## 🛠️ Firebase Configuration
- **Project ID**: `vaarahi-interiors`
- **Public Directory**: `dist/public`
- **Single Page App**: Yes (React Router)
- **Caching**: Optimized for static assets

## 📊 Performance Optimizations
- Static asset caching (1 year)
- Gzip compression
- Single-page app routing
- Optimized image loading

## 🔗 Useful Commands
```bash
# Check deployment status
firebase hosting:channel:list

# View Firebase console
firebase open hosting

# Deploy to preview channel
firebase hosting:channel:deploy preview

# Delete preview channel
firebase hosting:channel:delete preview
```

## 🌐 Custom Domain Setup (Optional)
1. Go to Firebase Console > Hosting
2. Add custom domain
3. Follow DNS configuration steps
4. Update domain in Firebase settings

## 📝 Notes
- Always run `npm run build` before deploying
- Check `firebase-debug.log` for deployment issues
- Use preview channels for testing before production 