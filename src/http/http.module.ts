import { Module } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma/prisma.service';
import { PlayersController } from './players/controllers/players.controller';
import { PlayersService } from './players/services/players.service';

@Module({
  imports: [],
  controllers: [PlayersController],
  providers: [PrismaService, PlayersService],
})
export class HttpModule {}
