import { ExcelTableWhereInput } from "./ExcelTableWhereInput";
import { ExcelTableOrderByInput } from "./ExcelTableOrderByInput";

export type ExcelTableFindManyArgs = {
  where?: ExcelTableWhereInput;
  orderBy?: Array<ExcelTableOrderByInput>;
  skip?: number;
  take?: number;
};
