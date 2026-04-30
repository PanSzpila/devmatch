import { IsString, Length, MaxLength } from 'class-validator';

export class CreateProfileDto {
  @IsString()
  @Length(3, 100)
  name: string;

  @IsString()
  @MaxLength(256)
  description: string;
}
