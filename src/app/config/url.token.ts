import { InjectionToken } from "@angular/core";

export interface ApiUrlConfig {
    url : string;
}

export const apiUrl = new InjectionToken<ApiUrlConfig>('apiToken');