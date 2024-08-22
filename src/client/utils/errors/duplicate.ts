import { CustomError } from './custom-error';

export class DuplicateError extends CustomError {
  constructor(message: string = "Duplicate Record", cause: string) {
    super(message, 409, cause);
  }
}