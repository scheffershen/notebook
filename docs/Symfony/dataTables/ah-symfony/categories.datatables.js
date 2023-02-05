import * as feather from "feather-icons";

const $ = require("jquery");
require( "datatables.net" );
require("datatables.net-bs4");

let ajaxUrl = "/api/categories/";
let datatableApi;

$(function () {
	datatableApi = $("#datatable").DataTable({
		"ajax": {
			"url": ajaxUrl + "all",
			"dataSrc": ""
		},
		"dom": 'irt<"row my-3"<"col-6"l><"col-6"p>>',
		"orderCellsTop": true,
		"paging": true,
		"info": true,
		"columns": [
			{
				"data": "id"
			},
			{
				"data": "sorting"
			},
			{
				"data": "name",
				"render": function (data, type, row) {
					if (type === "display") {
						return "<a href=" + row.id + ">" + data + "</a>";
					}
					return data;
				}
			},
			{
				"data": "parent",
				"render": function (data, type, row) {
					if (type === "display" && data) {
						return "<a href=" + data.id + ">" + data.name + "</a>";
					}
					return data ? data.name : 'Каталог';
				}
			},
			{
				"data": "fullPath",
				"render": function (data, type, row) {
					if (type === "display") {
						return "<a href=/catalog/" + data + ">" + data + "</a>";
					}
					return data;
				}
			},
			{
				"data": "active",
				"render": function (data, type, row) {
					if (type === "display") {
						return data
							? "<button class='btn btn-sm btn-success'>"+feather.icons['check-circle'].toSvg({ 'width': 16, 'height': 16 })+"</button>"
							: "<button class='btn btn-sm btn-danger'>"+feather.icons['circle'].toSvg({ 'width': 16, 'height': 16 })+"</button>";
					}
					return data;
				}
			},
			{
				"data": "deleted",
				"render": function (data, type, row) {
					if (type === "display") {
						return data
							? "<button class='btn btn-sm btn-danger'>"+feather.icons['x-circle'].toSvg({ 'width': 16, 'height': 16 })+"</button>"
							: "<button class='btn btn-sm btn-success'>"+feather.icons['plus-circle'].toSvg({ 'width': 16, 'height': 16 })+"</button>";
					}
					return data;
				}
			},
		]
	});
	
	datatableApi.columns().every(function (index) {
		$('#datatable thead tr:eq(1) td:eq(' + index + ') input').on('keyup change', function () {
			datatableApi.column($(this).parent().index() + ':visible')
				.search(this.value)
				.draw();
		});
	});
	
	$('#datatable-search').on( 'keyup', function () {
		datatableApi.search( this.value ).draw();
	} );
});
