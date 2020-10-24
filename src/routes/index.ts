

import express from 'express';
import pacientesRoutes from './pacientes';

const routes = express.Router();


routes.use('/pacientes',pacientesRoutes);


export default routes;

