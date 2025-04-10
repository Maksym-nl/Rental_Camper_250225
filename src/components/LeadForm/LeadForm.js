import React, { useState } from 'react';
import { Formik } from 'formik';
import BasicDatePicker from '../DataPicer/DataPicer';
import {
  FormWrapper,
  FormStyled,
  Title,
  Text,
  Input,
  TextArea,
  Button,
  SuccessMessage,
} from './LeadForm.styled';

const initialValue = {
  name: '',
  email: '',
  bookingData: null,
  comment: '',
};

export const LeadForm = () => {
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    resetForm();
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
    }, 3000);
  };

  return (
    <FormWrapper>
      <Title>Book your campervan now</Title>
      <Text>Stay connected! We are always ready to help you.</Text>
      {showSuccess && (
        <SuccessMessage>
          Форма успешно отправлена! Спасибо за ваш запрос.
        </SuccessMessage>
      )}
      <Formik initialValues={initialValue} onSubmit={handleSubmit}>
        {({ setFieldValue, values }) => (
          <FormStyled autoComplete="off">
            <label htmlFor="name">
              <Input type="text" name="name" placeholder="Name *" />
            </label>
            <label htmlFor="email">
              <Input type="text" name="email" placeholder="Email *" />
            </label>
            <label htmlFor="bookingData">
              <BasicDatePicker
                value={values.bookingData}
                onChange={newValue => setFieldValue('bookingData', newValue)}
              />
            </label>
            <label htmlFor="comment">
              <TextArea as="textarea" name="comment" placeholder="Comment *" />
            </label>
            <Button type="submit">Send</Button>
          </FormStyled>
        )}
      </Formik>
    </FormWrapper>
  );
};
