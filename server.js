const express = require('express');

import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from './src/components/App';


const app = express();

app.get('/', (request, response) => {
    const html = ReactDOMServer.renderToString(<App />);
    response.send(html)
});

const port = 8080;
app.listen(port, () => {
    console.log("Server running at port " +port);
})