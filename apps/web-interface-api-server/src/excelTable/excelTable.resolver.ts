import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { ExcelTableResolverBase } from "./base/excelTable.resolver.base";
import { ExcelTable } from "./base/ExcelTable";
import { ExcelTableService } from "./excelTable.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => ExcelTable)
export class ExcelTableResolver extends ExcelTableResolverBase {
  constructor(
    protected readonly service: ExcelTableService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
