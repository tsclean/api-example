import 'module-alias/register'

import helmet from 'helmet';
import {connect} from 'mongoose';

import {AppContainer} from "@/application/app";
import {MONGODB_URI, PORT} from "@/application/config/environment";
import {NestFactory} from "@tsclean/core";

async function run(): Promise<void> {
    await connect(MONGODB_URI);
    console.log('DB Mongo connected')
    const app = await NestFactory.create(AppContainer);
    app.use(helmet());
    await app.listen(PORT, () => console.log('Running on port: ' + PORT))
}

run();
