# Mini Databricks Playground

A React-based recreation of the Databricks interface featuring a Playground for AI interactions and a comprehensive Typography Showcase demonstrating the Dubois Design System.

## 🚀 Features

### Playground Interface
- **Full Databricks UI Recreation**: Complete sidebar navigation, top bar, and main content area
- **Collapsible Sidebar**: Toggle sidebar visibility with hamburger menu
- **Model Selection**: Interactive model selector with settings
- **Chat Interface**: Custom chat input with focus states and interactive elements
- **Draggable App Switcher**: Move the view toggle anywhere on the page
- **Responsive Design**: Works on desktop and mobile devices

### Typography Showcase
- **Complete Typography System**: All heading levels (h1-h6), body text, small text, code, and links
- **Font Weight Variations**: Regular, medium, semibold, and bold weights
- **Color Variants**: Primary, secondary, success, warning, and danger colors
- **Interactive Examples**: Live demonstrations with code snippets
- **Design System Compliance**: Uses official Databricks semantic colors

### Design System Integration
- **Dubois Design System**: Official Databricks design tokens and components
- **Semantic Colors**: Proper color hierarchy and accessibility
- **Custom Components**: Working alternatives for non-functional design system components
- **Consistent Styling**: Maintains visual consistency throughout

## 🛠️ Technology Stack

- **React 18**: Modern React with hooks and functional components
- **Databricks Design System**: Official Dubois components and styling
- **CSS3**: Custom styling with CSS variables and semantic colors
- **Git**: Version control with proper .gitignore

## 📁 Project Structure

```
src/
├── App.js                 # Main app component with view switching
├── App.css               # App-level styles and draggable toggle
├── Playground.jsx        # Main playground interface
├── Playground.css        # Playground-specific styles
├── TypographyShowcase.jsx # Typography demonstration component
├── TypographyShowcase.css # Typography showcase styles
├── index.js              # React entry point
└── index.css             # Global styles

public/
├── index.html            # HTML template
└── primary-lockup-full-color-rgb.svg # Databricks logo
```

## 🎨 Key Components

### Playground Interface
- **Sidebar Navigation**: Complete navigation with icons and sections
- **Top Bar**: Logo, search, and user controls
- **Model Controls**: Interactive model selection with settings
- **Chat Input**: Custom input with focus states and actions
- **Header Actions**: Export code and feedback buttons

### Typography System
- **Heading Hierarchy**: H1-H6 with proper sizing and weights
- **Body Text**: Regular, semibold, and bold variations
- **Specialized Text**: Small text, code, and link styles
- **Color System**: Semantic color variants for different contexts

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation
1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd mini-databricks
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Available Scripts
- `npm start`: Start development server
- `npm build`: Build for production
- `npm test`: Run tests
- `npm eject`: Eject from Create React App

## 🎯 Usage

### Switching Views
- Use the draggable toggle in the top-right corner
- Click "Playground" for the main interface
- Click "Typography Showcase" for typography examples

### Playground Features
- **Sidebar**: Navigate through different sections
- **Model Selection**: Choose AI models and access settings
- **Chat**: Type messages in the interactive chat input
- **Export**: Use the "Export code" button to generate code

### Typography Showcase
- **Browse Examples**: View all typography variants
- **Copy Code**: Use the code snippets for implementation
- **Compare Styles**: See different weights and colors side by side

## 🎨 Design System

### Color Palette
- **Primary**: Databricks blue (#2272B4)
- **Secondary**: Gray scale (#5F7281, #6B7280, etc.)
- **Semantic**: Success, warning, danger, and info colors
- **Background**: Primary, secondary, and tertiary backgrounds

### Typography Scale
- **H1**: 32px, bold (700)
- **H2**: 28px, semibold (600)
- **H3**: 24px, semibold (600)
- **H4**: 20px, semibold (600)
- **H5**: 18px, semibold (600)
- **H6**: 16px, semibold (600)
- **Body**: 14px, regular (400)
- **Small**: 12px, regular (400)

## 🔧 Customization

### Adding New Components
1. Create component file in `src/`
2. Add corresponding CSS file
3. Import and use in main components

### Modifying Styles
- Use semantic color variables for consistency
- Follow the established typography scale
- Maintain responsive design principles

### Extending Functionality
- Add new navigation items to sidebar
- Create additional showcase sections
- Implement new interactive features

## 📝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is for educational and demonstration purposes. The Databricks Design System and related assets are property of Databricks.

## 🙏 Acknowledgments

- Databricks Design System (Dubois)
- React team for the excellent framework
- Create React App for the development setup

---

**Note**: This is a demonstration project recreating the Databricks interface. It is not affiliated with or endorsed by Databricks. 