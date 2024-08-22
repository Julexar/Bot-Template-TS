import { CustomError } from './custom-error';

export class InternalServerError extends CustomError {
  constructor(message: string = "Internal Server Error", cause: string) {
    super(message, 500, cause);
  }
}