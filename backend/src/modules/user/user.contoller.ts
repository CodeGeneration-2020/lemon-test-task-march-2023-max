import { Controller, Body, Post } from '@nestjs/common';
import { SubmitScoreDTO } from './dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('submit')
  async submitScore(@Body() body: SubmitScoreDTO) {
    return this.userService.submitScore(body);
  }
}
