import { useNavigate } from 'react-router-dom';
import { Btn } from './ViewNowBtn.styled';

export const ViewNowBtn = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/campers');
  };
  return (
    <Btn type="button" onClick={handleClick}>
      View Now
    </Btn>
  );
};
