import { Token } from "../../../domain/model/token_model";
import { LoginInfoModel } from "../../../domain/model/login_info_model";

export interface AuthDataSource {
  login(login_info: LoginInfoModel): Promise<Token | Error>;
}
