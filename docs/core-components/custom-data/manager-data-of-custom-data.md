---
sidebar_position: 3
title: "Manage data of Custom Data"
---

## Basic of browsing data of Custom Data

Go to browse data page of Custom Data. Check this to see [how to browse data](/getting-started/storing-data-via-custom-data#how-to-browse-data-of-custom-data)

Create new Custom Data with this schema

```json title="Custom Data projectSetting's schema"
{
  "definitions": {
    "key": {
      "type": "String",
      "unique": true
    },
    "value": {
      "type": "String"
    }
  },
  "options": {},
  "indexes": [],
  "extends": "",
  "inheritOptions": {}
}
```

![Create Custom Data](\img\docs\core-components\custom-data\manager-data\01-create-new-custom-data.png)

### Insert new documents

1. Press Query button to get the current data documents.
   ![Browse](\img\docs\core-components\custom-data\manager-data\02-browse-current-data.png)
   You will see empty array json object

2. Add new json objects into the root array.
   ![Add](\img\docs\core-components\custom-data\manager-data\03-add-new-value.png)
   Notice: the text Changes... Added(3) will show up.

3. Press Save button. It will result the new documents with \_id field.
   ![Save](\img\docs\core-components\custom-data\manager-data\04-save-and-data-will-be-update-with-_id.png)

### Update documents

1. Edit some field values of document.
   ![Edit](\img\docs\core-components\custom-data\manager-data\05-change-value.png)
   The text Changes.. Modified(1) will show up.

2. Press Save button and result will be updated

### Delete documents

1. Delete the document from root array. will not tice action text delete
   ![Delete](\img\docs\core-components\custom-data\manager-data\06-remove-value.png)
   The text Changes.. Removed(1) will show up.

2. Press Save button and the data will be removed

### Browse data by condition

1. Write condition and press Query button.
   ![Delete](\img\docs\core-components\custom-data\manager-data\07-query-by-condition.png)
   Only documents matched to the condition will be showed.

2. Good to know, we can change environment stage to LIVE.
   ![Stage change](\img\docs\core-components\custom-data\manager-data\08-change-stage-to-live.png)
