# ts-app-boilerplate

> A minimal TypeScript application starter with ESM support, esbuild bundling, and a dev server with hot rebuilds.

![TypeScript](https://img.shields.io/badge/TypeScript-6.0-3178c6?logo=typescript&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-ESM-5fa04e?logo=nodedotjs&logoColor=white)
![esbuild](https://img.shields.io/badge/esbuild-0.28-ffcf00?logo=esbuild&logoColor=black)
![ESLint](https://img.shields.io/badge/ESLint-10-4b32c3?logo=eslint&logoColor=white)
![Prettier](https://img.shields.io/badge/Prettier-enabled-f7b93e?logo=prettier&logoColor=black)
![License](https://img.shields.io/badge/License-MIT-blue)

Uses TypeScript in strict mode with esbuild for fast bundling and watch mode. Code quality is handled by ESLint and
Prettier. Environment variables are managed through dotenv.

## Getting Started

```sh
npm install
```

Create a `.env` file (see `environment.d.ts` for available variables):

```
PORT=3000
```

## Scripts

| Command         | Description                                                     |
|-----------------|-----------------------------------------------------------------|
| `npm run dev`   | Watch mode — rebuilds and runs on change                        |
| `npm run build` | Audit dependencies, type-check, lint, and bundle for production |
| `npm start`     | Run the production bundle                                       |
| `npm run lint`  | Run ESLint                                                      |

## Project Structure

| Path               | Description                                         |
|--------------------|-----------------------------------------------------|
| `src/index.ts`     | Entry point                                         |
| `dist/`            | Build output (gitignored)                           |
| `esbuild.mjs`      | Build and watch configuration                       |
| `environment.d.ts` | Type declarations for env variables                 |
| `eslint.config.js` | ESLint flat config                                  |
| `.prettierrc`      | Prettier config                                     |
| `.npmrc`           | npm configuration (exact versions, min release age) |
