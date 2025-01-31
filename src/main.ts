import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: '*', // Allow all origins, change to specific origin (e.g., 'http://localhost:3000') if needed
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Allow these methods
    allowedHeaders: 'Content-Type, Accept', // Allow these headers
  });

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
