import { Component, OnInit } from '@angular/core';
import { HttpService } from '../shared/http-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  username: string = '';
  userDetails: any;

  constructor(private httpService: HttpService) { }

  showResults: boolean = false;

  ngOnInit(): void { }

  searchUser() {
    // search github user
    this.httpService.searchGithubUser(this.username)
      .subscribe((res) => {
        this.showResults = true;
        this.userDetails = res;
        localStorage.setItem(this.username, JSON.stringify(res));   // set into localStorage
      }, (err) => {
        this.showResults = true;
        console.error("error:: ", err);
        localStorage.setItem(this.username, JSON.stringify({ data: "No such user found." }));  // set no data found in localStorage
      })
  }

  openUserAccount() {
    window.open(this.userDetails.html_url, '_blank');
  }

}
