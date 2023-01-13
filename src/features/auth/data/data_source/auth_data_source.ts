import { LoginInfoModel } from "../../domain/entities/login_info_model";
import { Token } from "../../domain/entities/token_model";
import { UserRegisteryModel } from "../../domain/entities/user_registery_model";

export interface AuthDataSource {
  login(login_info: LoginInfoModel): Promise<Token | Error>;
  register(
    UserRegisteryModel: UserRegisteryModel
  ): Promise<Record<string, string> | Error>;
}
