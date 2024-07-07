/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ExcelTableWhereInput } from "./ExcelTableWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class ExcelTableListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => ExcelTableWhereInput,
  })
  @ValidateNested()
  @Type(() => ExcelTableWhereInput)
  @IsOptional()
  @Field(() => ExcelTableWhereInput, {
    nullable: true,
  })
  every?: ExcelTableWhereInput;

  @ApiProperty({
    required: false,
    type: () => ExcelTableWhereInput,
  })
  @ValidateNested()
  @Type(() => ExcelTableWhereInput)
  @IsOptional()
  @Field(() => ExcelTableWhereInput, {
    nullable: true,
  })
  some?: ExcelTableWhereInput;

  @ApiProperty({
    required: false,
    type: () => ExcelTableWhereInput,
  })
  @ValidateNested()
  @Type(() => ExcelTableWhereInput)
  @IsOptional()
  @Field(() => ExcelTableWhereInput, {
    nullable: true,
  })
  none?: ExcelTableWhereInput;
}
export { ExcelTableListRelationFilter as ExcelTableListRelationFilter };
