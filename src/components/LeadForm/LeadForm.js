import React from 'react';
import { Formik } from 'formik';
import {
  FormWrapper,
  FormStyled,
  Title,
  Text,
  Input,
  TextArea,
  Button,
} from './LeadForm.styled';
const initialValue = {
  name: '',
  email: '',
  bookingDay: '',
  comment: '',
};
export const LeadForm = () => {
  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    // console.log(actions);
    resetForm();
  };
  return (
    <FormWrapper>
      <Title>Book your campervan now</Title>
      <Text>Stay connected! We are always ready to help you.</Text>
      <Formik initialValues={initialValue} onSubmit={handleSubmit}>
        <FormStyled autoComplete="off">
          <label htmlFor="name">
            <Input type="text" name="name" placeholder="Name *" />
          </label>
          <label htmlFor="email">
            <Input type="text" name="email" placeholder="Email *" />
          </label>
          <label htmlFor="bookingData">
            <Input
              type="text"
              name="bookingData"
              placeholder="Booking data *"
            />
          </label>
          <label htmlFor="comment">
            <TextArea as="textarea" name="comment" placeholder="Comment *" />
          </label>
          <Button type="submit">Send</Button>
        </FormStyled>
      </Formik>
    </FormWrapper>
  );
};
