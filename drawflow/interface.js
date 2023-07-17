var interface = {
    "data": {
        "1": {
            "id": 1,
            "name": "IN-EXT",
            "data": {},
            "class": "SCH",
            "html": "\n <div>\n <div class=\"title-box-orange\"><i class=\"fas fa-code-branch\"></i> IN-EXT (1)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n   External (EWR Interfacing) System \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
            "typenode": false,
            "inputs": {
              "input_1":{
                "connections":[]
              },
              "input_2":{
                "connections":[]
              }
            },          
            "outputs": {
              "output_1": {
                "connections": [{"node":"2","output":"input_1"},
                                {"node":"3","output":"input_1"},
                                {"node":"4","output":"input_1"},
                                {"node":"5","output":"input_1"},
                                {"node":"6","output":"input_1"},
                                {"node":"7","output":"input_1"}]
              },
              "output_2":{
                  "connections":[]
              }
            },
            "pos_x": 200,
            "pos_y": 300
          },
          "2": {
            "id": 2,
            "name": "IN-EXT-HS",
            "data": {},
            "class": "SCH",
            "html": "\n <div>\n <div class=\"title-box-darkblue\"><i class=\"fas fa-code-branch\"></i> IN-EXT-HS (2)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n   Highway Systems \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
            "typenode": false,
            "inputs": {
              "input_1":{
                "connections":[{"node":"1","input":"output_1"}]
              },
              "input_2":{
                "connections":[]
              }
            },          
            "outputs": {
              "output_1": {
                "connections": [{"node":"8","output":"input_1"},
                                {"node":"9","output":"input_1"},
                                {"node":"10","output":"input_1"}]
              },
              "output_2":{
                  "connections":[]
              }
            },
            "pos_x": 600,
            "pos_y": 0
          },
          "8": {
            "id": 8,
            "name": "IN-EXT-HS-RD",
            "data": {},
            "class": "SCH",
            "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-EXT-HS-RD (8)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n   Road Systems \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
            "typenode": false,
            "inputs": {
              "input_1":{
                "connections":[{"node":"2","input":"output_1"}]
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
            "pos_x": 1000,
            "pos_y": -60
          },
          "9": {
            "id": 9,
            "name": "IN-EXT-HS-PRW",
            "data": {},
            "class": "SCH",
            "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-EXT-HS-PRW (9)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  PRoW Systems \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
            "typenode": false,
            "inputs": {
              "input_1":{
                "connections":[{"node":"2","input":"output_1"}]
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
            "pos_x": 1000,
            "pos_y": 65
          },
          "10": {
            "id": 10,
            "name": "IN-EXT-HS-AW",
            "data": {},
            "class": "SCH",
            "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-EXT-HS-AW (10)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Accessway Systems \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
            "typenode": false,
            "inputs": {
              "input_1":{
                "connections":[{"node":"2","input":"output_1"}]
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
            "pos_x": 1000,
            "pos_y": -180
          },
          "3": {
            "id": 3,
            "name": "IN-EXT-US",
            "data": {},
            "class": "SCH",
            "html": "\n <div>\n <div class=\"title-box-darkblue\"><i class=\"fas fa-code-branch\"></i> IN-EXT-US (3)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n   Utility Systems \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
            "typenode": false,
            "inputs": {
              "input_1":{
                "connections":[{"node":"1","input":"output_1"}]
              },
              "input_2":{
                "connections":[]
              }
            },          
            "outputs": {
              "output_1": {
                "connections": [{"node":"11","output":"input_1"},
                                {"node":"12","output":"input_1"},
                                {"node":"13","output":"input_1"},
                                {"node":"14","output":"input_1"},
                                {"node":"15","output":"input_1"},
                                {"node":"16","output":"input_1"},
                                {"node":"17","output":"input_1"}]
              },
              "output_2":{
                  "connections":[]
              }
            },
            "pos_x": 600,
            "pos_y": 430
          },
          "11": {
            "id": 11,
            "name": "IN-EXT-US-GSP",
            "data": {},
            "class": "SCH",
            "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-EXT-US-GSP (11)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n   National Grid - Grid Supply Point (GSP) Systems \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
            "typenode": false,
            "inputs": {
              "input_1":{
                "connections":[{"node":"3","input":"output_1"}]
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
            "pos_x": 1400,
            "pos_y": 0
          },
          "12": {
            "id": 12,
            "name": "IN-EXT-US-DNO",
            "data": {},
            "class": "SCH",
            "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-EXT-US-DNO (12)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n   Distribution Network Operator (DNO) \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
            "typenode": false,
            "inputs": {
              "input_1":{
                "connections":[{"node":"3","input":"output_1"}]
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
            "pos_x": 1400,
            "pos_y": 140
          },
          "13": {
            "id": 13,
            "name": "IN-EXT-US-H2O",
            "data": {},
            "class": "SCH",
            "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-EXT-US-H2O (13)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Water Mains Infrastructure Network \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
            "typenode": false,
            "inputs": {
              "input_1":{
                "connections":[{"node":"3","input":"output_1"}]
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
            "pos_x": 1400,
            "pos_y": 280
          },
          "14": {
            "id": 14,
            "name": "IN-EXT-US-SWR",
            "data": {},
            "class": "SCH",
            "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-EXT-US-SWR (14)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Sewer Mains Infrastructure Network \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
            "typenode": false,
            "inputs": {
              "input_1":{
                "connections":[{"node":"3","input":"output_1"}]
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
            "pos_x": 1400,
            "pos_y": 420
          },
          "15": {
            "id": 15,
            "name": "IN-EXT-US-GAS",
            "data": {},
            "class": "SCH",
            "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-EXT-US-GAS (15)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Gas Infrastructure Network \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
            "typenode": false,
            "inputs": {
              "input_1":{
                "connections":[{"node":"3","input":"output_1"}]
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
            "pos_x": 1400,
            "pos_y": 560
          },
          "16": {
            "id": 16,
            "name": "IN-EXT-US-PC",
            "data": {},
            "class": "SCH",
            "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-EXT-US-PC (16)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Petrochemical Infrastructure Network \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
            "typenode": false,
            "inputs": {
              "input_1":{
                "connections":[{"node":"3","input":"output_1"}]
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
            "pos_x": 1400,
            "pos_y": 700
          },
          "17": {
            "id": 17,
            "name": "IN-EXT-US-PWR",
            "data": {},
            "class": "SCH",
            "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-EXT-US-PWR (17)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Power Infrastructure Network \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
            "typenode": false,
            "inputs": {
              "input_1":{
                "connections":[{"node":"3","input":"output_1"}]
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
            "pos_x": 1400,
            "pos_y": 840
          },
          "4": {
            "id": 4,
            "name": "IN-EXT-RU",
            "data": {},
            "class": "SCH",
            "html": "\n <div>\n <div class=\"title-box-darkblue\"><i class=\"fas fa-code-branch\"></i> IN-EXT-RU (4)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Railway Undertaking Systems \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
            "typenode": false,
            "inputs": {
              "input_1":{
                "connections":[{"node":"1","input":"output_1"}]
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
            "pos_x": 600,
            "pos_y": 920
          },
          "18": {
            "id": 18,
            "name": "IN-EXT-RU-FN",
            "data": {},
            "class": "SCH",
            "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-EXT-RU-FR (18)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Freight Network System \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
            "typenode": false,
            "inputs": {
              "input_1":{
                "connections":[{"node":"4","input":"output_1"}]
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
            "pos_x": 1000,
            "pos_y": 860
          },
          "19": {
            "id": 19,
            "name": "IN-EXT-RU-OC",
            "data": {},
            "class": "SCH",
            "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-EXT-RU-OC (19)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  TOC/FOC Operational &amp; Business Systems \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
            "typenode": false,
            "inputs": {
              "input_1":{
                "connections":[{"node":"4","input":"output_1"}]
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
            "pos_x": 1000,
            "pos_y": 970
          },
          "5": {
            "id": 5,
            "name": "IN-EXT-GBR",
            "data": {},
            "class": "SCH",
            "html": "\n <div>\n <div class=\"title-box-darkblue\"><i class=\"fas fa-code-branch\"></i> IN-EXT-GBR (5)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  NR/GBR Systems \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
            "typenode": false,
            "inputs": {
              "input_1":{
                "connections":[{"node":"1","input":"output_1"}]
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
            "pos_x": 600,
            "pos_y": 200
          },
          "6": {
            "id": 6,
            "name": "IN-EXT-HS2",
            "data": {},
            "class": "SCH",
            "html": "\n <div>\n <div class=\"title-box-darkblue\"><i class=\"fas fa-code-branch\"></i> IN-EXT-HS2 (6)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  HS2 Rail Systems \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
            "typenode": false,
            "inputs": {
              "input_1":{
                "connections":[{"node":"1","input":"output_1"}]
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
            "pos_x": 600,
            "pos_y": 660
          },
          "7": {
            "id": 7,
            "name": "IN-EXT-3RD",
            "data": {},
            "class": "SCH",
            "html": "\n <div>\n <div class=\"title-box-darkblue\"><i class=\"fas fa-code-branch\"></i> IN-EXT-3RD (7)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Third Party Systems \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
            "typenode": false,
            "inputs": {
              "input_1":{
                "connections":[{"node":"1","input":"output_1"}]
              },
              "input_2":{
                "connections":[]
              }
            },          
            "outputs": {
              "output_1": {
                "connections": [{"node":"20","output":"input_1"},
                                {"node":"21","output":"input_1"},
                                {"node":"22","output":"input_1"},
                                {"node":"23","output":"input_1"},
                                {"node":"24","output":"input_1"}]
              },
              "output_2":{
                  "connections":[]
              }
            },
            "pos_x": 600,
            "pos_y": 1300
          },
          "20": {
            "id": 20,
            "name": "IN-EXT-3RD-TEL",
            "data": {},
            "class": "SCH",
            "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-EXT-3RD-TEL (20)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Telecoms Infrastructure Network \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
            "typenode": false,
            "inputs": {
              "input_1":{
                "connections":[{"node":"7","input":"output_1"}]
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
            "pos_x": 1400,
            "pos_y": 1030
          },
          "21": {
            "id": 21,
            "name": "IN-EXT-3RD-ATM",
            "data": {},
            "class": "SCH",
            "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-EXT-3RD-ATM (21)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Adjacent Transport Mode Systems (Road/Sea/Air) \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
            "typenode": false,
            "inputs": {
              "input_1":{
                "connections":[{"node":"7","input":"output_1"}]
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
            "pos_x": 1400,
            "pos_y": 1170
          },
          "22": {
            "id": 22,
            "name": "IN-EXT-3RD-WF",
            "data": {},
            "class": "SCH",
            "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-EXT-3RD-WF (23)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Weather Forecasting Systems \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
            "typenode": false,
            "inputs": {
              "input_1":{
                "connections":[{"node":"7","input":"output_1"}]
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
            "pos_x": 1400,
            "pos_y": 1300
          },
          "23": {
            "id": 23,
            "name": "IN-EXT-3RD-ISP",
            "data": {},
            "class": "SCH",
            "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-EXT-3RD-ISP (24)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  ISP Systems \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
            "typenode": false,
            "inputs": {
              "input_1":{
                "connections":[{"node":"7","input":"output_1"}]
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
            "pos_x": 1400,
            "pos_y": 1440
          },
          "24": {
            "id": 24,
            "name": "IN-EXT-3RD-FH",
            "data": {},
            "class": "SCH",
            "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-EXT-3RD-FH (25)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Fire Hydrant Mains Systems \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
            "typenode": false,
            "inputs": {
              "input_1":{
                "connections":[{"node":"7","input":"output_1"}]
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
            "pos_x": 1400,
            "pos_y": 1550
          }
    }
}