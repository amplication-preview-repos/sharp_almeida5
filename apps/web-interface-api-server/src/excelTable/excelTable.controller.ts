import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ExcelTableService } from "./excelTable.service";
import { ExcelTableControllerBase } from "./base/excelTable.controller.base";

@swagger.ApiTags("excelTables")
@common.Controller("excelTables")
export class ExcelTableController extends ExcelTableControllerBase {
  constructor(
    protected readonly service: ExcelTableService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
