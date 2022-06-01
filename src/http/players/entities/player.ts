import {
  IsString,
  IsNotEmpty,
  IsOptional,
  IsEmail,
  IsPhoneNumber,
  IsUUID,
} from 'class-validator';

export class Player {
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  @IsUUID()
  id?: string;
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  name?: string;
  @IsString()
  @IsNotEmpty()
  @IsEmail()
  email: string;
  @IsString()
  @IsNotEmpty()
  @IsPhoneNumber('BR')
  phoneNumber: string;
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  ranking?: string;
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  rankingPosition?: string;
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  avatar?: string;
}
