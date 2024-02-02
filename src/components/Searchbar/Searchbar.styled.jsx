import styled from 'styled-components';

export const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 0;
  background: linear-gradient(
    61deg,
    rgba(17, 46, 66, 0.9556197478991597) 32%,
    rgba(41, 41, 41, 0.9668242296918768) 68%
  );
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  gap: 10px;
  width: 800px;
  padding: 0 40px;
`;

export const BtnSearch = styled.button`
  /* width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid #8a8a8a;
  background-color: transparent;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: #8a8a8a; */
  width: 40px;
  height: 40px;
  color: #8a8a8a;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

export const InputSearch = styled.input`
  height: 50px;
  width: 100%;
  border: 1px solid #8a8a8a;
  background-color: transparent;
  border-radius: 30px;
  outline: 0 !important;
  padding: 3px 30px 0 30px;
  color: #ffffff;
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 2px;

  &::placeholder {
    color: #8a8a8a;
    font-size: 16px;
    font-weight: 700;
  }
`;
