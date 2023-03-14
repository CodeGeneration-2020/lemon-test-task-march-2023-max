import { Entity } from 'typeorm';
import { IsNumber } from 'class-validator';
import { ApiColumn } from '../shared/decorators';
import { EnhancedBaseEntity } from './enhanced-base.entity';

@Entity({ name: 'users' })
export class User extends EnhancedBaseEntity {
  @ApiColumn('Username', { unique: true })
  username: string;

  @ApiColumn('Score', { default: 0 })
  @IsNumber()
  score: number;
}
