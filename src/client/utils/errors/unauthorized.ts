import { CustomError } from './custom-error';

export class UnauthorizedError extends CustomError {
  constructor(message: string = "Unauthorized", cause: string) {
    super(message, 401, cause);
  }
}