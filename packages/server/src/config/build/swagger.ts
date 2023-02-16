import {DocumentBuilder, OpenAPIObject, SwaggerModule} from '@nestjs/swagger';
import {appConfig} from './config';

export const createSwaggerDocs = (app): OpenAPIObject => {
  const swagger = new DocumentBuilder()
    .setTitle(appConfig.appName)
    .setDescription("REST API documentation")
      .setVersion(appConfig.appVersion)
    .build();

  return SwaggerModule.createDocument(app, swagger);
};
