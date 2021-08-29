import {Module} from "@tsed/di";
import {HealthController} from "./controllers/HealthController";

@Module({
  mount: {
    "/": [
      HealthController
    ]
  }
})
export class HealthModule {}