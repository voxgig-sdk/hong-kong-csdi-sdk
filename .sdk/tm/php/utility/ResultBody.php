<?php
declare(strict_types=1);

// HongKongCsdi SDK utility: result_body

class HongKongCsdiResultBody
{
    public static function call(HongKongCsdiContext $ctx): ?HongKongCsdiResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result && $response && $response->json_func && $response->body) {
            $result->body = ($response->json_func)();
        }
        return $result;
    }
}
