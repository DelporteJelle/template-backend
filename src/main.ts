import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //Used to validate the request body
  //TODO: ex command npm i class-validator class-transformer
  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalPipes(
    new ValidationPipe({
      //Strips aditional properties not in the DTO
      whitelist: true,
      //Transforms the request body to the DTO type
      transform: true,
      // forbidNonWhitelisted: true,
    }),
  );
  await app.listen(3001);
}
bootstrap();
