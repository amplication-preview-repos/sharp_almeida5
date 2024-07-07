import { ExcelTable as TExcelTable } from "../api/excelTable/ExcelTable";

export const EXCELTABLE_TITLE_FIELD = "tableName";

export const ExcelTableTitle = (record: TExcelTable): string => {
  return record.tableName?.toString() || String(record.id);
};
