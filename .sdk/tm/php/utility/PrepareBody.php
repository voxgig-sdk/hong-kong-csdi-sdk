<?php
declare(strict_types=1);

// HongKongCsdi SDK utility: prepare_body

class HongKongCsdiPrepareBody
{
    public static function call(HongKongCsdiContext $ctx): mixed
    {
        if ($ctx->op->input === 'data') {
            return ($ctx->utility->transform_request)($ctx);
        }
        return null;
    }
}
