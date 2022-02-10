
const { Pool } = require('pg');
const pool = new Pool({
    connectionString:'postgres://rhwvhgfz:Bm2Niizz1VJ81GhPDJtSSFBs4SXD-1um@motty.db.elephantsql.com/rhwvhgfz'
    
});

pool.query(`drop table teste;create table teste(id serial primary key, nome text, dataCriacao timestamp default now())`, (err, res) => {
  console.log(err)
  pool.end()
})

