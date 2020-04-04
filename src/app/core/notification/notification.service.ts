import { Injectable } from '@angular/core';
import * as jQuery from 'jquery';
import 'bootstrap-notify';
const $: any = jQuery;


@Injectable()
export class NotificationService {
  success(message: string) {
    $.notify(
      {
        message
      },
      {
        type: 'success',
        z_index: 8000,
      },

    );
  }

  error(message: string) {
    $.notify(
      {
        message
      },
      {
        type: 'danger',
        z_index: 8000,
      }
    );
  }
  success1(message: string, title: string) {
    $.notify({
      title: title+' \n',
      message: '                                          '+message
    }, {
      type: 'pastel-danger',
      delay: 5000,
      template: '<div data-notify="container" class="col-xs-11 col-sm-3 alert alert-{0}" role="alert" style="background-color: rgb(255, 255, 238);\n' +
        '\tborder-width: 0px;\n' +
        '\tborder-left-color: rgb(255, 179, 40);\n' +
        '\tborder-radius: 0px;\n' +
        '\tbox-shadow: 0px 0px 5px rgba(51, 51, 51, 0.3);\n' +
        '\tfont-family: \'Old Standard TT\', serif;\n' +
        '\tletter-spacing: 1px;">' +
        '<span data-notify="title" style="color: #5DADE2">{1}</span>' +
        '<span data-notify="message">{2}</span>' +
        '</div>'
    });
  }

}
