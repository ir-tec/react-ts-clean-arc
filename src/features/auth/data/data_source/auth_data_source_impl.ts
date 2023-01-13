import { http_instance } from "../../../../core/http/interceptor/http_interseptor";
import { LoginInfoModel } from "../../domain/entities/login_info_model";
import { Token } from "../../domain/entities/token_model";
import { UserRegisteryModel } from "../../domain/entities/user_registery_model";
import { AuthDataSource } from "./auth_data_source";

// All auth related function implementations are here
export class LoginDataSourceImpl implements AuthDataSource {
  async login(loginInfo: LoginInfoModel) {
    try {
      const { data } = await http_instance.post("/login", loginInfo);
      return data as Token;
    } catch (error) {
      throw Error(`${error}`);
    }
  }
  async register(
    UserRegisteryModel: UserRegisteryModel
  ): Promise<Record<string, string> | Error> {
    try {
      const { data } = await http_instance.post(
        "/register",
        UserRegisteryModel
      );

      return { text: data };
    } catch (error) {
      throw Error(`${error}`);
    }
  }
}
