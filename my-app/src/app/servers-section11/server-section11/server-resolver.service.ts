import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { ServersSection11Service } from "src/app/services/servers-section11.service";

interface Server {
    id: number,
    name: string,
    status: string
}

@Injectable()
export class ServerResolver implements Resolve<Server>{

    constructor(private serversService: ServersSection11Service){

    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Server>  | Promise<Server> | Server{
        return this.serversService.getServer(+route.params['id']) as Server;
    }
}