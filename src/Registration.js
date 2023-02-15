import Footer from './Footer';
import Header from './Header';
import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const FormFeedback = () => {
    const [check, setCheck] = useState(1);
  const formik = useFormik({
    initialValues: {
      "signEmail": '',
      "signPassword": '',
      "regName": '',
      "regEmail": '',
      "regPhone": '',
      "regPassword": '',
      "regConfirmPassword": '',
    },
    validationSchema: Yup.object({
        signPassword: Yup.string()
          .required('Пароль должен быть заполнен.') 
          .min(8, 'Пороль короткий - должен быть минимум 8 символов.')
          .matches(/[a-zA-Z]/, 'Пароль может содержать только латинские буквы.'),
        signEmail: Yup.string()
            .email('Введите правильный адрес почты')
            .required('Не заполнено поле email')
            .matches(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/, 'Введите правильный адрес почты'),
        regPassword: Yup.string()
          .required('Пароль должен быть заполнен.') 
          .min(8, 'Пороль короткий - должен быть минимум 8 символов.')
          .matches(/[a-zA-Z]/, 'Пароль может содержать только латинские буквы.'),
        regConfirmPassword: Yup.string()
          .required('Пароль должен быть заполнен.') 
          .min(8, 'Пороль короткий - должен быть минимум 8 символов.')
          .matches(/[a-zA-Z]/, 'Пароль может содержать только латинские буквы.')
          .oneOf([Yup.ref('regPassword'), null], 'Пароли не совпадают'),
        regName: Yup.string()
            .max(15, 'Ввод до 15 символов')
            .required('Не заполнено поле имени'),
        regEmail: Yup.string()
            .email('Введите правильный адрес почты')
            .required('Не заполнено поле email')
            .matches(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/, 'Введите правильный адрес почты'),
        regPhone: Yup.string()
            .required('Введите телефон')
            .matches(/^\s*\+?375((33\d{7})|(29\d{7})|(44\d{7}|)|(25\d{7}))\s*$/, 'Введите телефон в формате +375*******')
    }),
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <>
        <Header/>
        <form className='formRegistation' onSubmit={formik.handleSubmit}>
        <div className='sign-reg'>
            <span className={check == 1 ? 'active' : null} onClick={() => setCheck(1)}>Авторизация</span>
            <span className={check == 0 ? 'active' : null} onClick={() => setCheck(0)}>Регистрация</span>
        </div>
        {check ? 
            <div className='sign'>
                <p>Email</p>
                {formik.touched.signEmail && formik.errors.signEmail ? <div className='err_mes'>{formik.errors.signEmail}</div> : null}
                <input id="signEmail" type="email" {...formik.getFieldProps('signEmail')} />
                <p>Пароль</p>
                {formik.touched.signPassword && formik.errors.signPassword ? <div className='err_mes'>{formik.errors.signPassword}</div> : null}
                <input id="signPassword" type="password" {...formik.getFieldProps('signPassword')} />
                <button type="submit">Авторизация</button>
                <hr/>
                <span>Забыли пароль?</span>
            </div>
        : 
        <div className='reg'>
            <p>Имя</p>
            {formik.touched.regName && formik.errors.regName ? <div className='err_mes'>{formik.errors.regName}</div> : null}
            <input  id="regName" type="text" {...formik.getFieldProps('regName')} />
            <p>Email</p>
            {formik.touched.regEmail && formik.errors.regEmail ? <div className='err_mes'>{formik.errors.regEmail}</div> : null}
            <input  id="regEmail" type="email" {...formik.getFieldProps('regEmail')} />
            <p>Номер телефона</p>
            {formik.touched.regPhone && formik.errors.regPhone ? <div className='err_mes'>{formik.errors.regPhone}</div> : null}
            <input  id="regPhone" type="tel" {...formik.getFieldProps('regPhone')} />
            <p>Пароль</p>
            {formik.touched.regPassword && formik.errors.regPassword ? <div className='err_mes'>{formik.errors.regPassword}</div> : null}
            <input id="regPassword" type="password" {...formik.getFieldProps('regPassword')} />
            <p>Подтвердите пароль</p>
            {formik.touched.regConfirmPassword && formik.errors.regConfirmPassword ? <div className='err_mes'>{formik.errors.regConfirmPassword}</div> : null}
            <input  id="regConfirmPassword" type="password" {...formik.getFieldProps('regConfirmPassword')} />
            <button type="submit">Регистрация</button>
        </div>
        }
        
        
        
        
        {formik.touched.discription && formik.errors.discription || formik.touched.email && formik.errors.email || formik.touched.lastName && formik.errors.lastName || formik.touched.firstName && formik.errors.firstName? (
            <>
            <div className='err_mes'>{formik.errors.firstName}</div>
            <div className='err_mes'>{formik.errors.discription}</div>
            <div className='err_mes'>{formik.errors.lastName}</div>
            <div className='err_mes'>{formik.errors.email}</div>
            {/* <div className='err_mes'>{formik.errors.sign-email}</div> */}
            </>
            
        ) : null}
        
        
        
        </form>
        <Footer/>
    </>
  );
};

export default FormFeedback;