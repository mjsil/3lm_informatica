import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { FaAngleDown } from 'react-icons/fa';
import { FaAngleUp } from 'react-icons/fa';

import logo from '../../assets/logo.png';

import {
    ContainerImg,
    Content,
    HeaderList,
    ContentList,
    HeaderRegister,
    ContentRegister,
} from './styles';

const Menu = () => {
    const history = useHistory();
    const [listing, setListing] = useState(false);
    const [register, setRegister] = useState(false);

    return (
        <>
            <ContainerImg>
                <img src={logo} alt="" />
            </ContainerImg>
            <Content>
                <HeaderList onClick={() => setListing(!listing)}>
                    Listagens
                    {listing ? <FaAngleUp /> : <FaAngleDown />}
                </HeaderList>
                <ContentList open={listing}>
                    <p>clientes</p>
                    <p>fornecedores</p>
                    <p onClick={() => history.push('/')}>funcionários</p>
                </ContentList>
                <hr />
                <HeaderRegister onClick={() => setRegister(!register)}>
                    Cadastros
                    {register ? <FaAngleUp /> : <FaAngleDown />}
                </HeaderRegister>
                <ContentRegister open={register}>
                    <p>clientes</p>
                    <p>fornecedores</p>
                    <p
                        onClick={() =>
                            history.push('/employee', {
                                employee: {},
                            })
                        }
                    >
                        funcionários
                    </p>
                </ContentRegister>
                <hr />
            </Content>
        </>
    );
};

export default Menu;
