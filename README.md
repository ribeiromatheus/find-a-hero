# Be the Hero
**Help NGOs (Non-Governmental Organization) you are interested in.**

Be the hero is a web app and mobile app that you can register your NGO and receive donations from people.

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

### Mobile
- [react-navigation](https://github.com/react-navigation/react-navigation)
- [react-navigation-stack](https://github.com/react-navigation/stack)
- [axios](https://github.com/axios/axios)
- [socket.io-client](https://github.com/socketio/socket.io-client)

## Get started
1. At first, clone the repo by running `git clone https://github.com/ribeiromatheus/be-the-hero.git` on your favorite terminal.
2. After cloning run `yarn` or `npm install` on **backend**, **web** and **mobile** folder.
3. Next, go to **mobile** folder and create a folder in the root project directory named **credentials**, then create a **json** file named **baseUrl** so you can add your ip address followed by server port or your server url. 
```json
{
    "ip": "http://<ip goes here>:<port goes here>"
}
```

## License
This project is under the MIT license. See the [LICENSE](https://github.com/ribeiromatheus/be-the-hero/blob/master/LICENSE) file for more details.