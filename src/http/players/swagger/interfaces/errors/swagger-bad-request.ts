import { ApiProperty } from '@nestjs/swagger';

export class SwaggerBadRequest {
  @ApiProperty()
  statusCode: number;

  @ApiProperty()
  message: string[];

  @ApiProperty()
  error: string;
}
