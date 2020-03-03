import {HistorianService} from '../historian.service';
import {CurrentLogLevel} from '../current-log-level';

export function Logging<T extends new(...args: any[]) => {}>(target: T): T {
  Object.defineProperty(target.prototype, 'logger', {
    value: new HistorianService(CurrentLogLevel.LOG_LEVEL, target.name)
  });
  return target;
}
