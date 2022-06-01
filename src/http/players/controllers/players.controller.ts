import { Body, Controller, Delete, Get, Patch, Post } from '@nestjs/common';
import { CreatePlayerDTO } from '../dtos/create-player-dto';
import { UpdatePlayerDTO } from '../dtos/update-player-dto';
import { PlayersService } from '../services/players.service';

@Controller('api/v1/players')
export class PlayersController {
  constructor(private readonly playersService: PlayersService) {}

  @Get()
  findAllPlayers() {
    return this.playersService.findAllPlayers();
  }

  @Get('find')
  findOnePlayers(@Body() email) {
    return this.playersService.findOnePlayers(email);
  }

  @Post()
  async createPlayer(@Body() playerData: CreatePlayerDTO) {
    return await this.playersService.addPlayer(playerData);
  }

  @Patch()
  updatePlayer(@Body() userData: UpdatePlayerDTO) {
    return this.playersService.updatePlayer(userData);
  }

  @Delete()
  deletePlayer(@Body() email) {
    return this.playersService.deletePlayer(email);
  }
}
