import styled from "styled-components";

export const Header = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px 0;
    background-color: #1b145c;
`;

export const Form = styled.form`
    display: flex;
    align-items: center;
    width: 700px;
`;

export const BtnSearch = styled.button`
    width: 40px;
    height: 40px;
    border: none;
    cursor: pointer;
    margin-right: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #8a8a8a;
`;

export const InputSearch = styled.input`
    height: 40px;
    width: 100%;
    /* border: none; */
    outline: 0 !important;
    padding: 0 15px;
`;