import React from 'react';
import { FaTachometerAlt } from 'react-icons/fa';

import { Container } from './styles';

const Info = ({ way }) => {
    return (
        <Container>
            <p>
                <FaTachometerAlt />
                inicio <span>{'>'}</span> <span>{way}</span>
            </p>
        </Container>
    );
};

export default Info;
