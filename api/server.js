const express = require("express");
const session = require('express-session');
const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }))
const bcrypt = require('bcrypt')
const { Client } = require('pg')

const client = new Client({
  user: 'postgres',
  host: 'localhost',
  password: 'vote',
  database: 'Otakuweb'
})

client.connect()

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false, maxAge:8*60*60*1000,httpOnly: false} //8hours
}))





//Route inscription utilisateur
app.post('/register', async (req, res) => {
  const user = req.body
  const sql = "SELECT COUNT(*) FROM users WHERE username=$1"
  const result = await client.query({
    text: sql,
    values: [user.username]
  })
  if(user.username == "" && user.pswd ==""){
    res.status(400).json({ message: 'Empty fields' })
    return
  }
  //console.log('sql.rows',result.rows[0].count)
  if (result.rows[0].count >= 1) {
    res.status(400).json({ message: 'This user already exists' })
    return
  }
  else {
    const hash = await bcrypt.hash(user.pswd, 10)
    const sql = "INSERT INTO users (username, password) VALUES ($1, $2)"
    const result = await client.query({
      text: sql,
      values: [user.username, hash]
    })
    res.json({ message: 'Bienvenue' })
    console.log("Welcome")

  }
})

//Route connexion utilisateur

app.post("/login", async (req, res) => {
  const user = req.body
  if (user.username === '' || user.pswd === '') {
    res.status(400).json({ message: 'Empty fields' })
    return
  }
  
  const result = await client.query({
    text: 'SELECT COUNT(*) from users WHERE username=$1',
    values: [user.username]
  })
  if (result.rows[0].count == 1) {
    const result = await client.query({
      text: 'SELECT * from users WHERE username=$1',
      values: [user.username]
    })
    const mdpHasheBDD = result.rows[0].password
    if (await bcrypt.compare(user.pswd, mdpHasheBDD)) {
      if (req.session.userId) {
        res.status(401).json({ message: 'User already connected' })
      }
      else {
        req.session.userId = result.rows[0].id
        //console.log(req.session)
        res.json({
          id: req.session.userId,
          username: result.rows[0].username
        })
        console.log("Authentification réussie")
      }
    }
    else {
      res.status(401).json({ message: 'Mot de passe inconu' })
    }

  }
  else {
    res.status(401).json({ message: 'This user don t exist' })

  }
})

app.get('/library', async(req,res) => {
  const result = await client.query({
    text: 'SELECT * from library WHERE iduser=$1',
    values: [req.session.userId]
  })
  res.json(result.rows)
})

app.post('/addlibrary', async (req, res) => {
  const manga = req.body
  if (manga.title === '' || manga.coverImage === '') {
    res.status(400).json({ message: 'bad request' })
    return
  }
  
  const result = await client.query({
    text: 'SELECT COUNT(*) from library WHERE iduser=$1 and manga_name=$2',
    values: [req.session.userId,manga.title]
  })
  if(result.rows[0].count==0){
    const result = await client.query({
      text: 'INSERT INTO library (iduser,manga_name,synopsis,coverimage,iswatch) VALUES ($1,$2,$3,$4,$5)',
      values: [req.session.userId,manga.title,manga.synopsis,manga.coverImage,false]
    })
    console.log("manga ajouté")

  }
  else{
    res.status(401).json("You have already this manga in your mangatheque")
    return
  }
})

app.delete('/deletemanga', async(req,res) => {
  const manga = req.body
  if (manga.manga_name === '' || manga.coverImage === '') {
    res.status(400).json({ message: 'bad request' })
    return
  }
  const result = await client.query({
    text: 'DELETE FROM library WHERE iduser = $1 and manga_name = $2',
    values: [manga.iduser,manga.manga_name]
  })
  console.log("Manga is deleted of the library")
  res.status(200).json("Manga is deleted of the library")
})

app.get('/logout', async(req,res) => {
  req.session.destroy()
  console.log("disconnected")
  res.json("Disconnected")
})


const PORT = process.env.PORT || 8080;
app.listen(PORT, console.log(`Server started on port ${PORT}`));