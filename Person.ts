// Abstract
export abstract class Person {
  _name: String;
  abstract _age: Number;

  constructor(name: string) {
    this._name = name;
  }

  display(): void {
    console.log(this._name);
  }

  abstract find(name: String): Person;
}

export class Teacher extends Person {
  _age: Number;
  find(name: String): Person {
    throw new Error('Method not implemented.');
  }
}

// Interface

export interface IPerson {
  _name: String;
  display(): void;
  find(name: String): IPerson;
}

export class Student implements IPerson {
  _name: String;
  _studentId: Number;
  display(): void {
    throw new Error('Method not implemented.');
  }
  find(name: String): IPerson {
    throw new Error('Method not implemented.');
  }
}

export class Staff implements IPerson {
  _name: String;
  _employeeId: Student;
  display(): void {
    throw new Error('Method not implemented.');
  }
  find(name: String): Person {
    throw new Error('Method not implemented.');
  }
}
