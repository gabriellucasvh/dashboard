import { MongoClient } from 'mongodb';

declare global {
  // Adiciona a propriedade `_mongoClientPromise` ao objeto global
  var _mongoClientPromise: Promise<MongoClient> | undefined;
}

export {};