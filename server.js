const setupServer = require('./setup-server');
const app = setupServer();

const Card = require('./models/Card');

app.get('/cards', (req, res) => {
  Card.find()
    .then(cards => res.json(cards))
    .catch(err => res.json(err));
});

//then. --> erstellter Post wird nach erfolgreichem Erstellen zurück gegeben
// console.log mittels {} an das than binden, da promise asynchrone --> würde sondt immer die console.log bekommen,
//auch wenn der Prozess nicht erfolgreich war
app.post('/cards', (req, res) => {
  Card.create(req.body)
    .then(card => {
      res.status(201).json(card);
      console.log('Successful User Update');
    })
    .catch(err => res.status(500).json(err));
});

app.patch('/cards/:id', (req, res) => {
  const { id } = req.params;
  Card.findByIdAndUpdate(id, req.body, { new: true })
    .then(data => res.json(data))
    .catch(err => res.json({ errors: [err] }));
});
