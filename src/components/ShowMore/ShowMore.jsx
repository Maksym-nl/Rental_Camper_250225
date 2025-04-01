// import { useNavigate } from 'react-router-dom';
import { ShMoreBtn } from './ShowMoreBtn.styled';
export const ShowMoreBtn = ({ onClick }) => {
  return (
    <ShMoreBtn type="button" onClick={onClick}>
      Show More
    </ShMoreBtn>
  );
};
