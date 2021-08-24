# MERN Test

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts Frontend

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

## Available Scripts Backend

In the project directory, you can run:

### `npm run dev`

Runs the app in the development mode.\
Open [http://localhost:4000](http://localhost:4000) to access APIs.

### `npm start`

Runs the app in the production mode.\

## Available APIs
<b>Base URL: `http://localhost:4000/api/`</b>

### Authentication

<ul> 
<li>Login 

url: `/auth/login` \
Method: <b>POST</b> \
Body: <b>{ email: '', password: '' }</b>
</li>
<li>

<u> Register </u> \
url: `/auth/register` \
Method: <b>POST</b> \
Body: <b>{ name: '', email: '', password: '' }</b>
</li>

<li>

<u> Logout </u> \
url: `/auth/logout` \
Method: <b>DELTE</b> \
Authorization: <b>Bearer Token</b>\
Body: <b>{ name: '', email: '', password: '' }</b>
</li>
</ul> 

### User

<ul>
<li>

<u> Get user details with activity log </u> \
url: `/user` \
Method: <b>GET</b> \
Authorization: <b>Bearer Token</b>
</li>
</ul>

## Packages used
<ul>
<li>express</li>
<li>mongoose</li>
<li>jsonwebtoken</li>
<li>bcryptjs</li>
<li>moment</li>
<li>react</li>
<li>redux</li>
<li>react-redux</li>
<li>redux-saga</li>
<li>formik</li>
<li>@reduxjs/toolkit</li>
<li>axios</li>
</ul>