import { Condition } from "./condition";

export interface Survey{
    id: number;
    id_creditur: number;
    val_occupation: boolean;
    val_address: boolean;
    collateral_condition: Condition;
}