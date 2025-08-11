What is NPM ?
NPM stands for Node Package Manager . Basically It default package of node.js and it will manage all the dependencies which is installed for the projectg and it will automatically create the package.lock.json file, node modules, package.json file which have all the information about the dependencies.

What is `Parcel/Webpack`? Why do we need it?
Parcel and Webpack are the module bundler they can bundle the code , optimize the code (js,images,css) which browser can understand easily.
we need it because they have lots of features along with it

- Code splitting
- Hot module replacement
- Modular code
- Combining the code into dev server

What is `.parcel-cache`?
parcel-cache is a special folder / directory which is created by parcel automatically to speed up builds.

What is `npx` ?
npx is a command line tool which is basically used to run the npm version packages without installing them globally.

What is difference between `dependencies` vs `devDependencies`
Dependencies:- These are the package application wihch is need to installed to run the application when it is in production.
ex:- axios, express , react

Dev-dependencies:- These are the packages which are need to installed when application is in development not in production.
ex:- nodemon, webpack,islint

What is Tree Shaking?
Tree Shaking is a process used in javascript in which it will remove the extra unused code form the application by which the app run faster and well optimized.

What is Hot Module Replacement?
Hot Module Replacement (HMR) is a feature in modern build tools (like Webpack, Vite, Parcel) that lets you update modules in a running application without reloading the whole page.
- Why it’s useful
Without HMR: If you make a code change, the browser reloads the page, which resets the application state.

- With HMR: Only the changed module (file) is updated in the browser live, and the rest of the app stays the same — state is preserved
