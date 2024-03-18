
# Database diagram


### Schema

I opted for a relational DB because most of the data managed for this guides admin is not going to frequently change. The user management required to handle guides assignation follows a defined structure. However, I opted to store the data from the guides (sections, tasks and blocks) in jsonb columns, because it allows to be more flexible around the structure, specially the blocks of content, which have different structures and this type of column could allow to easily include new content types. 

![database diagram](https://github.com/giomv/guides_admin/blob/main/public/WorkRampDB.drawio.png?raw=true)

### Structure of jsonb columns

The following example applies to the jsonb columns of **guide_template** and **guide_data** in tables ***guides*** and ***guide_learners*** respectively. In a production environment, when a guide is still a draft and it's being edited, it will first be stored in the **guide_template** column. When the guide is published, at the moment of assigning a learner to a guide, a copy from the **guide_template** will be included in the **guide_data** column.


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