### Shuflist Frontend Setup

Before proceeding, ensure you have `nvm` (Node Version Manager) installed globally and operational. If you're not using `nvm`, verify that you are utilizing the Node version specified in the `.nvmrc` file.

#### Installation Scripts

`npm install`
`npm run prepare`

Make sure to download the API and microservice repositories, ensuring all three repositories are stored within the same folder.

#### Startup Commands (Run the following from the Frontend repo folder)

To initiate the frontend:
`npm run dev`

To start the microservice within this project:
`npm run microservice`

For the database service (ensure Docker is running):
`npm run db-api`

## Tech Stack

### TypeScript

<p align="center">
  <img src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg" alt="TypeScript" width="150" />
</p>

### React

<p align="center">
  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2560px-React-icon.svg.png" alt="React" width="150" />
</p>

### Redux Toolkit

<p align="center">
  <img src="https://upload.wikimedia.org/wikipedia/commons/4/49/Redux.png" alt="Redux Toolkit" width="150" />
</p>

### Vite

<p align="center">
  <img src="https://seeklogo.com/images/V/vite-logo-2286F7B818-seeklogo.com.png" alt="Vite" width="150" />
</p>

### Additional Tools

- Linting (ESLint)
- Code Formatting (Prettier)
- Git Hooks (Husky)
