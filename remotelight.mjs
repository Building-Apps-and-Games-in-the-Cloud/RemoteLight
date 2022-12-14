import express from 'express';
import { index } from './routes/index.mjs';
import { LightControl } from './helpers/lightControl.mjs';
import { setLightState } from './routes/setLightState.mjs';

// Create the express application
const app = express();

// Select the middleware to decode incoming posts
app.use(express.urlencoded({ extended: false }));

// Select ejs middleware
app.set('view-engine', 'ejs');

// Connect the route handlers to the routes
app.use('/index.html', index);
app.use('/setLightState', setLightState);

// Create lock control
let lightControl = new LightControl();
lightControl.init();
export { lightControl as lightControl };

const port = process.env.PORT || 8081;

app.listen(port, () => {
    console.log("Server running");
})
