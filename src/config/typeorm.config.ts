import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export const typeOrmConfig: TypeOrmModuleOptions = {
    type: 'postgres',
    host: '127.0.0.1',
    port: 5432,
    username: 'postgres',
    password: 'changeme',
    database: 'quiz',
    entities: [__dirname + '/../**/*.entity{.ts,.js}'],
    synchronize: true,
}