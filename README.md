# react-note-web

This repository contains the frontend code for the Note App, a small-scale data registration system. It's built with React and uses Tailwind CSS for styling.

## Project Overview

react-note-web is the frontend component of the Note App infrastructure. It's designed to work in conjunction with the [go-note-api](https://github.com/1206yaya/go-note-api) backend and is deployed using the [tf-note-infra](https://github.com/1206yaya/tf-note-infra) Terraform configuration.

## Features

- React-based frontend for the Note App
- Styled with Tailwind CSS for a responsive and modern UI
- Integrates with the [go-note-api](https://github.com/1206yaya/go-note-api) backend

## Prerequisites

- Node.js (version X.X or higher)
- npm (version X.X or higher)

## Setup

1. Clone this repository:

   ```
   git clone https://github.com/1206yaya/react-note-web.git
   cd react-note-web
   ```

2. Install dependencies:

   ```
   npm install
   ```

3. Set up environment variables:
   - Copy the `.env.example` file to `.env`:
     ```
     cp .env.example .env
     ```
   - The `REACT_APP_API_URL` will be set automatically by the [tf-note-infra](https://github.com/1206yaya/tf-note-infra) Terraform configuration when deployed.

## Development

To start the development server:

```
npm start
```

This will run the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Building for Production

To create a production build:

```
npm run build
```

This will create a `build` folder with the production-ready files.

## Deployment

The deployment of this frontend is managed by the [tf-note-infra](https://github.com/1206yaya/tf-note-infra) Terraform project. Refer to its README for detailed deployment instructions.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the [MIT License](https://choosealicense.com/licenses/mit/).
