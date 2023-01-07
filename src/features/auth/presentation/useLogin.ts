import React from "react";
import { LoginDataSourceImpl } from "../data/data_source/auth_data_source_impl";
import { AuthRepositoryImpl } from "../data/reposotory/auth_repository_impl";
import { LoginInfoModel } from "../domain/model/login_info_model";
import { LoginHttpUseCaseImpl } from "../domain/use_case/login_http_usecase";

const useLogin = () => {
  const [is_authed, set_is_authed] = React.useState<boolean>(false);
  const [login_info, set_login_info] = React.useState<LoginInfoModel>({
    password: "asdasdas",
    userName: "asdasdasdasd",
  });
  const UseCase = new LoginHttpUseCaseImpl(
    new AuthRepositoryImpl(new LoginDataSourceImpl())
  );
  const login_post = async () => await UseCase.invoke(login_info);

  return { login_post };
};

export default useLogin;
