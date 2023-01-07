import { http_instance } from "../../../../core/http/interceptor/http_interseptor";
import { Token } from "../../domain/model/token_model";
import { LoginInfoRepository } from "../../domain/repository/login_info_repository";
import { LoginDataSource } from "./login/login_data_source";

export class LoginDataSourceImpl implements LoginDataSource {
  async login(loginInfo: LoginInfoRepository): Promise<Token> {
    try {
      const { data } = await http_instance.post("/test");

      return { token: data };
    } catch (error) {
      return { token: "asdasdas" };
    }
  }
}
