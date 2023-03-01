export interface Printer {
  id: number;
  name: string;
  price: number;
  brand: string;
  stock: number;
}
export type Printers = Printer[];

export interface User {
  id: number;
  username: string;
  email: string;
  isLogged: boolean;
  token: string;
  address: string;
  shoppingCart: Printers;
}
export type Users = User[];

export interface Order {
  id: number;
  product: Printer;
  totalPrice: number;
  status?: Status;
}

export enum Status {
  inProgress,
  completed,
  recieved,
}
