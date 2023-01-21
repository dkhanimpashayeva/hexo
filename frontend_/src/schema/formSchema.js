import * as yup from 'yup';

export const formSchema = yup.object().shape({
  name: yup.string().min(3).required(),
  job: yup.string().required(),
  info: yup.string().required().max(14),

  
});