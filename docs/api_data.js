define({ "api": [
  {
    "type": "get",
    "url": "/error",
    "title": "Error handling example",
    "name": "ErrorHandle",
    "group": "Examples",
    "error": {
      "fields": {
        "500": [
          {
            "group": "500",
            "optional": false,
            "field": "SomethingWentWrong",
            "description": "<p>Error example.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 \n{\n  \"code\": \"SomethingWentWrong\",\n  \"message\": \"simple error message\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/controller.js",
    "groupTitle": "Examples"
  },
  {
    "type": "get",
    "url": "/simple-string",
    "title": "Request User information",
    "name": "SimpleString",
    "group": "Examples",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n\"Hi, current time is Thu Apr 06 2017 00:01:08 GMT+0300 (Russian Standard Time)\"",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/controller.js",
    "groupTitle": "Examples"
  },
  {
    "type": "post",
    "url": "/strings",
    "title": "Add string to array",
    "name": "AddString",
    "group": "StringArray",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string/string[]",
            "optional": false,
            "field": "addedString",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "cURL request example",
          "content": "curl -XPOST -H \"Content-type: application/json\" -d '{\"addedString\": \"qwe\"}' 'http://127.0.0.1:3000/strings'",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "optional": false,
            "field": "WrongParametr",
            "description": "<p>'Expected &quot;addedString&quot; param in request body'</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 OK",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/controller.js",
    "groupTitle": "StringArray"
  },
  {
    "type": "delete",
    "url": "/strings",
    "title": "Delete string from array",
    "name": "Delete_string",
    "group": "StringArray",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "deletedString",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "cURL string",
          "content": "curl -XDELETE -H \"Content-type: application/json\" -d '{\"deletedString\": \"bar\"}' 'http://127.0.0.1:3000/strings'",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "optional": false,
            "field": "WrongParametr",
            "description": "<p>'Expected &quot;deletedString&quot; param in request body'</p>"
          }
        ],
        "404": [
          {
            "group": "404",
            "optional": false,
            "field": "NotFound",
            "description": "<p>'There is no element ${string} in array'</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/controller.js",
    "groupTitle": "StringArray"
  },
  {
    "type": "get",
    "url": "/strings",
    "title": "Get string array",
    "name": "GetStrings",
    "group": "StringArray",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n[\"foo\",\"bar\"]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/controller.js",
    "groupTitle": "StringArray"
  }
] });
