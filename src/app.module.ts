import {MiddlewareConsumer, Module, RequestMethod} from '@nestjs/common';
import { KeyController } from './Key/key.controller';
import {MongooseModule} from "@nestjs/mongoose";
import { GraphQLModule } from '@nestjs/graphql';
import {KeyService} from "./Key/key.service";
import {KeyResolver} from "./Key/key.resolver";
import {KeyMiddleware} from "./Key/Middlewares/KeyMiddleware";
import {KeySchema} from "./Key/schemas/KeySchema";

@Module({
  imports: [
            GraphQLModule.forRoot({
                autoSchemaFile: "src/schema.gql",
            }),
            MongooseModule.forRoot('mongodb+srv://bogdan:qwerty1234@cluster0-cz0k8.azure.mongodb.net/app?retryWrites=true&w=majority'),
            MongooseModule.forFeature([{name: 'Key', schema: KeySchema}]),
  ],
  controllers: [KeyController],
  providers: [KeyService, KeyResolver],

})
export class AppModule {
    configure(consumer: MiddlewareConsumer) {
        consumer
            .apply(KeyMiddleware)
            .forRoutes({ path: 'test', method: RequestMethod.POST });
    }
}
