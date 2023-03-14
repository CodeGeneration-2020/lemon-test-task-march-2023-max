import React, { useState, ChangeEvent, FC } from 'react';
import { Button } from '../button';
import { Input } from '../input';
import { GameController } from '../../controllers/game.controller';
import { Styled } from './submit-result.styled';

interface ISubmitResultProps {
  isWin: boolean,
  gameController: GameController,
  resetGame: () => void,
}

export const SubmitResult: FC<ISubmitResultProps> = ({ isWin, gameController, resetGame }) => {
  const [username, setUsername] = useState<string>('');

  const usernameOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  }

  const onSubmit = async () => {
    gameController.submitResult(username, isWin);
    resetGame();
  }

  return (
    <Styled.Wrapper>
      <Styled.ResultTitle isWin={isWin}>{isWin ? 'You won!' : 'You lose'}</Styled.ResultTitle>
      <div>Enter your nickname:</div>
      <Input value={username} onChange={usernameOnChange} />
      <Button onClick={onSubmit}>Submit</Button>
    </Styled.Wrapper>
  );
};
