var energy = {
  "data": {
    "1": {
      "id": 1,
      "name": "IN-EN",
      "data": {},
      "class": "SCH",
      "html": "\n <div>\n <div class=\"title-box-orange\"><i class=\"fas fa-code-branch\"></i> IN-EN (1)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Power / Energy System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
      "typenode": false,
      "inputs": {
        "input_1":{"connections":[]},
        "input_2":{"connections":[{"node":"20","input":"output_2"},
                                  {"node":"21","input":"output_2"},
                                  {"node":"22","input":"output_2"},
                                  {"node":"23","input":"output_2"}]}
      },          
      "outputs": {
        "output_1": {
          "connections": [{"node":"2","output":"input_1"},
                          {"node":"3","output":"input_1"},
                          {"node":"4","output":"input_1"},
                          {"node":"5","output":"input_1"},
                          {"node":"6","output":"input_1"},
                          {"node":"7","output":"input_1"},
                          {"node":"8","output":"input_1"},
                          {"node":"9","output":"input_1"},
                          {"node":"10","output":"input_1"}
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
      "pos_x": 530,
      "pos_y": -250
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
      "pos_x": 720,
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
      "pos_x": 850,
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
      "pos_x": 560,
      "pos_y": 780
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
      "pos_x": 1130,
      "pos_y": 220
    },
    "7": {
      "id": 7,
      "name": "IN-EN-STO",
      "data": {},
      "class": "SCH",
      "html": "\n <div>\n <div class=\"title-box-darkblue\"><i class=\"fas fa-code-branch\"></i> IN-EN-STO (7)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Power Storage System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
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
      "pos_x": 630,
      "pos_y": -120
    },
    "8": {
      "id": 8,
      "name": "IN-EN-LV",
      "data": {},
      "class": "SCH",
      "html": "\n <div>\n <div class=\"title-box-darkblue\"><i class=\"fas fa-code-branch\"></i> IN-EN-LV (8)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  LV Distribution Power System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
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
          "connections": [{"node":"18","output":"input_1"}]
        },
        "output_2":{
          "connections":[]
        }
      },
      "pos_x": 840,
      "pos_y": 330
    },
    "9": {
      "id": 9,
      "name": "IN-EN-NTP",
      "data": {},
      "class": "SCH",
      "html": "\n <div>\n <div class=\"title-box-darkblue\"><i class=\"fas fa-code-branch\"></i> IN-EN-NTP (9)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  HV Non Traction Power System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
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
          "connections": [{"node":"19","output":"input_1"}]
        },
        "output_2":{
          "connections":[]
        }
      },
      "pos_x": 870,
      "pos_y": 480
    },
    "10": {
      "id": 10,
      "name": "IN-EN-TRP",
      "data": {},
      "class": "SCH",
      "html": "\n <div>\n <div class=\"title-box-darkblue\"><i class=\"fas fa-code-branch\"></i> IN-EN-TRP (10)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  HV Traction Power System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
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
      "pos_x": 690,
      "pos_y": 640
    },
    "11": {
      "id": 11,
      "name": "IN-EN-TRP-OLE",
      "data": {},
      "class": "SCH",
      "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-EN-TRP-OLE (11)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  OLE System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
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
      "pos_x": 1050,
      "pos_y": 820
    },
    "12": {
      "id": 12,
      "name": "IN-STR-SUP-CMS",
      "data": {},
      "class": "SCH",
      "html": "\n <div>\n <div class=\"title-box\"><i class=\"fas fa-code-branch\"></i> IN-STR-SUP-CMS (12)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Cable Management System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
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
      "pos_x": -200,
      "pos_y": 830
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
      "pos_x": -200,
      "pos_y": 970
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
      "pos_x": -200,
      "pos_y": -270
    },
    "18": {
      "id": 18,
      "name": "IN-EN-LV-RP",
      "data": {},
      "class": "SCH",
      "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-EN-LV-RP (18)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Renewable Power System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
      "typenode": false,
      "inputs": {
        "input_1": {
          "connections": [
              {
              "node": "8",
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
      "pos_x": 1200,
      "pos_y": 400
    },
    "19": {
      "id": 19,
      "name": "IN-EN-NTP-VC",
      "data": {},
      "class": "SCH",
      "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-EN-NTP-VC (19)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Vehicle Charging System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
      "typenode": false,
      "inputs": {
        "input_1": {
          "connections": [
              {
              "node": "9",
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
      "pos_x": 1200,
      "pos_y": 570
    },
    "20": {
      "id": 20,
      "name": "IN-EXT-US-GSP",
      "data": {},
      "class": "SCH",
      "html": "\n <div>\n <div class=\"title-box\"><i class=\"fas fa-code-branch\"></i> IN-EXT-US-GSP (20)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n   National Grid - Grid Supply Point (GSP) Systems \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
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
      "pos_y": 0
    },
    "21": {
      "id": 21,
      "name": "IN-EXT-US-DNO",
      "data": {},
      "class": "SCH",
      "html": "\n <div>\n <div class=\"title-box\"><i class=\"fas fa-code-branch\"></i> IN-EXT-US-DNO (21)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n   Distribution Network Operator (DNO) \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
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
      "pos_y": 140
    },
    "22": {
      "id": 22,
      "name": "IN-EXT-US-PWR",
      "data": {},
      "class": "SCH",
      "html": "\n <div>\n <div class=\"title-box\"><i class=\"fas fa-code-branch\"></i> IN-EXT-US-PWR (22)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Power Infrastructure Network \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
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
      "pos_y": 280
    },
    "23": {
      "id": 23,
      "name": "IN-BLD-ANC-SUB",
      "data": {},
      "class": "SCH",
      "html": "\n <div>\n <div class=\"title-box\"><i class=\"fas fa-code-branch\"></i> IN-BLD-ANC-SUB (23)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Substation System \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
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
      "pos_y": 420
    }
  }
}
