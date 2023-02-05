dataTable in symfony project
===

- www.similartech.com/compare/datatables-vs-jquery

## dataTable constructor
  + $('#example').dataTable(); // 1.9.x / 1.10.x versions
  + *dataTable* is the oldschool dataTables constructur, which returns a jQuery object.
  + *dataTable* is supported by all *1.9.x / 1.10.x versions*. This jQuery object is enriched with a set of API methods in hungarian notation format, such as *fnFilter*, *fnDeleteRow* and so on. See a complete list of API methods [here](https://www.datatables.net/reference/api/).
  + Examples: 
    + table.fnDeleteRow(0); 
    + table.fnAddData(['E', 'F']);

## DataTable constructor
  + var table = $(&lt;selector&gt;).DataTable() // 1.10.x
  + The *DataTable* constructor was introduced in *1.10.x*, and returns a huge API object with full read/write access to pages, rows, cells and more, see [manual](https://www.datatables.net/reference/api/).
  + Examples:
    + table.row(0).remove();
    + table.row.add(['E', 'F']).draw();
- Combining dataTable and DataTable
  + If you maintain old code, or for some reason need to use the oldschool dataTable constructor, but still needs to use the new API, the jQuery object is extended (from 1.10.0) with a .api() method that returns the new API
- Examples:
  + var table = $('#example').dataTable();
  + table.api().row(0).remove();
  + table.api().row.add(['E', 'F']).draw();
- https://stackoverflow.com/questions/25207147/datatable-vs-datatable-why-is-there-a-difference-and-how-do-i-make-them-w
- Why is so many official examples using dataTable()?
  -  you do not need to use the DataTable constructor. If you dont use the new API

## ah-symfony (rien de spécial, nothing special)

https://github.com/Alpha-Hydro/ah-symfony

- package.json
  + "datatables.net": "^1.10.19",
  + "datatables.net-bs4": "^1.10.19"
- assets\js\categories.datatable.js
  + datatableApi = $("#datatable").DataTable({
        "ajax": {
      "url": ajaxUrl + "all",
      "dataSrc": ""
    },

## bootstrap-simple-admin-template (rien de spécial, nothing special)

- airdatepicker
- bootstrap4
- chartsjs
- DataTables
  + DataTables-1.10.18
  + $('#dataTables-example').DataTable({
      responsive: true,
      pageLength: 20,
      lengthChange: false,
      searching: true,
      ordering: true
  });


## sekoliko (rien de spécial, nothing special)

School Management Web Application OPENSOURCE

- package.json
  + "datatables": "^1.10.13",

## Symfonator (rien de spécial, nothing special)

Bootstrap 4 admin template!

- package.json
  + "datatables": "^1.10.13",

## personal-management-system (mon projet préféré, my favorite project)

Your web application for managing personal data.  codes structure sont bizare

https://github.com/Volmarg/personal-management-system

- package.json
  + "datatables": "^1.10.13",
    "datatables.net-select": "^1.3.1",

## euro academy lms

use DataTable en statique

datatables.net/1.10.18
datatables.net/colreorder/1.5.0
datatables.net/responsive/2.2.2

```javascript
  $('#filtreForm th').each( function () {
      var title = $(this).text();
      $(this).html( '<input type="text" class="form-control" placeholder="{{"global.table.search"|trans}} '+title+'" />' );
  } );

  var table = $('#tablefiltre').DataTable({
      colReorder: true,
      responsive: false, 
      searching: false,
      paging: false,
      language: {
          decimal:        "",
          emptyTable:     "-",
          info: "[_START_/_END_]  <b>{{"global.table.total"|trans}} : </b>_TOTAL_",
          infoEmpty:      "0/0   [0]",
          infoFiltered:   "({{"global.table.filteredForm"|trans}} _MAX_ {{"global.table.entries"|trans}})",
          infoPostFix:    "",
          thousands:      " ",
          lengthMenu:     "<b>{{"global.table.Entries"|trans}}</b> _MENU_",
          loadingRecords: "{{"global.table.loadingRecords"|trans}}...",
          processing:     "{{"global.table.processing"|trans}}...",
          search:         "<b>{{"global.table.search"|trans}}</b>:",
          zeroRecords:    "{{"global.table.zeroRecords"|trans}}",
          paginate: {next: ">>", previous: "<<"},
      },
  });
      
  table.columns().eq( 0 ).each( function ( colIdx ) {
    $('input', $('#filtreForm th')[colIdx] ).on( 'keyup change', function () {
        table.column( colIdx )
            .search( this.value )
            .draw();
    });
  });

  $('.table .thead-dark .tablesorter-filter-row input').addClass('form-control');
```

## iprad medica-source

jquery.dataTables.min.js: 1.9.4
datatables/TableTools/js/TableTools.min.js
datatables/FixedColumns/FixedColumns.js
datatables/dataTables.bootstrap.js
datatables/jquery.dataTables.columnFilter.js

examples:

```javascript
    if( $.fn.dataTable ) {
      
      $( '.mail .mail-pages table' ).dataTable({
        "sDom": "t<'dt_footer'<'row-fluid'<'span6'i><'span6'p>>>", 
        "aoColumnDefs": [ { "bSortable": false, "aTargets": [ 0 ] } ], 
        "aaSorting": []
      });
    }
```

```javascript
  var table = $('#table_contact').dataTable({
                  "bServerSide": true,
                  "bDeferRender" : true,
                  "sAjaxSource": "{{ path('umdsaddressbook_contact_search_ajax') }}",
                  "aaSorting": [[1,'asc']],
                  "fnInitComplete": function(oSettings, json) {
                      //$('#loader_tab').html("");
                  }
  });
```

```javascript
  var table = $('#table_da').dataTable({       
                        "bServerSide": true,
                        "bDeferRender" : true,
                        "sAjaxSource": "{{ path('home_getAjaxSource') }}",
                        "aaSorting": [[0,'desc']],
                        "fnInitComplete": function(oSettings, json) {
                            $('#loader_tab').html("");
                        }
                }); 
    table.fnFilter("Ouverte|En attente", 5, true);
```

## medflixs

DataTables: 1.10.5

Examples:

```javascript
    $('#entities_list').dataTable({
        "sPaginationType": "full_numbers",
        "lengthMenu": [[50, 100, 150, -1], [50, 100, 150, "All"]]
    });
```

## partening

DataTables: 1.9.4
DT_bootstrap.js

Examples:

```javascript
    $('#mytable').dataTable({
        "aaSorting": [[ 4, "desc" ]]
    });

    $('#editable-sample').dataTable({
        "iDisplayLength" : 20,
        "aLengthMenu": [
            [20, 25, 30, -1],
            [20, 25, 30, "All"] // change per page values here
        ]
    });      
    var oTable = $('#hidden-table-info').dataTable( {
        "aoColumnDefs": [
            { "bSortable": false, "aTargets": [ 0 ] }
        ],
        "aaSorting": [[1, 'asc']],
        "iDisplayLength" : 20,
        "aLengthMenu": [
            [20, 25, 30, -1],
            [20, 25, 30, "All"] // change per page values here
        ]
    });    
```

## examples

https://datatables.net/examples/ajax/simple.html