Themforest admin template
=========================

## Codebase v3.4 - Bootstrap 4 Admin Dashboard Template & Laravel 7 Starter Kit (ES6 with jQuery interesting !!!)

bootstrap": "^4.4.1, jquery": "^3.4.1, ES6 with jQuery interesting

Two techniques used == psmf projet == ResidenceCMS
- ES6 import
- $(document).ready(function) == $().ready(function) == $(function) == jQuery(() => { statements}); [当 DOM（文档对象模型） 已经加载，并且页面（包括图像）已经完全呈现时，会发生 ready 事件。]

Package.json

    "@fortawesome/fontawesome-free": "^5.12.1",
    "bootstrap": "^4.4.1",
    "bootstrap-colorpicker": "^3.2.0",
    "bootstrap-datepicker": "^1.9.0",
    "bootstrap-maxlength": "^1.6.0",
    "bootstrap-notify": "^3.1.3",
    "chart.js": "^2.9.3",
    "ckeditor": "^4.12.1",
    "cropperjs": "^1.5.6",
    "datatables.net": "^1.10.20",
    "datatables.net-bs4": "^1.10.20",
    "datatables.net-buttons": "^1.6.1",
    "datatables.net-buttons-bs4": "^1.6.1",
    "dropzone": "^5.7.0",
    "easy-pie-chart": "^2.1.7",
    "es6-promise": "^4.2.8",
    "flatpickr": "^4.6.3",
    "font-awesome": "^4.7.0",
    "fullcalendar": "^3.10.1",
    "gmaps": "^0.4.25",
    "highlightjs": "^9.16.2",
    "ion-rangeslider": "^2.3.1",
    "jquery": "^3.4.1",
    "jquery-bootstrap-wizard": "^1.4.2",
    "jquery-countdown": "^2.2.0",
    "jquery-countto": "^1.2.0",
    "jquery-scroll-lock": "^3.1.3",
    "jquery-slimscroll": "^1.3.8",
    "jquery-sparkline": "^2.4.0",
    "jquery-validation": "^1.19.1",
    "jquery.appear": "^1.0.1",
    "jquery.maskedinput": "^1.4.1",
    "js-cookie": "^2.2.1",
    "jvectormap-next": "^3.1.0",
    "magnific-popup": "^1.1.0",
    "moment": "^2.24.0",
    "nestable2": "^1.6.0",
    "popper.js": "^1.16.1",
    "pwstrength-bootstrap": "^3.0.5",
    "raty-js": "^2.9.0",
    "select2": "^4.0.13",
    "simplebar": "^5.1.0",
    "simplemde": "^1.11.2",
    "slick-carousel": "^1.8.1",
    "summernote": "0.8.12",
    "sweetalert2": "^9.10.0",
    "vide": "^0.5.1"

## Frest v2.1 - HTML & Laravel Bootstrap Admin Dashboard Template

Two techniques used:
- IIFE (Immediately Invoked Function Expression),（ 立即调用函数表达式）是一个在定义时就会立即执行的  JavaScript 函数。
- $(document).ready(function) == $().ready(function) == $(function) == jQuery(() => { statements}); [当 DOM（文档对象模型） 已经加载，并且页面（包括图像）已经完全呈现时，会发生 ready 事件。]

```js
(function (window, document, $) {
  'use strict';
})(window, document, jQuery)
```

js

- core (IIFE)
    + app-menu.js, app.js 
- scripts 
    + widgets.js, chart-apex.js, datatable.js, form-repeater.js ($(document).ready(function))
    + editor-quill.js, basic-inputs.js, form-tooltip-valid.js (IIFE)
    
## MaterialPro v4.7 - Material Design Bootstrap 4 Admin Template

package.json

        "@claviska/jquery-minicolors": "^2.2.6",
        "block-ui": "^2.70.1",
        "bootstrap": "^4.4.1",
        "bootstrap-colorpicker": "^3.1.1",
        "bootstrap-datepicker": "^1.8.0",
        "bootstrap-duallistbox": "^3.0.6",
        "bootstrap-material-datetimepicker": "^2.7.3",
        "bootstrap-switch": "^3.3.4",
        "bootstrap-table": "^1.12.2",
        "bootstrap-touchspin": "^4.2.5",
        "c3": "^0.7.11",
        "chart.js": "^2.7.2",
        "chartist": "^0.11.0",
        "chartist-plugin-tooltips": "^0.0.17",
        "ckeditor": "^4.11.3",
        "clockpicker": "0.0.7",
        "cropper": "^4.0.0",
        "d3": "^5.14.2",
        "datatables": "^1.10.13",
        "datatables.net-bs4": "^1.10.19",
        "daterangepicker": "^3.0.3",
        "dragula": "^3.7.2",
        "dropzone": "^5.5.1",
        "echarts": "^4.0.4",
        "flot": "^0.8.3",
        "footable": "^2.0.6",
        "fullcalendar": "^3.10.0",
        "gaugeJS": "^1.3.6",
        "gmaps": "^0.4.24",
        "inputmask": "^4.0.6",
        "jquery": "^3.3.1",
        "jquery-asColorPicker": "^0.4.4",
        "jquery-sessiontimeout": "^1.1.0",
        "jquery-sparkline": "^2.4.0",
        "jquery-steps": "^1.1.0",
        "jquery-validation": "^1.17.0",
        "jquery.flot.tooltip": "^0.9.0",
        "jquery.repeater": "^1.2.1",
        "jsgrid": "^1.5.3",
        "jvectormap": "^2.0.4",
        "magnific-popup": "^1.1.0",
        "masonry-layout": "^4.2.1",
        "moment": "^2.22.2",
        "morris.js": "^0.5.0",
        "natives": "^1.1.6",
        "nestable": "^0.2.0",
        "nouislider": "^13.1.4",
        "perfect-scrollbar": "^0.7.1",
        "pickadate": "^3.5.6",
        "popper.js": "^1.16.0",
        "quill": "^1.3.6",
        "raphael": "^2.2.7",
        "raty-js": "^2.9.0",
        "select2": "^4.0.6-rc.1",
        "summernote": "^0.8.11",
        "sweetalert2": "^8.8.0",
        "tablesaw": "^3.1.2",
        "tinymce": "^4.7.11",
        "toastr": "^2.1.4",
        "typeahead.js": "^0.11.1",
        "wnumb": "^1.1.0"