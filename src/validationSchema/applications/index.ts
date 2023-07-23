import * as yup from 'yup';

export const applicationValidationSchema = yup.object().shape({
  resume: yup.string(),
  contact_information: yup.string(),
  job_id: yup.string().nullable(),
  user_id: yup.string().nullable(),
});
