html2pdf.js vs jspdf vs pdf vs pdfjs dist vs pdfkit vs pdfmake
==============================================================

## Sommaire

- [Quick Intro](#quick-intro)
- [jspdf](#jspdf)


## Quick Intro

- `html2pdf.js`, Client-side HTML-to-PDF rendering using pure JS.It was authored by Erik Koopmans. It currently has around 2099 stars, 469 issues, 5 maintainers and forked by 1035 projects. [](https://ekoopmans.github.io/html2pdf.js/)
- `jspdf`, PDF Document creation from JavaScript. It currently has around 23358 stars, 3337 issues, 100 maintainers and forked by 4173 projects. [](https://www.npmjs.com/package/jspdf)
- `pdf`, create basic pdf files in the browser or nodejs, simple as cake.It was authored by Marak Squires. It currently has around 400 stars, 21 issues, 4 maintainers and forked by 43 projects. [](https://github.com/Marak/pdf.js#readme)
- `pdfjs-dist`, Generic build of Mozilla's PDFjs library.. It currently has around 621 stars, 15 issues, 5 maintainers and forked by 396 projects. [](http://mozilla.github.io/pdf.js/)
- `pdfkit`, A PDF generation library for Nodejs. It was authored by Devon Govett. It currently has around 7573 stars, 1313 issues, 75 maintainers and forked by 949 projects. [](http://pdfkit.org/)
- `pdfmake`, Client/server side PDF printing in pure JavaScript. It was authored by Bartek Pampuch. It currently has around 9756 stars, 2362 issues, 75 maintainers and forked by 1746 projects. [](http://pdfmake.org)

## jspdf

<script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.0/jspdf.umd.min.js"></script>

## euro-adacdemy + jspdf

- template\ResultManagement\Sondage\sondage2.html.twig

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/1.3.3/jspdf.debug.js"></script>
<script>
$(document).ready(function () {
    // graph download individuelle
    $('.downloadPdf').click(function(event) {
      var id = $(this).data('id');
      var title = $('#card'+id).data('title');
      var reportPageHeight = $('#card'+id).innerHeight();
      var reportPageWidth = $('#card'+id).innerWidth();

      var pdfCanvas = $('<canvas />').attr({
        id: "canvaspdf",
        width: reportPageWidth,
        height: reportPageHeight
      });
      
      var pdfctx = $(pdfCanvas)[0].getContext('2d');
      var canvasHeight = $('#graphique'+id).innerHeight();
      var canvasWidth = $('#graphique'+id).innerWidth();
        
      pdfctx.drawImage($('#graphique'+id)[0], 0, 0, canvasWidth, canvasHeight);
        
      var pdf = new jsPDF('landscape');
      pdf.setFontSize(12);
      pdf.text(title, 35, 25);
      pdf.addImage($(pdfCanvas)[0], 'PNG', 15, 40);
      pdf.save("sondage"+id+".pdf");
    }); 

    // graph download ensemble
    $('#downloadPdf').click(function(event) {
        var pdf = new jsPDF('landscape');
        var length = $(".sondageGraphique").length;
        $(".sondageGraphique").each(function(index) {  
              var id = $(this).data('id');
              var title = $(this).data('title');
              var reportPageHeight = $(this).innerHeight();
              var reportPageWidth = $(this).innerWidth();

              var pdfCanvas = $('<canvas />').attr({
                id: 'canvaspdf'+id,
                width: reportPageWidth,
                height: reportPageHeight
              });
              
              var pdfctx = $(pdfCanvas)[0].getContext('2d');
              var canvasHeight = $('#graphique'+id).innerHeight();
              var canvasWidth = $('#graphique'+id).innerWidth();
                
              pdfctx.drawImage($('#graphique'+id)[0], 0, 0, canvasWidth, canvasHeight);
              pdf.setFontSize(12);
              pdf.text(title, 35, 25);
              pdf.addImage($(pdfCanvas)[0], 'PNG', 15, 40);                  
              if (index !== (length - 1)) {
                pdf.addPage();
              }
        }); 
        pdf.save('sondage.pdf');   
    });
})
</script>
```

- class="downloadPdf" 
- class="sondageGraphique"
- id="downloadPdf" 
- id="cardX" 
- id="graphiqueX"

## jsPDF Usage

```js
var pdf = new jsPDF('landscape');
pdf.setFontSize(12);
pdf.text(title, 35, 25);

var pdfCanvas = $('<canvas />').attr({
	id: 'canvaspdf'+id,
	width: reportPageWidth,
	height: reportPageHeight
});
var pdfctx = $(pdfCanvas)[0].getContext('2d');
var canvasHeight = $('#graphique'+id).innerHeight();
var canvasWidth = $('#graphique'+id).innerWidth();

pdfctx.drawImage($('#graphique'+id)[0], 0, 0, canvasWidth, canvasHeight);
pdf.addImage($(pdfCanvas)[0], 'PNG', 15, 40);     
pdf.addPage();
pdf.save('sondage.pdf');  
```

## Resource

- https://www.libtrends.info/npm-compare/html2pdf.js-vs-jspdf-vs-pdf-vs-pdfjs-dist-vs-pdfkit-vs-pdfmake
- https://stackoverflow.com/questions/18191893/generate-pdf-from-html-in-div-using-javascript
- https://codepen.io/amkid/pen/qKYwXo
