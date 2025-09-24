# React Website

A modern, responsive React.js website built with Vite for fast development and optimized builds.

## Features

- ⚡ **Lightning Fast** - Built with Vite for instant hot reload
- 📱 **Responsive Design** - Mobile-first approach
- 🎨 **Modern UI** - Beautiful components with smooth animations
- 🔧 **Developer Friendly** - Clean code structure with ESLint
- 🚀 **Production Ready** - Optimized builds and best practices
- 💡 **Easy to Customize** - Modular architecture

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and visit `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── components/
│   ├── Header.jsx          # Navigation header
│   ├── Header.css
│   ├── Hero.jsx            # Hero section
│   ├── Hero.css
│   ├── Features.jsx        # About section
│   ├── Features.css
│   ├── Projects.jsx        # Projects section
│   ├── Footer.jsx          # Footer
│   └── Footer.css
├── App.jsx                 # Main app component
├── App.css
├── main.jsx               # Entry point
└── index.css              # Global styles
```

## Resume Download

- Place your PDF at the project root as `public/resume.pdf` (create a `public` folder if it doesn't exist). 
- In dev and build, the header "Resume" button links to `/resume.pdf` and will download the file.

## Deployment

To deploy your website:

1. Build the project:
```bash
npm run build
```

2. The built files will be in the `dist/` directory
3. Deploy the `dist/` folder to your hosting service

## License

This project is open source and available under the [MIT License](LICENSE).
