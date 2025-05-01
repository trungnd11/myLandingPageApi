import { Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AboutModule } from "./about/about.module";

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),

    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (cfg: ConfigService) => ({
        type: "postgres",
        url: cfg.get("DATABASE_URL"),
        synchronize: true,
        ssl: { rejectUnauthorized: false },
        entities: [__dirname + "/**/*.entity{.ts,.js}"],
      }),
    }),
    AboutModule,
  ],
})
export class AppModule {}
