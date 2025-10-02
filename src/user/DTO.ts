import { IsEmail, IsOptional, IsPhoneNumber, IsString, IsStrongPassword } from "class-validator";

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

    @IsPhoneNumber()
    phone: string;
}

export class LoginDto{
    @IsEmail()
    email: string;

    @IsString()
    @IsStrongPassword()
    password: string;
}