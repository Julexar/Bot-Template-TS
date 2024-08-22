import { CustomError } from './custom-error';

export class ForbiddenError extends CustomError {
  constructor(message: string = "Forbidden", cause: string) {
    super(message, 403, cause);
  }
}