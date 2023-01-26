import { Injectable } from '@nestjs/common';
import { uuid } from 'uuidv4';

@Injectable()
export class DbService {
    private WatchLists;
    constructor() {
        // eslint-disable-next-line @typescript-eslint/no-var-requires
        const dbLocal = require('db-local');
        const { Schema } = new dbLocal({ path: './databases' });
        this.WatchLists = Schema('WatchLists', {
            _id: { type: String, required: true },
            name: { type: String, default: 'Customer' },
            tokens: { type: Array, default: [] },
        });
    }

    async find(id: string) {
        const reqWList = this.WatchLists.find({ _id: id });
        return reqWList;
    }

    async findById(id: string) {
        const res = this.WatchLists.find({ _id: id });
        return res;
    }

    async create(name: string, data: Array<string>) {
        const res = this.WatchLists.create({
            _id: uuid(),
            name: name,
            tokens: data,
        }).save();
        return res;
    }

    async updateTokens(id: string, data: Array<string>) {
        const reqWListFound = this.WatchLists.find({ _id: id })[0]
        const updatedTokens = reqWListFound.tokens?.concat(data);
        const res = reqWListFound.update({ tokens: [...new Set(updatedTokens)] }).save();
        return res;
    }

    async deleteTokens(id: string, data: Array<string>) {
        const reqWListFound = this.WatchLists.find({ _id: id })[0]
        const updatedTokens = reqWListFound.tokens?.filter(token => !data.includes(token));
        const res = reqWListFound.update({ tokens: updatedTokens }).save();
        return res;
    }

    async deleteWatchListById(id: string) {
        const res = this.WatchLists.remove({ _id: id });
        return res;
    }
}