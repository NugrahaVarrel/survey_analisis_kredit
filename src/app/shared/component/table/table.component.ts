import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LabelComponent } from '../label/label.component';
import { Status } from '../../interface/status';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule, RouterLink, LabelComponent],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent {
  @Input() tableName: string = '';
  @Input() headers?: string[] = [];
  @Input() data?: any[] = [];
  @Input() action?: any;

  Status = Status;
}
