import { Token } from "../../../domain/model/token_model";
import { LoginInfoRepository } from "../../../domain/repository/login_info_repository";

export interface LoginDataSource {
  login: (login_info: LoginInfoRepository) => Promise<Token | Error>;
}
