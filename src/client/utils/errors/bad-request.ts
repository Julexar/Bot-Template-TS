import { CustomError } from './custom-error';

export class BadRequestError extends CustomError {
  constructor(message: string = "Bad Request", cause: string) {
    super(message, 400, cause);
  }
}