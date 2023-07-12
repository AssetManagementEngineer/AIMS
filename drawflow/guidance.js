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
                    "node":"30",
                    "output":"input_1"
                  },
                  {
                    "node":"31",
                    "output":"input_1"
                  },
                  {
                    "node":"32",
                    "output":"input_1"
                  },
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
          "30": {
            "id": 30,
            "name": "IN-GD-AC",
            "data": {},
            "class": "SCH",
            "html": "\n <div>\n <div class=\"title-box-darkblue\"><i class=\"fas fa-code-branch\"></i> IN-GD-AC (30)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Access Way System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
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
                "connections":[]
              }
            },          
            "outputs": {
              "output_1": {
                "connections": [
                  {
                    "node":"92",
                    "output":"input_1"
                  }
                ]
              },
              "output_2":{
                "connections":[]
              }
            },
            "pos_x": 581,
            "pos_y": 100
          },
          "31": {
            "id": 31,
            "name": "IN-GD-HI",
            "data": {},
            "class": "SCH",
            "html": "\n <div>\n <div class=\"title-box-darkblue\"><i class=\"fas fa-code-branch\"></i> IN-GD-HI (31)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  HighWay System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
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
                    "node":"3",
                    "input":"output_2"
                  }
                ]
              }
            },          
            "outputs": {
              "output_1": {
                "connections": [
                  {
                    "node":"93",
                    "output":"input_1"
                  },
                  {
                    "node":"94",
                    "output":"input_1"
                  }
                ]
              },
              "output_2":{
                "connections":[]
              }
            },
            "pos_x": 581,
            "pos_y": 220
          },
          "32": {
            "id": 32,
            "name": "IN-GD-PR",
            "data": {},
            "class": "SCH",
            "html": "\n <div>\n <div class=\"title-box-darkblue\"><i class=\"fas fa-code-branch\"></i> IN-GD-PR (32)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  PRoW Way System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
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
                "connections":[]
              }
            },          
            "outputs": {
              "output_1": {
                "connections": [
                  {
                    "node":"96",
                    "output":"input_1"
                  },
                  {
                    "node":"97",
                    "output":"input_1"
                  },
                  {
                    "node":"98",
                    "output":"input_1"
                  },
                  {
                    "node":"99",
                    "output":"input_1"
                  }
                ]
              },
              "output_2":{
                "connections":[]
              }
            },
            "pos_x": 1230,
            "pos_y": 336
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
          "92": {
            "id": 92,
            "name": "IN-GD-AC-RD",
            "data": {},
            "class": "SCH",
            "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-GD-AC-RD (92)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Access Road System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
            "typenode": false,
            "inputs": {
              "input_1": {
                "connections": [
                   {
                    "node": "30",
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
            "pos_y": 35
          },
          "93": {
            "id": 93,
            "name": "IN-GD-HI-M",
            "data": {},
            "class": "SCH",
            "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-GD-HI-M (93)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Motorway System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
            "typenode": false,
            "inputs": {
              "input_1": {
                "connections": [
                   {
                    "node": "31",
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
            "pos_y": 160
          },
          "94": {
            "id": 94,
            "name": "IN-GD-HI-RD",
            "data": {},
            "class": "SCH",
            "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-GD-HI-RD (94)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Road System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
            "typenode": false,
            "inputs": {
              "input_1": {
                "connections": [
                   {
                    "node": "31",
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
            "pos_y": 270
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
          "96": {
            "id": 96,
            "name": "IN-GD-PR-BDW",
            "data": {},
            "class": "SCH",
            "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-GD-PR-BDW (96)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Bridleway System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
            "typenode": false,
            "inputs": {
              "input_1": {
                "connections": [
                   {
                    "node": "32",
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
            "pos_x": 1580,
            "pos_y": 148
          },
          "97": {
            "id": 97,
            "name": "IN-GD-PR-BW",
            "data": {},
            "class": "SCH",
            "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-GD-PR-BW (97)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Byway System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
            "typenode": false,
            "inputs": {
              "input_1": {
                "connections": [
                   {
                    "node": "32",
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
            "pos_x": 1580,
            "pos_y": 268
          },
          "98": {
            "id": 98,
            "name": "IN-GD-PR-CYC",
            "data": {},
            "class": "SCH",
            "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-GD-PR-CYC (98)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Cycle Way System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
            "typenode": false,
            "inputs": {
              "input_1": {
                "connections": [
                   {
                    "node": "32",
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
            "pos_x": 1580,
            "pos_y": 388
          },
          "99": {
            "id": 99,
            "name": "IN-GD-PR-FT",
            "data": {},
            "class": "SCH",
            "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-GD-PR-FT (99)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Footpath System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
            "typenode": false,
            "inputs": {
              "input_1": {
                "connections": [
                   {
                    "node": "32",
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
            "pos_x": 1580,
            "pos_y": 508
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
          "3": {
            "id": 3,
            "name": "IN-DR-HW",
            "data": {},
            "class": "SCH",
            "html": "\n <div>\n <div class=\"title-box\"><i class=\"fas fa-code-branch\"></i> IN-DR-HW (3)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Highway Drainage System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
            "typenode": false,
            "inputs": {},          
            "outputs": {
              "output_1": {
                "connections": []
              },
              "output_2":{
                "connections":[
                  {
                    "node":"31",
                    "output":"input_2"
                  }
                ]
              }
            },
            "pos_x": 200,
            "pos_y": 120
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