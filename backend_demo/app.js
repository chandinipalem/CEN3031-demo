import express from 'express';
import cors from 'cors';
import path from 'path';


const app = express();
const port = 3000;
// After your existing middleware
app.use(express.static('build'));


app.use(cors());

app.use(express.json()); // For parsing application/json

// Express Server acts as a host that waits for requests and sends back responses. 
// catch all GET requests to api/greeting path and respond with the greeting message. 
app.get('/api/greeting', (req, res) => {
  res.json({ message: 'Hello from the server!' });
});

// After all other routes, to handle React Router
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });
  
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

