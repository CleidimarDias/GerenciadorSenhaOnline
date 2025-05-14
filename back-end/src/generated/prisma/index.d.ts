
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Reparticao
 * 
 */
export type Reparticao = $Result.DefaultSelection<Prisma.$ReparticaoPayload>
/**
 * Model Guiche
 * 
 */
export type Guiche = $Result.DefaultSelection<Prisma.$GuichePayload>
/**
 * Model Usuario
 * 
 */
export type Usuario = $Result.DefaultSelection<Prisma.$UsuarioPayload>
/**
 * Model Cidadao
 * 
 */
export type Cidadao = $Result.DefaultSelection<Prisma.$CidadaoPayload>
/**
 * Model Servico
 * 
 */
export type Servico = $Result.DefaultSelection<Prisma.$ServicoPayload>
/**
 * Model Senha
 * 
 */
export type Senha = $Result.DefaultSelection<Prisma.$SenhaPayload>
/**
 * Model ContadorPrioridade
 * 
 */
export type ContadorPrioridade = $Result.DefaultSelection<Prisma.$ContadorPrioridadePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const SenhaStatus: {
  PENDENTE: 'PENDENTE',
  ATENDIDA: 'ATENDIDA',
  EM_ATENDIMENTO: 'EM_ATENDIMENTO',
  CANCELADA: 'CANCELADA'
};

export type SenhaStatus = (typeof SenhaStatus)[keyof typeof SenhaStatus]


export const Prioridades: {
  NAO_PRIORITARIO: 'NAO_PRIORITARIO',
  PRIORITARIO: 'PRIORITARIO',
  IDOSO_ACIMA_DE_80_ANOS: 'IDOSO_ACIMA_DE_80_ANOS'
};

export type Prioridades = (typeof Prioridades)[keyof typeof Prioridades]


export const Role: {
  ADMIN: 'ADMIN',
  USUARIO: 'USUARIO'
};

export type Role = (typeof Role)[keyof typeof Role]

}

export type SenhaStatus = $Enums.SenhaStatus

export const SenhaStatus: typeof $Enums.SenhaStatus

export type Prioridades = $Enums.Prioridades

