# react-redux-codelab: tvscrub
In this codelab we build a tv shows episodes follower.
The technologies are: react, redux and firebase.

You can find an instance here to play with: [react-redux-codelab (hosted by Firebase)](https://react-redux-codelab.firebaseapp.com/)

![Imgur](http://i.imgur.com/FsJFZZl.png)

![Imgur](http://i.imgur.com/TCty3IV.png)


## Slides
1. Tools and libs: [Google doc -fr-](https://docs.google.com/presentation/d/1NlW5g9BY4QHIgyGbQqZxWtR3KugYmyUvSUAsHezmCo0/edit?usp=sharing)
2. Conventions: [Google doc -fr-](TODO)
3. Steps: [Goole doc -fr-](TODO)

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
  * CSS: Sass & css-modules
    * Scoping our CSS
    * Sass instead of pure CSS
    * And auto-prefixer demonstration
  * reselect
    * Optimize our container (react-redux)
  * normalizr
    * Normalize the TVMaze API for simplier reuse
  * TODO: firebase
  * TODO: circleCI
  * TODO: mocha-sinon-chai

## Get tools
You should install these tools to your browser, these are must-haves:
  * [google-chrome](https://www.google.fr/chrome/browser/desktop/)
  * [redux-devtools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd)
  * [react-devtools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)

To get the others tools and dependencies, you could choose between:
  * [Install everything locally](./TOOLS-LOCAL.md)
  * [Use docker](./TOOLS-DOCKER.md)
