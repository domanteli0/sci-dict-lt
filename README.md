# Science dictionary LT -> EN

When googling about math, transition to English easily!

Check out the deployed website here: [sci-dict.lt](http://sci-dict.lt)

If not deployed, this is the v1.1.0 pdf version of website [DOWNLOAD](https://github.com/naglissul/sci-dict-lt/files/13461074/Science.Dictionary.LT.-_.EN.pdf)

The branch "dereleased" keeps the version v1.1.1 which for now will not be used and will be deleted, but in later versions will be used again.

## How to use?

Use Ctrl+F of "Find in page" to find your word or category.  
Click on the "I was here" counter! So I could carry on with this project  
If curious what the count is, go to [http://sci-dict.lt:5000/api/counters/i-was-here](http://sci-dict.lt:5000/api/counters/i-was-here)

## How to contribute?

See mistakes? Know a word that's not here? Know a better translation?

- Email me [naglis.suliokas@gmail.com](mailto:naglis.suliokas@gmail.com) or
- Fork repo and create a PR after modifying [./server/src/dictInit.sql](./server/src/dictInit.sql) file.

## For developers

### Tech

- React JS
- Docker
- React-bootstrap
- Postgresql
- Express
- Nginx

### Run prod

make .env file from .env.template - enter your db details there (in root dir and in server/ dir). For the first time deployment run docker-compose up. For the first deployment send a POST request to initiate db tables (later your set up volume should persist data):

```
curl -X POST http://localhost:5000/api/init
```

New release:

```
git pull
./deploy redeploy
```

In case of unsuccessful new release deployment:

```
./deploy rollback
```

Small comment:  
If access is denied when running bash script, try running this command:

```
chmod +x deploy
```

### Run dev

Just decipher ./deploy file... :D But, jokes aside, this is basic react app, express backend and postgresql database. I'm sure you will figure this out.

## Future ideas

There could be admin and user accounts. And categories (IMPORTANT to have categories, named after the specific syllabus/course that had these definitions but no english translation). And voting.
