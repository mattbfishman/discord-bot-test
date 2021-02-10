const sqlite3 = require('sqlite3').verbose();
var db;

function init(){
    db = new sqlite3.Database('./db/burn.db', sqlite3.OPEN_READWRITE, (err) => {
        if (err) {
            console.error(err.message);
        }
        console.log('Connected to the burn database.');
        db.serialize(() => {
            db.prepare(`CREATE TABLE IF NOT EXISTS burns (name)`).run().finalize();
        });
    });
    
};
  
function insert(value){
    db.run(`INSERT INTO burns(name) VALUES(?)`, [value], function(err) {
    if (err) {
        return console.log(err.message);
    }
    // get the last insert id
    console.log(`A row has been inserted with rowid ${this.lastID}`);
    });
}


function getAllRows(){
    let sql = `SELECT DISTINCT Name name FROM burns ORDER BY name`;
    return new Promise(resolve => {
        db.all(sql, [], (err, rows) => {
            if (err) {
                console.log(err);
                resolve([]);
            }
            resolve(rows);
        });
    });
}


module.exports = {
    getAllRows  : getAllRows,
    initDB      : init,
    insertDB    : insert
}
  