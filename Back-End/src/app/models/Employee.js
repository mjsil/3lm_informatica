import Sequelize, { Model } from 'sequelize';

class Employee extends Model {
    static init(sequelize) {
        super.init(
            {
                name: Sequelize.STRING,
                last_name: Sequelize.STRING,
                position: Sequelize.STRING,
                date_birth: Sequelize.DATE,
                salary: Sequelize.NUMBER,
                description: Sequelize.STRING,
            },
            {
                sequelize,
            }
        );
    }
}

export default Employee;
