import React from 'react';

import ContentMenu from '../Menu';

import { FullContainer, Menu, Content } from './styles';

const Container = ({ content }) => {
    return (
        <FullContainer>
            <Menu>
                <ContentMenu />
            </Menu>

            <Content>{content}</Content>
        </FullContainer>
    );
};

export default Container;
