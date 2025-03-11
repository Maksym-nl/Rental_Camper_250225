import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCamperById } from 'api/api';
export default function Reviews() {
  const [reviews, setReviews] = useState([]);
  const params = useParams();
  useEffect(() => {
    async function getReviews() {
      try {
        const responce = await fetchCamperById(params.id);
        setReviews(responce.reviews);
      } catch (error) {}
    }
    getReviews();
  }, [params.id]);
  return (
    <div>
      <ul>
        {reviews.map(review => {
          return (
            <li key={review.id}>
              <p>{review.reviewer_name}</p>
              <p>{review.reviewer_rating}</p>
              <p>{review.comment}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
