import { Body, Controller, Delete, Get, Patch, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreatePlayerDTO } from '../dtos/create-player-dto';
import { DeletePlayerDTO } from '../dtos/delete-player-dto';
import { FindOnePlayerDTO } from '../dtos/find-one-player-dto';
import { UpdatePlayerDTO } from '../dtos/update-player-dto';
import { PlayersService } from '../services/players.service';
import { SwaggerFindOnePlayer } from '../swagger/interfaces/swagger-find-one-player';
import { SwaggerIndex } from '../swagger/interfaces/swagger-index';
import { SwaggerFindAllPlayers } from '../swagger/interfaces/swagger-find-all-players';
import { SwaggerNotFound } from '../swagger/interfaces/errors/swagger-not-found';
import { SwaggerBadRequest } from '../swagger/interfaces/errors/swagger-bad-request';

@Controller('api/v1/players')
@ApiTags('Tennis ranking')
export class PlayersController {
  constructor(private readonly playersService: PlayersService) {}

  @Get()
  @ApiOperation({ summary: 'Show all player registered' })
  @ApiResponse({
    status: 200,
    description: 'All player registered',
    type: SwaggerFindAllPlayers,
    isArray: true,
  })
  @ApiResponse({
    status: 400,
    description: 'Something went wrong, Please try again!',
    type: SwaggerBadRequest,
    isArray: true,
  })
  findAllPlayers() {
    return this.playersService.findAllPlayers();
  }

  @Get('find')
  @ApiOperation({ summary: 'Find a player by his email' })
  @ApiResponse({
    status: 200,
    description: 'Show player data',
    type: SwaggerFindOnePlayer,
  })
  @ApiResponse({
    status: 404,
    description: 'Player not found, Please try again!',
    type: SwaggerBadRequest,
    isArray: true,
  })
  findOnePlayers(@Body() email: FindOnePlayerDTO) {
    return this.playersService.findOnePlayers(email);
  }

  @Post()
  @ApiOperation({ summary: 'Register a player' })
  @ApiResponse({
    status: 201,
    description: 'Show the player created',
    type: SwaggerIndex,
  })
  @ApiResponse({
    status: 404,
    description: 'Player already exists! Please try again!',
    type: SwaggerNotFound,
    isArray: true,
  })
  async createPlayer(@Body() playerData: CreatePlayerDTO) {
    return await this.playersService.addPlayer(playerData);
  }

  @Patch()
  @ApiOperation({ summary: 'Change/Add player data' })
  @ApiResponse({
    status: 200,
    description: 'Player with new data',
    type: SwaggerIndex,
  })
  @ApiResponse({
    status: 400,
    description: 'Player not found, Please try again!',
    type: SwaggerBadRequest,
    isArray: true,
  })
  updatePlayer(@Body() userData: UpdatePlayerDTO) {
    return this.playersService.updatePlayer(userData);
  }

  @Delete()
  @ApiOperation({ summary: 'Delete a player by his email' })
  @ApiResponse({
    status: 200,
    description: 'The player deleted',
    type: SwaggerIndex,
  })
  @ApiResponse({
    status: 404,
    description: 'Player not found, Please try again!',
    type: SwaggerNotFound,
    isArray: true,
  })
  deletePlayer(@Body() email: DeletePlayerDTO) {
    return this.playersService.deletePlayer(email);
  }
}
