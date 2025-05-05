function printContent() {
    // Create a clone of the main content
    const printContent = document.querySelector('main').cloneNode(true);
    
    // Remove any elements we don't want to print
    const noPrintElements = printContent.querySelectorAll('.no-print');
    noPrintElements.forEach(el => el.remove());
    
    // Create a new window for printing
    const printWindow = window.open('', '_blank');
    
    // Add content and styles to the new window
    printWindow.document.write(`
        <html>
        <head>
            <title>Tư Vấn Mua Máy Lạnh - CleanAir</title>
            <link rel="stylesheet" href="../css/style.css">
            <link rel="stylesheet" href="../css/darkmode.css">
            <style>
                body { 
                    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                    padding: 20px;
                }
                .advice-section {
                    page-break-inside: avoid;
                    margin-bottom: 30px;
                }
                @media print {
                    .no-print { display: none; }
                }
            </style>
        </head>
        <body>
            <h1>Tư Vấn Mua Máy Lạnh - CleanAir</h1>
            ${printContent.innerHTML}
            <footer style="margin-top: 30px; text-align: center; font-size: 12px;">
                © ${new Date().getFullYear()} CleanAir - Được in từ cleanair.com.vn
            </footer>
        </body>
        </html>
    `);
    
    // Trigger print dialog
    printWindow.document.close();
    printWindow.focus();
    setTimeout(() => {
        printWindow.print();
    }, 500);
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Add print button to the page
    const addPrintButton = () => {
        if (document.querySelector('main')) {
            const printBtn = document.createElement('button');
            printBtn.id = 'printButton';
            printBtn.innerHTML = '<i class="fas fa-print"></i> In tư vấn';
            printBtn.className = 'print-button';
            printBtn.addEventListener('click', printContent);
            
            const main = document.querySelector('main');
            main.prepend(printBtn);
        }
    };
    
    addPrintButton();
});
