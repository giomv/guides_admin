
# API design

### Headers

Every endpoint call should include an authentication-token

### Endpoints

#### List of guides

```
GET /guides

Request Payload: {}

Request Response:
[
    { 
        id: "1", 
        title: "Guide 1"
    }, { 
        id: "2", 
        title: "Guide 2"
    }
]
```

#### Detail of guide by id

```
GET /guides/{id}

Request Payload: {}

Request Response:

{
    id: "1",
    title: "First Guide",
    sections: [{
        id: "1",
        title: "First Section",
        tasks: [
            {
                id: "1",
                title: "First task",
                blocks: [
                    {
                        "id":"1",
                        "type":"text",
                        "content":{
                           "statement":"New text content"
                        }
                     },
                ]
            }
        ]
    },
    {
        id: "2",
        title: "Second Section",
        tasks: [
            {
                id: "3",
                title: "Third task",
                blocks: [
                    {
                        "id":"5",
                        "type":"video",
                        "content":{
                           "url":"https://vimeo.com/02c54fd0-03e2-4f1d-9b7c-7457c4d1775a"
                        }
                     }
                ]
            }
        ]
    }]
}
```

#### Update guide by id

```
PATCH /guides/{id}

Request Payload:

{
    id: "1",
    sections: [{
        id: "1",
        tasks: [
            {
                id: "1",
                title: "First task",
                blocks: [
                    {
                        "id":"3",
                        "type":"multi_choice",
                        "content":{
                           "question" : "What are the official languages of Peru?",
                           "options" : [
                              {
                                 "description": "English",
                                 "is_correct": false
                              },
                              {
                                 "description": "Spanish",
                                 "is_correct": true
                              },
                              {
                                 "description": "Portuguese",
                                 "is_correct": false
                              },
                              {
                                 "description": "Quechua",
                                 "is_correct": false
                              },
                              {
                                 "description": "Aymara",
                                 "is_correct": false
                              },
                           ] 
                        }
                     },
                     {
                        "id":"4",
                        "type":"image",
                        "content":{
                           "url":"https://remotely-platform.s3.eu-central-1.wasabisys.com/pictures/ad25b765-ab2a-42b4-ac78-00e851f6fbb6.jpg"
                        }
                     },
                ]
            },
            {
                id: "2",
                title: "Second task",
                blocks: [
                    {
                        "id":"2",
                        "type":"input",
                        "content":{
                           "question":"What is the capital of Spain?",
                        }
                     },
                ]
            }
        ]
    }]
}

Request Response: {}

```

#### Delete a guide by id

```

DELETE /guides/{id}

Request Payload: {}
Request Response: {}


```