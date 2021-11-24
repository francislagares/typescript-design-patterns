/* eslint-disable no-unused-vars */
import Folder from './folder';

export interface IComponent {
  // A component interface describing the common
  // fields and methods of leaves and composites

  referenceToParent?: Folder;

  dir(indent: string): void;
  // A method each Leaf and composite container should implement

  detach(): void;
  // Called before a leaf is attached to a composite
}
