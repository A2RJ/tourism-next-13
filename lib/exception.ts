type ErrorType = {
  name: string;
  message: string;
};

type Option = "UNAUTHENTICATED";

class CustomException extends Error {
  constructor({ name, message }: ErrorType) {
    super(message);
    this.name = name;
  }
}

const error = {
  UNAUTHENTICATED: "Anda tidak mempunyai akses ke sumber daya ini",
};

export const Exception = (option: Option) => {
  return new CustomException({ name: option, message: error[option] });
};
