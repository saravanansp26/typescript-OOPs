// Import stylesheets
import './style.css';

import { Dot, Line, Triangle } from './model';
import { IPerson } from './Person';

// let point1 = new Dot(3.5, 2);
// let point2 = new Dot(2.5, 4);
// let point3 = new Dot(4.5, 4);

// let line1 = new Line(point1, point2);
// let line2 = new Line(point2, point3);
// let line3 = new Line(point3, point1);

// let triangleobj = new Triangle(line1, line2, line3);
// console.log(triangleobj);

class Staff implements IPerson {
  _name: String;
  _employeeId: String;
  display(): void {
    console.log('display(1)');
    // throw new Error('Method not implemented.');
  }
  find(name: String): String {
    console.log('find');
    // throw new Error('Method not implemented.');
    return 'Return 1';
  }
}

class StaffExtension extends Staff {
  display(): void {
    console.log('display(2)');
  }
}

let objStaff = new StaffExtension();
objStaff.display();

console.log(objStaff);
let result = objStaff.find('test');
console.log(result);

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;
