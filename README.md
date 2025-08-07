# Geppi Iaia - Product Manager Portfolio

A modern, interactive portfolio website showcasing Geppi's product management experience, projects, and skills. Built with React and Vite for optimal performance and developer experience. Preview here: https://jam.dev/c/ac4210c7-0119-4514-bfb1-bb517ae10ca9

## 🚀 Features

- **Interactive Hero Section** - Professional introduction with animated statistics
- **About Me Carousel** - Three distinct content modules: My Journey, What I Bring, and Skill Exposure
- **Featured Projects** - Filterable project showcase with detailed case studies
- **Measurable Outcomes** - Key metrics and achievements with resume modal integration
- **Interactive Quiz** - Personalized product manager assessment tool
- **Contact Section** - Direct email integration and social media links
- **Engagement Tracking** - Interactive "Geppi Points" system with fun facts and embarrassing pictures
- **Responsive Design** - Optimized for all devices and screen sizes

## 🛠️ Tech Stack

- **Frontend Framework**: React 18
- **Build Tool**: Vite
- **Styling**: CSS Modules with CSS Variables
- **Icons**: React Icons
- **Routing**: React Router DOM
- **Animations**: CSS Keyframes and Transitions

## 📁 Project Structure

```
my-portfolio-cursor/
├── public/
│   ├── images/           # Project images and assets
│   └── resume.pdf.pdf    # Resume file
├── src/
│   ├── components/       # React components
│   │   ├── About.jsx     # About Me section with carousel
│   │   ├── Contact.jsx   # Contact form and social links
│   │   ├── EngagementTracker.jsx # GP system and modals
│   │   ├── Hero.jsx      # Hero section with stats
│   │   ├── Navigation.jsx # Top navigation
│   │   ├── Outcomes.jsx  # Measurable outcomes
│   │   ├── Projects.jsx  # Featured projects grid
│   │   └── Quiz.jsx      # Interactive quiz
│   ├── App.jsx           # Main application component
│   ├── App.css           # Global styles
│   ├── index.css         # CSS variables and base styles
│   └── main.jsx          # Application entry point
├── package.json          # Dependencies and scripts
├── vite.config.js        # Vite configuration
└── index.html            # HTML template
```

## 🎨 Design System

The portfolio uses a comprehensive color system with CSS custom properties:

- **Primary Colors**: Purple/violet theme
- **Secondary Colors**: Teal/cyan accents
- **Accent Colors**: Orange highlights
- **Neutral Colors**: Grayscale variations
- **Semantic Colors**: Success, warning, error states

## 🎯 Key Features Explained

### Engagement Tracking System
- **Geppi Points (GP)**: Users earn points through interaction
- **Point Sources**: 
  - Scrolling 50% of page: 5 GP
  - Clicking interactive elements: 2 GP
  - "Learn More" clicks: 5 GP total
- **GP Store**: Spend points to unlock fun facts and embarrassing pictures
- **Engagement Modal**: Triggers at 20 points for contact encouragement

### Interactive Quiz
- **5 Questions**: Covering industry, team size, product type, and more
- **Personalized Results**: Each answer includes rationale for why Geppi is a good fit
- **Responsive Layout**: Two-column grid for efficient space usage

### Project Showcase
- **Filterable Grid**: Browse by category (All, B2B, B2C, Mobile, Web)
- **Resume Integration**: "Learn More" buttons open resume in modal
- **Image Gallery**: Professional project thumbnails

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-github-repo-url>
   cd my-portfolio-cursor
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:5173` (or the port shown in terminal)

### Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints at:
- **Desktop**: 1200px+
- **Tablet**: 768px - 1199px
- **Mobile**: < 768px

## 🎨 Customization

### Adding New Projects
1. Add project image to `public/images/`
2. Update `projects` array in `src/components/Projects.jsx`
3. Include title, description, tags, and image path

### Updating Skills
1. Modify `skills` array in `src/components/About.jsx`
2. Skills are automatically sorted by percentage
3. Two-column layout with progress bars

### Adding Fun Facts
1. Update `funFacts` array in `src/components/EngagementTracker.jsx`
2. Facts are displayed randomly without repetition

## 🔧 Development Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📄 License

This project is for personal portfolio use. All rights reserved.

## 🤝 Contact

- **LinkedIn**: [Geppi Iaia](https://www.linkedin.com/in/geppiiaia/)
- **Email**: jiaia8872@gmail.com

---

Built with ❤️ using React and Vite 
