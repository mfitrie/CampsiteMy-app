import { Injectable } from "@nestjs/common";
import CampsiteDTO from "./dto/CampsiteDTO.interface";
import * as fs from "fs";
import { promisify } from "util";
import { join } from "path";

const readFileAsync = promisify(fs.readFile);

@Injectable()
export class CampsiteService {
  async getAllData(): Promise<CampsiteDTO | null> {
    try {
      const data = await readFileAsync(
        join(__dirname, "../../assets/senarai-campsite-malaysia.json"),
        "utf8"
      );

      return JSON.parse(data);
    } catch (error) {
      console.error(error);
      return null;
    }
  }
}
