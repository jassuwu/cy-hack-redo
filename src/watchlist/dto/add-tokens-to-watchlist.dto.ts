import { ApiProperty } from "@nestjs/swagger";

export class AddTokensToWatchListDto {
    @ApiProperty({
        description: 'Array of tokens of type string to be added to the watchlist',
        example: '["cool-token"]',
    })
    tokensToBeAdded: Array<string>;
}