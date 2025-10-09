import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateWirdEntryDto, UpdateWirdEntryDto } from './DTO';

@Injectable()
export class WirdEntryService {
  constructor(private readonly prisma: PrismaService) {}

//   creating wirds for a user

  async createWird(data: CreateWirdEntryDto) {

    try {
      return await this.prisma.wirdEntry.create({
        data: {
          ...data,
        },
      });
    } catch (error) {
      console.log(error);
      throw new Error('Failed to create Wird Entry');
    }
  }

//   getting all wirds for a user
  async getAllWird(userId?: string) {
    try {
      return await this.prisma.wirdEntry.findMany({
        where: {
          userId: userId,
        },
      });
    } catch (error) {
      console.log(error);
      throw new Error('Failed to retrieve Wird Entries');
    }
  }

//   getting a single wird by id
  async getWird(id: string) {
    try {
      return await this.prisma.wirdEntry.findUnique({
        where: { id },
      });
    } catch (error) {
      console.log(error);
      throw new Error('Failed to retrieve Wird Entry');
    }
  }

//   updating a wird by id
    async updateWird(id: string, data: UpdateWirdEntryDto) {
        try {
            return await this.prisma.wirdEntry.update({
                where: { id },
                data: {
                    ...data,
                },
            });
        } catch (error) {
            console.log(error);
            throw new Error('Failed to update Wird Entry');
        }
    }

    // deleting a wird by id
    async deleteWird(id: string) {
        try {
            return await this.prisma.wirdEntry.delete({
                where: { id },
            });
        } catch (error) {
            console.log(error);
            throw new Error('Failed to delete Wird Entry');
        }
    }
}


/*

user - Module
  user.module.ts
    providers: [UserService]
    exports: [UserService]
  user.service.ts
     getuserbyid()


post -module
  post.module.ts
    providers: [PostService, UserService]

  post.service.ts
     createpost(){
        const user = this.userService.getUserById()
     }

app - Module
  app.module.ts
    imports: [UserModule, PostModule]
*/