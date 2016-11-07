## Docker
You don't want to have to install node, npm, firebase, etc.
You can use the `docker-compose.yml` file.

To download The needed images:
```bash
# Dependencies, npm and node
docker pull fabienjuif/react-redux-codelab
# Firebase CLI
docker pull devillex/docker-firebase
```

### Helpers (docker-compose.yml)
  * start a local server (dev) with hot reloading (http://localhost:3000)
    ```bash
    docker run -it --rm \
      -p3000:3000 \
      -v${PWD}/src:/usr/src/app/src \
      fabienjuif/react-redux-codelab \
      npm start
    ```
  * build the production bundle
    ```bash
    docker run -it --rm \
      -v${PWD}/public:/usr/src/app/public \
      -v${PWD}/src:/usr/src/app/src \
      fabienjuif/react-redux-codelab \
      npm run build
    ```
  * firebase
   * get a firebase token:
   ```bash
   docker run -it --rm \
    -p9005:9005 \
    devillex/docker-firebase \
    firebase login:ci
   # Open link to your browser
   # Connect with your google account
   # Get the TOKEN
   ```
   * publish the application (need to build first):
    ```bash
    export FIREBASE_PROJECT=<project name>
    export FIREBASE_TOKEN=<previous TOKEN>
    docker run -it --rm \
      -v${PWD}/public:/public \
      -v${PWD}/firebase.json:/firebase.json \
      devillex/docker-firebase \
      firebase deploy --token=${FIREBASE_TOKEN} --non-interactive --project ${FIREBASE_PROJECT}
    ```
