import { Test, TestingModule } from "@nestjs/testing";
import { CampsiteService } from "./campsite.service";

describe("CampsiteService", () => {
  let service: CampsiteService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CampsiteService],
    }).compile();

    service = module.get<CampsiteService>(CampsiteService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});
