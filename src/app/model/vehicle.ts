import { Manufacturer } from './manufacturer';
import { Model } from './model';
import { Category } from './category';

export class Vehicle {
  id: string;
  name: string;
  license: string;
  make: Manufacturer;
  model: Model;
  category: Category;
}
