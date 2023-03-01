export type Printers = Printer[];
export interface Printer {
  id: number;
  name: string;
  price: number;
  brand: string;
  stock: number;
}

export type Users = User[];
export interface User {
  id: number;
  username: string;
  email: string;
  isLogged: boolean;
  token: string;
  address: string;
}

export interface Order {
  id: number;
  product: Printer;
  totalPrice: number;
  status: boolean;
}
