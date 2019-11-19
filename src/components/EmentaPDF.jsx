import jsPDF from 'jspdf'
import html2pdf from 'html2canvas'


import './EmentaPDF.css'

// const pdf = new jsPDF()


export default () => {
  html2pdf(document.body).then(function(canvas) {
    document.body.appendChild(canvas);
  });
  // let doc = new jsPDF();  
  // doc.fromHTML(
  //   `

  //   `
  //   ,1,1)
  // doc.save("name.pdf")
}

        
