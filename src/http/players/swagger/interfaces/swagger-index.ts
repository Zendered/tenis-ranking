import { ApiProperty } from '@nestjs/swagger';

export class SwaggerIndex {
  @ApiProperty()
  id: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  phoneNumber: string;

  @ApiProperty()
  ranking: string;

  @ApiProperty()
  rankingPosition: string;

  @ApiProperty()
  avatar: string;
}
