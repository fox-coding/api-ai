# Simple Nuxt 3 Open-Ai implementation


## Setup

Make sure to install the dependencies:

```bash
# yarn
yarn install

# npm
npm install

# pnpm
pnpm install
```
## Api- Key

Create account for OpenAi, then generate a Api-Key here: https://platform.openai.com/account/api-keys

## Settings

Create a new file in root directory: .env
in .env paste this code, and replace sk-xxxxxxYourApiKeyxxxxxxxxx with your own Api-Key:

```
OPENAI_API_KEY="sk-xxxxxxYourApiKeyxxxxxxxxx"

```

## Development Server

Start the development server on http://localhost:3000

```bash
npm run dev
```

## Production

Build the application for production:

```bash
npm run build
```

Locally preview production build:

```bash
npm run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
