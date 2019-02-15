# Authentication APIs Example

A simple application which exposes API for user (signup, login ,forgetPassword).

### Technology Used
* [Node.js](https://nodejs.org/) - evented I/O for the backend
* [MLab](https://mlab.com/)  - Database-as-a-Service for MongoDB
* [Postman](https://www.getpostman.com/) - Postman Simplifies API Development

### How to run
This application is tested on Node.js v10.x
```sh
$ git clone https://github.com/shubhamnagota/AuthenticationAPIs.git
$ cd AuthenticationAPIs
$ Open config/config.json file and change MONGO_MLAB_URL to your MongoDB URL.
$ npm start
```

### Testing
 - Open the postman and go to the link 'http://localhost:4000', if it says {success:true}
 - Then test the app by following apis:
    - Login : http://localhost:4000/api/login
    - SignUp : http://localhost:4000/api/signup 
    - Forgot Password : http://localhost:4000/api/forgetPassword
    [NOTE: You have to pass email, name and password as json data for APIs]