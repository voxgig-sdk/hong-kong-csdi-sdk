<?php
declare(strict_types=1);

// HongKongCsdi SDK utility registration

require_once __DIR__ . '/../core/UtilityType.php';
require_once __DIR__ . '/Clean.php';
require_once __DIR__ . '/Done.php';
require_once __DIR__ . '/MakeError.php';
require_once __DIR__ . '/FeatureAdd.php';
require_once __DIR__ . '/FeatureHook.php';
require_once __DIR__ . '/FeatureInit.php';
require_once __DIR__ . '/Fetcher.php';
require_once __DIR__ . '/MakeFetchDef.php';
require_once __DIR__ . '/MakeContext.php';
require_once __DIR__ . '/MakeOptions.php';
require_once __DIR__ . '/MakeRequest.php';
require_once __DIR__ . '/MakeResponse.php';
require_once __DIR__ . '/MakeResult.php';
require_once __DIR__ . '/MakePoint.php';
require_once __DIR__ . '/MakeSpec.php';
require_once __DIR__ . '/MakeUrl.php';
require_once __DIR__ . '/Param.php';
require_once __DIR__ . '/PrepareAuth.php';
require_once __DIR__ . '/PrepareBody.php';
require_once __DIR__ . '/PrepareHeaders.php';
require_once __DIR__ . '/PrepareMethod.php';
require_once __DIR__ . '/PrepareParams.php';
require_once __DIR__ . '/PreparePath.php';
require_once __DIR__ . '/PrepareQuery.php';
require_once __DIR__ . '/ResultBasic.php';
require_once __DIR__ . '/ResultBody.php';
require_once __DIR__ . '/ResultHeaders.php';
require_once __DIR__ . '/TransformRequest.php';
require_once __DIR__ . '/TransformResponse.php';

HongKongCsdiUtility::setRegistrar(function (HongKongCsdiUtility $u): void {
    $u->clean = [HongKongCsdiClean::class, 'call'];
    $u->done = [HongKongCsdiDone::class, 'call'];
    $u->make_error = [HongKongCsdiMakeError::class, 'call'];
    $u->feature_add = [HongKongCsdiFeatureAdd::class, 'call'];
    $u->feature_hook = [HongKongCsdiFeatureHook::class, 'call'];
    $u->feature_init = [HongKongCsdiFeatureInit::class, 'call'];
    $u->fetcher = [HongKongCsdiFetcher::class, 'call'];
    $u->make_fetch_def = [HongKongCsdiMakeFetchDef::class, 'call'];
    $u->make_context = [HongKongCsdiMakeContext::class, 'call'];
    $u->make_options = [HongKongCsdiMakeOptions::class, 'call'];
    $u->make_request = [HongKongCsdiMakeRequest::class, 'call'];
    $u->make_response = [HongKongCsdiMakeResponse::class, 'call'];
    $u->make_result = [HongKongCsdiMakeResult::class, 'call'];
    $u->make_point = [HongKongCsdiMakePoint::class, 'call'];
    $u->make_spec = [HongKongCsdiMakeSpec::class, 'call'];
    $u->make_url = [HongKongCsdiMakeUrl::class, 'call'];
    $u->param = [HongKongCsdiParam::class, 'call'];
    $u->prepare_auth = [HongKongCsdiPrepareAuth::class, 'call'];
    $u->prepare_body = [HongKongCsdiPrepareBody::class, 'call'];
    $u->prepare_headers = [HongKongCsdiPrepareHeaders::class, 'call'];
    $u->prepare_method = [HongKongCsdiPrepareMethod::class, 'call'];
    $u->prepare_params = [HongKongCsdiPrepareParams::class, 'call'];
    $u->prepare_path = [HongKongCsdiPreparePath::class, 'call'];
    $u->prepare_query = [HongKongCsdiPrepareQuery::class, 'call'];
    $u->result_basic = [HongKongCsdiResultBasic::class, 'call'];
    $u->result_body = [HongKongCsdiResultBody::class, 'call'];
    $u->result_headers = [HongKongCsdiResultHeaders::class, 'call'];
    $u->transform_request = [HongKongCsdiTransformRequest::class, 'call'];
    $u->transform_response = [HongKongCsdiTransformResponse::class, 'call'];
});
