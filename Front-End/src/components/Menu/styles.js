import styled from 'styled-components';

export const ContainerImg = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 10.625rem;
    width: 100%;
    border-bottom: 0.1875rem solid #e7e7e7;
    margin-bottom: 0.625rem;

    img {
        max-height: 10.625rem;

        @media screen and (max-width: 750px) {
            max-height: 3.75rem;
            margin-top: 1.25rem;
        }
    }
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;

    hr {
        background: #e7e7e7;
        height: 0.1875rem;
        margin: 0.3125rem 0;
        border: 0;
    }

    @media screen and (max-width: 750px) {
        flex-direction: row;
    }
`;

export const HeaderAll = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    font-size: 1rem;
    font-weight: 700;
    margin: 0.625rem 0;
    cursor: pointer;
    padding: 0 1.25rem;
`;

export const ContentAll = styled.div`
    opacity: ${(props) => (props.open ? '1' : '0')};
    max-height: ${(props) => (props.open ? '100%' : '0')};
    overflow: hidden;
    transition: 0.1s;
    padding: 0 1.25rem;

    p {
        cursor: pointer;
        padding: 0.4375rem 0.625rem;
        font-size: 0.875rem;
        font-weight: 400;
        color: #808080;
    }

    @media screen and (max-width: 750px) {
        height: 3.75rem;
        margin-top: 0.3125rem;
        overflow: scroll;
        border: 1px solid #000;

        ::-webkit-scrollbar {
            width: 0px;
        }
    }
`;

export const HeaderList = styled(HeaderAll)``;

export const ContentList = styled(ContentAll)``;

export const HeaderRegister = styled(HeaderAll)``;

export const ContentRegister = styled(ContentAll)``;
