import { Injectable } from '@angular/core';

@Injectable()
export class SettingsService {

  constructor() { }

  public saveParameter(key: string, value: string): void {
    localStorage.setItem(key, value);
  }

  public getParameter(key: string): string {
    return localStorage.getItem(key);
  }

}
