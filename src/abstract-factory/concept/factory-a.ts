/* eslint-disable max-classes-per-file */
// FactoryA Sample Code

export interface IProductA {
  name: string;
}

class ConcreteProduct implements IProductA {
  name = '';
}

class ConcreteProductA extends ConcreteProduct {
  constructor() {
    super();
    this.name = 'FactoryA:ConcreteProductA';
  }
}

class ConcreteProductB extends ConcreteProduct {
  constructor() {
    super();
    this.name = 'FactoryA:ConcreteProductB';
  }
}

class ConcreteProductC extends ConcreteProduct {
  constructor() {
    super();
    this.name = 'FactoryA:ConcreteProductC';
  }
}

export class FactoryA {
  static getObject(someProperty: string): IProductA {
    try {
      if (someProperty === 'a') {
        return new ConcreteProductA();
      }
      if (someProperty === 'b') {
        return new ConcreteProductB();
      }
      if (someProperty === 'c') {
        return new ConcreteProductC();
      }
      throw new Error('Class Not Found');
    } catch (e) {
      console.log(e);
    }
    return new ConcreteProduct();
  }
}
