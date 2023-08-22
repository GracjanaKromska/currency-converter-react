import styled from "styled-components";

export const Fieldset = styled.fieldset`
    border: 1px solid ${({ theme }) => theme.color.laser};
    border-radius: 10px;
    padding: 20px;
    margin: 20px 0;
    background-color: ${({ theme }) => theme.color.whitesmoke};
`;

export const Legend = styled.legend`
    background-color: ${({ theme }) => theme.color.laser};
    color: ${({ theme }) => theme.color.white};
    padding: 10px;
    border-radius: 5px;
    text-align: center;
`;

export const LabelText = styled.span`
    display: inline-block;
    margin-right: 5px;
    max-width: 140px;
    width: 100%;
`;

export const Field = styled.input`
    border: 1px solid ${({ theme }) => theme.color.laser};
    border-radius: 5px;
    padding: 5px;
    max-width: 200px;
    width: 100%;
`;

export const Button = styled.button`
    width: 100%;
    border: none;
    background-color: ${({ theme }) => theme.color.laser};
    color: ${({ theme }) => theme.color.white};
    padding: 10px;
    margin-bottom: 20px;
    border-radius: 5px;
    transition: 0.3s;

    &:hover {
        filter: brightness(110%);
    }

    &:active {
        filter: brightness(120%);
    }
`;

export const Loading = styled.p`
    color: ${({ theme }) => theme.color.black};
`;

export const Failure = styled.p`
    color: ${({ theme }) => theme.color.crimson};
`;