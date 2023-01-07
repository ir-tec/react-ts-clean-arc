// Make the `request` function generic

import { AxiosError, AxiosResponse } from "axios";
import { http_instance } from "../interceptor/http_interseptor";
// to specify the return data type:
export { AxiosError } from "axios";
// export interface httpRequestInterface<TResponse> {
//   httpPostRequest?(body: {}): Promise<TResponse | AxiosError>;
//   httpGetRequest?(request: {}): Promise<TResponse | AxiosError>;
//   httpPutRequest?(body: {}): Promise<TResponse | AxiosError>;
//   httpDeleteRequest?(request: {}): Promise<TResponse | AxiosError>;
// }

export interface SuccessResponse {
  status: number;
  data: AxiosResponse;
}
export interface ErrorResponse {
  status: number;
  data: AxiosError;
}

export type HttpResult = SuccessResponse | ErrorResponse;
