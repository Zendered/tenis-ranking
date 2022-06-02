import { OmitType } from '@nestjs/swagger';
import { SwaggerIndex } from './swagger-index';

export class SwaggerFindOnePlayer extends OmitType(SwaggerIndex, [
  'id',
  'phoneNumber',
  'avatar',
]) {}
