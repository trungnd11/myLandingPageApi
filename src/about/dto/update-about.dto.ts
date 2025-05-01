import { IsEmail, IsInt, IsString } from "class-validator";
import { PartialType } from "@nestjs/swagger";

export class AboutDto {
  @IsString() name: string;
  @IsEmail() email: string;
  @IsInt() age: number;
  @IsString() from: string;
  @IsString() description: string;
  @IsString() avatarUrl?: string;
}

export class UpdateAboutDto extends PartialType(AboutDto) {}
