import { ApiProperty } from '@nestjs/swagger';

export class SwaggerNotFound {
  @ApiProperty()
  statusCode: number;

  @ApiProperty()
  message: string[];

  @ApiProperty()
  error: string;
}
