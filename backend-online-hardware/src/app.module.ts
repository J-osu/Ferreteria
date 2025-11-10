import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoginModule } from './module/users/submodules/login/login.module';
import { AdministrationModule } from './module/administration/administration.module';
import { CatalogeModule } from './module/products/submodules/cataloge/cataloge.module';
import { OrderProcessModule } from './module/products/submodules/order_process/order_process.module';
import { OrderPUModule } from './module/users/submodules/profile_user/order_p_u.module';
import { VisualPCModule } from './module/products/submodules/visual_p_c/visual_p_c.module';
import { MainModule } from './module/main/main.module';

@Module({
  imports: [LoginModule, AdministrationModule, CatalogeModule, OrderProcessModule, OrderPUModule, VisualPCModule, MainModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
