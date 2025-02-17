export class ResponseError extends Error {
  constructor(
    message: string,
    public readonly body: any
  ) {
    super(message);
    this.name = 'NetworkError';
  }
}
