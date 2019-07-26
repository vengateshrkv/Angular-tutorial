import { Injectable } from '@angular/core'
import {HttpClient, HttpResponse} from '@angular/common/http'
import { Employee } from './employee'
import { Observable } from 'rxjs/internal/Observable';
import { catchError } from 'rxjs/operators';


@Injectable()
export class EmployeeService {
    constructor(private http: HttpClient) {

    }

    private _url: string = "/assets/data/employees1.json"

    getEmployeeList(): Observable<Employee[]> {
        return this.http.get<Employee[]>(this._url);
    }

    
}