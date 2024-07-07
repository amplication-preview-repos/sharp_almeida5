import * as graphql from "@nestjs/graphql";
import { ImportExcelDataDto } from "../excelImport/ImportExcelDataDto";
import { ExcelImportService } from "./excelimport.service";

export class ExcelImportResolver {
  constructor(protected readonly service: ExcelImportService) {}

  @graphql.Mutation(() => String)
  async ImportExcelData(
    @graphql.Args()
    args: ImportExcelDataDto
  ): Promise<string> {
    return this.service.ImportExcelData(args);
  }
}
