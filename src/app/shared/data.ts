import { Condition } from "./interface/condition";
import { CreditScore } from "./interface/credit_score";
import { Creditur } from "./interface/creditur";
import { Status } from "./interface/status";
import { Survey } from "./interface/survey";

export const dummyCrediturs: Creditur[] = [
  {
    id: 1,
    name: 'Andi Saputra',
    age: 32,
    address: 'Jl. Merdeka No.10, Jakarta Pusat',
    occupation: 'Karyawan Swasta',
    salary: 8500000,
    loan: 15000000,
    collateral: 'Honda Vario 160'
  },
  {
    id: 2,
    name: 'Siti Aminah',
    age: 28,
    address: 'Jl. Gatot Subroto No.25, Bandung',
    occupation: 'Wiraswasta',
    salary: 10000000,
    loan: 20000000,
    collateral: 'Honda Beat Street'
  },
  {
    id: 3,
    name: 'Budi Santoso',
    age: 40,
    address: 'Jl. Sudirman No.88, Surabaya',
    occupation: 'Pegawai Negeri Sipil',
    salary: 12000000,
    loan: 25000000,
    collateral: 'Honda PCX 160'
  },
  {
    id: 4,
    name: 'Dewi Lestari',
    age: 35,
    address: 'Jl. Ahmad Yani No.12, Yogyakarta',
    occupation: 'Guru',
    salary: 9000000,
    loan: 18000000,
    collateral: 'Honda Scoopy'
  },
  {
    id: 5,
    name: 'Rizky Pratama',
    age: 30,
    address: 'Jl. Diponegoro No.7, Medan',
    occupation: 'Desainer Grafis',
    salary: 11000000,
    loan: 22000000,
    collateral: 'Honda Supra X 125'
  }
];

export const dummySurveys: Survey[] = [
  {
    id: 1,
    id_creditur: 1,
    val_occupation: true,
    val_address: true,
    collateral_condition: Condition.GOOD
  },
  {
    id: 2,
    id_creditur: 2,
    val_occupation: false,
    val_address: true,
    collateral_condition: Condition.BAD
  },
  {
    id: 3,
    id_creditur: 3,
    val_occupation: true,
    val_address: false,
    collateral_condition: Condition.GOOD
  },
  {
    id: 4,
    id_creditur: 4,
    val_occupation: false,
    val_address: false,
    collateral_condition: Condition.BAD
  },
  {
    id: 5,
    id_creditur: 5,
    val_occupation: true,
    val_address: true,
    collateral_condition: Condition.GOOD
  }
];


export const dummyCreditScores: CreditScore[] = [
  {
    id: 1,
    name: 'Andi Saputra',
    credit_score: 720,
    status: Status.APPROVED
  },
  {
    id: 2,
    name: 'Siti Aminah',
    credit_score: 650,
    status: Status.PENDING
  },
  {
    id: 3,
    name: 'Budi Santoso',
    credit_score: 580,
    status: Status.REJECTED
  },
  {
    id: 4,
    name: 'Dewi Lestari',
    credit_score: 690,
    status: Status.APPROVED
  },
  {
    id: 5,
    name: 'Rizky Pratama',
    credit_score: 610,
    status: Status.PENDING
  }
];