import { ApiProperty } from "@nestjs/swagger";

export class DeleteTokensFromWatchListDto {
    @ApiProperty({
        description: 'Array of tokens of type string to be deleted from the watchlist',
        example: '["cool-token"]',
    })
    tokensToBeDeleted: Array<string>;
}