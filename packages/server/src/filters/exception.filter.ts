import { ArgumentsHost, Catch, HttpException, HttpStatus, ExceptionFilter } from '@nestjs/common'
import { HttpAdapterHost } from '@nestjs/core'

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  constructor(private readonly httpAdapterHost: HttpAdapterHost) {}

  catch(exception: any, host: ArgumentsHost) {
    const { httpAdapter } = this.httpAdapterHost

    const ctx = host.switchToHttp()

    let httpStatus =
      exception instanceof HttpException ? exception.getStatus() : exception?.code ?? HttpStatus.INTERNAL_SERVER_ERROR

    if (typeof httpStatus === 'string') httpStatus = 500

    const body = {
      status: httpStatus,
      error: exception.error ?? exception?.response?.message?.toLowerCase?.(),
    }

    httpAdapter.reply(ctx.getResponse(), body, httpStatus)
  }
}
