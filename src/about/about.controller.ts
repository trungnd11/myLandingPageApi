import { Controller, Get, Put, Body } from "@nestjs/common";
import { About } from "./about.entity";
import { AboutService } from "./about.service";
import { UpdateAboutDto } from "./dto/update-about.dto";

@Controller("api/about")
export class AboutController {
  constructor(private readonly svc: AboutService) {}

  @Get()
  get(): Promise<About> {
    return this.svc.getAbout();
  }

  @Put()
  update(@Body() dto: UpdateAboutDto): Promise<About> {
    return this.svc.updateAbout(dto);
  }
}
