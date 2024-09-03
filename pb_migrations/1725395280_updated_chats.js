/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("zebxovbmt01hunn")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "zf1etvhj",
    "name": "team",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "red",
        "blue"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("zebxovbmt01hunn")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "zf1etvhj",
    "name": "side",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "red",
        "blue"
      ]
    }
  }))

  return dao.saveCollection(collection)
})
