var home= {
    "data": {
      "1": {
        "id": 1,
        "name": "IN",
        "data": {},
        "class": "SCH",
        "html": "\n <div> \n  <div class=\"title-box\"><i class=\"fas  fa-code-branch\"></i> IN (1)</div>\n  <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n   Infrastructure Systems \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>\n  Change your variable {name} !\n  <input type=\"text\" df-name>\n  </div>\n </div>\n  </div>\n  </div>\n ",
        "typenode": false,
        "inputs": {},
        "outputs": {
          "output_1": {
            "connections": [
              {
                "node": "2",
                "output": "input_1"
              },
              {
                "node": "4",
                "output": "input_1"
              },
              {
                "node": "12",
                "output": "input_1"
              },
              {
                "node": "16",
                "output": "input_1"
              },
              {
                "node": "21",
                "output": "input_1"
              },
              {
                "node": "25",
                "output": "input_1"
              },
              {
                "node": "29",
                "output": "input_1"
              },
              {
                "node": "100",
                "output": "input_1"
              },
              {
                "node": "105",
                "output": "input_1"
              },
              {
                "node": "119",
                "output": "input_1"
              }
            ]
          }
        },
        "pos_x":-532,
        "pos_y": 1507
      },
      "2": {
        "id": 2,
        "name": "IN-BLD",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box\"><i class=\"fas fa-code-branch\"></i> IN-BLD (2)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n   Bulidings &amp; Stations System \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1": {
            "connections": [
              {
                "node": "1",
                "input": "output_1"
              }
            ]
          }
        },          
        "outputs": {
          "output_1": {
            "connections": [
              {
              "node": "3",
              "output": "input_1"
             },
             {
              "node": "5",
              "output": "input_1"
             },
             {
              "node": "6",
              "output": "input_1"
             },
             {
              "node": "7",
              "output": "input_1"
             },
             {
              "node": "8",
              "output": "input_1"
             }
        ]
          }
        },
        "pos_x": 207,
        "pos_y": 207
      },
      "3": {
        "id": 3,
        "name": "IN-BLD-ST",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box\"><i class=\"fas fa-code-branch\"></i> IN-BLD-ST (3)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n   Station System \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1": {
            "connections": [
              {
                "node": "2",
                "input": "output_1"
              }
            ]
          }
        },          
        "outputs": {
          "output_1": {
            "connections":[
              {
              "node":"44",
              "output": "input_1"
            },
            {
              "node":"45",
              "output": "input_1"
            },
            {
              "node":"46",
              "output": "input_1"
            },
            {
              "node":"47",
              "output": "input_1"
            }
          ]
          },
          "output_2": {
            "connections":[
              {
              "node":"9",
              "output": "input_2"
            },
            {
              "node":"51",
              "output": "input_2"
            }
          ]
          }
        },
        "pos_x": 755,
        "pos_y": 575
      },
      "4": {
        "id": 4,
        "name": "IN-CU",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box\"><i class=\"fas fa-code-branch\"></i> IN-CU (4)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n   Customer System \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1": {
            "connections": [
               {"node": "1",
                "input": "output_1"
               }
            ]
          }
        },          
        "outputs": {
          "output_1": {
            "connections": [
              {
              "node": "9",
              "output":"input_1"
            } , 
            {
              "node": "10",
              "output":"input_1"
            }, 
            {
              "node": "11",
              "output":"input_1"
            } 
          ]
          }
        },
        "pos_x": 207,
        "pos_y": 784
      },
      "5": {
        "id": 5,
        "name": "IN-BLD-ANC",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box\"><i class=\"fas fa-code-branch\"></i> IN-BLD-ANC (5)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Anciliary Building System \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1": {
            "connections": [
               {
                "node": "2",
                "input": "output_1"
               }
            ]
          }
        },          
        "outputs": {
          "output_1": {
            "connections": [
              {
                "node":"35",
                "output":"input_1"
              },
              {
                "node":"36",
                "output":"input_1"
              } 
            ]
          }
        },
        "pos_x": 748,
        "pos_y": 66
      },
      "6": {
        "id": 6,
        "name": "IN-BLD-DPT",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box\"><i class=\"fas fa-code-branch\"></i> IN-BLD-DPT (6)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Depot Building System \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1": {
            "connections": [
               {
                "node": "2",
                "input": "output_1"
               }
            ]
          }
        },          
        "outputs": {
          "output_1": {
            "connections": [
              {
                "node":"37",
                "output":"input_1"
              },
              {
                "node":"38",
                "output":"input_1"
              },
              {
                "node":"39",
                "output":"input_1"
              }
            ]
          }
        },
        "pos_x": 1001,
        "pos_y": 127
      },
      "7": {
        "id": 7,
        "name": "IN-BLD-FRS",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box\"><i class=\"fas fa-code-branch\"></i> IN-BLD-FRS (7)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Freight Site System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1": {
            "connections": [
               {
                "node": "2",
                "input": "output_1"
               }
            ]
          }
        },          
        "outputs": {
          "output_1": {
            "connections": [
              {
                "node":"40",
                "output":"input_1"
              },
              {
                "node":"41",
                "output":"input_1"
              }
            ]
          }
        },
        "pos_x": 750,
        "pos_y": 223
      },
      "8": {
        "id": 8,
        "name": "IN-BLD-NMC",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box\"><i class=\"fas fa-code-branch\"></i> IN-BLD-NMC (8)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Network Management Control Centre System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1": {
            "connections": [
               {
                "node": "2",
                "input": "output_1"
               }
            ]
          }
        },          
        "outputs": {
          "output_1": {
            "connections": [
              {
                "node": "42",
                "output": "input_1"
              },
              {
                "node": "43",
                "output": "input_1"
              } 
            ]
          },
          "output_2": {
            "connections": [
              {
                "node":"15",
                "output":"input_2"
              } 
            ]
          }
        },
        "pos_x": 757,
        "pos_y": 360
      },
      "9": {
        "id": 9,
        "name": "IN-CU-FT",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box\"><i class=\"fas fa-code-branch\"></i> IN-CU-FT (9)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Fare Transaction System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1": {
            "connections": [
               {
                "node": "4",
                "input": "output_1"
               }
            ]
          },
          "input_2": {
            "connections": [
               {
                "node": "3",
                "input": "output_2"
               }
            ]
          }
        },          
        "outputs": {
          "output_1": {
            "connections": [
              {
                "node":"48",
                "output":"input_1"
              },
              {
                "node":"49",
                "output":"input_1"
              } 
            ]
          }
        },
        "pos_x": 2000,
        "pos_y": 918
      },
      "10": {
        "id": 10,
        "name": "IN-CU-IN",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box\"><i class=\"fas fa-code-branch\"></i> IN-CU-IN (10)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Customer Information System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1": {
            "connections": [
               {
                "node": "4",
                "input": "output_1"
               }
            ]
          }
        },          
        "outputs": {
          "output_1": {
            "connections": [
              {
                "node":"50",
                "output":"input_1"
              },
              {
                "node":"51",
                "output":"input_1"
              } 
            ]
          }
        },
        "pos_x": 1992,
        "pos_y": 766
      },
      "11": {
        "id": 11,
        "name": "IN-CU-JRN",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box\"><i class=\"fas fa-code-branch\"></i> IN-CU-JRN (11)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Customer Journey Planning System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1": {
            "connections": [
               {
                "node": "4",
                "input": "output_1"
               }
            ]
          }
        },          
        "outputs": {
          "output_1": {
            "connections": [{} ]
          }
        },
        "pos_x": 2332,
        "pos_y": 849
      },
      "12": {
        "id": 12,
        "name": "IN-CCS",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box\"><i class=\"fas fa-code-branch\"></i> IN-CCS (12)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Command, Control &amp; Signalling System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1": {
            "connections": [
               {
                "node": "1",
                "input": "output_1"
               }
            ]
          }
        },          
        "outputs": {
          "output_1": {
            "connections": [
              {
                "node":"13",
                "output":"input_1"
              } ,
              {
                "node":"14",
                "output":"input_1"
              } ,
              {
                "node":"15",
                "output":"input_1"
              } 
            ]
          }
        },
        "pos_x": 207,
        "pos_y": 1012
      },
      "13": {
        "id": 13,
        "name": "IN-CCS-SIG",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box\"><i class=\"fas fa-code-branch\"></i> IN-CCS-SIG (13)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Conventional Signalling System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1": {
            "connections": [
               {
                "node": "12",
                "input": "output_1"
               }
            ]
          },
          "input_2": {
            "connections": [
               {
                "node": "116",
                "input": "output_2"
               }
            ]
          }
        },          
        "outputs": {
          "output_1": {
            "connections": [
              {
                "node":"55",
                "output":"input_1"
              },
              {
                "node":"56",
                "output":"input_1"
              },
              {
                "node":"57",
                "output":"input_1"
              },
              {
                "node":"58",
                "output":"input_1"
              },
              {
                "node":"59",
                "output":"input_1"
              },
              {
                "node":"60",
                "output":"input_1"
              },
              {
                "node":"61",
                "output":"input_1"
              },
              {
                "node":"62",
                "output":"input_1"
              },
              {
                "node":"63",
                "output":"input_1"
              }
            ]
          }
        },
        "pos_x": 763,
        "pos_y": 1107
      },
      "14": {
        "id": 14,
        "name": "IN-CCS-TCS",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box\"><i class=\"fas fa-code-branch\"></i> IN-CCS-TCS (14)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  ETCS System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1": {
            "connections": [
               {
                "node": "12",
                "input": "output_1"
               }
            ]
          }
        },          
        "outputs": {
          "output_1": {
            "connections": [
              {
                "node":"53",
                "output":"input_1"
              },
              {
                "node":"54",
                "output":"input_1"
              }
             ]
          },
          "output_2":{
            "connections":[
              {
                "node":"123",
                "output":"input_2"
              }
            ]
          }
        },
        "pos_x": 761,
        "pos_y": 992
      },
      "15": {
        "id": 15,
        "name": "IN-CCS-TMS",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box\"><i class=\"fas fa-code-branch\"></i> IN-CCS-TMS (15)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Traffic Management System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1": {
            "connections": [
               {
                "node": "12",
                "input": "output_1"
               }
            ]
          },
          "input_2": {
            "connections": [
               {
                "node": "8",
                "input": "output_2"
               }
            ]
          }
        },          
        "outputs": {
          "output_1": {
            "connections": [
            {
                "node":"52",
                "output":"input_1"
              }
            ]
          }
        },
        "pos_x": 757,
        "pos_y": 862
      },
      "16": {
        "id": 16,
        "name": "IN-DR",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box\"><i class=\"fas fa-code-branch\"></i> IN-DR (16)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Drainage System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1": {
            "connections": [
               {
                "node": "1",
                "input": "output_1"
               }
            ]
          }
        },          
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
          }
        },
        "pos_x": 207,
        "pos_y": 1507
      },
      "17": {
        "id": 17,
        "name": "IN-DR-BLD",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box\"><i class=\"fas fa-code-branch\"></i> IN-DR-BLD (17)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Buildings &amp; Stations Drainage System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1": {
            "connections": [
               {
                "node": "16",
                "input": "output_1"
               }
            ]
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
          }
        },
        "pos_x": 2009,
        "pos_y": 1366.5
      },
      "18": {
        "id": 18,
        "name": "IN-DR-HW",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box\"><i class=\"fas fa-code-branch\"></i> IN-DR-HW (18)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Highway Drainage System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1": {
            "connections": [
               {
                "node": "16",
                "input": "output_1"
               }
            ]
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
          }
        },
        "pos_x": 2232,
        "pos_y": 1435
      },
      "19": {
        "id": 19,
        "name": "IN-DR-LND",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box\"><i class=\"fas fa-code-branch\"></i> IN-DR-LND (19)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Land Drainage System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1": {
            "connections": [
               {
                "node": "16",
                "input": "output_1"
               }
            ]
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
          }
        },
        "pos_x": 2004,
        "pos_y": 1527
      },
      "20": {
        "id": 20,
        "name": "IN-DR-RL",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box\"><i class=\"fas fa-code-branch\"></i> IN-DR-RL (20)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Railway Drainage System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1": {
            "connections": [
               {
                "node": "16",
                "input": "output_1"
               }
            ]
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
          }
        },
        "pos_x": 2234,
        "pos_y": 1592
      },
      "21": {
        "id": 21,
        "name": "IN-EN",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box\"><i class=\"fas fa-code-branch\"></i> IN-EN (21)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Power / Energy System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1": {
            "connections": [
               {
                "node": "1",
                "input": "output_1"
               }
            ]
          }
        },          
        "outputs": {
          "output_1": {
            "connections": [
              {
                "node":"22",
                "output":"input_1"
              },
              {
                "node":"23",
                "output":"input_1"
              },
              {
                "node":"24",
                "output":"input_1"
              }
            ]
          }
        },
        "pos_x": 207,
        "pos_y": 1957
      },
      "22": {
        "id": 22,
        "name": "IN-EN-DNO",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box\"><i class=\"fas fa-code-branch\"></i> IN-EN-DNO (22)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Distribution System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1": {
            "connections": [
               {
                "node": "21",
                "input": "output_1"
               }
            ]
          }
        },          
        "outputs": {
          "output_1": {
            "connections": [
              {
                "node":"70",
                "output":"input_1"
              },
              {
                "node":"71",
                "output":"input_1"
              },
              {
                "node":"72",
                "output":"input_1"
              },
              {
                "node":"73",
                "output":"input_1"
              },
              {
                "node":"74",
                "output":"input_1"
              },
              {
                "node":"75",
                "output":"input_1"
              },
              {
                "node":"76",
                "output":"input_1"
              }
            ]
          }
        },
        "pos_x": 581,
        "pos_y": 1837
      },
      "23": {
        "id": 23,
        "name": "IN-EN-EWR",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box\"><i class=\"fas fa-code-branch\"></i> IN-EN-EWR (23)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Generation System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1": {
            "connections": [
               {
                "node": "21",
                "input": "output_1"
               }
            ]
          }
        },          
        "outputs": {
          "output_1": {
            "connections": [
            {
                "node":"77",
                "output":"input_1"
              },
              {
                "node":"78",
                "output":"input_1"
              },
              {
                "node":"79",
                "output":"input_1"
              },
              {
                "node":"80",
                "output":"input_1"
              },
              {
                "node":"81",
                "output":"input_1"
              },
              {
                "node":"82",
                "output":"input_1"
              },
              {
                "node":"83",
                "output":"input_1"
              }
            ]
          }
        },
        "pos_x": 581,
        "pos_y": 1957
      },
      "24": {
        "id": 24,
        "name": "IN-EN-TNO",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box\"><i class=\"fas fa-code-branch\"></i> IN-EN-TNO (24)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Transmission System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1": {
            "connections": [
               {
                "node": "21",
                "input": "output_1"
               }
            ]
          }
        },          
        "outputs": {
          "output_1": {
            "connections": [
              {
                "node":"84",
                "output":"input_1"
              },
              {
                "node":"85",
                "output":"input_1"
              },
              {
                "node":"86",
                "output":"input_1"
              },
              {
                "node":"87",
                "output":"input_1"
              },
              {
                "node":"88",
                "output":"input_1"
              },
              {
                "node":"90",
                "output":"input_1"
              },
              {
                "node":"91",
                "output":"input_1"
              }
            ]
          }
        },
        "pos_x": 581,
        "pos_y": 2110
      },
      "25": {
        "id": 25,
        "name": "IN-ENV",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box\"><i class=\"fas fa-code-branch\"></i> IN-ENV (25)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Environment System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1": {
            "connections": [
               {
                "node": "1",
                "input": "output_1"
               }
            ]
          }
        },          
        "outputs": {
          "output_1": {
            "connections": [
              {
                "node":"26",
                "output":"input_1"
              }
            ]
          }
        },
        "pos_x": 201,
        "pos_y": 2414
      },
      "26": {
        "id": 26,
        "name": "IN-ENV-LAN",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box\"><i class=\"fas fa-code-branch\"></i> IN-ENV-LAN (26)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Landscape System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1": {
            "connections": [
               {
                "node": "25",
                "input": "output_1"
               }
            ]
          }
        },          
        "outputs": {
          "output_1": {
            "connections": [
              {
                "node":"27",
                "output":"input_1"
              },
              {
                "node":"28",
                "output":"input_1"
              }
            ]
          }
        },
        "pos_x": 581,
        "pos_y": 2414
      },
      "27": {
        "id": 27,
        "name": "IN-ENV-LAN-OS",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box\"><i class=\"fas fa-code-branch\"></i> IN-ENV-LAN-OS (27)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Public Open Space &amp; Recreation System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1": {
            "connections": [
               {
                "node": "26",
                "input": "output_1"
               }
            ]
          }
        },          
        "outputs": {
          "output_1": {
            "connections": [{}]
          }
        },
        "pos_x": 891,
        "pos_y": 2350
      },
      "28": {
        "id": 28,
        "name": "IN-ENV-LAN-PS",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box\"><i class=\"fas fa-code-branch\"></i> IN-ENV-LAN-PS (28)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Planting System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1": {
            "connections": [
               {
                "node": "26",
                "input": "output_1"
               }
            ]
          }
        },          
        "outputs": {
          "output_1": {
            "connections": [{}]
          }
        },
        "pos_x": 891,
        "pos_y": 2480
      },
      "29": {
        "id": 29,
        "name": "IN-GD",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box\"><i class=\"fas fa-code-branch\"></i> IN-GD (29)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Guidance System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1": {
            "connections": [
               {
                "node": "1",
                "input": "output_1"
               }
            ]
          }
        },          
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
          }
        },
        "pos_x": 200,
        "pos_y": 2935
      },
      "30": {
        "id": 30,
        "name": "IN-GD-AC",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box\"><i class=\"fas fa-code-branch\"></i> IN-GD-AC (30)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Access Way System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1": {
            "connections": [
               {
                "node": "29",
                "input": "output_1"
               }
            ]
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
          }
        },
        "pos_x": 581,
        "pos_y": 2700
      },
      "31": {
        "id": 31,
        "name": "IN-GD-HI",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box\"><i class=\"fas fa-code-branch\"></i> IN-GD-HI (31)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  HighWay System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1": {
            "connections": [
               {
                "node": "29",
                "input": "output_1"
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
          }
        },
        "pos_x": 581,
        "pos_y": 2820
      },
      "32": {
        "id": 32,
        "name": "IN-GD-PR",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box\"><i class=\"fas fa-code-branch\"></i> IN-GD-PR (32)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  PRoW Way System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1": {
            "connections": [
               {
                "node": "29",
                "input": "output_1"
               }
            ]
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
          }
        },
        "pos_x": 1132,
        "pos_y": 2936
      },
      "33": {
        "id": 33,
        "name": "IN-GD-PW",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box\"><i class=\"fas fa-code-branch\"></i> IN-GD-PW (33)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Permanent Way System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1": {
            "connections": [
               {
                "node": "29",
                "input": "output_1"
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
        "pos_y": 3155
      },
      "34": {
        "id": 34,
        "name": "IN-DR-RL-TRA",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box\"><i class=\"fas fa-code-branch\"></i> IN-DR-RL-TRA (34)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Track Drainage System System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
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
          "input_2": {
            "connections": [
               {
                "node": "33",
                "input": "output_2"
               }
            ]
          }
        },          
        "outputs": {
          "output_1": {
            "connections": [
              {

              },{}
            ]
          }
        },
        "pos_x": 2831,
        "pos_y": 1720
      },
      "35": {
        "id": 35,
        "name": "IN-BLD-ANC-BSS",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box\"><i class=\"fas fa-code-branch\"></i> IN-BLD-ANC-BSS (35)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Building Services System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1": {
            "connections": [
               {
                "node": "5",
                "input": "output_1"
               }
            ]
          }
        },          
        "outputs": {},
        "pos_x": 1330,
        "pos_y": -63
      },
      "36": {
        "id": 36,
        "name": "IN-BLD-ANC-URS",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box\"><i class=\"fas fa-code-branch\"></i> IN-BLD-ANC-URS (36)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Urban Realm System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1": {
            "connections": [
               {
                "node": "5",
                "input": "output_1"
               }
            ]
          }
        },          
        "outputs": {},
        "pos_x": 1329,
        "pos_y": -178
      },
      "37": {
        "id": 37,
        "name": "IN-BLD-DPT-BSS",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box\"><i class=\"fas fa-code-branch\"></i> IN-BLD-DPT-BSS (37)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Building Services System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1": {
            "connections": [
               {
                "node": "6",
                "input": "output_1"
               }
            ]
          }
        },          
        "outputs": {},
        "pos_x": 1776,
        "pos_y": -64
      },
      "38": {
        "id": 38,
        "name": "IN-BLD-DPT-STB",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box\"><i class=\"fas fa-code-branch\"></i> IN-BLD-DPT-STB (38)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Stabling System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1": {
            "connections": [
               {
                "node": "6",
                "input": "output_1"
               }
            ]
          }
        },          
        "outputs": {},
        "pos_x": 1772,
        "pos_y": 163
      },
      "39": {
        "id": 39,
        "name": "IN-BLD-DPT-URS",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box\"><i class=\"fas fa-code-branch\"></i> IN-BLD-DPT-URS (39)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Urban Realm System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1": {
            "connections": [
               {
                "node": "6",
                "input": "output_1"
               }
            ]
          }
        },          
        "outputs": {},
        "pos_x": 1770,
        "pos_y": 45
      },
      "40": {
        "id": 40,
        "name": "IN-BLD-FRS-BSS",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box\"><i class=\"fas fa-code-branch\"></i> IN-BLD-FRS-BSS (40)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Building Services System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1": {
            "connections": [
               {
                "node": "7",
                "input": "output_1"
               }
            ]
          }
        },          
        "outputs": {},
        "pos_x": 1326,
        "pos_y": 297
      },
      "41": {
        "id": 41,
        "name": "IN-BLD-FRS-URS",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box\"><i class=\"fas fa-code-branch\"></i> IN-BLD-FRS-URS (41)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Urban Realm System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1": {
            "connections": [
               {
                "node": "7",
                "input": "output_1"
               }
            ]
          }
        },          
        "outputs": {},
        "pos_x": 1327,
        "pos_y": 191
      },
      "42": {
        "id": 42,
        "name": "IN-BLD-NMC-BSS",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box\"><i class=\"fas fa-code-branch\"></i> IN-BLD-NMC-BSS (42)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Building Services System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1": {
            "connections": [
               {
                "node": "8",
                "input": "output_1"
               }
            ]
          }
        },          
        "outputs": {},
        "pos_x": 1776,
        "pos_y": 431
      },
      "43": {
        "id": 43,
        "name": "IN-BLD-NMC-URS",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box\"><i class=\"fas fa-code-branch\"></i> IN-BLD-NMC-URS (43)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Urban Realm System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1": {
            "connections": [
               {
                "node": "8",
                "input": "output_1"
               }
            ]
          }
        },          
        "outputs": {},
        "pos_x": 1769,
        "pos_y": 317
      },
      "44": {
        "id": 44,
        "name": "IN-BLD-ST-BSS",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box\"><i class=\"fas fa-code-branch\"></i> IN-BLD-ST-BSS (44)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Building Services System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1": {
            "connections": [
               {
                "node": "3",
                "input": "output_1"
               }
            ]
          }
        },          
        "outputs": {},
        "pos_x": 1549,
        "pos_y": 528
      },
      "45": {
        "id": 45,
        "name": "IN-BLD-ST-FAC",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box\"><i class=\"fas fa-code-branch\"></i> IN-BLD-ST-FAC (45)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Facilities / Amenities System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1": {
            "connections": [
               {
                "node": "3",
                "input": "output_1"
               }
            ]
          }
        },          
        "outputs": {},
        "pos_x": 1329,
        "pos_y": 601
      },
      "46": {
        "id": 46,
        "name": "IN-BLD-ST-PLF",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box\"><i class=\"fas fa-code-branch\"></i> IN-BLD-ST-PLF (46)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n Platform System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1": {
            "connections": [
               {
                "node": "3",
                "input": "output_1"
               }
            ]
          }
        },          
        "outputs": {},
        "pos_x": 1325,
        "pos_y": 460
      },
      "47": {
        "id": 47,
        "name": "IN-BLD-ST-URS",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box\"><i class=\"fas fa-code-branch\"></i> IN-BLD-ST-URS (47)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n Urban Realm System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1": {
            "connections": [
               {
                "node": "3",
                "input": "output_1"
               }
            ]
          }
        },          
        "outputs": {},
        "pos_x": 1553,
        "pos_y": 676
      },
      "48": {
        "id": 48,
        "name": "IN-CU-FT-POS",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box\"><i class=\"fas fa-code-branch\"></i> IN-CU-FT-POS (48)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n Retail Point Of Sale System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1": {
            "connections": [
               {
                "node": "9",
                "input": "output_1"
               }
            ]
          }
        },          
        "outputs": {},
        "pos_x": 2329,
        "pos_y": 1145
      },
      "49": {
        "id": 49,
        "name": "IN-CU-FT-REV",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box\"><i class=\"fas fa-code-branch\"></i> IN-CU-FT-REV (49)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n Revenue Protection System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1": {
            "connections": [
               {
                "node": "9",
                "input": "output_1"
               }
            ]
          }
        },          
        "outputs": {},
        "pos_x": 2332,
        "pos_y": 992
      },
      "50": {
        "id": 50,
        "name": "IN-CU-IN-ONB",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box\"><i class=\"fas fa-code-branch\"></i> IN-CU-IN-ONB (50)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n Onboard Customer Information System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1": {
            "connections": [
               {
                "node": "10",
                "input": "output_1"
               }
            ]
          }
        },          
        "outputs": {},
        "pos_x": 2329,
        "pos_y": 713
      },
      "51": {
        "id": 51,
        "name": "IN-CU-IN-STN",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box\"><i class=\"fas fa-code-branch\"></i> IN-CU-IN-STN (51)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n Station Customer Information System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
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
          "input_2":{
            "connections":[
            {
                "node":"3",
                "input":"output_2"
              }
            ]
          }
        },          
        "outputs": {},
        "pos_x": 2335,
        "pos_y": 573
      },
      "52": {
        "id": 52,
        "name": "IN-CCS-TMS-ATS",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box\"><i class=\"fas fa-code-branch\"></i> IN-CCS-TMS-ATS (52)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n Automatic Train Service (ATS) System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1": {
            "connections": [
               {
                "node": "15",
                "input": "output_1"
               }
            ]
          }
        },          
        "outputs": {},
        "pos_x": 1061,
        "pos_y": 700
      },
      "53": {
        "id": 53,
        "name": "IN-CCS-TCS-OB",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box\"><i class=\"fas fa-code-branch\"></i> IN-CCS-TCS-OB (53)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n ETCS Onboard System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1": {
            "connections": [
               {
                "node": "14",
                "input": "output_1"
               }
            ]
          }
        },          
        "outputs": {},
        "pos_x": 1061,
        "pos_y": 820
      },
      "54": {
        "id": 54,
        "name": "IN-CCS-TCS-TR",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box\"><i class=\"fas fa-code-branch\"></i> IN-CCS-TCS-TR (54)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n ETCS Trackside System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1": {
            "connections": [
               {
                "node": "14",
                "input": "output_1"
               }
            ]
          }
        },          
        "outputs": {},
        "pos_x": 1061,
        "pos_y": 940
      },
      "55": {
        "id": 55,
        "name": "IN-CCS-SIG-INT",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box\"><i class=\"fas fa-code-branch\"></i> IN-CCS-SIG-INT (55)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n Interlocking System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1": {
            "connections": [
               {
                "node": "13",
                "input": "output_1"
               }
            ]
          }
        },          
        "outputs": {},
        "pos_x": 1061,
        "pos_y": 1060
      },
      "56": {
        "id": 56,
        "name": "IN-CCS-SIG-LC",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box\"><i class=\"fas fa-code-branch\"></i> IN-CCS-SIG-LC (56)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n Level Crossing System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1": {
            "connections": [
               {
                "node": "13",
                "input": "output_1"
               }
            ]
          }
        },          
        "outputs": {},
        "pos_x": 1301,
        "pos_y": 1060
      },
      "57": {
        "id": 57,
        "name": "IN-CCS-SIG-POS",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box\"><i class=\"fas fa-code-branch\"></i> IN-CCS-SIG-POS (57)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n Point Operating System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1": {
            "connections": [
               {
                "node": "13",
                "input": "output_1"
               }
            ]
          }
        },          
        "outputs": {},
        "pos_x": 1540,
        "pos_y": 1060
      },
      "58": {
        "id": 58,
        "name": "IN-CCS-SIG-ROC",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box\"><i class=\"fas fa-code-branch\"></i> IN-CCS-SIG-ROC (58)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n Rail Operating Centre System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1": {
            "connections": [
               {
                "node": "13",
                "input": "output_1"
               }
            ]
          }
        },          
        "outputs": {},
        "pos_x": 1061,
        "pos_y": 1180
      },
      "59": {
        "id": 59,
        "name": "IN-CCS-SIG-SPT",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box\"><i class=\"fas fa-code-branch\"></i> IN-CCS-SIG-SPT (59)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n Signals Post Telephone System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1": {
            "connections": [
               {
                "node": "13",
                "input": "output_1"
               }
            ]
          }
        },          
        "outputs": {},
        "pos_x": 1301,
        "pos_y": 1180
      },
      "60": {
        "id": 60,
        "name": "IN-CCS-SIG-SS",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box\"><i class=\"fas fa-code-branch\"></i> IN-CCS-SIG-SS (60)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n Signals &amp; Signs System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1": {
            "connections": [
               {
                "node": "13",
                "input": "output_1"
               }
            ]
          },
          "input_2": {
            "connections":[
              {
                "node":"110",
                "input":"output_2"
              }
            ]
          }
        },          
        "outputs": {},
        "pos_x": 1540,
        "pos_y": 1180
      },
      "61": {
        "id": 61,
        "name": "IN-CCS-SIG-TDS",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box\"><i class=\"fas fa-code-branch\"></i> IN-CCS-SIG-TDS (61)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n Train Detection System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1": {
            "connections": [
               {
                "node": "13",
                "input": "output_1"
               }
            ]
          }
        },          
        "outputs": {},
        "pos_x": 1061,
        "pos_y": 1320
      },
      "62": {
        "id": 62,
        "name": "IN-CCS-SIG-TRTS",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box\"><i class=\"fas fa-code-branch\"></i> IN-CCS-SIG-TRTS (62)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n TRTS System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1": {
            "connections": [
               {
                "node": "13",
                "input": "output_1"
               }
            ]
          }
        },          
        "outputs": {},
        "pos_x": 1301,
        "pos_y": 1320
      },
      "63": {
        "id": 63,
        "name": "IN-CCS-SIG-WS",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box\"><i class=\"fas fa-code-branch\"></i> IN-CCS-SIG-WS (63)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n TPWS/AWS System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1": {
            "connections": [
               {
                "node": "13",
                "input": "output_1"
               }
            ]
          }
        },          
        "outputs": {},
        "pos_x": 1540,
        "pos_y": 1320
      },
      "64": {
        "id": 64,
        "name": "IN-DR-BLD-PS",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box\"><i class=\"fas fa-code-branch\"></i> IN-DR-BLD-PS (64)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Pumping Station System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1": {
            "connections": [
               {
                "node": "17",
                "input": "output_1"
               }
            ]
          }
        },          
        "outputs": {
          "output_1": {
            "connections": [{}]
          }
        },
        "pos_x": 2333.5,
        "pos_y": 1294
      },
      "65": {
        "id": 65,
        "name": "IN-DR-HW-PS",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box\"><i class=\"fas fa-code-branch\"></i> IN-DR-HW-PS (65)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Pumping Station System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1": {
            "connections": [
               {
                "node": "18",
                "input": "output_1"
               }
            ]
          }
        },          
        "outputs": {
          "output_1": {
            "connections": [{}]
          }
        },
        "pos_x": 2562,
        "pos_y": 1349
      },
      "66": {
        "id": 66,
        "name": "IN-DR-LND-PS",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box\"><i class=\"fas fa-code-branch\"></i> IN-DR-LND-PS (66)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Pumping Station System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1": {
            "connections": [
               {
                "node": "19",
                "input": "output_1"
               }
            ]
          }
        },          
        "outputs": {
          "output_1": {
            "connections": [{}]
          }
        },
        "pos_x": 2561,
        "pos_y": 1509
      },
      "67": {
        "id": 67,
        "name": "IN-DR-RL-PS",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box\"><i class=\"fas fa-code-branch\"></i> IN-DR-RL-PS (67)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Pumping Station System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1": {
            "connections": [
               {
                "node": "20",
                "input": "output_1"
               }
            ]
          }
        },          
        "outputs": {
          "output_1": {
            "connections": [{}]
          }
        },
        "pos_x": 2828,
        "pos_y": 1589
      },
      "68": {
        "id": 68,
        "name": "IN-DR-RL-EW",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box\"><i class=\"fas fa-code-branch\"></i> IN-DR-RL-EW (68)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Earthworks Drainage System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1": {
            "connections": [
               {
                "node": "20",
                "input": "output_1"
               }
            ]
          }
        },          
        "outputs": {
          "output_1": {
            "connections": [{}]
          }
        },
        "pos_x": 3072,
        "pos_y": 1641
      },
      "69": {
        "id": 69,
        "name": "IN-DR-RL-STR",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box\"><i class=\"fas fa-code-branch\"></i> IN-DR-RL-STR (69)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Civils &amp; Structures Drainage System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1": {
            "connections": [
               {
                "node": "20",
                "input": "output_1"
               }
            ]
          }
        },          
        "outputs": {
          "output_1": {
            "connections": [{}]
          }
        },
        "pos_x": 3305,
        "pos_y": 1719
      },
      "70": {
        "id": 70,
        "name": "IN-EN-DNO-ACDC",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box\"><i class=\"fas fa-code-branch\"></i> IN-EN-DNO-ACDC (70)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  AC/DC Conversion System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1": {
            "connections": [
               {
                "node": "22",
                "input": "output_1"
               }
            ]
          }
        },          
        "outputs": {
          "output_1": {
            "connections": [{}]
          }
        },
        "pos_x": 891,
        "pos_y": 1685
      },
      "71": {
        "id": 71,
        "name": "IN-EN-DNO-BND",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box\"><i class=\"fas fa-code-branch\"></i> IN-EN-DNO-BND (71)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Earthing &amp; Bonding System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1": {
            "connections": [
               {
                "node": "22",
                "input": "output_1"
               }
            ]
          }
        },          
        "outputs": {
          "output_1": {
            "connections": [{}]
          }
        },
        "pos_x": 1151,
        "pos_y": 1685
      },
      "72": {
        "id": 72,
        "name": "IN-EN-DNO-CBL",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box\"><i class=\"fas fa-code-branch\"></i> IN-EN-DNO-CBL (72)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  HV/LV Cable System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1": {
            "connections": [
               {
                "node": "22",
                "input": "output_1"
               }
            ]
          },
          "input_2": {
            "connections":[
              {
                "node":"113",
                "input":"output_2"
              }
            ]
          }
        },          
        "outputs": {
          "output_1": {
            "connections": [{}]
          }
        },
        "pos_x": 1400,
        "pos_y": 1685
      },
      "73": {
        "id": 73,
        "name": "IN-EN-DNO-ISO",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box\"><i class=\"fas fa-code-branch\"></i> IN-EN-DNO-ISO (73)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Protection/Isolation System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1": {
            "connections": [
               {
                "node": "22",
                "input": "output_1"
               }
            ]
          }
        },          
        "outputs": {
          "output_1": {
            "connections": [{}]
          }
        },
        "pos_x": 891,
        "pos_y": 1815
      },
      "74": {
        "id": 74,
        "name": "IN-EN-DNO-NT",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box\"><i class=\"fas fa-code-branch\"></i> IN-EN-DNO-NT (74)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Non-Traction Power System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1": {
            "connections": [
               {
                "node": "22",
                "input": "output_1"
               }
            ]
          }
        },          
        "outputs": {
          "output_1": {
            "connections": [{}]
          }
        },
        "pos_x": 1151,
        "pos_y": 1815
      },
      "75": {
        "id": 75,
        "name": "IN-EN-DNO-SW",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box\"><i class=\"fas fa-code-branch\"></i> IN-EN-DNO-SW (75)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Changeover/Switching System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1": {
            "connections": [
               {
                "node": "22",
                "input": "output_1"
               }
            ]
          }
        },          
        "outputs": {
          "output_1": {
            "connections": [{}]
          }
        },
        "pos_x": 1400,
        "pos_y": 1815
      },
      "76": {
        "id": 76,
        "name": "IN-EN-DNO-TRX",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box\"><i class=\"fas fa-code-branch\"></i> IN-EN-DNO-TRX (76)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Transformer System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1": {
            "connections": [
               {
                "node": "22",
                "input": "output_1"
               }
            ]
          }
        },          
        "outputs": {
          "output_1": {
            "connections": [{}]
          }
        },
        "pos_x": 1637,
        "pos_y": 1746
      },
      "77": {
        "id": 77,
        "name": "IN-EN-EWR-ACDC",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box\"><i class=\"fas fa-code-branch\"></i> IN-EN-EWR-ACDC (77)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  AC/DC Conversion System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1": {
            "connections": [
               {
                "node": "23",
                "input": "output_1"
               }
            ]
          }
        },          
        "outputs": {
          "output_1": {
            "connections": [{}]
          }
        },
        "pos_x": 1891,
        "pos_y": 1815
      },
      "78": {
        "id": 78,
        "name": "IN-EN-EWR-BND",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box\"><i class=\"fas fa-code-branch\"></i> IN-EN-EWR-BND (78)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Earthing &amp; Bonding System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1": {
            "connections": [
               {
                "node": "23",
                "input": "output_1"
               }
            ]
          }
        },          
        "outputs": {
          "output_1": {
            "connections": [{}]
          }
        },
        "pos_x": 2151,
        "pos_y": 1815
      },
      "79": {
        "id": 79,
        "name": "IN-EN-EWR-CBL",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box\"><i class=\"fas fa-code-branch\"></i> IN-EN-EWR-CBL (79)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  HV/LV Cable System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1": {
            "connections": [
               {
                "node": "23",
                "input": "output_1"
               }
            ]
          },
          "input_2": {
            "connections":[
              {
                "node":"113",
                "input":"output_2"
              }
            ]
          }
        },          
        "outputs": {
          "output_1": {
            "connections": [{}]
          }
        },
        "pos_x": 2400,
        "pos_y": 1815
      },
      "80": {
        "id": 80,
        "name": "IN-EN-EWR-ISO",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box\"><i class=\"fas fa-code-branch\"></i> IN-EN-EWR-ISO (80)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Protection/Isolation System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1": {
            "connections": [
               {
                "node": "23",
                "input": "output_1"
               }
            ]
          }
        },          
        "outputs": {
          "output_1": {
            "connections": [{}]
          }
        },
        "pos_x": 1891,
        "pos_y": 1945
      },
      "81": {
        "id": 81,
        "name": "IN-EN-EWR-PWR",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box\"><i class=\"fas fa-code-branch\"></i> IN-EN-EWR-PWR (81)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Power Storage System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1": {
            "connections": [
               {
                "node": "23",
                "input": "output_1"
               }
            ]
          }
        },          
        "outputs": {
          "output_1": {
            "connections": [{}]
          }
        },
        "pos_x": 2151,
        "pos_y": 1945
      },
      "82": {
        "id": 82,
        "name": "IN-EN-EWR-SW",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box\"><i class=\"fas fa-code-branch\"></i> IN-EN-EWR-SW (82)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Changeover/Switching System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1": {
            "connections": [
               {
                "node": "23",
                "input": "output_1"
               }
            ]
          }
        },          
        "outputs": {
          "output_1": {
            "connections": [{}]
          }
        },
        "pos_x": 2400,
        "pos_y": 1945
      },
      "83": {
        "id": 83,
        "name": "IN-EN-EWR-TRX",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box\"><i class=\"fas fa-code-branch\"></i> IN-EN-EWR-TRX (83)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Transformer System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1": {
            "connections": [
               {
                "node": "23",
                "input": "output_1"
               }
            ]
          }
        },          
        "outputs": {
          "output_1": {
            "connections": [{}]
          }
        },
        "pos_x": 2637,
        "pos_y": 1876
      },
      "84": {
        "id": 84,
        "name": "IN-EN-TNO-ACDC",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box\"><i class=\"fas fa-code-branch\"></i> IN-EN-TNO-ACDC (84)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  AC/DC Conversion System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1": {
            "connections": [
               {
                "node": "24",
                "input": "output_1"
               }
            ]
          }
        },          
        "outputs": {
          "output_1": {
            "connections": [{}]
          }
        },
        "pos_x": 891,
        "pos_y": 2037
      },
      "85": {
        "id": 85,
        "name": "IN-EN-TNO-BND",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box\"><i class=\"fas fa-code-branch\"></i> IN-EN-TNO-BND (85)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Earthing &amp; Bonding System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1": {
            "connections": [
               {
                "node": "24",
                "input": "output_1"
               }
            ]
          }
        },          
        "outputs": {
          "output_1": {
            "connections": [{}]
          }
        },
        "pos_x": 1151,
        "pos_y": 2037
      },
      "86": {
        "id": 86,
        "name": "IN-EN-TNO-CBL",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box\"><i class=\"fas fa-code-branch\"></i> IN-EN-TNO-CBL (86)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  HV/LV Cable System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1": {
            "connections": [
               {
                "node": "24",
                "input": "output_1"
               }
            ]
          },
          "input_2": {
            "connections":[
              {
                "node":"113",
                "input":"output_2"
              }
            ]
          }
        },          
        "outputs": {
          "output_1": {
            "connections": [{}]
          }
        },
        "pos_x": 1400,
        "pos_y": 2037
      },
      "87": {
        "id": 87,
        "name": "IN-EN-TNO-ISO",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box\"><i class=\"fas fa-code-branch\"></i> IN-EN-TNO-ISO (87)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Protection / Isolation System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1": {
            "connections": [
               {
                "node": "24",
                "input": "output_1"
               }
            ]
          }
        },          
        "outputs": {
          "output_1": {
            "connections": [{}]
          }
        },
        "pos_x": 891,
        "pos_y": 2177
      },
      "88": {
        "id": 88,
        "name": "IN-EN-TNO-FDR",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box\"><i class=\"fas fa-code-branch\"></i> IN-EN-TNO-FDR (88)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Feeder Sub-Station System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1": {
            "connections": [
               {
                "node": "24",
                "input": "output_1"
               }
            ]
          }
        },          
        "outputs": {
          "output_1": {
            "connections": [
              {
                "node":"89",
                "output":"input_1"
              }
            ]
          }
        },
        "pos_x": 1400,
        "pos_y": 2177
      },
      "89": {
        "id": 89,
        "name": "IN-EN-TNO-FDR-OLE",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box\" style=\"width:200px\"><i class=\"fas fa-code-branch\"></i> IN-EN-TNO-FDR-OLE (89)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  OLE System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1": {
            "connections": [
               {
                "node": "88",
                "input": "output_1"
               }
            ]
          },
          "input_2": {
            "connections":[
              {
                "node":"108",
                "input":"output_2"
              }
            ]
          }
        },          
        "outputs": {
          "output_1": {
            "connections": [{}]
          }
        },
        "pos_x": 1637,
        "pos_y": 2250
      },
      "90": {
        "id": 90,
        "name": "IN-EN-TNO-SW",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box\"><i class=\"fas fa-code-branch\"></i> IN-EN-TNO-SW (90)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Changeover / Switching System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1": {
            "connections": [
               {
                "node": "24",
                "input": "output_1"
               }
            ]
          }
        },          
        "outputs": {
          "output_1": {
            "connections": [{}]
          }
        },
        "pos_x": 1151,
        "pos_y": 2177
      },
      "91": {
        "id": 91,
        "name": "IN-EN-TNO-TRX",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box\"><i class=\"fas fa-code-branch\"></i> IN-EN-TNO-TRX (91)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Transformer System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1": {
            "connections": [
               {
                "node": "24",
                "input": "output_1"
               }
            ]
          }
        },          
        "outputs": {
          "output_1": {
            "connections": [{}]
          }
        },
        "pos_x": 1637,
        "pos_y": 2107
      },
      "92": {
        "id": 92,
        "name": "IN-GD-AC-RD",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box\"><i class=\"fas fa-code-branch\"></i> IN-GD-AC-RD (92)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Access Road System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1": {
            "connections": [
               {
                "node": "30",
                "input": "output_1"
               }
            ]
          }
        },          
        "outputs": {
          "output_1": {
            "connections": [{}]
          }
        },
        "pos_x": 891,
        "pos_y": 2635
      },
      "93": {
        "id": 93,
        "name": "IN-GD-HI-M",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box\"><i class=\"fas fa-code-branch\"></i> IN-GD-HI-M (93)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Motorway System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1": {
            "connections": [
               {
                "node": "31",
                "input": "output_1"
               }
            ]
          }
        },          
        "outputs": {
          "output_1": {
            "connections": [{}]
          }
        },
        "pos_x": 891,
        "pos_y": 2760
      },
      "94": {
        "id": 94,
        "name": "IN-GD-HI-RD",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box\"><i class=\"fas fa-code-branch\"></i> IN-GD-HI-RD (94)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Road System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1": {
            "connections": [
               {
                "node": "31",
                "input": "output_1"
               }
            ]
          }
        },          
        "outputs": {
          "output_1": {
            "connections": [{}]
          }
        },
        "pos_x": 891,
        "pos_y": 2870
      },
      "95": {
        "id": 95,
        "name": "IN-GD-PW-PL",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box\"><i class=\"fas fa-code-branch\"></i> IN-GD-PW-PL (95)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Track (Plain line) System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1": {
            "connections": [
               {
                "node": "33",
                "input": "output_1"
               }
            ]
          }
        },          
        "outputs": {
          "output_1": {
            "connections": [{}]
          }
        },
        "pos_x": 891,
        "pos_y": 3021
      },
      "96": {
        "id": 96,
        "name": "IN-GD-PR-BDW",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box\"><i class=\"fas fa-code-branch\"></i> IN-GD-PR-BDW (96)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Bridleway System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1": {
            "connections": [
               {
                "node": "32",
                "input": "output_1"
               }
            ]
          }
        },          
        "outputs": {
          "output_1": {
            "connections": [{}]
          }
        },
        "pos_x": 1482,
        "pos_y": 2748
      },
      "97": {
        "id": 97,
        "name": "IN-GD-PR-BW",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box\"><i class=\"fas fa-code-branch\"></i> IN-GD-PR-BW (97)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Byway System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1": {
            "connections": [
               {
                "node": "32",
                "input": "output_1"
               }
            ]
          }
        },          
        "outputs": {
          "output_1": {
            "connections": [{}]
          }
        },
        "pos_x": 1482,
        "pos_y": 2868
      },
      "98": {
        "id": 98,
        "name": "IN-GD-PR-CYC",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box\"><i class=\"fas fa-code-branch\"></i> IN-GD-PR-CYC (98)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Cycle Way System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1": {
            "connections": [
               {
                "node": "32",
                "input": "output_1"
               }
            ]
          }
        },          
        "outputs": {
          "output_1": {
            "connections": [{}]
          }
        },
        "pos_x": 1482,
        "pos_y": 2988
      },
      "99": {
        "id": 99,
        "name": "IN-GD-PR-FT",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box\"><i class=\"fas fa-code-branch\"></i> IN-GD-PR-FT (99)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Footpath System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1": {
            "connections": [
               {
                "node": "32",
                "input": "output_1"
               }
            ]
          }
        },          
        "outputs": {
          "output_1": {
            "connections": [{}]
          }
        },
        "pos_x": 1482,
        "pos_y": 3108
      },
      "100": {
        "id": 100,
        "name": "IN-GT",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box\"><i class=\"fas fa-code-branch\"></i> IN-GT (100)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Geo-Technical System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1": {
            "connections": [
               {
                "node": "1",
                "input": "output_1"
               }
            ]
          }
        },          
        "outputs": {
          "output_1": {
            "connections": [
              {
                "node":"101",
                "output":"input_1"
              },
              {
                "node":"102",
                "output":"input_1"
              }
            ]
          }
        },
        "pos_x": 200,
        "pos_y": 3442
      },
      "101": {
        "id": 101,
        "name": "IN-GT-EW",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box\"><i class=\"fas fa-code-branch\"></i> IN-GT-EW (101)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Earthwork System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1": {
            "connections": [
               {
                "node": "100",
                "input": "output_1"
               }
            ]
          }
        },          
        "outputs": {
          "output_1": {
            "connections": [
              {
                "node":"103",
                "output":"input_1"
              },
              {
                "node":"104",
                "output":"input_1"
              }
            ]
          }
        },
        "pos_x": 584,
        "pos_y": 3329
      },
      "102": {
        "id": 102,
        "name": "IN-GT-GI",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box\"><i class=\"fas fa-code-branch\"></i> IN-GT-GI (102)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Ground Improvement / Remediation System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1": {
            "connections": [
               {
                "node": "100",
                "input": "output_1"
               }
            ]
          }
        },          
        "outputs": {
          "output_1": {
            "connections": [{}]
          }
        },
        "pos_x": 584,
        "pos_y": 3500
      },
      "103": {
        "id": 103,
        "name": "IN-GT-EW-CUT",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box\"><i class=\"fas fa-code-branch\"></i> IN-GT-EW-CUT (103)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Cutting System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1": {
            "connections": [
               {
                "node": "101",
                "input": "output_1"
               }
            ]
          }
        },          
        "outputs": {
          "output_1": {
            "connections": [{}]
          }
        },
        "pos_x": 891,
        "pos_y": 3250
      },
      "104": {
        "id": 104,
        "name": "IN-GT-EW-EMB",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box\"><i class=\"fas fa-code-branch\"></i> IN-GT-EW-EMB (103)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Embankment System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1": {
            "connections": [
               {
                "node": "101",
                "input": "output_1"
               }
            ]
          }
        },          
        "outputs": {
          "output_1": {
            "connections": [{}]
          }
        },
        "pos_x": 891,
        "pos_y": 3400
      },
      "105": {
        "id": 105,
        "name": "IN-STR",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box\"><i class=\"fas fa-code-branch\"></i> IN-STR (105)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Civils &amp; Structures System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1": {
            "connections": [
               {
                "node": "1",
                "input": "output_1"
               }
            ]
          }
        },          
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
          }
        },
        "pos_x": 200,
        "pos_y": 4153
      },
      "106": {
        "id": 106,
        "name": "IN-STR-AUX",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box\"><i class=\"fas fa-code-branch\"></i> IN-STR-AUX (106)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Auxiliary Structures System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1": {
            "connections": [
               {
                "node": "105",
                "input": "output_1"
               }

            ]
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
          }
        },
        "pos_x": 584,
        "pos_y": 3842
      },
      "107": {
        "id": 107,
        "name": "IN-STR-IN",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box\"><i class=\"fas fa-code-branch\"></i> IN-STR-IN (107)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Intersection System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1": {
            "connections": [
               {
                "node": "105",
                "input": "output_1"
               }
            ]
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
          }
        },
        "pos_x": 584,
        "pos_y": 4508
      },
      "108": {
        "id": 108,
        "name": "IN-STR-AUX-CANT",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box\"><i class=\"fas fa-code-branch\"></i> IN-STR-AUX-CANT (108)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Cantilever Structure System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1": {
            "connections": [
               {
                "node": "106",
                "input": "output_1"
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
        "pos_x": 891,
        "pos_y": 3592
      },
      "109": {
        "id": 109,
        "name": "IN-STR-AUX-FDT",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box\"><i class=\"fas fa-code-branch\"></i> IN-STR-AUX-FDT (109)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Structural Base / Foundation System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1": {
            "connections": [
               {
                "node": "106",
                "input": "output_1"
               }
            ]
          }
        },          
        "outputs": {
          "output_1": {
            "connections": [{}]
          }
        },
        "pos_x": 891,
        "pos_y": 3732
      },
      "110": {
        "id": 110,
        "name": "IN-STR-AUX-GNT",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box\"><i class=\"fas fa-code-branch\"></i> IN-STR-AUX-GNT (110)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Gantry System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1": {
            "connections": [
               {
                "node": "106",
                "input": "output_1"
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
        "pos_x": 1183,
        "pos_y": 3800
      },
      "111": {
        "id": 111,
        "name": "IN-STR-AUX-MAST",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box\"><i class=\"fas fa-code-branch\"></i> IN-STR-AUX-MAST (111)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Tower / Mast Structure System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1": {
            "connections": [
               {
                "node": "106",
                "input": "output_1"
               }
            ]
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
        "pos_x": 891,
        "pos_y": 4010
      },
      "112": {
        "id": 112,
        "name": "IN-STR-AUX-POST",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box\"><i class=\"fas fa-code-branch\"></i> IN-STR-AUX-POST (112)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Column / Post System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1": {
            "connections": [
               {
                "node": "106",
                "input": "output_1"
               }
            ]
          }
        },          
        "outputs": {
          "output_1": {
            "connections": [{}]
          }
        },
        "pos_x": 891,
        "pos_y": 4162
      },
      "113": {
        "id": 113,
        "name": "IN-STR-AUX-WMS",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box\"><i class=\"fas fa-code-branch\"></i> IN-STR-AUX-WMS (113)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Wall Mounted Support System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1": {
            "connections": [
               {
                "node": "106",
                "input": "output_1"
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
        "pos_x": 1185,
        "pos_y": 3916
      },
      "114": {
        "id": 114,
        "name": "IN-STR-IN-BND",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box\"><i class=\"fas fa-code-branch\"></i> IN-STR-IN-BND (114)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Boundary Protection System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1": {
            "connections": [
               {
                "node": "107",
                "input": "output_1"
               }
            ]
          }
        },          
        "outputs": {
          "output_1": {
            "connections": [{}]
          }
        },
        "pos_x": 891,
        "pos_y": 4388
      },
      "115": {
        "id": 115,
        "name": "IN-STR-IN-BRG",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box\"><i class=\"fas fa-code-branch\"></i> IN-STR-IN-BRG (115)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Bridge System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1": {
            "connections": [
               {
                "node": "107",
                "input": "output_1"
               }
            ]
          }
        },          
        "outputs": {
          "output_1": {
            "connections": [{}]
          }
        },
        "pos_x": 1132,
        "pos_y": 4393
      },
      "116": {
        "id": 116,
        "name": "IN-STR-IN-LVL",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box\"><i class=\"fas fa-code-branch\"></i> IN-STR-IN-LVL (116)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Level Crossing System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1": {
            "connections": [
               {
                "node": "107",
                "input": "output_1"
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
                "node": "13",
                "output":"input_2"
              }
            ]
          }
        },
        "pos_x": 891,
        "pos_y": 4638
      },
      "117": {
        "id": 117,
        "name": "IN-STR-IN-RW",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box\"><i class=\"fas fa-code-branch\"></i> IN-STR-IN-RW (117)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Retaining Wall System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1": {
            "connections": [
               {
                "node": "107",
                "input": "output_1"
               }
            ]
          }
        },          
        "outputs": {
          "output_1": {
            "connections": [{}]
          }
        },
        "pos_x": 1370.5,
        "pos_y": 4393
      },
      "118": {
        "id": 118,
        "name": "IN-STR-IN-TUN",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box\"><i class=\"fas fa-code-branch\"></i> IN-STR-IN-TUN (118)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Tunnel System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1": {
            "connections": [
               {
                "node": "107",
                "input": "output_1"
               }
            ]
          }
        },          
        "outputs": {
          "output_1": {
            "connections": [{}]
          }
        },
        "pos_x": 1608,
        "pos_y": 4396
      },
      "119": {
        "id": 119,
        "name": "IN-TEL",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box\"><i class=\"fas fa-code-branch\"></i> IN-TEL (119)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Telecommunications System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1": {
            "connections": [
               {
                "node": "1",
                "input": "output_1"
               }
            ]
          }
        },          
        "outputs": {
          "output_1": {
            "connections": [
              {
                "node":"120",
                "output":"input_1"
              },
              {
                "node":"121",
                "output":"input_1"
              },
              {
                "node":"122",
                "output":"input_1"
              }
            ]
          }
        },
        "pos_x": 200,
        "pos_y": 5153
      },
      "120": {
        "id": 120,
        "name": "IN-TEL-CORP",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box\"><i class=\"fas fa-code-branch\"></i> IN-TEL-CORP (120)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Corporate Telecomms Network System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1": {
            "connections": [
               {
                "node": "119",
                "input": "output_1"
               }
            ]
          }
        },          
        "outputs": {
          "output_1": {
            "connections": [
              {
                "node":"123",
                "output":"input_1"
              },
              {
                "node":"124",
                "output":"input_1"
              }
            ]
          }
        },
        "pos_x": 551,
        "pos_y": 5153
      },
      "121": {
        "id": 121,
        "name": "IN-TEL-CUST",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box\"><i class=\"fas fa-code-branch\"></i> IN-TEL-CUST (121)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Customer Telecomms Network System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1": {
            "connections": [
               {
                "node": "119",
                "input": "output_1"
               }
            ]
          }
        },          
        "outputs": {
          "output_1": {
            "connections": [
              {
                "node":"125",
                "output":"input_1"
              },
              {
                "node":"126",
                "output":"input_1"
              }
            ]
          }
        },
        "pos_x": 551,
        "pos_y": 5293
      },
      "122": {
        "id": 122,
        "name": "IN-TEL-STN",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box\"><i class=\"fas fa-code-branch\"></i> IN-TEL-STN (122)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Station Telecomms Network System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1": {
            "connections": [
               {
                "node": "119",
                "input": "output_1"
               }
            ]
          }
        },          
        "outputs": {
          "output_1": {
            "connections": [
              {
                "node":"127",
                "output":"input_1"
              },
              {
                "node":"128",
                "output":"input_1"
              }
            ]
          }
        },
        "pos_x": 551,
        "pos_y": 5433
      },
      "123": {
        "id": 123,
        "name": "IN-TEL-CORP-W",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box\"><i class=\"fas fa-code-branch\"></i> IN-TEL-CORP-W (123)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Wireless Communications Network System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1": {
            "connections": [
               {
                "node": "120",
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
                "node":"111",
                "input":"output_2"
              }
            ]
          }
        },          
        "outputs": {
          "output_1": {
            "connections": [
              {
                "node":"133",
                "output":"input_1"
              },
              {
                "node":"134",
                "output":"input_1"
              }
            ]
          }
        },
        "pos_x": 1118,
        "pos_y": 5071
      },
      "124": {
        "id": 124,
        "name": "IN-TEL-CORP-F",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box\"><i class=\"fas fa-code-branch\"></i> IN-TEL-CORP-F (124)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Fixed Communications Network System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1": {
            "connections": [
               {
                "node": "120",
                "input": "output_1"
               }
            ]
          }
        },          
        "outputs": {
          "output_1": {
            "connections": [{}]
          }
        },
        "pos_x": 849,
        "pos_y": 4994
      },
      "125": {
        "id": 125,
        "name": "IN-TEL-CUST-W",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box\"><i class=\"fas fa-code-branch\"></i> IN-TEL-CUST-W (125)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Wireless Communications Network System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1": {
            "connections": [
               {
                "node": "121",
                "input": "output_1"
               }
            ]
          }
        },          
        "outputs": {
          "output_1": {
            "connections": [
              {
                "node":"131",
                "output":"input_1"
              },
              {
                "node":"132",
                "output":"input_1"
              }
            ]
          }
        },
        "pos_x": 1118,
        "pos_y": 5271
      },
      "126": {
        "id": 126,
        "name": "IN-TEL-CUST-F",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box\"><i class=\"fas fa-code-branch\"></i> IN-TEL-CUST-F (126)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Fixed Communications Network System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1": {
            "connections": [
               {
                "node": "121",
                "input": "output_1"
               }
            ]
          }
        },          
        "outputs": {
          "output_1": {
            "connections": [{}]
          }
        },
        "pos_x": 849,
        "pos_y": 5194
      },
      "127": {
        "id": 127,
        "name": "IN-TEL-STN-W",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box\"><i class=\"fas fa-code-branch\"></i> IN-TEL-STN-W (127)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Wireless Communications Network System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1": {
            "connections": [
               {
                "node": "122",
                "input": "output_1"
               }
            ]
          }
        },          
        "outputs": {
          "output_1": {
            "connections": [
              {
                "node":"129",
                "output":"input_1"
              },
              {
                "node":"130",
                "output":"input_1"
              }
            ]
          }
        },
        "pos_x": 1118,
        "pos_y": 5471
      },
      "128": {
        "id": 128,
        "name": "IN-TEL-STN-F",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box\"><i class=\"fas fa-code-branch\"></i> IN-TEL-STN-F (128)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Fixed Communications Network System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1": {
            "connections": [
               {
                "node": "122",
                "input": "output_1"
               }
            ]
          }
        },          
        "outputs": {
          "output_1": {
            "connections": [{}]
          }
        },
        "pos_x": 849,
        "pos_y": 5394
      },
      "129": {
        "id": 129,
        "name": "IN-TEL-STN-W-5G",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box\"><i class=\"fas fa-code-branch\"></i> IN-TEL-STN-W-5G (129)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  5G FRMCS Radio System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1": {
            "connections": [
               {
                "node": "127",
                "input": "output_1"
               }
            ]
          }
        },          
        "outputs": {
          "output_1": {
            "connections": [{}]
          }
        },
        "pos_x": 1440,
        "pos_y": 5418
      },
      "130": {
        "id": 130,
        "name": "IN-TEL-STN-W-GSMR",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box\" style=\"width:210px\"><i class=\"fas fa-code-branch\"></i> IN-TEL-STN-W-GSMR (130)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  GSMR-R System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1": {
            "connections": [
               {
                "node": "127",
                "input": "output_1"
               }
            ]
          }
        },          
        "outputs": {
          "output_1": {
            "connections": [{}]
          }
        },
        "pos_x": 1440,
        "pos_y": 5538
      },
      "131": {
        "id": 131,
        "name": "IN-TEL-CUST-W-5G",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box\" style=\"width:210px;\"><i class=\"fas fa-code-branch\"></i> IN-TEL-CUST-W-5G (131)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  5G FRMCS Radio System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1": {
            "connections": [
               {
                "node": "125",
                "input": "output_1"
               }
            ]
          }
        },          
        "outputs": {
          "output_1": {
            "connections": [{}]
          }
        },
        "pos_x": 1440,
        "pos_y": 5168
      },
      "132": {
        "id": 132,
        "name": "IN-TEL-CUST-W-GSMR",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box\" style=\"width:215px\"><i class=\"fas fa-code-branch\"></i> IN-TEL-CUST-W-GSMR (132)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  GSMR-R System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1": {
            "connections": [
               {
                "node": "125",
                "input": "output_1"
               }
            ]
          }
        },          
        "outputs": {
          "output_1": {
            "connections": [{}]
          }
        },
        "pos_x": 1440,
        "pos_y": 5288
      },
      "133": {
        "id": 133,
        "name": "IN-TEL-CORP-W-5G",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box\" style=\"width:210px;\"><i class=\"fas fa-code-branch\"></i> IN-TEL-CORP-W-5G (133)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  5G FRMCS Radio System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1": {
            "connections": [
               {
                "node": "123",
                "input": "output_1"
               }
            ]
          }
        },          
        "outputs": {
          "output_1": {
            "connections": [{}]
          }
        },
        "pos_x": 1440,
        "pos_y": 4868
      },
      "134": {
        "id": 134,
        "name": "IN-TEL-CORP-W-GSMR",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box\" style=\"width:220px\"><i class=\"fas fa-code-branch\"></i> IN-TEL-CORP-W-GSMR (134)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  GSMR-R System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1": {
            "connections": [
               {
                "node": "123",
                "input": "output_1"
               }
            ]
          }
        },          
        "outputs": {
          "output_1": {
            "connections": [{}]
          }
        },
        "pos_x": 1440,
        "pos_y": 4988
      }
    }
  }