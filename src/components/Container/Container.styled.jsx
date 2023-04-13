import styled from 'styled-components';

export const AppContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin: 0 auto;
    padding: ${({ theme }) => theme.spacing(20)};
`;