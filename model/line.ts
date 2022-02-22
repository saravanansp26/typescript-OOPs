
import {Dot} from './dot';

export class Line {
  start: Dot;
  end: Dot;

  constructor(start: Dot, end: Dot) {
    this.start = start;
    this.end = end;
  }
}