import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import MaterialTable from 'material-table';
import { FaTachometerAlt } from 'react-icons/fa';

import api from '../../services/api';

import Container from '../../components/Container';
import Header from '../../components/Header';
import Info from '../../components/Info';

import { ListAll } from './styles';

const Content = () => {
    const history = useHistory();
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await api.get('/');

                setEmployees(response.data);
            } catch (err) {
                alert('Não consegui pegar os dados do banco :(');
            }
        };

        getData();
    }, []);

    const deleteEmployee = async ({ id, name, last_name }) => {
        try {
            await api.delete(`/delete/${id}`);

            setEmployees(employees.filter((employee) => employee.id !== id));

            alert(`${name} ${last_name} deletado com sucesso!`);
        } catch (err) {
            alert(`Não foi possível deletar o(a):  ${name} ${last_name}!`);
        }
    };

    const editEmployee = (data) => {
        history.push('/employee', {
            employee: data,
        });
    };

    const getColumns = () => {
        return [
            { title: 'Nome', field: 'full_name' },
            { title: 'Cargo', field: 'position' },
            { title: 'Nascimento', field: 'date_birth' },
            { title: 'Salário', field: 'salary' },
        ];
    };

    const getData = () => {
        return employees;
    };

    const actionsData = () => {
        const actions = [
            {
                icon: 'edit',
                tooltip: 'Editar',
                onClick: (event, rowData) => editEmployee(rowData),
            },
            {
                icon: 'delete',
                tooltip: 'Deletar',
                onClick: (event, rowData) => deleteEmployee(rowData),
            },
        ];

        return actions;
    };

    return (
        <>
            <Header title={'Funcionários'} />
            <Info way={'funcionários'} />

            <ListAll>
                <MaterialTable
                    actions={actionsData()}
                    columns={getColumns()}
                    data={getData()}
                    options={{
                        actionsColumnIndex: -1,
                    }}
                    title="Lista de Funcionários"
                />
            </ListAll>
        </>
    );
};

const Dashboard = () => {
    return <Container content={<Content />} />;
};

export default Dashboard;
