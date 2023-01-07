import { http_instance } from "../../../../core/http/interceptor/http_interseptor";
import { Token } from "../../domain/model/token_model";
import { LoginInfoRepository } from "../../domain/repository/login_info_repository";
import { LoginDataSource } from "./login/login_data_source";

export class LoginDataSourceImpl implements LoginDataSource {
  private _loginInfo: LoginInfoRepository;
  constructor(loginInfo: LoginInfoRepository) {
    this._loginInfo = loginInfo;
  }

  async login() {
    try {
      const { data } = await http_instance.post("", this._loginInfo);
      return data as Token;
    } catch (error) {
      throw Error(`${error}`);
    }
  }
}
