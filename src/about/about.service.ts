import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

import { About } from "./about.entity";
import { UpdateAboutDto } from "./dto/update-about.dto";

@Injectable()
export class AboutService {
  constructor(
    @InjectRepository(About)
    private readonly repo: Repository<About>,
  ) {}

  async getAbout(): Promise<About> {
    const p = await this.repo
      .createQueryBuilder("about")
      .orderBy("about.createdAt", "DESC")
      .getOne();

    if (!p) throw new NotFoundException("About not found");
    return p;
  }

  async updateAbout(dto: UpdateAboutDto): Promise<About> {
    let p = await this.repo.createQueryBuilder("about").getOne();

    if (!p) p = this.repo.create();
    Object.assign(p, dto);
    return this.repo.save(p);
  }
}
