import {LogLevel} from './enums/log-level.enum';

export class HistorianService {

  constructor(private readonly level: LogLevel, private readonly sourceName: string) {
  }

  private readonly Preamble = '%c (%s) [%s]: %c';

  debug(...args) {
    if (this.level <= LogLevel.DEBUG) {
      this.log('green', ...args);
    }
  }

  info(...args) {
    if (this.level <= LogLevel.INFO) {
      this.log('blue', ...args);
    }
  }

  warn(...args) {
    if (this.level <= LogLevel.WARN) {
      this.log('yellow', ...args);
    }
  }

  error(...args) {
    if (this.level <= LogLevel.ERROR) {
      this.log('orange', ...args);
    }
  }

  fatal(...args) {
    if (this.level <= LogLevel.FATAL) {
      this.log('red', ...args);
    }
  }

  log(color: string, ...args) {
    if (this.level === LogLevel.OFF) {
      return;
    }
    const fullFormatString = this.Preamble + args[0];
    console.log(
      fullFormatString,
      'color: ' + color,
      new Date().toLocaleString(),
      this.sourceName,
      'color: black',
      ...args.slice(1)
    );
  }
}
