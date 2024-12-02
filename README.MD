# Neo Blog

## Overview

This is **neo blog**, a web application built with **React**, **typeScript**, and **strapi** and other technologies. This app is a simple blog platform where users can create and view their blogs. create new blog posts, and display them to others. The app provides an intuitive interface to manage posts and share content seamlessly.

## Tech Stack

codegen (Orval): API code generation from OpenAPI specs
Axios: HTTP client for making requests
SWR: Data fetching library with caching and revalidation

- **React**: Frontend framework
- **strapi**: Backend headless CMS
- **TypeScript**: For static typing
- **codegen (Orval)**: API code generation from OpenAPI specs
- **Axios**:HTTP client for making requests
- **SWR**:Data fetching library with caching and revalidation
- **SCSS**: for Styling
- **React Icons**: for Icons
- **React Router**: For routing
- **Vite**: A fast build tool for modern web development

## Prerequisites

Before you start, make sure you have the following installed on your machine:

- **Node.js**: Version 12 or above. You can download it from [here](https://nodejs.org/).
- **pnpm**: A fast, disk space-efficient package manager for JavaScript. You can install it globally by running:

  ```bash
  npm install -g pnpm
  ```

## Getting Started

To get started with this project on your local machine, follow the steps below:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/mahdisolgi1/neo-blog.git
   cd neo-blog
   ```

2. **Install dependencies**:
   Use pnpm to install the necessary packages:

   ```bash
   pnpm install
   ```

3. **add services(codegen)**:
   run the following command to generate the necessary API code using Orval:

   ```bash
   pnpm run codegen
   ```

4. **Run the frontend development server**:
   Start the app in frontend development mode with:

   ```bash
   pnpm run dev
   ```

   This will open the app in your browser at `http://localhost:5173/`.

5. **Run the backend development server (strapi)**:
   Start the backend server with:

   ```bash
   pnpm run develop
   ```

## Building the Project

To build the project for production:

1. Run the build command:

   ```bash
   pnpm run build
   ```

2. This will create a `build` folder with the optimized production-ready code.

3. You can now deploy the contents of the `build` folder to your hosting platform.

## How to Contribute

I welcome contributions to this project! If you'd like to contribute, please follow these steps:

1. Fork the repository by clicking the "Fork" button in the top right of this page.
2. Clone your fork:
   ```bash
   git clone https://github.com/mahdisolgi1/neo-blog.git
   ```
3. Create a new branch for your changes:
   ```bash
   git checkout -b feature-branch
   ```
4. Make your changes and commit them:
   ```bash
   git add .
   git commit -m "Add new feature"
   ```
5. Push your changes:
   ```bash
   git push origin feature-branch
   ```
6. Open a pull request to merge your changes into the main branch.

## Creating Issues

To report a bug or request a feature, please follow these steps:

1. Go to the "Issues" tab of this repository.
2. Click on "New Issue".
3. Provide a clear title and description of the issue or feature request.
4. If reporting a bug, include steps to reproduce it, and if possible, screenshots or error logs.
