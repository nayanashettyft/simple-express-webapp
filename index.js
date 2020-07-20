const express = require("express");
const path = require("path");
const exphbs = require("express-handlebars");
const logger = require("./middleware/logger");
const members = require('./Members');
const metrics = require('next-metrics');

metrics.init({
  flushEvery: 5000
});

const app = express();

//  Init Middleware
// app.use(logger);

// Body Parser Middleware for parsing HTTP post response body
app.use(express.json());
app.use(express.urlencoded({ extended: false}));

// Express handlebars Middleware
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.get('/', (req,res) => {
  metrics.instrument(res, { as: 'express.http.res' });
  metrics.count('long.count.hellojshdsjdhjskcns.sdcdscdscds.vdscsdcscf.afefaewfawef.adcfadscfaedf.faedfcadfaerwf.faedfaerferrae.ferfersfserfgse.ferfaerferwf.faerfwerfweferrfhserfj.fesrfserf.frefgerferg.tfyjftygg.sdfsdfvc.dwaedcs')
  return res.render('index', {
    title: 'Member App',
    members
  });
});

// Setup static folder
app.use(express.static(path.join(__dirname, "public")));

// Members API routes
app.use('/api/members', require('./routers/api/members'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});

