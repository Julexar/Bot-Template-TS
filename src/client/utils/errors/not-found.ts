import { CustomError } from './custom-error';

export class NotFoundError extends CustomError {
  constructor(message: string = "Not Found", cause: string) {
    super(message, 404, cause);
  }
}