import { Condition } from "./interface/condition";
import { Survey } from "./interface/survey";

const surveyData: Survey[] = [
    {
            id: 1,
            occupation: "Engineer",
            address: "Karapa Sapi",
            collateral_condition: Condition.GOOD
    },
    {
            id: 2,
            occupation: "Teacher",
            address: "Simo",
            collateral_condition: Condition.GOOD
    },
    {
            id: 3,
            occupation: "Doctor",
            address: "Arjuna",
            collateral_condition: Condition.GOOD
    },
    {
            id: 4,
            occupation: "Artist",
            address: "Banyuurip",
            collateral_condition: Condition.GOOD
    },
    {
            id: 5,
            occupation: "Chef",
            address: "Rungkut",
            collateral_condition: Condition.GOOD
    }

]

export default surveyData