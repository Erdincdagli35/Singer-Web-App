import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Singer } from '../singer';
import { SingerService } from '../singer.service';

@Component({
  selector: 'app-singer-list',
  templateUrl: './singer-list.component.html',
  styleUrls: ['./singer-list.component.css']
})
export class SingerListComponent implements OnInit {

  singers: Singer[] = [];

  constructor(private singerService: SingerService, private router: Router) { }

  ngOnInit(): void {
    this.getSingers();
  }

  private getSingers() {
    this.singerService.getSingerList().subscribe(data => {
      this.singers = data;
    });
  }

  updateSinger(id: number) {
    this.router.navigate(['update-singer', id]);

  }

  deleteSinger(id: number) {
    this.singerService.deleteSinger(id).subscribe(data => {
      console.log(data);
      this.getSingers();
    });
  }
  singerDetails(id: number) {
    this.router.navigate(['singer-details', id]);
  }
}
