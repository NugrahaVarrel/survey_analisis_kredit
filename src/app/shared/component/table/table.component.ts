import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CrediturService } from '../../service/creditur-service/creditur-service.service';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent {
  @Input() tableName: string = '';
  @Input() headers?: string[] = [];
  @Input() data?: any[] = [];
  @Input() action?: any;

  constructor(private crediturService: CrediturService) {

  }

  isDisabled(id: number) {
    return this.crediturService.isSurveyDone(id);
  }
}
