import { LoginInfoModel } from "../../domain/entities/login_info_model";
import { Token } from "../../domain/entities/token_model";
import { UserRegisteryModel } from "../../domain/entities/user_registery_model";
import AuthRepository from "../../domain/repository/auth_repository";
import { AuthDataSource } from "../data_source/auth_data_source";

export class AuthRepositoryImpl implements AuthRepository {
  private _authDataSource: AuthDataSource;
  constructor(loginDataSource: AuthDataSource) {
    this._authDataSource = loginDataSource;
  }

  async login(loginInfo: LoginInfoModel): Promise<Token | Error> {
    return this._authDataSource.login(loginInfo);
  }
  async register(
    UserRegisteryModel: UserRegisteryModel
  ): Promise<Record<string, string> | Error> {
    return this._authDataSource.register(UserRegisteryModel);
  }
}
