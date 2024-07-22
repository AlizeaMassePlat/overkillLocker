import { PartialType } from "@nestjs/mapped-types";
import { CreateLogDto } from "./create-log.dto";
import { IsInt } from "class-validator";

export class DeleteLog extends PartialType(CreateLogDto) {
    @IsInt()
    id:number;
}