import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsString, IsOptional, IsEmail, IsPhoneNumber } from 'class-validator';
export class UpdatePlayerDTO {
  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  name?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  @IsEmail()
  email?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  @IsPhoneNumber('BR')
  phoneNumber?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  ranking?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  rankingPosition?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  avatar?: string;
}
