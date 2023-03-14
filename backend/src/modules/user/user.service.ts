import { Injectable } from '@nestjs/common';
import { User } from '../../entities/user.entity';
import { SubmitScoreDTO } from './dto';

@Injectable()
export class UserService {
  async submitScore(body: SubmitScoreDTO) {
    const user = await User.findOne({ where: { username: body.username } });

    if (user && body.result) {
      user.score += 5;
      user.save();
      return user;
    } else if (user) {
      return user;
    }

    const newUser = new User();
    newUser.username = body.username;
    newUser.score = body.result ? 5 : 0;
    newUser.save();
    return newUser;
  }
}
