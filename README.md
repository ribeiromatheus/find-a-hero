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

## About Web app
### Register
This is the Register page; fill in the fields to get your ID.

![image](https://user-images.githubusercontent.com/41703972/78921987-28ee8b80-7a6c-11ea-8a67-f993f35da5c6.png)

### Logon
This is the Logon page; enter your ID to get full access to the application.

![image](https://user-images.githubusercontent.com/41703972/78825135-d357a780-79b5-11ea-8ee3-db2be113e281.png)

### Incident Registration
This is the Incident Registration page; fill in the fields to register a new incident.

![image](https://user-images.githubusercontent.com/41703972/78825304-1e71ba80-79b6-11ea-9f98-d6c027773db0.png)

### Profile
This is the Profile page; here is where you can check incidents out.

![image](https://user-images.githubusercontent.com/41703972/78825246-026e1900-79b6-11ea-9986-a8a1c065a596.png)

## About Mobile app
### Incidents
This is the Incidents page; here is where you can check incidents out.

![incidents](https://user-images.githubusercontent.com/41703972/78922751-70294c00-7a6d-11ea-9930-e56ad27fa429.jpg)

### Detail
This is the Detail page; here you can check details out about an incident. And if you are interested in it you can send a whatsapp message or email to help the NGO.

![detail](https://user-images.githubusercontent.com/41703972/78922754-715a7900-7a6d-11ea-91d7-4895e3b4be10.jpg)

## Useful libs / modules
### Backend
- [express](https://github.com/expressjs/express) - for server creation.
- [Knex.js](https://github.com/knex/knex) - SQL query builder for Javascript.
- [cors](https://github.com/expressjs/cors) - to allow the API to be accessible to the web application.

### Web
- [axios](https://github.com/axios/axios) - make HTTP requests to nodejs API.
- [react-router-dom](https://github.com/ReactTraining/react-router/tree/master/packages/react-router-dom) - create routes and handle it.
- [react-icons](https://github.com/react-icons/react-icons) - to add icons.

### Mobile
- [@react-navigation](https://reactnavigation.org/docs/getting-started) - create routes and handle it.
- [@react-navigation/stack](https://reactnavigation.org/docs/hello-react-navigation) - a way for the app to transition between screens.
- [axios](https://github.com/axios/axios) - make HTTP requests to nodejs API.
- [expo-mail-composer](https://docs.expo.io/versions/latest/sdk/mail-composer/) - allows us to compose and send email quickly and easily using the OS UI.
- [expo-constants](https://docs.expo.io/versions/latest/sdk/constants/) - provides system information that remains constant throughout the lifetime of your app's install.
- [intl](https://github.com/andyearnshaw/Intl.js#readme) - provides currency formatting.
- @expo/vector-icons (installed by default) - to add icons.

## Get started
1. At first, clone the repo by running `git clone https://github.com/ribeiromatheus/find-a-hero.git` or `hub clone ribeiromatheus/find-a-hero` - if you have **hub** installed on your machine - on your favorite terminal.
2. After cloning run `yarn` or `npm install` on **backend**, **web** and **mobile** folder.
3. Next, go to **mobile** folder and create a folder in the **src** directory named **credentials**, then create a **json** file named **baseUrl** so you can add your ip address followed by server port or your server url. 
```json
{
    "ip": "http://<ip goes here>:<port goes here>"
}
```

## License
This project is under the MIT license. See the [LICENSE](https://github.com/ribeiromatheus/be-the-hero/blob/master/LICENSE) file for more details.