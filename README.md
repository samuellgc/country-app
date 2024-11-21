# Project README

## Overview

This project is built with **Next.js** for the front-end and **NestJS** for the back-end, providing a seamless, modern development experience. The front-end utilizes **React 18.2.0** and **Next.js 15.0.3**, while the back-end integrates various libraries and services to handle data efficiently.

The back-end interacts with third-party APIs, **Date Nager** and **Countries Now**, to fetch and manage country-related data.

---

## Features

### Front-End (Next.js)

- **UI Libraries**: Styled with **Tailwind CSS** for rapid and responsive design.
- **Charts**: **Recharts** for interactive and customizable visualizations.
- **Data Fetching**: **Axios** for API integration.
- **Code Quality**: **ESLint** for maintaining clean and consistent code.

### Back-End (NestJS)

- **Validation**: **Class-validator** for enforcing schema validation.
- **Code Quality**: **ESLint** and **Prettier** for consistent coding standards.
- **Data Fetching**: **Axios** for API requests to third-party services.
- **Third-Party APIs**: Integrations with **Date Nager** and **Countries Now**.

---

## Getting Started

### Prerequisites

- **Node.js** (v16 or higher)
- **NPM** (v7 or higher)

### Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd <repository-folder>

2. Install dependencies and start the front-end:

  ```bash
  cd client
  npm install
  npm run dev

3. Install dependencies and start the back-end:

  ```bash
  cd ../api
  npm install
  npm run start:dev

### Environment Variables

All necessary environment variables are preconfigured and included. No additional setup is required to run the project.
