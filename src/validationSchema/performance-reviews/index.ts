import * as yup from 'yup';

export const performanceReviewValidationSchema = yup.object().shape({
  review_date: yup.date().nullable(),
  rating: yup.number().integer().nullable(),
  comments: yup.string().nullable(),
  goals: yup.string().nullable(),
  employee_id: yup.string().nullable().required(),
});
