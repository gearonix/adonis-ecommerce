import {Exceptions} from '@app/lib/index'
import {CanActivate, ExecutionContext, Injectable, UnauthorizedException} from '@nestjs/common'
import {JwtService} from '@nestjs/jwt'
import {Observable} from 'rxjs'

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private jwtService: JwtService) {
    }

    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        const req = context.switchToHttp().getRequest()
        try {
            const authHeader = req.headers.authorization
            const [bearer, token] = authHeader.split(' ')

            if (bearer != 'Bearer' || !token) {
                throw new UnauthorizedException({message: Exceptions.NOT_AUTHORIZED})
            }

            req.user = this.jwtService.verify(token)
            return true
        } catch (e) {
            throw new UnauthorizedException({message: Exceptions.NOT_AUTHORIZED})
        }
    }
}