export const Prioridades: typeof $Enums.Prioridades

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Reparticaos
 * const reparticaos = await prisma.reparticao.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Reparticaos
   * const reparticaos = await prisma.reparticao.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.reparticao`: Exposes CRUD operations for the **Reparticao** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reparticaos
    * const reparticaos = await prisma.reparticao.findMany()
    * ```
    */
  get reparticao(): Prisma.ReparticaoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.guiche`: Exposes CRUD operations for the **Guiche** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Guiches
    * const guiches = await prisma.guiche.findMany()
    * ```
    */
  get guiche(): Prisma.GuicheDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.usuario`: Exposes CRUD operations for the **Usuario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuarios
    * const usuarios = await prisma.usuario.findMany()
    * ```
    */
  get usuario(): Prisma.UsuarioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cidadao`: Exposes CRUD operations for the **Cidadao** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cidadaos
    * const cidadaos = await prisma.cidadao.findMany()
    * ```
    */
  get cidadao(): Prisma.CidadaoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.servico`: Exposes CRUD operations for the **Servico** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Servicos
    * const servicos = await prisma.servico.findMany()
    * ```
    */
  get servico(): Prisma.ServicoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.senha`: Exposes CRUD operations for the **Senha** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Senhas
    * const senhas = await prisma.senha.findMany()
    * ```
    */
  get senha(): Prisma.SenhaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.contadorPrioridade`: Exposes CRUD operations for the **ContadorPrioridade** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ContadorPrioridades
    * const contadorPrioridades = await prisma.contadorPrioridade.findMany()
    * ```
    */
  get contadorPrioridade(): Prisma.ContadorPrioridadeDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Reparticao: 'Reparticao',
    Guiche: 'Guiche',
    Usuario: 'Usuario',
    Cidadao: 'Cidadao',
    Servico: 'Servico',
    Senha: 'Senha',
    ContadorPrioridade: 'ContadorPrioridade'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "reparticao" | "guiche" | "usuario" | "cidadao" | "servico" | "senha" | "contadorPrioridade"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Reparticao: {
        payload: Prisma.$ReparticaoPayload<ExtArgs>
        fields: Prisma.ReparticaoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReparticaoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReparticaoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReparticaoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReparticaoPayload>
          }
          findFirst: {
            args: Prisma.ReparticaoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReparticaoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReparticaoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReparticaoPayload>
          }
          findMany: {
            args: Prisma.ReparticaoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReparticaoPayload>[]
          }
          create: {
            args: Prisma.ReparticaoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReparticaoPayload>
          }
          createMany: {
            args: Prisma.ReparticaoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReparticaoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReparticaoPayload>[]
          }
          delete: {
            args: Prisma.ReparticaoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReparticaoPayload>
          }
          update: {
            args: Prisma.ReparticaoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReparticaoPayload>
          }
          deleteMany: {
            args: Prisma.ReparticaoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReparticaoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ReparticaoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReparticaoPayload>[]
          }
          upsert: {
            args: Prisma.ReparticaoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReparticaoPayload>
          }
          aggregate: {
            args: Prisma.ReparticaoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReparticao>
          }
          groupBy: {
            args: Prisma.ReparticaoGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReparticaoGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReparticaoCountArgs<ExtArgs>
            result: $Utils.Optional<ReparticaoCountAggregateOutputType> | number
          }
        }
      }
      Guiche: {
        payload: Prisma.$GuichePayload<ExtArgs>
        fields: Prisma.GuicheFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GuicheFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuichePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GuicheFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuichePayload>
          }
          findFirst: {
            args: Prisma.GuicheFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuichePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GuicheFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuichePayload>
          }
          findMany: {
            args: Prisma.GuicheFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuichePayload>[]
          }
          create: {
            args: Prisma.GuicheCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuichePayload>
          }
          createMany: {
            args: Prisma.GuicheCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GuicheCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuichePayload>[]
          }
          delete: {
            args: Prisma.GuicheDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuichePayload>
          }
          update: {
            args: Prisma.GuicheUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuichePayload>
          }
          deleteMany: {
            args: Prisma.GuicheDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GuicheUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GuicheUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuichePayload>[]
          }
          upsert: {
            args: Prisma.GuicheUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuichePayload>
          }
          aggregate: {
            args: Prisma.GuicheAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGuiche>
          }
          groupBy: {
            args: Prisma.GuicheGroupByArgs<ExtArgs>
            result: $Utils.Optional<GuicheGroupByOutputType>[]
          }
          count: {
            args: Prisma.GuicheCountArgs<ExtArgs>
            result: $Utils.Optional<GuicheCountAggregateOutputType> | number
          }
        }
      }
      Usuario: {
        payload: Prisma.$UsuarioPayload<ExtArgs>
        fields: Prisma.UsuarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsuarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsuarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findFirst: {
            args: Prisma.UsuarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsuarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findMany: {
            args: Prisma.UsuarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          create: {
            args: Prisma.UsuarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          createMany: {
            args: Prisma.UsuarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UsuarioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          delete: {
            args: Prisma.UsuarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          update: {
            args: Prisma.UsuarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          deleteMany: {
            args: Prisma.UsuarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsuarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UsuarioUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          upsert: {
            args: Prisma.UsuarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          aggregate: {
            args: Prisma.UsuarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuario>
          }
          groupBy: {
            args: Prisma.UsuarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsuarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsuarioCountArgs<ExtArgs>
            result: $Utils.Optional<UsuarioCountAggregateOutputType> | number
          }
        }
      }
      Cidadao: {
        payload: Prisma.$CidadaoPayload<ExtArgs>
        fields: Prisma.CidadaoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CidadaoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CidadaoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CidadaoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CidadaoPayload>
          }
          findFirst: {
            args: Prisma.CidadaoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CidadaoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CidadaoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CidadaoPayload>
          }
          findMany: {
            args: Prisma.CidadaoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CidadaoPayload>[]
          }
          create: {
            args: Prisma.CidadaoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CidadaoPayload>
          }
          createMany: {
            args: Prisma.CidadaoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CidadaoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CidadaoPayload>[]
          }
          delete: {
            args: Prisma.CidadaoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CidadaoPayload>
          }
          update: {
            args: Prisma.CidadaoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CidadaoPayload>
          }
          deleteMany: {
            args: Prisma.CidadaoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CidadaoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CidadaoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CidadaoPayload>[]
          }
          upsert: {
            args: Prisma.CidadaoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CidadaoPayload>
          }
          aggregate: {
            args: Prisma.CidadaoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCidadao>
          }
          groupBy: {
            args: Prisma.CidadaoGroupByArgs<ExtArgs>
            result: $Utils.Optional<CidadaoGroupByOutputType>[]
          }
          count: {
            args: Prisma.CidadaoCountArgs<ExtArgs>
            result: $Utils.Optional<CidadaoCountAggregateOutputType> | number
          }
        }
      }
      Servico: {
        payload: Prisma.$ServicoPayload<ExtArgs>
        fields: Prisma.ServicoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ServicoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ServicoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicoPayload>
          }
          findFirst: {
            args: Prisma.ServicoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ServicoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicoPayload>
          }
          findMany: {
            args: Prisma.ServicoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicoPayload>[]
          }
          create: {
            args: Prisma.ServicoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicoPayload>
          }
          createMany: {
            args: Prisma.ServicoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ServicoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicoPayload>[]
          }
          delete: {
            args: Prisma.ServicoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicoPayload>
          }
          update: {
            args: Prisma.ServicoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicoPayload>
          }
          deleteMany: {
            args: Prisma.ServicoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ServicoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ServicoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicoPayload>[]
          }
          upsert: {
            args: Prisma.ServicoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicoPayload>
          }
          aggregate: {
            args: Prisma.ServicoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateServico>
          }
          groupBy: {
            args: Prisma.ServicoGroupByArgs<ExtArgs>
            result: $Utils.Optional<ServicoGroupByOutputType>[]
          }
          count: {
            args: Prisma.ServicoCountArgs<ExtArgs>
            result: $Utils.Optional<ServicoCountAggregateOutputType> | number
          }
        }
      }
      Senha: {
        payload: Prisma.$SenhaPayload<ExtArgs>
        fields: Prisma.SenhaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SenhaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SenhaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SenhaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SenhaPayload>
          }
          findFirst: {
            args: Prisma.SenhaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SenhaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SenhaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SenhaPayload>
          }
          findMany: {
            args: Prisma.SenhaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SenhaPayload>[]
          }
          create: {
            args: Prisma.SenhaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SenhaPayload>
          }
          createMany: {
            args: Prisma.SenhaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SenhaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SenhaPayload>[]
          }
          delete: {
            args: Prisma.SenhaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SenhaPayload>
          }
          update: {
            args: Prisma.SenhaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SenhaPayload>
          }
          deleteMany: {
            args: Prisma.SenhaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SenhaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SenhaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SenhaPayload>[]
          }
          upsert: {
            args: Prisma.SenhaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SenhaPayload>
          }
          aggregate: {
            args: Prisma.SenhaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSenha>
          }
          groupBy: {
            args: Prisma.SenhaGroupByArgs<ExtArgs>
            result: $Utils.Optional<SenhaGroupByOutputType>[]
          }
          count: {
            args: Prisma.SenhaCountArgs<ExtArgs>
            result: $Utils.Optional<SenhaCountAggregateOutputType> | number
          }
        }
      }
      ContadorPrioridade: {
        payload: Prisma.$ContadorPrioridadePayload<ExtArgs>
        fields: Prisma.ContadorPrioridadeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ContadorPrioridadeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContadorPrioridadePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ContadorPrioridadeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContadorPrioridadePayload>
          }
          findFirst: {
            args: Prisma.ContadorPrioridadeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContadorPrioridadePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ContadorPrioridadeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContadorPrioridadePayload>
          }
          findMany: {
            args: Prisma.ContadorPrioridadeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContadorPrioridadePayload>[]
          }
          create: {
            args: Prisma.ContadorPrioridadeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContadorPrioridadePayload>
          }
          createMany: {
            args: Prisma.ContadorPrioridadeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ContadorPrioridadeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContadorPrioridadePayload>[]
          }
          delete: {
            args: Prisma.ContadorPrioridadeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContadorPrioridadePayload>
          }
          update: {
            args: Prisma.ContadorPrioridadeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContadorPrioridadePayload>
          }
          deleteMany: {
            args: Prisma.ContadorPrioridadeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ContadorPrioridadeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ContadorPrioridadeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContadorPrioridadePayload>[]
          }
          upsert: {
            args: Prisma.ContadorPrioridadeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContadorPrioridadePayload>
          }
          aggregate: {
            args: Prisma.ContadorPrioridadeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateContadorPrioridade>
          }
          groupBy: {
            args: Prisma.ContadorPrioridadeGroupByArgs<ExtArgs>
            result: $Utils.Optional<ContadorPrioridadeGroupByOutputType>[]
          }
          count: {
            args: Prisma.ContadorPrioridadeCountArgs<ExtArgs>
            result: $Utils.Optional<ContadorPrioridadeCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    reparticao?: ReparticaoOmit
    guiche?: GuicheOmit
    usuario?: UsuarioOmit
    cidadao?: CidadaoOmit
    servico?: ServicoOmit
    senha?: SenhaOmit
    contadorPrioridade?: ContadorPrioridadeOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type ReparticaoCountOutputType
   */

  export type ReparticaoCountOutputType = {
    servicos: number
    usuarios: number
    guiches: number
    cidadaos: number
  }

  export type ReparticaoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    servicos?: boolean | ReparticaoCountOutputTypeCountServicosArgs
    usuarios?: boolean | ReparticaoCountOutputTypeCountUsuariosArgs
    guiches?: boolean | ReparticaoCountOutputTypeCountGuichesArgs
    cidadaos?: boolean | ReparticaoCountOutputTypeCountCidadaosArgs
  }

  // Custom InputTypes
  /**
   * ReparticaoCountOutputType without action
   */
  export type ReparticaoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReparticaoCountOutputType
     */
    select?: ReparticaoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ReparticaoCountOutputType without action
   */
  export type ReparticaoCountOutputTypeCountServicosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServicoWhereInput
  }

  /**
   * ReparticaoCountOutputType without action
   */
  export type ReparticaoCountOutputTypeCountUsuariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuarioWhereInput
  }

  /**
   * ReparticaoCountOutputType without action
   */
  export type ReparticaoCountOutputTypeCountGuichesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GuicheWhereInput
  }

  /**
   * ReparticaoCountOutputType without action
   */
  export type ReparticaoCountOutputTypeCountCidadaosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CidadaoWhereInput
  }


  /**
   * Count Type GuicheCountOutputType
   */

  export type GuicheCountOutputType = {
    senha: number
  }

  export type GuicheCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    senha?: boolean | GuicheCountOutputTypeCountSenhaArgs
  }

  // Custom InputTypes
  /**
   * GuicheCountOutputType without action
   */
  export type GuicheCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuicheCountOutputType
     */
    select?: GuicheCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GuicheCountOutputType without action
   */
  export type GuicheCountOutputTypeCountSenhaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SenhaWhereInput
  }


  /**
   * Count Type UsuarioCountOutputType
   */

  export type UsuarioCountOutputType = {
    senha: number
  }

  export type UsuarioCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    senha?: boolean | UsuarioCountOutputTypeCountSenhaArgs
  }

  // Custom InputTypes
  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioCountOutputType
     */
    select?: UsuarioCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountSenhaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SenhaWhereInput
  }


  /**
   * Count Type CidadaoCountOutputType
   */

  export type CidadaoCountOutputType = {
    senha: number
  }

  export type CidadaoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    senha?: boolean | CidadaoCountOutputTypeCountSenhaArgs
  }

  // Custom InputTypes
  /**
   * CidadaoCountOutputType without action
   */
  export type CidadaoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CidadaoCountOutputType
     */
    select?: CidadaoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CidadaoCountOutputType without action
   */
  export type CidadaoCountOutputTypeCountSenhaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SenhaWhereInput
  }


  /**
   * Count Type ServicoCountOutputType
   */

  export type ServicoCountOutputType = {
    senha: number
    contador: number
  }

  export type ServicoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    senha?: boolean | ServicoCountOutputTypeCountSenhaArgs
    contador?: boolean | ServicoCountOutputTypeCountContadorArgs
  }

  // Custom InputTypes
  /**
   * ServicoCountOutputType without action
   */
  export type ServicoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServicoCountOutputType
     */
    select?: ServicoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ServicoCountOutputType without action
   */
  export type ServicoCountOutputTypeCountSenhaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SenhaWhereInput
  }

  /**
   * ServicoCountOutputType without action
   */
  export type ServicoCountOutputTypeCountContadorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContadorPrioridadeWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Reparticao
   */

  export type AggregateReparticao = {
    _count: ReparticaoCountAggregateOutputType | null
    _min: ReparticaoMinAggregateOutputType | null
    _max: ReparticaoMaxAggregateOutputType | null
  }

  export type ReparticaoMinAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ReparticaoMaxAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ReparticaoCountAggregateOutputType = {
    id: number
    name: number
    slug: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ReparticaoMinAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ReparticaoMaxAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ReparticaoCountAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ReparticaoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reparticao to aggregate.
     */
    where?: ReparticaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reparticaos to fetch.
     */
    orderBy?: ReparticaoOrderByWithRelationInput | ReparticaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReparticaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reparticaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reparticaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Reparticaos
    **/
    _count?: true | ReparticaoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReparticaoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReparticaoMaxAggregateInputType
  }

  export type GetReparticaoAggregateType<T extends ReparticaoAggregateArgs> = {
        [P in keyof T & keyof AggregateReparticao]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReparticao[P]>
      : GetScalarType<T[P], AggregateReparticao[P]>
  }




  export type ReparticaoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReparticaoWhereInput
    orderBy?: ReparticaoOrderByWithAggregationInput | ReparticaoOrderByWithAggregationInput[]
    by: ReparticaoScalarFieldEnum[] | ReparticaoScalarFieldEnum
    having?: ReparticaoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReparticaoCountAggregateInputType | true
    _min?: ReparticaoMinAggregateInputType
    _max?: ReparticaoMaxAggregateInputType
  }

  export type ReparticaoGroupByOutputType = {
    id: string
    name: string
    slug: string
    createdAt: Date
    updatedAt: Date
    _count: ReparticaoCountAggregateOutputType | null
    _min: ReparticaoMinAggregateOutputType | null
    _max: ReparticaoMaxAggregateOutputType | null
  }

  type GetReparticaoGroupByPayload<T extends ReparticaoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReparticaoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReparticaoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReparticaoGroupByOutputType[P]>
            : GetScalarType<T[P], ReparticaoGroupByOutputType[P]>
        }
      >
    >


  export type ReparticaoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    servicos?: boolean | Reparticao$servicosArgs<ExtArgs>
    usuarios?: boolean | Reparticao$usuariosArgs<ExtArgs>
    guiches?: boolean | Reparticao$guichesArgs<ExtArgs>
    cidadaos?: boolean | Reparticao$cidadaosArgs<ExtArgs>
    _count?: boolean | ReparticaoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reparticao"]>

  export type ReparticaoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["reparticao"]>

  export type ReparticaoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["reparticao"]>

  export type ReparticaoSelectScalar = {
    id?: boolean
    name?: boolean
    slug?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ReparticaoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "slug" | "createdAt" | "updatedAt", ExtArgs["result"]["reparticao"]>
  export type ReparticaoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    servicos?: boolean | Reparticao$servicosArgs<ExtArgs>
    usuarios?: boolean | Reparticao$usuariosArgs<ExtArgs>
    guiches?: boolean | Reparticao$guichesArgs<ExtArgs>
    cidadaos?: boolean | Reparticao$cidadaosArgs<ExtArgs>
    _count?: boolean | ReparticaoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ReparticaoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ReparticaoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ReparticaoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Reparticao"
    objects: {
      servicos: Prisma.$ServicoPayload<ExtArgs>[]
      usuarios: Prisma.$UsuarioPayload<ExtArgs>[]
      guiches: Prisma.$GuichePayload<ExtArgs>[]
      cidadaos: Prisma.$CidadaoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      slug: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["reparticao"]>
    composites: {}
  }

  type ReparticaoGetPayload<S extends boolean | null | undefined | ReparticaoDefaultArgs> = $Result.GetResult<Prisma.$ReparticaoPayload, S>

  type ReparticaoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReparticaoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReparticaoCountAggregateInputType | true
    }

  export interface ReparticaoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Reparticao'], meta: { name: 'Reparticao' } }
    /**
     * Find zero or one Reparticao that matches the filter.
     * @param {ReparticaoFindUniqueArgs} args - Arguments to find a Reparticao
     * @example
     * // Get one Reparticao
     * const reparticao = await prisma.reparticao.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReparticaoFindUniqueArgs>(args: SelectSubset<T, ReparticaoFindUniqueArgs<ExtArgs>>): Prisma__ReparticaoClient<$Result.GetResult<Prisma.$ReparticaoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Reparticao that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReparticaoFindUniqueOrThrowArgs} args - Arguments to find a Reparticao
     * @example
     * // Get one Reparticao
     * const reparticao = await prisma.reparticao.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReparticaoFindUniqueOrThrowArgs>(args: SelectSubset<T, ReparticaoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReparticaoClient<$Result.GetResult<Prisma.$ReparticaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reparticao that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReparticaoFindFirstArgs} args - Arguments to find a Reparticao
     * @example
     * // Get one Reparticao
     * const reparticao = await prisma.reparticao.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReparticaoFindFirstArgs>(args?: SelectSubset<T, ReparticaoFindFirstArgs<ExtArgs>>): Prisma__ReparticaoClient<$Result.GetResult<Prisma.$ReparticaoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reparticao that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReparticaoFindFirstOrThrowArgs} args - Arguments to find a Reparticao
     * @example
     * // Get one Reparticao
     * const reparticao = await prisma.reparticao.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReparticaoFindFirstOrThrowArgs>(args?: SelectSubset<T, ReparticaoFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReparticaoClient<$Result.GetResult<Prisma.$ReparticaoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Reparticaos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReparticaoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reparticaos
     * const reparticaos = await prisma.reparticao.findMany()
     * 
     * // Get first 10 Reparticaos
     * const reparticaos = await prisma.reparticao.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reparticaoWithIdOnly = await prisma.reparticao.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReparticaoFindManyArgs>(args?: SelectSubset<T, ReparticaoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReparticaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Reparticao.
     * @param {ReparticaoCreateArgs} args - Arguments to create a Reparticao.
     * @example
     * // Create one Reparticao
     * const Reparticao = await prisma.reparticao.create({
     *   data: {
     *     // ... data to create a Reparticao
     *   }
     * })
     * 
     */
    create<T extends ReparticaoCreateArgs>(args: SelectSubset<T, ReparticaoCreateArgs<ExtArgs>>): Prisma__ReparticaoClient<$Result.GetResult<Prisma.$ReparticaoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Reparticaos.
     * @param {ReparticaoCreateManyArgs} args - Arguments to create many Reparticaos.
     * @example
     * // Create many Reparticaos
     * const reparticao = await prisma.reparticao.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReparticaoCreateManyArgs>(args?: SelectSubset<T, ReparticaoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Reparticaos and returns the data saved in the database.
     * @param {ReparticaoCreateManyAndReturnArgs} args - Arguments to create many Reparticaos.
     * @example
     * // Create many Reparticaos
     * const reparticao = await prisma.reparticao.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Reparticaos and only return the `id`
     * const reparticaoWithIdOnly = await prisma.reparticao.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReparticaoCreateManyAndReturnArgs>(args?: SelectSubset<T, ReparticaoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReparticaoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Reparticao.
     * @param {ReparticaoDeleteArgs} args - Arguments to delete one Reparticao.
     * @example
     * // Delete one Reparticao
     * const Reparticao = await prisma.reparticao.delete({
     *   where: {
     *     // ... filter to delete one Reparticao
     *   }
     * })
     * 
     */
    delete<T extends ReparticaoDeleteArgs>(args: SelectSubset<T, ReparticaoDeleteArgs<ExtArgs>>): Prisma__ReparticaoClient<$Result.GetResult<Prisma.$ReparticaoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Reparticao.
     * @param {ReparticaoUpdateArgs} args - Arguments to update one Reparticao.
     * @example
     * // Update one Reparticao
     * const reparticao = await prisma.reparticao.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReparticaoUpdateArgs>(args: SelectSubset<T, ReparticaoUpdateArgs<ExtArgs>>): Prisma__ReparticaoClient<$Result.GetResult<Prisma.$ReparticaoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Reparticaos.
     * @param {ReparticaoDeleteManyArgs} args - Arguments to filter Reparticaos to delete.
     * @example
     * // Delete a few Reparticaos
     * const { count } = await prisma.reparticao.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReparticaoDeleteManyArgs>(args?: SelectSubset<T, ReparticaoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reparticaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReparticaoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reparticaos
     * const reparticao = await prisma.reparticao.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReparticaoUpdateManyArgs>(args: SelectSubset<T, ReparticaoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reparticaos and returns the data updated in the database.
     * @param {ReparticaoUpdateManyAndReturnArgs} args - Arguments to update many Reparticaos.
     * @example
     * // Update many Reparticaos
     * const reparticao = await prisma.reparticao.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Reparticaos and only return the `id`
     * const reparticaoWithIdOnly = await prisma.reparticao.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ReparticaoUpdateManyAndReturnArgs>(args: SelectSubset<T, ReparticaoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReparticaoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Reparticao.
     * @param {ReparticaoUpsertArgs} args - Arguments to update or create a Reparticao.
     * @example
     * // Update or create a Reparticao
     * const reparticao = await prisma.reparticao.upsert({
     *   create: {
     *     // ... data to create a Reparticao
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Reparticao we want to update
     *   }
     * })
     */
    upsert<T extends ReparticaoUpsertArgs>(args: SelectSubset<T, ReparticaoUpsertArgs<ExtArgs>>): Prisma__ReparticaoClient<$Result.GetResult<Prisma.$ReparticaoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Reparticaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReparticaoCountArgs} args - Arguments to filter Reparticaos to count.
     * @example
     * // Count the number of Reparticaos
     * const count = await prisma.reparticao.count({
     *   where: {
     *     // ... the filter for the Reparticaos we want to count
     *   }
     * })
    **/
    count<T extends ReparticaoCountArgs>(
      args?: Subset<T, ReparticaoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReparticaoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Reparticao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReparticaoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ReparticaoAggregateArgs>(args: Subset<T, ReparticaoAggregateArgs>): Prisma.PrismaPromise<GetReparticaoAggregateType<T>>

    /**
     * Group by Reparticao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReparticaoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ReparticaoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReparticaoGroupByArgs['orderBy'] }
        : { orderBy?: ReparticaoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ReparticaoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReparticaoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Reparticao model
   */
  readonly fields: ReparticaoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Reparticao.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReparticaoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    servicos<T extends Reparticao$servicosArgs<ExtArgs> = {}>(args?: Subset<T, Reparticao$servicosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    usuarios<T extends Reparticao$usuariosArgs<ExtArgs> = {}>(args?: Subset<T, Reparticao$usuariosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    guiches<T extends Reparticao$guichesArgs<ExtArgs> = {}>(args?: Subset<T, Reparticao$guichesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GuichePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    cidadaos<T extends Reparticao$cidadaosArgs<ExtArgs> = {}>(args?: Subset<T, Reparticao$cidadaosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CidadaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Reparticao model
   */
  interface ReparticaoFieldRefs {
    readonly id: FieldRef<"Reparticao", 'String'>
    readonly name: FieldRef<"Reparticao", 'String'>
    readonly slug: FieldRef<"Reparticao", 'String'>
    readonly createdAt: FieldRef<"Reparticao", 'DateTime'>
    readonly updatedAt: FieldRef<"Reparticao", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Reparticao findUnique
   */
  export type ReparticaoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reparticao
     */
    select?: ReparticaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reparticao
     */
    omit?: ReparticaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReparticaoInclude<ExtArgs> | null
    /**
     * Filter, which Reparticao to fetch.
     */
    where: ReparticaoWhereUniqueInput
  }

  /**
   * Reparticao findUniqueOrThrow
   */
  export type ReparticaoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reparticao
     */
    select?: ReparticaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reparticao
     */
    omit?: ReparticaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReparticaoInclude<ExtArgs> | null
    /**
     * Filter, which Reparticao to fetch.
     */
    where: ReparticaoWhereUniqueInput
  }

  /**
   * Reparticao findFirst
   */
  export type ReparticaoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reparticao
     */
    select?: ReparticaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reparticao
     */
    omit?: ReparticaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReparticaoInclude<ExtArgs> | null
    /**
     * Filter, which Reparticao to fetch.
     */
    where?: ReparticaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reparticaos to fetch.
     */
    orderBy?: ReparticaoOrderByWithRelationInput | ReparticaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reparticaos.
     */
    cursor?: ReparticaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reparticaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reparticaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reparticaos.
     */
    distinct?: ReparticaoScalarFieldEnum | ReparticaoScalarFieldEnum[]
  }

  /**
   * Reparticao findFirstOrThrow
   */
  export type ReparticaoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reparticao
     */
    select?: ReparticaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reparticao
     */
    omit?: ReparticaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReparticaoInclude<ExtArgs> | null
    /**
     * Filter, which Reparticao to fetch.
     */
    where?: ReparticaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reparticaos to fetch.
     */
    orderBy?: ReparticaoOrderByWithRelationInput | ReparticaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reparticaos.
     */
    cursor?: ReparticaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reparticaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reparticaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reparticaos.
     */
    distinct?: ReparticaoScalarFieldEnum | ReparticaoScalarFieldEnum[]
  }

  /**
   * Reparticao findMany
   */
  export type ReparticaoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reparticao
     */
    select?: ReparticaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reparticao
     */
    omit?: ReparticaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReparticaoInclude<ExtArgs> | null
    /**
     * Filter, which Reparticaos to fetch.
     */
    where?: ReparticaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reparticaos to fetch.
     */
    orderBy?: ReparticaoOrderByWithRelationInput | ReparticaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Reparticaos.
     */
    cursor?: ReparticaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reparticaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reparticaos.
     */
    skip?: number
    distinct?: ReparticaoScalarFieldEnum | ReparticaoScalarFieldEnum[]
  }

  /**
   * Reparticao create
   */
  export type ReparticaoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reparticao
     */
    select?: ReparticaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reparticao
     */
    omit?: ReparticaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReparticaoInclude<ExtArgs> | null
    /**
     * The data needed to create a Reparticao.
     */
    data: XOR<ReparticaoCreateInput, ReparticaoUncheckedCreateInput>
  }

  /**
   * Reparticao createMany
   */
  export type ReparticaoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Reparticaos.
     */
    data: ReparticaoCreateManyInput | ReparticaoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Reparticao createManyAndReturn
   */
  export type ReparticaoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reparticao
     */
    select?: ReparticaoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Reparticao
     */
    omit?: ReparticaoOmit<ExtArgs> | null
    /**
     * The data used to create many Reparticaos.
     */
    data: ReparticaoCreateManyInput | ReparticaoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Reparticao update
   */
  export type ReparticaoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reparticao
     */
    select?: ReparticaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reparticao
     */
    omit?: ReparticaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReparticaoInclude<ExtArgs> | null
    /**
     * The data needed to update a Reparticao.
     */
    data: XOR<ReparticaoUpdateInput, ReparticaoUncheckedUpdateInput>
    /**
     * Choose, which Reparticao to update.
     */
    where: ReparticaoWhereUniqueInput
  }

  /**
   * Reparticao updateMany
   */
  export type ReparticaoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Reparticaos.
     */
    data: XOR<ReparticaoUpdateManyMutationInput, ReparticaoUncheckedUpdateManyInput>
    /**
     * Filter which Reparticaos to update
     */
    where?: ReparticaoWhereInput
    /**
     * Limit how many Reparticaos to update.
     */
    limit?: number
  }

  /**
   * Reparticao updateManyAndReturn
   */
  export type ReparticaoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reparticao
     */
    select?: ReparticaoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Reparticao
     */
    omit?: ReparticaoOmit<ExtArgs> | null
    /**
     * The data used to update Reparticaos.
     */
    data: XOR<ReparticaoUpdateManyMutationInput, ReparticaoUncheckedUpdateManyInput>
    /**
     * Filter which Reparticaos to update
     */
    where?: ReparticaoWhereInput
    /**
     * Limit how many Reparticaos to update.
     */
    limit?: number
  }

  /**
   * Reparticao upsert
   */
  export type ReparticaoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reparticao
     */
    select?: ReparticaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reparticao
     */
    omit?: ReparticaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReparticaoInclude<ExtArgs> | null
    /**
     * The filter to search for the Reparticao to update in case it exists.
     */
    where: ReparticaoWhereUniqueInput
    /**
     * In case the Reparticao found by the `where` argument doesn't exist, create a new Reparticao with this data.
     */
    create: XOR<ReparticaoCreateInput, ReparticaoUncheckedCreateInput>
    /**
     * In case the Reparticao was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReparticaoUpdateInput, ReparticaoUncheckedUpdateInput>
  }

  /**
   * Reparticao delete
   */
  export type ReparticaoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reparticao
     */
    select?: ReparticaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reparticao
     */
    omit?: ReparticaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReparticaoInclude<ExtArgs> | null
    /**
     * Filter which Reparticao to delete.
     */
    where: ReparticaoWhereUniqueInput
  }

  /**
   * Reparticao deleteMany
   */
  export type ReparticaoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reparticaos to delete
     */
    where?: ReparticaoWhereInput
    /**
     * Limit how many Reparticaos to delete.
     */
    limit?: number
  }

  /**
   * Reparticao.servicos
   */
  export type Reparticao$servicosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Servico
     */
    select?: ServicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Servico
     */
    omit?: ServicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicoInclude<ExtArgs> | null
    where?: ServicoWhereInput
    orderBy?: ServicoOrderByWithRelationInput | ServicoOrderByWithRelationInput[]
    cursor?: ServicoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ServicoScalarFieldEnum | ServicoScalarFieldEnum[]
  }

  /**
   * Reparticao.usuarios
   */
  export type Reparticao$usuariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    where?: UsuarioWhereInput
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    cursor?: UsuarioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Reparticao.guiches
   */
  export type Reparticao$guichesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guiche
     */
    select?: GuicheSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guiche
     */
    omit?: GuicheOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuicheInclude<ExtArgs> | null
    where?: GuicheWhereInput
    orderBy?: GuicheOrderByWithRelationInput | GuicheOrderByWithRelationInput[]
    cursor?: GuicheWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GuicheScalarFieldEnum | GuicheScalarFieldEnum[]
  }

  /**
   * Reparticao.cidadaos
   */
  export type Reparticao$cidadaosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cidadao
     */
    select?: CidadaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cidadao
     */
    omit?: CidadaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CidadaoInclude<ExtArgs> | null
    where?: CidadaoWhereInput
    orderBy?: CidadaoOrderByWithRelationInput | CidadaoOrderByWithRelationInput[]
    cursor?: CidadaoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CidadaoScalarFieldEnum | CidadaoScalarFieldEnum[]
  }

  /**
   * Reparticao without action
   */
  export type ReparticaoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reparticao
     */
    select?: ReparticaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reparticao
     */
    omit?: ReparticaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReparticaoInclude<ExtArgs> | null
  }


  /**
   * Model Guiche
   */

  export type AggregateGuiche = {
    _count: GuicheCountAggregateOutputType | null
    _min: GuicheMinAggregateOutputType | null
    _max: GuicheMaxAggregateOutputType | null
  }

  export type GuicheMinAggregateOutputType = {
    id: string | null
    name: string | null
    reparticaoId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GuicheMaxAggregateOutputType = {
    id: string | null
    name: string | null
    reparticaoId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GuicheCountAggregateOutputType = {
    id: number
    name: number
    reparticaoId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type GuicheMinAggregateInputType = {
    id?: true
    name?: true
    reparticaoId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GuicheMaxAggregateInputType = {
    id?: true
    name?: true
    reparticaoId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GuicheCountAggregateInputType = {
    id?: true
    name?: true
    reparticaoId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type GuicheAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Guiche to aggregate.
     */
    where?: GuicheWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Guiches to fetch.
     */
    orderBy?: GuicheOrderByWithRelationInput | GuicheOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GuicheWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Guiches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Guiches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Guiches
    **/
    _count?: true | GuicheCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GuicheMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GuicheMaxAggregateInputType
  }

  export type GetGuicheAggregateType<T extends GuicheAggregateArgs> = {
        [P in keyof T & keyof AggregateGuiche]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGuiche[P]>
      : GetScalarType<T[P], AggregateGuiche[P]>
  }




  export type GuicheGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GuicheWhereInput
    orderBy?: GuicheOrderByWithAggregationInput | GuicheOrderByWithAggregationInput[]
    by: GuicheScalarFieldEnum[] | GuicheScalarFieldEnum
    having?: GuicheScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GuicheCountAggregateInputType | true
    _min?: GuicheMinAggregateInputType
    _max?: GuicheMaxAggregateInputType
  }

  export type GuicheGroupByOutputType = {
    id: string
    name: string
    reparticaoId: string
    createdAt: Date
    updatedAt: Date
    _count: GuicheCountAggregateOutputType | null
    _min: GuicheMinAggregateOutputType | null
    _max: GuicheMaxAggregateOutputType | null
  }

  type GetGuicheGroupByPayload<T extends GuicheGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GuicheGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GuicheGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GuicheGroupByOutputType[P]>
            : GetScalarType<T[P], GuicheGroupByOutputType[P]>
        }
      >
    >


  export type GuicheSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    reparticaoId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    senha?: boolean | Guiche$senhaArgs<ExtArgs>
    reparticao?: boolean | ReparticaoDefaultArgs<ExtArgs>
    _count?: boolean | GuicheCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["guiche"]>

  export type GuicheSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    reparticaoId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    reparticao?: boolean | ReparticaoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["guiche"]>

  export type GuicheSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    reparticaoId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    reparticao?: boolean | ReparticaoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["guiche"]>

  export type GuicheSelectScalar = {
    id?: boolean
    name?: boolean
    reparticaoId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type GuicheOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "reparticaoId" | "createdAt" | "updatedAt", ExtArgs["result"]["guiche"]>
  export type GuicheInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    senha?: boolean | Guiche$senhaArgs<ExtArgs>
    reparticao?: boolean | ReparticaoDefaultArgs<ExtArgs>
    _count?: boolean | GuicheCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type GuicheIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reparticao?: boolean | ReparticaoDefaultArgs<ExtArgs>
  }
  export type GuicheIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reparticao?: boolean | ReparticaoDefaultArgs<ExtArgs>
  }

  export type $GuichePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Guiche"
    objects: {
      senha: Prisma.$SenhaPayload<ExtArgs>[]
      reparticao: Prisma.$ReparticaoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      reparticaoId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["guiche"]>
    composites: {}
  }

  type GuicheGetPayload<S extends boolean | null | undefined | GuicheDefaultArgs> = $Result.GetResult<Prisma.$GuichePayload, S>

  type GuicheCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GuicheFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GuicheCountAggregateInputType | true
    }

  export interface GuicheDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Guiche'], meta: { name: 'Guiche' } }
    /**
     * Find zero or one Guiche that matches the filter.
     * @param {GuicheFindUniqueArgs} args - Arguments to find a Guiche
     * @example
     * // Get one Guiche
     * const guiche = await prisma.guiche.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GuicheFindUniqueArgs>(args: SelectSubset<T, GuicheFindUniqueArgs<ExtArgs>>): Prisma__GuicheClient<$Result.GetResult<Prisma.$GuichePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Guiche that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GuicheFindUniqueOrThrowArgs} args - Arguments to find a Guiche
     * @example
     * // Get one Guiche
     * const guiche = await prisma.guiche.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GuicheFindUniqueOrThrowArgs>(args: SelectSubset<T, GuicheFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GuicheClient<$Result.GetResult<Prisma.$GuichePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Guiche that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuicheFindFirstArgs} args - Arguments to find a Guiche
     * @example
     * // Get one Guiche
     * const guiche = await prisma.guiche.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GuicheFindFirstArgs>(args?: SelectSubset<T, GuicheFindFirstArgs<ExtArgs>>): Prisma__GuicheClient<$Result.GetResult<Prisma.$GuichePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Guiche that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuicheFindFirstOrThrowArgs} args - Arguments to find a Guiche
     * @example
     * // Get one Guiche
     * const guiche = await prisma.guiche.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GuicheFindFirstOrThrowArgs>(args?: SelectSubset<T, GuicheFindFirstOrThrowArgs<ExtArgs>>): Prisma__GuicheClient<$Result.GetResult<Prisma.$GuichePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Guiches that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuicheFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Guiches
     * const guiches = await prisma.guiche.findMany()
     * 
     * // Get first 10 Guiches
     * const guiches = await prisma.guiche.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const guicheWithIdOnly = await prisma.guiche.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GuicheFindManyArgs>(args?: SelectSubset<T, GuicheFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GuichePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Guiche.
     * @param {GuicheCreateArgs} args - Arguments to create a Guiche.
     * @example
     * // Create one Guiche
     * const Guiche = await prisma.guiche.create({
     *   data: {
     *     // ... data to create a Guiche
     *   }
     * })
     * 
     */
    create<T extends GuicheCreateArgs>(args: SelectSubset<T, GuicheCreateArgs<ExtArgs>>): Prisma__GuicheClient<$Result.GetResult<Prisma.$GuichePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Guiches.
     * @param {GuicheCreateManyArgs} args - Arguments to create many Guiches.
     * @example
     * // Create many Guiches
     * const guiche = await prisma.guiche.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GuicheCreateManyArgs>(args?: SelectSubset<T, GuicheCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Guiches and returns the data saved in the database.
     * @param {GuicheCreateManyAndReturnArgs} args - Arguments to create many Guiches.
     * @example
     * // Create many Guiches
     * const guiche = await prisma.guiche.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Guiches and only return the `id`
     * const guicheWithIdOnly = await prisma.guiche.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GuicheCreateManyAndReturnArgs>(args?: SelectSubset<T, GuicheCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GuichePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Guiche.
     * @param {GuicheDeleteArgs} args - Arguments to delete one Guiche.
     * @example
     * // Delete one Guiche
     * const Guiche = await prisma.guiche.delete({
     *   where: {
     *     // ... filter to delete one Guiche
     *   }
     * })
     * 
     */
    delete<T extends GuicheDeleteArgs>(args: SelectSubset<T, GuicheDeleteArgs<ExtArgs>>): Prisma__GuicheClient<$Result.GetResult<Prisma.$GuichePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Guiche.
     * @param {GuicheUpdateArgs} args - Arguments to update one Guiche.
     * @example
     * // Update one Guiche
     * const guiche = await prisma.guiche.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GuicheUpdateArgs>(args: SelectSubset<T, GuicheUpdateArgs<ExtArgs>>): Prisma__GuicheClient<$Result.GetResult<Prisma.$GuichePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Guiches.
     * @param {GuicheDeleteManyArgs} args - Arguments to filter Guiches to delete.
     * @example
     * // Delete a few Guiches
     * const { count } = await prisma.guiche.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GuicheDeleteManyArgs>(args?: SelectSubset<T, GuicheDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Guiches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuicheUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Guiches
     * const guiche = await prisma.guiche.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GuicheUpdateManyArgs>(args: SelectSubset<T, GuicheUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Guiches and returns the data updated in the database.
     * @param {GuicheUpdateManyAndReturnArgs} args - Arguments to update many Guiches.
     * @example
     * // Update many Guiches
     * const guiche = await prisma.guiche.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Guiches and only return the `id`
     * const guicheWithIdOnly = await prisma.guiche.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends GuicheUpdateManyAndReturnArgs>(args: SelectSubset<T, GuicheUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GuichePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Guiche.
     * @param {GuicheUpsertArgs} args - Arguments to update or create a Guiche.
     * @example
     * // Update or create a Guiche
     * const guiche = await prisma.guiche.upsert({
     *   create: {
     *     // ... data to create a Guiche
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Guiche we want to update
     *   }
     * })
     */
    upsert<T extends GuicheUpsertArgs>(args: SelectSubset<T, GuicheUpsertArgs<ExtArgs>>): Prisma__GuicheClient<$Result.GetResult<Prisma.$GuichePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Guiches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuicheCountArgs} args - Arguments to filter Guiches to count.
     * @example
     * // Count the number of Guiches
     * const count = await prisma.guiche.count({
     *   where: {
     *     // ... the filter for the Guiches we want to count
     *   }
     * })
    **/
    count<T extends GuicheCountArgs>(
      args?: Subset<T, GuicheCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GuicheCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Guiche.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuicheAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GuicheAggregateArgs>(args: Subset<T, GuicheAggregateArgs>): Prisma.PrismaPromise<GetGuicheAggregateType<T>>

    /**
     * Group by Guiche.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuicheGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GuicheGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GuicheGroupByArgs['orderBy'] }
        : { orderBy?: GuicheGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GuicheGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGuicheGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Guiche model
   */
  readonly fields: GuicheFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Guiche.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GuicheClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    senha<T extends Guiche$senhaArgs<ExtArgs> = {}>(args?: Subset<T, Guiche$senhaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SenhaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reparticao<T extends ReparticaoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ReparticaoDefaultArgs<ExtArgs>>): Prisma__ReparticaoClient<$Result.GetResult<Prisma.$ReparticaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Guiche model
   */
  interface GuicheFieldRefs {
    readonly id: FieldRef<"Guiche", 'String'>
    readonly name: FieldRef<"Guiche", 'String'>
    readonly reparticaoId: FieldRef<"Guiche", 'String'>
    readonly createdAt: FieldRef<"Guiche", 'DateTime'>
    readonly updatedAt: FieldRef<"Guiche", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Guiche findUnique
   */
  export type GuicheFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guiche
     */
    select?: GuicheSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guiche
     */
    omit?: GuicheOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuicheInclude<ExtArgs> | null
    /**
     * Filter, which Guiche to fetch.
     */
    where: GuicheWhereUniqueInput
  }

  /**
   * Guiche findUniqueOrThrow
   */
  export type GuicheFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guiche
     */
    select?: GuicheSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guiche
     */
    omit?: GuicheOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuicheInclude<ExtArgs> | null
    /**
     * Filter, which Guiche to fetch.
     */
    where: GuicheWhereUniqueInput
  }

  /**
   * Guiche findFirst
   */
  export type GuicheFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guiche
     */
    select?: GuicheSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guiche
     */
    omit?: GuicheOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuicheInclude<ExtArgs> | null
    /**
     * Filter, which Guiche to fetch.
     */
    where?: GuicheWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Guiches to fetch.
     */
    orderBy?: GuicheOrderByWithRelationInput | GuicheOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Guiches.
     */
    cursor?: GuicheWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Guiches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Guiches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Guiches.
     */
    distinct?: GuicheScalarFieldEnum | GuicheScalarFieldEnum[]
  }

  /**
   * Guiche findFirstOrThrow
   */
  export type GuicheFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guiche
     */
    select?: GuicheSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guiche
     */
    omit?: GuicheOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuicheInclude<ExtArgs> | null
    /**
     * Filter, which Guiche to fetch.
     */
    where?: GuicheWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Guiches to fetch.
     */
    orderBy?: GuicheOrderByWithRelationInput | GuicheOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Guiches.
     */
    cursor?: GuicheWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Guiches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Guiches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Guiches.
     */
    distinct?: GuicheScalarFieldEnum | GuicheScalarFieldEnum[]
  }

  /**
   * Guiche findMany
   */
  export type GuicheFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guiche
     */
    select?: GuicheSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guiche
     */
    omit?: GuicheOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuicheInclude<ExtArgs> | null
    /**
     * Filter, which Guiches to fetch.
     */
    where?: GuicheWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Guiches to fetch.
     */
    orderBy?: GuicheOrderByWithRelationInput | GuicheOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Guiches.
     */
    cursor?: GuicheWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Guiches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Guiches.
     */
    skip?: number
    distinct?: GuicheScalarFieldEnum | GuicheScalarFieldEnum[]
  }

  /**
   * Guiche create
   */
  export type GuicheCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guiche
     */
    select?: GuicheSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guiche
     */
    omit?: GuicheOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuicheInclude<ExtArgs> | null
    /**
     * The data needed to create a Guiche.
     */
    data: XOR<GuicheCreateInput, GuicheUncheckedCreateInput>
  }

  /**
   * Guiche createMany
   */
  export type GuicheCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Guiches.
     */
    data: GuicheCreateManyInput | GuicheCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Guiche createManyAndReturn
   */
  export type GuicheCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guiche
     */
    select?: GuicheSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Guiche
     */
    omit?: GuicheOmit<ExtArgs> | null
    /**
     * The data used to create many Guiches.
     */
    data: GuicheCreateManyInput | GuicheCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuicheIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Guiche update
   */
  export type GuicheUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guiche
     */
    select?: GuicheSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guiche
     */
    omit?: GuicheOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuicheInclude<ExtArgs> | null
    /**
     * The data needed to update a Guiche.
     */
    data: XOR<GuicheUpdateInput, GuicheUncheckedUpdateInput>
    /**
     * Choose, which Guiche to update.
     */
    where: GuicheWhereUniqueInput
  }

  /**
   * Guiche updateMany
   */
  export type GuicheUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Guiches.
     */
    data: XOR<GuicheUpdateManyMutationInput, GuicheUncheckedUpdateManyInput>
    /**
     * Filter which Guiches to update
     */
    where?: GuicheWhereInput
    /**
     * Limit how many Guiches to update.
     */
    limit?: number
  }

  /**
   * Guiche updateManyAndReturn
   */
  export type GuicheUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guiche
     */
    select?: GuicheSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Guiche
     */
    omit?: GuicheOmit<ExtArgs> | null
    /**
     * The data used to update Guiches.
     */
    data: XOR<GuicheUpdateManyMutationInput, GuicheUncheckedUpdateManyInput>
    /**
     * Filter which Guiches to update
     */
    where?: GuicheWhereInput
    /**
     * Limit how many Guiches to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuicheIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Guiche upsert
   */
  export type GuicheUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guiche
     */
    select?: GuicheSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guiche
     */
    omit?: GuicheOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuicheInclude<ExtArgs> | null
    /**
     * The filter to search for the Guiche to update in case it exists.
     */
    where: GuicheWhereUniqueInput
    /**
     * In case the Guiche found by the `where` argument doesn't exist, create a new Guiche with this data.
     */
    create: XOR<GuicheCreateInput, GuicheUncheckedCreateInput>
    /**
     * In case the Guiche was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GuicheUpdateInput, GuicheUncheckedUpdateInput>
  }

  /**
   * Guiche delete
   */
  export type GuicheDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guiche
     */
    select?: GuicheSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guiche
     */
    omit?: GuicheOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuicheInclude<ExtArgs> | null
    /**
     * Filter which Guiche to delete.
     */
    where: GuicheWhereUniqueInput
  }

  /**
   * Guiche deleteMany
   */
  export type GuicheDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Guiches to delete
     */
    where?: GuicheWhereInput
    /**
     * Limit how many Guiches to delete.
     */
    limit?: number
  }

  /**
   * Guiche.senha
   */
  export type Guiche$senhaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Senha
     */
    select?: SenhaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Senha
     */
    omit?: SenhaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SenhaInclude<ExtArgs> | null
    where?: SenhaWhereInput
    orderBy?: SenhaOrderByWithRelationInput | SenhaOrderByWithRelationInput[]
    cursor?: SenhaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SenhaScalarFieldEnum | SenhaScalarFieldEnum[]
  }

  /**
   * Guiche without action
   */
  export type GuicheDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guiche
     */
    select?: GuicheSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guiche
     */
    omit?: GuicheOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuicheInclude<ExtArgs> | null
  }


  /**
   * Model Usuario
   */

  export type AggregateUsuario = {
    _count: UsuarioCountAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  export type UsuarioMinAggregateOutputType = {
    id: string | null
    role: $Enums.Role | null
    name: string | null
    cpf: string | null
    password: string | null
    reparticaoId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UsuarioMaxAggregateOutputType = {
    id: string | null
    role: $Enums.Role | null
    name: string | null
    cpf: string | null
    password: string | null
    reparticaoId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UsuarioCountAggregateOutputType = {
    id: number
    role: number
    name: number
    cpf: number
    password: number
    reparticaoId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UsuarioMinAggregateInputType = {
    id?: true
    role?: true
    name?: true
    cpf?: true
    password?: true
    reparticaoId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UsuarioMaxAggregateInputType = {
    id?: true
    role?: true
    name?: true
    cpf?: true
    password?: true
    reparticaoId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UsuarioCountAggregateInputType = {
    id?: true
    role?: true
    name?: true
    cpf?: true
    password?: true
    reparticaoId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UsuarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuario to aggregate.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Usuarios
    **/
    _count?: true | UsuarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuarioMaxAggregateInputType
  }

  export type GetUsuarioAggregateType<T extends UsuarioAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuario[P]>
      : GetScalarType<T[P], AggregateUsuario[P]>
  }




  export type UsuarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuarioWhereInput
    orderBy?: UsuarioOrderByWithAggregationInput | UsuarioOrderByWithAggregationInput[]
    by: UsuarioScalarFieldEnum[] | UsuarioScalarFieldEnum
    having?: UsuarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuarioCountAggregateInputType | true
    _min?: UsuarioMinAggregateInputType
    _max?: UsuarioMaxAggregateInputType
  }

  export type UsuarioGroupByOutputType = {
    id: string
    role: $Enums.Role
    name: string
    cpf: string
    password: string
    reparticaoId: string
    createdAt: Date
    updatedAt: Date
    _count: UsuarioCountAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  type GetUsuarioGroupByPayload<T extends UsuarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsuarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
            : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
        }
      >
    >


  export type UsuarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    role?: boolean
    name?: boolean
    cpf?: boolean
    password?: boolean
    reparticaoId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    senha?: boolean | Usuario$senhaArgs<ExtArgs>
    reparticao?: boolean | ReparticaoDefaultArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    role?: boolean
    name?: boolean
    cpf?: boolean
    password?: boolean
    reparticaoId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    reparticao?: boolean | ReparticaoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    role?: boolean
    name?: boolean
    cpf?: boolean
    password?: boolean
    reparticaoId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    reparticao?: boolean | ReparticaoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectScalar = {
    id?: boolean
    role?: boolean
    name?: boolean
    cpf?: boolean
    password?: boolean
    reparticaoId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UsuarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "role" | "name" | "cpf" | "password" | "reparticaoId" | "createdAt" | "updatedAt", ExtArgs["result"]["usuario"]>
  export type UsuarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    senha?: boolean | Usuario$senhaArgs<ExtArgs>
    reparticao?: boolean | ReparticaoDefaultArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UsuarioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reparticao?: boolean | ReparticaoDefaultArgs<ExtArgs>
  }
  export type UsuarioIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reparticao?: boolean | ReparticaoDefaultArgs<ExtArgs>
  }

  export type $UsuarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Usuario"
    objects: {
      senha: Prisma.$SenhaPayload<ExtArgs>[]
      reparticao: Prisma.$ReparticaoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      role: $Enums.Role
      name: string
      cpf: string
      password: string
      reparticaoId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["usuario"]>
    composites: {}
  }

  type UsuarioGetPayload<S extends boolean | null | undefined | UsuarioDefaultArgs> = $Result.GetResult<Prisma.$UsuarioPayload, S>

  type UsuarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsuarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsuarioCountAggregateInputType | true
    }

  export interface UsuarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Usuario'], meta: { name: 'Usuario' } }
    /**
     * Find zero or one Usuario that matches the filter.
     * @param {UsuarioFindUniqueArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsuarioFindUniqueArgs>(args: SelectSubset<T, UsuarioFindUniqueArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Usuario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsuarioFindUniqueOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsuarioFindUniqueOrThrowArgs>(args: SelectSubset<T, UsuarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsuarioFindFirstArgs>(args?: SelectSubset<T, UsuarioFindFirstArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsuarioFindFirstOrThrowArgs>(args?: SelectSubset<T, UsuarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuarios
     * const usuarios = await prisma.usuario.findMany()
     * 
     * // Get first 10 Usuarios
     * const usuarios = await prisma.usuario.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usuarioWithIdOnly = await prisma.usuario.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UsuarioFindManyArgs>(args?: SelectSubset<T, UsuarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Usuario.
     * @param {UsuarioCreateArgs} args - Arguments to create a Usuario.
     * @example
     * // Create one Usuario
     * const Usuario = await prisma.usuario.create({
     *   data: {
     *     // ... data to create a Usuario
     *   }
     * })
     * 
     */
    create<T extends UsuarioCreateArgs>(args: SelectSubset<T, UsuarioCreateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Usuarios.
     * @param {UsuarioCreateManyArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsuarioCreateManyArgs>(args?: SelectSubset<T, UsuarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Usuarios and returns the data saved in the database.
     * @param {UsuarioCreateManyAndReturnArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Usuarios and only return the `id`
     * const usuarioWithIdOnly = await prisma.usuario.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UsuarioCreateManyAndReturnArgs>(args?: SelectSubset<T, UsuarioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Usuario.
     * @param {UsuarioDeleteArgs} args - Arguments to delete one Usuario.
     * @example
     * // Delete one Usuario
     * const Usuario = await prisma.usuario.delete({
     *   where: {
     *     // ... filter to delete one Usuario
     *   }
     * })
     * 
     */
    delete<T extends UsuarioDeleteArgs>(args: SelectSubset<T, UsuarioDeleteArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Usuario.
     * @param {UsuarioUpdateArgs} args - Arguments to update one Usuario.
     * @example
     * // Update one Usuario
     * const usuario = await prisma.usuario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsuarioUpdateArgs>(args: SelectSubset<T, UsuarioUpdateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Usuarios.
     * @param {UsuarioDeleteManyArgs} args - Arguments to filter Usuarios to delete.
     * @example
     * // Delete a few Usuarios
     * const { count } = await prisma.usuario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsuarioDeleteManyArgs>(args?: SelectSubset<T, UsuarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsuarioUpdateManyArgs>(args: SelectSubset<T, UsuarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios and returns the data updated in the database.
     * @param {UsuarioUpdateManyAndReturnArgs} args - Arguments to update many Usuarios.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Usuarios and only return the `id`
     * const usuarioWithIdOnly = await prisma.usuario.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UsuarioUpdateManyAndReturnArgs>(args: SelectSubset<T, UsuarioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Usuario.
     * @param {UsuarioUpsertArgs} args - Arguments to update or create a Usuario.
     * @example
     * // Update or create a Usuario
     * const usuario = await prisma.usuario.upsert({
     *   create: {
     *     // ... data to create a Usuario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuario we want to update
     *   }
     * })
     */
    upsert<T extends UsuarioUpsertArgs>(args: SelectSubset<T, UsuarioUpsertArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioCountArgs} args - Arguments to filter Usuarios to count.
     * @example
     * // Count the number of Usuarios
     * const count = await prisma.usuario.count({
     *   where: {
     *     // ... the filter for the Usuarios we want to count
     *   }
     * })
    **/
    count<T extends UsuarioCountArgs>(
      args?: Subset<T, UsuarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsuarioAggregateArgs>(args: Subset<T, UsuarioAggregateArgs>): Prisma.PrismaPromise<GetUsuarioAggregateType<T>>

    /**
     * Group by Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UsuarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsuarioGroupByArgs['orderBy'] }
        : { orderBy?: UsuarioGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UsuarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Usuario model
   */
  readonly fields: UsuarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Usuario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsuarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    senha<T extends Usuario$senhaArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$senhaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SenhaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reparticao<T extends ReparticaoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ReparticaoDefaultArgs<ExtArgs>>): Prisma__ReparticaoClient<$Result.GetResult<Prisma.$ReparticaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Usuario model
   */
  interface UsuarioFieldRefs {
    readonly id: FieldRef<"Usuario", 'String'>
    readonly role: FieldRef<"Usuario", 'Role'>
    readonly name: FieldRef<"Usuario", 'String'>
    readonly cpf: FieldRef<"Usuario", 'String'>
    readonly password: FieldRef<"Usuario", 'String'>
    readonly reparticaoId: FieldRef<"Usuario", 'String'>
    readonly createdAt: FieldRef<"Usuario", 'DateTime'>
    readonly updatedAt: FieldRef<"Usuario", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Usuario findUnique
   */
  export type UsuarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findUniqueOrThrow
   */
  export type UsuarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findFirst
   */
  export type UsuarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findFirstOrThrow
   */
  export type UsuarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findMany
   */
  export type UsuarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuarios to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario create
   */
  export type UsuarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to create a Usuario.
     */
    data: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
  }

  /**
   * Usuario createMany
   */
  export type UsuarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Usuario createManyAndReturn
   */
  export type UsuarioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Usuario update
   */
  export type UsuarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to update a Usuario.
     */
    data: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
    /**
     * Choose, which Usuario to update.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario updateMany
   */
  export type UsuarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
  }

  /**
   * Usuario updateManyAndReturn
   */
  export type UsuarioUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Usuario upsert
   */
  export type UsuarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The filter to search for the Usuario to update in case it exists.
     */
    where: UsuarioWhereUniqueInput
    /**
     * In case the Usuario found by the `where` argument doesn't exist, create a new Usuario with this data.
     */
    create: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
    /**
     * In case the Usuario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
  }

  /**
   * Usuario delete
   */
  export type UsuarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter which Usuario to delete.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario deleteMany
   */
  export type UsuarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuarios to delete
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to delete.
     */
    limit?: number
  }

  /**
   * Usuario.senha
   */
  export type Usuario$senhaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Senha
     */
    select?: SenhaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Senha
     */
    omit?: SenhaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SenhaInclude<ExtArgs> | null
    where?: SenhaWhereInput
    orderBy?: SenhaOrderByWithRelationInput | SenhaOrderByWithRelationInput[]
    cursor?: SenhaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SenhaScalarFieldEnum | SenhaScalarFieldEnum[]
  }

  /**
   * Usuario without action
   */
  export type UsuarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
  }


  /**
   * Model Cidadao
   */

  export type AggregateCidadao = {
    _count: CidadaoCountAggregateOutputType | null
    _min: CidadaoMinAggregateOutputType | null
    _max: CidadaoMaxAggregateOutputType | null
  }

  export type CidadaoMinAggregateOutputType = {
    id: string | null
    name: string | null
    cpf: string | null
    reparticaoId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CidadaoMaxAggregateOutputType = {
    id: string | null
    name: string | null
    cpf: string | null
    reparticaoId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CidadaoCountAggregateOutputType = {
    id: number
    name: number
    cpf: number
    reparticaoId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CidadaoMinAggregateInputType = {
    id?: true
    name?: true
    cpf?: true
    reparticaoId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CidadaoMaxAggregateInputType = {
    id?: true
    name?: true
    cpf?: true
    reparticaoId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CidadaoCountAggregateInputType = {
    id?: true
    name?: true
    cpf?: true
    reparticaoId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CidadaoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cidadao to aggregate.
     */
    where?: CidadaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cidadaos to fetch.
     */
    orderBy?: CidadaoOrderByWithRelationInput | CidadaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CidadaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cidadaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cidadaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Cidadaos
    **/
    _count?: true | CidadaoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CidadaoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CidadaoMaxAggregateInputType
  }

  export type GetCidadaoAggregateType<T extends CidadaoAggregateArgs> = {
        [P in keyof T & keyof AggregateCidadao]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCidadao[P]>
      : GetScalarType<T[P], AggregateCidadao[P]>
  }




  export type CidadaoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CidadaoWhereInput
    orderBy?: CidadaoOrderByWithAggregationInput | CidadaoOrderByWithAggregationInput[]
    by: CidadaoScalarFieldEnum[] | CidadaoScalarFieldEnum
    having?: CidadaoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CidadaoCountAggregateInputType | true
    _min?: CidadaoMinAggregateInputType
    _max?: CidadaoMaxAggregateInputType
  }

  export type CidadaoGroupByOutputType = {
    id: string
    name: string
    cpf: string
    reparticaoId: string
    createdAt: Date
    updatedAt: Date
    _count: CidadaoCountAggregateOutputType | null
    _min: CidadaoMinAggregateOutputType | null
    _max: CidadaoMaxAggregateOutputType | null
  }

  type GetCidadaoGroupByPayload<T extends CidadaoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CidadaoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CidadaoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CidadaoGroupByOutputType[P]>
            : GetScalarType<T[P], CidadaoGroupByOutputType[P]>
        }
      >
    >


  export type CidadaoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    cpf?: boolean
    reparticaoId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    reparticao?: boolean | ReparticaoDefaultArgs<ExtArgs>
    senha?: boolean | Cidadao$senhaArgs<ExtArgs>
    _count?: boolean | CidadaoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cidadao"]>

  export type CidadaoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    cpf?: boolean
    reparticaoId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    reparticao?: boolean | ReparticaoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cidadao"]>

  export type CidadaoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    cpf?: boolean
    reparticaoId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    reparticao?: boolean | ReparticaoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cidadao"]>

  export type CidadaoSelectScalar = {
    id?: boolean
    name?: boolean
    cpf?: boolean
    reparticaoId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CidadaoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "cpf" | "reparticaoId" | "createdAt" | "updatedAt", ExtArgs["result"]["cidadao"]>
  export type CidadaoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reparticao?: boolean | ReparticaoDefaultArgs<ExtArgs>
    senha?: boolean | Cidadao$senhaArgs<ExtArgs>
    _count?: boolean | CidadaoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CidadaoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reparticao?: boolean | ReparticaoDefaultArgs<ExtArgs>
  }
  export type CidadaoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reparticao?: boolean | ReparticaoDefaultArgs<ExtArgs>
  }

  export type $CidadaoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Cidadao"
    objects: {
      reparticao: Prisma.$ReparticaoPayload<ExtArgs>
      senha: Prisma.$SenhaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      cpf: string
      reparticaoId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["cidadao"]>
    composites: {}
  }

  type CidadaoGetPayload<S extends boolean | null | undefined | CidadaoDefaultArgs> = $Result.GetResult<Prisma.$CidadaoPayload, S>

  type CidadaoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CidadaoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CidadaoCountAggregateInputType | true
    }

  export interface CidadaoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Cidadao'], meta: { name: 'Cidadao' } }
    /**
     * Find zero or one Cidadao that matches the filter.
     * @param {CidadaoFindUniqueArgs} args - Arguments to find a Cidadao
     * @example
     * // Get one Cidadao
     * const cidadao = await prisma.cidadao.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CidadaoFindUniqueArgs>(args: SelectSubset<T, CidadaoFindUniqueArgs<ExtArgs>>): Prisma__CidadaoClient<$Result.GetResult<Prisma.$CidadaoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Cidadao that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CidadaoFindUniqueOrThrowArgs} args - Arguments to find a Cidadao
     * @example
     * // Get one Cidadao
     * const cidadao = await prisma.cidadao.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CidadaoFindUniqueOrThrowArgs>(args: SelectSubset<T, CidadaoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CidadaoClient<$Result.GetResult<Prisma.$CidadaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cidadao that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CidadaoFindFirstArgs} args - Arguments to find a Cidadao
     * @example
     * // Get one Cidadao
     * const cidadao = await prisma.cidadao.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CidadaoFindFirstArgs>(args?: SelectSubset<T, CidadaoFindFirstArgs<ExtArgs>>): Prisma__CidadaoClient<$Result.GetResult<Prisma.$CidadaoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cidadao that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CidadaoFindFirstOrThrowArgs} args - Arguments to find a Cidadao
     * @example
     * // Get one Cidadao
     * const cidadao = await prisma.cidadao.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CidadaoFindFirstOrThrowArgs>(args?: SelectSubset<T, CidadaoFindFirstOrThrowArgs<ExtArgs>>): Prisma__CidadaoClient<$Result.GetResult<Prisma.$CidadaoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Cidadaos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CidadaoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cidadaos
     * const cidadaos = await prisma.cidadao.findMany()
     * 
     * // Get first 10 Cidadaos
     * const cidadaos = await prisma.cidadao.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cidadaoWithIdOnly = await prisma.cidadao.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CidadaoFindManyArgs>(args?: SelectSubset<T, CidadaoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CidadaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Cidadao.
     * @param {CidadaoCreateArgs} args - Arguments to create a Cidadao.
     * @example
     * // Create one Cidadao
     * const Cidadao = await prisma.cidadao.create({
     *   data: {
     *     // ... data to create a Cidadao
     *   }
     * })
     * 
     */
    create<T extends CidadaoCreateArgs>(args: SelectSubset<T, CidadaoCreateArgs<ExtArgs>>): Prisma__CidadaoClient<$Result.GetResult<Prisma.$CidadaoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Cidadaos.
     * @param {CidadaoCreateManyArgs} args - Arguments to create many Cidadaos.
     * @example
     * // Create many Cidadaos
     * const cidadao = await prisma.cidadao.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CidadaoCreateManyArgs>(args?: SelectSubset<T, CidadaoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Cidadaos and returns the data saved in the database.
     * @param {CidadaoCreateManyAndReturnArgs} args - Arguments to create many Cidadaos.
     * @example
     * // Create many Cidadaos
     * const cidadao = await prisma.cidadao.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Cidadaos and only return the `id`
     * const cidadaoWithIdOnly = await prisma.cidadao.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CidadaoCreateManyAndReturnArgs>(args?: SelectSubset<T, CidadaoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CidadaoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Cidadao.
     * @param {CidadaoDeleteArgs} args - Arguments to delete one Cidadao.
     * @example
     * // Delete one Cidadao
     * const Cidadao = await prisma.cidadao.delete({
     *   where: {
     *     // ... filter to delete one Cidadao
     *   }
     * })
     * 
     */
    delete<T extends CidadaoDeleteArgs>(args: SelectSubset<T, CidadaoDeleteArgs<ExtArgs>>): Prisma__CidadaoClient<$Result.GetResult<Prisma.$CidadaoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Cidadao.
     * @param {CidadaoUpdateArgs} args - Arguments to update one Cidadao.
     * @example
     * // Update one Cidadao
     * const cidadao = await prisma.cidadao.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CidadaoUpdateArgs>(args: SelectSubset<T, CidadaoUpdateArgs<ExtArgs>>): Prisma__CidadaoClient<$Result.GetResult<Prisma.$CidadaoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Cidadaos.
     * @param {CidadaoDeleteManyArgs} args - Arguments to filter Cidadaos to delete.
     * @example
     * // Delete a few Cidadaos
     * const { count } = await prisma.cidadao.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CidadaoDeleteManyArgs>(args?: SelectSubset<T, CidadaoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cidadaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CidadaoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cidadaos
     * const cidadao = await prisma.cidadao.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CidadaoUpdateManyArgs>(args: SelectSubset<T, CidadaoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cidadaos and returns the data updated in the database.
     * @param {CidadaoUpdateManyAndReturnArgs} args - Arguments to update many Cidadaos.
     * @example
     * // Update many Cidadaos
     * const cidadao = await prisma.cidadao.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Cidadaos and only return the `id`
     * const cidadaoWithIdOnly = await prisma.cidadao.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CidadaoUpdateManyAndReturnArgs>(args: SelectSubset<T, CidadaoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CidadaoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Cidadao.
     * @param {CidadaoUpsertArgs} args - Arguments to update or create a Cidadao.
     * @example
     * // Update or create a Cidadao
     * const cidadao = await prisma.cidadao.upsert({
     *   create: {
     *     // ... data to create a Cidadao
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cidadao we want to update
     *   }
     * })
     */
    upsert<T extends CidadaoUpsertArgs>(args: SelectSubset<T, CidadaoUpsertArgs<ExtArgs>>): Prisma__CidadaoClient<$Result.GetResult<Prisma.$CidadaoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Cidadaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CidadaoCountArgs} args - Arguments to filter Cidadaos to count.
     * @example
     * // Count the number of Cidadaos
     * const count = await prisma.cidadao.count({
     *   where: {
     *     // ... the filter for the Cidadaos we want to count
     *   }
     * })
    **/
    count<T extends CidadaoCountArgs>(
      args?: Subset<T, CidadaoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CidadaoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cidadao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CidadaoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CidadaoAggregateArgs>(args: Subset<T, CidadaoAggregateArgs>): Prisma.PrismaPromise<GetCidadaoAggregateType<T>>

    /**
     * Group by Cidadao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CidadaoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CidadaoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CidadaoGroupByArgs['orderBy'] }
        : { orderBy?: CidadaoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CidadaoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCidadaoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Cidadao model
   */
  readonly fields: CidadaoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Cidadao.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CidadaoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    reparticao<T extends ReparticaoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ReparticaoDefaultArgs<ExtArgs>>): Prisma__ReparticaoClient<$Result.GetResult<Prisma.$ReparticaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    senha<T extends Cidadao$senhaArgs<ExtArgs> = {}>(args?: Subset<T, Cidadao$senhaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SenhaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Cidadao model
   */
  interface CidadaoFieldRefs {
    readonly id: FieldRef<"Cidadao", 'String'>
    readonly name: FieldRef<"Cidadao", 'String'>
    readonly cpf: FieldRef<"Cidadao", 'String'>
    readonly reparticaoId: FieldRef<"Cidadao", 'String'>
    readonly createdAt: FieldRef<"Cidadao", 'DateTime'>
    readonly updatedAt: FieldRef<"Cidadao", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Cidadao findUnique
   */
  export type CidadaoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cidadao
     */
    select?: CidadaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cidadao
     */
    omit?: CidadaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CidadaoInclude<ExtArgs> | null
    /**
     * Filter, which Cidadao to fetch.
     */
    where: CidadaoWhereUniqueInput
  }

  /**
   * Cidadao findUniqueOrThrow
   */
  export type CidadaoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cidadao
     */
    select?: CidadaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cidadao
     */
    omit?: CidadaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CidadaoInclude<ExtArgs> | null
    /**
     * Filter, which Cidadao to fetch.
     */
    where: CidadaoWhereUniqueInput
  }

  /**
   * Cidadao findFirst
   */
  export type CidadaoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cidadao
     */
    select?: CidadaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cidadao
     */
    omit?: CidadaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CidadaoInclude<ExtArgs> | null
    /**
     * Filter, which Cidadao to fetch.
     */
    where?: CidadaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cidadaos to fetch.
     */
    orderBy?: CidadaoOrderByWithRelationInput | CidadaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cidadaos.
     */
    cursor?: CidadaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cidadaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cidadaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cidadaos.
     */
    distinct?: CidadaoScalarFieldEnum | CidadaoScalarFieldEnum[]
  }

  /**
   * Cidadao findFirstOrThrow
   */
  export type CidadaoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cidadao
     */
    select?: CidadaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cidadao
     */
    omit?: CidadaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CidadaoInclude<ExtArgs> | null
    /**
     * Filter, which Cidadao to fetch.
     */
    where?: CidadaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cidadaos to fetch.
     */
    orderBy?: CidadaoOrderByWithRelationInput | CidadaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cidadaos.
     */
    cursor?: CidadaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cidadaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cidadaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cidadaos.
     */
    distinct?: CidadaoScalarFieldEnum | CidadaoScalarFieldEnum[]
  }

  /**
   * Cidadao findMany
   */
  export type CidadaoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cidadao
     */
    select?: CidadaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cidadao
     */
    omit?: CidadaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CidadaoInclude<ExtArgs> | null
    /**
     * Filter, which Cidadaos to fetch.
     */
    where?: CidadaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cidadaos to fetch.
     */
    orderBy?: CidadaoOrderByWithRelationInput | CidadaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Cidadaos.
     */
    cursor?: CidadaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cidadaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cidadaos.
     */
    skip?: number
    distinct?: CidadaoScalarFieldEnum | CidadaoScalarFieldEnum[]
  }

  /**
   * Cidadao create
   */
  export type CidadaoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cidadao
     */
    select?: CidadaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cidadao
     */
    omit?: CidadaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CidadaoInclude<ExtArgs> | null
    /**
     * The data needed to create a Cidadao.
     */
    data: XOR<CidadaoCreateInput, CidadaoUncheckedCreateInput>
  }

  /**
   * Cidadao createMany
   */
  export type CidadaoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Cidadaos.
     */
    data: CidadaoCreateManyInput | CidadaoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Cidadao createManyAndReturn
   */
  export type CidadaoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cidadao
     */
    select?: CidadaoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Cidadao
     */
    omit?: CidadaoOmit<ExtArgs> | null
    /**
     * The data used to create many Cidadaos.
     */
    data: CidadaoCreateManyInput | CidadaoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CidadaoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Cidadao update
   */
  export type CidadaoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cidadao
     */
    select?: CidadaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cidadao
     */
    omit?: CidadaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CidadaoInclude<ExtArgs> | null
    /**
     * The data needed to update a Cidadao.
     */
    data: XOR<CidadaoUpdateInput, CidadaoUncheckedUpdateInput>
    /**
     * Choose, which Cidadao to update.
     */
    where: CidadaoWhereUniqueInput
  }

  /**
   * Cidadao updateMany
   */
  export type CidadaoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Cidadaos.
     */
    data: XOR<CidadaoUpdateManyMutationInput, CidadaoUncheckedUpdateManyInput>
    /**
     * Filter which Cidadaos to update
     */
    where?: CidadaoWhereInput
    /**
     * Limit how many Cidadaos to update.
     */
    limit?: number
  }

  /**
   * Cidadao updateManyAndReturn
   */
  export type CidadaoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cidadao
     */
    select?: CidadaoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Cidadao
     */
    omit?: CidadaoOmit<ExtArgs> | null
    /**
     * The data used to update Cidadaos.
     */
    data: XOR<CidadaoUpdateManyMutationInput, CidadaoUncheckedUpdateManyInput>
    /**
     * Filter which Cidadaos to update
     */
    where?: CidadaoWhereInput
    /**
     * Limit how many Cidadaos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CidadaoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Cidadao upsert
   */
  export type CidadaoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cidadao
     */
    select?: CidadaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cidadao
     */
    omit?: CidadaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CidadaoInclude<ExtArgs> | null
    /**
     * The filter to search for the Cidadao to update in case it exists.
     */
    where: CidadaoWhereUniqueInput
    /**
     * In case the Cidadao found by the `where` argument doesn't exist, create a new Cidadao with this data.
     */
    create: XOR<CidadaoCreateInput, CidadaoUncheckedCreateInput>
    /**
     * In case the Cidadao was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CidadaoUpdateInput, CidadaoUncheckedUpdateInput>
  }

  /**
   * Cidadao delete
   */
  export type CidadaoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cidadao
     */
    select?: CidadaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cidadao
     */
    omit?: CidadaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CidadaoInclude<ExtArgs> | null
    /**
     * Filter which Cidadao to delete.
     */
    where: CidadaoWhereUniqueInput
  }

  /**
   * Cidadao deleteMany
   */
  export type CidadaoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cidadaos to delete
     */
    where?: CidadaoWhereInput
    /**
     * Limit how many Cidadaos to delete.
     */
    limit?: number
  }

  /**
   * Cidadao.senha
   */
  export type Cidadao$senhaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Senha
     */
    select?: SenhaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Senha
     */
    omit?: SenhaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SenhaInclude<ExtArgs> | null
    where?: SenhaWhereInput
    orderBy?: SenhaOrderByWithRelationInput | SenhaOrderByWithRelationInput[]
    cursor?: SenhaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SenhaScalarFieldEnum | SenhaScalarFieldEnum[]
  }

  /**
   * Cidadao without action
   */
  export type CidadaoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cidadao
     */
    select?: CidadaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cidadao
     */
    omit?: CidadaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CidadaoInclude<ExtArgs> | null
  }


  /**
   * Model Servico
   */

  export type AggregateServico = {
    _count: ServicoCountAggregateOutputType | null
    _min: ServicoMinAggregateOutputType | null
    _max: ServicoMaxAggregateOutputType | null
  }

  export type ServicoMinAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    createdAt: Date | null
    updatedAt: Date | null
    reparticaoId: string | null
  }

  export type ServicoMaxAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    createdAt: Date | null
    updatedAt: Date | null
    reparticaoId: string | null
  }

  export type ServicoCountAggregateOutputType = {
    id: number
    name: number
    slug: number
    createdAt: number
    updatedAt: number
    reparticaoId: number
    _all: number
  }


  export type ServicoMinAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    createdAt?: true
    updatedAt?: true
    reparticaoId?: true
  }

  export type ServicoMaxAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    createdAt?: true
    updatedAt?: true
    reparticaoId?: true
  }

  export type ServicoCountAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    createdAt?: true
    updatedAt?: true
    reparticaoId?: true
    _all?: true
  }

  export type ServicoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Servico to aggregate.
     */
    where?: ServicoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Servicos to fetch.
     */
    orderBy?: ServicoOrderByWithRelationInput | ServicoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ServicoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Servicos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Servicos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Servicos
    **/
    _count?: true | ServicoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ServicoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ServicoMaxAggregateInputType
  }

  export type GetServicoAggregateType<T extends ServicoAggregateArgs> = {
        [P in keyof T & keyof AggregateServico]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateServico[P]>
      : GetScalarType<T[P], AggregateServico[P]>
  }




  export type ServicoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServicoWhereInput
    orderBy?: ServicoOrderByWithAggregationInput | ServicoOrderByWithAggregationInput[]
    by: ServicoScalarFieldEnum[] | ServicoScalarFieldEnum
    having?: ServicoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ServicoCountAggregateInputType | true
    _min?: ServicoMinAggregateInputType
    _max?: ServicoMaxAggregateInputType
  }

  export type ServicoGroupByOutputType = {
    id: string
    name: string
    slug: string
    createdAt: Date
    updatedAt: Date
    reparticaoId: string
    _count: ServicoCountAggregateOutputType | null
    _min: ServicoMinAggregateOutputType | null
    _max: ServicoMaxAggregateOutputType | null
  }

  type GetServicoGroupByPayload<T extends ServicoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ServicoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ServicoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ServicoGroupByOutputType[P]>
            : GetScalarType<T[P], ServicoGroupByOutputType[P]>
        }
      >
    >


  export type ServicoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    reparticaoId?: boolean
    senha?: boolean | Servico$senhaArgs<ExtArgs>
    contador?: boolean | Servico$contadorArgs<ExtArgs>
    reparticao?: boolean | ReparticaoDefaultArgs<ExtArgs>
    _count?: boolean | ServicoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["servico"]>

  export type ServicoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    reparticaoId?: boolean
    reparticao?: boolean | ReparticaoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["servico"]>

  export type ServicoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    reparticaoId?: boolean
    reparticao?: boolean | ReparticaoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["servico"]>

  export type ServicoSelectScalar = {
    id?: boolean
    name?: boolean
    slug?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    reparticaoId?: boolean
  }

  export type ServicoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "slug" | "createdAt" | "updatedAt" | "reparticaoId", ExtArgs["result"]["servico"]>
  export type ServicoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    senha?: boolean | Servico$senhaArgs<ExtArgs>
    contador?: boolean | Servico$contadorArgs<ExtArgs>
    reparticao?: boolean | ReparticaoDefaultArgs<ExtArgs>
    _count?: boolean | ServicoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ServicoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reparticao?: boolean | ReparticaoDefaultArgs<ExtArgs>
  }
  export type ServicoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reparticao?: boolean | ReparticaoDefaultArgs<ExtArgs>
  }

  export type $ServicoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Servico"
    objects: {
      senha: Prisma.$SenhaPayload<ExtArgs>[]
      contador: Prisma.$ContadorPrioridadePayload<ExtArgs>[]
      reparticao: Prisma.$ReparticaoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      slug: string
      createdAt: Date
      updatedAt: Date
      reparticaoId: string
    }, ExtArgs["result"]["servico"]>
    composites: {}
  }

  type ServicoGetPayload<S extends boolean | null | undefined | ServicoDefaultArgs> = $Result.GetResult<Prisma.$ServicoPayload, S>

  type ServicoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ServicoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ServicoCountAggregateInputType | true
    }

  export interface ServicoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Servico'], meta: { name: 'Servico' } }
    /**
     * Find zero or one Servico that matches the filter.
     * @param {ServicoFindUniqueArgs} args - Arguments to find a Servico
     * @example
     * // Get one Servico
     * const servico = await prisma.servico.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ServicoFindUniqueArgs>(args: SelectSubset<T, ServicoFindUniqueArgs<ExtArgs>>): Prisma__ServicoClient<$Result.GetResult<Prisma.$ServicoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Servico that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ServicoFindUniqueOrThrowArgs} args - Arguments to find a Servico
     * @example
     * // Get one Servico
     * const servico = await prisma.servico.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ServicoFindUniqueOrThrowArgs>(args: SelectSubset<T, ServicoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ServicoClient<$Result.GetResult<Prisma.$ServicoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Servico that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicoFindFirstArgs} args - Arguments to find a Servico
     * @example
     * // Get one Servico
     * const servico = await prisma.servico.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ServicoFindFirstArgs>(args?: SelectSubset<T, ServicoFindFirstArgs<ExtArgs>>): Prisma__ServicoClient<$Result.GetResult<Prisma.$ServicoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Servico that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicoFindFirstOrThrowArgs} args - Arguments to find a Servico
     * @example
     * // Get one Servico
     * const servico = await prisma.servico.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ServicoFindFirstOrThrowArgs>(args?: SelectSubset<T, ServicoFindFirstOrThrowArgs<ExtArgs>>): Prisma__ServicoClient<$Result.GetResult<Prisma.$ServicoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Servicos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Servicos
     * const servicos = await prisma.servico.findMany()
     * 
     * // Get first 10 Servicos
     * const servicos = await prisma.servico.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const servicoWithIdOnly = await prisma.servico.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ServicoFindManyArgs>(args?: SelectSubset<T, ServicoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Servico.
     * @param {ServicoCreateArgs} args - Arguments to create a Servico.
     * @example
     * // Create one Servico
     * const Servico = await prisma.servico.create({
     *   data: {
     *     // ... data to create a Servico
     *   }
     * })
     * 
     */
    create<T extends ServicoCreateArgs>(args: SelectSubset<T, ServicoCreateArgs<ExtArgs>>): Prisma__ServicoClient<$Result.GetResult<Prisma.$ServicoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Servicos.
     * @param {ServicoCreateManyArgs} args - Arguments to create many Servicos.
     * @example
     * // Create many Servicos
     * const servico = await prisma.servico.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ServicoCreateManyArgs>(args?: SelectSubset<T, ServicoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Servicos and returns the data saved in the database.
     * @param {ServicoCreateManyAndReturnArgs} args - Arguments to create many Servicos.
     * @example
     * // Create many Servicos
     * const servico = await prisma.servico.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Servicos and only return the `id`
     * const servicoWithIdOnly = await prisma.servico.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ServicoCreateManyAndReturnArgs>(args?: SelectSubset<T, ServicoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Servico.
     * @param {ServicoDeleteArgs} args - Arguments to delete one Servico.
     * @example
     * // Delete one Servico
     * const Servico = await prisma.servico.delete({
     *   where: {
     *     // ... filter to delete one Servico
     *   }
     * })
     * 
     */
    delete<T extends ServicoDeleteArgs>(args: SelectSubset<T, ServicoDeleteArgs<ExtArgs>>): Prisma__ServicoClient<$Result.GetResult<Prisma.$ServicoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Servico.
     * @param {ServicoUpdateArgs} args - Arguments to update one Servico.
     * @example
     * // Update one Servico
     * const servico = await prisma.servico.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ServicoUpdateArgs>(args: SelectSubset<T, ServicoUpdateArgs<ExtArgs>>): Prisma__ServicoClient<$Result.GetResult<Prisma.$ServicoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Servicos.
     * @param {ServicoDeleteManyArgs} args - Arguments to filter Servicos to delete.
     * @example
     * // Delete a few Servicos
     * const { count } = await prisma.servico.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ServicoDeleteManyArgs>(args?: SelectSubset<T, ServicoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Servicos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Servicos
     * const servico = await prisma.servico.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ServicoUpdateManyArgs>(args: SelectSubset<T, ServicoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Servicos and returns the data updated in the database.
     * @param {ServicoUpdateManyAndReturnArgs} args - Arguments to update many Servicos.
     * @example
     * // Update many Servicos
     * const servico = await prisma.servico.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Servicos and only return the `id`
     * const servicoWithIdOnly = await prisma.servico.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ServicoUpdateManyAndReturnArgs>(args: SelectSubset<T, ServicoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Servico.
     * @param {ServicoUpsertArgs} args - Arguments to update or create a Servico.
     * @example
     * // Update or create a Servico
     * const servico = await prisma.servico.upsert({
     *   create: {
     *     // ... data to create a Servico
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Servico we want to update
     *   }
     * })
     */
    upsert<T extends ServicoUpsertArgs>(args: SelectSubset<T, ServicoUpsertArgs<ExtArgs>>): Prisma__ServicoClient<$Result.GetResult<Prisma.$ServicoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Servicos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicoCountArgs} args - Arguments to filter Servicos to count.
     * @example
     * // Count the number of Servicos
     * const count = await prisma.servico.count({
     *   where: {
     *     // ... the filter for the Servicos we want to count
     *   }
     * })
    **/
    count<T extends ServicoCountArgs>(
      args?: Subset<T, ServicoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ServicoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Servico.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ServicoAggregateArgs>(args: Subset<T, ServicoAggregateArgs>): Prisma.PrismaPromise<GetServicoAggregateType<T>>

    /**
     * Group by Servico.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ServicoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ServicoGroupByArgs['orderBy'] }
        : { orderBy?: ServicoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ServicoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetServicoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Servico model
   */
  readonly fields: ServicoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Servico.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ServicoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    senha<T extends Servico$senhaArgs<ExtArgs> = {}>(args?: Subset<T, Servico$senhaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SenhaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    contador<T extends Servico$contadorArgs<ExtArgs> = {}>(args?: Subset<T, Servico$contadorArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContadorPrioridadePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reparticao<T extends ReparticaoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ReparticaoDefaultArgs<ExtArgs>>): Prisma__ReparticaoClient<$Result.GetResult<Prisma.$ReparticaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Servico model
   */
  interface ServicoFieldRefs {
    readonly id: FieldRef<"Servico", 'String'>
    readonly name: FieldRef<"Servico", 'String'>
    readonly slug: FieldRef<"Servico", 'String'>
    readonly createdAt: FieldRef<"Servico", 'DateTime'>
    readonly updatedAt: FieldRef<"Servico", 'DateTime'>
    readonly reparticaoId: FieldRef<"Servico", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Servico findUnique
   */
  export type ServicoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Servico
     */
    select?: ServicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Servico
     */
    omit?: ServicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicoInclude<ExtArgs> | null
    /**
     * Filter, which Servico to fetch.
     */
    where: ServicoWhereUniqueInput
  }

  /**
   * Servico findUniqueOrThrow
   */
  export type ServicoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Servico
     */
    select?: ServicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Servico
     */
    omit?: ServicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicoInclude<ExtArgs> | null
    /**
     * Filter, which Servico to fetch.
     */
    where: ServicoWhereUniqueInput
  }

  /**
   * Servico findFirst
   */
  export type ServicoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Servico
     */
    select?: ServicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Servico
     */
    omit?: ServicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicoInclude<ExtArgs> | null
    /**
     * Filter, which Servico to fetch.
     */
    where?: ServicoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Servicos to fetch.
     */
    orderBy?: ServicoOrderByWithRelationInput | ServicoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Servicos.
     */
    cursor?: ServicoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Servicos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Servicos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Servicos.
     */
    distinct?: ServicoScalarFieldEnum | ServicoScalarFieldEnum[]
  }

  /**
   * Servico findFirstOrThrow
   */
  export type ServicoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Servico
     */
    select?: ServicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Servico
     */
    omit?: ServicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicoInclude<ExtArgs> | null
    /**
     * Filter, which Servico to fetch.
     */
    where?: ServicoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Servicos to fetch.
     */
    orderBy?: ServicoOrderByWithRelationInput | ServicoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Servicos.
     */
    cursor?: ServicoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Servicos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Servicos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Servicos.
     */
    distinct?: ServicoScalarFieldEnum | ServicoScalarFieldEnum[]
  }

  /**
   * Servico findMany
   */
  export type ServicoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Servico
     */
    select?: ServicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Servico
     */
    omit?: ServicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicoInclude<ExtArgs> | null
    /**
     * Filter, which Servicos to fetch.
     */
    where?: ServicoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Servicos to fetch.
     */
    orderBy?: ServicoOrderByWithRelationInput | ServicoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Servicos.
     */
    cursor?: ServicoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Servicos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Servicos.
     */
    skip?: number
    distinct?: ServicoScalarFieldEnum | ServicoScalarFieldEnum[]
  }

  /**
   * Servico create
   */
  export type ServicoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Servico
     */
    select?: ServicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Servico
     */
    omit?: ServicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicoInclude<ExtArgs> | null
    /**
     * The data needed to create a Servico.
     */
    data: XOR<ServicoCreateInput, ServicoUncheckedCreateInput>
  }

  /**
   * Servico createMany
   */
  export type ServicoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Servicos.
     */
    data: ServicoCreateManyInput | ServicoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Servico createManyAndReturn
   */
  export type ServicoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Servico
     */
    select?: ServicoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Servico
     */
    omit?: ServicoOmit<ExtArgs> | null
    /**
     * The data used to create many Servicos.
     */
    data: ServicoCreateManyInput | ServicoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Servico update
   */
  export type ServicoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Servico
     */
    select?: ServicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Servico
     */
    omit?: ServicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicoInclude<ExtArgs> | null
    /**
     * The data needed to update a Servico.
     */
    data: XOR<ServicoUpdateInput, ServicoUncheckedUpdateInput>
    /**
     * Choose, which Servico to update.
     */
    where: ServicoWhereUniqueInput
  }

  /**
   * Servico updateMany
   */
  export type ServicoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Servicos.
     */
    data: XOR<ServicoUpdateManyMutationInput, ServicoUncheckedUpdateManyInput>
    /**
     * Filter which Servicos to update
     */
    where?: ServicoWhereInput
    /**
     * Limit how many Servicos to update.
     */
    limit?: number
  }

  /**
   * Servico updateManyAndReturn
   */
  export type ServicoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Servico
     */
    select?: ServicoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Servico
     */
    omit?: ServicoOmit<ExtArgs> | null
    /**
     * The data used to update Servicos.
     */
    data: XOR<ServicoUpdateManyMutationInput, ServicoUncheckedUpdateManyInput>
    /**
     * Filter which Servicos to update
     */
    where?: ServicoWhereInput
    /**
     * Limit how many Servicos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Servico upsert
   */
  export type ServicoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Servico
     */
    select?: ServicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Servico
     */
    omit?: ServicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicoInclude<ExtArgs> | null
    /**
     * The filter to search for the Servico to update in case it exists.
     */
    where: ServicoWhereUniqueInput
    /**
     * In case the Servico found by the `where` argument doesn't exist, create a new Servico with this data.
     */
    create: XOR<ServicoCreateInput, ServicoUncheckedCreateInput>
    /**
     * In case the Servico was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ServicoUpdateInput, ServicoUncheckedUpdateInput>
  }

  /**
   * Servico delete
   */
  export type ServicoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Servico
     */
    select?: ServicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Servico
     */
    omit?: ServicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicoInclude<ExtArgs> | null
    /**
     * Filter which Servico to delete.
     */
    where: ServicoWhereUniqueInput
  }

  /**
   * Servico deleteMany
   */
  export type ServicoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Servicos to delete
     */
    where?: ServicoWhereInput
    /**
     * Limit how many Servicos to delete.
     */
    limit?: number
  }

  /**
   * Servico.senha
   */
  export type Servico$senhaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Senha
     */
    select?: SenhaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Senha
     */
    omit?: SenhaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SenhaInclude<ExtArgs> | null
    where?: SenhaWhereInput
    orderBy?: SenhaOrderByWithRelationInput | SenhaOrderByWithRelationInput[]
    cursor?: SenhaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SenhaScalarFieldEnum | SenhaScalarFieldEnum[]
  }

  /**
   * Servico.contador
   */
  export type Servico$contadorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContadorPrioridade
     */
    select?: ContadorPrioridadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContadorPrioridade
     */
    omit?: ContadorPrioridadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContadorPrioridadeInclude<ExtArgs> | null
    where?: ContadorPrioridadeWhereInput
    orderBy?: ContadorPrioridadeOrderByWithRelationInput | ContadorPrioridadeOrderByWithRelationInput[]
    cursor?: ContadorPrioridadeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ContadorPrioridadeScalarFieldEnum | ContadorPrioridadeScalarFieldEnum[]
  }

  /**
   * Servico without action
   */
  export type ServicoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Servico
     */
    select?: ServicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Servico
     */
    omit?: ServicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicoInclude<ExtArgs> | null
  }


  /**
   * Model Senha
   */

  export type AggregateSenha = {
    _count: SenhaCountAggregateOutputType | null
    _avg: SenhaAvgAggregateOutputType | null
    _sum: SenhaSumAggregateOutputType | null
    _min: SenhaMinAggregateOutputType | null
    _max: SenhaMaxAggregateOutputType | null
  }

  export type SenhaAvgAggregateOutputType = {
    id: number | null
    numeroOrdem: number | null
  }

  export type SenhaSumAggregateOutputType = {
    id: number | null
    numeroOrdem: number | null
  }

  export type SenhaMinAggregateOutputType = {
    id: number | null
    senha: string | null
    numeroOrdem: number | null
    prioridade: $Enums.Prioridades | null
    status: $Enums.SenhaStatus | null
    guicheId: string | null
    usuarioId: string | null
    servicoId: string | null
    cidadaoId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SenhaMaxAggregateOutputType = {
    id: number | null
    senha: string | null
    numeroOrdem: number | null
    prioridade: $Enums.Prioridades | null
    status: $Enums.SenhaStatus | null
    guicheId: string | null
    usuarioId: string | null
    servicoId: string | null
    cidadaoId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SenhaCountAggregateOutputType = {
    id: number
    senha: number
    numeroOrdem: number
    prioridade: number
    status: number
    guicheId: number
    usuarioId: number
    servicoId: number
    cidadaoId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SenhaAvgAggregateInputType = {
    id?: true
    numeroOrdem?: true
  }

  export type SenhaSumAggregateInputType = {
    id?: true
    numeroOrdem?: true
  }

  export type SenhaMinAggregateInputType = {
    id?: true
    senha?: true
    numeroOrdem?: true
    prioridade?: true
    status?: true
    guicheId?: true
    usuarioId?: true
    servicoId?: true
    cidadaoId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SenhaMaxAggregateInputType = {
    id?: true
    senha?: true
    numeroOrdem?: true
    prioridade?: true
    status?: true
    guicheId?: true
    usuarioId?: true
    servicoId?: true
    cidadaoId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SenhaCountAggregateInputType = {
    id?: true
    senha?: true
    numeroOrdem?: true
    prioridade?: true
    status?: true
    guicheId?: true
    usuarioId?: true
    servicoId?: true
    cidadaoId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SenhaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Senha to aggregate.
     */
    where?: SenhaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Senhas to fetch.
     */
    orderBy?: SenhaOrderByWithRelationInput | SenhaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SenhaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Senhas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Senhas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Senhas
    **/
    _count?: true | SenhaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SenhaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SenhaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SenhaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SenhaMaxAggregateInputType
  }

  export type GetSenhaAggregateType<T extends SenhaAggregateArgs> = {
        [P in keyof T & keyof AggregateSenha]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSenha[P]>
      : GetScalarType<T[P], AggregateSenha[P]>
  }




  export type SenhaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SenhaWhereInput
    orderBy?: SenhaOrderByWithAggregationInput | SenhaOrderByWithAggregationInput[]
    by: SenhaScalarFieldEnum[] | SenhaScalarFieldEnum
    having?: SenhaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SenhaCountAggregateInputType | true
    _avg?: SenhaAvgAggregateInputType
    _sum?: SenhaSumAggregateInputType
    _min?: SenhaMinAggregateInputType
    _max?: SenhaMaxAggregateInputType
  }

  export type SenhaGroupByOutputType = {
    id: number
    senha: string | null
    numeroOrdem: number
    prioridade: $Enums.Prioridades
    status: $Enums.SenhaStatus
    guicheId: string | null
    usuarioId: string | null
    servicoId: string
    cidadaoId: string
    createdAt: Date
    updatedAt: Date
    _count: SenhaCountAggregateOutputType | null
    _avg: SenhaAvgAggregateOutputType | null
    _sum: SenhaSumAggregateOutputType | null
    _min: SenhaMinAggregateOutputType | null
    _max: SenhaMaxAggregateOutputType | null
  }

  type GetSenhaGroupByPayload<T extends SenhaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SenhaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SenhaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SenhaGroupByOutputType[P]>
            : GetScalarType<T[P], SenhaGroupByOutputType[P]>
        }
      >
    >


  export type SenhaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    senha?: boolean
    numeroOrdem?: boolean
    prioridade?: boolean
    status?: boolean
    guicheId?: boolean
    usuarioId?: boolean
    servicoId?: boolean
    cidadaoId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    guiche?: boolean | Senha$guicheArgs<ExtArgs>
    usuario?: boolean | Senha$usuarioArgs<ExtArgs>
    servico?: boolean | ServicoDefaultArgs<ExtArgs>
    cidadao?: boolean | CidadaoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["senha"]>

  export type SenhaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    senha?: boolean
    numeroOrdem?: boolean
    prioridade?: boolean
    status?: boolean
    guicheId?: boolean
    usuarioId?: boolean
    servicoId?: boolean
    cidadaoId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    guiche?: boolean | Senha$guicheArgs<ExtArgs>
    usuario?: boolean | Senha$usuarioArgs<ExtArgs>
    servico?: boolean | ServicoDefaultArgs<ExtArgs>
    cidadao?: boolean | CidadaoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["senha"]>

  export type SenhaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    senha?: boolean
    numeroOrdem?: boolean
    prioridade?: boolean
    status?: boolean
    guicheId?: boolean
    usuarioId?: boolean
    servicoId?: boolean
    cidadaoId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    guiche?: boolean | Senha$guicheArgs<ExtArgs>
    usuario?: boolean | Senha$usuarioArgs<ExtArgs>
    servico?: boolean | ServicoDefaultArgs<ExtArgs>
    cidadao?: boolean | CidadaoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["senha"]>

  export type SenhaSelectScalar = {
    id?: boolean
    senha?: boolean
    numeroOrdem?: boolean
    prioridade?: boolean
    status?: boolean
    guicheId?: boolean
    usuarioId?: boolean
    servicoId?: boolean
    cidadaoId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SenhaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "senha" | "numeroOrdem" | "prioridade" | "status" | "guicheId" | "usuarioId" | "servicoId" | "cidadaoId" | "createdAt" | "updatedAt", ExtArgs["result"]["senha"]>
  export type SenhaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    guiche?: boolean | Senha$guicheArgs<ExtArgs>
    usuario?: boolean | Senha$usuarioArgs<ExtArgs>
    servico?: boolean | ServicoDefaultArgs<ExtArgs>
    cidadao?: boolean | CidadaoDefaultArgs<ExtArgs>
  }
  export type SenhaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    guiche?: boolean | Senha$guicheArgs<ExtArgs>
    usuario?: boolean | Senha$usuarioArgs<ExtArgs>
    servico?: boolean | ServicoDefaultArgs<ExtArgs>
    cidadao?: boolean | CidadaoDefaultArgs<ExtArgs>
  }
  export type SenhaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    guiche?: boolean | Senha$guicheArgs<ExtArgs>
    usuario?: boolean | Senha$usuarioArgs<ExtArgs>
    servico?: boolean | ServicoDefaultArgs<ExtArgs>
    cidadao?: boolean | CidadaoDefaultArgs<ExtArgs>
  }

  export type $SenhaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Senha"
    objects: {
      guiche: Prisma.$GuichePayload<ExtArgs> | null
      usuario: Prisma.$UsuarioPayload<ExtArgs> | null
      servico: Prisma.$ServicoPayload<ExtArgs>
      cidadao: Prisma.$CidadaoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      senha: string | null
      numeroOrdem: number
      prioridade: $Enums.Prioridades
      status: $Enums.SenhaStatus
      guicheId: string | null
      usuarioId: string | null
      servicoId: string
      cidadaoId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["senha"]>
    composites: {}
  }

  type SenhaGetPayload<S extends boolean | null | undefined | SenhaDefaultArgs> = $Result.GetResult<Prisma.$SenhaPayload, S>

  type SenhaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SenhaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SenhaCountAggregateInputType | true
    }

  export interface SenhaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Senha'], meta: { name: 'Senha' } }
    /**
     * Find zero or one Senha that matches the filter.
     * @param {SenhaFindUniqueArgs} args - Arguments to find a Senha
     * @example
     * // Get one Senha
     * const senha = await prisma.senha.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SenhaFindUniqueArgs>(args: SelectSubset<T, SenhaFindUniqueArgs<ExtArgs>>): Prisma__SenhaClient<$Result.GetResult<Prisma.$SenhaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Senha that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SenhaFindUniqueOrThrowArgs} args - Arguments to find a Senha
     * @example
     * // Get one Senha
     * const senha = await prisma.senha.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SenhaFindUniqueOrThrowArgs>(args: SelectSubset<T, SenhaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SenhaClient<$Result.GetResult<Prisma.$SenhaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Senha that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SenhaFindFirstArgs} args - Arguments to find a Senha
     * @example
     * // Get one Senha
     * const senha = await prisma.senha.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SenhaFindFirstArgs>(args?: SelectSubset<T, SenhaFindFirstArgs<ExtArgs>>): Prisma__SenhaClient<$Result.GetResult<Prisma.$SenhaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Senha that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SenhaFindFirstOrThrowArgs} args - Arguments to find a Senha
     * @example
     * // Get one Senha
     * const senha = await prisma.senha.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SenhaFindFirstOrThrowArgs>(args?: SelectSubset<T, SenhaFindFirstOrThrowArgs<ExtArgs>>): Prisma__SenhaClient<$Result.GetResult<Prisma.$SenhaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Senhas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SenhaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Senhas
     * const senhas = await prisma.senha.findMany()
     * 
     * // Get first 10 Senhas
     * const senhas = await prisma.senha.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const senhaWithIdOnly = await prisma.senha.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SenhaFindManyArgs>(args?: SelectSubset<T, SenhaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SenhaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Senha.
     * @param {SenhaCreateArgs} args - Arguments to create a Senha.
     * @example
     * // Create one Senha
     * const Senha = await prisma.senha.create({
     *   data: {
     *     // ... data to create a Senha
     *   }
     * })
     * 
     */
    create<T extends SenhaCreateArgs>(args: SelectSubset<T, SenhaCreateArgs<ExtArgs>>): Prisma__SenhaClient<$Result.GetResult<Prisma.$SenhaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Senhas.
     * @param {SenhaCreateManyArgs} args - Arguments to create many Senhas.
     * @example
     * // Create many Senhas
     * const senha = await prisma.senha.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SenhaCreateManyArgs>(args?: SelectSubset<T, SenhaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Senhas and returns the data saved in the database.
     * @param {SenhaCreateManyAndReturnArgs} args - Arguments to create many Senhas.
     * @example
     * // Create many Senhas
     * const senha = await prisma.senha.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Senhas and only return the `id`
     * const senhaWithIdOnly = await prisma.senha.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SenhaCreateManyAndReturnArgs>(args?: SelectSubset<T, SenhaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SenhaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Senha.
     * @param {SenhaDeleteArgs} args - Arguments to delete one Senha.
     * @example
     * // Delete one Senha
     * const Senha = await prisma.senha.delete({
     *   where: {
     *     // ... filter to delete one Senha
     *   }
     * })
     * 
     */
    delete<T extends SenhaDeleteArgs>(args: SelectSubset<T, SenhaDeleteArgs<ExtArgs>>): Prisma__SenhaClient<$Result.GetResult<Prisma.$SenhaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Senha.
     * @param {SenhaUpdateArgs} args - Arguments to update one Senha.
     * @example
     * // Update one Senha
     * const senha = await prisma.senha.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SenhaUpdateArgs>(args: SelectSubset<T, SenhaUpdateArgs<ExtArgs>>): Prisma__SenhaClient<$Result.GetResult<Prisma.$SenhaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Senhas.
     * @param {SenhaDeleteManyArgs} args - Arguments to filter Senhas to delete.
     * @example
     * // Delete a few Senhas
     * const { count } = await prisma.senha.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SenhaDeleteManyArgs>(args?: SelectSubset<T, SenhaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Senhas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SenhaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Senhas
     * const senha = await prisma.senha.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SenhaUpdateManyArgs>(args: SelectSubset<T, SenhaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Senhas and returns the data updated in the database.
     * @param {SenhaUpdateManyAndReturnArgs} args - Arguments to update many Senhas.
     * @example
     * // Update many Senhas
     * const senha = await prisma.senha.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Senhas and only return the `id`
     * const senhaWithIdOnly = await prisma.senha.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SenhaUpdateManyAndReturnArgs>(args: SelectSubset<T, SenhaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SenhaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Senha.
     * @param {SenhaUpsertArgs} args - Arguments to update or create a Senha.
     * @example
     * // Update or create a Senha
     * const senha = await prisma.senha.upsert({
     *   create: {
     *     // ... data to create a Senha
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Senha we want to update
     *   }
     * })
     */
    upsert<T extends SenhaUpsertArgs>(args: SelectSubset<T, SenhaUpsertArgs<ExtArgs>>): Prisma__SenhaClient<$Result.GetResult<Prisma.$SenhaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Senhas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SenhaCountArgs} args - Arguments to filter Senhas to count.
     * @example
     * // Count the number of Senhas
     * const count = await prisma.senha.count({
     *   where: {
     *     // ... the filter for the Senhas we want to count
     *   }
     * })
    **/
    count<T extends SenhaCountArgs>(
      args?: Subset<T, SenhaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SenhaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Senha.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SenhaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SenhaAggregateArgs>(args: Subset<T, SenhaAggregateArgs>): Prisma.PrismaPromise<GetSenhaAggregateType<T>>

    /**
     * Group by Senha.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SenhaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SenhaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SenhaGroupByArgs['orderBy'] }
        : { orderBy?: SenhaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SenhaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSenhaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Senha model
   */
  readonly fields: SenhaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Senha.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SenhaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    guiche<T extends Senha$guicheArgs<ExtArgs> = {}>(args?: Subset<T, Senha$guicheArgs<ExtArgs>>): Prisma__GuicheClient<$Result.GetResult<Prisma.$GuichePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    usuario<T extends Senha$usuarioArgs<ExtArgs> = {}>(args?: Subset<T, Senha$usuarioArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    servico<T extends ServicoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ServicoDefaultArgs<ExtArgs>>): Prisma__ServicoClient<$Result.GetResult<Prisma.$ServicoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    cidadao<T extends CidadaoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CidadaoDefaultArgs<ExtArgs>>): Prisma__CidadaoClient<$Result.GetResult<Prisma.$CidadaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Senha model
   */
  interface SenhaFieldRefs {
    readonly id: FieldRef<"Senha", 'Int'>
    readonly senha: FieldRef<"Senha", 'String'>
    readonly numeroOrdem: FieldRef<"Senha", 'Int'>
    readonly prioridade: FieldRef<"Senha", 'Prioridades'>
    readonly status: FieldRef<"Senha", 'SenhaStatus'>
    readonly guicheId: FieldRef<"Senha", 'String'>
    readonly usuarioId: FieldRef<"Senha", 'String'>
    readonly servicoId: FieldRef<"Senha", 'String'>
    readonly cidadaoId: FieldRef<"Senha", 'String'>
    readonly createdAt: FieldRef<"Senha", 'DateTime'>
    readonly updatedAt: FieldRef<"Senha", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Senha findUnique
   */
  export type SenhaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Senha
     */
    select?: SenhaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Senha
     */
    omit?: SenhaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SenhaInclude<ExtArgs> | null
    /**
     * Filter, which Senha to fetch.
     */
    where: SenhaWhereUniqueInput
  }

  /**
   * Senha findUniqueOrThrow
   */
  export type SenhaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Senha
     */
    select?: SenhaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Senha
     */
    omit?: SenhaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SenhaInclude<ExtArgs> | null
    /**
     * Filter, which Senha to fetch.
     */
    where: SenhaWhereUniqueInput
  }

  /**
   * Senha findFirst
   */
  export type SenhaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Senha
     */
    select?: SenhaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Senha
     */
    omit?: SenhaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SenhaInclude<ExtArgs> | null
    /**
     * Filter, which Senha to fetch.
     */
    where?: SenhaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Senhas to fetch.
     */
    orderBy?: SenhaOrderByWithRelationInput | SenhaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Senhas.
     */
    cursor?: SenhaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Senhas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Senhas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Senhas.
     */
    distinct?: SenhaScalarFieldEnum | SenhaScalarFieldEnum[]
  }

  /**
   * Senha findFirstOrThrow
   */
  export type SenhaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Senha
     */
    select?: SenhaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Senha
     */
    omit?: SenhaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SenhaInclude<ExtArgs> | null
    /**
     * Filter, which Senha to fetch.
     */
    where?: SenhaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Senhas to fetch.
     */
    orderBy?: SenhaOrderByWithRelationInput | SenhaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Senhas.
     */
    cursor?: SenhaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Senhas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Senhas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Senhas.
     */
    distinct?: SenhaScalarFieldEnum | SenhaScalarFieldEnum[]
  }

  /**
   * Senha findMany
   */
  export type SenhaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Senha
     */
    select?: SenhaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Senha
     */
    omit?: SenhaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SenhaInclude<ExtArgs> | null
    /**
     * Filter, which Senhas to fetch.
     */
    where?: SenhaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Senhas to fetch.
     */
    orderBy?: SenhaOrderByWithRelationInput | SenhaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Senhas.
     */
    cursor?: SenhaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Senhas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Senhas.
     */
    skip?: number
    distinct?: SenhaScalarFieldEnum | SenhaScalarFieldEnum[]
  }

  /**
   * Senha create
   */
  export type SenhaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Senha
     */
    select?: SenhaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Senha
     */
    omit?: SenhaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SenhaInclude<ExtArgs> | null
    /**
     * The data needed to create a Senha.
     */
    data: XOR<SenhaCreateInput, SenhaUncheckedCreateInput>
  }

  /**
   * Senha createMany
   */
  export type SenhaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Senhas.
     */
    data: SenhaCreateManyInput | SenhaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Senha createManyAndReturn
   */
  export type SenhaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Senha
     */
    select?: SenhaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Senha
     */
    omit?: SenhaOmit<ExtArgs> | null
    /**
     * The data used to create many Senhas.
     */
    data: SenhaCreateManyInput | SenhaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SenhaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Senha update
   */
  export type SenhaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Senha
     */
    select?: SenhaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Senha
     */
    omit?: SenhaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SenhaInclude<ExtArgs> | null
    /**
     * The data needed to update a Senha.
     */
    data: XOR<SenhaUpdateInput, SenhaUncheckedUpdateInput>
    /**
     * Choose, which Senha to update.
     */
    where: SenhaWhereUniqueInput
  }

  /**
   * Senha updateMany
   */
  export type SenhaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Senhas.
     */
    data: XOR<SenhaUpdateManyMutationInput, SenhaUncheckedUpdateManyInput>
    /**
     * Filter which Senhas to update
     */
    where?: SenhaWhereInput
    /**
     * Limit how many Senhas to update.
     */
    limit?: number
  }

  /**
   * Senha updateManyAndReturn
   */
  export type SenhaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Senha
     */
    select?: SenhaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Senha
     */
    omit?: SenhaOmit<ExtArgs> | null
    /**
     * The data used to update Senhas.
     */
    data: XOR<SenhaUpdateManyMutationInput, SenhaUncheckedUpdateManyInput>
    /**
     * Filter which Senhas to update
     */
    where?: SenhaWhereInput
    /**
     * Limit how many Senhas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SenhaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Senha upsert
   */
  export type SenhaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Senha
     */
    select?: SenhaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Senha
     */
    omit?: SenhaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SenhaInclude<ExtArgs> | null
    /**
     * The filter to search for the Senha to update in case it exists.
     */
    where: SenhaWhereUniqueInput
    /**
     * In case the Senha found by the `where` argument doesn't exist, create a new Senha with this data.
     */
    create: XOR<SenhaCreateInput, SenhaUncheckedCreateInput>
    /**
     * In case the Senha was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SenhaUpdateInput, SenhaUncheckedUpdateInput>
  }

  /**
   * Senha delete
   */
  export type SenhaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Senha
     */
    select?: SenhaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Senha
     */
    omit?: SenhaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SenhaInclude<ExtArgs> | null
    /**
     * Filter which Senha to delete.
     */
    where: SenhaWhereUniqueInput
  }

  /**
   * Senha deleteMany
   */
  export type SenhaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Senhas to delete
     */
    where?: SenhaWhereInput
    /**
     * Limit how many Senhas to delete.
     */
    limit?: number
  }

  /**
   * Senha.guiche
   */
  export type Senha$guicheArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guiche
     */
    select?: GuicheSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guiche
     */
    omit?: GuicheOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuicheInclude<ExtArgs> | null
    where?: GuicheWhereInput
  }

  /**
   * Senha.usuario
   */
  export type Senha$usuarioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    where?: UsuarioWhereInput
  }

  /**
   * Senha without action
   */
  export type SenhaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Senha
     */
    select?: SenhaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Senha
     */
    omit?: SenhaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SenhaInclude<ExtArgs> | null
  }


  /**
   * Model ContadorPrioridade
   */

  export type AggregateContadorPrioridade = {
    _count: ContadorPrioridadeCountAggregateOutputType | null
    _avg: ContadorPrioridadeAvgAggregateOutputType | null
    _sum: ContadorPrioridadeSumAggregateOutputType | null
    _min: ContadorPrioridadeMinAggregateOutputType | null
    _max: ContadorPrioridadeMaxAggregateOutputType | null
  }

  export type ContadorPrioridadeAvgAggregateOutputType = {
    id: number | null
    quantidade: number | null
  }

  export type ContadorPrioridadeSumAggregateOutputType = {
    id: number | null
    quantidade: number | null
  }

  export type ContadorPrioridadeMinAggregateOutputType = {
    id: number | null
    servicoId: string | null
    quantidade: number | null
    updatedAt: Date | null
  }

  export type ContadorPrioridadeMaxAggregateOutputType = {
    id: number | null
    servicoId: string | null
    quantidade: number | null
    updatedAt: Date | null
  }

  export type ContadorPrioridadeCountAggregateOutputType = {
    id: number
    servicoId: number
    quantidade: number
    updatedAt: number
    _all: number
  }


  export type ContadorPrioridadeAvgAggregateInputType = {
    id?: true
    quantidade?: true
  }

  export type ContadorPrioridadeSumAggregateInputType = {
    id?: true
    quantidade?: true
  }

  export type ContadorPrioridadeMinAggregateInputType = {
    id?: true
    servicoId?: true
    quantidade?: true
    updatedAt?: true
  }

  export type ContadorPrioridadeMaxAggregateInputType = {
    id?: true
    servicoId?: true
    quantidade?: true
    updatedAt?: true
  }

  export type ContadorPrioridadeCountAggregateInputType = {
    id?: true
    servicoId?: true
    quantidade?: true
    updatedAt?: true
    _all?: true
  }

  export type ContadorPrioridadeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ContadorPrioridade to aggregate.
     */
    where?: ContadorPrioridadeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContadorPrioridades to fetch.
     */
    orderBy?: ContadorPrioridadeOrderByWithRelationInput | ContadorPrioridadeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ContadorPrioridadeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContadorPrioridades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContadorPrioridades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ContadorPrioridades
    **/
    _count?: true | ContadorPrioridadeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ContadorPrioridadeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ContadorPrioridadeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ContadorPrioridadeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ContadorPrioridadeMaxAggregateInputType
  }

  export type GetContadorPrioridadeAggregateType<T extends ContadorPrioridadeAggregateArgs> = {
        [P in keyof T & keyof AggregateContadorPrioridade]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContadorPrioridade[P]>
      : GetScalarType<T[P], AggregateContadorPrioridade[P]>
  }




  export type ContadorPrioridadeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContadorPrioridadeWhereInput
    orderBy?: ContadorPrioridadeOrderByWithAggregationInput | ContadorPrioridadeOrderByWithAggregationInput[]
    by: ContadorPrioridadeScalarFieldEnum[] | ContadorPrioridadeScalarFieldEnum
    having?: ContadorPrioridadeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContadorPrioridadeCountAggregateInputType | true
    _avg?: ContadorPrioridadeAvgAggregateInputType
    _sum?: ContadorPrioridadeSumAggregateInputType
    _min?: ContadorPrioridadeMinAggregateInputType
    _max?: ContadorPrioridadeMaxAggregateInputType
  }

  export type ContadorPrioridadeGroupByOutputType = {
    id: number
    servicoId: string
    quantidade: number
    updatedAt: Date
    _count: ContadorPrioridadeCountAggregateOutputType | null
    _avg: ContadorPrioridadeAvgAggregateOutputType | null
    _sum: ContadorPrioridadeSumAggregateOutputType | null
    _min: ContadorPrioridadeMinAggregateOutputType | null
    _max: ContadorPrioridadeMaxAggregateOutputType | null
  }

  type GetContadorPrioridadeGroupByPayload<T extends ContadorPrioridadeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ContadorPrioridadeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ContadorPrioridadeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContadorPrioridadeGroupByOutputType[P]>
            : GetScalarType<T[P], ContadorPrioridadeGroupByOutputType[P]>
        }
      >
    >


  export type ContadorPrioridadeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    servicoId?: boolean
    quantidade?: boolean
    updatedAt?: boolean
    servico?: boolean | ServicoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contadorPrioridade"]>

  export type ContadorPrioridadeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    servicoId?: boolean
    quantidade?: boolean
    updatedAt?: boolean
    servico?: boolean | ServicoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contadorPrioridade"]>

  export type ContadorPrioridadeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    servicoId?: boolean
    quantidade?: boolean
    updatedAt?: boolean
    servico?: boolean | ServicoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contadorPrioridade"]>

  export type ContadorPrioridadeSelectScalar = {
    id?: boolean
    servicoId?: boolean
    quantidade?: boolean
    updatedAt?: boolean
  }

  export type ContadorPrioridadeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "servicoId" | "quantidade" | "updatedAt", ExtArgs["result"]["contadorPrioridade"]>
  export type ContadorPrioridadeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    servico?: boolean | ServicoDefaultArgs<ExtArgs>
  }
  export type ContadorPrioridadeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    servico?: boolean | ServicoDefaultArgs<ExtArgs>
  }
  export type ContadorPrioridadeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    servico?: boolean | ServicoDefaultArgs<ExtArgs>
  }

  export type $ContadorPrioridadePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ContadorPrioridade"
    objects: {
      servico: Prisma.$ServicoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      servicoId: string
      quantidade: number
      updatedAt: Date
    }, ExtArgs["result"]["contadorPrioridade"]>
    composites: {}
  }

  type ContadorPrioridadeGetPayload<S extends boolean | null | undefined | ContadorPrioridadeDefaultArgs> = $Result.GetResult<Prisma.$ContadorPrioridadePayload, S>

  type ContadorPrioridadeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ContadorPrioridadeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ContadorPrioridadeCountAggregateInputType | true
    }

  export interface ContadorPrioridadeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ContadorPrioridade'], meta: { name: 'ContadorPrioridade' } }
    /**
     * Find zero or one ContadorPrioridade that matches the filter.
     * @param {ContadorPrioridadeFindUniqueArgs} args - Arguments to find a ContadorPrioridade
     * @example
     * // Get one ContadorPrioridade
     * const contadorPrioridade = await prisma.contadorPrioridade.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ContadorPrioridadeFindUniqueArgs>(args: SelectSubset<T, ContadorPrioridadeFindUniqueArgs<ExtArgs>>): Prisma__ContadorPrioridadeClient<$Result.GetResult<Prisma.$ContadorPrioridadePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ContadorPrioridade that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ContadorPrioridadeFindUniqueOrThrowArgs} args - Arguments to find a ContadorPrioridade
     * @example
     * // Get one ContadorPrioridade
     * const contadorPrioridade = await prisma.contadorPrioridade.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ContadorPrioridadeFindUniqueOrThrowArgs>(args: SelectSubset<T, ContadorPrioridadeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ContadorPrioridadeClient<$Result.GetResult<Prisma.$ContadorPrioridadePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ContadorPrioridade that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContadorPrioridadeFindFirstArgs} args - Arguments to find a ContadorPrioridade
     * @example
     * // Get one ContadorPrioridade
     * const contadorPrioridade = await prisma.contadorPrioridade.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ContadorPrioridadeFindFirstArgs>(args?: SelectSubset<T, ContadorPrioridadeFindFirstArgs<ExtArgs>>): Prisma__ContadorPrioridadeClient<$Result.GetResult<Prisma.$ContadorPrioridadePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ContadorPrioridade that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContadorPrioridadeFindFirstOrThrowArgs} args - Arguments to find a ContadorPrioridade
     * @example
     * // Get one ContadorPrioridade
     * const contadorPrioridade = await prisma.contadorPrioridade.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ContadorPrioridadeFindFirstOrThrowArgs>(args?: SelectSubset<T, ContadorPrioridadeFindFirstOrThrowArgs<ExtArgs>>): Prisma__ContadorPrioridadeClient<$Result.GetResult<Prisma.$ContadorPrioridadePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ContadorPrioridades that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContadorPrioridadeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ContadorPrioridades
     * const contadorPrioridades = await prisma.contadorPrioridade.findMany()
     * 
     * // Get first 10 ContadorPrioridades
     * const contadorPrioridades = await prisma.contadorPrioridade.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const contadorPrioridadeWithIdOnly = await prisma.contadorPrioridade.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ContadorPrioridadeFindManyArgs>(args?: SelectSubset<T, ContadorPrioridadeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContadorPrioridadePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ContadorPrioridade.
     * @param {ContadorPrioridadeCreateArgs} args - Arguments to create a ContadorPrioridade.
     * @example
     * // Create one ContadorPrioridade
     * const ContadorPrioridade = await prisma.contadorPrioridade.create({
     *   data: {
     *     // ... data to create a ContadorPrioridade
     *   }
     * })
     * 
     */
    create<T extends ContadorPrioridadeCreateArgs>(args: SelectSubset<T, ContadorPrioridadeCreateArgs<ExtArgs>>): Prisma__ContadorPrioridadeClient<$Result.GetResult<Prisma.$ContadorPrioridadePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ContadorPrioridades.
     * @param {ContadorPrioridadeCreateManyArgs} args - Arguments to create many ContadorPrioridades.
     * @example
     * // Create many ContadorPrioridades
     * const contadorPrioridade = await prisma.contadorPrioridade.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ContadorPrioridadeCreateManyArgs>(args?: SelectSubset<T, ContadorPrioridadeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ContadorPrioridades and returns the data saved in the database.
     * @param {ContadorPrioridadeCreateManyAndReturnArgs} args - Arguments to create many ContadorPrioridades.
     * @example
     * // Create many ContadorPrioridades
     * const contadorPrioridade = await prisma.contadorPrioridade.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ContadorPrioridades and only return the `id`
     * const contadorPrioridadeWithIdOnly = await prisma.contadorPrioridade.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ContadorPrioridadeCreateManyAndReturnArgs>(args?: SelectSubset<T, ContadorPrioridadeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContadorPrioridadePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ContadorPrioridade.
     * @param {ContadorPrioridadeDeleteArgs} args - Arguments to delete one ContadorPrioridade.
     * @example
     * // Delete one ContadorPrioridade
     * const ContadorPrioridade = await prisma.contadorPrioridade.delete({
     *   where: {
     *     // ... filter to delete one ContadorPrioridade
     *   }
     * })
     * 
     */
    delete<T extends ContadorPrioridadeDeleteArgs>(args: SelectSubset<T, ContadorPrioridadeDeleteArgs<ExtArgs>>): Prisma__ContadorPrioridadeClient<$Result.GetResult<Prisma.$ContadorPrioridadePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ContadorPrioridade.
     * @param {ContadorPrioridadeUpdateArgs} args - Arguments to update one ContadorPrioridade.
     * @example
     * // Update one ContadorPrioridade
     * const contadorPrioridade = await prisma.contadorPrioridade.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ContadorPrioridadeUpdateArgs>(args: SelectSubset<T, ContadorPrioridadeUpdateArgs<ExtArgs>>): Prisma__ContadorPrioridadeClient<$Result.GetResult<Prisma.$ContadorPrioridadePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ContadorPrioridades.
     * @param {ContadorPrioridadeDeleteManyArgs} args - Arguments to filter ContadorPrioridades to delete.
     * @example
     * // Delete a few ContadorPrioridades
     * const { count } = await prisma.contadorPrioridade.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ContadorPrioridadeDeleteManyArgs>(args?: SelectSubset<T, ContadorPrioridadeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ContadorPrioridades.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContadorPrioridadeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ContadorPrioridades
     * const contadorPrioridade = await prisma.contadorPrioridade.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ContadorPrioridadeUpdateManyArgs>(args: SelectSubset<T, ContadorPrioridadeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ContadorPrioridades and returns the data updated in the database.
     * @param {ContadorPrioridadeUpdateManyAndReturnArgs} args - Arguments to update many ContadorPrioridades.
     * @example
     * // Update many ContadorPrioridades
     * const contadorPrioridade = await prisma.contadorPrioridade.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ContadorPrioridades and only return the `id`
     * const contadorPrioridadeWithIdOnly = await prisma.contadorPrioridade.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ContadorPrioridadeUpdateManyAndReturnArgs>(args: SelectSubset<T, ContadorPrioridadeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContadorPrioridadePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ContadorPrioridade.
     * @param {ContadorPrioridadeUpsertArgs} args - Arguments to update or create a ContadorPrioridade.
     * @example
     * // Update or create a ContadorPrioridade
     * const contadorPrioridade = await prisma.contadorPrioridade.upsert({
     *   create: {
     *     // ... data to create a ContadorPrioridade
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ContadorPrioridade we want to update
     *   }
     * })
     */
    upsert<T extends ContadorPrioridadeUpsertArgs>(args: SelectSubset<T, ContadorPrioridadeUpsertArgs<ExtArgs>>): Prisma__ContadorPrioridadeClient<$Result.GetResult<Prisma.$ContadorPrioridadePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ContadorPrioridades.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContadorPrioridadeCountArgs} args - Arguments to filter ContadorPrioridades to count.
     * @example
     * // Count the number of ContadorPrioridades
     * const count = await prisma.contadorPrioridade.count({
     *   where: {
     *     // ... the filter for the ContadorPrioridades we want to count
     *   }
     * })
    **/
    count<T extends ContadorPrioridadeCountArgs>(
      args?: Subset<T, ContadorPrioridadeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContadorPrioridadeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ContadorPrioridade.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContadorPrioridadeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ContadorPrioridadeAggregateArgs>(args: Subset<T, ContadorPrioridadeAggregateArgs>): Prisma.PrismaPromise<GetContadorPrioridadeAggregateType<T>>

    /**
     * Group by ContadorPrioridade.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContadorPrioridadeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ContadorPrioridadeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ContadorPrioridadeGroupByArgs['orderBy'] }
        : { orderBy?: ContadorPrioridadeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ContadorPrioridadeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContadorPrioridadeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ContadorPrioridade model
   */
  readonly fields: ContadorPrioridadeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ContadorPrioridade.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ContadorPrioridadeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    servico<T extends ServicoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ServicoDefaultArgs<ExtArgs>>): Prisma__ServicoClient<$Result.GetResult<Prisma.$ServicoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ContadorPrioridade model
   */
  interface ContadorPrioridadeFieldRefs {
    readonly id: FieldRef<"ContadorPrioridade", 'Int'>
    readonly servicoId: FieldRef<"ContadorPrioridade", 'String'>
    readonly quantidade: FieldRef<"ContadorPrioridade", 'Int'>
    readonly updatedAt: FieldRef<"ContadorPrioridade", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ContadorPrioridade findUnique
   */
  export type ContadorPrioridadeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContadorPrioridade
     */
    select?: ContadorPrioridadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContadorPrioridade
     */
    omit?: ContadorPrioridadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContadorPrioridadeInclude<ExtArgs> | null
    /**
     * Filter, which ContadorPrioridade to fetch.
     */
    where: ContadorPrioridadeWhereUniqueInput
  }

  /**
   * ContadorPrioridade findUniqueOrThrow
   */
  export type ContadorPrioridadeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContadorPrioridade
     */
    select?: ContadorPrioridadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContadorPrioridade
     */
    omit?: ContadorPrioridadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContadorPrioridadeInclude<ExtArgs> | null
    /**
     * Filter, which ContadorPrioridade to fetch.
     */
    where: ContadorPrioridadeWhereUniqueInput
  }

  /**
   * ContadorPrioridade findFirst
   */
  export type ContadorPrioridadeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContadorPrioridade
     */
    select?: ContadorPrioridadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContadorPrioridade
     */
    omit?: ContadorPrioridadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContadorPrioridadeInclude<ExtArgs> | null
    /**
     * Filter, which ContadorPrioridade to fetch.
     */
    where?: ContadorPrioridadeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContadorPrioridades to fetch.
     */
    orderBy?: ContadorPrioridadeOrderByWithRelationInput | ContadorPrioridadeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ContadorPrioridades.
     */
    cursor?: ContadorPrioridadeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContadorPrioridades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContadorPrioridades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ContadorPrioridades.
     */
    distinct?: ContadorPrioridadeScalarFieldEnum | ContadorPrioridadeScalarFieldEnum[]
  }

  /**
   * ContadorPrioridade findFirstOrThrow
   */
  export type ContadorPrioridadeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContadorPrioridade
     */
    select?: ContadorPrioridadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContadorPrioridade
     */
    omit?: ContadorPrioridadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContadorPrioridadeInclude<ExtArgs> | null
    /**
     * Filter, which ContadorPrioridade to fetch.
     */
    where?: ContadorPrioridadeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContadorPrioridades to fetch.
     */
    orderBy?: ContadorPrioridadeOrderByWithRelationInput | ContadorPrioridadeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ContadorPrioridades.
     */
    cursor?: ContadorPrioridadeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContadorPrioridades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContadorPrioridades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ContadorPrioridades.
     */
    distinct?: ContadorPrioridadeScalarFieldEnum | ContadorPrioridadeScalarFieldEnum[]
  }

  /**
   * ContadorPrioridade findMany
   */
  export type ContadorPrioridadeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContadorPrioridade
     */
    select?: ContadorPrioridadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContadorPrioridade
     */
    omit?: ContadorPrioridadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContadorPrioridadeInclude<ExtArgs> | null
    /**
     * Filter, which ContadorPrioridades to fetch.
     */
    where?: ContadorPrioridadeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContadorPrioridades to fetch.
     */
    orderBy?: ContadorPrioridadeOrderByWithRelationInput | ContadorPrioridadeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ContadorPrioridades.
     */
    cursor?: ContadorPrioridadeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContadorPrioridades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContadorPrioridades.
     */
    skip?: number
    distinct?: ContadorPrioridadeScalarFieldEnum | ContadorPrioridadeScalarFieldEnum[]
  }

  /**
   * ContadorPrioridade create
   */
  export type ContadorPrioridadeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContadorPrioridade
     */
    select?: ContadorPrioridadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContadorPrioridade
     */
    omit?: ContadorPrioridadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContadorPrioridadeInclude<ExtArgs> | null
    /**
     * The data needed to create a ContadorPrioridade.
     */
    data: XOR<ContadorPrioridadeCreateInput, ContadorPrioridadeUncheckedCreateInput>
  }

  /**
   * ContadorPrioridade createMany
   */
  export type ContadorPrioridadeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ContadorPrioridades.
     */
    data: ContadorPrioridadeCreateManyInput | ContadorPrioridadeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ContadorPrioridade createManyAndReturn
   */
  export type ContadorPrioridadeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContadorPrioridade
     */
    select?: ContadorPrioridadeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ContadorPrioridade
     */
    omit?: ContadorPrioridadeOmit<ExtArgs> | null
    /**
     * The data used to create many ContadorPrioridades.
     */
    data: ContadorPrioridadeCreateManyInput | ContadorPrioridadeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContadorPrioridadeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ContadorPrioridade update
   */
  export type ContadorPrioridadeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContadorPrioridade
     */
    select?: ContadorPrioridadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContadorPrioridade
     */
    omit?: ContadorPrioridadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContadorPrioridadeInclude<ExtArgs> | null
    /**
     * The data needed to update a ContadorPrioridade.
     */
    data: XOR<ContadorPrioridadeUpdateInput, ContadorPrioridadeUncheckedUpdateInput>
    /**
     * Choose, which ContadorPrioridade to update.
     */
    where: ContadorPrioridadeWhereUniqueInput
  }

  /**
   * ContadorPrioridade updateMany
   */
  export type ContadorPrioridadeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ContadorPrioridades.
     */
    data: XOR<ContadorPrioridadeUpdateManyMutationInput, ContadorPrioridadeUncheckedUpdateManyInput>
    /**
     * Filter which ContadorPrioridades to update
     */
    where?: ContadorPrioridadeWhereInput
    /**
     * Limit how many ContadorPrioridades to update.
     */
    limit?: number
  }

  /**
   * ContadorPrioridade updateManyAndReturn
   */
  export type ContadorPrioridadeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContadorPrioridade
     */
    select?: ContadorPrioridadeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ContadorPrioridade
     */
    omit?: ContadorPrioridadeOmit<ExtArgs> | null
    /**
     * The data used to update ContadorPrioridades.
     */
    data: XOR<ContadorPrioridadeUpdateManyMutationInput, ContadorPrioridadeUncheckedUpdateManyInput>
    /**
     * Filter which ContadorPrioridades to update
     */
    where?: ContadorPrioridadeWhereInput
    /**
     * Limit how many ContadorPrioridades to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContadorPrioridadeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ContadorPrioridade upsert
   */
  export type ContadorPrioridadeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContadorPrioridade
     */
    select?: ContadorPrioridadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContadorPrioridade
     */
    omit?: ContadorPrioridadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContadorPrioridadeInclude<ExtArgs> | null
    /**
     * The filter to search for the ContadorPrioridade to update in case it exists.
     */
    where: ContadorPrioridadeWhereUniqueInput
    /**
     * In case the ContadorPrioridade found by the `where` argument doesn't exist, create a new ContadorPrioridade with this data.
     */
    create: XOR<ContadorPrioridadeCreateInput, ContadorPrioridadeUncheckedCreateInput>
    /**
     * In case the ContadorPrioridade was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ContadorPrioridadeUpdateInput, ContadorPrioridadeUncheckedUpdateInput>
  }

  /**
   * ContadorPrioridade delete
   */
  export type ContadorPrioridadeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContadorPrioridade
     */
    select?: ContadorPrioridadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContadorPrioridade
     */
    omit?: ContadorPrioridadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContadorPrioridadeInclude<ExtArgs> | null
    /**
     * Filter which ContadorPrioridade to delete.
     */
    where: ContadorPrioridadeWhereUniqueInput
  }

  /**
   * ContadorPrioridade deleteMany
   */
  export type ContadorPrioridadeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ContadorPrioridades to delete
     */
    where?: ContadorPrioridadeWhereInput
    /**
     * Limit how many ContadorPrioridades to delete.
     */
    limit?: number
  }

  /**
   * ContadorPrioridade without action
   */
  export type ContadorPrioridadeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContadorPrioridade
     */
    select?: ContadorPrioridadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContadorPrioridade
     */
    omit?: ContadorPrioridadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContadorPrioridadeInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const ReparticaoScalarFieldEnum: {
    id: 'id',
    name: 'name',
    slug: 'slug',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ReparticaoScalarFieldEnum = (typeof ReparticaoScalarFieldEnum)[keyof typeof ReparticaoScalarFieldEnum]


  export const GuicheScalarFieldEnum: {
    id: 'id',
    name: 'name',
    reparticaoId: 'reparticaoId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type GuicheScalarFieldEnum = (typeof GuicheScalarFieldEnum)[keyof typeof GuicheScalarFieldEnum]


  export const UsuarioScalarFieldEnum: {
    id: 'id',
    role: 'role',
    name: 'name',
    cpf: 'cpf',
    password: 'password',
    reparticaoId: 'reparticaoId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UsuarioScalarFieldEnum = (typeof UsuarioScalarFieldEnum)[keyof typeof UsuarioScalarFieldEnum]


  export const CidadaoScalarFieldEnum: {
    id: 'id',
    name: 'name',
    cpf: 'cpf',
    reparticaoId: 'reparticaoId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CidadaoScalarFieldEnum = (typeof CidadaoScalarFieldEnum)[keyof typeof CidadaoScalarFieldEnum]


  export const ServicoScalarFieldEnum: {
    id: 'id',
    name: 'name',
    slug: 'slug',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    reparticaoId: 'reparticaoId'
  };

  export type ServicoScalarFieldEnum = (typeof ServicoScalarFieldEnum)[keyof typeof ServicoScalarFieldEnum]


  export const SenhaScalarFieldEnum: {
    id: 'id',
    senha: 'senha',
    numeroOrdem: 'numeroOrdem',
    prioridade: 'prioridade',
    status: 'status',
    guicheId: 'guicheId',
    usuarioId: 'usuarioId',
    servicoId: 'servicoId',
    cidadaoId: 'cidadaoId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SenhaScalarFieldEnum = (typeof SenhaScalarFieldEnum)[keyof typeof SenhaScalarFieldEnum]


  export const ContadorPrioridadeScalarFieldEnum: {
    id: 'id',
    servicoId: 'servicoId',
    quantidade: 'quantidade',
    updatedAt: 'updatedAt'
  };

  export type ContadorPrioridadeScalarFieldEnum = (typeof ContadorPrioridadeScalarFieldEnum)[keyof typeof ContadorPrioridadeScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Prioridades'
   */
  export type EnumPrioridadesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Prioridades'>
    


  /**
   * Reference to a field of type 'Prioridades[]'
   */
  export type ListEnumPrioridadesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Prioridades[]'>
    


  /**
   * Reference to a field of type 'SenhaStatus'
   */
  export type EnumSenhaStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SenhaStatus'>
    


  /**
   * Reference to a field of type 'SenhaStatus[]'
   */
  export type ListEnumSenhaStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SenhaStatus[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type ReparticaoWhereInput = {
    AND?: ReparticaoWhereInput | ReparticaoWhereInput[]
    OR?: ReparticaoWhereInput[]
    NOT?: ReparticaoWhereInput | ReparticaoWhereInput[]
    id?: StringFilter<"Reparticao"> | string
    name?: StringFilter<"Reparticao"> | string
    slug?: StringFilter<"Reparticao"> | string
    createdAt?: DateTimeFilter<"Reparticao"> | Date | string
    updatedAt?: DateTimeFilter<"Reparticao"> | Date | string
    servicos?: ServicoListRelationFilter
    usuarios?: UsuarioListRelationFilter
    guiches?: GuicheListRelationFilter
    cidadaos?: CidadaoListRelationFilter
  }

  export type ReparticaoOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    servicos?: ServicoOrderByRelationAggregateInput
    usuarios?: UsuarioOrderByRelationAggregateInput
    guiches?: GuicheOrderByRelationAggregateInput
    cidadaos?: CidadaoOrderByRelationAggregateInput
  }

  export type ReparticaoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ReparticaoWhereInput | ReparticaoWhereInput[]
    OR?: ReparticaoWhereInput[]
    NOT?: ReparticaoWhereInput | ReparticaoWhereInput[]
    name?: StringFilter<"Reparticao"> | string
    slug?: StringFilter<"Reparticao"> | string
    createdAt?: DateTimeFilter<"Reparticao"> | Date | string
    updatedAt?: DateTimeFilter<"Reparticao"> | Date | string
    servicos?: ServicoListRelationFilter
    usuarios?: UsuarioListRelationFilter
    guiches?: GuicheListRelationFilter
    cidadaos?: CidadaoListRelationFilter
  }, "id">

  export type ReparticaoOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ReparticaoCountOrderByAggregateInput
    _max?: ReparticaoMaxOrderByAggregateInput
    _min?: ReparticaoMinOrderByAggregateInput
  }

  export type ReparticaoScalarWhereWithAggregatesInput = {
    AND?: ReparticaoScalarWhereWithAggregatesInput | ReparticaoScalarWhereWithAggregatesInput[]
    OR?: ReparticaoScalarWhereWithAggregatesInput[]
    NOT?: ReparticaoScalarWhereWithAggregatesInput | ReparticaoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Reparticao"> | string
    name?: StringWithAggregatesFilter<"Reparticao"> | string
    slug?: StringWithAggregatesFilter<"Reparticao"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Reparticao"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Reparticao"> | Date | string
  }

  export type GuicheWhereInput = {
    AND?: GuicheWhereInput | GuicheWhereInput[]
    OR?: GuicheWhereInput[]
    NOT?: GuicheWhereInput | GuicheWhereInput[]
    id?: StringFilter<"Guiche"> | string
    name?: StringFilter<"Guiche"> | string
    reparticaoId?: StringFilter<"Guiche"> | string
    createdAt?: DateTimeFilter<"Guiche"> | Date | string
    updatedAt?: DateTimeFilter<"Guiche"> | Date | string
    senha?: SenhaListRelationFilter
    reparticao?: XOR<ReparticaoScalarRelationFilter, ReparticaoWhereInput>
  }

  export type GuicheOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    reparticaoId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    senha?: SenhaOrderByRelationAggregateInput
    reparticao?: ReparticaoOrderByWithRelationInput
  }

  export type GuicheWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: GuicheWhereInput | GuicheWhereInput[]
    OR?: GuicheWhereInput[]
    NOT?: GuicheWhereInput | GuicheWhereInput[]
    name?: StringFilter<"Guiche"> | string
    reparticaoId?: StringFilter<"Guiche"> | string
    createdAt?: DateTimeFilter<"Guiche"> | Date | string
    updatedAt?: DateTimeFilter<"Guiche"> | Date | string
    senha?: SenhaListRelationFilter
    reparticao?: XOR<ReparticaoScalarRelationFilter, ReparticaoWhereInput>
  }, "id">

  export type GuicheOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    reparticaoId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: GuicheCountOrderByAggregateInput
    _max?: GuicheMaxOrderByAggregateInput
    _min?: GuicheMinOrderByAggregateInput
  }

  export type GuicheScalarWhereWithAggregatesInput = {
    AND?: GuicheScalarWhereWithAggregatesInput | GuicheScalarWhereWithAggregatesInput[]
    OR?: GuicheScalarWhereWithAggregatesInput[]
    NOT?: GuicheScalarWhereWithAggregatesInput | GuicheScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Guiche"> | string
    name?: StringWithAggregatesFilter<"Guiche"> | string
    reparticaoId?: StringWithAggregatesFilter<"Guiche"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Guiche"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Guiche"> | Date | string
  }

  export type UsuarioWhereInput = {
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    id?: StringFilter<"Usuario"> | string
    role?: EnumRoleFilter<"Usuario"> | $Enums.Role
    name?: StringFilter<"Usuario"> | string
    cpf?: StringFilter<"Usuario"> | string
    password?: StringFilter<"Usuario"> | string
    reparticaoId?: StringFilter<"Usuario"> | string
    createdAt?: DateTimeFilter<"Usuario"> | Date | string
    updatedAt?: DateTimeFilter<"Usuario"> | Date | string
    senha?: SenhaListRelationFilter
    reparticao?: XOR<ReparticaoScalarRelationFilter, ReparticaoWhereInput>
  }

  export type UsuarioOrderByWithRelationInput = {
    id?: SortOrder
    role?: SortOrder
    name?: SortOrder
    cpf?: SortOrder
    password?: SortOrder
    reparticaoId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    senha?: SenhaOrderByRelationAggregateInput
    reparticao?: ReparticaoOrderByWithRelationInput
  }

  export type UsuarioWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    cpf?: string
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    role?: EnumRoleFilter<"Usuario"> | $Enums.Role
    name?: StringFilter<"Usuario"> | string
    password?: StringFilter<"Usuario"> | string
    reparticaoId?: StringFilter<"Usuario"> | string
    createdAt?: DateTimeFilter<"Usuario"> | Date | string
    updatedAt?: DateTimeFilter<"Usuario"> | Date | string
    senha?: SenhaListRelationFilter
    reparticao?: XOR<ReparticaoScalarRelationFilter, ReparticaoWhereInput>
  }, "id" | "cpf">

  export type UsuarioOrderByWithAggregationInput = {
    id?: SortOrder
    role?: SortOrder
    name?: SortOrder
    cpf?: SortOrder
    password?: SortOrder
    reparticaoId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UsuarioCountOrderByAggregateInput
    _max?: UsuarioMaxOrderByAggregateInput
    _min?: UsuarioMinOrderByAggregateInput
  }

  export type UsuarioScalarWhereWithAggregatesInput = {
    AND?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    OR?: UsuarioScalarWhereWithAggregatesInput[]
    NOT?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Usuario"> | string
    role?: EnumRoleWithAggregatesFilter<"Usuario"> | $Enums.Role
    name?: StringWithAggregatesFilter<"Usuario"> | string
    cpf?: StringWithAggregatesFilter<"Usuario"> | string
    password?: StringWithAggregatesFilter<"Usuario"> | string
    reparticaoId?: StringWithAggregatesFilter<"Usuario"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Usuario"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Usuario"> | Date | string
  }

  export type CidadaoWhereInput = {
    AND?: CidadaoWhereInput | CidadaoWhereInput[]
    OR?: CidadaoWhereInput[]
    NOT?: CidadaoWhereInput | CidadaoWhereInput[]
    id?: StringFilter<"Cidadao"> | string
    name?: StringFilter<"Cidadao"> | string
    cpf?: StringFilter<"Cidadao"> | string
    reparticaoId?: StringFilter<"Cidadao"> | string
    createdAt?: DateTimeFilter<"Cidadao"> | Date | string
    updatedAt?: DateTimeFilter<"Cidadao"> | Date | string
    reparticao?: XOR<ReparticaoScalarRelationFilter, ReparticaoWhereInput>
    senha?: SenhaListRelationFilter
  }

  export type CidadaoOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    cpf?: SortOrder
    reparticaoId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    reparticao?: ReparticaoOrderByWithRelationInput
    senha?: SenhaOrderByRelationAggregateInput
  }

  export type CidadaoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    cpf?: string
    AND?: CidadaoWhereInput | CidadaoWhereInput[]
    OR?: CidadaoWhereInput[]
    NOT?: CidadaoWhereInput | CidadaoWhereInput[]
    name?: StringFilter<"Cidadao"> | string
    reparticaoId?: StringFilter<"Cidadao"> | string
    createdAt?: DateTimeFilter<"Cidadao"> | Date | string
    updatedAt?: DateTimeFilter<"Cidadao"> | Date | string
    reparticao?: XOR<ReparticaoScalarRelationFilter, ReparticaoWhereInput>
    senha?: SenhaListRelationFilter
  }, "id" | "cpf">

  export type CidadaoOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    cpf?: SortOrder
    reparticaoId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CidadaoCountOrderByAggregateInput
    _max?: CidadaoMaxOrderByAggregateInput
    _min?: CidadaoMinOrderByAggregateInput
  }

  export type CidadaoScalarWhereWithAggregatesInput = {
    AND?: CidadaoScalarWhereWithAggregatesInput | CidadaoScalarWhereWithAggregatesInput[]
    OR?: CidadaoScalarWhereWithAggregatesInput[]
    NOT?: CidadaoScalarWhereWithAggregatesInput | CidadaoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Cidadao"> | string
    name?: StringWithAggregatesFilter<"Cidadao"> | string
    cpf?: StringWithAggregatesFilter<"Cidadao"> | string
    reparticaoId?: StringWithAggregatesFilter<"Cidadao"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Cidadao"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Cidadao"> | Date | string
  }

  export type ServicoWhereInput = {
    AND?: ServicoWhereInput | ServicoWhereInput[]
    OR?: ServicoWhereInput[]
    NOT?: ServicoWhereInput | ServicoWhereInput[]
    id?: StringFilter<"Servico"> | string
    name?: StringFilter<"Servico"> | string
    slug?: StringFilter<"Servico"> | string
    createdAt?: DateTimeFilter<"Servico"> | Date | string
    updatedAt?: DateTimeFilter<"Servico"> | Date | string
    reparticaoId?: StringFilter<"Servico"> | string
    senha?: SenhaListRelationFilter
    contador?: ContadorPrioridadeListRelationFilter
    reparticao?: XOR<ReparticaoScalarRelationFilter, ReparticaoWhereInput>
  }

  export type ServicoOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    reparticaoId?: SortOrder
    senha?: SenhaOrderByRelationAggregateInput
    contador?: ContadorPrioridadeOrderByRelationAggregateInput
    reparticao?: ReparticaoOrderByWithRelationInput
  }

  export type ServicoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ServicoWhereInput | ServicoWhereInput[]
    OR?: ServicoWhereInput[]
    NOT?: ServicoWhereInput | ServicoWhereInput[]
    name?: StringFilter<"Servico"> | string
    slug?: StringFilter<"Servico"> | string
    createdAt?: DateTimeFilter<"Servico"> | Date | string
    updatedAt?: DateTimeFilter<"Servico"> | Date | string
    reparticaoId?: StringFilter<"Servico"> | string
    senha?: SenhaListRelationFilter
    contador?: ContadorPrioridadeListRelationFilter
    reparticao?: XOR<ReparticaoScalarRelationFilter, ReparticaoWhereInput>
  }, "id">

  export type ServicoOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    reparticaoId?: SortOrder
    _count?: ServicoCountOrderByAggregateInput
    _max?: ServicoMaxOrderByAggregateInput
    _min?: ServicoMinOrderByAggregateInput
  }

  export type ServicoScalarWhereWithAggregatesInput = {
    AND?: ServicoScalarWhereWithAggregatesInput | ServicoScalarWhereWithAggregatesInput[]
    OR?: ServicoScalarWhereWithAggregatesInput[]
    NOT?: ServicoScalarWhereWithAggregatesInput | ServicoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Servico"> | string
    name?: StringWithAggregatesFilter<"Servico"> | string
    slug?: StringWithAggregatesFilter<"Servico"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Servico"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Servico"> | Date | string
    reparticaoId?: StringWithAggregatesFilter<"Servico"> | string
  }

  export type SenhaWhereInput = {
    AND?: SenhaWhereInput | SenhaWhereInput[]
    OR?: SenhaWhereInput[]
    NOT?: SenhaWhereInput | SenhaWhereInput[]
    id?: IntFilter<"Senha"> | number
    senha?: StringNullableFilter<"Senha"> | string | null
    numeroOrdem?: IntFilter<"Senha"> | number
    prioridade?: EnumPrioridadesFilter<"Senha"> | $Enums.Prioridades
    status?: EnumSenhaStatusFilter<"Senha"> | $Enums.SenhaStatus
    guicheId?: StringNullableFilter<"Senha"> | string | null
    usuarioId?: StringNullableFilter<"Senha"> | string | null
    servicoId?: StringFilter<"Senha"> | string
    cidadaoId?: StringFilter<"Senha"> | string
    createdAt?: DateTimeFilter<"Senha"> | Date | string
    updatedAt?: DateTimeFilter<"Senha"> | Date | string
    guiche?: XOR<GuicheNullableScalarRelationFilter, GuicheWhereInput> | null
    usuario?: XOR<UsuarioNullableScalarRelationFilter, UsuarioWhereInput> | null
    servico?: XOR<ServicoScalarRelationFilter, ServicoWhereInput>
    cidadao?: XOR<CidadaoScalarRelationFilter, CidadaoWhereInput>
  }

  export type SenhaOrderByWithRelationInput = {
    id?: SortOrder
    senha?: SortOrderInput | SortOrder
    numeroOrdem?: SortOrder
    prioridade?: SortOrder
    status?: SortOrder
    guicheId?: SortOrderInput | SortOrder
    usuarioId?: SortOrderInput | SortOrder
    servicoId?: SortOrder
    cidadaoId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    guiche?: GuicheOrderByWithRelationInput
    usuario?: UsuarioOrderByWithRelationInput
    servico?: ServicoOrderByWithRelationInput
    cidadao?: CidadaoOrderByWithRelationInput
  }

  export type SenhaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SenhaWhereInput | SenhaWhereInput[]
    OR?: SenhaWhereInput[]
    NOT?: SenhaWhereInput | SenhaWhereInput[]
    senha?: StringNullableFilter<"Senha"> | string | null
    numeroOrdem?: IntFilter<"Senha"> | number
    prioridade?: EnumPrioridadesFilter<"Senha"> | $Enums.Prioridades
    status?: EnumSenhaStatusFilter<"Senha"> | $Enums.SenhaStatus
    guicheId?: StringNullableFilter<"Senha"> | string | null
    usuarioId?: StringNullableFilter<"Senha"> | string | null
    servicoId?: StringFilter<"Senha"> | string
    cidadaoId?: StringFilter<"Senha"> | string
    createdAt?: DateTimeFilter<"Senha"> | Date | string
    updatedAt?: DateTimeFilter<"Senha"> | Date | string
    guiche?: XOR<GuicheNullableScalarRelationFilter, GuicheWhereInput> | null
    usuario?: XOR<UsuarioNullableScalarRelationFilter, UsuarioWhereInput> | null
    servico?: XOR<ServicoScalarRelationFilter, ServicoWhereInput>
    cidadao?: XOR<CidadaoScalarRelationFilter, CidadaoWhereInput>
  }, "id">

  export type SenhaOrderByWithAggregationInput = {
    id?: SortOrder
    senha?: SortOrderInput | SortOrder
    numeroOrdem?: SortOrder
    prioridade?: SortOrder
    status?: SortOrder
    guicheId?: SortOrderInput | SortOrder
    usuarioId?: SortOrderInput | SortOrder
    servicoId?: SortOrder
    cidadaoId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SenhaCountOrderByAggregateInput
    _avg?: SenhaAvgOrderByAggregateInput
    _max?: SenhaMaxOrderByAggregateInput
    _min?: SenhaMinOrderByAggregateInput
    _sum?: SenhaSumOrderByAggregateInput
  }

  export type SenhaScalarWhereWithAggregatesInput = {
    AND?: SenhaScalarWhereWithAggregatesInput | SenhaScalarWhereWithAggregatesInput[]
    OR?: SenhaScalarWhereWithAggregatesInput[]
    NOT?: SenhaScalarWhereWithAggregatesInput | SenhaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Senha"> | number
    senha?: StringNullableWithAggregatesFilter<"Senha"> | string | null
    numeroOrdem?: IntWithAggregatesFilter<"Senha"> | number
    prioridade?: EnumPrioridadesWithAggregatesFilter<"Senha"> | $Enums.Prioridades
    status?: EnumSenhaStatusWithAggregatesFilter<"Senha"> | $Enums.SenhaStatus
    guicheId?: StringNullableWithAggregatesFilter<"Senha"> | string | null
    usuarioId?: StringNullableWithAggregatesFilter<"Senha"> | string | null
    servicoId?: StringWithAggregatesFilter<"Senha"> | string
    cidadaoId?: StringWithAggregatesFilter<"Senha"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Senha"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Senha"> | Date | string
  }

  export type ContadorPrioridadeWhereInput = {
    AND?: ContadorPrioridadeWhereInput | ContadorPrioridadeWhereInput[]
    OR?: ContadorPrioridadeWhereInput[]
    NOT?: ContadorPrioridadeWhereInput | ContadorPrioridadeWhereInput[]
    id?: IntFilter<"ContadorPrioridade"> | number
    servicoId?: StringFilter<"ContadorPrioridade"> | string
    quantidade?: IntFilter<"ContadorPrioridade"> | number
    updatedAt?: DateTimeFilter<"ContadorPrioridade"> | Date | string
    servico?: XOR<ServicoScalarRelationFilter, ServicoWhereInput>
  }

  export type ContadorPrioridadeOrderByWithRelationInput = {
    id?: SortOrder
    servicoId?: SortOrder
    quantidade?: SortOrder
    updatedAt?: SortOrder
    servico?: ServicoOrderByWithRelationInput
  }

  export type ContadorPrioridadeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    servicoId?: string
    AND?: ContadorPrioridadeWhereInput | ContadorPrioridadeWhereInput[]
    OR?: ContadorPrioridadeWhereInput[]
    NOT?: ContadorPrioridadeWhereInput | ContadorPrioridadeWhereInput[]
    quantidade?: IntFilter<"ContadorPrioridade"> | number
    updatedAt?: DateTimeFilter<"ContadorPrioridade"> | Date | string
    servico?: XOR<ServicoScalarRelationFilter, ServicoWhereInput>
  }, "id" | "servicoId">

  export type ContadorPrioridadeOrderByWithAggregationInput = {
    id?: SortOrder
    servicoId?: SortOrder
    quantidade?: SortOrder
    updatedAt?: SortOrder
    _count?: ContadorPrioridadeCountOrderByAggregateInput
    _avg?: ContadorPrioridadeAvgOrderByAggregateInput
    _max?: ContadorPrioridadeMaxOrderByAggregateInput
    _min?: ContadorPrioridadeMinOrderByAggregateInput
    _sum?: ContadorPrioridadeSumOrderByAggregateInput
  }

  export type ContadorPrioridadeScalarWhereWithAggregatesInput = {
    AND?: ContadorPrioridadeScalarWhereWithAggregatesInput | ContadorPrioridadeScalarWhereWithAggregatesInput[]
    OR?: ContadorPrioridadeScalarWhereWithAggregatesInput[]
    NOT?: ContadorPrioridadeScalarWhereWithAggregatesInput | ContadorPrioridadeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ContadorPrioridade"> | number
    servicoId?: StringWithAggregatesFilter<"ContadorPrioridade"> | string
    quantidade?: IntWithAggregatesFilter<"ContadorPrioridade"> | number
    updatedAt?: DateTimeWithAggregatesFilter<"ContadorPrioridade"> | Date | string
  }

  export type ReparticaoCreateInput = {
    id?: string
    name: string
    slug: string
    createdAt?: Date | string
    updatedAt?: Date | string
    servicos?: ServicoCreateNestedManyWithoutReparticaoInput
    usuarios?: UsuarioCreateNestedManyWithoutReparticaoInput
    guiches?: GuicheCreateNestedManyWithoutReparticaoInput
    cidadaos?: CidadaoCreateNestedManyWithoutReparticaoInput
  }

  export type ReparticaoUncheckedCreateInput = {
    id?: string
    name: string
    slug: string
    createdAt?: Date | string
    updatedAt?: Date | string
    servicos?: ServicoUncheckedCreateNestedManyWithoutReparticaoInput
    usuarios?: UsuarioUncheckedCreateNestedManyWithoutReparticaoInput
    guiches?: GuicheUncheckedCreateNestedManyWithoutReparticaoInput
    cidadaos?: CidadaoUncheckedCreateNestedManyWithoutReparticaoInput
  }

  export type ReparticaoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    servicos?: ServicoUpdateManyWithoutReparticaoNestedInput
    usuarios?: UsuarioUpdateManyWithoutReparticaoNestedInput
    guiches?: GuicheUpdateManyWithoutReparticaoNestedInput
    cidadaos?: CidadaoUpdateManyWithoutReparticaoNestedInput
  }

  export type ReparticaoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    servicos?: ServicoUncheckedUpdateManyWithoutReparticaoNestedInput
    usuarios?: UsuarioUncheckedUpdateManyWithoutReparticaoNestedInput
    guiches?: GuicheUncheckedUpdateManyWithoutReparticaoNestedInput
    cidadaos?: CidadaoUncheckedUpdateManyWithoutReparticaoNestedInput
  }

  export type ReparticaoCreateManyInput = {
    id?: string
    name: string
    slug: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReparticaoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReparticaoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GuicheCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    senha?: SenhaCreateNestedManyWithoutGuicheInput
    reparticao: ReparticaoCreateNestedOneWithoutGuichesInput
  }

  export type GuicheUncheckedCreateInput = {
    id?: string
    name: string
    reparticaoId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    senha?: SenhaUncheckedCreateNestedManyWithoutGuicheInput
  }

  export type GuicheUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    senha?: SenhaUpdateManyWithoutGuicheNestedInput
    reparticao?: ReparticaoUpdateOneRequiredWithoutGuichesNestedInput
  }

  export type GuicheUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    reparticaoId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    senha?: SenhaUncheckedUpdateManyWithoutGuicheNestedInput
  }

  export type GuicheCreateManyInput = {
    id?: string
    name: string
    reparticaoId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GuicheUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GuicheUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    reparticaoId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsuarioCreateInput = {
    id?: string
    role?: $Enums.Role
    name: string
    cpf: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    senha?: SenhaCreateNestedManyWithoutUsuarioInput
    reparticao: ReparticaoCreateNestedOneWithoutUsuariosInput
  }

  export type UsuarioUncheckedCreateInput = {
    id?: string
    role?: $Enums.Role
    name: string
    cpf: string
    password: string
    reparticaoId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    senha?: SenhaUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    name?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    senha?: SenhaUpdateManyWithoutUsuarioNestedInput
    reparticao?: ReparticaoUpdateOneRequiredWithoutUsuariosNestedInput
  }

  export type UsuarioUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    name?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    reparticaoId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    senha?: SenhaUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioCreateManyInput = {
    id?: string
    role?: $Enums.Role
    name: string
    cpf: string
    password: string
    reparticaoId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UsuarioUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    name?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsuarioUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    name?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    reparticaoId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CidadaoCreateInput = {
    id?: string
    name: string
    cpf: string
    createdAt?: Date | string
    updatedAt?: Date | string
    reparticao: ReparticaoCreateNestedOneWithoutCidadaosInput
    senha?: SenhaCreateNestedManyWithoutCidadaoInput
  }

  export type CidadaoUncheckedCreateInput = {
    id?: string
    name: string
    cpf: string
    reparticaoId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    senha?: SenhaUncheckedCreateNestedManyWithoutCidadaoInput
  }

  export type CidadaoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reparticao?: ReparticaoUpdateOneRequiredWithoutCidadaosNestedInput
    senha?: SenhaUpdateManyWithoutCidadaoNestedInput
  }

  export type CidadaoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    reparticaoId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    senha?: SenhaUncheckedUpdateManyWithoutCidadaoNestedInput
  }

  export type CidadaoCreateManyInput = {
    id?: string
    name: string
    cpf: string
    reparticaoId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CidadaoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CidadaoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    reparticaoId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServicoCreateInput = {
    id?: string
    name: string
    slug: string
    createdAt?: Date | string
    updatedAt?: Date | string
    senha?: SenhaCreateNestedManyWithoutServicoInput
    contador?: ContadorPrioridadeCreateNestedManyWithoutServicoInput
    reparticao: ReparticaoCreateNestedOneWithoutServicosInput
  }

  export type ServicoUncheckedCreateInput = {
    id?: string
    name: string
    slug: string
    createdAt?: Date | string
    updatedAt?: Date | string
    reparticaoId: string
    senha?: SenhaUncheckedCreateNestedManyWithoutServicoInput
    contador?: ContadorPrioridadeUncheckedCreateNestedManyWithoutServicoInput
  }

  export type ServicoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    senha?: SenhaUpdateManyWithoutServicoNestedInput
    contador?: ContadorPrioridadeUpdateManyWithoutServicoNestedInput
    reparticao?: ReparticaoUpdateOneRequiredWithoutServicosNestedInput
  }

  export type ServicoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reparticaoId?: StringFieldUpdateOperationsInput | string
    senha?: SenhaUncheckedUpdateManyWithoutServicoNestedInput
    contador?: ContadorPrioridadeUncheckedUpdateManyWithoutServicoNestedInput
  }

  export type ServicoCreateManyInput = {
    id?: string
    name: string
    slug: string
    createdAt?: Date | string
    updatedAt?: Date | string
    reparticaoId: string
  }

  export type ServicoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServicoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reparticaoId?: StringFieldUpdateOperationsInput | string
  }

  export type SenhaCreateInput = {
    senha?: string | null
    numeroOrdem?: number
    prioridade?: $Enums.Prioridades
    status?: $Enums.SenhaStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    guiche?: GuicheCreateNestedOneWithoutSenhaInput
    usuario?: UsuarioCreateNestedOneWithoutSenhaInput
    servico: ServicoCreateNestedOneWithoutSenhaInput
    cidadao: CidadaoCreateNestedOneWithoutSenhaInput
  }

  export type SenhaUncheckedCreateInput = {
    id?: number
    senha?: string | null
    numeroOrdem?: number
    prioridade?: $Enums.Prioridades
    status?: $Enums.SenhaStatus
    guicheId?: string | null
    usuarioId?: string | null
    servicoId: string
    cidadaoId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SenhaUpdateInput = {
    senha?: NullableStringFieldUpdateOperationsInput | string | null
    numeroOrdem?: IntFieldUpdateOperationsInput | number
    prioridade?: EnumPrioridadesFieldUpdateOperationsInput | $Enums.Prioridades
    status?: EnumSenhaStatusFieldUpdateOperationsInput | $Enums.SenhaStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    guiche?: GuicheUpdateOneWithoutSenhaNestedInput
    usuario?: UsuarioUpdateOneWithoutSenhaNestedInput
    servico?: ServicoUpdateOneRequiredWithoutSenhaNestedInput
    cidadao?: CidadaoUpdateOneRequiredWithoutSenhaNestedInput
  }

  export type SenhaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    senha?: NullableStringFieldUpdateOperationsInput | string | null
    numeroOrdem?: IntFieldUpdateOperationsInput | number
    prioridade?: EnumPrioridadesFieldUpdateOperationsInput | $Enums.Prioridades
    status?: EnumSenhaStatusFieldUpdateOperationsInput | $Enums.SenhaStatus
    guicheId?: NullableStringFieldUpdateOperationsInput | string | null
    usuarioId?: NullableStringFieldUpdateOperationsInput | string | null
    servicoId?: StringFieldUpdateOperationsInput | string
    cidadaoId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SenhaCreateManyInput = {
    id?: number
    senha?: string | null
    numeroOrdem?: number
    prioridade?: $Enums.Prioridades
    status?: $Enums.SenhaStatus
    guicheId?: string | null
    usuarioId?: string | null
    servicoId: string
    cidadaoId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SenhaUpdateManyMutationInput = {
    senha?: NullableStringFieldUpdateOperationsInput | string | null
    numeroOrdem?: IntFieldUpdateOperationsInput | number
    prioridade?: EnumPrioridadesFieldUpdateOperationsInput | $Enums.Prioridades
    status?: EnumSenhaStatusFieldUpdateOperationsInput | $Enums.SenhaStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SenhaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    senha?: NullableStringFieldUpdateOperationsInput | string | null
    numeroOrdem?: IntFieldUpdateOperationsInput | number
    prioridade?: EnumPrioridadesFieldUpdateOperationsInput | $Enums.Prioridades
    status?: EnumSenhaStatusFieldUpdateOperationsInput | $Enums.SenhaStatus
    guicheId?: NullableStringFieldUpdateOperationsInput | string | null
    usuarioId?: NullableStringFieldUpdateOperationsInput | string | null
    servicoId?: StringFieldUpdateOperationsInput | string
    cidadaoId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContadorPrioridadeCreateInput = {
    quantidade?: number
    updatedAt?: Date | string
    servico: ServicoCreateNestedOneWithoutContadorInput
  }

  export type ContadorPrioridadeUncheckedCreateInput = {
    id?: number
    servicoId: string
    quantidade?: number
    updatedAt?: Date | string
  }

  export type ContadorPrioridadeUpdateInput = {
    quantidade?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    servico?: ServicoUpdateOneRequiredWithoutContadorNestedInput
  }

  export type ContadorPrioridadeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    servicoId?: StringFieldUpdateOperationsInput | string
    quantidade?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContadorPrioridadeCreateManyInput = {
    id?: number
    servicoId: string
    quantidade?: number
    updatedAt?: Date | string
  }

  export type ContadorPrioridadeUpdateManyMutationInput = {
    quantidade?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContadorPrioridadeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    servicoId?: StringFieldUpdateOperationsInput | string
    quantidade?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ServicoListRelationFilter = {
    every?: ServicoWhereInput
    some?: ServicoWhereInput
    none?: ServicoWhereInput
  }

  export type UsuarioListRelationFilter = {
    every?: UsuarioWhereInput
    some?: UsuarioWhereInput
    none?: UsuarioWhereInput
  }

  export type GuicheListRelationFilter = {
    every?: GuicheWhereInput
    some?: GuicheWhereInput
    none?: GuicheWhereInput
  }

  export type CidadaoListRelationFilter = {
    every?: CidadaoWhereInput
    some?: CidadaoWhereInput
    none?: CidadaoWhereInput
  }

  export type ServicoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsuarioOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GuicheOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CidadaoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReparticaoCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReparticaoMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReparticaoMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type SenhaListRelationFilter = {
    every?: SenhaWhereInput
    some?: SenhaWhereInput
    none?: SenhaWhereInput
  }

  export type ReparticaoScalarRelationFilter = {
    is?: ReparticaoWhereInput
    isNot?: ReparticaoWhereInput
  }

  export type SenhaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GuicheCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    reparticaoId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GuicheMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    reparticaoId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GuicheMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    reparticaoId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type UsuarioCountOrderByAggregateInput = {
    id?: SortOrder
    role?: SortOrder
    name?: SortOrder
    cpf?: SortOrder
    password?: SortOrder
    reparticaoId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UsuarioMaxOrderByAggregateInput = {
    id?: SortOrder
    role?: SortOrder
    name?: SortOrder
    cpf?: SortOrder
    password?: SortOrder
    reparticaoId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UsuarioMinOrderByAggregateInput = {
    id?: SortOrder
    role?: SortOrder
    name?: SortOrder
    cpf?: SortOrder
    password?: SortOrder
    reparticaoId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type CidadaoCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    cpf?: SortOrder
    reparticaoId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CidadaoMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    cpf?: SortOrder
    reparticaoId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CidadaoMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    cpf?: SortOrder
    reparticaoId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ContadorPrioridadeListRelationFilter = {
    every?: ContadorPrioridadeWhereInput
    some?: ContadorPrioridadeWhereInput
    none?: ContadorPrioridadeWhereInput
  }

  export type ContadorPrioridadeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ServicoCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    reparticaoId?: SortOrder
  }

  export type ServicoMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    reparticaoId?: SortOrder
  }

  export type ServicoMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    reparticaoId?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumPrioridadesFilter<$PrismaModel = never> = {
    equals?: $Enums.Prioridades | EnumPrioridadesFieldRefInput<$PrismaModel>
    in?: $Enums.Prioridades[] | ListEnumPrioridadesFieldRefInput<$PrismaModel>
    notIn?: $Enums.Prioridades[] | ListEnumPrioridadesFieldRefInput<$PrismaModel>
    not?: NestedEnumPrioridadesFilter<$PrismaModel> | $Enums.Prioridades
  }

  export type EnumSenhaStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.SenhaStatus | EnumSenhaStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SenhaStatus[] | ListEnumSenhaStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SenhaStatus[] | ListEnumSenhaStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSenhaStatusFilter<$PrismaModel> | $Enums.SenhaStatus
  }

  export type GuicheNullableScalarRelationFilter = {
    is?: GuicheWhereInput | null
    isNot?: GuicheWhereInput | null
  }

  export type UsuarioNullableScalarRelationFilter = {
    is?: UsuarioWhereInput | null
    isNot?: UsuarioWhereInput | null
  }

  export type ServicoScalarRelationFilter = {
    is?: ServicoWhereInput
    isNot?: ServicoWhereInput
  }

  export type CidadaoScalarRelationFilter = {
    is?: CidadaoWhereInput
    isNot?: CidadaoWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type SenhaCountOrderByAggregateInput = {
    id?: SortOrder
    senha?: SortOrder
    numeroOrdem?: SortOrder
    prioridade?: SortOrder
    status?: SortOrder
    guicheId?: SortOrder
    usuarioId?: SortOrder
    servicoId?: SortOrder
    cidadaoId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SenhaAvgOrderByAggregateInput = {
    id?: SortOrder
    numeroOrdem?: SortOrder
  }

  export type SenhaMaxOrderByAggregateInput = {
    id?: SortOrder
    senha?: SortOrder
    numeroOrdem?: SortOrder
    prioridade?: SortOrder
    status?: SortOrder
    guicheId?: SortOrder
    usuarioId?: SortOrder
    servicoId?: SortOrder
    cidadaoId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SenhaMinOrderByAggregateInput = {
    id?: SortOrder
    senha?: SortOrder
    numeroOrdem?: SortOrder
    prioridade?: SortOrder
    status?: SortOrder
    guicheId?: SortOrder
    usuarioId?: SortOrder
    servicoId?: SortOrder
    cidadaoId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SenhaSumOrderByAggregateInput = {
    id?: SortOrder
    numeroOrdem?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumPrioridadesWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Prioridades | EnumPrioridadesFieldRefInput<$PrismaModel>
    in?: $Enums.Prioridades[] | ListEnumPrioridadesFieldRefInput<$PrismaModel>
    notIn?: $Enums.Prioridades[] | ListEnumPrioridadesFieldRefInput<$PrismaModel>
    not?: NestedEnumPrioridadesWithAggregatesFilter<$PrismaModel> | $Enums.Prioridades
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPrioridadesFilter<$PrismaModel>
    _max?: NestedEnumPrioridadesFilter<$PrismaModel>
  }

  export type EnumSenhaStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SenhaStatus | EnumSenhaStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SenhaStatus[] | ListEnumSenhaStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SenhaStatus[] | ListEnumSenhaStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSenhaStatusWithAggregatesFilter<$PrismaModel> | $Enums.SenhaStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSenhaStatusFilter<$PrismaModel>
    _max?: NestedEnumSenhaStatusFilter<$PrismaModel>
  }

  export type ContadorPrioridadeCountOrderByAggregateInput = {
    id?: SortOrder
    servicoId?: SortOrder
    quantidade?: SortOrder
    updatedAt?: SortOrder
  }

  export type ContadorPrioridadeAvgOrderByAggregateInput = {
    id?: SortOrder
    quantidade?: SortOrder
  }

  export type ContadorPrioridadeMaxOrderByAggregateInput = {
    id?: SortOrder
    servicoId?: SortOrder
    quantidade?: SortOrder
    updatedAt?: SortOrder
  }

  export type ContadorPrioridadeMinOrderByAggregateInput = {
    id?: SortOrder
    servicoId?: SortOrder
    quantidade?: SortOrder
    updatedAt?: SortOrder
  }

  export type ContadorPrioridadeSumOrderByAggregateInput = {
    id?: SortOrder
    quantidade?: SortOrder
  }

  export type ServicoCreateNestedManyWithoutReparticaoInput = {
    create?: XOR<ServicoCreateWithoutReparticaoInput, ServicoUncheckedCreateWithoutReparticaoInput> | ServicoCreateWithoutReparticaoInput[] | ServicoUncheckedCreateWithoutReparticaoInput[]
    connectOrCreate?: ServicoCreateOrConnectWithoutReparticaoInput | ServicoCreateOrConnectWithoutReparticaoInput[]
    createMany?: ServicoCreateManyReparticaoInputEnvelope
    connect?: ServicoWhereUniqueInput | ServicoWhereUniqueInput[]
  }

  export type UsuarioCreateNestedManyWithoutReparticaoInput = {
    create?: XOR<UsuarioCreateWithoutReparticaoInput, UsuarioUncheckedCreateWithoutReparticaoInput> | UsuarioCreateWithoutReparticaoInput[] | UsuarioUncheckedCreateWithoutReparticaoInput[]
    connectOrCreate?: UsuarioCreateOrConnectWithoutReparticaoInput | UsuarioCreateOrConnectWithoutReparticaoInput[]
    createMany?: UsuarioCreateManyReparticaoInputEnvelope
    connect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
  }

  export type GuicheCreateNestedManyWithoutReparticaoInput = {
    create?: XOR<GuicheCreateWithoutReparticaoInput, GuicheUncheckedCreateWithoutReparticaoInput> | GuicheCreateWithoutReparticaoInput[] | GuicheUncheckedCreateWithoutReparticaoInput[]
    connectOrCreate?: GuicheCreateOrConnectWithoutReparticaoInput | GuicheCreateOrConnectWithoutReparticaoInput[]
    createMany?: GuicheCreateManyReparticaoInputEnvelope
    connect?: GuicheWhereUniqueInput | GuicheWhereUniqueInput[]
  }

  export type CidadaoCreateNestedManyWithoutReparticaoInput = {
    create?: XOR<CidadaoCreateWithoutReparticaoInput, CidadaoUncheckedCreateWithoutReparticaoInput> | CidadaoCreateWithoutReparticaoInput[] | CidadaoUncheckedCreateWithoutReparticaoInput[]
    connectOrCreate?: CidadaoCreateOrConnectWithoutReparticaoInput | CidadaoCreateOrConnectWithoutReparticaoInput[]
    createMany?: CidadaoCreateManyReparticaoInputEnvelope
    connect?: CidadaoWhereUniqueInput | CidadaoWhereUniqueInput[]
  }

  export type ServicoUncheckedCreateNestedManyWithoutReparticaoInput = {
    create?: XOR<ServicoCreateWithoutReparticaoInput, ServicoUncheckedCreateWithoutReparticaoInput> | ServicoCreateWithoutReparticaoInput[] | ServicoUncheckedCreateWithoutReparticaoInput[]
    connectOrCreate?: ServicoCreateOrConnectWithoutReparticaoInput | ServicoCreateOrConnectWithoutReparticaoInput[]
    createMany?: ServicoCreateManyReparticaoInputEnvelope
    connect?: ServicoWhereUniqueInput | ServicoWhereUniqueInput[]
  }

  export type UsuarioUncheckedCreateNestedManyWithoutReparticaoInput = {
    create?: XOR<UsuarioCreateWithoutReparticaoInput, UsuarioUncheckedCreateWithoutReparticaoInput> | UsuarioCreateWithoutReparticaoInput[] | UsuarioUncheckedCreateWithoutReparticaoInput[]
    connectOrCreate?: UsuarioCreateOrConnectWithoutReparticaoInput | UsuarioCreateOrConnectWithoutReparticaoInput[]
    createMany?: UsuarioCreateManyReparticaoInputEnvelope
    connect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
  }

  export type GuicheUncheckedCreateNestedManyWithoutReparticaoInput = {
    create?: XOR<GuicheCreateWithoutReparticaoInput, GuicheUncheckedCreateWithoutReparticaoInput> | GuicheCreateWithoutReparticaoInput[] | GuicheUncheckedCreateWithoutReparticaoInput[]
    connectOrCreate?: GuicheCreateOrConnectWithoutReparticaoInput | GuicheCreateOrConnectWithoutReparticaoInput[]
    createMany?: GuicheCreateManyReparticaoInputEnvelope
    connect?: GuicheWhereUniqueInput | GuicheWhereUniqueInput[]
  }

  export type CidadaoUncheckedCreateNestedManyWithoutReparticaoInput = {
    create?: XOR<CidadaoCreateWithoutReparticaoInput, CidadaoUncheckedCreateWithoutReparticaoInput> | CidadaoCreateWithoutReparticaoInput[] | CidadaoUncheckedCreateWithoutReparticaoInput[]
    connectOrCreate?: CidadaoCreateOrConnectWithoutReparticaoInput | CidadaoCreateOrConnectWithoutReparticaoInput[]
    createMany?: CidadaoCreateManyReparticaoInputEnvelope
    connect?: CidadaoWhereUniqueInput | CidadaoWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ServicoUpdateManyWithoutReparticaoNestedInput = {
    create?: XOR<ServicoCreateWithoutReparticaoInput, ServicoUncheckedCreateWithoutReparticaoInput> | ServicoCreateWithoutReparticaoInput[] | ServicoUncheckedCreateWithoutReparticaoInput[]
    connectOrCreate?: ServicoCreateOrConnectWithoutReparticaoInput | ServicoCreateOrConnectWithoutReparticaoInput[]
    upsert?: ServicoUpsertWithWhereUniqueWithoutReparticaoInput | ServicoUpsertWithWhereUniqueWithoutReparticaoInput[]
    createMany?: ServicoCreateManyReparticaoInputEnvelope
    set?: ServicoWhereUniqueInput | ServicoWhereUniqueInput[]
    disconnect?: ServicoWhereUniqueInput | ServicoWhereUniqueInput[]
    delete?: ServicoWhereUniqueInput | ServicoWhereUniqueInput[]
    connect?: ServicoWhereUniqueInput | ServicoWhereUniqueInput[]
    update?: ServicoUpdateWithWhereUniqueWithoutReparticaoInput | ServicoUpdateWithWhereUniqueWithoutReparticaoInput[]
    updateMany?: ServicoUpdateManyWithWhereWithoutReparticaoInput | ServicoUpdateManyWithWhereWithoutReparticaoInput[]
    deleteMany?: ServicoScalarWhereInput | ServicoScalarWhereInput[]
  }

  export type UsuarioUpdateManyWithoutReparticaoNestedInput = {
    create?: XOR<UsuarioCreateWithoutReparticaoInput, UsuarioUncheckedCreateWithoutReparticaoInput> | UsuarioCreateWithoutReparticaoInput[] | UsuarioUncheckedCreateWithoutReparticaoInput[]
    connectOrCreate?: UsuarioCreateOrConnectWithoutReparticaoInput | UsuarioCreateOrConnectWithoutReparticaoInput[]
    upsert?: UsuarioUpsertWithWhereUniqueWithoutReparticaoInput | UsuarioUpsertWithWhereUniqueWithoutReparticaoInput[]
    createMany?: UsuarioCreateManyReparticaoInputEnvelope
    set?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    disconnect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    delete?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    connect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    update?: UsuarioUpdateWithWhereUniqueWithoutReparticaoInput | UsuarioUpdateWithWhereUniqueWithoutReparticaoInput[]
    updateMany?: UsuarioUpdateManyWithWhereWithoutReparticaoInput | UsuarioUpdateManyWithWhereWithoutReparticaoInput[]
    deleteMany?: UsuarioScalarWhereInput | UsuarioScalarWhereInput[]
  }

  export type GuicheUpdateManyWithoutReparticaoNestedInput = {
    create?: XOR<GuicheCreateWithoutReparticaoInput, GuicheUncheckedCreateWithoutReparticaoInput> | GuicheCreateWithoutReparticaoInput[] | GuicheUncheckedCreateWithoutReparticaoInput[]
    connectOrCreate?: GuicheCreateOrConnectWithoutReparticaoInput | GuicheCreateOrConnectWithoutReparticaoInput[]
    upsert?: GuicheUpsertWithWhereUniqueWithoutReparticaoInput | GuicheUpsertWithWhereUniqueWithoutReparticaoInput[]
    createMany?: GuicheCreateManyReparticaoInputEnvelope
    set?: GuicheWhereUniqueInput | GuicheWhereUniqueInput[]
    disconnect?: GuicheWhereUniqueInput | GuicheWhereUniqueInput[]
    delete?: GuicheWhereUniqueInput | GuicheWhereUniqueInput[]
    connect?: GuicheWhereUniqueInput | GuicheWhereUniqueInput[]
    update?: GuicheUpdateWithWhereUniqueWithoutReparticaoInput | GuicheUpdateWithWhereUniqueWithoutReparticaoInput[]
    updateMany?: GuicheUpdateManyWithWhereWithoutReparticaoInput | GuicheUpdateManyWithWhereWithoutReparticaoInput[]
    deleteMany?: GuicheScalarWhereInput | GuicheScalarWhereInput[]
  }

  export type CidadaoUpdateManyWithoutReparticaoNestedInput = {
    create?: XOR<CidadaoCreateWithoutReparticaoInput, CidadaoUncheckedCreateWithoutReparticaoInput> | CidadaoCreateWithoutReparticaoInput[] | CidadaoUncheckedCreateWithoutReparticaoInput[]
    connectOrCreate?: CidadaoCreateOrConnectWithoutReparticaoInput | CidadaoCreateOrConnectWithoutReparticaoInput[]
    upsert?: CidadaoUpsertWithWhereUniqueWithoutReparticaoInput | CidadaoUpsertWithWhereUniqueWithoutReparticaoInput[]
    createMany?: CidadaoCreateManyReparticaoInputEnvelope
    set?: CidadaoWhereUniqueInput | CidadaoWhereUniqueInput[]
    disconnect?: CidadaoWhereUniqueInput | CidadaoWhereUniqueInput[]
    delete?: CidadaoWhereUniqueInput | CidadaoWhereUniqueInput[]
    connect?: CidadaoWhereUniqueInput | CidadaoWhereUniqueInput[]
    update?: CidadaoUpdateWithWhereUniqueWithoutReparticaoInput | CidadaoUpdateWithWhereUniqueWithoutReparticaoInput[]
    updateMany?: CidadaoUpdateManyWithWhereWithoutReparticaoInput | CidadaoUpdateManyWithWhereWithoutReparticaoInput[]
    deleteMany?: CidadaoScalarWhereInput | CidadaoScalarWhereInput[]
  }

  export type ServicoUncheckedUpdateManyWithoutReparticaoNestedInput = {
    create?: XOR<ServicoCreateWithoutReparticaoInput, ServicoUncheckedCreateWithoutReparticaoInput> | ServicoCreateWithoutReparticaoInput[] | ServicoUncheckedCreateWithoutReparticaoInput[]
    connectOrCreate?: ServicoCreateOrConnectWithoutReparticaoInput | ServicoCreateOrConnectWithoutReparticaoInput[]
    upsert?: ServicoUpsertWithWhereUniqueWithoutReparticaoInput | ServicoUpsertWithWhereUniqueWithoutReparticaoInput[]
    createMany?: ServicoCreateManyReparticaoInputEnvelope
    set?: ServicoWhereUniqueInput | ServicoWhereUniqueInput[]
    disconnect?: ServicoWhereUniqueInput | ServicoWhereUniqueInput[]
    delete?: ServicoWhereUniqueInput | ServicoWhereUniqueInput[]
    connect?: ServicoWhereUniqueInput | ServicoWhereUniqueInput[]
    update?: ServicoUpdateWithWhereUniqueWithoutReparticaoInput | ServicoUpdateWithWhereUniqueWithoutReparticaoInput[]
    updateMany?: ServicoUpdateManyWithWhereWithoutReparticaoInput | ServicoUpdateManyWithWhereWithoutReparticaoInput[]
    deleteMany?: ServicoScalarWhereInput | ServicoScalarWhereInput[]
  }

  export type UsuarioUncheckedUpdateManyWithoutReparticaoNestedInput = {
    create?: XOR<UsuarioCreateWithoutReparticaoInput, UsuarioUncheckedCreateWithoutReparticaoInput> | UsuarioCreateWithoutReparticaoInput[] | UsuarioUncheckedCreateWithoutReparticaoInput[]
    connectOrCreate?: UsuarioCreateOrConnectWithoutReparticaoInput | UsuarioCreateOrConnectWithoutReparticaoInput[]
    upsert?: UsuarioUpsertWithWhereUniqueWithoutReparticaoInput | UsuarioUpsertWithWhereUniqueWithoutReparticaoInput[]
    createMany?: UsuarioCreateManyReparticaoInputEnvelope
    set?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    disconnect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    delete?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    connect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    update?: UsuarioUpdateWithWhereUniqueWithoutReparticaoInput | UsuarioUpdateWithWhereUniqueWithoutReparticaoInput[]
    updateMany?: UsuarioUpdateManyWithWhereWithoutReparticaoInput | UsuarioUpdateManyWithWhereWithoutReparticaoInput[]
    deleteMany?: UsuarioScalarWhereInput | UsuarioScalarWhereInput[]
  }

  export type GuicheUncheckedUpdateManyWithoutReparticaoNestedInput = {
    create?: XOR<GuicheCreateWithoutReparticaoInput, GuicheUncheckedCreateWithoutReparticaoInput> | GuicheCreateWithoutReparticaoInput[] | GuicheUncheckedCreateWithoutReparticaoInput[]
    connectOrCreate?: GuicheCreateOrConnectWithoutReparticaoInput | GuicheCreateOrConnectWithoutReparticaoInput[]
    upsert?: GuicheUpsertWithWhereUniqueWithoutReparticaoInput | GuicheUpsertWithWhereUniqueWithoutReparticaoInput[]
    createMany?: GuicheCreateManyReparticaoInputEnvelope
    set?: GuicheWhereUniqueInput | GuicheWhereUniqueInput[]
    disconnect?: GuicheWhereUniqueInput | GuicheWhereUniqueInput[]
    delete?: GuicheWhereUniqueInput | GuicheWhereUniqueInput[]
    connect?: GuicheWhereUniqueInput | GuicheWhereUniqueInput[]
    update?: GuicheUpdateWithWhereUniqueWithoutReparticaoInput | GuicheUpdateWithWhereUniqueWithoutReparticaoInput[]
    updateMany?: GuicheUpdateManyWithWhereWithoutReparticaoInput | GuicheUpdateManyWithWhereWithoutReparticaoInput[]
    deleteMany?: GuicheScalarWhereInput | GuicheScalarWhereInput[]
  }

  export type CidadaoUncheckedUpdateManyWithoutReparticaoNestedInput = {
    create?: XOR<CidadaoCreateWithoutReparticaoInput, CidadaoUncheckedCreateWithoutReparticaoInput> | CidadaoCreateWithoutReparticaoInput[] | CidadaoUncheckedCreateWithoutReparticaoInput[]
    connectOrCreate?: CidadaoCreateOrConnectWithoutReparticaoInput | CidadaoCreateOrConnectWithoutReparticaoInput[]
    upsert?: CidadaoUpsertWithWhereUniqueWithoutReparticaoInput | CidadaoUpsertWithWhereUniqueWithoutReparticaoInput[]
    createMany?: CidadaoCreateManyReparticaoInputEnvelope
    set?: CidadaoWhereUniqueInput | CidadaoWhereUniqueInput[]
    disconnect?: CidadaoWhereUniqueInput | CidadaoWhereUniqueInput[]
    delete?: CidadaoWhereUniqueInput | CidadaoWhereUniqueInput[]
    connect?: CidadaoWhereUniqueInput | CidadaoWhereUniqueInput[]
    update?: CidadaoUpdateWithWhereUniqueWithoutReparticaoInput | CidadaoUpdateWithWhereUniqueWithoutReparticaoInput[]
    updateMany?: CidadaoUpdateManyWithWhereWithoutReparticaoInput | CidadaoUpdateManyWithWhereWithoutReparticaoInput[]
    deleteMany?: CidadaoScalarWhereInput | CidadaoScalarWhereInput[]
  }

  export type SenhaCreateNestedManyWithoutGuicheInput = {
    create?: XOR<SenhaCreateWithoutGuicheInput, SenhaUncheckedCreateWithoutGuicheInput> | SenhaCreateWithoutGuicheInput[] | SenhaUncheckedCreateWithoutGuicheInput[]
    connectOrCreate?: SenhaCreateOrConnectWithoutGuicheInput | SenhaCreateOrConnectWithoutGuicheInput[]
    createMany?: SenhaCreateManyGuicheInputEnvelope
    connect?: SenhaWhereUniqueInput | SenhaWhereUniqueInput[]
  }

  export type ReparticaoCreateNestedOneWithoutGuichesInput = {
    create?: XOR<ReparticaoCreateWithoutGuichesInput, ReparticaoUncheckedCreateWithoutGuichesInput>
    connectOrCreate?: ReparticaoCreateOrConnectWithoutGuichesInput
    connect?: ReparticaoWhereUniqueInput
  }

  export type SenhaUncheckedCreateNestedManyWithoutGuicheInput = {
    create?: XOR<SenhaCreateWithoutGuicheInput, SenhaUncheckedCreateWithoutGuicheInput> | SenhaCreateWithoutGuicheInput[] | SenhaUncheckedCreateWithoutGuicheInput[]
    connectOrCreate?: SenhaCreateOrConnectWithoutGuicheInput | SenhaCreateOrConnectWithoutGuicheInput[]
    createMany?: SenhaCreateManyGuicheInputEnvelope
    connect?: SenhaWhereUniqueInput | SenhaWhereUniqueInput[]
  }

  export type SenhaUpdateManyWithoutGuicheNestedInput = {
    create?: XOR<SenhaCreateWithoutGuicheInput, SenhaUncheckedCreateWithoutGuicheInput> | SenhaCreateWithoutGuicheInput[] | SenhaUncheckedCreateWithoutGuicheInput[]
    connectOrCreate?: SenhaCreateOrConnectWithoutGuicheInput | SenhaCreateOrConnectWithoutGuicheInput[]
    upsert?: SenhaUpsertWithWhereUniqueWithoutGuicheInput | SenhaUpsertWithWhereUniqueWithoutGuicheInput[]
    createMany?: SenhaCreateManyGuicheInputEnvelope
    set?: SenhaWhereUniqueInput | SenhaWhereUniqueInput[]
    disconnect?: SenhaWhereUniqueInput | SenhaWhereUniqueInput[]
    delete?: SenhaWhereUniqueInput | SenhaWhereUniqueInput[]
    connect?: SenhaWhereUniqueInput | SenhaWhereUniqueInput[]
    update?: SenhaUpdateWithWhereUniqueWithoutGuicheInput | SenhaUpdateWithWhereUniqueWithoutGuicheInput[]
    updateMany?: SenhaUpdateManyWithWhereWithoutGuicheInput | SenhaUpdateManyWithWhereWithoutGuicheInput[]
    deleteMany?: SenhaScalarWhereInput | SenhaScalarWhereInput[]
  }

  export type ReparticaoUpdateOneRequiredWithoutGuichesNestedInput = {
    create?: XOR<ReparticaoCreateWithoutGuichesInput, ReparticaoUncheckedCreateWithoutGuichesInput>
    connectOrCreate?: ReparticaoCreateOrConnectWithoutGuichesInput
    upsert?: ReparticaoUpsertWithoutGuichesInput
    connect?: ReparticaoWhereUniqueInput
    update?: XOR<XOR<ReparticaoUpdateToOneWithWhereWithoutGuichesInput, ReparticaoUpdateWithoutGuichesInput>, ReparticaoUncheckedUpdateWithoutGuichesInput>
  }

  export type SenhaUncheckedUpdateManyWithoutGuicheNestedInput = {
    create?: XOR<SenhaCreateWithoutGuicheInput, SenhaUncheckedCreateWithoutGuicheInput> | SenhaCreateWithoutGuicheInput[] | SenhaUncheckedCreateWithoutGuicheInput[]
    connectOrCreate?: SenhaCreateOrConnectWithoutGuicheInput | SenhaCreateOrConnectWithoutGuicheInput[]
    upsert?: SenhaUpsertWithWhereUniqueWithoutGuicheInput | SenhaUpsertWithWhereUniqueWithoutGuicheInput[]
    createMany?: SenhaCreateManyGuicheInputEnvelope
    set?: SenhaWhereUniqueInput | SenhaWhereUniqueInput[]
    disconnect?: SenhaWhereUniqueInput | SenhaWhereUniqueInput[]
    delete?: SenhaWhereUniqueInput | SenhaWhereUniqueInput[]
    connect?: SenhaWhereUniqueInput | SenhaWhereUniqueInput[]
    update?: SenhaUpdateWithWhereUniqueWithoutGuicheInput | SenhaUpdateWithWhereUniqueWithoutGuicheInput[]
    updateMany?: SenhaUpdateManyWithWhereWithoutGuicheInput | SenhaUpdateManyWithWhereWithoutGuicheInput[]
    deleteMany?: SenhaScalarWhereInput | SenhaScalarWhereInput[]
  }

  export type SenhaCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<SenhaCreateWithoutUsuarioInput, SenhaUncheckedCreateWithoutUsuarioInput> | SenhaCreateWithoutUsuarioInput[] | SenhaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: SenhaCreateOrConnectWithoutUsuarioInput | SenhaCreateOrConnectWithoutUsuarioInput[]
    createMany?: SenhaCreateManyUsuarioInputEnvelope
    connect?: SenhaWhereUniqueInput | SenhaWhereUniqueInput[]
  }

  export type ReparticaoCreateNestedOneWithoutUsuariosInput = {
    create?: XOR<ReparticaoCreateWithoutUsuariosInput, ReparticaoUncheckedCreateWithoutUsuariosInput>
    connectOrCreate?: ReparticaoCreateOrConnectWithoutUsuariosInput
    connect?: ReparticaoWhereUniqueInput
  }

  export type SenhaUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<SenhaCreateWithoutUsuarioInput, SenhaUncheckedCreateWithoutUsuarioInput> | SenhaCreateWithoutUsuarioInput[] | SenhaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: SenhaCreateOrConnectWithoutUsuarioInput | SenhaCreateOrConnectWithoutUsuarioInput[]
    createMany?: SenhaCreateManyUsuarioInputEnvelope
    connect?: SenhaWhereUniqueInput | SenhaWhereUniqueInput[]
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type SenhaUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<SenhaCreateWithoutUsuarioInput, SenhaUncheckedCreateWithoutUsuarioInput> | SenhaCreateWithoutUsuarioInput[] | SenhaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: SenhaCreateOrConnectWithoutUsuarioInput | SenhaCreateOrConnectWithoutUsuarioInput[]
    upsert?: SenhaUpsertWithWhereUniqueWithoutUsuarioInput | SenhaUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: SenhaCreateManyUsuarioInputEnvelope
    set?: SenhaWhereUniqueInput | SenhaWhereUniqueInput[]
    disconnect?: SenhaWhereUniqueInput | SenhaWhereUniqueInput[]
    delete?: SenhaWhereUniqueInput | SenhaWhereUniqueInput[]
    connect?: SenhaWhereUniqueInput | SenhaWhereUniqueInput[]
    update?: SenhaUpdateWithWhereUniqueWithoutUsuarioInput | SenhaUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: SenhaUpdateManyWithWhereWithoutUsuarioInput | SenhaUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: SenhaScalarWhereInput | SenhaScalarWhereInput[]
  }

  export type ReparticaoUpdateOneRequiredWithoutUsuariosNestedInput = {
    create?: XOR<ReparticaoCreateWithoutUsuariosInput, ReparticaoUncheckedCreateWithoutUsuariosInput>
    connectOrCreate?: ReparticaoCreateOrConnectWithoutUsuariosInput
    upsert?: ReparticaoUpsertWithoutUsuariosInput
    connect?: ReparticaoWhereUniqueInput
    update?: XOR<XOR<ReparticaoUpdateToOneWithWhereWithoutUsuariosInput, ReparticaoUpdateWithoutUsuariosInput>, ReparticaoUncheckedUpdateWithoutUsuariosInput>
  }

  export type SenhaUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<SenhaCreateWithoutUsuarioInput, SenhaUncheckedCreateWithoutUsuarioInput> | SenhaCreateWithoutUsuarioInput[] | SenhaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: SenhaCreateOrConnectWithoutUsuarioInput | SenhaCreateOrConnectWithoutUsuarioInput[]
    upsert?: SenhaUpsertWithWhereUniqueWithoutUsuarioInput | SenhaUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: SenhaCreateManyUsuarioInputEnvelope
    set?: SenhaWhereUniqueInput | SenhaWhereUniqueInput[]
    disconnect?: SenhaWhereUniqueInput | SenhaWhereUniqueInput[]
    delete?: SenhaWhereUniqueInput | SenhaWhereUniqueInput[]
    connect?: SenhaWhereUniqueInput | SenhaWhereUniqueInput[]
    update?: SenhaUpdateWithWhereUniqueWithoutUsuarioInput | SenhaUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: SenhaUpdateManyWithWhereWithoutUsuarioInput | SenhaUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: SenhaScalarWhereInput | SenhaScalarWhereInput[]
  }

  export type ReparticaoCreateNestedOneWithoutCidadaosInput = {
    create?: XOR<ReparticaoCreateWithoutCidadaosInput, ReparticaoUncheckedCreateWithoutCidadaosInput>
    connectOrCreate?: ReparticaoCreateOrConnectWithoutCidadaosInput
    connect?: ReparticaoWhereUniqueInput
  }

  export type SenhaCreateNestedManyWithoutCidadaoInput = {
    create?: XOR<SenhaCreateWithoutCidadaoInput, SenhaUncheckedCreateWithoutCidadaoInput> | SenhaCreateWithoutCidadaoInput[] | SenhaUncheckedCreateWithoutCidadaoInput[]
    connectOrCreate?: SenhaCreateOrConnectWithoutCidadaoInput | SenhaCreateOrConnectWithoutCidadaoInput[]
    createMany?: SenhaCreateManyCidadaoInputEnvelope
    connect?: SenhaWhereUniqueInput | SenhaWhereUniqueInput[]
  }

  export type SenhaUncheckedCreateNestedManyWithoutCidadaoInput = {
    create?: XOR<SenhaCreateWithoutCidadaoInput, SenhaUncheckedCreateWithoutCidadaoInput> | SenhaCreateWithoutCidadaoInput[] | SenhaUncheckedCreateWithoutCidadaoInput[]
    connectOrCreate?: SenhaCreateOrConnectWithoutCidadaoInput | SenhaCreateOrConnectWithoutCidadaoInput[]
    createMany?: SenhaCreateManyCidadaoInputEnvelope
    connect?: SenhaWhereUniqueInput | SenhaWhereUniqueInput[]
  }

  export type ReparticaoUpdateOneRequiredWithoutCidadaosNestedInput = {
    create?: XOR<ReparticaoCreateWithoutCidadaosInput, ReparticaoUncheckedCreateWithoutCidadaosInput>
    connectOrCreate?: ReparticaoCreateOrConnectWithoutCidadaosInput
    upsert?: ReparticaoUpsertWithoutCidadaosInput
    connect?: ReparticaoWhereUniqueInput
    update?: XOR<XOR<ReparticaoUpdateToOneWithWhereWithoutCidadaosInput, ReparticaoUpdateWithoutCidadaosInput>, ReparticaoUncheckedUpdateWithoutCidadaosInput>
  }

  export type SenhaUpdateManyWithoutCidadaoNestedInput = {
    create?: XOR<SenhaCreateWithoutCidadaoInput, SenhaUncheckedCreateWithoutCidadaoInput> | SenhaCreateWithoutCidadaoInput[] | SenhaUncheckedCreateWithoutCidadaoInput[]
    connectOrCreate?: SenhaCreateOrConnectWithoutCidadaoInput | SenhaCreateOrConnectWithoutCidadaoInput[]
    upsert?: SenhaUpsertWithWhereUniqueWithoutCidadaoInput | SenhaUpsertWithWhereUniqueWithoutCidadaoInput[]
    createMany?: SenhaCreateManyCidadaoInputEnvelope
    set?: SenhaWhereUniqueInput | SenhaWhereUniqueInput[]
    disconnect?: SenhaWhereUniqueInput | SenhaWhereUniqueInput[]
    delete?: SenhaWhereUniqueInput | SenhaWhereUniqueInput[]
    connect?: SenhaWhereUniqueInput | SenhaWhereUniqueInput[]
    update?: SenhaUpdateWithWhereUniqueWithoutCidadaoInput | SenhaUpdateWithWhereUniqueWithoutCidadaoInput[]
    updateMany?: SenhaUpdateManyWithWhereWithoutCidadaoInput | SenhaUpdateManyWithWhereWithoutCidadaoInput[]
    deleteMany?: SenhaScalarWhereInput | SenhaScalarWhereInput[]
  }

  export type SenhaUncheckedUpdateManyWithoutCidadaoNestedInput = {
    create?: XOR<SenhaCreateWithoutCidadaoInput, SenhaUncheckedCreateWithoutCidadaoInput> | SenhaCreateWithoutCidadaoInput[] | SenhaUncheckedCreateWithoutCidadaoInput[]
    connectOrCreate?: SenhaCreateOrConnectWithoutCidadaoInput | SenhaCreateOrConnectWithoutCidadaoInput[]
    upsert?: SenhaUpsertWithWhereUniqueWithoutCidadaoInput | SenhaUpsertWithWhereUniqueWithoutCidadaoInput[]
    createMany?: SenhaCreateManyCidadaoInputEnvelope
    set?: SenhaWhereUniqueInput | SenhaWhereUniqueInput[]
    disconnect?: SenhaWhereUniqueInput | SenhaWhereUniqueInput[]
    delete?: SenhaWhereUniqueInput | SenhaWhereUniqueInput[]
    connect?: SenhaWhereUniqueInput | SenhaWhereUniqueInput[]
    update?: SenhaUpdateWithWhereUniqueWithoutCidadaoInput | SenhaUpdateWithWhereUniqueWithoutCidadaoInput[]
    updateMany?: SenhaUpdateManyWithWhereWithoutCidadaoInput | SenhaUpdateManyWithWhereWithoutCidadaoInput[]
    deleteMany?: SenhaScalarWhereInput | SenhaScalarWhereInput[]
  }

  export type SenhaCreateNestedManyWithoutServicoInput = {
    create?: XOR<SenhaCreateWithoutServicoInput, SenhaUncheckedCreateWithoutServicoInput> | SenhaCreateWithoutServicoInput[] | SenhaUncheckedCreateWithoutServicoInput[]
    connectOrCreate?: SenhaCreateOrConnectWithoutServicoInput | SenhaCreateOrConnectWithoutServicoInput[]
    createMany?: SenhaCreateManyServicoInputEnvelope
    connect?: SenhaWhereUniqueInput | SenhaWhereUniqueInput[]
  }

  export type ContadorPrioridadeCreateNestedManyWithoutServicoInput = {
    create?: XOR<ContadorPrioridadeCreateWithoutServicoInput, ContadorPrioridadeUncheckedCreateWithoutServicoInput> | ContadorPrioridadeCreateWithoutServicoInput[] | ContadorPrioridadeUncheckedCreateWithoutServicoInput[]
    connectOrCreate?: ContadorPrioridadeCreateOrConnectWithoutServicoInput | ContadorPrioridadeCreateOrConnectWithoutServicoInput[]
    createMany?: ContadorPrioridadeCreateManyServicoInputEnvelope
    connect?: ContadorPrioridadeWhereUniqueInput | ContadorPrioridadeWhereUniqueInput[]
  }

  export type ReparticaoCreateNestedOneWithoutServicosInput = {
    create?: XOR<ReparticaoCreateWithoutServicosInput, ReparticaoUncheckedCreateWithoutServicosInput>
    connectOrCreate?: ReparticaoCreateOrConnectWithoutServicosInput
    connect?: ReparticaoWhereUniqueInput
  }

  export type SenhaUncheckedCreateNestedManyWithoutServicoInput = {
    create?: XOR<SenhaCreateWithoutServicoInput, SenhaUncheckedCreateWithoutServicoInput> | SenhaCreateWithoutServicoInput[] | SenhaUncheckedCreateWithoutServicoInput[]
    connectOrCreate?: SenhaCreateOrConnectWithoutServicoInput | SenhaCreateOrConnectWithoutServicoInput[]
    createMany?: SenhaCreateManyServicoInputEnvelope
    connect?: SenhaWhereUniqueInput | SenhaWhereUniqueInput[]
  }

  export type ContadorPrioridadeUncheckedCreateNestedManyWithoutServicoInput = {
    create?: XOR<ContadorPrioridadeCreateWithoutServicoInput, ContadorPrioridadeUncheckedCreateWithoutServicoInput> | ContadorPrioridadeCreateWithoutServicoInput[] | ContadorPrioridadeUncheckedCreateWithoutServicoInput[]
    connectOrCreate?: ContadorPrioridadeCreateOrConnectWithoutServicoInput | ContadorPrioridadeCreateOrConnectWithoutServicoInput[]
    createMany?: ContadorPrioridadeCreateManyServicoInputEnvelope
    connect?: ContadorPrioridadeWhereUniqueInput | ContadorPrioridadeWhereUniqueInput[]
  }

  export type SenhaUpdateManyWithoutServicoNestedInput = {
    create?: XOR<SenhaCreateWithoutServicoInput, SenhaUncheckedCreateWithoutServicoInput> | SenhaCreateWithoutServicoInput[] | SenhaUncheckedCreateWithoutServicoInput[]
    connectOrCreate?: SenhaCreateOrConnectWithoutServicoInput | SenhaCreateOrConnectWithoutServicoInput[]
    upsert?: SenhaUpsertWithWhereUniqueWithoutServicoInput | SenhaUpsertWithWhereUniqueWithoutServicoInput[]
    createMany?: SenhaCreateManyServicoInputEnvelope
    set?: SenhaWhereUniqueInput | SenhaWhereUniqueInput[]
    disconnect?: SenhaWhereUniqueInput | SenhaWhereUniqueInput[]
    delete?: SenhaWhereUniqueInput | SenhaWhereUniqueInput[]
    connect?: SenhaWhereUniqueInput | SenhaWhereUniqueInput[]
    update?: SenhaUpdateWithWhereUniqueWithoutServicoInput | SenhaUpdateWithWhereUniqueWithoutServicoInput[]
    updateMany?: SenhaUpdateManyWithWhereWithoutServicoInput | SenhaUpdateManyWithWhereWithoutServicoInput[]
    deleteMany?: SenhaScalarWhereInput | SenhaScalarWhereInput[]
  }

  export type ContadorPrioridadeUpdateManyWithoutServicoNestedInput = {
    create?: XOR<ContadorPrioridadeCreateWithoutServicoInput, ContadorPrioridadeUncheckedCreateWithoutServicoInput> | ContadorPrioridadeCreateWithoutServicoInput[] | ContadorPrioridadeUncheckedCreateWithoutServicoInput[]
    connectOrCreate?: ContadorPrioridadeCreateOrConnectWithoutServicoInput | ContadorPrioridadeCreateOrConnectWithoutServicoInput[]
    upsert?: ContadorPrioridadeUpsertWithWhereUniqueWithoutServicoInput | ContadorPrioridadeUpsertWithWhereUniqueWithoutServicoInput[]
    createMany?: ContadorPrioridadeCreateManyServicoInputEnvelope
    set?: ContadorPrioridadeWhereUniqueInput | ContadorPrioridadeWhereUniqueInput[]
    disconnect?: ContadorPrioridadeWhereUniqueInput | ContadorPrioridadeWhereUniqueInput[]
    delete?: ContadorPrioridadeWhereUniqueInput | ContadorPrioridadeWhereUniqueInput[]
    connect?: ContadorPrioridadeWhereUniqueInput | ContadorPrioridadeWhereUniqueInput[]
    update?: ContadorPrioridadeUpdateWithWhereUniqueWithoutServicoInput | ContadorPrioridadeUpdateWithWhereUniqueWithoutServicoInput[]
    updateMany?: ContadorPrioridadeUpdateManyWithWhereWithoutServicoInput | ContadorPrioridadeUpdateManyWithWhereWithoutServicoInput[]
    deleteMany?: ContadorPrioridadeScalarWhereInput | ContadorPrioridadeScalarWhereInput[]
  }

  export type ReparticaoUpdateOneRequiredWithoutServicosNestedInput = {
    create?: XOR<ReparticaoCreateWithoutServicosInput, ReparticaoUncheckedCreateWithoutServicosInput>
    connectOrCreate?: ReparticaoCreateOrConnectWithoutServicosInput
    upsert?: ReparticaoUpsertWithoutServicosInput
    connect?: ReparticaoWhereUniqueInput
    update?: XOR<XOR<ReparticaoUpdateToOneWithWhereWithoutServicosInput, ReparticaoUpdateWithoutServicosInput>, ReparticaoUncheckedUpdateWithoutServicosInput>
  }

  export type SenhaUncheckedUpdateManyWithoutServicoNestedInput = {
    create?: XOR<SenhaCreateWithoutServicoInput, SenhaUncheckedCreateWithoutServicoInput> | SenhaCreateWithoutServicoInput[] | SenhaUncheckedCreateWithoutServicoInput[]
    connectOrCreate?: SenhaCreateOrConnectWithoutServicoInput | SenhaCreateOrConnectWithoutServicoInput[]
    upsert?: SenhaUpsertWithWhereUniqueWithoutServicoInput | SenhaUpsertWithWhereUniqueWithoutServicoInput[]
    createMany?: SenhaCreateManyServicoInputEnvelope
    set?: SenhaWhereUniqueInput | SenhaWhereUniqueInput[]
    disconnect?: SenhaWhereUniqueInput | SenhaWhereUniqueInput[]
    delete?: SenhaWhereUniqueInput | SenhaWhereUniqueInput[]
    connect?: SenhaWhereUniqueInput | SenhaWhereUniqueInput[]
    update?: SenhaUpdateWithWhereUniqueWithoutServicoInput | SenhaUpdateWithWhereUniqueWithoutServicoInput[]
    updateMany?: SenhaUpdateManyWithWhereWithoutServicoInput | SenhaUpdateManyWithWhereWithoutServicoInput[]
    deleteMany?: SenhaScalarWhereInput | SenhaScalarWhereInput[]
  }

  export type ContadorPrioridadeUncheckedUpdateManyWithoutServicoNestedInput = {
    create?: XOR<ContadorPrioridadeCreateWithoutServicoInput, ContadorPrioridadeUncheckedCreateWithoutServicoInput> | ContadorPrioridadeCreateWithoutServicoInput[] | ContadorPrioridadeUncheckedCreateWithoutServicoInput[]
    connectOrCreate?: ContadorPrioridadeCreateOrConnectWithoutServicoInput | ContadorPrioridadeCreateOrConnectWithoutServicoInput[]
    upsert?: ContadorPrioridadeUpsertWithWhereUniqueWithoutServicoInput | ContadorPrioridadeUpsertWithWhereUniqueWithoutServicoInput[]
    createMany?: ContadorPrioridadeCreateManyServicoInputEnvelope
    set?: ContadorPrioridadeWhereUniqueInput | ContadorPrioridadeWhereUniqueInput[]
    disconnect?: ContadorPrioridadeWhereUniqueInput | ContadorPrioridadeWhereUniqueInput[]
    delete?: ContadorPrioridadeWhereUniqueInput | ContadorPrioridadeWhereUniqueInput[]
    connect?: ContadorPrioridadeWhereUniqueInput | ContadorPrioridadeWhereUniqueInput[]
    update?: ContadorPrioridadeUpdateWithWhereUniqueWithoutServicoInput | ContadorPrioridadeUpdateWithWhereUniqueWithoutServicoInput[]
    updateMany?: ContadorPrioridadeUpdateManyWithWhereWithoutServicoInput | ContadorPrioridadeUpdateManyWithWhereWithoutServicoInput[]
    deleteMany?: ContadorPrioridadeScalarWhereInput | ContadorPrioridadeScalarWhereInput[]
  }

  export type GuicheCreateNestedOneWithoutSenhaInput = {
    create?: XOR<GuicheCreateWithoutSenhaInput, GuicheUncheckedCreateWithoutSenhaInput>
    connectOrCreate?: GuicheCreateOrConnectWithoutSenhaInput
    connect?: GuicheWhereUniqueInput
  }

  export type UsuarioCreateNestedOneWithoutSenhaInput = {
    create?: XOR<UsuarioCreateWithoutSenhaInput, UsuarioUncheckedCreateWithoutSenhaInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutSenhaInput
    connect?: UsuarioWhereUniqueInput
  }

  export type ServicoCreateNestedOneWithoutSenhaInput = {
    create?: XOR<ServicoCreateWithoutSenhaInput, ServicoUncheckedCreateWithoutSenhaInput>
    connectOrCreate?: ServicoCreateOrConnectWithoutSenhaInput
    connect?: ServicoWhereUniqueInput
  }

  export type CidadaoCreateNestedOneWithoutSenhaInput = {
    create?: XOR<CidadaoCreateWithoutSenhaInput, CidadaoUncheckedCreateWithoutSenhaInput>
    connectOrCreate?: CidadaoCreateOrConnectWithoutSenhaInput
    connect?: CidadaoWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumPrioridadesFieldUpdateOperationsInput = {
    set?: $Enums.Prioridades
  }

  export type EnumSenhaStatusFieldUpdateOperationsInput = {
    set?: $Enums.SenhaStatus
  }

  export type GuicheUpdateOneWithoutSenhaNestedInput = {
    create?: XOR<GuicheCreateWithoutSenhaInput, GuicheUncheckedCreateWithoutSenhaInput>
    connectOrCreate?: GuicheCreateOrConnectWithoutSenhaInput
    upsert?: GuicheUpsertWithoutSenhaInput
    disconnect?: GuicheWhereInput | boolean
    delete?: GuicheWhereInput | boolean
    connect?: GuicheWhereUniqueInput
    update?: XOR<XOR<GuicheUpdateToOneWithWhereWithoutSenhaInput, GuicheUpdateWithoutSenhaInput>, GuicheUncheckedUpdateWithoutSenhaInput>
  }

  export type UsuarioUpdateOneWithoutSenhaNestedInput = {
    create?: XOR<UsuarioCreateWithoutSenhaInput, UsuarioUncheckedCreateWithoutSenhaInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutSenhaInput
    upsert?: UsuarioUpsertWithoutSenhaInput
    disconnect?: UsuarioWhereInput | boolean
    delete?: UsuarioWhereInput | boolean
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutSenhaInput, UsuarioUpdateWithoutSenhaInput>, UsuarioUncheckedUpdateWithoutSenhaInput>
  }

  export type ServicoUpdateOneRequiredWithoutSenhaNestedInput = {
    create?: XOR<ServicoCreateWithoutSenhaInput, ServicoUncheckedCreateWithoutSenhaInput>
    connectOrCreate?: ServicoCreateOrConnectWithoutSenhaInput
    upsert?: ServicoUpsertWithoutSenhaInput
    connect?: ServicoWhereUniqueInput
    update?: XOR<XOR<ServicoUpdateToOneWithWhereWithoutSenhaInput, ServicoUpdateWithoutSenhaInput>, ServicoUncheckedUpdateWithoutSenhaInput>
  }

  export type CidadaoUpdateOneRequiredWithoutSenhaNestedInput = {
    create?: XOR<CidadaoCreateWithoutSenhaInput, CidadaoUncheckedCreateWithoutSenhaInput>
    connectOrCreate?: CidadaoCreateOrConnectWithoutSenhaInput
    upsert?: CidadaoUpsertWithoutSenhaInput
    connect?: CidadaoWhereUniqueInput
    update?: XOR<XOR<CidadaoUpdateToOneWithWhereWithoutSenhaInput, CidadaoUpdateWithoutSenhaInput>, CidadaoUncheckedUpdateWithoutSenhaInput>
  }

  export type ServicoCreateNestedOneWithoutContadorInput = {
    create?: XOR<ServicoCreateWithoutContadorInput, ServicoUncheckedCreateWithoutContadorInput>
    connectOrCreate?: ServicoCreateOrConnectWithoutContadorInput
    connect?: ServicoWhereUniqueInput
  }

  export type ServicoUpdateOneRequiredWithoutContadorNestedInput = {
    create?: XOR<ServicoCreateWithoutContadorInput, ServicoUncheckedCreateWithoutContadorInput>
    connectOrCreate?: ServicoCreateOrConnectWithoutContadorInput
    upsert?: ServicoUpsertWithoutContadorInput
    connect?: ServicoWhereUniqueInput
    update?: XOR<XOR<ServicoUpdateToOneWithWhereWithoutContadorInput, ServicoUpdateWithoutContadorInput>, ServicoUncheckedUpdateWithoutContadorInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumPrioridadesFilter<$PrismaModel = never> = {
    equals?: $Enums.Prioridades | EnumPrioridadesFieldRefInput<$PrismaModel>
    in?: $Enums.Prioridades[] | ListEnumPrioridadesFieldRefInput<$PrismaModel>
    notIn?: $Enums.Prioridades[] | ListEnumPrioridadesFieldRefInput<$PrismaModel>
    not?: NestedEnumPrioridadesFilter<$PrismaModel> | $Enums.Prioridades
  }

  export type NestedEnumSenhaStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.SenhaStatus | EnumSenhaStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SenhaStatus[] | ListEnumSenhaStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SenhaStatus[] | ListEnumSenhaStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSenhaStatusFilter<$PrismaModel> | $Enums.SenhaStatus
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumPrioridadesWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Prioridades | EnumPrioridadesFieldRefInput<$PrismaModel>
    in?: $Enums.Prioridades[] | ListEnumPrioridadesFieldRefInput<$PrismaModel>
    notIn?: $Enums.Prioridades[] | ListEnumPrioridadesFieldRefInput<$PrismaModel>
    not?: NestedEnumPrioridadesWithAggregatesFilter<$PrismaModel> | $Enums.Prioridades
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPrioridadesFilter<$PrismaModel>
    _max?: NestedEnumPrioridadesFilter<$PrismaModel>
  }

  export type NestedEnumSenhaStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SenhaStatus | EnumSenhaStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SenhaStatus[] | ListEnumSenhaStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SenhaStatus[] | ListEnumSenhaStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSenhaStatusWithAggregatesFilter<$PrismaModel> | $Enums.SenhaStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSenhaStatusFilter<$PrismaModel>
    _max?: NestedEnumSenhaStatusFilter<$PrismaModel>
  }

  export type ServicoCreateWithoutReparticaoInput = {
    id?: string
    name: string
    slug: string
    createdAt?: Date | string
    updatedAt?: Date | string
    senha?: SenhaCreateNestedManyWithoutServicoInput
    contador?: ContadorPrioridadeCreateNestedManyWithoutServicoInput
  }

  export type ServicoUncheckedCreateWithoutReparticaoInput = {
    id?: string
    name: string
    slug: string
    createdAt?: Date | string
    updatedAt?: Date | string
    senha?: SenhaUncheckedCreateNestedManyWithoutServicoInput
    contador?: ContadorPrioridadeUncheckedCreateNestedManyWithoutServicoInput
  }

  export type ServicoCreateOrConnectWithoutReparticaoInput = {
    where: ServicoWhereUniqueInput
    create: XOR<ServicoCreateWithoutReparticaoInput, ServicoUncheckedCreateWithoutReparticaoInput>
  }

  export type ServicoCreateManyReparticaoInputEnvelope = {
    data: ServicoCreateManyReparticaoInput | ServicoCreateManyReparticaoInput[]
    skipDuplicates?: boolean
  }

  export type UsuarioCreateWithoutReparticaoInput = {
    id?: string
    role?: $Enums.Role
    name: string
    cpf: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    senha?: SenhaCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateWithoutReparticaoInput = {
    id?: string
    role?: $Enums.Role
    name: string
    cpf: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    senha?: SenhaUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioCreateOrConnectWithoutReparticaoInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutReparticaoInput, UsuarioUncheckedCreateWithoutReparticaoInput>
  }

  export type UsuarioCreateManyReparticaoInputEnvelope = {
    data: UsuarioCreateManyReparticaoInput | UsuarioCreateManyReparticaoInput[]
    skipDuplicates?: boolean
  }

  export type GuicheCreateWithoutReparticaoInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    senha?: SenhaCreateNestedManyWithoutGuicheInput
  }

  export type GuicheUncheckedCreateWithoutReparticaoInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    senha?: SenhaUncheckedCreateNestedManyWithoutGuicheInput
  }

  export type GuicheCreateOrConnectWithoutReparticaoInput = {
    where: GuicheWhereUniqueInput
    create: XOR<GuicheCreateWithoutReparticaoInput, GuicheUncheckedCreateWithoutReparticaoInput>
  }

  export type GuicheCreateManyReparticaoInputEnvelope = {
    data: GuicheCreateManyReparticaoInput | GuicheCreateManyReparticaoInput[]
    skipDuplicates?: boolean
  }

  export type CidadaoCreateWithoutReparticaoInput = {
    id?: string
    name: string
    cpf: string
    createdAt?: Date | string
    updatedAt?: Date | string
    senha?: SenhaCreateNestedManyWithoutCidadaoInput
  }

  export type CidadaoUncheckedCreateWithoutReparticaoInput = {
    id?: string
    name: string
    cpf: string
    createdAt?: Date | string
    updatedAt?: Date | string
    senha?: SenhaUncheckedCreateNestedManyWithoutCidadaoInput
  }

  export type CidadaoCreateOrConnectWithoutReparticaoInput = {
    where: CidadaoWhereUniqueInput
    create: XOR<CidadaoCreateWithoutReparticaoInput, CidadaoUncheckedCreateWithoutReparticaoInput>
  }

  export type CidadaoCreateManyReparticaoInputEnvelope = {
    data: CidadaoCreateManyReparticaoInput | CidadaoCreateManyReparticaoInput[]
    skipDuplicates?: boolean
  }

  export type ServicoUpsertWithWhereUniqueWithoutReparticaoInput = {
    where: ServicoWhereUniqueInput
    update: XOR<ServicoUpdateWithoutReparticaoInput, ServicoUncheckedUpdateWithoutReparticaoInput>
    create: XOR<ServicoCreateWithoutReparticaoInput, ServicoUncheckedCreateWithoutReparticaoInput>
  }

  export type ServicoUpdateWithWhereUniqueWithoutReparticaoInput = {
    where: ServicoWhereUniqueInput
    data: XOR<ServicoUpdateWithoutReparticaoInput, ServicoUncheckedUpdateWithoutReparticaoInput>
  }

  export type ServicoUpdateManyWithWhereWithoutReparticaoInput = {
    where: ServicoScalarWhereInput
    data: XOR<ServicoUpdateManyMutationInput, ServicoUncheckedUpdateManyWithoutReparticaoInput>
  }

  export type ServicoScalarWhereInput = {
    AND?: ServicoScalarWhereInput | ServicoScalarWhereInput[]
    OR?: ServicoScalarWhereInput[]
    NOT?: ServicoScalarWhereInput | ServicoScalarWhereInput[]
    id?: StringFilter<"Servico"> | string
    name?: StringFilter<"Servico"> | string
    slug?: StringFilter<"Servico"> | string
    createdAt?: DateTimeFilter<"Servico"> | Date | string
    updatedAt?: DateTimeFilter<"Servico"> | Date | string
    reparticaoId?: StringFilter<"Servico"> | string
  }

  export type UsuarioUpsertWithWhereUniqueWithoutReparticaoInput = {
    where: UsuarioWhereUniqueInput
    update: XOR<UsuarioUpdateWithoutReparticaoInput, UsuarioUncheckedUpdateWithoutReparticaoInput>
    create: XOR<UsuarioCreateWithoutReparticaoInput, UsuarioUncheckedCreateWithoutReparticaoInput>
  }

  export type UsuarioUpdateWithWhereUniqueWithoutReparticaoInput = {
    where: UsuarioWhereUniqueInput
    data: XOR<UsuarioUpdateWithoutReparticaoInput, UsuarioUncheckedUpdateWithoutReparticaoInput>
  }

  export type UsuarioUpdateManyWithWhereWithoutReparticaoInput = {
    where: UsuarioScalarWhereInput
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyWithoutReparticaoInput>
  }

  export type UsuarioScalarWhereInput = {
    AND?: UsuarioScalarWhereInput | UsuarioScalarWhereInput[]
    OR?: UsuarioScalarWhereInput[]
    NOT?: UsuarioScalarWhereInput | UsuarioScalarWhereInput[]
    id?: StringFilter<"Usuario"> | string
    role?: EnumRoleFilter<"Usuario"> | $Enums.Role
    name?: StringFilter<"Usuario"> | string
    cpf?: StringFilter<"Usuario"> | string
    password?: StringFilter<"Usuario"> | string
    reparticaoId?: StringFilter<"Usuario"> | string
    createdAt?: DateTimeFilter<"Usuario"> | Date | string
    updatedAt?: DateTimeFilter<"Usuario"> | Date | string
  }

  export type GuicheUpsertWithWhereUniqueWithoutReparticaoInput = {
    where: GuicheWhereUniqueInput
    update: XOR<GuicheUpdateWithoutReparticaoInput, GuicheUncheckedUpdateWithoutReparticaoInput>
    create: XOR<GuicheCreateWithoutReparticaoInput, GuicheUncheckedCreateWithoutReparticaoInput>
  }

  export type GuicheUpdateWithWhereUniqueWithoutReparticaoInput = {
    where: GuicheWhereUniqueInput
    data: XOR<GuicheUpdateWithoutReparticaoInput, GuicheUncheckedUpdateWithoutReparticaoInput>
  }

  export type GuicheUpdateManyWithWhereWithoutReparticaoInput = {
    where: GuicheScalarWhereInput
    data: XOR<GuicheUpdateManyMutationInput, GuicheUncheckedUpdateManyWithoutReparticaoInput>
  }

  export type GuicheScalarWhereInput = {
    AND?: GuicheScalarWhereInput | GuicheScalarWhereInput[]
    OR?: GuicheScalarWhereInput[]
    NOT?: GuicheScalarWhereInput | GuicheScalarWhereInput[]
    id?: StringFilter<"Guiche"> | string
    name?: StringFilter<"Guiche"> | string
    reparticaoId?: StringFilter<"Guiche"> | string
    createdAt?: DateTimeFilter<"Guiche"> | Date | string
    updatedAt?: DateTimeFilter<"Guiche"> | Date | string
  }

  export type CidadaoUpsertWithWhereUniqueWithoutReparticaoInput = {
    where: CidadaoWhereUniqueInput
    update: XOR<CidadaoUpdateWithoutReparticaoInput, CidadaoUncheckedUpdateWithoutReparticaoInput>
    create: XOR<CidadaoCreateWithoutReparticaoInput, CidadaoUncheckedCreateWithoutReparticaoInput>
  }

  export type CidadaoUpdateWithWhereUniqueWithoutReparticaoInput = {
    where: CidadaoWhereUniqueInput
    data: XOR<CidadaoUpdateWithoutReparticaoInput, CidadaoUncheckedUpdateWithoutReparticaoInput>
  }

  export type CidadaoUpdateManyWithWhereWithoutReparticaoInput = {
    where: CidadaoScalarWhereInput
    data: XOR<CidadaoUpdateManyMutationInput, CidadaoUncheckedUpdateManyWithoutReparticaoInput>
  }

  export type CidadaoScalarWhereInput = {
    AND?: CidadaoScalarWhereInput | CidadaoScalarWhereInput[]
    OR?: CidadaoScalarWhereInput[]
    NOT?: CidadaoScalarWhereInput | CidadaoScalarWhereInput[]
    id?: StringFilter<"Cidadao"> | string
    name?: StringFilter<"Cidadao"> | string
    cpf?: StringFilter<"Cidadao"> | string
    reparticaoId?: StringFilter<"Cidadao"> | string
    createdAt?: DateTimeFilter<"Cidadao"> | Date | string
    updatedAt?: DateTimeFilter<"Cidadao"> | Date | string
  }

  export type SenhaCreateWithoutGuicheInput = {
    senha?: string | null
    numeroOrdem?: number
    prioridade?: $Enums.Prioridades
    status?: $Enums.SenhaStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    usuario?: UsuarioCreateNestedOneWithoutSenhaInput
    servico: ServicoCreateNestedOneWithoutSenhaInput
    cidadao: CidadaoCreateNestedOneWithoutSenhaInput
  }

  export type SenhaUncheckedCreateWithoutGuicheInput = {
    id?: number
    senha?: string | null
    numeroOrdem?: number
    prioridade?: $Enums.Prioridades
    status?: $Enums.SenhaStatus
    usuarioId?: string | null
    servicoId: string
    cidadaoId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SenhaCreateOrConnectWithoutGuicheInput = {
    where: SenhaWhereUniqueInput
    create: XOR<SenhaCreateWithoutGuicheInput, SenhaUncheckedCreateWithoutGuicheInput>
  }

  export type SenhaCreateManyGuicheInputEnvelope = {
    data: SenhaCreateManyGuicheInput | SenhaCreateManyGuicheInput[]
    skipDuplicates?: boolean
  }

  export type ReparticaoCreateWithoutGuichesInput = {
    id?: string
    name: string
    slug: string
    createdAt?: Date | string
    updatedAt?: Date | string
    servicos?: ServicoCreateNestedManyWithoutReparticaoInput
    usuarios?: UsuarioCreateNestedManyWithoutReparticaoInput
    cidadaos?: CidadaoCreateNestedManyWithoutReparticaoInput
  }

  export type ReparticaoUncheckedCreateWithoutGuichesInput = {
    id?: string
    name: string
    slug: string
    createdAt?: Date | string
    updatedAt?: Date | string
    servicos?: ServicoUncheckedCreateNestedManyWithoutReparticaoInput
    usuarios?: UsuarioUncheckedCreateNestedManyWithoutReparticaoInput
    cidadaos?: CidadaoUncheckedCreateNestedManyWithoutReparticaoInput
  }

  export type ReparticaoCreateOrConnectWithoutGuichesInput = {
    where: ReparticaoWhereUniqueInput
    create: XOR<ReparticaoCreateWithoutGuichesInput, ReparticaoUncheckedCreateWithoutGuichesInput>
  }

  export type SenhaUpsertWithWhereUniqueWithoutGuicheInput = {
    where: SenhaWhereUniqueInput
    update: XOR<SenhaUpdateWithoutGuicheInput, SenhaUncheckedUpdateWithoutGuicheInput>
    create: XOR<SenhaCreateWithoutGuicheInput, SenhaUncheckedCreateWithoutGuicheInput>
  }

  export type SenhaUpdateWithWhereUniqueWithoutGuicheInput = {
    where: SenhaWhereUniqueInput
    data: XOR<SenhaUpdateWithoutGuicheInput, SenhaUncheckedUpdateWithoutGuicheInput>
  }

  export type SenhaUpdateManyWithWhereWithoutGuicheInput = {
    where: SenhaScalarWhereInput
    data: XOR<SenhaUpdateManyMutationInput, SenhaUncheckedUpdateManyWithoutGuicheInput>
  }

  export type SenhaScalarWhereInput = {
    AND?: SenhaScalarWhereInput | SenhaScalarWhereInput[]
    OR?: SenhaScalarWhereInput[]
    NOT?: SenhaScalarWhereInput | SenhaScalarWhereInput[]
    id?: IntFilter<"Senha"> | number
    senha?: StringNullableFilter<"Senha"> | string | null
    numeroOrdem?: IntFilter<"Senha"> | number
    prioridade?: EnumPrioridadesFilter<"Senha"> | $Enums.Prioridades
    status?: EnumSenhaStatusFilter<"Senha"> | $Enums.SenhaStatus
    guicheId?: StringNullableFilter<"Senha"> | string | null
    usuarioId?: StringNullableFilter<"Senha"> | string | null
    servicoId?: StringFilter<"Senha"> | string
    cidadaoId?: StringFilter<"Senha"> | string
    createdAt?: DateTimeFilter<"Senha"> | Date | string
    updatedAt?: DateTimeFilter<"Senha"> | Date | string
  }

  export type ReparticaoUpsertWithoutGuichesInput = {
    update: XOR<ReparticaoUpdateWithoutGuichesInput, ReparticaoUncheckedUpdateWithoutGuichesInput>
    create: XOR<ReparticaoCreateWithoutGuichesInput, ReparticaoUncheckedCreateWithoutGuichesInput>
    where?: ReparticaoWhereInput
  }

  export type ReparticaoUpdateToOneWithWhereWithoutGuichesInput = {
    where?: ReparticaoWhereInput
    data: XOR<ReparticaoUpdateWithoutGuichesInput, ReparticaoUncheckedUpdateWithoutGuichesInput>
  }

  export type ReparticaoUpdateWithoutGuichesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    servicos?: ServicoUpdateManyWithoutReparticaoNestedInput
    usuarios?: UsuarioUpdateManyWithoutReparticaoNestedInput
    cidadaos?: CidadaoUpdateManyWithoutReparticaoNestedInput
  }

  export type ReparticaoUncheckedUpdateWithoutGuichesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    servicos?: ServicoUncheckedUpdateManyWithoutReparticaoNestedInput
    usuarios?: UsuarioUncheckedUpdateManyWithoutReparticaoNestedInput
    cidadaos?: CidadaoUncheckedUpdateManyWithoutReparticaoNestedInput
  }

  export type SenhaCreateWithoutUsuarioInput = {
    senha?: string | null
    numeroOrdem?: number
    prioridade?: $Enums.Prioridades
    status?: $Enums.SenhaStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    guiche?: GuicheCreateNestedOneWithoutSenhaInput
    servico: ServicoCreateNestedOneWithoutSenhaInput
    cidadao: CidadaoCreateNestedOneWithoutSenhaInput
  }

  export type SenhaUncheckedCreateWithoutUsuarioInput = {
    id?: number
    senha?: string | null
    numeroOrdem?: number
    prioridade?: $Enums.Prioridades
    status?: $Enums.SenhaStatus
    guicheId?: string | null
    servicoId: string
    cidadaoId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SenhaCreateOrConnectWithoutUsuarioInput = {
    where: SenhaWhereUniqueInput
    create: XOR<SenhaCreateWithoutUsuarioInput, SenhaUncheckedCreateWithoutUsuarioInput>
  }

  export type SenhaCreateManyUsuarioInputEnvelope = {
    data: SenhaCreateManyUsuarioInput | SenhaCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type ReparticaoCreateWithoutUsuariosInput = {
    id?: string
    name: string
    slug: string
    createdAt?: Date | string
    updatedAt?: Date | string
    servicos?: ServicoCreateNestedManyWithoutReparticaoInput
    guiches?: GuicheCreateNestedManyWithoutReparticaoInput
    cidadaos?: CidadaoCreateNestedManyWithoutReparticaoInput
  }

  export type ReparticaoUncheckedCreateWithoutUsuariosInput = {
    id?: string
    name: string
    slug: string
    createdAt?: Date | string
    updatedAt?: Date | string
    servicos?: ServicoUncheckedCreateNestedManyWithoutReparticaoInput
    guiches?: GuicheUncheckedCreateNestedManyWithoutReparticaoInput
    cidadaos?: CidadaoUncheckedCreateNestedManyWithoutReparticaoInput
  }

  export type ReparticaoCreateOrConnectWithoutUsuariosInput = {
    where: ReparticaoWhereUniqueInput
    create: XOR<ReparticaoCreateWithoutUsuariosInput, ReparticaoUncheckedCreateWithoutUsuariosInput>
  }

  export type SenhaUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: SenhaWhereUniqueInput
    update: XOR<SenhaUpdateWithoutUsuarioInput, SenhaUncheckedUpdateWithoutUsuarioInput>
    create: XOR<SenhaCreateWithoutUsuarioInput, SenhaUncheckedCreateWithoutUsuarioInput>
  }

  export type SenhaUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: SenhaWhereUniqueInput
    data: XOR<SenhaUpdateWithoutUsuarioInput, SenhaUncheckedUpdateWithoutUsuarioInput>
  }

  export type SenhaUpdateManyWithWhereWithoutUsuarioInput = {
    where: SenhaScalarWhereInput
    data: XOR<SenhaUpdateManyMutationInput, SenhaUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type ReparticaoUpsertWithoutUsuariosInput = {
    update: XOR<ReparticaoUpdateWithoutUsuariosInput, ReparticaoUncheckedUpdateWithoutUsuariosInput>
    create: XOR<ReparticaoCreateWithoutUsuariosInput, ReparticaoUncheckedCreateWithoutUsuariosInput>
    where?: ReparticaoWhereInput
  }

  export type ReparticaoUpdateToOneWithWhereWithoutUsuariosInput = {
    where?: ReparticaoWhereInput
    data: XOR<ReparticaoUpdateWithoutUsuariosInput, ReparticaoUncheckedUpdateWithoutUsuariosInput>
  }

  export type ReparticaoUpdateWithoutUsuariosInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    servicos?: ServicoUpdateManyWithoutReparticaoNestedInput
    guiches?: GuicheUpdateManyWithoutReparticaoNestedInput
    cidadaos?: CidadaoUpdateManyWithoutReparticaoNestedInput
  }

  export type ReparticaoUncheckedUpdateWithoutUsuariosInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    servicos?: ServicoUncheckedUpdateManyWithoutReparticaoNestedInput
    guiches?: GuicheUncheckedUpdateManyWithoutReparticaoNestedInput
    cidadaos?: CidadaoUncheckedUpdateManyWithoutReparticaoNestedInput
  }

  export type ReparticaoCreateWithoutCidadaosInput = {
    id?: string
    name: string
    slug: string
    createdAt?: Date | string
    updatedAt?: Date | string
    servicos?: ServicoCreateNestedManyWithoutReparticaoInput
    usuarios?: UsuarioCreateNestedManyWithoutReparticaoInput
    guiches?: GuicheCreateNestedManyWithoutReparticaoInput
  }

  export type ReparticaoUncheckedCreateWithoutCidadaosInput = {
    id?: string
    name: string
    slug: string
    createdAt?: Date | string
    updatedAt?: Date | string
    servicos?: ServicoUncheckedCreateNestedManyWithoutReparticaoInput
    usuarios?: UsuarioUncheckedCreateNestedManyWithoutReparticaoInput
    guiches?: GuicheUncheckedCreateNestedManyWithoutReparticaoInput
  }

  export type ReparticaoCreateOrConnectWithoutCidadaosInput = {
    where: ReparticaoWhereUniqueInput
    create: XOR<ReparticaoCreateWithoutCidadaosInput, ReparticaoUncheckedCreateWithoutCidadaosInput>
  }

  export type SenhaCreateWithoutCidadaoInput = {
    senha?: string | null
    numeroOrdem?: number
    prioridade?: $Enums.Prioridades
    status?: $Enums.SenhaStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    guiche?: GuicheCreateNestedOneWithoutSenhaInput
    usuario?: UsuarioCreateNestedOneWithoutSenhaInput
    servico: ServicoCreateNestedOneWithoutSenhaInput
  }

  export type SenhaUncheckedCreateWithoutCidadaoInput = {
    id?: number
    senha?: string | null
    numeroOrdem?: number
    prioridade?: $Enums.Prioridades
    status?: $Enums.SenhaStatus
    guicheId?: string | null
    usuarioId?: string | null
    servicoId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SenhaCreateOrConnectWithoutCidadaoInput = {
    where: SenhaWhereUniqueInput
    create: XOR<SenhaCreateWithoutCidadaoInput, SenhaUncheckedCreateWithoutCidadaoInput>
  }

  export type SenhaCreateManyCidadaoInputEnvelope = {
    data: SenhaCreateManyCidadaoInput | SenhaCreateManyCidadaoInput[]
    skipDuplicates?: boolean
  }

  export type ReparticaoUpsertWithoutCidadaosInput = {
    update: XOR<ReparticaoUpdateWithoutCidadaosInput, ReparticaoUncheckedUpdateWithoutCidadaosInput>
    create: XOR<ReparticaoCreateWithoutCidadaosInput, ReparticaoUncheckedCreateWithoutCidadaosInput>
    where?: ReparticaoWhereInput
  }

  export type ReparticaoUpdateToOneWithWhereWithoutCidadaosInput = {
    where?: ReparticaoWhereInput
    data: XOR<ReparticaoUpdateWithoutCidadaosInput, ReparticaoUncheckedUpdateWithoutCidadaosInput>
  }

  export type ReparticaoUpdateWithoutCidadaosInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    servicos?: ServicoUpdateManyWithoutReparticaoNestedInput
    usuarios?: UsuarioUpdateManyWithoutReparticaoNestedInput
    guiches?: GuicheUpdateManyWithoutReparticaoNestedInput
  }

  export type ReparticaoUncheckedUpdateWithoutCidadaosInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    servicos?: ServicoUncheckedUpdateManyWithoutReparticaoNestedInput
    usuarios?: UsuarioUncheckedUpdateManyWithoutReparticaoNestedInput
    guiches?: GuicheUncheckedUpdateManyWithoutReparticaoNestedInput
  }

  export type SenhaUpsertWithWhereUniqueWithoutCidadaoInput = {
    where: SenhaWhereUniqueInput
    update: XOR<SenhaUpdateWithoutCidadaoInput, SenhaUncheckedUpdateWithoutCidadaoInput>
    create: XOR<SenhaCreateWithoutCidadaoInput, SenhaUncheckedCreateWithoutCidadaoInput>
  }

  export type SenhaUpdateWithWhereUniqueWithoutCidadaoInput = {
    where: SenhaWhereUniqueInput
    data: XOR<SenhaUpdateWithoutCidadaoInput, SenhaUncheckedUpdateWithoutCidadaoInput>
  }

  export type SenhaUpdateManyWithWhereWithoutCidadaoInput = {
    where: SenhaScalarWhereInput
    data: XOR<SenhaUpdateManyMutationInput, SenhaUncheckedUpdateManyWithoutCidadaoInput>
  }

  export type SenhaCreateWithoutServicoInput = {
    senha?: string | null
    numeroOrdem?: number
    prioridade?: $Enums.Prioridades
    status?: $Enums.SenhaStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    guiche?: GuicheCreateNestedOneWithoutSenhaInput
    usuario?: UsuarioCreateNestedOneWithoutSenhaInput
    cidadao: CidadaoCreateNestedOneWithoutSenhaInput
  }

  export type SenhaUncheckedCreateWithoutServicoInput = {
    id?: number
    senha?: string | null
    numeroOrdem?: number
    prioridade?: $Enums.Prioridades
    status?: $Enums.SenhaStatus
    guicheId?: string | null
    usuarioId?: string | null
    cidadaoId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SenhaCreateOrConnectWithoutServicoInput = {
    where: SenhaWhereUniqueInput
    create: XOR<SenhaCreateWithoutServicoInput, SenhaUncheckedCreateWithoutServicoInput>
  }

  export type SenhaCreateManyServicoInputEnvelope = {
    data: SenhaCreateManyServicoInput | SenhaCreateManyServicoInput[]
    skipDuplicates?: boolean
  }

  export type ContadorPrioridadeCreateWithoutServicoInput = {
    quantidade?: number
    updatedAt?: Date | string
  }

  export type ContadorPrioridadeUncheckedCreateWithoutServicoInput = {
    id?: number
    quantidade?: number
    updatedAt?: Date | string
  }

  export type ContadorPrioridadeCreateOrConnectWithoutServicoInput = {
    where: ContadorPrioridadeWhereUniqueInput
    create: XOR<ContadorPrioridadeCreateWithoutServicoInput, ContadorPrioridadeUncheckedCreateWithoutServicoInput>
  }

  export type ContadorPrioridadeCreateManyServicoInputEnvelope = {
    data: ContadorPrioridadeCreateManyServicoInput | ContadorPrioridadeCreateManyServicoInput[]
    skipDuplicates?: boolean
  }

  export type ReparticaoCreateWithoutServicosInput = {
    id?: string
    name: string
    slug: string
    createdAt?: Date | string
    updatedAt?: Date | string
    usuarios?: UsuarioCreateNestedManyWithoutReparticaoInput
    guiches?: GuicheCreateNestedManyWithoutReparticaoInput
    cidadaos?: CidadaoCreateNestedManyWithoutReparticaoInput
  }

  export type ReparticaoUncheckedCreateWithoutServicosInput = {
    id?: string
    name: string
    slug: string
    createdAt?: Date | string
    updatedAt?: Date | string
    usuarios?: UsuarioUncheckedCreateNestedManyWithoutReparticaoInput
    guiches?: GuicheUncheckedCreateNestedManyWithoutReparticaoInput
    cidadaos?: CidadaoUncheckedCreateNestedManyWithoutReparticaoInput
  }

  export type ReparticaoCreateOrConnectWithoutServicosInput = {
    where: ReparticaoWhereUniqueInput
    create: XOR<ReparticaoCreateWithoutServicosInput, ReparticaoUncheckedCreateWithoutServicosInput>
  }

  export type SenhaUpsertWithWhereUniqueWithoutServicoInput = {
    where: SenhaWhereUniqueInput
    update: XOR<SenhaUpdateWithoutServicoInput, SenhaUncheckedUpdateWithoutServicoInput>
    create: XOR<SenhaCreateWithoutServicoInput, SenhaUncheckedCreateWithoutServicoInput>
  }

  export type SenhaUpdateWithWhereUniqueWithoutServicoInput = {
    where: SenhaWhereUniqueInput
    data: XOR<SenhaUpdateWithoutServicoInput, SenhaUncheckedUpdateWithoutServicoInput>
  }

  export type SenhaUpdateManyWithWhereWithoutServicoInput = {
    where: SenhaScalarWhereInput
    data: XOR<SenhaUpdateManyMutationInput, SenhaUncheckedUpdateManyWithoutServicoInput>
  }

  export type ContadorPrioridadeUpsertWithWhereUniqueWithoutServicoInput = {
    where: ContadorPrioridadeWhereUniqueInput
    update: XOR<ContadorPrioridadeUpdateWithoutServicoInput, ContadorPrioridadeUncheckedUpdateWithoutServicoInput>
    create: XOR<ContadorPrioridadeCreateWithoutServicoInput, ContadorPrioridadeUncheckedCreateWithoutServicoInput>
  }

  export type ContadorPrioridadeUpdateWithWhereUniqueWithoutServicoInput = {
    where: ContadorPrioridadeWhereUniqueInput
    data: XOR<ContadorPrioridadeUpdateWithoutServicoInput, ContadorPrioridadeUncheckedUpdateWithoutServicoInput>
  }

  export type ContadorPrioridadeUpdateManyWithWhereWithoutServicoInput = {
    where: ContadorPrioridadeScalarWhereInput
    data: XOR<ContadorPrioridadeUpdateManyMutationInput, ContadorPrioridadeUncheckedUpdateManyWithoutServicoInput>
  }

  export type ContadorPrioridadeScalarWhereInput = {
    AND?: ContadorPrioridadeScalarWhereInput | ContadorPrioridadeScalarWhereInput[]
    OR?: ContadorPrioridadeScalarWhereInput[]
    NOT?: ContadorPrioridadeScalarWhereInput | ContadorPrioridadeScalarWhereInput[]
    id?: IntFilter<"ContadorPrioridade"> | number
    servicoId?: StringFilter<"ContadorPrioridade"> | string
    quantidade?: IntFilter<"ContadorPrioridade"> | number
    updatedAt?: DateTimeFilter<"ContadorPrioridade"> | Date | string
  }

  export type ReparticaoUpsertWithoutServicosInput = {
    update: XOR<ReparticaoUpdateWithoutServicosInput, ReparticaoUncheckedUpdateWithoutServicosInput>
    create: XOR<ReparticaoCreateWithoutServicosInput, ReparticaoUncheckedCreateWithoutServicosInput>
    where?: ReparticaoWhereInput
  }

  export type ReparticaoUpdateToOneWithWhereWithoutServicosInput = {
    where?: ReparticaoWhereInput
    data: XOR<ReparticaoUpdateWithoutServicosInput, ReparticaoUncheckedUpdateWithoutServicosInput>
  }

  export type ReparticaoUpdateWithoutServicosInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usuarios?: UsuarioUpdateManyWithoutReparticaoNestedInput
    guiches?: GuicheUpdateManyWithoutReparticaoNestedInput
    cidadaos?: CidadaoUpdateManyWithoutReparticaoNestedInput
  }

  export type ReparticaoUncheckedUpdateWithoutServicosInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usuarios?: UsuarioUncheckedUpdateManyWithoutReparticaoNestedInput
    guiches?: GuicheUncheckedUpdateManyWithoutReparticaoNestedInput
    cidadaos?: CidadaoUncheckedUpdateManyWithoutReparticaoNestedInput
  }

  export type GuicheCreateWithoutSenhaInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    reparticao: ReparticaoCreateNestedOneWithoutGuichesInput
  }

  export type GuicheUncheckedCreateWithoutSenhaInput = {
    id?: string
    name: string
    reparticaoId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GuicheCreateOrConnectWithoutSenhaInput = {
    where: GuicheWhereUniqueInput
    create: XOR<GuicheCreateWithoutSenhaInput, GuicheUncheckedCreateWithoutSenhaInput>
  }

  export type UsuarioCreateWithoutSenhaInput = {
    id?: string
    role?: $Enums.Role
    name: string
    cpf: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    reparticao: ReparticaoCreateNestedOneWithoutUsuariosInput
  }

  export type UsuarioUncheckedCreateWithoutSenhaInput = {
    id?: string
    role?: $Enums.Role
    name: string
    cpf: string
    password: string
    reparticaoId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UsuarioCreateOrConnectWithoutSenhaInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutSenhaInput, UsuarioUncheckedCreateWithoutSenhaInput>
  }

  export type ServicoCreateWithoutSenhaInput = {
    id?: string
    name: string
    slug: string
    createdAt?: Date | string
    updatedAt?: Date | string
    contador?: ContadorPrioridadeCreateNestedManyWithoutServicoInput
    reparticao: ReparticaoCreateNestedOneWithoutServicosInput
  }

  export type ServicoUncheckedCreateWithoutSenhaInput = {
    id?: string
    name: string
    slug: string
    createdAt?: Date | string
    updatedAt?: Date | string
    reparticaoId: string
    contador?: ContadorPrioridadeUncheckedCreateNestedManyWithoutServicoInput
  }

  export type ServicoCreateOrConnectWithoutSenhaInput = {
    where: ServicoWhereUniqueInput
    create: XOR<ServicoCreateWithoutSenhaInput, ServicoUncheckedCreateWithoutSenhaInput>
  }

  export type CidadaoCreateWithoutSenhaInput = {
    id?: string
    name: string
    cpf: string
    createdAt?: Date | string
    updatedAt?: Date | string
    reparticao: ReparticaoCreateNestedOneWithoutCidadaosInput
  }

  export type CidadaoUncheckedCreateWithoutSenhaInput = {
    id?: string
    name: string
    cpf: string
    reparticaoId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CidadaoCreateOrConnectWithoutSenhaInput = {
    where: CidadaoWhereUniqueInput
    create: XOR<CidadaoCreateWithoutSenhaInput, CidadaoUncheckedCreateWithoutSenhaInput>
  }

  export type GuicheUpsertWithoutSenhaInput = {
    update: XOR<GuicheUpdateWithoutSenhaInput, GuicheUncheckedUpdateWithoutSenhaInput>
    create: XOR<GuicheCreateWithoutSenhaInput, GuicheUncheckedCreateWithoutSenhaInput>
    where?: GuicheWhereInput
  }

  export type GuicheUpdateToOneWithWhereWithoutSenhaInput = {
    where?: GuicheWhereInput
    data: XOR<GuicheUpdateWithoutSenhaInput, GuicheUncheckedUpdateWithoutSenhaInput>
  }

  export type GuicheUpdateWithoutSenhaInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reparticao?: ReparticaoUpdateOneRequiredWithoutGuichesNestedInput
  }

  export type GuicheUncheckedUpdateWithoutSenhaInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    reparticaoId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsuarioUpsertWithoutSenhaInput = {
    update: XOR<UsuarioUpdateWithoutSenhaInput, UsuarioUncheckedUpdateWithoutSenhaInput>
    create: XOR<UsuarioCreateWithoutSenhaInput, UsuarioUncheckedCreateWithoutSenhaInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutSenhaInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutSenhaInput, UsuarioUncheckedUpdateWithoutSenhaInput>
  }

  export type UsuarioUpdateWithoutSenhaInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    name?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reparticao?: ReparticaoUpdateOneRequiredWithoutUsuariosNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutSenhaInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    name?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    reparticaoId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServicoUpsertWithoutSenhaInput = {
    update: XOR<ServicoUpdateWithoutSenhaInput, ServicoUncheckedUpdateWithoutSenhaInput>
    create: XOR<ServicoCreateWithoutSenhaInput, ServicoUncheckedCreateWithoutSenhaInput>
    where?: ServicoWhereInput
  }

  export type ServicoUpdateToOneWithWhereWithoutSenhaInput = {
    where?: ServicoWhereInput
    data: XOR<ServicoUpdateWithoutSenhaInput, ServicoUncheckedUpdateWithoutSenhaInput>
  }

  export type ServicoUpdateWithoutSenhaInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contador?: ContadorPrioridadeUpdateManyWithoutServicoNestedInput
    reparticao?: ReparticaoUpdateOneRequiredWithoutServicosNestedInput
  }

  export type ServicoUncheckedUpdateWithoutSenhaInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reparticaoId?: StringFieldUpdateOperationsInput | string
    contador?: ContadorPrioridadeUncheckedUpdateManyWithoutServicoNestedInput
  }

  export type CidadaoUpsertWithoutSenhaInput = {
    update: XOR<CidadaoUpdateWithoutSenhaInput, CidadaoUncheckedUpdateWithoutSenhaInput>
    create: XOR<CidadaoCreateWithoutSenhaInput, CidadaoUncheckedCreateWithoutSenhaInput>
    where?: CidadaoWhereInput
  }

  export type CidadaoUpdateToOneWithWhereWithoutSenhaInput = {
    where?: CidadaoWhereInput
    data: XOR<CidadaoUpdateWithoutSenhaInput, CidadaoUncheckedUpdateWithoutSenhaInput>
  }

  export type CidadaoUpdateWithoutSenhaInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reparticao?: ReparticaoUpdateOneRequiredWithoutCidadaosNestedInput
  }

  export type CidadaoUncheckedUpdateWithoutSenhaInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    reparticaoId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServicoCreateWithoutContadorInput = {
    id?: string
    name: string
    slug: string
    createdAt?: Date | string
    updatedAt?: Date | string
    senha?: SenhaCreateNestedManyWithoutServicoInput
    reparticao: ReparticaoCreateNestedOneWithoutServicosInput
  }

  export type ServicoUncheckedCreateWithoutContadorInput = {
    id?: string
    name: string
    slug: string
    createdAt?: Date | string
    updatedAt?: Date | string
    reparticaoId: string
    senha?: SenhaUncheckedCreateNestedManyWithoutServicoInput
  }

  export type ServicoCreateOrConnectWithoutContadorInput = {
    where: ServicoWhereUniqueInput
    create: XOR<ServicoCreateWithoutContadorInput, ServicoUncheckedCreateWithoutContadorInput>
  }

  export type ServicoUpsertWithoutContadorInput = {
    update: XOR<ServicoUpdateWithoutContadorInput, ServicoUncheckedUpdateWithoutContadorInput>
    create: XOR<ServicoCreateWithoutContadorInput, ServicoUncheckedCreateWithoutContadorInput>
    where?: ServicoWhereInput
  }

  export type ServicoUpdateToOneWithWhereWithoutContadorInput = {
    where?: ServicoWhereInput
    data: XOR<ServicoUpdateWithoutContadorInput, ServicoUncheckedUpdateWithoutContadorInput>
  }

  export type ServicoUpdateWithoutContadorInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    senha?: SenhaUpdateManyWithoutServicoNestedInput
    reparticao?: ReparticaoUpdateOneRequiredWithoutServicosNestedInput
  }

  export type ServicoUncheckedUpdateWithoutContadorInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reparticaoId?: StringFieldUpdateOperationsInput | string
    senha?: SenhaUncheckedUpdateManyWithoutServicoNestedInput
  }

  export type ServicoCreateManyReparticaoInput = {
    id?: string
    name: string
    slug: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UsuarioCreateManyReparticaoInput = {
    id?: string
    role?: $Enums.Role
    name: string
    cpf: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GuicheCreateManyReparticaoInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CidadaoCreateManyReparticaoInput = {
    id?: string
    name: string
    cpf: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ServicoUpdateWithoutReparticaoInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    senha?: SenhaUpdateManyWithoutServicoNestedInput
    contador?: ContadorPrioridadeUpdateManyWithoutServicoNestedInput
  }

  export type ServicoUncheckedUpdateWithoutReparticaoInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    senha?: SenhaUncheckedUpdateManyWithoutServicoNestedInput
    contador?: ContadorPrioridadeUncheckedUpdateManyWithoutServicoNestedInput
  }

  export type ServicoUncheckedUpdateManyWithoutReparticaoInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsuarioUpdateWithoutReparticaoInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    name?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    senha?: SenhaUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutReparticaoInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    name?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    senha?: SenhaUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateManyWithoutReparticaoInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    name?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GuicheUpdateWithoutReparticaoInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    senha?: SenhaUpdateManyWithoutGuicheNestedInput
  }

  export type GuicheUncheckedUpdateWithoutReparticaoInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    senha?: SenhaUncheckedUpdateManyWithoutGuicheNestedInput
  }

  export type GuicheUncheckedUpdateManyWithoutReparticaoInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CidadaoUpdateWithoutReparticaoInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    senha?: SenhaUpdateManyWithoutCidadaoNestedInput
  }

  export type CidadaoUncheckedUpdateWithoutReparticaoInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    senha?: SenhaUncheckedUpdateManyWithoutCidadaoNestedInput
  }

  export type CidadaoUncheckedUpdateManyWithoutReparticaoInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SenhaCreateManyGuicheInput = {
    id?: number
    senha?: string | null
    numeroOrdem?: number
    prioridade?: $Enums.Prioridades
    status?: $Enums.SenhaStatus
    usuarioId?: string | null
    servicoId: string
    cidadaoId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SenhaUpdateWithoutGuicheInput = {
    senha?: NullableStringFieldUpdateOperationsInput | string | null
    numeroOrdem?: IntFieldUpdateOperationsInput | number
    prioridade?: EnumPrioridadesFieldUpdateOperationsInput | $Enums.Prioridades
    status?: EnumSenhaStatusFieldUpdateOperationsInput | $Enums.SenhaStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UsuarioUpdateOneWithoutSenhaNestedInput
    servico?: ServicoUpdateOneRequiredWithoutSenhaNestedInput
    cidadao?: CidadaoUpdateOneRequiredWithoutSenhaNestedInput
  }

  export type SenhaUncheckedUpdateWithoutGuicheInput = {
    id?: IntFieldUpdateOperationsInput | number
    senha?: NullableStringFieldUpdateOperationsInput | string | null
    numeroOrdem?: IntFieldUpdateOperationsInput | number
    prioridade?: EnumPrioridadesFieldUpdateOperationsInput | $Enums.Prioridades
    status?: EnumSenhaStatusFieldUpdateOperationsInput | $Enums.SenhaStatus
    usuarioId?: NullableStringFieldUpdateOperationsInput | string | null
    servicoId?: StringFieldUpdateOperationsInput | string
    cidadaoId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SenhaUncheckedUpdateManyWithoutGuicheInput = {
    id?: IntFieldUpdateOperationsInput | number
    senha?: NullableStringFieldUpdateOperationsInput | string | null
    numeroOrdem?: IntFieldUpdateOperationsInput | number
    prioridade?: EnumPrioridadesFieldUpdateOperationsInput | $Enums.Prioridades
    status?: EnumSenhaStatusFieldUpdateOperationsInput | $Enums.SenhaStatus
    usuarioId?: NullableStringFieldUpdateOperationsInput | string | null
    servicoId?: StringFieldUpdateOperationsInput | string
    cidadaoId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SenhaCreateManyUsuarioInput = {
    id?: number
    senha?: string | null
    numeroOrdem?: number
    prioridade?: $Enums.Prioridades
    status?: $Enums.SenhaStatus
    guicheId?: string | null
    servicoId: string
    cidadaoId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SenhaUpdateWithoutUsuarioInput = {
    senha?: NullableStringFieldUpdateOperationsInput | string | null
    numeroOrdem?: IntFieldUpdateOperationsInput | number
    prioridade?: EnumPrioridadesFieldUpdateOperationsInput | $Enums.Prioridades
    status?: EnumSenhaStatusFieldUpdateOperationsInput | $Enums.SenhaStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    guiche?: GuicheUpdateOneWithoutSenhaNestedInput
    servico?: ServicoUpdateOneRequiredWithoutSenhaNestedInput
    cidadao?: CidadaoUpdateOneRequiredWithoutSenhaNestedInput
  }

  export type SenhaUncheckedUpdateWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    senha?: NullableStringFieldUpdateOperationsInput | string | null
    numeroOrdem?: IntFieldUpdateOperationsInput | number
    prioridade?: EnumPrioridadesFieldUpdateOperationsInput | $Enums.Prioridades
    status?: EnumSenhaStatusFieldUpdateOperationsInput | $Enums.SenhaStatus
    guicheId?: NullableStringFieldUpdateOperationsInput | string | null
    servicoId?: StringFieldUpdateOperationsInput | string
    cidadaoId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SenhaUncheckedUpdateManyWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    senha?: NullableStringFieldUpdateOperationsInput | string | null
    numeroOrdem?: IntFieldUpdateOperationsInput | number
    prioridade?: EnumPrioridadesFieldUpdateOperationsInput | $Enums.Prioridades
    status?: EnumSenhaStatusFieldUpdateOperationsInput | $Enums.SenhaStatus
    guicheId?: NullableStringFieldUpdateOperationsInput | string | null
    servicoId?: StringFieldUpdateOperationsInput | string
    cidadaoId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SenhaCreateManyCidadaoInput = {
    id?: number
    senha?: string | null
    numeroOrdem?: number
    prioridade?: $Enums.Prioridades
    status?: $Enums.SenhaStatus
    guicheId?: string | null
    usuarioId?: string | null
    servicoId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SenhaUpdateWithoutCidadaoInput = {
    senha?: NullableStringFieldUpdateOperationsInput | string | null
    numeroOrdem?: IntFieldUpdateOperationsInput | number
    prioridade?: EnumPrioridadesFieldUpdateOperationsInput | $Enums.Prioridades
    status?: EnumSenhaStatusFieldUpdateOperationsInput | $Enums.SenhaStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    guiche?: GuicheUpdateOneWithoutSenhaNestedInput
    usuario?: UsuarioUpdateOneWithoutSenhaNestedInput
    servico?: ServicoUpdateOneRequiredWithoutSenhaNestedInput
  }

  export type SenhaUncheckedUpdateWithoutCidadaoInput = {
    id?: IntFieldUpdateOperationsInput | number
    senha?: NullableStringFieldUpdateOperationsInput | string | null
    numeroOrdem?: IntFieldUpdateOperationsInput | number
    prioridade?: EnumPrioridadesFieldUpdateOperationsInput | $Enums.Prioridades
    status?: EnumSenhaStatusFieldUpdateOperationsInput | $Enums.SenhaStatus
    guicheId?: NullableStringFieldUpdateOperationsInput | string | null
    usuarioId?: NullableStringFieldUpdateOperationsInput | string | null
    servicoId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SenhaUncheckedUpdateManyWithoutCidadaoInput = {
    id?: IntFieldUpdateOperationsInput | number
    senha?: NullableStringFieldUpdateOperationsInput | string | null
    numeroOrdem?: IntFieldUpdateOperationsInput | number
    prioridade?: EnumPrioridadesFieldUpdateOperationsInput | $Enums.Prioridades
    status?: EnumSenhaStatusFieldUpdateOperationsInput | $Enums.SenhaStatus
    guicheId?: NullableStringFieldUpdateOperationsInput | string | null
    usuarioId?: NullableStringFieldUpdateOperationsInput | string | null
    servicoId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SenhaCreateManyServicoInput = {
    id?: number
    senha?: string | null
    numeroOrdem?: number
    prioridade?: $Enums.Prioridades
    status?: $Enums.SenhaStatus
    guicheId?: string | null
    usuarioId?: string | null
    cidadaoId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContadorPrioridadeCreateManyServicoInput = {
    id?: number
    quantidade?: number
    updatedAt?: Date | string
  }

  export type SenhaUpdateWithoutServicoInput = {
    senha?: NullableStringFieldUpdateOperationsInput | string | null
    numeroOrdem?: IntFieldUpdateOperationsInput | number
    prioridade?: EnumPrioridadesFieldUpdateOperationsInput | $Enums.Prioridades
    status?: EnumSenhaStatusFieldUpdateOperationsInput | $Enums.SenhaStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    guiche?: GuicheUpdateOneWithoutSenhaNestedInput
    usuario?: UsuarioUpdateOneWithoutSenhaNestedInput
    cidadao?: CidadaoUpdateOneRequiredWithoutSenhaNestedInput
  }

  export type SenhaUncheckedUpdateWithoutServicoInput = {
    id?: IntFieldUpdateOperationsInput | number
    senha?: NullableStringFieldUpdateOperationsInput | string | null
    numeroOrdem?: IntFieldUpdateOperationsInput | number
    prioridade?: EnumPrioridadesFieldUpdateOperationsInput | $Enums.Prioridades
    status?: EnumSenhaStatusFieldUpdateOperationsInput | $Enums.SenhaStatus
    guicheId?: NullableStringFieldUpdateOperationsInput | string | null
    usuarioId?: NullableStringFieldUpdateOperationsInput | string | null
    cidadaoId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SenhaUncheckedUpdateManyWithoutServicoInput = {
    id?: IntFieldUpdateOperationsInput | number
    senha?: NullableStringFieldUpdateOperationsInput | string | null
    numeroOrdem?: IntFieldUpdateOperationsInput | number
    prioridade?: EnumPrioridadesFieldUpdateOperationsInput | $Enums.Prioridades
    status?: EnumSenhaStatusFieldUpdateOperationsInput | $Enums.SenhaStatus
    guicheId?: NullableStringFieldUpdateOperationsInput | string | null
    usuarioId?: NullableStringFieldUpdateOperationsInput | string | null
    cidadaoId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContadorPrioridadeUpdateWithoutServicoInput = {
    quantidade?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContadorPrioridadeUncheckedUpdateWithoutServicoInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantidade?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContadorPrioridadeUncheckedUpdateManyWithoutServicoInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantidade?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}