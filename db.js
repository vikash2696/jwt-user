var mongoose = require('mongoose');
mongoose.set('useUnifiedTopology', true);
mongoose.set('useNewUrlParser', true);
mongoose.connect('mongodb+srv://vikash:vikash@cluster0.eqzxh.mongodb.net/jwt_user');