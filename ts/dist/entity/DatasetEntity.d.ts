import { HongKongCsdiEntityBase } from '../HongKongCsdiEntityBase';
import type { HongKongCsdiSDK } from '../HongKongCsdiSDK';
import type { Control } from '../types';
import type { Dataset, DatasetLoadMatch, DatasetListMatch } from '../HongKongCsdiTypes';
declare class DatasetEntity extends HongKongCsdiEntityBase<Dataset> {
    constructor(client: HongKongCsdiSDK, entopts: any);
    make(this: DatasetEntity): DatasetEntity;
    load(this: any, reqmatch?: DatasetLoadMatch, ctrl?: Control): Promise<DatasetEntity>;
    list(this: any, reqmatch?: DatasetListMatch, ctrl?: Control): Promise<DatasetEntity[]>;
}
export { DatasetEntity };
