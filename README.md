# StreamVibe: React + TypeScript + Vite Project

Welcome to the StreamVibe project documentation. This project utilizes React, TypeScript, and Vite to deliver a streaming platform that allows users to enjoy movies and TV shows across various devices. The setup includes Hot Module Replacement (HMR) for efficient development and ESLint for code quality.

## Project Structure

The project is structured into several directories:

- `src/assets`: Contains all static assets like images and SVGs.
- `src/pages`: Includes React components that represent different pages.
- `src/ui`: Houses reusable UI components.
- `src/constants`: Stores constant values and configurations.

## Key Components

### Pages

- **Home**: Displays the main page of the application.
- **Movies**: Shows the movies available for streaming.
- **Subscriptions**: Manages subscription-related information.
- **Support**: Provides help and support resources to the users.

### UI Components

- **Navbar** and **Footer**: Provide navigation and footer content across the site.
- **Hero**: A dynamic hero image component that adjusts based on the device.
- **DeviceAccess**: Displays compatible devices for streaming.

## Setup and Configuration

### Vite Plugins

This project uses the following Vite plugins for React:

- `@vitejs/plugin-react`: Utilizes Babel for Fast Refresh.
- `@vitejs/plugin-react-swc`: Uses SWC as an alternative to Babel for Fast Refresh.

### ESLint Configuration

To enhance the ESLint configuration for a production-grade application, follow these steps:

1. Update the `parserOptions` in the ESLint configuration:

   ```javascript
   parserOptions: {
     ecmaVersion: 'latest',
     sourceType: 'module',
     project: ['./tsconfig.json', './tsconfig.node.json'],
     tsconfigRootDir: __dirname,
   }
   ```

2. Replace the existing TypeScript ESLint plugin recommendation with stricter rules:

   - From `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`.

3. Optionally, add `plugin:@typescript-eslint/stylistic-type-checked`.

4. Install `eslint-plugin-react` and update the `extends` list:
   - Add `plugin:react/recommended` & `plugin:react/jsx-runtime`.

## Running the Project

To run the project locally:

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

This setup ensures that you have a robust development environment for building a high-quality React application with TypeScript in Vite.
