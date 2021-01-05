import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Singer } from '../singer';
import { SingerService } from '../singer.service';

@Component({
  selector: 'app-singer-details',
  templateUrl: './singer-details.component.html',
  styleUrls: ['./singer-details.component.css']
})
export class SingerDetailsComponent implements OnInit {

  id: number = 0;
  singer: Singer = new Singer();
  constructor(private route: ActivatedRoute, private singerService: SingerService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.singerService.getSingerById(this.id).subscribe(data => {
      this.singer = data;
    });
  }

}
