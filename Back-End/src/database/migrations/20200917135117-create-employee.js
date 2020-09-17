module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('employees', {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false,
            },
            name: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            last_name: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            position: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            date_birth: {
                type: Sequelize.DATE,
                allowNull: false,
            },
            salary: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            description: {
                type: Sequelize.STRING,
            },
            created_at: {
                type: Sequelize.DATE,
                allowNull: false,
            },
            updated_at: {
                type: Sequelize.DATE,
                allowNull: false,
            },
        });
    },

    down: (queryInterface) => {
        return queryInterface.dropTable('employees');
    },
};
