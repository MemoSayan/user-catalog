import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private service: UserService) { }

  ngOnInit(): void {
    this.service.getUsers(15).subscribe( (data: any) => {
      console.log(data);
    });
  }


}
