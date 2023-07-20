var guidance= {
    "data": {
        "1": {
            "id": 1,
            "name": "IN-GD",
            "data": {},
            "class": "SCH",
            "html": "\n <div>\n <div class=\"title-box-orange\"><i class=\"fas fa-code-branch\"></i> IN-GD (1)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Guidance System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
            "typenode": false,
            "inputs": {
              "input_1":{"connections":[]},
              "input_2":{"connections":[{"node":"7","input":"output_2"}]}
            },          
            "outputs": {
              "output_1": {
                "connections": [ {"node":"2", "output":"input_1" }] },
              "output_2":{
                "connections":[]
              }
            },
            "pos_x": 200,
            "pos_y": 335
          },
          "2": {
            "id": 2,
            "name": "IN-GD-PW",
            "data": {},
            "class": "SCH",
            "html": "\n <div>\n <div class=\"title-box-darkblue\"><i class=\"fas fa-code-branch\"></i> IN-GD-PW (2)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Permanent Way System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
            "typenode": false,
            "inputs": {
              "input_1": {
                "connections": [
                   {
                    "node": "1",
                    "input": "output_1"
                   }
                ]
              },
              "input_2":{
                "connections":[
                  {
                    "node":"6",
                    "input":"output_2"
                  }
                ]
              }
            },          
            "outputs": {
              "output_1": {
                "connections": [
                  {
                    "node":"3",
                    "output":"input_1"
                  },
                  {
                    "node":"4",
                    "output":"input_1"
                  }
                ]
              },
              "output_2": {
                "connections": []
              }
            },
            "pos_x": 581,
            "pos_y": 555
          },
          "3": {
            "id": 3,
            "name": "IN-GD-PW-PL",
            "data": {},
            "class": "SCH",
            "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-GD-PW-PL (3)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Track (Plain line) System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
            "typenode": false,
            "inputs": {
              "input_1": {
                "connections": [
                   {
                    "node": "2",
                    "input": "output_1"
                   }
                ]
              },
              "input_2":{
                "connections":[]
              }
            },          
            "outputs": {
              "output_1": {
                "connections": [{}]
              },
              "output_2":{
                "connections":[]
              }
            },
            "pos_x": 891,
            "pos_y": 421
          },
          "4": {
            "id": 4,
            "name": "IN-GD-PW-SC",
            "data": {},
            "class": "SCH",
            "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-GD-PW-SC (4)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  S&amp;C System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
            "typenode": false,
            "inputs": {
              "input_1": {
                "connections": [
                   {
                    "node": "2",
                    "input": "output_1"
                   }
                ]
              },
              "input_2":{
                "connections":[{
                  "node":"5",
                  "input":"output_2"
                }]
              }
            },          
            "outputs": {
              "output_1": {
                "connections": [{}]
              },
              "output_2":{
                "connections":[]
              }
            },
            "pos_x": 891,
            "pos_y": 580
          },
          "5": {
            "id": 5,
            "name": "IN-CCS-SIG-POS",
            "data": {},
            "class": "SCH",
            "html": "\n <div>\n <div class=\"title-box\"><i class=\"fas fa-code-branch\"></i> IN-CCS-SIG-POS (5)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n Point Operating System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
            "typenode": false,
            "inputs": {},          
            "outputs": {"output_1":{"connections":[{}]},
                        "output_2":{"connections":[
                          {
                            "node":"4",
                            "output":"input_2"
                          }
                        ]}},
            "pos_x": -200,
            "pos_y": 780
          },
          "6": {
            "id": 6,
            "name": "IN-GT-EW-EMB",
            "data": {},
            "class": "SCH",
            "html": "\n <div>\n <div class=\"title-box\"><i class=\"fas fa-code-branch\"></i> IN-GT-EW-EMB (6)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Embankment System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
            "typenode": false,
            "inputs": {},          
            "outputs": {
              "output_1": {
                "connections": [{}]
              },
              "output_2": {
                  "connections":[
                    {
                      "node":"2",
                      "output":"input_2"
                    }
                  ]
                }
            },
            "pos_x": -200,
            "pos_y": 670
          },
          "7": {
            "id": 7,
            "name": "IN-EXT-HS",
            "data": {},
            "class": "SCH",
            "html": "\n <div>\n <div class=\"title-box\"><i class=\"fas fa-code-branch\"></i> IN-EXT-HS (7)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n   Highway Systems \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
            "typenode": false,
            "inputs": {},          
            "outputs": {
              "output_1": {
                "connections": []
              },
              "output_2":{
                  "connections":[{"node":"1","output":"input_2"}]
              }
            },
            "pos_x": -200,
            "pos_y": 500
          }
    }
}