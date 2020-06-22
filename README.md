# simple express app

This is a simple app that has a static folder to expose public facing web content and a members api for interogating a list of members currently hardcoded in a file.

This app runs on port 5000 by default. If `PORT` env variable set, that value is chosen.

## Running locally

```sh
npm install
npm run dev
```

http://localhost:5000
http://localhost:5000/api/members