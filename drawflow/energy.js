var energy = {
  "data": {
    "1": {
      "id": 1,
      "name": "IN-EN",
      "data": {},
      "class": "SCH",
      "html": "\n <div>\n <div class=\"title-box-orange\"><i class=\"fas fa-code-branch\"></i> IN-EN (1)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Power / Energy System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
      "typenode": false,
      "inputs": {},          
      "outputs": {
        "output_1": {
          "connections": [

          ]
        },
        "output_2":{
          "connections":[]
        }
      },
      "pos_x": 207,
      "pos_y": 257
    },
    "2": {
      "id": 2,
      "name": "IN-EN-NT",
      "data": {},
      "class": "SCH",
      "html": "\n <div>\n <div class=\"title-box-darkblue\"><i class=\"fas fa-code-branch\"></i> IN-EN-NT (2)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Non-Traction Power System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
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
            },
            {
              "node":"15",
              "input":"output_2"
            },
            {
              "node":"16",
              "input":"output_2"
            },
            {
              "node":"17",
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
      "pos_x": 602,
      "pos_y": -151
    },
    "3": {
      "id": 3,
      "name": "IN-EN-ACDC",
      "data": {},
      "class": "SCH",
      "html": "\n <div>\n <div class=\"title-box-darkblue\"><i class=\"fas fa-code-branch\"></i> IN-EN-ACDC (3)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  AC/DC Conversion System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
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
      "pos_x": 719,
      "pos_y": 0
    },
    "4": {
      "id": 4,
      "name": "IN-EN-BND",
      "data": {},
      "class": "SCH",
      "html": "\n <div>\n <div class=\"title-box-darkblue\"><i class=\"fas fa-code-branch\"></i> IN-EN-BND (4)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Earthing &amp; Bonding System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
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
      "pos_x": 845,
      "pos_y": 130
    },
    "5": {
      "id": 5,
      "name": "IN-EN-CBL",
      "data": {},
      "class": "SCH",
      "html": "\n <div>\n <div class=\"title-box-darkblue\"><i class=\"fas fa-code-branch\"></i> IN-EN-CBL (5)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  HV/LV Cable System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
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
        "input_2": {
          "connections":[
            {
              "node":"12",
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
      "pos_x": 561,
      "pos_y": 774
    },
    "6": {
      "id": 6,
      "name": "IN-EN-ISO",
      "data": {},
      "class": "SCH",
      "html": "\n <div>\n <div class=\"title-box-darkblue\"><i class=\"fas fa-code-branch\"></i> IN-EN-ISO (6)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Protection/Isolation System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
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
      "pos_x": 1070,
      "pos_y": 220
    },
    "7": {
      "id": 7,
      "name": "IN-EN-PWR",
      "data": {},
      "class": "SCH",
      "html": "\n <div>\n <div class=\"title-box-darkblue\"><i class=\"fas fa-code-branch\"></i> IN-EN-PWR (7)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Power Storage System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
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
      "pos_x": 907,
      "pos_y": 339
    },
    "8": {
      "id": 8,
      "name": "IN-EN-SW",
      "data": {},
      "class": "SCH",
      "html": "\n <div>\n <div class=\"title-box-darkblue\"><i class=\"fas fa-code-branch\"></i> IN-EN-SW (8)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Changeover/Switching System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
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
      "pos_x": 845,
      "pos_y": 451
    },
    "9": {
      "id": 9,
      "name": "IN-EN-TRX",
      "data": {},
      "class": "SCH",
      "html": "\n <div>\n <div class=\"title-box-darkblue\"><i class=\"fas fa-code-branch\"></i> IN-EN-TRX (9)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Transformer System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
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
      "pos_x": 950,
      "pos_y": 586
    },
    "10": {
      "id": 10,
      "name": "IN-EN-FDR",
      "data": {},
      "class": "SCH",
      "html": "\n <div>\n <div class=\"title-box-darkblue\"><i class=\"fas fa-code-branch\"></i> IN-EN-FDR (10)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Feeder Sub-Station System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
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
          "connections": [
            {
              "node":"11",
              "output":"input_1"
            }
          ]
        },
        "output_2":{
          "connections":[]
        }
      },
      "pos_x": 689,
      "pos_y": 638
    },
    "11": {
      "id": 11,
      "name": "IN-EN-FDR-OLE",
      "data": {},
      "class": "SCH",
      "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-EN-FDR-OLE (11)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  OLE System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
      "typenode": false,
      "inputs": {
        "input_1": {
          "connections": [
              {
              "node": "10",
              "input": "output_1"
              }
          ]
        },
        "input_2": {
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
          "connections": []
        },
        "output_2":{
          "connections":[]
        }
      },
      "pos_x": 1044,
      "pos_y": 816
    },
    "12": {
      "id": 12,
      "name": "IN-STR-AUX-WMS",
      "data": {},
      "class": "SCH",
      "html": "\n <div>\n <div class=\"title-box\"><i class=\"fas fa-code-branch\"></i> IN-STR-AUX-WMS (12)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Wall Mounted Support System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
      "typenode": false,
      "inputs": {},          
      "outputs": {
        "output_1": {
          "connections": []
        },
        "output_2": {
          "connections": [
            {
              "node":"5",
              "output":"input_2"
            }
          ]
        }
      },
      "pos_x": 232,
      "pos_y": 832
    },
    "13": {
      "id": 13,
      "name": "IN-STR-AUX-CANT",
      "data": {},
      "class": "SCH",
      "html": "\n <div>\n <div class=\"title-box\"><i class=\"fas fa-code-branch\"></i> IN-STR-AUX-CANT (13)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Cantilever Structure System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
      "typenode": false,
      "inputs": {},          
      "outputs": {
        "output_1": {
          "connections": []
        },
        "output_2":{
          "connections": [
            {
              "node":"11",
              "output":"input_2"
            }
          ]
        }
      },
      "pos_x": 228,
      "pos_y": 977
    },
    "14": {
      "id": 14,
      "name": "IN-DR-BLD-PS",
      "data": {},
      "class": "SCH",
      "html": "\n <div>\n <div class=\"title-box\"><i class=\"fas fa-code-branch\"></i> IN-DR-BLD-PS (14)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Pumping Station System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
      "typenode": false,
      "inputs": {},          
      "outputs": {
        "output_1": {
          "connections": []
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
      "pos_x": -30,
      "pos_y": -270
    },
    "15": {
      "id": 15,
      "name": "IN-DR-HW-PS",
      "data": {},
      "class": "SCH",
      "html": "\n <div>\n <div class=\"title-box\"><i class=\"fas fa-code-branch\"></i> IN-DR-HW-PS (15)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Pumping Station System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
      "typenode": false,
      "inputs": {},          
      "outputs": {
        "output_1": {
          "connections": []
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
      "pos_x": -30,
      "pos_y": -160
    },
    "16": {
      "id": 16,
      "name": "IN-DR-LND-PS",
      "data": {},
      "class": "SCH",
      "html": "\n <div>\n <div class=\"title-box\"><i class=\"fas fa-code-branch\"></i> IN-DR-LND-PS (16)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Pumping Station System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
      "typenode": false,
      "inputs": {},          
      "outputs": {
        "output_1": {"connections": [] },
        "output_2": {"connections": [
            {
              "node":"2",
              "output":"input_2"
            }
          ]
        }
      },
      "pos_x": -30,
      "pos_y": -50
    },
    "17": {
      "id": 17,
      "name": "IN-DR-RL-PS",
      "data": {},
      "class": "SCH",
      "html": "\n <div>\n <div class=\"title-box\"><i class=\"fas fa-code-branch\"></i> IN-DR-RL-PS (17)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Pumping Station System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
      "typenode": false,
      "inputs": {},          
      "outputs": {
        "output_1": {"connections": []},
        "output_2": {"connections": [
          {
            "node":"2",
            "output":"input_2"
          }
        ]}
      },
      "pos_x": -30,
      "pos_y": 50
    }
  }
}
