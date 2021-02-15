import { Inject, Injectable } from '@angular/core';

@Injectable()
export class ConstantsService {
  public city: any[] = ['London', 'Wales', 'York'];
  getCity(): any[] {
    return this.city;
  }
}
