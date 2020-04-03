<div align="center">
    <img src="https://user-images.githubusercontent.com/41703972/78392178-28627a80-75be-11ea-80bd-19b687100809.png">
</div>

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/ribeiromatheus/find-a-hero">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/ribeiromatheus/find-a-hero">
  
  <a href="https://github.com/ribeiromatheus/find-a-hero/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/ribeiromatheus/find-a-hero">
  </a>

  <img alt="Packagist" src="https://img.shields.io/badge/License-MIT-green.svg">
</p>

**Help NGOs (Non-Governmental Organization) you are interested in.**

**Find a hero** is a web app and mobile app that you can register your NGO and receive donations from people.

## Technologies
- Node.js
- ReactJS
- React Native
- [Expo](https://expo.io/learn)

## Requirements
- [Node.js](https://nodejs.org)
- [Expo](https://expo.io/learn)

## Useful libs / modules
### Backend
- [express](https://github.com/expressjs/express)
- [Knex.js](https://github.com/knex/knex)
- [cors](https://github.com/expressjs/cors)
- [socket.io](https://github.com/socketio/socket.io)

### Web
- [axios](https://github.com/axios/axios)
- [react-router-dom](https://github.com/ReactTraining/react-router/tree/master/packages/react-router-dom)
- [react-icons](https://github.com/react-icons/react-icons)

### Mobile
- [@react-navigation](https://reactnavigation.org/docs/getting-started)
- [@react-navigation/stack](https://reactnavigation.org/docs/hello-react-navigation)
- [axios](https://github.com/axios/axios)
- [socket.io-client](https://github.com/socketio/socket.io-client)
- [expo-mail-composer](https://docs.expo.io/versions/latest/sdk/mail-composer/)
- [expo-constants](https://docs.expo.io/versions/latest/sdk/constants/)
- [intl](https://github.com/andyearnshaw/Intl.js#readme)
- @expo/vector-icons (installed by default)

## Get started
1. At first, clone the repo by running `git clone https://github.com/ribeiromatheus/be-the-hero.git` on your favorite terminal.
2. After cloning run `yarn` or `npm install` on **backend**, **web** and **mobile** folder.
3. Next, go to **mobile** folder and create a folder in the **src** directory named **credentials**, then create a **json** file named **baseUrl** so you can add your ip address followed by server port or your server url. 
```json
{
    "ip": "http://<ip goes here>:<port goes here>"
}
```

## License
This project is under the MIT license. See the [LICENSE](https://github.com/ribeiromatheus/be-the-hero/blob/master/LICENSE) file for more details.