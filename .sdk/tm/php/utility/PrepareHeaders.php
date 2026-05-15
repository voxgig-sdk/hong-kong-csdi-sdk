<?php
declare(strict_types=1);

// HongKongCsdi SDK utility: prepare_headers

class HongKongCsdiPrepareHeaders
{
    public static function call(HongKongCsdiContext $ctx): array
    {
        $options = $ctx->client->options_map();
        $headers = \Voxgig\Struct\Struct::getprop($options, 'headers');
        if (!$headers) {
            return [];
        }
        $out = \Voxgig\Struct\Struct::clone($headers);
        return is_array($out) ? $out : [];
    }
}
