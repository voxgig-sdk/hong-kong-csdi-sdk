<?php
declare(strict_types=1);

// HongKongCsdi SDK utility: result_headers

class HongKongCsdiResultHeaders
{
    public static function call(HongKongCsdiContext $ctx): ?HongKongCsdiResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result) {
            if ($response && is_array($response->headers)) {
                $result->headers = $response->headers;
            } else {
                $result->headers = [];
            }
        }
        return $result;
    }
}
