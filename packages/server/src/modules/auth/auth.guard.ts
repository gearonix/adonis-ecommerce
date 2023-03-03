import { ServerExceptions } from '@app/types/exceptions/serverExceptions'
import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { Observable } from 'rxjs'

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private jwtService: JwtService) {}

  canActivate(
      context: ExecutionContext
  ): boolean | Promise<boolean> | Observable<boolean> {
    const req = context.switchToHttp().getRequest()
    try {
      const token = req.cookies.AUTH_TOKEN

      if (!token) {
        throw new UnauthorizedException({
          message: ServerExceptions.NOT_AUTHORIZED
        })
      }

      req.user = this.jwtService.verify(token)
      return true
    } catch (e) {
      throw new UnauthorizedException({
        message: ServerExceptions.NOT_AUTHORIZED
      })
    }
  }
}
