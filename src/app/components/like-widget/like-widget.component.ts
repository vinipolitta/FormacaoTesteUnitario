import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UniqueIdService } from 'src/app/shared/services/unique-id/unique-id.service';

@Component({
  selector: 'app-like-widget',
  templateUrl: './like-widget.component.html',
  styleUrls: ['./like-widget.component.scss']
})
export class LikeWidgetComponent implements OnInit {
  @Output() public liked = new EventEmitter<void>();
  @Input() public likes = 0;
  @Input() public id: string = null;

  constructor(private uniqueIdService: UniqueIdService) { }

  public ngOnInit(): void {
    if (!this.id) {
      this.id = this.uniqueIdService.genereteUniqueIdWithPrefix('like-widget');
    }
  }

  public like(): void {
    this.liked.emit();
  }
}
