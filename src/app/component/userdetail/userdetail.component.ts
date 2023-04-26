import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Response } from 'src/app/interface/response.interface';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-userdetail',
  templateUrl: './userdetail.component.html',
  styleUrls: ['./userdetail.component.css']
})
export class UserdetailComponent implements OnInit {

  response: Response;
  mode: 'edit' | 'locked' = 'locked';
  buttonText: 'Save' | 'Edit' = 'Edit';

  constructor(private activatedRoute: ActivatedRoute, private userService: UserService) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      console.log('userid: ', params.get('userid')!);
      this.userService.getUser(params.get('userid')!).subscribe(
        (data: any) => {
          console.log(data);
          this.response = data;

        });
    })
  }

  changeMode( mode?: 'edit' | 'locked'): void {
    this.mode = this.mode === 'locked' ? 'edit' : 'locked';
    this.buttonText = this.buttonText === 'Edit' ? 'Save' : 'Edit';
  }


}


