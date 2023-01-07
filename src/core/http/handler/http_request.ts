// Make the `request` function generic

import { AxiosError, AxiosResponse } from "axios";
import { http_instance } from "../interceptor/http_interseptor";
// to specify the return data type:
export { AxiosError } from "axios";
export interface httpRequestInterface<TResponse, TRequest> {
  httpPostRequest?(body: TRequest): Promise<TResponse | AxiosError>;
  httpGetRequest?(request: TRequest): Promise<TResponse | AxiosError>;
  httpPutRequest?(body: TRequest): Promise<TResponse | AxiosError>;
  httpDeleteRequest?(request: TRequest): Promise<TResponse | AxiosError>;
}

//  class httpPost implements httpRequestInterface{

// }

// export async function httpPostRequest<TResponse>(
//   url: string,
//   body: {}
// ): Promise<TResponse | AxiosError>; (
// //   try {
// //     const { data } = await http_instance.post(url, body);
// //     return data as TResponse;
// //   } catch (error) {
// //     throw Error(`${error}`);
// //   }
// )

export interface SuccessResponse {
  status: number;
  data: AxiosResponse;
}
