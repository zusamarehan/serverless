# serverless

- To execute the receiver function 
```
serverless invoke local --function receiver -p src/input.json
````

- To execute the classifier function 
```
serverless invoke local --function classifier -p src/input.json
````

To setup the Postgres database, navigate to `serverless.yml`, file and modify the database details accordingly.
