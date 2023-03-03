import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { appConfig, corsConfig, createSwaggerDocs } from '@app/config'
import { SwaggerModule } from '@nestjs/swagger'
import * as process from 'process'
import cookieParser from 'cookie-parser'

const bootstrap = async () => {
  const app = await NestFactory.create(AppModule)

  const { PORT, docsPrefix, globalPrefix } = appConfig

  app.enableCors(corsConfig)
  app.setGlobalPrefix(globalPrefix)
  app.use(cookieParser())

  SwaggerModule.setup(docsPrefix, app, createSwaggerDocs(app))
  await app.listen(process.env.PORT || PORT, () =>
    console.log(`Nestjs server started at port ${PORT}`)
  )
}

bootstrap()
