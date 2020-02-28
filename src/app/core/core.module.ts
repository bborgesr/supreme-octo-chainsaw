import { NgModule, Optional, SkipSelf, ErrorHandler } from "@angular/core";
import { CommonModule } from "@angular/common";

import { LoggerService } from "./logger.service";
import { DataService } from "./data.service";
import { throwIfAlreadyLoaded } from "./module-import-guard";
import { BookTrackerErrorHandlerService } from "./book-tracker-error-handler.service";

@NgModule({
  imports: [CommonModule],
  declarations: [],
  providers: [
    LoggerService,
    DataService,
    { provide: ErrorHandler, useClass: BookTrackerErrorHandlerService }
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, "CoreModule");
  }
}
