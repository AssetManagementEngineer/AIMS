var drainage= {
    "data": {
        "1": {
            "id": 1,
            "name": "IN-DR",
            "data": {},
            "class": "SCH",
            "html": "\n <div>\n <div class=\"title-box-orange\"><i class=\"fas fa-code-branch\"></i> IN-DR (1)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Drainage System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
            "typenode": false,
            "inputs": {
              "input_1":{
                "connections":[]
              },
              "input_2": {
                "connections":[
                  {
                    "node":"18",
                    "input":"output_2"
                  },
                  {
                    "node":"19",
                    "input":"output_2"
                  }
                ]
              }
            },          
            "outputs": {
              "output_1": {
                "connections": [
                  {
                    "node":"2",
                    "output":"input_1"
                  },
                  {
                    "node":"3",
                    "output":"input_1"
                  },
                  {
                    "node":"4",
                    "output":"input_1"
                  },
                  {
                    "node":"5",
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
          "2": {
            "id": 2,
            "name": "IN-DR-BLD",
            "data": {},
            "class": "SCH",
            "html": "\n <div>\n <div class=\"title-box-darkblue\"><i class=\"fas fa-code-branch\"></i> IN-DR-BLD (2)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Buildings &amp; Stations Drainage System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
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
                    "node":"13",
                    "input":"output_2"
                  }
                ]
              }
            },          
            "outputs": {
              "output_1": {
                "connections": [
                  {
                    "node":"6",
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
          "3": {
            "id": 3,
            "name": "IN-DR-HW",
            "data": {},
            "class": "SCH",
            "html": "\n <div>\n <div class=\"title-box-darkblue\"><i class=\"fas fa-code-branch\"></i> IN-DR-HW (3)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Highway Drainage System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
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
                    "node":"14",
                    "input":"output_2"
                  }
                ]
              }
            },          
            "outputs": {
              "output_1": {
                "connections": []
              },
              "output_2":{
                "connections":[]
              }
            },
            "pos_x": 520,
            "pos_y": 102
          },
          "4": {
            "id": 4,
            "name": "IN-DR-LND",
            "data": {},
            "class": "SCH",
            "html": "\n <div>\n <div class=\"title-box-darkblue\"><i class=\"fas fa-code-branch\"></i> IN-DR-LND (4)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Land Drainage System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
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
                "connections":[]
              }
            },          
            "outputs": {
              "output_1": {
                "connections": []
              },
              "output_2":{
                "connections":[]
              }
            },
            "pos_x": 520,
            "pos_y": 262
          },
          "5": {
            "id": 5,
            "name": "IN-DR-RL",
            "data": {},
            "class": "SCH",
            "html": "\n <div>\n <div class=\"title-box-darkblue\"><i class=\"fas fa-code-branch\"></i> IN-DR-RL (5)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Railway Drainage System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
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
                    "node":"17",
                    "input":"output_2"
                  }
                ]
              }
            },          
            "outputs": {
              "output_1": {
                "connections": [
                  {
                    "node":"10",
                    "output":"input_1"
                  },
                  {
                    "node":"11",
                    "output":"input_1"
                  },
                  {
                    "node":"12",
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
          "6": {
            "id": 6,
            "name": "IN-DR-BLD-PS",
            "data": {},
            "class": "SCH",
            "html": "\n <div>\n <div class=\"title-box-darkblue\"><i class=\"fas fa-code-branch\"></i> IN-DR-BLD-PS (6)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Pumping Station System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
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
                    "node":"20",
                    "input":"output_2"
                  }
                ]
              }
            },          
            "outputs": {
              "output_1": {
                "connections": []
              },
              "output_2":{
                "connections":[]
              }
            },
            "pos_x": 520,
            "pos_y": -200
          },
          "10": {
            "id": 10,
            "name": "IN-DR-RL-STR",
            "data": {},
            "class": "SCH",
            "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-DR-RL-STR (10)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Civils &amp; Structures Drainage System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
            "typenode": false,
            "inputs": {
              "input_1": {
                "connections": [
                   {
                    "node": "5",
                    "input": "output_1"
                   }
                ]
              },
              "input_2":{
                "connections":[
                  {
                    "node":"15",
                    "input":"output_2"
                  }
                ]
              }
            },          
            "outputs": {
              "output_1": {
                "connections": []
              },
              "output_2":{
                "connections":[]
              }
            },
            "pos_x": 900,
            "pos_y": 850
          },
          "11": {
            "id": 11,
            "name": "IN-DR-RL-EW",
            "data": {},
            "class": "SCH",
            "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-DR-RL-EW (11)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Earthworks Drainage System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
            "typenode": false,
            "inputs": {
              "input_1": {
                "connections": [
                   {
                    "node": "5",
                    "input": "output_1"
                   }
                ]
              },
              "input_2":{
                "connections":[
                  {
                  "node":"16",
                  "input":"output_2"
                  }
              ]
              }
            },          
            "outputs": {
              "output_1": {
                "connections": []
              },
              "output_2":{
                "connections":[]
              }
            },
            "pos_x": 900,
            "pos_y": 700
          },
          "12": {
            "id": 12,
            "name": "IN-DR-RL-TRA",
            "data": {},
            "class": "SCH",
            "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-DR-RL-TRA (12)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Track Drainage System System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
            "typenode": false,
            "inputs": {
              "input_1": {
                "connections": [
                   {
                    "node": "5",
                    "input": "output_1"
                   }
                ]
              },
              "input_2": {
                "connections": []
              }
            },          
            "outputs": {
              "output_1": {
                "connections": []
              }
            },
            "pos_x": 900,
            "pos_y": 550
          },
          "13": {
            "id": 13,
            "name": "IN-BLD",
            "data": {},
            "class": "SCH",
            "html": "\n <div>\n <div class=\"title-box\"><i class=\"fas fa-code-branch\"></i> IN-BLD (13)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n   Bulidings &amp; Stations System \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
            "typenode": false,
            "inputs": {},          
            "outputs": {
              "output_1": {
                "connections": [{}]
              },
              "output_2":{
                "connections":[
                  {
                    "node":"2",
                    "output":"input_2"
                  }
                ]
              }
            },
            "pos_x": 100,
            "pos_y": -180
          },
          "14": {
            "id": 14,
            "name": "IN-GD-HI",
            "data": {},
            "class": "SCH",
            "html": "\n <div>\n <div class=\"title-box\"><i class=\"fas fa-code-branch\"></i> IN-GD-HI (14)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  HighWay System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
            "typenode": false,
            "inputs": {},          
            "outputs": {
              "output_1": {
                "connections": [{}]
              },
              "output_2":{
                "connections":[
                  {
                    "node":"3",
                    "output":"input_2"
                  }
                ]
              }
            },
            "pos_x": 100,
            "pos_y": 0
          },
          "15": {
            "id": 15,
            "name": "IN-STR-IN-BRG",
            "data": {},
            "class": "SCH",
            "html": "\n <div>\n <div class=\"title-box\"><i class=\"fas fa-code-branch\"></i> IN-STR-IN-BRG (15)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Bridge System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
            "typenode": false,
            "inputs": {},          
            "outputs": {
              "output_1": {
                "connections": [{}]
              },
              "output_2":{
                "connections":[
                  {
                    "node":"10",
                    "output":"input_2"
                  }
                ]
              }
            },
            "pos_x": 140,
            "pos_y": 1100
          },
          "16": {
            "id": 16,
            "name": "IN-GT-EW",
            "data": {},
            "class": "SCH",
            "html": "\n <div>\n <div class=\"title-box\"><i class=\"fas fa-code-branch\"></i> IN-GT-EW (16)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Earthwork System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
            "typenode": false,
            "inputs": {},          
            "outputs": {
              "output_1": {
                "connections": [{}]
              },
              "output_2":{
                "connections":[
                  {
                    "node":"11",
                    "output":"input_2"
                  }
                ]
              }
            },
            "pos_x": 140,
            "pos_y": 970
          },
          "17": {
            "id": 17,
            "name": "IN-STR-IN-TUN",
            "data": {},
            "class": "SCH",
            "html": "\n <div>\n <div class=\"title-box\"><i class=\"fas fa-code-branch\"></i> IN-STR-IN-TUN (17)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Tunnel System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
            "typenode": false,
            "inputs": {},          
            "outputs": {
              "output_1": {
                "connections": [{}]
              },
              "output_2":{
                "connections":[
                  {
                    "node":"5",
                    "output":"input_2"
                  }
                ]
              }
            },
            "pos_x": 140,
            "pos_y": 850
          },
          "18": {
            "id": 18,
            "name": "IN-ENV-CFS",
            "data": {},
            "class": "SCH",
            "html": "\n <div>\n <div class=\"title-box\"><i class=\"fas fa-code-branch\"></i> IN-ENV-CFS (18)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Compensatory Flood Storage System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
            "typenode": false,
            "inputs": {},          
            "outputs": {
              "output_1": {
                "connections": [{}]
              },
              "output_2": {
                "connections": [
                  {
                    "node":"1",
                    "output":"input_2"
                  }
                ]
              }
            },
            "pos_x": -320,
            "pos_y": 150
          },
          "19": {
            "id": 19,
            "name": "IN-ENV-LAN-PS",
            "data": {},
            "class": "SCH",
            "html": "\n <div>\n <div class=\"title-box\"><i class=\"fas fa-code-branch\"></i> IN-ENV-LAN-PS (19)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Planting System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
            "typenode": false,
            "inputs": {},          
            "outputs": {
              "output_1": {
                "connections": []
              },
              "output_2":{
                "connections":[
                  {
                    "node":"1",
                    "output":"input_2"
                  }
                ]
              }
            },
            "pos_x": -320,
            "pos_y": 330
          },
          "20": {
            "id": 20,
            "name": "IN-EN-NT",
            "data": {},
            "class": "SCH",
            "html": "\n <div>\n <div class=\"title-box\"><i class=\"fas fa-code-branch\"></i> IN-EN-NT (20)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Non-Traction Power System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
            "typenode": false,
            "inputs": {},          
            "outputs": {
              "output_1": {
                "connections": []
              },
              "output_2":{
                "connections":[
                  {
                    "node":"6",
                    "output":"input_2"
                  }
                ]
              }
            },
            "pos_x": 100,
            "pos_y": -320
          }
    }
}