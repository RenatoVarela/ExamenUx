
# React-Notes
## About this app
This is a simple web app made with react that allows you to store notes. A demo can be found [here](https://react-notes.neocities.org).

## What I've learned
With this project I've learned to
* Use a git in a real project with multiple branches
* Implement animations in React
* Create and deploy a development version of React
* Adding external CSS and JS to React
* Using local storage to persist user notes. This was interesting since my first thought was to call localStorage.setItem() every time I updated the component's state with the useState hook. I soon discovered that useState is async and the local storage was being saved _before_ the state was updated. I fixed this by using the useEffect hook.
