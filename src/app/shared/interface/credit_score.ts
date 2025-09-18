import { Status } from "./status";

export interface CreditScore {
    id: number;
    survey_id: number;
    name: string;
    credit_score: number;
    status: Status;
    isStatusChanged: boolean;
}