import Employee from '../models/Employee';
import { format } from 'date-fns';

class EmployeeController {
    async delete(req, res) {
        const { id } = req.params;

        const employee = await Employee.findOne({
            where: {
                id,
            },
        });

        if (!employee) {
            return res.status(400).json({
                error: 'User not found.',
            });
        }

        await employee.destroy();

        return res.json({ message: 'Success' });
    }

    async update(req, res) {
        const { name, last_name } = req.body;

        const employee = await Employee.findOne({
            where: {
                name,
                last_name,
            },
        });

        if (!employee) {
            return res.status(400).json({
                error: 'User not found.',
            });
        }

        const {
            position,
            date_birth,
            salary,
            description,
        } = await employee.update(req.body);

        return res.json({
            name,
            last_name,
            position,
            date_birth,
            salary,
            description,
        });
    }

    async index(req, res) {
        const employees = await Employee.findAll({});

        if (!employees) {
            return res.status(401).json({
                error: 'Employees not found',
            });
        }

        const newEmployees = employees.map((employee) => ({
            ...employee.dataValues,
            full_name: `${employee.dataValues.name} ${employee.dataValues.last_name}`,
            date_birth: format(employee.date_birth, 'dd/MM/yyyy'),
        }));

        return res.json(newEmployees);
    }

    async store(req, res) {
        const { name, last_name } = req.body;

        const employee = await Employee.findOne({
            where: {
                name,
                last_name,
            },
        });

        if (employee) {
            return res.status(400).json({
                error: 'User already exists.',
            });
        }

        const {
            position,
            date_birth,
            salary,
            description,
        } = await Employee.create(req.body);

        return res.json({
            name,
            last_name,
            position,
            date_birth,
            salary,
            description,
        });
    }
}

export default new EmployeeController();
