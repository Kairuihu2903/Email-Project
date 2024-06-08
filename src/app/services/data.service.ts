// angular service to handle HTTP requests
// use angular http clients to make request to nestjs backend 
import { Injectable } from '@angular/core';
import{ HttpClient } from '@angular/common/http';
import{ Observable } from 'rxjs'

@Injectable({
    providedIn: "root",
})

export class DataService{
    private apiUrl = 'http://localhost:3000';
    private constructor(private http: HttpClient) {}
    getData(): Observable<string>{
        return this.http.get<string>('${this.apiUrl');
    }
}