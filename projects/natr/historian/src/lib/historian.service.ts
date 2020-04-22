import {LogLevel} from './enums/log-level.enum';

export class HistorianService {
  private fnNameMatcher = /([^(]+)@|at ([^(]+) \(/;

  constructor(private readonly level: LogLevel, private readonly sourceName: string) {
  }

  private readonly Preamble = '%c (%s) [%s.%s]: %c';

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

    const logLines = (new Error().stack).split('\n');
    let callerName = this.fnName(logLines[2]);
    if (!callerName) {
      callerName = logLines[2];
    }

    const fullFormatString = this.Preamble + args[0];
    console.log(
      fullFormatString,
      'color: ' + color,
      new Date().toLocaleString(),
      this.sourceName,
      callerName,
      'color: black',
      ...args.slice(1)
    );
  }

  private fnName(str) {
    const regexResult = this.fnNameMatcher.exec(str);
    return regexResult[1] || regexResult[2];
  }
}
