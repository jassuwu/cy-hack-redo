import { ApiProperty } from "@nestjs/swagger";
import { MinLength, IsNotEmpty, MaxLength } from "class-validator";

export class CreateWatchlistDto {
    @ApiProperty({
        description: 'Name of the new watchlist to be created. length= 5 to 20.',
        example: 'watchlistname',
    })
    @MinLength(5)
    @MaxLength(20)
    @IsNotEmpty()
    name: string;
}