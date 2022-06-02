import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from 'src/database/prisma/prisma.service';
import { CreatePlayerDTO } from '../dtos/create-player-dto';
import { UpdatePlayerDTO } from '../dtos/update-player-dto';

@Injectable()
export class PlayersService {
  constructor(private prisma: PrismaService) {}

  async addPlayer(userData: CreatePlayerDTO) {
    const exists = await this.prisma.player.findUnique({
      where: { ...userData },
    });

    if (exists) {
      throw new BadRequestException('Player already exists! Please try again!');
    }

    const player = this.prisma.player.create({
      data: {
        ...userData,
      },
    });

    return player;
  }
  async findAllPlayers() {
    const player = await this.prisma.player.findMany();

    if (!player) {
      throw new BadRequestException('Something went wrong, Please try again!');
    }

    return player;
  }

  async findOnePlayers({ email }: { email: string }) {
    const player = await this.prisma.player.findUnique({
      where: { email },
      select: {
        name: true,
        email: true,
        ranking: true,
        rankingPosition: true,
      },
    });

    if (!player) {
      throw new NotFoundException('Player not found, Please try again!');
    }

    return player;
  }

  async updatePlayer(userData: UpdatePlayerDTO) {
    const exists = await this.prisma.player.findUnique({
      where: { email: userData.email },
    });

    if (!exists) {
      throw new BadRequestException('Player not found, Please try again!');
    }

    const updatedPlayer = await this.prisma.player.update({
      where: { id: exists.id },
      data: { ...userData },
    });

    return updatedPlayer;
  }

  async deletePlayer({ email }: { email: string }) {
    const exists = await this.prisma.player.findUnique({
      where: { email },
    });

    if (!exists) {
      throw new NotFoundException('Player not found, Please try again!');
    }

    return this.prisma.player.delete({
      where: { id: exists.id },
    });
  }
}
