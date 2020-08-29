const express = require('express');
const app = express();
const port = 3003;
const model = require('../db/model.js');
const parser = require('body-parser')
const path = require('path');

app.use('/rooms/:roomId', express.static(path.join(__dirname, '../client/dist')));
app.use(parser.urlencoded({extended: false}));
app.use(express.json());

app.listen(port, () => console.log(`Listening At Port ${port}`))

app.get('/reviews/users', (req, res) => {
  model.getUsers((err, data) => {
    if (err) {
      res.status(400)
    } else {
      res.status(200).send(data);
    }
  });
});


app.get("/reviews/houses", (req, res) => {
  model.getHouses((err, data) => {
    if (err) {
      res.status(400);
    } else {
      res.status(200).send(data);
    }
  });
});

app.get("/reviews", (req, res) => {
  model.getReviews((err, data) => {
    if (err) {
      res.status(400);
    } else {
      res.status(200).send(data);
    }
  });
});

app.get("/reviews/comments", (req, res) => {
  model.getComments((err, data) => {
    if (err) {
      res.status(400);
    } else {
      res.status(200).send(data);
    }
  });
});


app.get("/houses/:id", (req, res) => {
  const id = req.params.id
  console.log('id', id)
  model.getAll(id, (err, data) => {
    if (err) {
      res.status(400);
    } else {
      res.status(200).send(data);
    }
  });
});

app.post("/reviews/comments", function (req, res) {
  console.log(req.body)
  model.addComments(req.body, (err, results) => {
    if (err) {
      res.status(401);
    } else {
      res.send(results)
    }
  })
//   res.send('POST request to homepage')
})

app.put('/reviews/comments', function (req, res) {
  model.updateComments(req.body, (err, results) => {
    if(err) {
      console.log('errroooorrrr', err)
    } else {
      res.send(results)
    }
  })
})

app.delete('/reviews/comments/:id', function (req, res) {
  const id = req.params.id
  model.deleteComments(id, (err, results) => {
    if(err) {
      console.log('errroooorrrr', err)
    } else {
      res.send('DELETE request to homepage')
    }
  })
})


