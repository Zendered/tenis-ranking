import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString } from 'class-validator';

export class FindOnePlayerDTO {
  @ApiProperty()
  @IsString()
  @IsEmail()
  email: string;
}
