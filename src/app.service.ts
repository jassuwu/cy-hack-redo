import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello() {
    return {
      error: false,
      message: `This is a redo of the cy-hack. Check out the docs at /docs`,
    };
  }
}
