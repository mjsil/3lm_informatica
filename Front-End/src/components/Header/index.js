import React from 'react';

import { Container } from './styles';

const Header = ({ title }) => {
    return (
        <Container>
            <p>{title}</p>
        </Container>
    );
};

export default Header;
