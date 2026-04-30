import { IsString, Length, MaxLength } from 'class-validator';

export class UpdateProfileDto {
  @IsString()
  @Length(3, 100)
  name: string;

  @IsString()
  @MaxLength(256)
  description: string;
}
