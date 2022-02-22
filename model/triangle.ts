import { Line } from './line';

export class Triangle {
  line1: Line;
  line2: Line;
  line3: Line;

  constructor(line1: Line, line2: Line, line3: Line) {
    this.line1 = line1;
    this.line2 = line2;
    this.line3 = line3;
  }
}
