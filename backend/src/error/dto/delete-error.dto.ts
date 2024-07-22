import { IsInt } from "class-validator";
import { PartialType } from "@nestjs/mapped-types";
import { CreateErrorDto } from "./create-error.dto";

export class DeleteErrorDto extends PartialType(CreateErrorDto) {
    @IsInt()
    id:number;
}