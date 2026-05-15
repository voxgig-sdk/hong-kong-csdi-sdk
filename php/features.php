<?php
declare(strict_types=1);

// HongKongCsdi SDK feature factory

require_once __DIR__ . '/feature/BaseFeature.php';
require_once __DIR__ . '/feature/TestFeature.php';


class HongKongCsdiFeatures
{
    public static function make_feature(string $name)
    {
        switch ($name) {
            case "base":
                return new HongKongCsdiBaseFeature();
            case "test":
                return new HongKongCsdiTestFeature();
            default:
                return new HongKongCsdiBaseFeature();
        }
    }
}
