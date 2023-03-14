import axios from "axios";
import { IStartGameResponse } from "../types/game.types";

export class GameService {
  async startGame(): Promise<IStartGameResponse> {
    const { data } = await axios.get<IStartGameResponse>(`${process.env['API_URL']}/artist/start`);
    return data;
  }

  async submitResult(username: string, isWin: boolean) {
    await axios.post(`${process.env['API_URL']}/user/submit`, {
      username,
      result: isWin,
    });
  }
}
