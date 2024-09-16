import { IsNotEmpty } from 'class-validator';

export class SignInAuthDto {
  @IsNotEmpty()
  username: string;

  @IsNotEmpty()
  password: string;

  name: string;
}
