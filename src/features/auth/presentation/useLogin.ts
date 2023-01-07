import React from "react";

const useLogin = () => {
  const [is_authed, set_is_authed] = React.useState<boolean>(false);
  // const UseCase = new LoginHttpUseCaseImpl()

  return { is_authed };
};

export default useLogin;
