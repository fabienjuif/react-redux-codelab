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
  * start a local server (dev) with hot reloading
    ```bash
    docker-compose run --rm dev
    ```
  * build the production bundle
    ```bash
    docker-compose run --rm build
    ```
  * firebase
   * get a firebase token:
   ```bash
   docker-compose run --rm gettoken
   # Open link to your browser
   # Connect with your google account
   # The redirect URL will fail, don't panick, do these two steps:
   docker inspect reactreduxcodelab_gettoken_run_1 | grep IPAddress
   # Then replace `localhost:9005` by `<ip>:9005` in your browser
   # Get the TOKEN
   ```
   * publish the application (need to build first):
    ```bash
    export FIREBASE_PROJECT=<project name>
    export FIREBASE_TOKEN=<previous TOKEN>
    docker-compose run --rm publish
    ```
