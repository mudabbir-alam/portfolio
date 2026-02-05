# Portfolio Website

A modern, responsive portfolio website built with React and TailwindCSS, featuring smooth animations, custom fonts, and integrated email functionality.

## Features

- **Lightning Fast**: Powered by Vite for instant dev server startup and HMR (Hot Module Replacement)
- **Modern UI/UX**: Clean and responsive design using TailwindCSS
- **React Hooks**: Leveraging useState, useEffect, and useContext for state management
- **Skeleton Loading**: Enhanced user experience with skeleton screens during content loading
- **Custom Fonts**: Unique typography for distinctive branding
- **Email Integration**: Contact form powered by EmailJS for seamless communication
- **Responsive Design**: Fully optimized for desktop, tablet, and mobile devices
- **Performance Optimized**: Fast loading times and smooth interactions

## Tech Stack

- **Build Tool**: Vite
- **Frontend Framework**: React.js
- **Styling**: TailwindCSS
- **Email Service**: EmailJS
- **State Management**: React Context API
- **Hooks**: useState, useEffect, useContext

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/mudabbir-alam/portfolio.git
cd portfolio
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Set up environment variables

Create a `.env` file in the root directory and add your EmailJS credentials:
```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

**Note:** Vite requires environment variables to be prefixed with `VITE_` to be exposed to the client-side code.

4. Start the development server
```bash
npm run dev
# or
yarn dev
```

The application will open at `http://localhost:5173`

## Project Organization

- **`/src/components`** - Modular UI components (Header, Footer, Main sections) with dedicated skeleton loaders
- **`/src/assets/fonts`** - Custom web fonts for unique typography
- **`/public`** - Static assets including images and logos
- **Configuration files** - Vite, TailwindCSS, PostCSS, and ESLint configs in root

## Key Features Explained

### Component Architecture
The portfolio uses a well-organized component structure with separate skeleton loaders for each major section:
- **Header & Footer**: Navigation and footer with loading states
- **Main Sections**: Hero, About, Experience, Projects, Tech Stack, and Contact
- **Skeleton Screens**: Dedicated skeleton components for smooth loading transitions
- **Reusable Components**: Button, Cards, Sidebar with overlay for mobile navigation

### Skeleton Screens
Each major component has a corresponding skeleton loader (e.g., `HeroSkeleton.jsx`, `AboutSkeleton.jsx`) that displays while content is being fetched or loaded, providing a better user experience.

### Custom Fonts
Custom web fonts are stored in `src/assets/fonts/` and integrated through CSS to create a unique visual identity and enhance the overall design aesthetic.

### EmailJS Integration
The contact form (`Contact.jsx`) uses EmailJS to handle email submissions without requiring a backend server. Messages are sent directly to your email inbox using the environment variables configured in `.env`.

## Building for Production

To create a production build:

```bash
npm run build
# or
yarn build
```

The optimized files will be in the `dist/` directory, ready for deployment.

To preview the production build locally:
```bash
npm run preview
# or
yarn preview
```

## Deployment

This project can be deployed to various platforms:

- **Vercel**: `vercel --prod` (auto-detects Vite)
- **Netlify**: 
  - Build command: `npm run build`
  - Publish directory: `dist`
- **GitHub Pages**: Use `gh-pages` package with `dist` folder
- **Firebase Hosting**: `firebase deploy`

**Note:** Make sure to set your environment variables in your deployment platform's settings.

## Environment Variables

| Variable | Description |
|----------|-------------|
| `VITE_EMAILJS_SERVICE_ID` | Your EmailJS service ID |
| `VITE_EMAILJS_TEMPLATE_ID` | Your EmailJS template ID |
| `VITE_EMAILJS_PUBLIC_KEY` | Your EmailJS public key |

**Important:** Vite requires the `VITE_` prefix for all environment variables that need to be accessible in your client-side code. Access them in your code using `import.meta.env.VITE_VARIABLE_NAME`.

## Security Considerations

### EmailJS Security
While EmailJS public keys are designed to be client-side and visible, you should implement these security measures:

**In your EmailJS Dashboard:**
1. **Enable reCAPTCHA v3** - Prevents bot spam and abuse
2. **Configure Email Templates** - Lock down recipient addresses in templates
3. **Enable Rate Limiting** - Limit requests per hour/day
4. **Whitelist Domains** - Only allow requests from your production domain
5. **Monitor Usage** - Regularly check your EmailJS dashboard for suspicious activity

**Important Notes:**
- ✅ Public keys (user ID) are safe to expose in frontend code
- ✅ Service IDs and Template IDs can be public
- ❌ Never commit actual API secret keys (EmailJS doesn't use these for client-side)
- ✅ Always use environment variables for configuration
- ✅ Different EmailJS accounts for development/production is recommended

**Example EmailJS Template Configuration:**
```javascript
// In your email template, use fixed recipient
To: your-email@example.com (locked in template)
From: {{from_name}} <{{from_email}}>
Message: {{message}}
```

This ensures users can only send emails **to you**, not to arbitrary addresses.

## Performance Optimization

- Vite's lightning-fast HMR (Hot Module Replacement)
- Lazy loading for images and components
- Code splitting and tree-shaking out of the box with Vite
- TailwindCSS purging for minimal CSS footprint
- React.memo for preventing unnecessary re-renders
- Optimized production builds with Rollup

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

## License

This project is [MIT](LICENSE) licensed.

## Contact

Mudabbir Alam - [mudabiralamarain@gmail.com](mailto:mudabiralamarain@gmail.com)

Project Link: [https://github.com/mudabbir-alam/portfolio](https://github.com/mudabbir-alam/portfolio)

## Acknowledgments

- [React Documentation](https://react.dev/)
- [TailwindCSS](https://tailwindcss.com/)
- [EmailJS](https://www.emailjs.com/)
- Icons from [Google Fonts]
- Inspiration from various portfolio designs
- Design by [Stitch](https://stitch.withgoogle.com)

---

Made with ❤️ by Mudabbir Alam