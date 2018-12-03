import { Customer } from './customer';
import { Vehicle } from './vehicle';
import { Damage } from './damage';
import { TraffictTicket } from './traffictTicket';

export class Rent {
  id: string;
  date: string;
  vehicle: Array<Vehicle> = [];
  customer: Customer;
  demage: Array<Damage> = [];
  traffictTickets: Array<TraffictTicket> = [];
}
