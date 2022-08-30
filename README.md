### Special thanks
This solution is realised with the help of Kevin.
Check out his really nice extension which save you a lot of work: https://marketplace.visualstudio.com/items?itemName=kevin-deelen.templategenerator

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### `installation`

Run yarn to install dependencies.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.`

### `known issues`

You should not use destructuring with **useStore**.
This can cause problems with refreshing components.
If anyone knows a solution for this, please submit a pull request.