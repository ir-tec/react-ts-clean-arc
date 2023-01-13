import { LoginInfoModel } from "../entities/login_info_model";
import { Token } from "../entities/token_model";
import { UserRegisteryModel } from "../entities/user_registery_model";

export default interface AuthRepository {
  login(loginInfo: LoginInfoModel): Promise<Token | Error>;
  register(
    UserRegisteryModel: UserRegisteryModel
  ): Promise<Record<string, string> | Error>;
}
