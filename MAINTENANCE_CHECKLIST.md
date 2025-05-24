# Hugo Website - Maintenance Checklist

## 🔍 Quick Health Check

Run this checklist periodically to ensure the website remains optimal:

### Build Verification
- [ ] `hugo build` completes without errors
- [ ] Build time under 1 second
- [ ] All pages render correctly
- [ ] No broken links or missing assets

### Performance Check
- [ ] CSS file size under 50KB (`modern-minimal.css`)
- [ ] JavaScript files total under 20KB
- [ ] Images optimized and under 500KB each
- [ ] No unused CSS or JavaScript

### Responsive Design
- [ ] Mobile (320px-768px) layout works
- [ ] Tablet (768px-1024px) layout works  
- [ ] Desktop (1024px+) layout works
- [ ] Navigation functional on all devices

### Accessibility
- [ ] All interactive elements have focus states
- [ ] Images have alt text
- [ ] Proper heading hierarchy (h1 → h2 → h3)
- [ ] Color contrast meets WCAG standards

## 🛠️ Development Guidelines

### Adding New Content
1. **Blog Posts**: Add to `content/blog/`
2. **Projects**: Add to `content/projects/`
3. **Pages**: Use existing templates in `layouts/`

### Styling Changes
1. **Edit Only**: `static/css/modern-minimal.css`
2. **Use Variables**: Defined at top of CSS file
3. **Test Responsive**: Check all breakpoints
4. **Maintain Consistency**: Follow established patterns

### Template Modifications
1. **Use Semantic HTML**: Proper structure and ARIA
2. **Consistent Classes**: Follow BEM-inspired naming
3. **Test Thoroughly**: Check all content types
4. **Validate HTML**: Ensure proper markup

## 📁 File Structure Reference

```
hugo_site/
├── config.toml                 # Site configuration
├── content/                    # Markdown content
│   ├── about/
│   ├── blog/
│   ├── now/
│   └── projects/
├── layouts/                    # Hugo templates
│   ├── _default/              # Default templates
│   ├── partials/              # Reusable components
│   ├── about/                 # About page templates
│   ├── blog/                  # Blog templates
│   ├── now/                   # Now page templates
│   └── projects/              # Project templates
├── static/                     # Static assets
│   ├── assets/                # Images, PDFs
│   ├── css/
│   │   ├── modern-minimal.css  # Main stylesheet (ONLY EDIT THIS)
│   │   └── legacy-backup/      # Archived old CSS
│   └── js/                    # JavaScript files
└── public/                     # Generated site (auto-created)
```

## 🚨 Important Notes

### DO NOT EDIT
- Files in `public/` directory (auto-generated)
- Files in `legacy-backup/` directory
- Template files without understanding Hugo templating

### ALWAYS EDIT
- `static/css/modern-minimal.css` for styling
- Content files in `content/` directory
- `config.toml` for site settings

### BEFORE MAJOR CHANGES
- [ ] Backup current working version
- [ ] Test in development environment
- [ ] Verify responsive design
- [ ] Check accessibility
- [ ] Validate HTML/CSS

## 🔧 Common Tasks

### Adding a New Blog Post
1. Create file: `content/blog/new-post.md`
2. Add frontmatter with title, date, tags
3. Write content in Markdown
4. Run `hugo server` to preview
5. Build with `hugo build`

### Updating Styles
1. Edit `static/css/modern-minimal.css`
2. Use existing CSS variables when possible
3. Test on mobile and desktop
4. Check color contrast
5. Verify responsive behavior

### Adding New Page
1. Create content file in appropriate section
2. Use existing template or create new one
3. Update navigation in `config.toml` if needed
4. Test all links and functionality

## 📱 Responsive Breakpoints

```css
/* Mobile: 320px - 767px (default, mobile-first) */
/* Tablet: 768px - 1023px */
@media (min-width: 768px) { ... }

/* Desktop: 1024px - 1199px */
@media (min-width: 1024px) { ... }

/* Large Desktop: 1200px+ */
@media (min-width: 1200px) { ... }
```

## 🎨 Design System Quick Reference

### Colors
- Primary: `var(--accent)` - #007aff
- Background: `var(--background)` - #ffffff
- Text: `var(--foreground)` - #1d1d1f
- Muted: `var(--muted)` - #86868b

### Spacing
- xs: `var(--space-1)` - 4px
- sm: `var(--space-2)` - 8px  
- md: `var(--space-4)` - 16px
- lg: `var(--space-6)` - 24px
- xl: `var(--space-8)` - 32px

### Typography
- Headings: SF Pro Display, system fonts
- Body: SF Pro Text, system fonts
- Code: SF Mono, Fira Code, monospace

---

**Last Updated**: May 23, 2025  
**Modernization Version**: 2.0  
**Maintainer**: Development Team
