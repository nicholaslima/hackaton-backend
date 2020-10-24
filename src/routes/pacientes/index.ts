

import express from 'express';

const routes = express.Router();

routes.post('/',(request,response) => {
    return response.json({ 'msg': 'mesg'});
});


export default routes;