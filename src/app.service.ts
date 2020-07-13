import { Injectable } from '@nestjs/common';
import * as ogs from 'open-graph-scraper';

@Injectable()
export class AppService {
  async getOGP(urlBase: string): Promise<object> {
    const url = encodeURI(urlBase);
    const { result } = await ogs({ url });
    return result;
  }
}
