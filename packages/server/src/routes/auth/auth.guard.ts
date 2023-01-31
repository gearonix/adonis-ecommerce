import {CanActivate, ExecutionContext, Injectable, SetMetadata, UnauthorizedException} from '@nestjs/common'
import {JwtService} from '@nestjs/jwt'
import {Observable} from "rxjs";
// Convienience Function
const AllowUnauthorizedRequest = () => SetMetadata('allowUnauthorizedRequest', true);

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private jwtService: JwtService) {
    }

    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        const req = context.switchToHttp().getRequest()
        try {
            const authHeader = req.headers.authorization
            const [bearer, token] = authHeader.split('')

            if (bearer != 'Bearer' || !token) {
                throw new UnauthorizedException({message: 'User not authorized'})
            }

            const user = this.jwtService.verify(token)
            req.user = user
            return true
        } catch (e) {
            throw new UnauthorizedException({message: 'User not authorized'})
        }
    }
}
