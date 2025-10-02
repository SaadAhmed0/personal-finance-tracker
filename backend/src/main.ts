import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Enable CORS for frontend communication
  app.enableCors({
    origin: 'http://localhost:3000', // Next.js default port
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  });

  // Swagger API Docs setup
  const config = new DocumentBuilder()
    .setTitle('Personal Finance Tracker API')
    .setDescription('NestJS backend for the Personal Finance Tracker project')
    .setVersion('1.0.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);

  await app.listen(3001);
  console.log('✅ Personal Finance Tracker Backend is running on http://localhost:3001');
  console.log('📄 Swagger Docs available at http://localhost:3001/docs');
}

bootstrap();
