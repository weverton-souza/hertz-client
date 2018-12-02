import { Customer } from './customer';
import { Vehicle } from './vehicle';
import { Damage } from './damage';
import { TrafficTicket } from './trafficTicket';

export class Rent {
  id: string;
  date: string;
  vehicle: Array<Vehicle> = [];
  customer: Customer;
  demage: Array<Damage> = [];
  trafficTickets: Array<TrafficTicket> = [];
}
