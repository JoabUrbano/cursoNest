import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // Retira tudo que não esta nos dtos
      forbidNonWhitelisted: true, // Não permite enviar dados que tenham campos não listados
      transform: true, // Transforma os dados que chegam no recurso course é tipado com o dto
    }),
  );
  await app.listen(3000);
}
bootstrap();
