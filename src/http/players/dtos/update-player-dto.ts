import { IsString, IsOptional, IsEmail, IsPhoneNumber } from 'class-validator';
export class UpdatePlayerDTO {
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsString()
  @IsEmail()
  email?: string;

  @IsOptional()
  @IsString()
  @IsPhoneNumber('BR')
  phoneNumber?: string;

  @IsOptional()
  @IsString()
  ranking?: string;

  @IsOptional()
  @IsString()
  rankingPosition?: string;

  @IsOptional()
  @IsString()
  avatar?: string;
}
