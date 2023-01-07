import { LoginInfoModel } from "../../domain/model/login_info_model";
import { Token } from "../../domain/model/token_model";
import AuthRepository from "../../domain/repository/auth_repository";
import { AuthDataSource } from "../data_source/login/login_data_source";

export class AuthRepositoryImpl implements AuthRepository {
  private _loginDataSource: AuthDataSource;
  constructor(loginDataSource: AuthDataSource) {
    this._loginDataSource = loginDataSource;
  }

  async login(loginInfo: LoginInfoModel): Promise<Token | Error> {
    return this._loginDataSource.login(loginInfo);
  }
}
