import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getOGP(@Query('url') url: string): Promise<object> {
    return this.appService.getOGP(url);
  }
}
