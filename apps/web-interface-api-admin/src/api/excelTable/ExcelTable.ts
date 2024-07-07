import { JsonValue } from "type-fest";

export type ExcelTable = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  tableName: string | null;
  data: JsonValue;
};
