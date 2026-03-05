
import http from 'http';
import fs from 'fs';


const httpServer = http.createServer();

httpServer.on('request', (req, res) => {

    if (req.url === '/') {
        console.log(`Received request: ${req.method} ${req.url}`);
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Hello, World!');
    }
    else if (req.url === '/node.pdf') {

        const filePath = './ppt/nodejs.pdf';

        //----------------------------------------------------------------
        //#1 blocking call to read the PDF file synchronously
        //----------------------------------------------------------------

        //const pdfFile = fs.readFileSync(filePath);
        //res.writeHead(200, { 'Content-Type': 'application/pdf' });
        //res.end(pdfFile);

        //----------------------------------------------------------------
        //#2 non-blocking call to read the PDF file asynchronously
        //----------------------------------------------------------------
        // fs.readFile(filePath, (err, pdfFile) => {
        //     if (err) {
        //         console.error('Error reading PDF file:', err);
        //         res.writeHead(500, { 'Content-Type': 'text/plain' });
        //         res.end('Internal Server Error');
        //     } else {
        //         res.writeHead(200, { 'Content-Type': 'application/pdf' });
        //         res.end(pdfFile);
        //     }
        // });

        //---------------------------------------------------------------------
        //#3 streaming the PDF file to the client
        //---------------------------------------------------------------------
        const readStream = fs.createReadStream(filePath);
        readStream.on('open', () => {
            res.writeHead(200, { 'Content-Type': 'application/pdf' });
            readStream.pipe(res);
        });
        readStream.on('error', (err) => {
            console.error('Error reading PDF file:', err);
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('Internal Server Error');
        });

    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 Not Found');
    }
});

httpServer.listen(3000, () => {
    console.log('HTTP server is listening on port 3000');
});