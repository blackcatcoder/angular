import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {

  constructor() { }

  logStatusChange(status: string){
    console.log('Form Service Logging: a server status changed, new status: '+status)
  }
}
