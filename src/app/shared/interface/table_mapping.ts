import { CreditScore } from "./credit_score";
import { Creditur } from "./creditur";
import { Survey } from "./survey";

export interface TableMapping {
  tableName: string;
  headers?: string[];
  data?: Survey[] | Creditur[] | CreditScore[];
  action?: {
    name: string;
    route: string;
  };
}
