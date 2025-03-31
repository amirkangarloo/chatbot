import { INestApplication } from "@nestjs/common";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { swaggerConstants } from "src/constant";

export function buildSwaggerDocument(app: INestApplication) {
    const config = new DocumentBuilder()
        .setTitle(swaggerConstants.title)
        .setDescription(swaggerConstants.description)
        .setVersion(swaggerConstants.version)
        .build();

    const documentFactory = () => SwaggerModule.createDocument(app, config);

    SwaggerModule.setup(swaggerConstants.path, app, documentFactory);
}