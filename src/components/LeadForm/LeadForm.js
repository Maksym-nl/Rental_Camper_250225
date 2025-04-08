import React, { useState } from 'react';
import { Formik } from 'formik';
import {
  FormWrapper,
  FormStyled,
  Title,
  Text,
  Input,
  TextArea,
  Button,
  DatePickerWrapper,
} from './LeadForm.styled';

const initialValue = {
  name: '',
  email: '',
  bookingData: '',
  comment: '',
};

export const LeadForm = () => {
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);

  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    resetForm();
  };

  const handleDateChange = (e, setFieldValue) => {
    const date = e.target.value;
    setFieldValue('bookingData', date);
    setIsDatePickerOpen(false);
  };

  return (
    <FormWrapper>
      <Title>Book your campervan now</Title>
      <Text>Stay connected! We are always ready to help you.</Text>
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
              <DatePickerWrapper>
                <Input
                  type="text"
                  name="bookingData"
                  placeholder="Booking data *"
                  onClick={() => setIsDatePickerOpen(true)}
                  readOnly
                  value={values.bookingData || ''}
                />
                {isDatePickerOpen && (
                  <Input
                    type="date"
                    onChange={e => handleDateChange(e, setFieldValue)}
                    style={{
                      position: 'absolute',
                      top: '100%',
                      left: 0,
                      zIndex: 10,
                    }}
                  />
                )}
              </DatePickerWrapper>
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
