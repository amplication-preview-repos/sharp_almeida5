import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ExcelTableServiceBase } from "./base/excelTable.service.base";

@Injectable()
export class ExcelTableService extends ExcelTableServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
