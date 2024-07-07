import { InputJsonValue } from "../../types";

export type ExcelTableCreateInput = {
  tableName?: string | null;
  data?: InputJsonValue;
};
