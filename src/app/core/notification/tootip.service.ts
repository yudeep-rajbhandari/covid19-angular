import { Injectable } from "@angular/core";
import * as jQuery from 'jquery';
import 'bootstrap-notify';
let $: any = jQuery;

@Injectable()
export class TooltipService {
  success(message: string) {
    $.notify(
      {
        message: message
      },
      {
        type: "success",
        z_index: 8000,
      },

    );
  }

  error(message: string) {
    $.notify(
      {
        message: message
      },
      {
        type: "danger",
        z_index: 8000,
      }
    );
  }
}
