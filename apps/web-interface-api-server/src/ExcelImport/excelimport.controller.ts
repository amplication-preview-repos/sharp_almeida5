import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { ExcelImportService } from "./excelimport.service";
import { ImportExcelDataDto } from "../excelImport/ImportExcelDataDto";

@swagger.ApiTags("excelImports")
@common.Controller("excelImports")
export class ExcelImportController {
  constructor(protected readonly service: ExcelImportService) {}

  @common.Post("/import")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async ImportExcelData(
    @common.Body()
    body: ImportExcelDataDto
  ): Promise<string> {
        return this.service.ImportExcelData(body);
      }
}
