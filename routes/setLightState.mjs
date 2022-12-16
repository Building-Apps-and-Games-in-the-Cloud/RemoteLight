import express from 'express';
import { lightControl } from '../remotelight.mjs';

const router = express.Router();

router.get('/:state', (request, response) => {

  let state = request.params.state;

  if (state == "on") {
    lightControl.on();
  }

  if (state == "off") {
    lightControl.off();
  }
  response.redirect('/index.html');
});

export { router as setLightState };
