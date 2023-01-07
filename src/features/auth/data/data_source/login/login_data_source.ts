import {
  AxiosError,
  httpRequestInterface,
} from "../../../../../core/http/handler/http_request";
import { Token } from "../../../domain/model/token_model";
import { LoginInfoRepository } from "../../../domain/repository/login_info_repository";

export interface LoginDataSource {
  login(loginInfo: LoginInfoRepository): httpRequestInterface<Token>;
}
