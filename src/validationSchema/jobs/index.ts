import * as yup from 'yup';

export const jobValidationSchema = yup.object().shape({
  title: yup.string().required(),
  description: yup.string().required(),
  salary: yup.number().integer(),
  location: yup.string(),
  organization_id: yup.string().nullable(),
});
