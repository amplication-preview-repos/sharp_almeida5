import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ExcelTableModuleBase } from "./base/excelTable.module.base";
import { ExcelTableService } from "./excelTable.service";
import { ExcelTableController } from "./excelTable.controller";
import { ExcelTableResolver } from "./excelTable.resolver";

@Module({
  imports: [ExcelTableModuleBase, forwardRef(() => AuthModule)],
  controllers: [ExcelTableController],
  providers: [ExcelTableService, ExcelTableResolver],
  exports: [ExcelTableService],
})
export class ExcelTableModule {}
