export interface TableMapping {
  tableName: string;
  headers?: string[];
  data?: any[];
  action?: {
    name: string;
    route: string;
  };
}
