import { IsEmail, IsInt, IsOptional, IsString } from "class-validator";

export class UpdateAboutDto {
  @IsString() name: string;
  @IsEmail() email: string;
  @IsInt() age: number;
  @IsString() from: string;
  @IsString() description: string;
  @IsOptional() @IsString() avatarUrl?: string;
}
