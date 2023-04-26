import { Component, OnInit } from '@angular/core';
import { Response } from 'src/app/interface/response.interface';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  response: Response;

  constructor(private service: UserService) { }

  ngOnInit(): void {
    this.service.getUsers(15).subscribe((data: any) => {
      console.log(data);
      this.response = data;
    });
  }


}
