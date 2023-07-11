var drainage= {
    "data": {
        "16": {
            "id": 16,
            "name": "IN-DR",
            "data": {},
            "class": "SCH",
            "html": "\n <div>\n <div class=\"title-box-orange\"><i class=\"fas fa-code-branch\"></i> IN-DR (16)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Drainage System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
            "typenode": false,
            "inputs": {},          
            "outputs": {
              "output_1": {
                "connections": [
                  {
                    "node":"17",
                    "output":"input_1"
                  },
                  {
                    "node":"18",
                    "output":"input_1"
                  },
                  {
                    "node":"19",
                    "output":"input_1"
                  },
                  {
                    "node":"20",
                    "output":"input_1"
                  }
                ]
              },
              "output_2":{
                "connections":[]
              }
            },
            "pos_x": 100,
            "pos_y": 225
          },
          "17": {
            "id": 17,
            "name": "IN-DR-BLD",
            "data": {},
            "class": "SCH",
            "html": "\n <div>\n <div class=\"title-box-darkblue\"><i class=\"fas fa-code-branch\"></i> IN-DR-BLD (17)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Buildings &amp; Stations Drainage System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
            "typenode": false,
            "inputs": {
              "input_1": {
                "connections": [
                   {
                    "node": "16",
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
                    "node":"64",
                    "output":"input_1"
                  }
                ]
              },
              "output_2":{
                "connections":[]
              }
            },
            "pos_x": 520,
            "pos_y": -78
          },
          "18": {
            "id": 18,
            "name": "IN-DR-HW",
            "data": {},
            "class": "SCH",
            "html": "\n <div>\n <div class=\"title-box-darkblue\"><i class=\"fas fa-code-branch\"></i> IN-DR-HW (18)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Highway Drainage System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
            "typenode": false,
            "inputs": {
              "input_1": {
                "connections": [
                   {
                    "node": "16",
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
                    "node":"65",
                    "output":"input_1"
                  }
                ]
              },
              "output_2":{
                "connections":[]
              }
            },
            "pos_x": 520,
            "pos_y": 102
          },
          "19": {
            "id": 19,
            "name": "IN-DR-LND",
            "data": {},
            "class": "SCH",
            "html": "\n <div>\n <div class=\"title-box-darkblue\"><i class=\"fas fa-code-branch\"></i> IN-DR-LND (19)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Land Drainage System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
            "typenode": false,
            "inputs": {
              "input_1": {
                "connections": [
                   {
                    "node": "16",
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
                    "node":"66",
                    "output":"input_1"
                  }
                ]
              },
              "output_2":{
                "connections":[]
              }
            },
            "pos_x": 520,
            "pos_y": 262
          },
          "20": {
            "id": 20,
            "name": "IN-DR-RL",
            "data": {},
            "class": "SCH",
            "html": "\n <div>\n <div class=\"title-box-darkblue\"><i class=\"fas fa-code-branch\"></i> IN-DR-RL (20)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Railway Drainage System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
            "typenode": false,
            "inputs": {
              "input_1": {
                "connections": [
                   {
                    "node": "16",
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
                    "node":"34",
                    "output":"input_1"
                  },
                  {
                    "node":"67",
                    "output":"input_1"
                  },
                  {
                    "node":"68",
                    "output":"input_1"
                  },
                  {
                    "node":"69",
                    "output":"input_1"
                  }
                ]
              },
              "output_2":{
                "connections":[]
              }
            },
            "pos_x": 520,
            "pos_y": 556
          },
          "64": {
            "id": 64,
            "name": "IN-DR-BLD-PS",
            "data": {},
            "class": "SCH",
            "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-DR-BLD-PS (64)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Pumping Station System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
            "typenode": false,
            "inputs": {
              "input_1": {
                "connections": [
                   {
                    "node": "17",
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
            "pos_x": 900,
            "pos_y": -104
          },
          "65": {
            "id": 65,
            "name": "IN-DR-HW-PS",
            "data": {},
            "class": "SCH",
            "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-DR-HW-PS (65)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Pumping Station System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
            "typenode": false,
            "inputs": {
              "input_1": {
                "connections": [
                   {
                    "node": "18",
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
            "pos_x": 900,
            "pos_y": 49
          },
          "66": {
            "id": 66,
            "name": "IN-DR-LND-PS",
            "data": {},
            "class": "SCH",
            "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-DR-LND-PS (66)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Pumping Station System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
            "typenode": false,
            "inputs": {
              "input_1": {
                "connections": [
                   {
                    "node": "19",
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
            "pos_x": 900,
            "pos_y": 236
          },
          "67": {
            "id": 67,
            "name": "IN-DR-RL-PS",
            "data": {},
            "class": "SCH",
            "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-DR-RL-PS (67)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Pumping Station System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
            "typenode": false,
            "inputs": {
              "input_1": {
                "connections": [
                   {
                    "node": "20",
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
            "pos_x": 900,
            "pos_y": 404
          },
          "68": {
            "id": 68,
            "name": "IN-DR-RL-EW",
            "data": {},
            "class": "SCH",
            "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-DR-RL-EW (68)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Earthworks Drainage System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
            "typenode": false,
            "inputs": {
              "input_1": {
                "connections": [
                   {
                    "node": "20",
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
            "pos_x": 900,
            "pos_y": 545
          },
          "69": {
            "id": 69,
            "name": "IN-DR-RL-STR",
            "data": {},
            "class": "SCH",
            "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-DR-RL-STR (69)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Civils &amp; Structures Drainage System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
            "typenode": false,
            "inputs": {
              "input_1": {
                "connections": [
                   {
                    "node": "20",
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
            "pos_x": 900,
            "pos_y": 693
          }
    }
}