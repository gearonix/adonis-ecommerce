import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { AuthService } from '@app/modules/auth'
import { SavedEntity } from '@app/entities/saved.entity'

@Injectable()
export class SavedService {
  constructor(
        @InjectRepository(SavedEntity)
        private saved: Repository<SavedEntity>,
        private authService: AuthService
  ) {}

  async addToSaved(productId: number) {
    const userId = await this.authService.getUserId()
    return this.saved.save({ userId, productId })
  }
  async removeFromSaved(productId: number) {
    const userId = await this.authService.getUserId()
    return this.saved.delete({ productId, userId })
  }
  async getSavedProducts(id?: number) {
    const userId = await this.authService.getUserId()
    return this.saved.find(
        { where: { userId: id || userId },
          order: { savedId: 'DESC' } })
  }
}
