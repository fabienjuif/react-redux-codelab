# react-redux-codelab: tvscrub
In this codelab we build a tv shows episodes follower.
The technologies are: react, redux and firebase.

You can find an instance here to play with: [react-redux-codelab (hosted by Firebase)](https://react-redux-codelab.firebaseapp.com/)

![Imgur](http://i.imgur.com/FsJFZZl.png)

![Imgur](http://i.imgur.com/TCty3IV.png)


## Slides
1. Tools and libs: [Google doc -fr-](https://docs.google.com/presentation/d/1NlW5g9BY4QHIgyGbQqZxWtR3KugYmyUvSUAsHezmCo0/edit?usp=sharing)
2. React components and Redux state : [Google doc -fr-](https://docs.google.com/presentation/d/1MfxJQWou7iEe9Il5MaYCqhEH4LYRBZKTClbPEN__zjc/edit?usp=sharing)
3. Steps (simple): [PLAN -fr-](./PLAN.md)
4. Steps : [Google doc -fr-](https://docs.google.com/presentation/d/1qU1pqq3TXb-0jLTKToKLcKremc8A6sVqXknNzGxdrhU/edit?usp=sharing)

## Steps
For full steps, you can look up to the Google doc.

This steps are summaries:
  * React
    * Simple reminder, how do we do a react component (as pure function)
  * Redux
    * Simple reminder, how do we do a redux reducer and action
  * react-redux
    * Simple reminder, how do we connect our component to our state/actions
  * redux-little-router
    * When we click a tv show, it should open a new page with detailed informations and episodes
    * This is also the time to retrieve some URL options (route params)
  * reselect
    * Optimize our container (react-redux)
  * firebase
    * Deploy the application on your own account

## Get tools
You should install these tools to your browser, these are must-haves (but are optionals):
  * [google-chrome](https://www.google.fr/chrome/browser/desktop/)
  * [redux-devtools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd)
  * [react-devtools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)
  * [Atom](https://atom.io/)
    * Plugins:
      * highlight-selected
      * file-icons
      * react
      * pigment
      * linter-eslint
      * linter-sass-lint

To get the others tools and dependencies (**NEEDED**), you could choose between:
  * [Install everything locally](./TOOLS-LOCAL.md)
  * [Use docker](./TOOLS-DOCKER.md)
