# auth-server

## Author: Abdulrahman AL-Janabi
## Project: Authentication Server

## Lab 11

### Description of today lab
**Today we create a login system with base-64, bcrypt and authenticate the user.**

### Pull Request
- [PR1](https://github.com/Janabi/auth-server/pull/1)

### Dependencies
- base-64
- bcrypt
- express
- @code-fellows/supergoose
- jest
- jest-cli
- dotenv
- nodemon
- jsonwebtoken

### How to start the server
- node index.js
- nodemon / npx nodemon

### What should I urn on the terminal or postman?
- POST: http://localhost:3000/signup
- POST: http://localhost:3000/signin
- GET: http://localhost:3000/users

### UML
![UML Lab 11](./uml/uml-lab-11.png)


## Lab 12

### Description of today lab
**Today we create a login system with base-64, bcrypt and authenticate the user. Also, we are accessing the user info using the client github account.**

### Pull Request
- [PR2](https://github.com/Janabi/auth-server/pull/2)

### Dependencies
- base-64
- bcrypt
- express
- @code-fellows/supergoose
- jest
- jest-cli
- dotenv
- nodemon
- jsonwebtoken
- superagent

### How to start the server
- node index.js
- nodemon / npx nodemon

### What should I urn on the terminal or postman?
- POST: http://localhost:3000/signup
- POST: http://localhost:3000/signin
- GET: http://localhost:3000/users
- GET: http://localhost:3000/oauth

### UML
![UML Lab 11](./uml/uml-lab-12.png)


## Lab 13

### Description of today lab
**Today we create a login system with base-64, bcrypt and authenticate the user. Also, we are accessing the user info using the client github account. Also, we used the bearer middleware to get the user permission to acces all website routes while the user logged in.**

### Pull Request
- [PR3](https://github.com/Janabi/auth-server/pull/3)
- [PR4 with README file](https://github.com/Janabi/auth-server/pull/4)

### Dependencies
- base-64
- bcrypt
- express
- @code-fellows/supergoose
- jest
- jest-cli
- dotenv
- nodemon
- jsonwebtoken
- superagent

### How to start the server
- node index.js
- nodemon / npx nodemon

### What should I urn on the terminal or postman?
- POST: http://localhost:3000/signup
- POST: http://localhost:3000/signin
- GET: http://localhost:3000/users
- GET: http://localhost:3000/oauth
- GET: http://localhost:3000/secret

### UML
![UML Lab 11](./uml/uml-lab-13.png)


## Lab 14

### Description of today lab
**Today we create a login system with base-64, bcrypt and authenticate the user. Also, we are accessing the user info using the client github account. Also, we used the bearer middleware to get the user permission to acces all website routes while the user logged in. Also, I applied the CRUD methods based on the user's role.**

### Pull Request
- [PR6](https://github.com/Janabi/auth-server/pull/6)

### Deploy
- [Auth Server App](https://auth-servers.herokuapp.com)

### Dependencies
- base-64
- bcrypt
- express
- @code-fellows/supergoose
- jest
- jest-cli
- dotenv
- nodemon
- jsonwebtoken
- superagent

### How to start the server
- node index.js
- nodemon / npx nodemon

### What should I urn on the terminal or postman?
- POST: http://localhost:3000/signup
- POST: http://localhost:3000/signin
- GET: http://localhost:3000/users
- GET: http://localhost:3000/oauth
- GET: http://localhost:3000/secret
- GET: http://localhost:3000/read
- POST: http://localhost:3000/add
- PUT: http://localhost:3000/change
- DELETE: http://localhost:3000/remove

### UML
![UML Lab 11](./uml/uml-lab-14.png)