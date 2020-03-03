import {Component} from '@angular/core';
import {Logging} from '../../../natr/historian/src/lib/decorators/logging.decorator';
import {HistorianService} from '../../../natr/historian/src/lib/historian.service';

@Logging
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'showcase';
  logger: HistorianService;

  constructor() {
    this.logger.debug('cool');
    this.logger.info('cool');
    this.logger.warn('cool');
    this.logger.error('cool');
    this.logger.fatal('cool');
  }
}
