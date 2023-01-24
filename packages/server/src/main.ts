import { HttpAdapterHost, NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { ValidationPipe } from '@nestjs/common'
import { AllExceptionsFilter } from '@app/filters/exception.filter'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  app.enableCors()
  app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }))
  app.useGlobalFilters(new AllExceptionsFilter(app.get(HttpAdapterHost)))
  await app.listen(process.env.NODE_ENV !== 'production' ? 7729 : 80, '0.0.0.0')
}
bootstrap()
