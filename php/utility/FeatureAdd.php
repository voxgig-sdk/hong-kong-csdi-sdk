<?php
declare(strict_types=1);

// HongKongCsdi SDK utility: feature_add

class HongKongCsdiFeatureAdd
{
    public static function call(HongKongCsdiContext $ctx, mixed $f): void
    {
        $ctx->client->features[] = $f;
    }
}
