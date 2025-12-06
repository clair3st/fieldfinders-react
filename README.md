# Seattle Field Finders

A React web application that helps users discover and locate sporting facilities in Seattle parks. Search for sports facilities by name and view them on an interactive map with detailed information.

Deployed [here](https://fieldfinders.netlify.app/)
[![Netlify Status](https://api.netlify.com/api/v1/badges/1a17176b-ce4b-4e49-a4bd-f92d9c562e96/deploy-status)](https://app.netlify.com/projects/fieldfinders/deploys)

I originally built this app for a Code School project, built using jquery, local storage and deployed on heroku. I've since updated to use a python backend, react front end with a sqlite database.

## Features

- 🔍 **Search Functionality**: Search for sporting facilities by sport type
- 🗺️ **Interactive Map**: View facility locations on an interactive Leaflet map centered on Seattle
- 📍 **Detailed Markers**: Click on map markers to see facility names and descriptions
- 📊 **Results Counter**: See the number of matching facilities in real-time
- ⚡ **Error Handling**: User-friendly error messages for failed requests
- 🎨 **Modern UI**: Clean, responsive design with a custom color scheme

## Tech Stack

- **React** 18.3.1 - UI library
- **React Leaflet** 4.2.1 - Map component library
- **Leaflet** 1.9.4 - Open-source JavaScript library for mobile-friendly interactive maps
- **Axios** 1.7.7 - HTTP client for API requests
- **React Scripts** 5.0.1 - Build tooling and development server

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v14 or higher recommended)
- **npm** (comes with Node.js) or **yarn**

## Getting Started

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/fieldfinders-react.git
   cd fieldfinders-react
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to view the app.

The page will automatically reload if you make changes to the code.

### Building for Production

To create a production build:

```bash
npm run build
```

This builds the app for production to the `build` folder. The build is optimized and minified for best performance.

## Usage

1. Enter a sport name (e.g., "soccer", "basketball", "tennis") in the search input
2. Click the search button or press Enter
3. View the results count and see markers appear on the map
4. Click on any marker to see facility details in a popup

## Project Structure

```
fieldfinders-react/
├── public/
│   ├── index.html
│   ├── robots.txt
│   └── soccer.ico
├── src/
│   ├── components/
│   │   └── SimpleMap.jsx      # Map component with Leaflet integration
│   ├── assets/
│   │   ├── search.svg
│   │   ├── search-white.svg
│   │   └── soccer.svg
│   ├── App.js                  # Main application component
│   ├── App.css                 # Application styles
│   └── index.js                # Application entry point
├── package.json
└── README.md
```

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App (one-way operation)

## API Integration

The application connects to a backend API hosted on PythonAnywhere:

- **Base URL**: `https://clair3st.pythonanywhere.com/features`
- **Endpoint**: `GET /features/{sport_name}`
- **Response**: Array of facility objects with properties:
  - `id`: Unique identifier
  - `name`: Facility name
  - `feature_desc`: Description of the facility
  - `xpos`: Longitude coordinate
  - `ypos`: Latitude coordinate

For the backend repository, see: [fieldfinders-api](https://github.com/clair3st/fieldfinders-api/tree/main)

## Deployment

The application is deployed on **Netlify** and automatically builds from the main branch.

## Development

### Code Style

The project uses ESLint with React app configuration. Code should follow React best practices and maintain consistent formatting.

### Key Components

- **App.js**: Manages state for search input, features, and error messages. Handles API calls and form submission.
- **SimpleMap.jsx**: Renders the interactive map with markers for each facility. Uses Leaflet for map rendering and Stadia Maps for tile layers.

## License

See the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Seattle Parks and Recreation for facility data
- Stadia Maps for map tiles
- OpenStreetMap contributors
- Leaflet and React Leaflet communities
