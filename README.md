# NatrHistorian

A logging library for Angular projects. This is done with decorators. 

# Install

```npm install @natr/historian --save```

or

```yarn add @natr/historian```

# Usage

By default, log level is set to DEBUG. You can change this in environment{.*}?.ts

```
CurrentLogLevel.LOG_LEVEL = LogLevel.DEBUG;

export const environment = {
...
}
```

Then in a given class.
```
import {Logging} from '@natr/historian';

@Logging
@Component({
...
})
export class SomeComponent implements OnInit {
  logger: HistorianService;
  
  constructor() {
    this.logger.debug('wow, cool');
  }
} 

```

Not that there's some magic going on there. I'm not usually a fan of 'magic', but, here we are. Anyway, to get your typing to pass, you need to define a 'logger' property of HistorianService type, then it's automagically set for you, and away you go.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

