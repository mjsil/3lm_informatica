import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

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
                </HeaderList>
                <ContentList open={listing}>
                    <p>clientes</p>
                    <p>fornecedores</p>
                    <p onClick={() => history.push('/')}>funcionários</p>
                </ContentList>
                <hr />
                <HeaderRegister onClick={() => setRegister(!register)}>
                    Cadastros
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
