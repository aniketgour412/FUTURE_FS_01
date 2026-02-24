# Premium Animated Portfolio Website

A stunning, ultra-modern personal portfolio website built with React, TypeScript, Framer Motion, and Tailwind CSS. Features beautiful animations, glassmorphism design, and a dark luxury theme with neon accents.

## 🎨 Features

- **Modern Design**: Dark luxury theme with soft neon accents (purple, blue, cyan, gold)
- **Smooth Animations**: Powered by Framer Motion for premium micro-interactions
- **Glassmorphism**: Beautiful frosted glass effect cards
- **Fully Responsive**: Optimized for mobile, tablet, and desktop
- **Performance Optimized**: Lazy loading, Code splitting, Fast load times
- **SEO Friendly**: Semantic HTML, Meta tags, Open Graph support
- **Accessible**: WCAG compliant, Keyboard navigation support

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **State Management**: React Hooks

## 📦 Installation

1. **Clone the repository**
```bash
git clone <your-repo-url>
cd portfolio1
```

2. **Install dependencies**
```bash
npm install
```

3. **Start the development server**
```bash
npm run dev
```

The application will open at `http://localhost:5173`

## 🏗️ Project Structure

```
src/
├── components/         # Reusable UI components
│   ├── Navigation.tsx
│   ├── Footer.tsx
│   └── LoadingFallback.tsx
├── sections/          # Page sections
│   ├── HeroSection.tsx
│   ├── AboutSection.tsx
│   ├── SkillsSection.tsx
│   ├── ProjectsSection.tsx
│   ├── ExperienceSection.tsx
│   └── ContactSection.tsx
├── styles/
│   └── globals.css    # Global styles and animations
├── App.tsx
└── main.tsx
```

## 🚀 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## 📝 Customization

### Update Personal Information
Edit the following files with your information:
- `src/sections/HeroSection.tsx` - Your name and tagline
- `src/sections/AboutSection.tsx` - Your story
- `src/sections/SkillsSection.tsx` - Your skills
- `src/sections/ProjectsSection.tsx` - Your projects
- `src/sections/ExperienceSection.tsx` - Your experience
- `src/sections/ContactSection.tsx` - Your contact info

### Customize Colors
Edit `tailwind.config.js` to change the color scheme:
```js
colors: {
  'neon-purple': '#a855f7',
  'neon-blue': '#3b82f6',
  'neon-cyan': '#06b6d4',
  'neon-gold': '#fbbf24',
}
```

### Add Social Links
Update the social links in `src/components/Footer.tsx` and `src/sections/ContactSection.tsx`

## 🎯 Performance Tips

- Images are lazy-loaded with Framer Motion
- Components are code-split with React.lazy()
- CSS is optimized with Tailwind purging
- No unnecessary dependencies

## 🔒 Accessibility

- Semantic HTML structure
- ARIA labels where needed
- Keyboard navigation support
- Color contrast compliant

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

MIT License - Feel free to use this template for your portfolio

## 🤝 Contributing

Contributions are welcome! Feel free to fork and submit pull requests.

## 💡 Tips for Best Results

1. **High-quality project images** - Use descriptive gradients or screenshots
2. **Keep content concise** - Users scroll quickly through portfolios
3. **Regular updates** - Keep your projects and experience current
4. **Test on mobile** - Use responsive design tools to verify
5. **Add social links** - Make it easy for people to connect

---

**Built with ❤️ using React, TypeScript, and Framer Motion**
