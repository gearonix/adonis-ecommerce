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
      const authHeader = req.headers.authorization
      const bearer = authHeader.split(' ')[0]
      const token = authHeader.split(' ')[1]

      if (bearer !== 'Bearer' || !token) {
        throw new UnauthorizedException({ message: ServerExceptions.NOT_AUTHORIZED })
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
