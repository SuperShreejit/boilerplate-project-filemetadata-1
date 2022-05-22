require('dotenv').config()
const express = require('express');
const cors = require('cors');
const app = express();
const multer = require('multer')

const {
  getHome,
  postFile
} = require('./controller')
const upload = multer({ storage: multer.memoryStorage() })

app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended: false, limit: '10mb' }))
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', getHome);
app.post('/api/fileanalyse', upload.single('upfile'), postFile)

const start = async () => {
  try {
    const port = process.env.PORT || 3000;
    app.listen(port,() => console.log(`Your app is listening on port: ${port}`))
    } catch (error) {
      console.error(error.message)
    }
  };
start()
