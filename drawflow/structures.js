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
          "name": "IN-STR-AUX",
          "data": {},
          "class": "SCH",
          "html": "\n <div>\n <div class=\"title-box-darkblue\"><i class=\"fas fa-code-branch\"></i> IN-STR-AUX (106)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Auxiliary Structures System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
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
          "pos_x": 584,
          "pos_y": 160
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
                }
              ]
            },
            "output_2":{
              "connections":[]
            }
          },
          "pos_x": 584,
          "pos_y": 760
        },
        "108": {
          "id": 108,
          "name": "IN-STR-AUX-CANT",
          "data": {},
          "class": "SCH",
          "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-STR-AUX-CANT (108)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Cantilever Structure System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
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
          "name": "IN-STR-AUX-FDT",
          "data": {},
          "class": "SCH",
          "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-STR-AUX-FDT (109)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Structural Base / Foundation System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
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
          "pos_x": 960,
          "pos_y": -10
        },
        "110": {
          "id": 110,
          "name": "IN-STR-AUX-GNT",
          "data": {},
          "class": "SCH",
          "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-STR-AUX-GNT (110)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Gantry System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
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
            "output_2": {
              "connections": [
                {
                  "node":"60",
                  "output":"input_2"
                }
              ]
            }
          },
          "pos_x": 1320,
          "pos_y": -10
        },
        "111": {
          "id": 111,
          "name": "IN-STR-AUX-MAST",
          "data": {},
          "class": "SCH",
          "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-STR-AUX-MAST (111)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Tower / Mast Structure System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
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
            "output_2" : {
              "connections":[
              {
                  "node":"123",
                  "output":"input_2"
                }
              ]
            }
          },
          "pos_x": 960,
          "pos_y": 300
        },
        "112": {
          "id": 112,
          "name": "IN-STR-AUX-POST",
          "data": {},
          "class": "SCH",
          "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-STR-AUX-POST (112)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Column / Post System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
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
          "pos_y": 300
        },
        "113": {
          "id": 113,
          "name": "IN-STR-AUX-WMS",
          "data": {},
          "class": "SCH",
          "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-STR-AUX-WMS (113)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Wall Mounted Support System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
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
            "output_2": {
              "connections": [
                {
                  "node":"86",
                  "output":"input_2"
                },
                {
                  "node":"72",
                  "output":"input_2"
                },
                {
                  "node":"79",
                  "output":"input_2"
                }
              ]
            }
          },
          "pos_x": 1320,
          "pos_y": 160
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
          "pos_y": 700
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
              "connections":[]
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
          "pos_y": 760
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
          "pos_y": 850
        }
    }
}