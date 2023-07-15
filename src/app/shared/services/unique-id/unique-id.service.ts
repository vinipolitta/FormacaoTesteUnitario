import { Injectable } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';


@Injectable()
export class UniqueIdService {
  private numberOfGeneratedIds = 0;


  constructor() { }

  public genereteUniqueIdWithPrefix(prefix: string): string {
    if (!prefix) {
      throw new Error('Prefix can not be empty');
    }

    const uniqueId = this.genereteUniqueId();
    this.numberOfGeneratedIds++;

    return `${prefix}-${uniqueId}`;
  }

  private genereteUniqueId(): string {
    return uuidv4();
  }

  public getNumberGeneratedUniqueIds(): number {
    return this.numberOfGeneratedIds;
  }
}
