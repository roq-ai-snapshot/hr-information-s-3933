import * as yup from 'yup';

export const vacationValidationSchema = yup.object().shape({
  start_date: yup.date().nullable(),
  end_date: yup.date().nullable(),
  status: yup.string().nullable(),
  type: yup.string().nullable(),
  days_taken: yup.number().integer().nullable(),
  employee_id: yup.string().nullable().required(),
});
