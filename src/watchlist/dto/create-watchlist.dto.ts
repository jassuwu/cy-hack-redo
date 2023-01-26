import { MinLength, IsNotEmpty, MaxLength } from "class-validator";

export class CreateWatchlistDto {
    @MinLength(5)
    @MaxLength(20)
    @IsNotEmpty()
    name: string;
}