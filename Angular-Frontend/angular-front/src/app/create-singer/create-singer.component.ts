import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Singer } from '../singer';
import { SingerService } from '../singer.service';

@Component({
  selector: 'app-create-singer',
  templateUrl: './create-singer.component.html',
  styleUrls: ['./create-singer.component.css']
})
export class CreateSingerComponent implements OnInit {

  singer: Singer = new Singer();

  constructor(private singerService: SingerService, private router: Router) { }


  ngOnInit(): void {
  }

  saveSinger() {
    this.singerService.createSinger(this.singer).subscribe(data => {
      console.log(data);
      this.goToSingerList();
    },
      error => console.log(error));
  }

  goToSingerList() {
    this.router.navigate(['/singers']);
  }
  onSubmit() {
    console.log(this.singer);
    this.saveSinger();
  }
}
