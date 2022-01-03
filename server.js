const express = require('express')
const server = express();
 
server.all('/', (req, res) => {
    res.send('Bot 24/7 listo');
});
 
module.exports = () => {
    server.listen(3000, () => {
        console.log('24/7 Listo para trabajar');
    });
    return true;
}
