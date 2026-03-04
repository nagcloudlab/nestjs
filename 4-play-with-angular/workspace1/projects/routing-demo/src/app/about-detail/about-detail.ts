import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-about-detail',
  imports: [],
  templateUrl: './about-detail.html',
  styleUrl: './about-detail.css',
})
export class AboutDetail {


  subject: string | null = null;
  constructor(private route: ActivatedRoute) { }
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.subject = params.get('subject');
    });
  }

}
