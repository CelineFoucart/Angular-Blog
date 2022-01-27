import { Injectable } from '@angular/core';
import { Params, Router, UrlSerializer } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RedirectService {

  constructor(private router:Router, private serializer: UrlSerializer) { }

  getUrlWithQueryParams(url:string, queryParams:Params):string {
    const tree = this.router.createUrlTree([url], {
      queryParams: queryParams
    });
    return this.serializer.serialize(tree);
  }
}
