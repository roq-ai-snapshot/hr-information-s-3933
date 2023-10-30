import { PayrollInterface } from 'interfaces/payroll';
import { PerformanceReviewInterface } from 'interfaces/performance-review';
import { VacationInterface } from 'interfaces/vacation';
import { UserInterface } from 'interfaces/user';
import { CompanyInterface } from 'interfaces/company';
import { GetQueryInterface } from 'interfaces';

export interface EmployeeInterface {
  id?: string;
  job_title?: string;
  hire_date?: any;
  salary?: number;
  department?: string;
  status?: string;
  user_id: string;
  company_id: string;
  created_at?: any;
  updated_at?: any;
  payroll?: PayrollInterface[];
  performance_review?: PerformanceReviewInterface[];
  vacation?: VacationInterface[];
  user?: UserInterface;
  company?: CompanyInterface;
  _count?: {
    payroll?: number;
    performance_review?: number;
    vacation?: number;
  };
}

export interface EmployeeGetQueryInterface extends GetQueryInterface {
  id?: string;
  job_title?: string;
  department?: string;
  status?: string;
  user_id?: string;
  company_id?: string;
}
