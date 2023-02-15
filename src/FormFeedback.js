import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const FormFeedback = () => {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      discription: '',
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('Не заполнено поле имени'),
      lastName: Yup.string()
        .max(20, 'Must be 20 characters or less')
        .required('Не заполнено поле фамилии'),
      email: Yup.string()
      .email('Invalid email address')
      .required('Не заполнено поле email'),
      discription: Yup.string()
      .max(1000, 'Must be 600 characters or less')
      .required('Не заполнено поле сообщения')
    }),
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <form className='formFeedback' onSubmit={formik.handleSubmit}>
      <div className='formFeedback__name'>
        <input placeholder='Ваше имя' id="firstName" type="text" {...formik.getFieldProps('firstName')} />
        <input placeholder='Ваша фамилия' id="lastName" type="text" {...formik.getFieldProps('lastName')} />
      </div>
      <input placeholder='Ваш email' id="email" type="email" {...formik.getFieldProps('email')} />
      <textarea placeholder='Ваше сообщение...' rows='10' cols='50' id="discription" type="text" {...formik.getFieldProps('discription')} />
      {formik.touched.discription && formik.errors.discription || formik.touched.email && formik.errors.email || formik.touched.lastName && formik.errors.lastName || formik.touched.firstName && formik.errors.firstName? (
        <>
          <div className='err_mes'>{formik.errors.firstName}</div>
          <div className='err_mes'>{formik.errors.discription}</div>
          <div className='err_mes'>{formik.errors.lastName}</div>
          <div className='err_mes'>{formik.errors.email}</div>
        </>
        
      ) : null}
      
      <button type="submit">Отправить</button>
    </form>
  );
};

export default FormFeedback;