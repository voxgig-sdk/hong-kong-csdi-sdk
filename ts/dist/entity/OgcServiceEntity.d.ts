import { HongKongCsdiEntityBase } from '../HongKongCsdiEntityBase';
import type { HongKongCsdiSDK } from '../HongKongCsdiSDK';
import type { Control } from '../types';
import type { OgcService, OgcServiceLoadMatch } from '../HongKongCsdiTypes';
declare class OgcServiceEntity extends HongKongCsdiEntityBase<OgcService> {
    constructor(client: HongKongCsdiSDK, entopts: any);
    make(this: OgcServiceEntity): OgcServiceEntity;
    load(this: any, reqmatch?: OgcServiceLoadMatch, ctrl?: Control): Promise<OgcServiceEntity>;
}
export { OgcServiceEntity };
