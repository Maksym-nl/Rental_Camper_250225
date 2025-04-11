import { ShMoreBtn } from './ShowMoreBtn.styled';

export const ShowMoreBtn = ({ onClick }) => {
  return (
    <ShMoreBtn type="button" onClick={onClick}>
      Show More
    </ShMoreBtn>
  );
};
