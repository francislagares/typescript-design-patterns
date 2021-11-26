/* eslint-disable no-unused-vars */
export interface IDispenser {
  nextSuccessor(successor: IDispenser): void;
  handle(amount: number): void;
}
