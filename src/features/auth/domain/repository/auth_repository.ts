import { LoginInfoModel } from "../model/login_info_model";
import { Token } from "../model/token_model";

export default interface AuthRepository {
  login(loginInfo: LoginInfoModel): Promise<Token | Error>;
}
