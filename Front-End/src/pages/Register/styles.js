import styled from 'styled-components';

export const FullContent = styled.div`
    background: #fff;
    padding: 1.25rem;

    form {
        display: flex;
        flex-direction: column;
        width: 100%;

        p {
            font-size: 0.75rem;
            margin-bottom: 0.125rem;
        }
    }
`;

export const FormContent = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1.25rem;

    input {
        display: block;
        width: 100%;
        padding: 0.3125rem 0.625rem;
        margin-bottom: 0.125rem;
    }

    span {
        font-size: 0.75rem;
        color: #f56954;
    }
`;

export const TextArea = styled.div`
    margin-top: 1.25rem;

    textarea {
        padding: 0.3125rem 0.625rem;
        width: 100%;
    }
`;

export const Submit = styled.button.attrs(() => ({
    type: 'submit',
}))`
    margin-top: 1.25rem;
    padding: 0.5rem;
    width: 9.375rem;
    background: #00a65a;
    color: #fff;
    font-size: 0.875rem;
`;
