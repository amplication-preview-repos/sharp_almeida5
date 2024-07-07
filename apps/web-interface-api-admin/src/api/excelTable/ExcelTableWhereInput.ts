import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";

export type ExcelTableWhereInput = {
  id?: StringFilter;
  tableName?: StringNullableFilter;
  data?: JsonFilter;
};
