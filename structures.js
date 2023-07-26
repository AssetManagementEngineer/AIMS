var structures = {
    "data": {
        "105": {
          "id": 105,
          "name": "IN-STR",
          "data": {},
          "class": "SCH",
          "html": "\n <div>\n <div class=\"title-box-orange\"><i class=\"fas fa-code-branch\"></i> IN-STR (105)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Civils &amp; Structures System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
          "typenode": false,
          "inputs": {},          
          "outputs": {
            "output_1": {
              "connections": [
                {
                  "node":"106",
                  "output":"input_1"
                },
                {
                  "node":"107",
                  "output":"input_1"
                }
              ]
            },
            "output_2":{
              "connections":[]
            }
          },
          "pos_x": 200,
          "pos_y": 453
        },
        "106": {
          "id": 106,
          "name": "IN-STR-SUP",
          "data": {},
          "class": "SCH",
          "html": "\n <div>\n <div class=\"title-box-darkblue\"><i class=\"fas fa-code-branch\"></i> IN-STR-SUP (106)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Support Structures System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
          "typenode": false,
          "inputs": {
            "input_1": {
              "connections": [
                 {
                  "node": "105",
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
                  "node":"108",
                  "output":"input_1"
                },
                {
                  "node": "109",
                  "output": "input_1"
                 },
                {
                  "node": "110",
                  "output": "input_1"
                 },
                {
                  "node": "111",
                  "output": "input_1"
                 },
                {
                  "node": "112",
                  "output": "input_1"
                 },
                {
                  "node": "113",
                  "output": "input_1"
                 }
              ]
            },
            "output_2":{
              "connections":[]
            }
          },
          "pos_x": 570,
          "pos_y": 370
        },
        "107": {
          "id": 107,
          "name": "IN-STR-IN",
          "data": {},
          "class": "SCH",
          "html": "\n <div>\n <div class=\"title-box-darkblue\"><i class=\"fas fa-code-branch\"></i> IN-STR-IN (107)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Intersection System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
          "typenode": false,
          "inputs": {
            "input_1": {
              "connections": [
                 {
                  "node": "105",
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
                  "node":"114",
                  "output":"input_1"
                },
                {
                  "node":"115",
                  "output":"input_1"
                },
                {
                  "node":"116",
                  "output":"input_1"
                },
                {
                  "node":"117",
                  "output":"input_1"
                },
                {
                  "node":"118",
                  "output":"input_1"
                },
                {
                  "node":"119",
                  "output":"input_1"
                }
              ]
            },
            "output_2":{
              "connections":[]
            }
          },
          "pos_x": 580,
          "pos_y": 530
        },
        "108": {
          "id": 108,
          "name": "IN-STR-SUP-CANT",
          "data": {},
          "class": "SCH",
          "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-STR-SUP-CANT (108)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Cantilever Structure System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
          "typenode": false,
          "inputs": {
            "input_1": {
              "connections": [
                 {
                  "node": "106",
                  "input": "output_1"
                 }
              ]
            },
            "input_2":{
              "connections":[
                {
                  "node":"11",
                  "input":"output_2"
                }
              ]
            }
          },          
          "outputs": {
            "output_1": {
              "connections": [{}]
            },
            "output_2":{
              "connections": [
                {
                  "node":"89",
                  "output":"input_2"
                }
              ]
            }
          },
          "pos_x": 960,
          "pos_y": 160
        },
        "109": {
          "id": 109,
          "name": "IN-STR-SUP-FDT",
          "data": {},
          "class": "SCH",
          "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-STR-SUP-FDT (109)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Structural Base / Foundation System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
          "typenode": false,
          "inputs": {
            "input_1": {
              "connections": [
                 {
                  "node": "106",
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
          "pos_x": 1330,
          "pos_y": 20
        },
        "110": {
          "id": 110,
          "name": "IN-STR-SUP-GNT",
          "data": {},
          "class": "SCH",
          "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-STR-SUP-GNT (110)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Gantry System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
          "typenode": false,
          "inputs": {
            "input_1": {
              "connections": [
                 {
                  "node": "106",
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
              "connections": [{}]
            },
            "output_2": {
              "connections": [
                {
                  "node":"60",
                  "output":"input_2"
                }
              ]
            }
          },
          "pos_x": 960,
          "pos_y": 50
        },
        "111": {
          "id": 111,
          "name": "IN-STR-SUP-MAST",
          "data": {},
          "class": "SCH",
          "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-STR-SUP-MAST (111)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Tower / Mast Structure System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
          "typenode": false,
          "inputs": {
            "input_1": {
              "connections": [
                 {
                  "node": "106",
                  "input": "output_1"
                 }
              ]
            },
            "input_2":{
              "connections":[{"node":"102","input":"output_2"}]
            }
          },          
          "outputs": {
            "output_1": {
              "connections": [{}]
            },
            "output_2" : {
              "connections":[
              {
                  "node":"123",
                  "output":"input_2"
                }
              ]
            }
          },
          "pos_x": 1320,
          "pos_y": 150
        },
        "112": {
          "id": 112,
          "name": "IN-STR-SUP-POST",
          "data": {},
          "class": "SCH",
          "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-STR-SUP-POST (112)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Column / Post System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
          "typenode": false,
          "inputs": {
            "input_1": {
              "connections": [
                 {
                  "node": "106",
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
          "pos_x": 1320,
          "pos_y": 280
        },
        "113": {
          "id": 113,
          "name": "IN-STR-SUP-CMS",
          "data": {},
          "class": "SCH",
          "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-STR-SUP-CMS (113)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Cable Management System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
          "typenode": false,
          "inputs": {
            "input_1": {
              "connections": [
                 {
                  "node": "106",
                  "input": "output_1"
                 }
              ]
            },
            "input_2":{
              "connections":[
                {
                  "node":"7",
                  "input":"output_2"
                },
                {
                  "node":"103",
                  "input":"output_2"
                }
              ]
            }
          },          
          "outputs": {
            "output_1": {
              "connections": [{}]
            },
            "output_2": {
              "connections": []
            }
          },
          "pos_x": 960,
          "pos_y": 300
        },
        "114": {
          "id": 114,
          "name": "IN-STR-IN-BND",
          "data": {},
          "class": "SCH",
          "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-STR-IN-BND (114)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Boundary Protection System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
          "typenode": false,
          "inputs": {
            "input_1": {
              "connections": [
                 {
                  "node": "107",
                  "input": "output_1"
                 }
              ]
            },
            "input_2":{
              "connections":[
                {
                  "node":"4",
                  "input":"output_2"
                },
                {
                  "node":"10",
                  "input":"output_2"
                }
              ]
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
          "pos_x": 960,
          "pos_y": 620
        },
        "115": {
          "id": 115,
          "name": "IN-STR-IN-BRG",
          "data": {},
          "class": "SCH",
          "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-STR-IN-BRG (115)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Bridge System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
          "typenode": false,
          "inputs": {
            "input_1": {
              "connections": [
                 {
                  "node": "107",
                  "input": "output_1"
                 }
              ]
            },
            "input_2":{
              "connections":[
                {
                  "node":"10",
                  "input":"output_2"
                },
                {
                  "node":"101",
                  "input":"output_2"
                }
              ]
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
          "pos_x": 960,
          "pos_y": 980
        },
        "116": {
          "id": 116,
          "name": "IN-STR-IN-LVL",
          "data": {},
          "class": "SCH",
          "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-STR-IN-LVL (116)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Level Crossing System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
          "typenode": false,
          "inputs": {
            "input_1": {
              "connections": [
                 {
                  "node": "107",
                  "input": "output_1"
                 }
              ]
            },
            "input_2":{
              "connections":[{
                "node":"2",
                "input":"output_2"
              }]
            }
          },          
          "outputs": {
            "output_1": {
              "connections": [{}]
            },
            "output_2": {
              "connections": [
                {
                  "node": "13",
                  "output":"input_2"
                }
              ]
            }
          },
          "pos_x": 960,
          "pos_y": 870
        },
        "117": {
          "id": 117,
          "name": "IN-STR-IN-RW",
          "data": {},
          "class": "SCH",
          "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-STR-IN-RW (117)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Retaining Wall System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
          "typenode": false,
          "inputs": {
            "input_1": {
              "connections": [
                 {
                  "node": "107",
                  "input": "output_1"
                 }
              ]
            },
            "input_2":{
              "connections":[
                {
                  "node":"101",
                  "input":"output_2"
                }
              ]
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
          "pos_x": 960,
          "pos_y": 1080
        },
        "118": {
          "id": 118,
          "name": "IN-STR-IN-TUN",
          "data": {},
          "class": "SCH",
          "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-STR-IN-TUN (118)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Tunnel System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
          "typenode": false,
          "inputs": {
            "input_1": {
              "connections": [
                 {
                  "node": "107",
                  "input": "output_1"
                 }
              ]
            },
            "input_2":{
              "connections":[
                {
                  "node":"5",
                  "input":"output_2"
                }
              ]
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
          "pos_x": 960,
          "pos_y": 750
        },
        "119": {
          "id": 119,
          "name": "IN-STR-IN-PLF",
          "data": {},
          "class": "SCH",
          "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-STR-IN-PLF (119)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Platform System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
          "typenode": false,
          "inputs": {
            "input_1": {
              "connections": [
                 {
                  "node": "107",
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
          "pos_x": 960,
          "pos_y": 510
        },
        "2": {
          "id": 2,
          "name": "IN-CCS-SIG",
          "data": {},
          "class": "SCH",
          "html": "\n <div>\n <div class=\"title-box\"><i class=\"fas fa-code-branch\"></i> IN-CCS-SIG (2)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Conventional Signalling System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
          "typenode": false,
          "inputs": {},          
          "outputs": {
            "output_1": {
              "connections": [{}]
            },
            "output_2":{
              "connections":[
                {
                "node":"116",
                "output":"input_2"
                }
              ]
            }
          },
          "pos_x": 200,
          "pos_y": 1000
        },
        "13": {
          "id": 13,
          "name": "IN-CCS-SIG-SS",
          "data": {},
          "class": "SCH",
          "html": "\n <div>\n <div class=\"title-box\"><i class=\"fas fa-code-branch\"></i> IN-CCS-SIG-SS (13)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n Signals &amp; Signs System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
          "typenode": false,
          "inputs": {},          
          "outputs": {"output_1":{"connections":[]},
                      "output_2":{
                        "connections":[
                          {
                            "node":"110",
                            "output":"input_2"
                          }
                        ]}},
          "pos_x": 200,
          "pos_y": -150
        },
        "5": {
          "id": 5,
          "name": "IN-DR-RL",
          "data": {},
          "class": "SCH",
          "html": "\n <div>\n <div class=\"title-box\"><i class=\"fas fa-code-branch\"></i> IN-DR-RL (5)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Railway Drainage System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
          "typenode": false,
          "inputs": {},          
          "outputs": {
            "output_1": { "connections": [] },
            "output_2":{
              "connections":[
                {
                  "node":"118",
                  "output":"input_2"
                }
              ]
            }
          },
          "pos_x": 200,
          "pos_y": 1130
        },
        "10": {
          "id": 10,
          "name": "IN-DR-RL-STR",
          "data": {},
          "class": "SCH",
          "html": "\n <div>\n <div class=\"title-box\"><i class=\"fas fa-code-branch\"></i> IN-DR-RL-STR (10)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Civils &amp; Structures Drainage System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
          "typenode": false,
          "inputs": {},          
          "outputs": {
            "output_1": {
              "connections": []
            },
            "output_2":{
              "connections":[
                {
                  "node":"115",
                  "output":"input_2"
                }
              ]
            }
          },
          "pos_x": 200,
          "pos_y": 1240
        },
        "7": {
          "id": 7,
          "name": "IN-EN-CBL",
          "data": {},
          "class": "SCH",
          "html": "\n <div>\n <div class=\"title-box\"><i class=\"fas fa-code-branch\"></i> IN-EN-CBL (7)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  HV/LV Cable System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
          "typenode": false,
          "inputs": {},          
          "outputs": {
            "output_1": {
              "connections": []
            },
            "output_2":{
              "connections":[
                {
                  "node":"113",
                  "output":"input_2"
                }
              ]
            }
          },
          "pos_x": 200,
          "pos_y": 75
        },
        "11": {
          "id": 11,
          "name": "IN-EN-TRP-OLE",
          "data": {},
          "class": "SCH",
          "html": "\n <div>\n <div class=\"title-box\"><i class=\"fas fa-code-branch\"></i> IN-EN-TRP-OLE (11)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  OLE System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
          "typenode": false,
          "inputs": {},          
          "outputs": {
            "output_1": {
              "connections": []
            },
            "output_2":{
              "connections":[
                {
                  "node":"108",
                  "output":"input_2"
                }
              ]
            }
          },
          "pos_x": 200,
          "pos_y": -30
        },
        "4": {
          "id": 4,
          "name": "IN-ENV-LAN-PS",
          "data": {},
          "class": "SCH",
          "html": "\n <div>\n <div class=\"title-box\"><i class=\"fas fa-code-branch\"></i> IN-ENV-LAN-PS (4)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Planting System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
          "typenode": false,
          "inputs": {},          
          "outputs": {
            "output_1": {
              "connections": []
            },
            "output_2":{
              "connections":[
                {
                  "node":"114",
                  "output":"input_2"
                }
              ]
            }
          },
          "pos_x": 200,
          "pos_y": 875
        },
        "10": {
          "id": 10,
          "name": "IN-ENV-NM",
          "data": {},
          "class": "SCH",
          "html": "\n <div>\n <div class=\"title-box\"><i class=\"fas fa-code-branch\"></i> IN-ENV-NM (10)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Noise Mitigation System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
          "typenode": false,
          "inputs": {},          
          "outputs": {
            "output_1": {
              "connections": []
            },
            "output_2": {
              "connections": [
                {
                  "node":"114",
                  "output":"input_2"
                }
              ]
            }
          },
          "pos_x": 200,
          "pos_y": 760
        },
        "101": {
          "id": 101,
          "name": "IN-GT-EW",
          "data": {},
          "class": "SCH",
          "html": "\n <div>\n <div class=\"title-box\"><i class=\"fas fa-code-branch\"></i> IN-GT-EW (101)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Earthwork System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
          "typenode": false,
          "inputs": {},          
          "outputs": {
            "output_1": {"connections": [] },
            "output_2" :{
              "connections":[
                {
                  "node":"115",
                  "output":"input_2"
                },
                {
                  "node":"117",
                  "output":"input_2"
                }
              ]
            }
          },
          "pos_x": 200,
          "pos_y": 1250
        },
        "102": {
          "id": 102,
          "name": "IN-BLD-ANC-REB",
          "data": {},
          "class": "SCH",
          "html": "\n <div>\n <div class=\"title-box\"><i class=\"fas fa-code-branch\"></i> IN-BLD-ANC-REB (102)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Relocatable Equipment Building (REB) System \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
          "typenode": false,
          "inputs": {},          
          "outputs": {
            "output_1": {
              "connections": []
            },
            "output_2":{
                "connections":[{"node":"111","output":"input_2"}]
            }
          },
          "pos_x": -200,
          "pos_y": 260
        },
        "103": {
          "id": 103,
          "name": "IN-CCS",
          "data": {},
          "class": "SCH",
          "html": "\n <div>\n <div class=\"title-box\"><i class=\"fas fa-code-branch\"></i> IN-CCS (103)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Command, Control &amp; Signalling System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
          "typenode": false,
          "inputs": {},          
          "outputs": {
            "output_1": {
              "connections": []
            },
            "output_2":{"connections":[{"node":"113","output":"input_2"}]}
          },
          "pos_x": 200,
          "pos_y": 180
        }
    }
}