import { Module } from '@nestjs/common';
import { APP_GUARD, APP_INTERCEPTOR } from '@nestjs/core';
import { ConfigModule } from '@nestjs/config';
import { AuthGuard } from 'src/guard';
import { DomainModule } from 'src/domain/domain.module';
import { RepositoryModule } from 'src/db/repository.module';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from 'src/constant';
import { LoggingInterceptor } from 'src/interceptor';

@Module({
  imports: [
    DomainModule,
    RepositoryModule,
    ConfigModule.forRoot({ isGlobal: true }),
    JwtModule.register({
      global: true,
      secret: jwtConstants.secret,
      signOptions: { expiresIn: jwtConstants.expiresIn },
    }),
  ],
  providers: [{
    provide: APP_GUARD,
    useClass: AuthGuard,
  },
  {
    provide: APP_INTERCEPTOR,
    useClass: LoggingInterceptor,
  },
  ],
})
export class AppModule { }
