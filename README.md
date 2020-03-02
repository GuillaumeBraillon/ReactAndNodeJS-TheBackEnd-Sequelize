# ReactAndNodeJS-TheBackEnd

Web application that displays a list of users stored in a MySQL database.
The frontend is in react the code is available here: https://github.com/Blusy38/ReactAndNodeJS-TheFrontEnd
The backend is in node.JS and uses Express.
CRUD functions are available.

## Getting Started
* [Nodejs](https://nodejs.org/en/) - Nodejs is necessary

The database exemple : ReactAndNodeJS-TheDB.sql

```
id | firstName | lastName | email | phoneNumber | weekAvailable |
```

### Installing

Clone the repository ReactAndNodeJS-TheBackEnd
Open a command prompt.
Go to the folder by typing
```
cd [Folder path]
```
Install express using the following command:
```
npm install express
```
Install dependencies:
```
npm install
```
Edit the lib \ db.js file with your information:
```
  host: 'localhost',
  user: '[Your user]',
  password: '[Your Password]',
  database: '[Your database]',
  port: [Your MySql port]
```
Launch the application by typing:
```
npm start
```
To see the database :
```
 http://localhost:3000/users
```
## Authors

* **Guillaume Braillon**

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details