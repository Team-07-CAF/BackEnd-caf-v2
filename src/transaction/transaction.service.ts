import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { UpdateTransactionDto } from './dto/update-transaction.dto';

@Injectable()
export class TransactionService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createTransactionDto: CreateTransactionDto) {
    const { amount, type, userId } = createTransactionDto;

    const transaction = await this.prisma.transaction.create({
      data: {
        amount,
        type,
        user: {
          connect: { id: userId },
        },
      },
    });

    return transaction;
  }

  async findAll() {
    const transactions = await this.prisma.transaction.findMany();
    return transactions;
  }

  async findOne(id: number) {
    const transaction = await this.prisma.transaction.findUnique({
      where: { id },
      include: { user: true },
    });

    return transaction;
  }

  async update(id: number, updateTransactionDto: UpdateTransactionDto) {
    const { amount, type } = updateTransactionDto;

    const transaction = await this.prisma.transaction.update({
      where: { id },
      data: { amount, type },
      include: { user: true },
    });

    return transaction;
  }

  async remove(id: number) {
    const transaction = await this.prisma.transaction.delete({
      where: { id },
      include: { user: true },
    });

    return transaction;
  }
}
