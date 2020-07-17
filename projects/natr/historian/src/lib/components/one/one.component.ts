import { Component, OnInit } from '@angular/core';
import {HistorianService} from '../../historian.service';
import {Logging} from '../../decorators/logging.decorator';

@Logging
@Component({
  selector: 'lib-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css']
})
export class OneComponent implements OnInit {
  logger: HistorianService;

  constructor() {
    this.logger.debug('debug');
  }

  ngOnInit(): void {
    this.logger.debug('debug in init');
  }

  funcInOneComponent() {
    this.logger.debug('um, things');
    this.logger.debug({thing: 'thing'});
  }
}
