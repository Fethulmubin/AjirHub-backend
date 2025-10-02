import { Body, Controller, Post } from '@nestjs/common';
import { AllowAnonymous, AuthService } from '@thallesp/nestjs-better-auth';
import { auth } from 'src/utils/auth';
import { CreateUserDto, LoginDto } from './DTO';

@Controller('user')
export class UserController {
  constructor(private readonly authService: AuthService<typeof auth>) {}

  @Post('register')
  @AllowAnonymous()
  async register(
    @Body()
    body: CreateUserDto,
  ) {
    return this.authService.api.signUpEmail({
      body: {
        email: body.email,
        password: body.password,
        name: body.name,
        image: body.image ?? undefined,
        phone: body.phone,
      },
    });
  }

  @Post('login')
  @AllowAnonymous()
  async login(@Body() body: LoginDto) {
    return this.authService.api.signInEmail({
      body: {
        email: body.email,
        password: body.password,
      },
    });
  }
}
