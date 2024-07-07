import { Module } from "@nestjs/common";
import { ExcelImportService } from "./excelimport.service";
import { ExcelImportController } from "./excelimport.controller";
import { ExcelImportResolver } from "./excelimport.resolver";

@Module({
  controllers: [ExcelImportController],
  providers: [ExcelImportService, ExcelImportResolver],
  exports: [ExcelImportService],
})
export class ExcelImportModule {}
