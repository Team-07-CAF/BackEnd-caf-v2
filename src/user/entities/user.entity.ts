import { Transaction } from '@prisma/client';

export class User {
  id?: number;
  email: string;
  password: string;
  name: string;
  isActive: boolean;
  transactions: Transaction[];
}
