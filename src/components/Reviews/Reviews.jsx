import { LeadForm } from 'components/LeadForm/LeadForm';
import HalfRating from 'components/StarsReting/HalfRating';
import LetterAvatars from 'components/Avatar/Avatar';
const Reviews = () => {
  return (
    <div>
      <LetterAvatars />
      <HalfRating />

      <LeadForm />
    </div>
  );
};
export default Reviews;
