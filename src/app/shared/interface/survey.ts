import { Condition } from "./condition";

export interface Survey{
    id: number,
    occupation: string,
    address: string,
    collateral_condition: Condition
}