module.exports = {
  "development": {
    "username": process.env.DB_USERNAME || 'root',
    "password": process.env.DB_PASSWORD || "123",
    "database": "my_blog",
    "host": "127.0.0.1",
    "dialect": "mysql",
    "log": false
  },
  "test": {
    "username": process.env.DB_USERNAME || 'root',
    "password": process.env.DB_PASSWORD || "123",
    "database": "my_blog",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": process.env.DB_USERNAME || 'root',
    "password": process.env.DB_PASSWORD || "123",
    "database": "my_blog",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
