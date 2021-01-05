import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Singer } from '../singer';
import { SingerService } from '../singer.service';

@Component({
  selector: 'app-update-singer',
  templateUrl: './update-singer.component.html',
  styleUrls: ['./update-singer.component.css']
})
export class UpdateSingerComponent implements OnInit {

  id: number = 0;
  singer: Singer = new Singer();
  constructor(private singerService: SingerService
    , private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.singerService.getSingerById(this.id).subscribe(data => {
      this.singer = data;
    },
      error => console.log(error));
  }
  /*updateSinger() {
    this.singerService.getSingerById(this.id).subscribe(data => {
      console.log(data)
      this.singer = data;new Singer();
      this.goToList();
    }, error => console.log(error));

  }*/
  onSubmit() {
    this.singerService.updateSinger(this.id, this.singer).subscribe(data => {
      this.goToList();
    }, error => console.log(error));
    //this.updateSinger();
  }
  goToList() {
    this.router.navigate(['/singers']);
  }
}
