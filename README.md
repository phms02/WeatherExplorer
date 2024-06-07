# WeatherExplorer

- **WeatherExplorer** is a project that combines a **simple user interface (UI)**, built with **React.js**, **Next.js** and **TypeScript**, and a backend using **Node.js** with **Express.js** to fetch weather data for countries through the WeatherAPI.
- The UI runs inside a **monday.com board**.

## Table of Contents

- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Frontend Setup](#frontend-setup)
- [Backend Setup](#backend-setup)
- [Main Commands](#main-commands)
- [Technologies Used](#technologies-used)
- [IDEs and Tools Used](#ides-and-tools-used)
- [Contribution](#contribution)

## Project Structure

- The project is organized into two main folders: `frontend` and `backend`.

```shell
WeatherExplorer/
│
├── backend/
│    ├── src/
│    │   ├── controllers/
│    │   │   └── weatherController.ts
│    │   ├── services/
│    │   │   └── weatherService.ts
│    │   ├── routes/
│    │   │   └── weatherRoutes.ts
│    │   ├── models/
│    │   │   └── country.ts
│    │   ├── middlewares/
│    │   │   ── errorHandler.ts
│    │   ├── app.ts
│    │   └── server.ts
│    ├── .eslintrc.js
│    ├── .prettierrc
│    ├── package.json
│    ├── tsconfig.json
│    └── README.md
│
├── frontend/
│    ├── src/
│    │   ├── public/
│    │   │   ├── favicon.ico
│    │   │   ├── index.html
│    │   │   ├── logo192.png
│    │   │   ├── logo512.png
│    │   │   ├── manifest.json
│    │   │   └── robots.txt
│    │   ├── components/
│    │   │   ├── Modal/
│    │   │   │   ├── index.tsx
│    │   │   │   └── styles.ts
│    │   │   ├── ResultList/
│    │   │   │   ├── index.tsx
│    │   │   │   └── styles.ts
│    │   │   ├── SearchBar/
│    │   │   │   ├── index.tsx
│    │   │   │   └── styles.ts
│    │   ├── pages/
│    │   │   └── HomePage.tsx
│    │   ├── styles/
│    │   │   ├── App.css
│    │   │   └── index.css
│    │   ├── tests/
│    │   │   └── App.tests.tsx
│    │   ├── utils/
│    │   │   ├── api.ts
│    │   │   ├── Interfaces.ts
│    │   │   └── react-app-env.d.ts
│    ├── next-env.d.ts
│    ├── next.config.js
│    ├── package-lock.json
│    ├── package.json
│    ├── README.md
│    └── tsconfig.json
│
└── README.md
```

## Prerequisites

- Node.js (recommended: version 16 or higher)
- npm (Node Package Manager)
- Account on [WeatherAPI](https://www.weatherapi.com/) to obtain the API key
- Account on [monday.com](https://monday.com/) to integrate the UI

## Frontend Setup

1. Navigate to the `frontend` folder:

    ```shell
    cd frontend
    ```

2. Install the dependencies:

    ```shell
    npm install
    ```

3. Create a `.env.local` file in the root of the `frontend` folder and add the WeatherAPI key:

    ```env
    WEATHER_API_KEY=your_weather_api_key
    ```

4. Start the development server:

    ```shell
    npm run dev
    ```

## Backend Setup

1. Navigate to the `backend` folder:

    ```shell
    cd backend
    ```

2. Install the dependencies:

    ```shell
    npm install
    ```

3. Create a `.env` file in the root of the `backend` folder and add the WeatherAPI key:

    ```env
    WEATHER_API_KEY=your_weather_api_key
    ```

4. Start the server:

    ```shell
    npm run start
    ```

## Main Commands

### Frontend

- `npm run dev`: Starts the Next.js development server
- `npm run build`: Builds the application for production
- `npm start`: Starts the application in production mode

### Backend

- `npm run start`: Starts the Express.js server
- `npm run build`: Builds the TypeScript project

## Technologies Used

- **Frontend**

<div align="center">
    <img alt="CSS" height="25" width="25" align="center" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" />
    <img alt="styled-components" height="25" width="25" align="center" src="https://skillicons.dev/icons?i=styledcomponents" />
    <img alt="TypeScript" height="25" width="25" align="center" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" />
    <img alt="JavaScript" height="25" width="25" align="center" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" />
    <img alt="React.js" height="25" width="25" align="center" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" />
    <img alt="Next.js" height="40" width="40" align="center" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original-wordmark.svg" />
</div>

- Axios
- monday.com SDK

- **Backend**

<div align="center">
    <img alt="TypeScript" height="25" width="25" align="center" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" />
    <img alt="Node.js" height="25" width="25" align="center" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" />
</div>

- Axios
- dotenv

## IDEs and Tools Used

<div align="center">
    <img alt="JetBrains" height="35" width="35" align="center" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jetbrains/jetbrains-original.svg" />
    <img alt="WebStorm" height="25" width="25" align="center" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/webstorm/webstorm-original.svg" />
    <img alt="Git" height="25" width="25" align="center" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" />
    <img alt="GitHub" height="25" width="25" align="center" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" />
</div>

## Contributions

Contributions are welcome! Feel free to open an issue or submit a pull request.

1. Fork the project.
2. Create a branch for your feature (`git checkout -b feature/AmazingFeature`).
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4. Push to the branch (`git push origin feature/AmazingFeature`).
5. Open a Pull Request.