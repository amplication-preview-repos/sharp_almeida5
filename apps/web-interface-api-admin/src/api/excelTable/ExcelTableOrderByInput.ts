import { SortOrder } from "../../util/SortOrder";

export type ExcelTableOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  tableName?: SortOrder;
  data?: SortOrder;
};
