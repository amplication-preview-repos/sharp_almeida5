import { Injectable } from "@nestjs/common";
import { ImportExcelDataDto } from "../excelImport/ImportExcelDataDto";

@Injectable()
export class ExcelImportService {
  constructor() {}
  async ImportExcelData(args: ImportExcelDataDto): Promise<string> {
    throw new Error("Not implemented");
  }
}
