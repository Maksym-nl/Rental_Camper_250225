import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchReviews } from '../../redux/operation';
import { getReviewsState, getReviewsLoading } from '../../redux/selectors';
import { LeadForm } from 'components/LeadForm/LeadForm';
import HalfRating from 'components/StarsReting/HalfRating';
import LetterAvatars from 'components/Avatar/Avatar';
import {
  Container,
  ReviewsList,
  ReviewItem,
  ReviewName,
  ReviewNameContainer,
  ReviewComment,
} from './Reviews.styled';
import { Loader } from 'components/Loader/Loader';

const Reviews = () => {
  const { id } = useParams();
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
    return <Loader />;
  }

  return (
    <Container>
      <ReviewsList>
        {reviews.length > 0 ? (
          reviews.map(review => (
            <ReviewItem key={review.id}>
              <LetterAvatars reviewerName={review.reviewer_name} />
              <ReviewNameContainer>
                <ReviewName>{review.reviewer_name || 'Аноним'}</ReviewName>
                <HalfRating rating={review.reviewer_rating || 0} />
              </ReviewNameContainer>
              <div>
                <ReviewComment>
                  {review.comment || 'Без комментария'}
                </ReviewComment>
              </div>
            </ReviewItem>
          ))
        ) : (
          <ReviewComment>Отзывов пока нет</ReviewComment>
        )}
      </ReviewsList>

      <LeadForm />
    </Container>
  );
};

export default Reviews;
