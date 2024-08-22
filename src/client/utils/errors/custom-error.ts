export class CustomError extends Error {
  cause: string;
  constructor(message: string, code: number = 500, cause?: string) {
    super(message || 'Something went wrong!');
    this.name = `Error ${code}`;
    this.cause = cause;
  }
}