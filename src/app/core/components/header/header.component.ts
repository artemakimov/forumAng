import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public isLoggedIn = false;
  public currentUserEmail:string;

  constructor(
    private authServise: AuthService
  ) {}

  ngOnInit(): void {
    this.authServise.getAuthState().subscribe(user=>
      {
        this.isLoggedIn = !!user;
        if(user){
          this.currentUserEmail = user.email;
        }
      })
  }
}
