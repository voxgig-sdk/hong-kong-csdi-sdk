<?php
declare(strict_types=1);

// HongKongCsdi SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class HongKongCsdiMakeContext
{
    public static function call(array $ctxmap, ?HongKongCsdiContext $basectx): HongKongCsdiContext
    {
        return new HongKongCsdiContext($ctxmap, $basectx);
    }
}
