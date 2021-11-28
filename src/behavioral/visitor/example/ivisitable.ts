/* eslint-disable no-unused-vars */
import { IVisitor } from './ivisitor';

export interface IVisitable {
  // An interface the concrete objects should implement that allows
  // the visitor to traverse a hierarchical structure of objects
  accept(visitor: IVisitor): void;
}
