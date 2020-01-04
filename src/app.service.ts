import { Injectable } from '@nestjs/common';
import * as ogs from 'open-graph-scraper';

@Injectable()
export class AppService {
  async getOGP(url: string): Promise<object> {
    const result = await ogs({ url });
    return result.data;
  }
}
