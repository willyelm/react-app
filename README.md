# A Simple react app setup with SSR and esbuild

This project leverages the latest features of react@19, react-router-dom@7, and others to configure SSR.

## Depdendencies
- **react**: Component-based and interactive UI library.
- **react-dom**: Hydrates SSR content with React functionality.
- **react-router-dom**: Handle Routes with React.
- **express**: Node.js simple server for static and REST APIs.
- **esbuild**: Transile TypeScript and bundle JS, CSS, SVG, and other files.
- **typescript**: Adding Typing to our source code.
- **jest**: Unit testing.
- **postcss**: Preprocess css files.
- **tailwindcss**: css utilities.
- **svgo**: converting svg to JSX component modules.

## Project Structure

```bash
react-app/             # This will be our workspace directory.
  - public/            
  - scripts/           
    - build.js         # Bundle our server and client scripts.
    - config.js        # esbuild config to bundle.
    - dev.js           # Bundle on watch mode and run server.
  - src/
    - App/             # Our components will be here.
      - App.tsx        # The main application with browser routing.
      - Home.tsx.      # Our default page component.
      - Home.test.tsx. # Unit Testing file.
      - NotFound.tsx   # Fallback request to not found.
    - index.tsx        # Hydrate our pre-rendered client app.
    - main.tsx         # Server app with SSR components.
    - style.css        # Initial stylesheet.   
  package.json
  tsconfig.json
```

## Development

To run this application on dev mode simply run:

```bash
npm run dev
```


## Production

To bundle and run this project in production mode:

```bash
npm run build
npm start
```

## Testing

To run jest test files:

```bash
npm run test
```