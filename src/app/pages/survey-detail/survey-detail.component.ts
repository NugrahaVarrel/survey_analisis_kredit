import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-survey-detail',
  standalone: true,
  imports: [],
  templateUrl: './survey-detail.component.html',
  styleUrl: './survey-detail.component.scss',
})
export class SurveyDetailComponent {

  id: number = 0;
  constructor(private route: ActivatedRoute, private router: Router) {
    this.id = this.route.snapshot.params['id'];
  }
}
