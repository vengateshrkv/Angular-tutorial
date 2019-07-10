import { Injectable } from '@angular/core'
import {HttpClient, HttpErrorResponse} from '@angular/common/http'
import { Employee } from './employee'
import { Observable } from 'rxjs/internal/Observable';
import { catchError } from 'rxjs/operators';


@Injectable()
export class EmployeeService {
    constructor(private http: HttpClient) {

    }

    private _url: string = "/assets/data/employees1.json"

    getEmployeeList(): Observable<Employee[]> {
        return this.http.get<Employee[]>(this._url)
                        .pipe(catchError(this.errorHandler))
    }

    errorHandler(error: HttpErrorResponse) {
        return Observable.throw(error.message)
    }
}