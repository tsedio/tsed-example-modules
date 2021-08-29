import {Controller, Get} from "@tsed/common";
import {object, Returns, string} from "@tsed/schema";

@Controller("/health")
export class HealthController {
  @Get("/")
  @Returns(200).Schema(object({status: string().required().example("OK")}))
  get() {
    return {
      status: "OK"
    };
  }
}