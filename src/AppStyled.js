import styled from "styled-components";

export const Wrapper = styled.div`
    flex-basis: 500px;
    border: 1px solid ${({ theme }) => theme.color.laser};
    border-radius: 10px;
    background-color: ${({ theme }) => theme.color.whitesmoke};
    padding: 20px;
    margin: 20px 0;
`;