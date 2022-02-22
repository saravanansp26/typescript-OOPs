export class Dot {
  x: number;
  y: number;

  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

export class Line {
  start: Dot;
  end: Dot;

  constructor(start: Dot, end: Dot) {
    this.start = start;
    this.end = end;
  }
}

export class Triangle{
  line1 : Line;
  line2 : Line;
  line3 : Line;

  constructor(line1 : Line,line2 : Line, line3 : Line){
    this.line1 = line1;
    this.line2 = line2;
    this.line3 = line3;
  }
}
// class Triangle{
//   dot1 : Dot (start : Dot,end : Dot);
//   dot2 : Dot (start : Dot,end : Dot);
//   dot3 : Dot (start : Dot,end : Dot);

//   line1 : new Line (dot1,dot2);
//   line2 : new Line (dot2,dot3);
//   line3 : new Line (dot3,dot1);
// }
