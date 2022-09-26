// Render Prop
import React from "react";
import "./form.css";
import { Formik, Form, Field, ErrorMessage } from "formik";

const BasicForm = () => (
  <div>
    <h1>Sign up Form</h1>
    <Formik
      initialValues={{
        email: "",
        password: "",
        gender: "female",
        hobbies: [],
        country: "",
      }}
      // validate e-mail address
      validate={(values) => {
        const errors = {};
        if (!values.email) {
          errors.email = "Required";
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = "Invalid email address";
        }
        return errors;
      }}
      //onsubmit
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ isSubmitting, handleChange }) => (
        <div className="container">
          <Form>
            <label htmlFor="email">EMAIL: </label>
            <Field type="email" name="email" />
            <ErrorMessage name="email" component="div" />
            <br />
            <br />
            <label htmlFor="password">PASSWORD: </label>
            <Field type="password" name="password" />
            <ErrorMessage name="password" component="div" />
            <br />
            <br />
            <label htmlFor="gender">GENDER: </label>
            <div>
              <Field type="radio" name="gender" value="male" />
              <span>Male</span>

              <Field type="radio" name="gender" value="female" />
              <span>Female</span>
            </div>
            <br />
            <br />
            <label htmlFor="hobbies">HOBBY: </label>
            <div>
              <input
                type="checkbox"
                name="hobbies"
                value="Swimming"
                onChange={handleChange}
              />
              <span>Swimming</span>
              <input
                type="checkbox"
                name="hobbies"
                value="Tennis"
                onChange={handleChange}
              />
              <span>Tennis</span>
              <Field
                type="checkbox"
                name="hobbies"
                value="Football"
                onChange={handleChange}
              />
              <span>Football</span>
            </div>
            <br />
            <br />
            <label htmlFor="country">COUNTRY: </label>

            <select name="country" onChange={handleChange}>
              <option value="Nl">Netherlands</option>
              <option value="Fr">France</option>
              <option value="De">Germany</option>
              <option value="Be">Belgium</option>
              <option value="En">England</option>
            </select>
            <br />
            <br />

            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        </div>
      )}
    </Formik>
  </div>
);

export default BasicForm;
