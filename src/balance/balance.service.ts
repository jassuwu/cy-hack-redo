import { Injectable } from '@nestjs/common';

@Injectable()
export class BalanceService {
    async getBalance(chainId: number, symbol: string, address: string) {
        const res = await fetch(`https://api.covalenthq.com/v1/${chainId}/address/${address}/balances_v2/?key=ckey_d64baa7fc7db4fc68afbf0f23f8`)
        const theResultJSON = await res.json();
        const neededVal = theResultJSON?.data?.items.filter(item => item.contract_ticker_symbol === symbol)[0];
        return {
            name: neededVal.contract_name,
            symbol: neededVal.contract_ticker_symbol,
            decimals: neededVal.contract_decimals,
            contractAddress: neededVal.contract_address,
            contractDecimals: neededVal.contract_decimals,
            logo: neededVal.logo_url,
            balance: neededVal.balance,
            balanceInUSD: Number(neededVal.balance) * neededVal.quote / neededVal.contract_decimals,
        }
    }

}
