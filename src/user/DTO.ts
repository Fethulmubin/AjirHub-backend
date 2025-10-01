import { IsEmail, IsOptional, IsString, IsStrongPassword } from "class-validator";

export class CreateUserDto {
    @IsEmail()
    email: string;

    @IsString()
    @IsStrongPassword()
    password: string;

    @IsString()
    name: string;

    @IsOptional()
    @IsString()
    image?: string;
}

export class LoginDto{
    @IsEmail()
    email: string;

    @IsString()
    @IsStrongPassword()
    password: string;
}