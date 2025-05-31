# QR Code Generator

A modern, full-stack web application for generating QR codes from URLs. Built with React, Node.js, and Express.

## Features

- Generate QR codes from URLs
- Download QR codes as PNG images
- Modern, responsive design
- Real-time QR code preview
- Copy URL to clipboard
- Mobile-friendly interface

## Tech Stack

- **Frontend:**
  - React
  - Tailwind CSS
  - Vite
  - React Icons
  - React Toastify

- **Backend:**
  - Node.js
  - Express
  - QRCode library

## Prerequisites

- Node.js (v14 or higher)
- npm (Node Package Manager)

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd qr-code-generator
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory:
```env
PORT=3000
VITE_API_URL=http://localhost:3000
```

## Development

Run the development server:
```bash
npm run dev
```

This will start both the frontend (Vite) and backend (Express) servers concurrently.

- Frontend: http://localhost:5173
- Backend: http://localhost:3000

## Production

Build the frontend:
```bash
npm run build
```

Start the production server:
```bash
npm start
```

## Project Structure

```
.
├── src/              # Frontend source code
│   ├── components/   # React components
│   ├── App.jsx      # Main App component
│   └── main.jsx     # Entry point
├── server/          # Backend source code
│   └── server.js    # Express server
├── public/          # Static files
├── index.html       # HTML template
└── package.json     # Project dependencies
```

## License

This project is licensed under the MIT License. # qrgen-pro
