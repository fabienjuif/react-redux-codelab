## Local
You wanna have everything installed to your local machine.
Ok let's go.

Install npm and node.

Then run the following commands:
```bash
# Get a faster npm
npm install -g yarn
# Install project dependencies via package.json
yarn
# Install firebase-cli (needed to deploy)
npm install -g firebase-cli
```

### Commands
  * start a local server (dev) with hot reloading: `yarn start` (http://localhost:3000)
  * run tests: `yarn test`
  * run linters: `yarn lint`
  * build the production bundle: `yarn build`
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
    firebase deploy --token=${FIREBASE_TOKEN} --non-interactive --project ${FIREBASE_PROJECT}
    ```

# Windows
Dear Windows users, [git-bash](https://git-for-windows.github.io/) should be enough to run the previous commands lines.
