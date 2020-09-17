import React from 'react';

import { Container } from './styles';

const Info = ({ way }) => {
    return (
        <Container>
            <p>100 funcionarios</p>
            <p>
                inicio <span>{'>'}</span> <span>{way}</span>
            </p>
        </Container>
    );
};

export default Info;
