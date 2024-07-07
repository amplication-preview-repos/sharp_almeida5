import { InputJsonValue } from "../../types";

export type ExcelTableUpdateInput = {
  tableName?: string | null;
  data?: InputJsonValue;
};
