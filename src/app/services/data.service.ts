import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of} from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({
      'Referrer-Policy': 'no-referrer-when-downgrade',
      'Access-Control-Allow-Origin': 'http://88.218.92.164/',
      'Access-Control-Allow-Methods': 'GET,POST',
      'Access-Control-Allow-Credentials': 'true',
      'Authorization': 'Basic ' + btoa('sanjay:abc@xyz')
      // 'Authorization': 'Basic ' + btoa('shubhendru:Shubhendru@123')
    })
  }

  public login(username: any, password: any): Observable<any> {
    const params = new URLSearchParams();
    params.set('email', username);
    params.set('user_name', password);

    return this.http.post("https://morpheusdev.service-now.com/api/x_intp_hr_onboardi/usercreation/verification?email="+username+"&user_name="+password, params, this.httpOptions)
    // return of({
    //   "result": {
    //       "status": "true",
    //       "message": "Email Not Found",
    //       "details":{
    //         "name": "Shubhendru Raj"
    //       }
    //   }
  // })
  }

}
