import { Injectable, Optional } from '@angular/core';
import { fromEvent } from "rxjs";
import { map, debounceTime } from "rxjs/operators";

const DELAY = 250;

export class IfViewportSizeConfig {
  medium = 0;
  large = 0;
}

interface IConfig {
  medium: number;
  large: number;
}

@Injectable({
  providedIn: 'root'
})
export class IfViewportSizeService {
  $resizes = fromEvent(window, 'resize');
  private readonly _config : IConfig;

  constructor(@Optional() config: IfViewportSizeConfig) {
    if (config) { this._config = config; }
  }

  getWindowWidth() {
    return this.$resizes.pipe(
      map(this.getScreenSize),
      debounceTime(DELAY)
    )
  }

  getScreenSize = () => {
    const viewportWidth = window.innerWidth;
    const config = this._config;

    if (viewportWidth < config.medium) return 'small';
    if (config.medium <= viewportWidth && viewportWidth < config.large) return 'medium';
    if (config.large <= viewportWidth) return 'large';
  }
}
