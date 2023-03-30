import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  min-height: 64px;

  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;

  background-color: #3f51b5;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const Input = styled.input`
  width: 300px;
  padding: 10px;

  border: none;
  border-radius: 5px;
  outline: none;

  background-color: #f2f2f2;
  color: #333;

  font-size: 16px;
  cursor: pointer;
`;

export const BtnSearch = styled.button`
  padding: 10px;

  background-color: #f2f2f2;
  color: #333;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);

  border: none;
  border-radius: 5px;

  font-size: 16px;
  font-weight: 600;

  cursor: pointer;

  &:active {
    transform: translateY(1px);
    transition: transform 500ms linear;
  }
`;
