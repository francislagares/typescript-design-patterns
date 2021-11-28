/* eslint-disable no-unused-vars */
import AbstractCarPart from './abstract-car-part';

export interface IVisitor {
  // An interface that custom Visitors should implement
  visit(abstractCarPart: AbstractCarPart): void;
}
