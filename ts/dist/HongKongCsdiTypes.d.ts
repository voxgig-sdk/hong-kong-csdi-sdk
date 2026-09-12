export interface Dataset {
    apiCallCount?: number;
    apiEndpoints?: Record<string, any>;
    apiServiceCalls?: number;
    category?: string;
    datasetDownloads?: number;
    description: string;
    downloadCount?: number;
    formats?: any[];
    id: string;
    keywords?: any[];
    lastUpdated?: string;
    license?: string;
    provider?: string;
    publishedDate?: string;
    spatialExtent?: Record<string, any>;
    theme?: string;
    title: string;
    totalDatasets?: number;
    viewCount?: number;
    year?: number;
}
export interface DatasetLoadMatch {
    id: string;
    $action?: string;
    [action: string]: any;
}
export interface DatasetListMatch {
    category?: string;
    limit?: number;
    offset?: number;
    search?: string;
    sort_by?: string;
    theme?: string;
}
export interface OgcService {
}
export interface OgcServiceLoadMatch {
    bbox?: string;
    crs?: string;
    format?: string;
    height?: number;
    layer?: string;
    request: string;
    service: string;
    version: string;
    width?: number;
    count?: number;
    outputformat?: string;
    srsname?: string;
    typename?: string;
}
