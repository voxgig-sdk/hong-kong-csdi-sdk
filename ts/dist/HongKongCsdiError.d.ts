import { Context } from './Context';
declare class HongKongCsdiError extends Error {
    isHongKongCsdiError: boolean;
    sdk: string;
    code: string;
    ctx: Context;
    status: number;
    get notFound(): boolean;
    constructor(code: string, msg: string, ctx: Context);
}
export { HongKongCsdiError };
