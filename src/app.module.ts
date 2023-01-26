import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DbModule } from './db/db.module';
import { BalanceModule } from './balance/balance.module';
import { ConfigModule } from '@nestjs/config/dist';
import { WatchlistModule } from './watchlist/watchlist.module';

@Module({
  imports: [DbModule, BalanceModule, ConfigModule, WatchlistModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
