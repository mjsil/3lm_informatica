import React, { useEffect, useMemo, useState } from 'react';
import { useParams, useLocation, useHistory } from 'react-router-dom';
import queryString from 'query-string';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers';
import * as yup from 'yup';

import api from '../../services/api';

import Container from '../../components/Container';
import Header from '../../components/Header';
import Info from '../../components/Info';

import { FullContent, FormContent, TextArea, Submit } from './styles';

const schema = yup.object().shape({
    name: yup.string().required('Esse campo é obrigatório'),
    last_name: yup.string().required('Esse campo é obrigatório'),
    position: yup.string().required('Esse campo é obrigatório'),
    date_birth: yup.string().required('Esse campo é obrigatório'),
    salary: yup.string().required('Esse campo é obrigatório'),
    description: yup.string(),
});

const useRouter = () => {
    const params = useParams();
    const location = useLocation();

    return useMemo(() => {
        return {
            query: {
                ...queryString.parse(location.search),
                ...params,
            },
            location,
        };
    }, [params, location]);
};

const Content = () => {
    const history = useHistory();
    const router = useRouter();
    const { register, handleSubmit, errors } = useForm({
        resolver: yupResolver(schema),
        defaultValues: router.location.state.employee,
    });

    const onSubmit = async (data) => {
        try {
            if (!router.location.state.employee.name) {
                await api.post('/create', {
                    ...data,
                });

                alert(`${data.name} ${data.last_name} salvo(a) com sucesso!`);
            } else {
                await api.put('/update', {
                    ...data,
                });

                alert(`${data.name} ${data.last_name} atualizado com sucesso!`);
            }

            history.push('/');
        } catch (err) {
            alert(
                `Não foi possível salvar o(a):  ${data.name} ${data.last_name}!`
            );
        }
    };

    return (
        <>
            <Header title={'Cadastrar Funcionário'} />
            <Info way={'cadastrar funcionário'} />

            <FullContent>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <FormContent>
                        <div>
                            <p>Nome</p>
                            <input
                                type="text"
                                name="name"
                                ref={register}
                                placeholder="Daiane"
                            />
                            <span>{errors.name?.message}</span>
                        </div>

                        <div>
                            <p>Sobrenome</p>
                            <input
                                type="text"
                                name="last_name"
                                ref={register}
                                placeholder="M P Silva"
                            />
                            <span>{errors.lastName?.message}</span>
                        </div>

                        <div>
                            <p>Cargo</p>
                            <input
                                type="text"
                                name="position"
                                ref={register}
                                placeholder="Professora de português"
                            />
                            <span>{errors.position?.message}</span>
                        </div>

                        <div>
                            <p>Nascimento</p>
                            <input
                                type="date"
                                name="date_birth"
                                ref={register}
                            />
                            <span>{errors.dateBirth?.message}</span>
                        </div>

                        <div>
                            <p>Salário</p>
                            <input
                                type="number"
                                name="salary"
                                ref={register}
                                placeholder="R$5.000,00"
                            />
                            <span>{errors.salary?.message}</span>
                        </div>
                    </FormContent>

                    <TextArea>
                        <p>Descrição</p>
                        <textarea
                            rows="4"
                            // cols="50"
                            type="text"
                            name="description"
                            ref={register}
                            placeholder="Quais serão as funções exercidas pelo funcionário?"
                        />
                    </TextArea>

                    <Submit>Cadastrar</Submit>
                </form>
            </FullContent>
        </>
    );
};

const Register = () => {
    return <Container content={<Content />} />;
};

export default Register;
