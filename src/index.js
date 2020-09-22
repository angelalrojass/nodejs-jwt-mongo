import app from './app'
import './database'


app.set('port', process.env.PORT || 4000);

app.listen(app.get('port'),() => {
    console.log('Server on Port', app.get('port'));
})