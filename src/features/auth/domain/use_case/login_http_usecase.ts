import { Token } from "../entities/token_model";
import AuthRepository from "../repository/auth_repository";
import { LoginInfoModel } from "../entities/login_info_model";

export default interface LoginHttpUseCase {
  invoke(loginInfo: LoginInfoModel): Promise<Token | Error>;
}

export class LoginHttpUseCaseImpl implements LoginHttpUseCase {
  private loginCall: AuthRepository;
  constructor(_loginCall: AuthRepository) {
    this.loginCall = _loginCall;
  }

  async invoke(loginInfo: LoginInfoModel) {
    return this.loginCall.login(loginInfo);
  }
}
