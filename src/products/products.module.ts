/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { ProductsController } from './products.controlller';
import { ProductsServive } from './products.service';

@Module({
  controllers: [ProductsController],
  providers: [ProductsServive],
})
export class ProductsModule {}
