import {HttpException, HttpStatus, Injectable} from '@nestjs/common'
import {ProductDTO} from './dto'
import {InjectRepository} from '@nestjs/typeorm'
import {ProductsEntity} from '@app/entities/products/products.entity'
import {Repository} from 'typeorm'
import {AuthService} from '@routes/auth'
import {UsersService} from '@routes/users'
import {Roles} from '@app/types/models'
import {ServerExceptions} from '@app/types/exceptions'

@Injectable()
export class ProductsService {
  constructor(
      @InjectRepository(ProductsEntity)
      private products: Repository<ProductsEntity>,
      private authService: AuthService,
      private usersService: UsersService,
  ) {
  }
  async createProduct(product: ProductDTO){
    await this.checkUserRole()
    //@ts-ignore
    return await this.products.save(product)
  }


  private async checkUserRole() {
    const userId = await this.authService.getUserIdByPayload()
    const userRole = await this.usersService.getUserRoleById(userId)

    if (userRole !== Roles.SALESMAN) {
      throw new HttpException(ServerExceptions.FORBIDDEN, HttpStatus.FORBIDDEN)
    }
  }
}
