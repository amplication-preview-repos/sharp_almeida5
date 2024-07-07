import { ArgsType, Field } from "@nestjs/graphql";
import { GraphQLJSON } from "graphql-type-json";
import { InputJsonValue } from "../types";

@ArgsType()
class ImportExcelDataDto {
    @Field(() => GraphQLJSON)
    data!: InputJsonValue;
}

export { ImportExcelDataDto as ImportExcelDataDto };