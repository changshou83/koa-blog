export interface ResponseConfig<Data = any> {
  status: number;
  msg: string;
  data?: Data;
  reason?: string;
}
