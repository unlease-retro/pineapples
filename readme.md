<p align='center'>
  <img src='https://cloud.githubusercontent.com/assets/1913316/17590946/cc66eb70-5fd3-11e6-99e4-3b37fede20a7.jpg' width='200'/>
</p>

> Send your friend a pineapple

### Setup

#### Local dependencies
```
npm i
```

#### Redis
```
docker run -p 6379:6379 --name local-redis -d redis
```

### Develop

```
npm start
```

### Release

```
npm run build
```
