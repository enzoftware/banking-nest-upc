import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHome(): string {
    return 'UPC Home - TravisCI - Enzo Lizama 2';
  }
}
