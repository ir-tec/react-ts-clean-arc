import { Token } from "../model/token_model";
import AuthRepository from "../repository/auth_repository";
import { LoginInfoRepository } from "../repository/login_info_repository";

export default interface LoginHttpUseCase {
  invoke(): Promise<Token | Error>;
}

export class LoginHttpUseCaseImpl implements LoginHttpUseCase {
  private loginInfo: LoginInfoRepository;
  private loginCall: AuthRepository;
  constructor(_loginInfo: LoginInfoRepository, _loginCall: AuthRepository) {
    this.loginInfo = _loginInfo;
    this.loginCall = _loginCall;
  }

  async invoke() {
    return this.loginCall.login(this.loginInfo);
  }
}
