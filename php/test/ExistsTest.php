<?php
declare(strict_types=1);

// HongKongCsdi SDK exists test

require_once __DIR__ . '/../hongkongcsdi_sdk.php';

use PHPUnit\Framework\TestCase;

class ExistsTest extends TestCase
{
    public function test_create_test_sdk(): void
    {
        $testsdk = HongKongCsdiSDK::test(null, null);
        $this->assertNotNull($testsdk);
    }
}
