# mern-bad-bank

Try it out: [https://brent-newmanfullstackbankapp.herokuapp.com/](https://brent-newmanfullstackbankapp.herokuapp.com/)

## About

This is my capstone project for MIT xPro Full Stack Coding Bootcamp. This Full Stack MERN Bank was created in React Redux using Node and Express to interact with a MongoDB Atlas database modeled using Mongoose.

This app has complete CRUD functionality and uses JSON Web Tokens for authentication.

## Skills Used

<ul>
  <li> HTML, CSS, JavaScript
  <li> React, Redux, React Router
  <li> Node, Express, Axios
  <li> MongoDB, Mongoose
  <li> Bootstrap, Toastify, React Icons
  <li> Input validation and error handling.
</ul>

## How To Run

> Account Creation & User Data

Users can log in or create a new account with a unique email from the corresponding page. User data is stored in a MongoDB Atlas database.
User may delete account from the 'User Data' page.

> Account

Users can deposit, withdraw, or view account information from the corresponding pages. Transaction input is validated and user is notified of any errors.
User may delete account from the User Data page. Upon confirmation, user will be redirected to the Home page.

## Future Plans

-   [ ] Add 'forgot password' route
-   [x] Add 'delete user' route
-   [x] Add confirmation to delete user
-   [ ] Add admin functionality

## MIT License

Copyright (c) 2022 Brent Newman

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
