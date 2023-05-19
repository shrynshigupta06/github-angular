import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class HttpService {

    constructor(private http: HttpClient) {

    }

    searchGithubUser(username: string) {
        return this.http.get(`https://api.github.com/users/${username}`);
    }
}