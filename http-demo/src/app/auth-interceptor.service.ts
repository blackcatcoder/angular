import { HttpEvent, HttpEventType, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable, tap } from "rxjs";

export class AuthInterceptorService implements HttpInterceptor{

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log('request is on its way');
        console.log('interceptor request')
        const modifiedRequest = req.clone({headers: req.headers.append('Auth', 'xyz')})
        
        return next.handle(modifiedRequest).pipe(tap(event => {
            if(event.type === HttpEventType.Response){
                console.log('interceptor response');
                console.log(event.body);
            }
        }));
        //return next.handle(req);
    }


}