import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  public data$ = this.modalService.data$;
  public isOpen$ = this.modalService.isOpen$;

  constructor(private modalService: ModalService) {}

  ngOnInit(): void {}

  public onClick() {
    this.modalService.modalClose();
  }
}
