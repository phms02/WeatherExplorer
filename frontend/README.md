# Frontend

- This project is a simple user interface built with Next.js and TypeScript. It allows users to search for countries and display weather data fetched from the backend.

## Getting Started

- First, **install the dependencies**:

    ```shell
    npm install
    ```

### Attetion!!!
- You may need to configure the `@mondaydotcomorg/monday-cli` **dependency**. So, run the command:

  ```shell
  npm i -g @mondaydotcomorg/monday-cli
  ```

  Then, rerun the command ***separately***:

  ```bash
  npm i @mondaydotcomorg/monday-cli
  ```

### Running the project
- Then, run the **development server**:

    ```shell
    npm run dev
    # or
    yarn dev
    # or
    pnpm dev
    # or
    bun dev
    ```

    > **The app will be available at `[http://localhost:3000](http://localhost:3000)`.**

- You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Learn More

- To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs): learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/): your feedback and contributions are welcome!

## Project Structure

- This folder is organized into **folders** and **files**:

    ```shell
    frontend/
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
    ```

## Technologies Used
- Axios
- monday.com SDK

<br>

<div align="center">
    <img alt="CSS" height="25" width="25" align="center" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" />
    <img alt="styled-components" height="25" width="25" align="center" src="https://skillicons.dev/icons?i=styledcomponents" />
    <img alt="TypeScript" height="25" width="25" align="center" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" />
    <img alt="JavaScript" height="25" width="25" align="center" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" />
    <img alt="React.js" height="25" width="25" align="center" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" />
    <img alt="Next.js" height="40" width="40" align="center" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original-wordmark.svg" />
</div>

## Environment Variables

- Create a `.env` file in the root of the folder and add your WeatherAPI key:

    `WEATHER_API_KEY=your_weather_api_key`

## Usage

- First, search for countries in the search bar;
- Then, click on a country to see its weather data.

## Considerations
- Please, follow the detailed steps and let me know if you need any further guidance.