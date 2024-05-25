import { Router } from 'express';
import multer from 'multer';
import { MyFilereader } from '../singletons/FileReader';

const upload = multer();

const router = Router();

router.get('/', (req, res) => {
  res.render('index');
});

router.post('/upload', upload.single('file'), async (req, res) => {
  if (!req.file) {
    return res.status(400).send('No file uploaded.');
  }

  const myFileReader = MyFilereader.getInstance();
  const contentToAnalyze = req.file.buffer.toString('utf8');

  const fileContent = myFileReader.getTextFromData(contentToAnalyze);
  const totalWords = myFileReader.getTotalWords(contentToAnalyze);
  const totalCharacters = myFileReader.getTotalCharacters(contentToAnalyze);
  const totalSpaces = myFileReader.getTotalSpaces(contentToAnalyze);
  const repeatedWords = myFileReader.getRepeatedWords(contentToAnalyze);

  res.render('results', { fileContent, totalWords, totalCharacters, totalSpaces, repeatedWords });
});

router.use((req, res) => {
  res.status(404).send('Not Found');
});

export default router;
