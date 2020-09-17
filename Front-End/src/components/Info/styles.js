import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0.625rem 1.875rem;
    background: #e7e7e7;
    margin: 1.25rem 0;

    p {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-end;
        width: 100%;
        font-size: 1rem;

        svg {
            margin-right: 0.3125rem;
        }

        span {
            margin-left: 0.625rem;
            color: #c0c0c0;

            & + span {
                margin-left: 0.625rem;
                color: #808080;
            }
        }
    }
`;
