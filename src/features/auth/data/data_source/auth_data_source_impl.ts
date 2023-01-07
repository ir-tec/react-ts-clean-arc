import { http_instance } from "../../../../core/http/interceptor/http_interseptor";
import { Token } from "../../domain/model/token_model";
import { LoginInfoModel } from "../../domain/model/login_info_model";
import { AuthDataSource } from "./login/login_data_source";

export class LoginDataSourceImpl implements AuthDataSource {
  async login(loginInfo: LoginInfoModel) {
    try {
      const { data } = await http_instance.post("/login", loginInfo);
      return data as Token;
    } catch (error) {
      throw Error(`${error}`);
    }
  }
}
