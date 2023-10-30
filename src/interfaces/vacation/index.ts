import { EmployeeInterface } from 'interfaces/employee';
import { GetQueryInterface } from 'interfaces';

export interface VacationInterface {
  id?: string;
  start_date?: any;
  end_date?: any;
  status?: string;
  type?: string;
  days_taken?: number;
  employee_id: string;
  created_at?: any;
  updated_at?: any;

  employee?: EmployeeInterface;
  _count?: {};
}

export interface VacationGetQueryInterface extends GetQueryInterface {
  id?: string;
  status?: string;
  type?: string;
  employee_id?: string;
}
