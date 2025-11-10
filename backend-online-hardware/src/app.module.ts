import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoginModule } from './module/users/submodules/login/login.module';
import { AdministrationModule } from './module/administration/administration.module';
import { CatalogeModule } from './module/products/submodules/cataloge/cataloge.module';
import { OrderProcessModule } from './module/products/submodules/order_process/order_process.module';
import { MainModule } from './module/main/main.module';
import { ProfileUserModule } from './module/users/submodules/profile_user/profile_user.module';
import { UsersModule } from './module/users/users.module';
import { ProductsModule } from './module/products/products.module';
import { OrderPCModule } from './module/products/submodules/order_p_c/order_p_c.module';
import { SearchFilterModule } from './module/products/submodules/order_p_c/submodules/search_filter/search_filter.module';
import { AdministrationPCModule } from './module/administration/submodules/administration_p_c/administration_p_c.module';
import { AdministrationUsersModule } from './module/administration/submodules/administration_users/administration_users.module';
import { BackupModule } from './module/administration/submodules/backup/backup.module';

@Module({
  imports: [
    LoginModule,
    AdministrationModule,
    CatalogeModule,
    OrderProcessModule,
    MainModule,
    ProfileUserModule,
    UsersModule,
    ProductsModule,
    OrderPCModule,
    SearchFilterModule,
    AdministrationPCModule,
    AdministrationUsersModule,
    BackupModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
