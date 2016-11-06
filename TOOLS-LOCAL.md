## Local
You wanna have everything installed to your local machine.
Ok let's go.
First thing first: you need npm and node, I let you install it yourself.

Then run the following pre-requires:
```bash
# Get a faster npm
npm install -g yarn
# Install project dependencies via package.json
yarn
# Install firebase-cli (needed to deploy)
npm install -g firebase-cli
```

### Commands
  * start a local server (dev) with hot reloading
    ```bash
    yarn start
    ```
  * build the production bundle
    ```bash
    yarn run build
    ```
  * firebase
   * get a firebase token:
   ```bash
   firebase login:ci
   # Open link to your browser
   # Connect with your google account
   # Get the TOKEN
   ```
   * publish the application (need to build first):
    ```bash
    export FIREBASE_PROJECT=<project name>
    export FIREBASE_TOKEN=<previous TOKEN>
    deploy --token=${FIREBASE_TOKEN} --non-interactive --project ${FIREBASE_PROJECT}
    ```

# Windows
Deer Windows users, I bet [git-bash](https://git-for-windows.github.io/) is nice to use the previous commands lines.
