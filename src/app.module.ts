import { Module } from '@nestjs/common';
import { ProductsModule } from './products/products.module';
import { HealthCheckModule } from '../../payments-ms/src/health-check/health-check.module';

@Module({
  imports: [ProductsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
