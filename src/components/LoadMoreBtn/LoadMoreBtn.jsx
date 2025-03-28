import { LdMoreBtn } from './LdMore.styled';

export const LoadMoreBtn = ({ onClick }) => {
  return (
    <LdMoreBtn type="button" onClick={onClick}>
      Load More
    </LdMoreBtn>
  );
};
