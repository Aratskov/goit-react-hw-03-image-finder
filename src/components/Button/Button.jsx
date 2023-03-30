import { BtnContainer, BtnLoad } from './Button.styled';

export const Button = ({ onClick }) => {
  return (
    <BtnContainer>
      <BtnLoad type="button" onClick={onClick}>
        Load More
      </BtnLoad>
    </BtnContainer>
  );
};
