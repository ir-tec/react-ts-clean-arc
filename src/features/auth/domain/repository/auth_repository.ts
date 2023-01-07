import { Token } from "../model/token_model";
import { LoginInfoRepository } from "./login_info_repository";

export default interface AuthRepository {
  login(loginInfo: LoginInfoRepository): Promise<Token | Error>;
}
