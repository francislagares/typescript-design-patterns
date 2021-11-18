/* eslint-disable max-classes-per-file */
// FactoryB Sample Code

export interface IProductB {
  name: string;
}

class ConcreteProduct implements IProductB {
  name = '';
}

class ConcreteProductA extends ConcreteProduct {
  constructor() {
    super();
    this.name = 'FactoryB:ConcreteProductA';
  }
}

class ConcreteProductB extends ConcreteProduct {
  constructor() {
    super();
    this.name = 'FactoryB:ConcreteProductB';
  }
}

class ConcreteProductC extends ConcreteProduct {
  constructor() {
    super();
    this.name = 'FactoryB:ConcreteProductC';
  }
}

export class FactoryB {
  static getObject(someProperty: string): IProductB {
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
