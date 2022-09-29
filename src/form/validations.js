//

import * as yup from "yup";

const validateInput = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(8).required(),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")])
    .required(),
});

export default validateInput;
