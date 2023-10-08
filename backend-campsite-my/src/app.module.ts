import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { CampsiteModule } from "./campsite/campsite.module";

@Module({
  imports: [CampsiteModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
