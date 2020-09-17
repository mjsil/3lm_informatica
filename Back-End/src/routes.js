import { Router } from 'express';
import EmployeeController from './app/controllers/EmployeeController';

const routes = new Router();

routes.get('/', EmployeeController.index);

routes.delete('/delete/:id', EmployeeController.delete);

routes.put('/update', EmployeeController.update);

routes.post('/create', EmployeeController.store);

export default routes;
