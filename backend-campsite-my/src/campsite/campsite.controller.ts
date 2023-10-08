import { Controller, Get } from "@nestjs/common";
import { CampsiteService } from "./campsite.service";
import CampsiteDTO from "./dto/CampsiteDTO.interface";

@Controller("campsite")
export class CampsiteController {
  constructor(private readonly campsiteSerice: CampsiteService) {}

  @Get()
  async getAllData(): Promise<CampsiteDTO> {
    return await this.campsiteSerice.getAllData();
  }
}
