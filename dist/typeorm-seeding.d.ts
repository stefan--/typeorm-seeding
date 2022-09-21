import 'reflect-metadata';
import { ObjectType, Connection } from 'typeorm';
import { Factory, FactoryFunction, SeederConstructor } from './types';
import { ConfigureOption } from './connection';
export * from './importer';
export * from './connection';
export { Factory, Seeder } from './types';
export { times } from './helpers';
export declare const define: <Entity, Context>(entity: ObjectType<Entity>, factoryFn: FactoryFunction<Entity, Context>) => void;
export declare const factory: Factory;
export declare const runSeeder: (clazz: SeederConstructor) => Promise<any>;
export declare const useRefreshDatabase: (options?: ConfigureOption) => Promise<Connection>;
export declare const tearDownDatabase: () => Promise<void>;
export declare const useSeeding: (options?: ConfigureOption) => Promise<void>;