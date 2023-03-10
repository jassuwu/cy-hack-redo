import { Controller, Get, Param } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { BalanceService } from './balance.service';

@ApiTags('balance')
@Controller('balance')
export class BalanceController {
    constructor(private balanceService: BalanceService) { }

    @ApiOkResponse({
        description: 'The aggregate token balances of an address in the following chains: Ethereum, Fantom, and Polygon returned.'
    })
    @Get(':address') // So this is wrong, they probably expected a POST request with the address in the body of the POST request.
    async getBalnce(@Param('address') address: string) {
        // 1 - ETH, 137 - MATIC TOKEN, 250 - FANTOM
        const res = {
            address: address,
            balances: {
                eth: {},
                polygon: {},
                fantom: {},
            },
            totalBalanceInUSD: 0,
        };

        const eth = await this.balanceService.getBalance(1, "ETH", address);
        const polygon = await this.balanceService.getBalance(137, "MATIC", address);
        const fantom = await this.balanceService.getBalance(250, "FTM", address);
        res.balances.eth = eth;
        res.balances.polygon = polygon;
        res.balances.fantom = fantom;
        res.totalBalanceInUSD = eth.balanceInUSD + polygon.balanceInUSD + fantom.balanceInUSD;
        return res;
    }
}
