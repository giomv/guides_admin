
# Database diagram


### Schema



### Structure of jsonb columns

The following example applies to the jsonb columns of **guide_template** and **guide_data** in tables ***guides*** and ***guide_learners*** respectively:


```javascript
[
   {
      "id":"111",
      "title":"First Guide",
      "sections":[
         {
            "id":"1",
            "title":"hello",
            "tasks":[
               {
                  "id":"11",
                  "title":"First Task",
                  "blocks":[
                     {
                        "id":"1",
                        "type":"text",
                        "can_be_evauated":false,
                        "content":{
                           "statement":"New text content"
                        }
                     },
                     {
                        "id":"2",
                        "type":"input",
                        "can_be_evauated":true,
                        "content":{
                           "question":"What is the capital of Spain?",
                           "answer":""
                        }
                     },
                     {
                        "id":"3",
                        "type":"multi_choice",
                        "can_be_evauated":true,
                        "content":{
                           "question" : "What are the official languages of Peru?",
                           "options" : [
                              {
                                 "description": "English",
                                 "is_selected": false,
                                 "is_correct": false
                              },
                              {
                                 "description": "Spanish",
                                 "is_selected": false,
                                 "is_correct": true
                              },
                              {
                                 "description": "Portuguese",
                                 "is_selected": false,
                                 "is_correct": false
                              },
                              {
                                 "description": "Quechua",
                                 "is_selected": false,
                                 "is_correct": false
                              },
                              {
                                 "description": "Aymara",
                                 "is_selected": false,
                                 "is_correct": false
                              },
                           ] 
                        }
                     },
                     {
                        "id":"4",
                        "type":"image",
                        "can_be_evauated":false,
                        "content":{
                           "url":"https://remotely-platform.s3.eu-central-1.wasabisys.com/pictures/ad25b765-ab2a-42b4-ac78-00e851f6fbb6.jpg"
                        }
                     },
                     {
                        "id":"5",
                        "type":"video",
                        "can_be_evauated":false,
                        "content":{
                           "url":"https://vimeo.com/02c54fd0-03e2-4f1d-9b7c-7457c4d1775a"
                        }
                     }
                  ]
               }
            ]
         }
      ]
   }
]