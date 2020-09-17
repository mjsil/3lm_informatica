import styled from 'styled-components';

export const FullContainer = styled.div`
    display: flex;
    flex: 1;
    flex-direction: row;

    @media screen and (max-width: 750px) {
        flex-direction: column;
    }
`;

export const Menu = styled.div`
    width: 18%;
    border-right: 0.1875rem solid #e7e7e7;

    @media screen and (max-width: 750px) {
        width: 100%;
        height: 3.75rem;
    }
`;

export const Content = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;
    background: #eee;
`;
