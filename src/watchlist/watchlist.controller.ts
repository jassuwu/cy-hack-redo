import { Controller, Get, HttpStatus } from '@nestjs/common';
import { Body, HttpCode, Param, Patch, Post } from '@nestjs/common/decorators';
import { Delete } from '@nestjs/common/decorators/http/request-mapping.decorator';
import { ApiTags } from '@nestjs/swagger/dist';
import { AddTokensToWatchListDto } from './dto/add-tokens-to-watchlist.dto';
import { CreateWatchlistDto } from './dto/create-watchlist.dto';
import { DeleteTokensFromWatchListDto } from './dto/delete-tokens-from-watchlist.dto';
import { WatchlistService } from './watchlist.service';
@ApiTags('watchlist')
@Controller('watchlist')
export class WatchlistController {
    constructor(private watchListService: WatchlistService) { }

    @Get('coins') //2.1

    async getMasterCoinList() {
        return {
            coins: await this.watchListService.getMasterCoinList(),
        }
    }

    @Post() //2.2
    async createNewWatchList(@Body() dto: CreateWatchlistDto) {
        return await this.watchListService.createWatchListFromName(dto);
    }


    @Patch(':id/add') // 2.3
    async addTokensToWatchList(@Param('id') id: string, @Body() dto: AddTokensToWatchListDto) {
        return await this.watchListService.addTokensToWatchList(id, dto);
    }

    @Patch(':id/delete') // 2.4
    async deleteTokensFromWatchList(@Param('id') id: string, @Body() dto: DeleteTokensFromWatchListDto) {
        return await this.watchListService.deleteTokensFromWatchList(id, dto);
    }

    @Get(':id') // 2.5
    async getWatchListById(@Param('id') id: string) {
        return await this.watchListService.getWatchListById(id);
    }

    @HttpCode(HttpStatus.NO_CONTENT)
    @Delete(':id') // 2.6
    async deleteWatchListById(@Param('id') id: string) {
        return await this.watchListService.deleteWatchListById(id);
    }
}
