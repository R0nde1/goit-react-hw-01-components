import styled, { css } from "styled-components";

const commonCSSLabelAndPercetage = css`
    font-weight: 500;
    color: var(--clr-light);
`;

export const StatisticList = styled.ul`
    display: flex;
    align-items: center;
`;
export const ListItem = styled.li`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    padding: ${({ theme }) => theme.spacing(4)};
    background-color: ${({ bg }) => bg || 'var(--clr-light)'};
    &:first-child {
        border-bottom-left-radius: 5px;
    }
    &:last-child {
        border-bottom-right-radius: 5px;
    }
`;
export const StatLabel = styled.span`
    ${commonCSSLabelAndPercetage}
    margin-bottom: ${({ theme }) => theme.spacing(2)};
`;
export const StatPercantage = styled.span`
    ${commonCSSLabelAndPercetage}
    font-size: 28px;
`;
export const Section = styled.section`
    width: 100%;
    padding: ${({ theme }) => theme.spacing(10, 0, 0, 0)};
    text-align: center;
    background-color: var(--clr-light);
`;
export const SectionHeading = styled.h2`
    margin-bottom: ${({ theme }) => theme.spacing(10)};
    color: var(--clr-font-secondary);
    text-transform: uppercase;
`