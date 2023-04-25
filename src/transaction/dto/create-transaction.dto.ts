import { IsNotEmpty, IsNumber, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateTransactionDto {
  @IsNotEmpty()
  @IsNumber()
  @ApiProperty({
    example: 10.0,
    description: 'Valor da transação.',
  })
  amount: number;

  @IsNotEmpty()
  @ApiProperty({
    example: 'deposit',
    description: 'Tipo da transação.',
  })
  type: string;

  @IsOptional()
  @ApiProperty({
    example: 1,
    description: 'ID do usuário relacionado a transação.',
  })
  userId?: number;
}
