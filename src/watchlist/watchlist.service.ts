import { Injectable } from '@nestjs/common';
import { DbService } from 'src/db/db.service';
import { AddTokensToWatchListDto } from './dto/add-tokens-to-watchlist.dto';
import { CreateWatchlistDto } from './dto/create-watchlist.dto';
import { DeleteTokensFromWatchListDto } from './dto/delete-tokens-from-watchlist.dto';

@Injectable()
export class WatchlistService {
    constructor(private dbService: DbService) { }
    async getMasterCoinList() {
        const res = await fetch(`https://api.coingecko.com/api/v3/coins/list`);
        return res.json();
    }

    async createWatchListFromName(dto: CreateWatchlistDto) {
        const res = await this.dbService.create(dto.name, []);
        return res;
    }

    async addTokensToWatchList(id: string, dto: AddTokensToWatchListDto) {
        return await this.dbService.updateTokens(id, dto.tokensToBeAdded);
    }

    async deleteTokensFromWatchList(id: string, dto: DeleteTokensFromWatchListDto) {
        return await this.dbService.deleteTokens(id, dto.tokensToBeDeleted);
    }

    async getWatchListById(id: string) {
        return await this.dbService.findById(id);
    }

    async deleteWatchListById(id: string) {
        return await this.dbService.deleteWatchListById(id);
    }
}
