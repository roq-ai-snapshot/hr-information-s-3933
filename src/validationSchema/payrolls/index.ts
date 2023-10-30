import * as yup from 'yup';

export const payrollValidationSchema = yup.object().shape({
  salary: yup.number().integer().nullable(),
  bonus: yup.number().integer().nullable(),
  deductions: yup.number().integer().nullable(),
  net_pay: yup.number().integer().nullable(),
  pay_date: yup.date().nullable(),
  employee_id: yup.string().nullable().required(),
});
