import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchReviews } from '../../redux/operation';
import { getReviewsState, getReviewsLoading } from '../../redux/selectors';
import { LeadForm } from 'components/LeadForm/LeadForm';
import HalfRating from 'components/StarsReting/HalfRating';
import LetterAvatars from 'components/Avatar/Avatar';
import { Container, ReviewsList } from './Reviews.styled';

const Reviews = () => {
  const { id } = useParams(); // Получаем id из URL
  const dispatch = useDispatch();
  const reviewsData = useSelector(getReviewsState);
  const isLoading = useSelector(getReviewsLoading);

  // Преобразуем reviewsData в массив, если это не массив
  const reviews = Array.isArray(reviewsData) ? reviewsData : [];

  useEffect(() => {
    if (id) {
      dispatch(fetchReviews(id));
    }
  }, [dispatch, id]);

  if (isLoading) {
    return <div>Загрузка отзывов...</div>;
  }

  return (
    <Container>
      <ReviewsList>
        {reviews.length > 0 ? (
          reviews.map(review => (
            <li key={review.id || Math.random()}>
              <LetterAvatars reviewerName={review.reviewer_name} />
              <div>
                <h3>{review.reviewer_name || 'Аноним'}</h3>
                <HalfRating rating={review.rating || 0} />
              </div>
              <p>{review.comment || 'Без комментария'}</p>
            </li>
          ))
        ) : (
          <li>Отзывов пока нет</li>
        )}
      </ReviewsList>

      <LeadForm />
    </Container>
  );
};

export default Reviews;
