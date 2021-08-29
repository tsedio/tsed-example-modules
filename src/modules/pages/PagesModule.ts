import {Module} from "@tsed/di";
import {IndexCtrl} from "./controllers/IndexController";

@Module({
  mount: {
    "/": [
      IndexCtrl
    ]
  }
})
export class PagesModule {}