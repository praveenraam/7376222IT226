const express = require('express');
const App = express();
const PORT = 3000;

App.get('/', (req, res) => res.send("Hello World!! 7376222IT226 - PraveenRaam C"));
App.get('/praveenraam', (req, res) => res.send("Student Name : PraveenRaam Roll Number : 7376222IT226"));
App.get('/manojkumar', (req, res) => res.send("Student Name : Manojkumar Roll Number : 7376222IT193"));

App.listen(PORT, () => console.log("7376222IT226 App is listening to http://localhost:3000"));