import { DatasetEntity } from './entity/DatasetEntity';
import { OgcServiceEntity } from './entity/OgcServiceEntity';
export type * from './HongKongCsdiTypes';
import { inspect } from 'node:util';
import type { Context, Feature } from './types';
import { config } from './Config';
import { HongKongCsdiEntityBase } from './HongKongCsdiEntityBase';
import { Utility } from './utility/Utility';
import { BaseFeature } from './feature/base/BaseFeature';
declare const stdutil: Utility;
declare class HongKongCsdiSDK {
    _mode: string;
    _options: any;
    _utility: Utility;
    _features: Feature[];
    _rootctx: Context;
    constructor(options?: any);
    options(): any;
    utility(): any;
    prepare(fetchargs?: any): Promise<any>;
    direct(fetchargs?: any): Promise<Error | {
        ok: boolean;
        status: number;
        headers: any;
        data: any;
        err?: undefined;
    } | {
        ok: boolean;
        err: any;
        status?: undefined;
        headers?: undefined;
        data?: undefined;
    }>;
    _rawRequest(fetchargs?: any): Promise<Error | {
        ok: boolean;
        status: number;
        headers: any;
        data: any;
        err?: undefined;
    } | {
        ok: boolean;
        err: any;
        status?: undefined;
        headers?: undefined;
        data?: undefined;
    }>;
    graphql(query: string, variables?: any, ctrl?: any): Promise<any>;
    Dataset(entopts?: Record<string, any>): DatasetEntity;
    OgcService(entopts?: Record<string, any>): OgcServiceEntity;
    static test(testoptsarg?: any, sdkoptsarg?: any): HongKongCsdiSDK;
    tester(testopts?: any, sdkopts?: any): HongKongCsdiSDK;
    toJSON(): {
        name: string;
    };
    toString(): string;
    [inspect.custom](): string;
}
declare const SDK: typeof HongKongCsdiSDK;
export { stdutil, config, BaseFeature, HongKongCsdiEntityBase, HongKongCsdiSDK, SDK, };
