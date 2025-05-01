import { NestFactory } from "@nestjs/core";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { AppModule } from "./app.module";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: ["http://localhost:3000", "https://nguyendinhtrung.vercel.app"],
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  });

  const config = new DocumentBuilder()
    .setTitle("My Portfolio API")
    .setDescription("Profile / Experiences / Contact endpoints")
    .setVersion("1.0")
    .addTag("profile")
    .addTag("experiences")
    .addTag("contact")
    .build();

  const doc = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup("docs", app, doc);

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
