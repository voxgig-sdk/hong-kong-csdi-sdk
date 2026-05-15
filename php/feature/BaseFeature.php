<?php
declare(strict_types=1);

// HongKongCsdi SDK base feature

class HongKongCsdiBaseFeature
{
    public string $version;
    public string $name;
    public bool $active;

    public function __construct()
    {
        $this->version = '0.0.1';
        $this->name = 'base';
        $this->active = true;
    }

    public function get_version(): string { return $this->version; }
    public function get_name(): string { return $this->name; }
    public function get_active(): bool { return $this->active; }

    public function init(HongKongCsdiContext $ctx, array $options): void {}
    public function PostConstruct(HongKongCsdiContext $ctx): void {}
    public function PostConstructEntity(HongKongCsdiContext $ctx): void {}
    public function SetData(HongKongCsdiContext $ctx): void {}
    public function GetData(HongKongCsdiContext $ctx): void {}
    public function GetMatch(HongKongCsdiContext $ctx): void {}
    public function SetMatch(HongKongCsdiContext $ctx): void {}
    public function PrePoint(HongKongCsdiContext $ctx): void {}
    public function PreSpec(HongKongCsdiContext $ctx): void {}
    public function PreRequest(HongKongCsdiContext $ctx): void {}
    public function PreResponse(HongKongCsdiContext $ctx): void {}
    public function PreResult(HongKongCsdiContext $ctx): void {}
    public function PreDone(HongKongCsdiContext $ctx): void {}
    public function PreUnexpected(HongKongCsdiContext $ctx): void {}
}
