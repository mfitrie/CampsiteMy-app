import { Module } from "@nestjs/common";
import { CampsiteService } from "./campsite.service";
import { CampsiteController } from "./campsite.controller";

@Module({
  providers: [CampsiteService],
  controllers: [CampsiteController],
})
export class CampsiteModule {}
