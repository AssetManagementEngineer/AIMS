var guidance= {
    "data": {
        "29": {
            "id": 29,
            "name": "IN-GD",
            "data": {},
            "class": "SCH",
            "html": "\n <div>\n <div class=\"title-box-orange\"><i class=\"fas fa-code-branch\"></i> IN-GD (29)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Guidance System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
            "typenode": false,
            "inputs": {},          
            "outputs": {
              "output_1": {
                "connections": [
                  {
                    "node":"33",
                    "output":"input_1"
                  }
                ]
              },
              "output_2":{
                "connections":[]
              }
            },
            "pos_x": 200,
            "pos_y": 335
          },
          "33": {
            "id": 33,
            "name": "IN-GD-PW",
            "data": {},
            "class": "SCH",
            "html": "\n <div>\n <div class=\"title-box-darkblue\"><i class=\"fas fa-code-branch\"></i> IN-GD-PW (33)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Permanent Way System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
            "typenode": false,
            "inputs": {
              "input_1": {
                "connections": [
                   {
                    "node": "29",
                    "input": "output_1"
                   }
                ]
              },
              "input_2":{
                "connections":[
                  {
                    "node":"104",
                    "input":"output_2"
                  }
                ]
              }
            },          
            "outputs": {
              "output_1": {
                "connections": [
                  {
                    "node":"95",
                    "output":"input_1"
                  },
                  {
                    "node":"100",
                    "output":"input_1"
                  }
                ]
              },
              "output_2": {
                "connections": [
                  {
                    "node":"34",
                    "output":"input_2"
                  }
                ]
              }
            },
            "pos_x": 581,
            "pos_y": 555
          },
          "95": {
            "id": 95,
            "name": "IN-GD-PW-PL",
            "data": {},
            "class": "SCH",
            "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-GD-PW-PL (95)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Track (Plain line) System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
            "typenode": false,
            "inputs": {
              "input_1": {
                "connections": [
                   {
                    "node": "33",
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
          "100": {
            "id": 100,
            "name": "IN-GD-PW-SC",
            "data": {},
            "class": "SCH",
            "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-GD-PW-SC (100)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  S&amp;C System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
            "typenode": false,
            "inputs": {
              "input_1": {
                "connections": [
                   {
                    "node": "33",
                    "input": "output_1"
                   }
                ]
              },
              "input_2":{
                "connections":[{
                  "node":"10",
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
          "10": {
            "id": 10,
            "name": "IN-CCS-SIG-POS",
            "data": {},
            "class": "SCH",
            "html": "\n <div>\n <div class=\"title-box\"><i class=\"fas fa-code-branch\"></i> IN-CCS-SIG-POS (10)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n Point Operating System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
            "typenode": false,
            "inputs": {},          
            "outputs": {"output_1":{"connections":[{}]},
                        "output_2":{"connections":[
                          {
                            "node":"100",
                            "output":"input_2"
                          }
                        ]}},
            "pos_x": 200,
            "pos_y": 780
          },
          "104": {
            "id": 104,
            "name": "IN-GT-EW-EMB",
            "data": {},
            "class": "SCH",
            "html": "\n <div>\n <div class=\"title-box\"><i class=\"fas fa-code-branch\"></i> IN-GT-EW-EMB (104)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Embankment System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
            "typenode": false,
            "inputs": {},          
            "outputs": {
              "output_1": {
                "connections": [{}]
              },
              "output_2": {
                  "connections":[
                    {
                      "node":"33",
                      "output":"input_2"
                    }
                  ]
                }
            },
            "pos_x": 200,
            "pos_y": 670
          }
    }
}