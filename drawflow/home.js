var home= {
    "data": {
      "1": {
        "id": 1,
        "name": "IN",
        "data": {},
        "class": "SCH",
        "html": "\n <div> \n  <div class=\"title-box\"><i class=\"fas  fa-code-branch\"></i> IN (1)</div>\n  <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n   Infrastructure Systems \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>\n  Change your variable {name} !\n  <input type=\"text\" df-name>\n  </div>\n </div>\n  </div>\n  </div>\n ",
        "typenode": false,
        "inputs": {
            "input_1":{"connections":[{"node":"16","input":"output_1"},
                                      {"node":"29","input":"output_1"},
                                      {"node":"50","input":"output_1"},
                                      {"node":"97","input":"output_1"},
                                      {"node":"100","input":"output_1"},
                                      {"node":"119","input":"output_1"}]}},
        "outputs": {
          "output_1": {
            "connections": [{"node":"2","output":"input_1"},
                            {"node":"4","output":"input_1"},
                            {"node":"12","output":"input_1"},
                            {"node":"21","output":"input_1"},
                            {"node":"25","output":"input_1"},
                            {"node":"29","output":"input_1"},
                            {"node":"105","output":"input_1"},
                            {"node":"119","output":"input_1"},
                            {"node":"152","output":"input_1"},
                            {"node":"155","output":"input_1"}
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
        "html": "\n <div>\n <div class=\"title-box-orange\"><i class=\"fas fa-code-branch\"></i> IN-BLD (2)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n   Bulidings &amp; Stations System \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {         
          "input_1": {"connections":[{"node":"1","input":"output_1"}]},
          "input_2": {"connections":[{"node":"17","input":"output_1"},
                                     {"node":"76","input":"output_1"},
                                     {"node":"78","input":"output_1"}]}
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
             },
             {
               "node":"46",
               "output": "input_1"
             },
             {
               "node":"167",
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
        "html": "\n <div>\n <div class=\"title-box-darkblue\"><i class=\"fas fa-code-branch\"></i> IN-BLD-ST (3)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n   Station System \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1":{"connections":[{"node":"2","input":"output_1"}]},
          "input_2":{"connections":[{"node":"151","input":"output_2"}]}
        },          
        "outputs": {
          "output_1": {
            "connections":[
            {
              "node":"45",
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
        "pos_x": 750,
        "pos_y": 290
      },
      "4": {
        "id": 4,
        "name": "IN-BLD-BS-WM",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-BLD-BS-WM (4)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Waste Management System \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1": {
            "connections": [
              {
                "node": "46",
                "input": "output_1"
              }
            ]
          }
        },          
        "outputs": {
          "output_1": {
            "connections":[]
          },
          "output_2": {
            "connections":[]
          }
        },
        "pos_x": 2150,
        "pos_y": 270
      },
      "5": {
        "id": 5,
        "name": "IN-BLD-ANC",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box-darkblue\"><i class=\"fas fa-code-branch\"></i> IN-BLD-ANC (5)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Anciliary Building System \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
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
              },
              {
                "node":"41",
                "output":"input_1"
              },
              {
                "node":"40",
                "output":"input_1"
              }
            ]
          }
        },
        "pos_x": 750,
        "pos_y": -130
      },
      "6": {
        "id": 6,
        "name": "IN-BLD-DPT",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box-darkblue\"><i class=\"fas fa-code-branch\"></i> IN-BLD-DPT (6)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Depot Building System \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
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
        "pos_x": 745,
        "pos_y": -250
      },
      "7": {
        "id": 7,
        "name": "IN-BLD-FRS",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box-darkblue\"><i class=\"fas fa-code-branch\"></i> IN-BLD-FRS (7)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Freight Site System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
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
              
            ]
          }
        },
        "pos_x": 750,
        "pos_y": 0
      },
      "8": {
        "id": 8,
        "name": "IN-BLD-NMC",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box-darkblue\"><i class=\"fas fa-code-branch\"></i> IN-BLD-NMC (8)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Network Management Control Centre System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
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
        "pos_x": 750,
        "pos_y": 530
      },
      "9": {
        "id": 9,
        "name": "IN-BLD-BS-PV",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-BLD-BS-PV (9)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  PAVA System \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1": {
            "connections": [
              {
                "node": "46",
                "input": "output_1"
              }
            ]
          }
        },          
        "outputs": {
          "output_1": {
            "connections":[]
          },
          "output_2": {
            "connections":[]
          }
        },
        "pos_x": 2160,
        "pos_y": 630
      },
      "10": {
        "id": 10,
        "name": "IN-BLD-BS-FF",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-BLD-BS-FF (10)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Fixtures &amp; Fittings System \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1": {
            "connections": [
              {
                "node": "46",
                "input": "output_1"
              }
            ]
          }
        },          
        "outputs": {
          "output_1": {
            "connections":[]
          },
          "output_2": {
            "connections":[]
          }
        },
        "pos_x": 1540,
        "pos_y": 630
      },
      "11": {
        "id": 11,
        "name": "IN-BLD-BS-ME",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-BLD-BS-ME (11)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Mechanical System \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1": {
            "connections": [
              {
                "node": "46",
                "input": "output_1"
              }
            ]
          }
        },          
        "outputs": {
          "output_1": {
            "connections":[]
          },
          "output_2": {
            "connections":[]
          }
        },
        "pos_x": 1860,
        "pos_y": 630
      },
      "12": {
        "id": 12,
        "name": "IN-CCS",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box-orange\"><i class=\"fas fa-code-branch\"></i> IN-CCS (12)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Command, Control &amp; Signalling System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
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
        "html": "\n <div>\n <div class=\"title-box-darkblue\"><i class=\"fas fa-code-branch\"></i> IN-CCS-SIG (13)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Conventional Signalling System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
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
              {"node":"55","output":"input_1"},
              {"node":"56","output":"input_1"},
              {"node":"57","output":"input_1"},
              {"node":"59","output":"input_1"},
              {"node":"60","output":"input_1"},
              {"node":"61","output":"input_1"},
              {"node":"62","output":"input_1"},
              {"node":"63","output":"input_1"}
            ]
          },
          "output_2":{"connections":[{"node":"40","output":"input_2"}]}
        },
        "pos_x": 763,
        "pos_y": 1107
      },
      "14": {
        "id": 14,
        "name": "IN-CCS-TCS",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box-darkblue\"><i class=\"fas fa-code-branch\"></i> IN-CCS-TCS (14)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  ETCS System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1":{"connections":[{"node":"12","input":"output_1"}]},
          "input_2":{"connections":[{"node":"123","input":"output_2"}]}
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
          "output_2":{"connections":[]}
        },
        "pos_x": 761,
        "pos_y": 992
      },
      "15": {
        "id": 15,
        "name": "IN-CCS-TMS",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box-darkblue\"><i class=\"fas fa-code-branch\"></i> IN-CCS-TMS (15)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Traffic Management System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
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
                "node":"58",
                "output":"input_1"
              },
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
        "html": "\n <div>\n <div class=\"title-box-orange\"><i class=\"fas fa-code-branch\"></i> IN-DR (16)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Drainage System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1": {
            "connections": [
              {
                "node": "19",
                "input": "output_1"
            },
            {
                "node": "18",
                "input": "output_1"
            },
            {
                "node": "17",
                "input": "output_1"
            },
            {
                "node": "20",
                "input": "output_1"
            },
            {
                "node": "67",
                "input": "output_1"
            }
            ]
          }
        },          
        "outputs": {
          "output_1": {
            "connections": [
              {
                "node": "1",
                "output": "input_1"
            }
            ]
          }
        },
        "pos_x": -1100,
        "pos_y": 1500
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
            "connections": []} },          
        "outputs": {
          "output_1": {"connections":[{"node":"16","output":"input_1"}]},
          "output_1": {"connections":[{"node":"2","output":"input_1"}]}
        },
        "pos_x": -1650,
        "pos_y": 1270
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
            "connections": [] }  },          
        "outputs": {
          "output_1": {
            "connections": [
              {
                "node":"16",
                "output":"input_1"
              }
            ]
          }
        },
        "pos_x": -1650,
        "pos_y": 1600
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
            "connections": [] }  },          
        "outputs": {
          "output_1": {
            "connections": [
              {
                "node":"16",
                "output":"input_1"
              }
            ]
          }
        },
        "pos_x": -1650,
        "pos_y": 1460
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
                "node": "69",
                "input": "output_1"
            },
            {
                "node": "68",
                "input": "output_1"
            },
            {
                "node": "34",
                "input": "output_1"
            }
            ]
          }
        },          
        "outputs": {
          "output_1": {
            "connections": [
              {
                "node": "16",
                "output": "input_1"
            }
            ]
          }
        },
        "pos_x": -1650,
        "pos_y": 1740
      },
      "21": {
        "id": 21,
        "name": "IN-EN",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box-orange\"><i class=\"fas fa-code-branch\"></i> IN-EN (21)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Power / Energy System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
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
          "output_1": {"connections":[{"node":"22","output":"input_1"},
              {"node":"23","output":"input_1"},
              {"node":"24","output":"input_1"},
              {"node":"84","output":"input_1"},
              {"node":"85","output":"input_1"},
              {"node":"86","output":"input_1"},
              {"node":"87","output":"input_1"},
              {"node":"90","output":"input_1"},
              {"node":"91","output":"input_1"}
            ]
          },
          "output_2": {"connections":[{"node":"35","output":"input_1"}]}
        },
        "pos_x": 207,
        "pos_y": 1957
      },
      "22": {
        "id": 22,
        "name": "IN-EN-NT",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box-darkblue\"><i class=\"fas fa-code-branch\"></i> IN-EN-NT (22)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Non-Traction Power System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
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
            "connections": []
          }
        },
        "pos_x": 620,
        "pos_y": 1450
      },
      "23": {
        "id": 23,
        "name": "IN-EN-STO",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box-darkblue\"><i class=\"fas fa-code-branch\"></i> IN-EN-STO (23)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Power Storage System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
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
            "connections": []
          }
        },
        "pos_x": 720,
        "pos_y": 1590
      },
      "24": {
        "id": 24,
        "name": "IN-EN-NTP",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box-darkblue\"><i class=\"fas fa-code-branch\"></i> IN-EN-NTP (24)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  HV Non Traction Power System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
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
            "connections": [{"node":"30","output":"input_1"}]
          }
        },
        "pos_x": 910,
        "pos_y": 2260
      },
      "25": {
        "id": 25,
        "name": "IN-ENV",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box-orange\"><i class=\"fas fa-code-branch\"></i> IN-ENV (25)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Environment System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
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
              },
              {
                "node":"141",
                "output":"input_1"
              },
              {
                "node":"145",
                "output":"input_1"
              },
              {
                "node":"146",
                "output":"input_1"
              },
              {
                "node":"147",
                "output":"input_1"
              }
            ]
          }
        },
        "pos_x": 201,
        "pos_y": 3000
      },
      "26": {
        "id": 26,
        "name": "IN-ENV-LAN",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box-darkblue\"><i class=\"fas fa-code-branch\"></i> IN-ENV-LAN (26)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Landscape System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
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
              },
              {
                "node":"140",
                "output":"input_1"
              }
            ]
          }
        },
        "pos_x": 580,
        "pos_y": 2730
      },
      "27": {
        "id": 27,
        "name": "IN-ENV-LAN-OS",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-ENV-LAN-OS (27)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Public Open Space &amp; Recreation System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
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
        "pos_x": 1300,
        "pos_y": 2600
      },
      "28": {
        "id": 28,
        "name": "IN-ENV-LAN-PS",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-ENV-LAN-PS (28)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Planting System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
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
        "pos_x": 1300,
        "pos_y": 2730
      },
      "29": {
        "id": 29,
        "name": "IN-GD",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box-orange\"><i class=\"fas fa-code-branch\"></i> IN-GD (29)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Guidance System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
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
          "output_1": {"connections":[{"node":"1","output":"input_1"}]}
        },
        "pos_x": -1100,
        "pos_y": 2170
      },
      "30": {
        "id": 30,
        "name": "IN-EN-NTP-VC",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-EN-NTP-VC (30)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Vehicle Charging System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
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
          "output_1": {"connections":[]}
        },
        "pos_x": 1350,
        "pos_y": 2350
      },
      "31": {
        "id": 31,
        "name": "IN-EN-LV-RP",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-EN-LV-RP (31)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Renewable Power System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1": {
            "connections": [
               {
                "node": "90",
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
        "pos_x": 1500,
        "pos_y": 2060
      },
      "32": {
        "id": 32,
        "name": "IN-BLD-BS-FS",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-BLD-BS-FS (32)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Fire &amp; Safety System \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1":{"connections":[{"node":"46","input":"output_1"}]},
          "input_2":{"connections":[{"node":"94","input":"output_2"}]}
        },          
        "outputs": {
          "output_1": {
            "connections":[]
          },
          "output_2": {
            "connections":[]
          }
        },
        "pos_x": 1860,
        "pos_y": 520
      },
      "33": {
        "id": 33,
        "name": "IN-GD-PW",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box-darkblue\"><i class=\"fas fa-code-branch\"></i> IN-GD-PW (33)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Permanent Way System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1":{"connections":[{"node":"95","input":"output_1" },
                                    {"node":"96","input":"output_1"}]}
        },          
        "outputs": {
          "output_1": {
            "connections": [
                {
                    "node": "29",
                    "output": "input_1"
                }
            ]
        }
        },
        "pos_x": -1650,
        "pos_y": 2340
      },
      "34": {
        "id": 34,
        "name": "IN-DR-RL-TRA",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-DR-RL-TRA (34)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Track Drainage System System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1": {
            "connections": [
               
            ]
          },
          "input_2": {
            "connections": [
               
            ]
          }
        },          
        "outputs": {
          "output_1": {"connections":[{"node":"20","output":"input_1" }]},
          "output_2": {"connections":[{"node":"33","output":"input_2" }]}
        },
        "pos_x": -2170,
        "pos_y": 2050
      },
      "35": {
        "id": 35,
        "name": "IN-BLD-ANC-SUB",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-BLD-ANC-SUB (35)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Substation System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1": {"connections":[{"node":"5","input":"output_1"}]},
          "input_2": {"connections":[{"node":"21","input":"output_2"}]}
        },          
        "outputs": {},
        "pos_x": 1530,
        "pos_y": -160
      },
      "36": {
        "id": 36,
        "name": "IN-BLD-ANC-SW",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-BLD-ANC-SW (36)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Switching STation System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
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
        "pos_x": 1520,
        "pos_y": -280
      },
      "37": {
        "id": 37,
        "name": "IN-BLD-BS-EE",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-BLD-BS-EE (37)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Energy Efficiency System \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1": {
            "connections": [
              {
                "node": "46",
                "input": "output_1"
              }
            ]
          }
        },          
        "outputs": {
          "output_1": {
            "connections":[]
          },
          "output_2": {
            "connections":[]
          }
        },
        "pos_x": 2160,
        "pos_y": 410
      },
      "38": {
        "id": 38,
        "name": "IN-BLD-DPT-STB",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-BLD-DPT-STB (38)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Stabling System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
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
        "pos_x": 1200,
        "pos_y": -400
      },
      "39": {
        "id": 39,
        "name": "IN-BLD-BS-UT",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-BLD-BS-UT (39)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Utilities System \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1": {
            "connections": [
              {
                "node": "46",
                "input": "output_1"
              }
            ]
          }
        },          
        "outputs": {
          "output_1": {
            "connections":[]
          },
          "output_2": {
            "connections":[]
          }
        },
        "pos_x": 1860,
        "pos_y": 400
      },
      "40": {
        "id": 40,
        "name": "IN-BLD-ANC-REB",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-BLD-ANC-REB (40)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Relocatable Equipment Building (REB) System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1":{"connections":[{"node":"5","input":"output_1"}]},
          "input_2":{"connections":[{"node":"13","input":"output_1"},
                                    {"node":"111","input":"output_1"}]}
        },          
        "outputs": {},
        "pos_x": 1820,
        "pos_y": -170
      },
      "41": {
        "id": 41,
        "name": "IN-BLD-ANC-LOC",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-BLD-ANC-LOC (41)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  LOC / Cabinet System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1":{"connections":[{"node":"5","input":"output_1"}]},
          "input_2":{"connections":[{"node":"119","input":"output_1"}]}
        },          
        "outputs": {},
        "pos_x": 1820,
        "pos_y": -280
      },
      "42": {
        "id": 42,
        "name": "IN-BLD-BS-BC",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-BLD-BS-BC (42)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Building Control System \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1": {
            "connections": [
              {
                "node": "46",
                "input": "output_1"
              }
            ]
          }
        },          
        "outputs": {
          "output_1": {
            "connections":[]
          },
          "output_2": {
            "connections":[]
          }
        },
        "pos_x": 2160,
        "pos_y": 520
      },
      "43": {
        "id": 43,
        "name": "IN-BLD-BS-SEC",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-BLD-BS-SEC (43)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Security &amp; Safety System \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1": {
            "connections": [
              {
                "node": "46",
                "input": "output_1"
              }
            ]
          }
        },          
        "outputs": {
          "output_1": {
            "connections":[]
          },
          "output_2": {
            "connections":[]
          }
        },
        "pos_x": 1550,
        "pos_y": 500
      },
      "44": {
        "id": 44,
        "name": "IN-BLD-BS-WF",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-BLD-BS-WF (44)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Way Finding &amp; Signage System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1": {"connections":[{"node":"46","input":"output_1" }]}
        },          
        "outputs": {},
        "pos_x": 1550,
        "pos_y": 270
      },
      "45": {
        "id": 45,
        "name": "IN-BLD-ST-FAC",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-BLD-ST-FAC (45)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Facilities / Amenities System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
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
        "pos_x": 1200,
        "pos_y": 170
      },
      "46": {
        "id": 46,
        "name": "IN-BLD-BS",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box-darkblue\"><i class=\"fas fa-code-branch\"></i> IN-BLD-BS (46)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n Building Services System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1":{"connections":[{"node":"2","input":"output_1"}]},
          "input_2":{"connections":[{"node":"150","input":"output_2"},
                                    {"node":"149","input":"output_2"},
                                    {"node":"148","input":"output_2"}]}
        },          
        "outputs": {"output_1":{"connections":[{"node":"44","output":"input_1"},
                                               {"node":"47","output":"input_1"}]}},
        "pos_x": 745,
        "pos_y": 410
      },
      "47": {
        "id": 47,
        "name": "IN-BLD-BS-EL",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-BLD-BS-EL (47)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n Electrical System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1": {
            "connections": [
               {
                "node": "46",
                "input": "output_1"
               }
            ]
          }
        },          
        "outputs": {},
        "pos_x": 1550,
        "pos_y": 400
      },
      "48": {
        "id": 48,
        "name": "IN-BLD-BS-NC",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-BLD-BS-NC (48)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Sustainability &amp; Net Carbon Zero System \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1": {
            "connections": [
              {
                "node": "46",
                "input": "output_1"
              }
            ]
          }
        },          
        "outputs": {
          "output_1": {
            "connections":[]
          },
          "output_2": {
            "connections":[]
          }
        },
        "pos_x": 1850,
        "pos_y": 270
      },
      "49": {
        "id": 49,
        "name": "IN-GT-EW-APP",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-GT-EW-APP (49)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Approach Earthworks System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1": {
            "connections": []
          }
        },          
        "outputs": {
          "output_1": {
            "connections": [{
              "node": "101",
              "output": "input_1"
          }]
          }
        },
        "pos_x": -2200,
        "pos_y": 3140
      },
      "50": {
        "id": 50,
        "name": "IN-EXT",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box-orange\"><i class=\"fas fa-code-branch\"></i> IN-EXT (50)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  External (EWR Interfacing) System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1": {"connections": [{"node":"51","input":"output_1"},
                                      {"node":"59","input":"output_1"},
                                      {"node":"64","input":"output_1"},
                                      {"node":"65","input":"output_1"},
                                      {"node":"66","input":"output_1"},
                                      {"node":"70","input":"output_1"}] }
        },          
        "outputs": {
          "output_1": {
            "connections": [
              {
                "node": "1",
                "output": "input_1"
            }
            ]
          }
        },
        "pos_x": -1120,
        "pos_y": 3920
      },
      "51": {
        "id": 51,
        "name": "IN-EXT-HS",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box-darkblue\"><i class=\"fas fa-code-branch\"></i> IN-EXT-HS (51)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Highway Systems  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1": {"connections":[{"node":"71","input":"output_1"},
                                     {"node":"72","input":"output_1"},
                                     {"node":"73","input":"output_1"}]}
        },          
        "outputs": {
          "output_1": {
            "connections": [{
              "node": "50",
              "output": "input_1"
          }]
          }
        },
        "pos_x": -1650,
        "pos_y": 3570
      },
      "52": {
        "id": 52,
        "name": "IN-CCS-TMS-ATS",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-CCS-TMS-ATS (52)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n Automatic Train Service (ATS) System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
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
        "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-CCS-TCS-OB (53)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n ETCS Onboard System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
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
        "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-CCS-TCS-TR (54)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n ETCS Trackside System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
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
        "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-CCS-SIG-INT (55)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n Interlocking System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
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
        "name": "IN-CCS-SIG-TD",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-CCS-SIG-TD (56)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n Train Describer System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
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
        "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-CCS-SIG-POS (57)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n Point Operating System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
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
        "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-CCS-SIG-ROC (58)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n Rail Operating Centre System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
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
        "pos_y": 1180
      },
      "59": {
        "id": 59,
        "name": "IN-EXT-GBR",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box-darkblue\"><i class=\"fas fa-code-branch\"></i> IN-EXT-GBR (59)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  NR / GBR Systems  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1": {
            "connections": []
          }
        },          
        "outputs": {
          "output_1": {
            "connections": [{
              "node": "50",
              "output": "input_1"
          }]
          }
        },
        "pos_x": -1650,
        "pos_y": 3870
      },
      "60": {
        "id": 60,
        "name": "IN-CCS-SIG-SS",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-CCS-SIG-SS (60)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n Signals &amp; Signs System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
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
        "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-CCS-SIG-TDS (61)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n Train Detection System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
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
        "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-CCS-SIG-TRTS (62)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n TRTS System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
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
        "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-CCS-SIG-WS (63)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n TPWS/AWS System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
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
        "name": "IN-EXT-US",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box-darkblue\"><i class=\"fas fa-code-branch\"></i> IN-EXT-US (64)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Utility Systems  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1": {
            "connections": [{"node":"74","input":"output_1"},
                            {"node":"75","input":"output_1"},
                            {"node":"76","input":"output_1"},
                            {"node":"77","input":"output_1"},
                            {"node":"78","input":"output_1"},
                            {"node":"79","input":"output_1"},
                            {"node":"80","input":"output_1"}]
          }
        },          
        "outputs": {
          "output_1": {
            "connections": [{
              "node": "50",
              "output": "input_1"
          }]
          }
        },
        "pos_x": -1650,
        "pos_y": 4170
      },
      "65": {
        "id": 65,
        "name": "IN-EXT-HS2",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box-darkblue\"><i class=\"fas fa-code-branch\"></i> IN-EXT-HS2 (65)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  HS2 Rail Systems  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1": {
            "connections": []
          }
        },          
        "outputs": {
          "output_1": {
            "connections": [{
              "node": "50",
              "output": "input_1"
          }]
          }
        },
        "pos_x": -1650,
        "pos_y": 4470
      },
      "66": {
        "id": 66,
        "name": "IN-EXT-RU",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box-darkblue\"><i class=\"fas fa-code-branch\"></i> IN-EXT-RU (66)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Railway Undertaking Systems  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1": {"connections": [{"node":"81","input":"output_1"},
                                      {"node":"82","input":"output_1"}]}
        },          
        "outputs": {
          "output_1": {
            "connections": [{
              "node": "50",
              "output": "input_1"
          }]
          }
        },
        "pos_x": -1650,
        "pos_y": 4770
      },
      "67": {
        "id": 67,
        "name": "IN-DR-RL-PS",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box-darkblue\"><i class=\"fas fa-code-branch\"></i> IN-DR-RL-PS (67)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Pumping Station System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1": {
            "connections": [
               
            ]
          }
        },          
        "outputs": {
          "output_1": {
            "connections": [{
              "node": "16",
              "output": "input_1"
             }]
          }
        },
        "pos_x": -1650,
        "pos_y": 1860
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
               
            ]
          }
        },          
        "outputs": {
          "output_1": {
            "connections": [{
              "node": "20",
              "output": "input_1"
             }]
          }
        },
        "pos_x": -2170,
        "pos_y": 1900
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
               
            ]
          }
        },          
        "outputs": {
          "output_1": {
            "connections": [{
              "node": "20",
              "output": "input_1"
             }]
          }
        },
        "pos_x": -2170,
        "pos_y": 1750
      },
      "70": {
        "id": 70,
        "name": "IN-EXT-3RD",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box-darkblue\"><i class=\"fas fa-code-branch\"></i> IN-EXT-3RD (70)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Third Party Systems  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1": {"connections": [{"node":"83","input":"output_1"},
                                      {"node":"88","input":"output_1"},
                                      {"node":"92","input":"output_1"},
                                      {"node":"93","input":"output_1"},
                                      {"node":"94","input":"output_1"}] }
        },          
        "outputs": {
          "output_1": {
            "connections": [{
              "node": "50",
              "output": "input_1"
          }]
          }
        },
        "pos_x": -1650,
        "pos_y": 5070
      },
      "71": {
        "id": 71,
        "name": "IN-EXT-HS-AW",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-EXT-HS-AW (71)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Accessway Systems  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1": {
            "connections": []
          }
        },          
        "outputs": {
          "output_1": {
            "connections": [{
              "node": "51",
              "output": "input_1"
          }]
          }
        },
        "pos_x": -2760,
        "pos_y": 3560
      },
      "72": {
        "id": 72,
        "name": "IN-EXT-HS-RD",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-EXT-HS-RD (72)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n Road Systems  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1": {
            "connections": []
          }
        },          
        "outputs": {
          "output_1": {
            "connections": [{
              "node": "51",
              "output": "input_1"
          }]
          }
        },
        "pos_x": -2760,
        "pos_y": 3660
      },
      "73": {
        "id": 73,
        "name": "IN-EXT-HS-PRW",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-EXT-HS-PRW (73)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n PRoW Systems  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1": {
            "connections": []
          }
        },          
        "outputs": {
          "output_1": {
            "connections": [{
              "node": "51",
              "output": "input_1"
          }]
          }
        },
        "pos_x": -2760,
        "pos_y": 3440
      },
      "74": {
        "id": 74,
        "name": "IN-EXT-US-GSP",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-EXT-US-GSP (74)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n National Grid - Grid Supply Point (GSP) Systems  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1": {
            "connections": []
          }
        },          
        "outputs": {
          "output_1": {
            "connections": [{
              "node": "64",
              "output": "input_1"
          }]
          }
        },
        "pos_x": -2660,
        "pos_y": 3900
      },
      "75": {
        "id": 75,
        "name": "IN-EXT-US-DNO",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-EXT-US-DNO (75)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n Distribution Network Operator (DNO)  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1": {
            "connections": []
          }
        },          
        "outputs": {
          "output_1": {
            "connections": [{
              "node": "64",
              "output": "input_1"
          }]
          }
        },
        "pos_x": -2660,
        "pos_y": 4030
      },
      "76": {
        "id": 76,
        "name": "IN-EXT-US-H2O",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-EXT-US-H2O (76)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n Water Mains Infrastructure Network  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1": {
            "connections": []
          }
        },          
        "outputs": {
          "output_1":{"connections":[{"node":"64","output":"input_1"}]},
          "output_2":{"connections":[{"node":"2","output":"input_1"}]}
        },
        "pos_x": -2360,
        "pos_y": 3900
      },
      "77": {
        "id": 77,
        "name": "IN-EXT-US-SWR",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-EXT-US-SWR (77)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n Sewer Mains Infrastructure Network  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1": {
            "connections": []
          }
        },          
        "outputs": {
          "output_1": {
            "connections": [{
              "node": "64",
              "output": "input_1"
          }]
          }
        },
        "pos_x": -2350,
        "pos_y": 4040
      },
      "78": {
        "id": 78,
        "name": "IN-EXT-US-GAS",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-EXT-US-GAS (78)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n Gas Infrastructure Network  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1": {
            "connections": []
          }
        },          
        "outputs": {
          "output_1": {"connections":[{"node":"64","output":"input_1"}]},
          "output_2": {"connections":[{"node":"2","output":"input_1"}]}
        },
        "pos_x": -2940,
        "pos_y": 3900
      },
      "79": {
        "id": 79,
        "name": "IN-EXT-US-PC",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-EXT-US-PC (79)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n Petrochemical Infrastructure Network  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1": {
            "connections": []
          }
        },          
        "outputs": {
          "output_1": {
            "connections": [{
              "node": "64",
              "output": "input_1"
          }]
          }
        },
        "pos_x": -2930,
        "pos_y": 4040
      },
      "80": {
        "id": 80,
        "name": "IN-EXT-US-PWR",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-EXT-US-PWR (80)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n Power Infrastructure Network  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1": {
            "connections": []
          }
        },          
        "outputs": {
          "output_1": {
            "connections": [{
              "node": "64",
              "output": "input_1"
          }]
          }
        },
        "pos_x": -2350,
        "pos_y": 4180
      },
      "81": {
        "id": 81,
        "name": "IN-EXT-RU-FR",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-EXT-RU-FR (81)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n Freight Network System \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1": {
            "connections": []
          }
        },          
        "outputs": {
          "output_1": {
            "connections": [{
              "node": "66",
              "output": "input_1"
          }]
          }
        },
        "pos_x": -2330,
        "pos_y": 4700
      },
      "82": {
        "id": 82,
        "name": "IN-EXT-RU-OC",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-EXT-RU-OC (82)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n TOC/FOC Operational &amp; Business Systems \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1": {
            "connections": []
          }
        },          
        "outputs": {
          "output_1": {
            "connections": [{
              "node": "66",
              "output": "input_1"
          }]
          }
        },
        "pos_x": -2340,
        "pos_y": 4820
      },
      "83": {
        "id": 83,
        "name": "IN-EXT-3RD-TEL",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-EXT-3RD-TEL (83)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n Telecoms Infrastructure Network \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1": {
            "connections": []
          }
        },          
        "outputs": {
          "output_1": {
            "connections": [{
              "node": "70",
              "output": "input_1"
          }]
          }
        },
        "pos_x": -2990,
        "pos_y": 4970
      },
      "84": {
        "id": 84,
        "name": "IN-EN-ACDC",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box-darkblue\"><i class=\"fas fa-code-branch\"></i> IN-EN-ACDC (84)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  AC/DC Conversion System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
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
            "connections": [{}]
          }
        },
        "pos_x": 880,
        "pos_y": 1700
      },
      "85": {
        "id": 85,
        "name": "IN-EN-BND",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box-darkblue\"><i class=\"fas fa-code-branch\"></i> IN-EN-BND (85)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Earthing &amp; Bonding System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
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
            "connections": [{}]
          }
        },
        "pos_x": 1050,
        "pos_y": 1830
      },
      "86": {
        "id": 86,
        "name": "IN-EN-CBL",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box-darkblue\"><i class=\"fas fa-code-branch\"></i> IN-EN-CBL (86)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  HV/LV Cable System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1": {
            "connections": [
               {
                "node": "21",
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
        "pos_x": 750,
        "pos_y": 2390
      },
      "87": {
        "id": 87,
        "name": "IN-EN-ISO",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box-darkblue\"><i class=\"fas fa-code-branch\"></i> IN-EN-ISO (87)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Protection / Isolation System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
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
            "connections": [{}]
          }
        },
        "pos_x": 1330,
        "pos_y": 1890
      },
      "88": {
        "id": 88,
        "name": "IN-EXT-3RD-ATM",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-EXT-3RD-ATM (88)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n Adjacent Transport Mode Systems (Road/Sea/Air) \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1": {
            "connections": []
          }
        },          
        "outputs": {
          "output_1":{"connections":[{"node":"70","output":"input_1"}]},
          "output_2":{"connections":[{"node":"176","output":"input_2"}]}
        },
        "pos_x": -2660,
        "pos_y": 4960
      },
      "89": {
        "id": 89,
        "name": "IN-EN-TRP-OLE",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box-lightblue\" ><i class=\"fas fa-code-branch\"></i> IN-EN-TRP-OLE (89)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  OLE System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1": {
            "connections": [
               {
                "node": "91",
                "input": "output_1"
               }
            ]
          },
          "input_2": {
            "connections":[]
          }
        },          
        "outputs": {
          "output_1": {
            "connections": [{}]
          }
        },
        "pos_x": 1440,
        "pos_y": 2200
      },
      "90": {
        "id": 90,
        "name": "IN-EN-LV",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box-darkblue\"><i class=\"fas fa-code-branch\"></i> IN-EN-LV (90)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  LV Distribution Power System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
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
            "connections": [{"node":"31","output":"input_1"}]
          }
        },
        "pos_x": 1040,
        "pos_y": 1960
      },
      "91": {
        "id": 91,
        "name": "IN-EN-TRP",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box-darkblue\"><i class=\"fas fa-code-branch\"></i> IN-EN-TRP (91)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  HV Traction Power System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
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
            "connections": [{"node":"89","output":"input_1"}]
          }
        },
        "pos_x": 990,
        "pos_y": 2110
      },
      "92": {
        "id": 92,
        "name": "IN-EXT-3RD-WF",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-EXT-3RD-WF (92)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n Weather Forecasting Systems (Road/Sea/Air) \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1": {
            "connections": []
          }
        },          
        "outputs": {
          "output_1": {
            "connections": [{
              "node": "70",
              "output": "input_1"
          }]
          }
        },
        "pos_x": -2330,
        "pos_y": 4970
      },
      "93": {
        "id": 93,
        "name": "IN-EXT-3RD-ISP",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-EXT-3RD-ISP (93)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n ISP Systems \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1": {
            "connections": []
          }
        },          
        "outputs": {
          "output_1": {
            "connections": [{
              "node": "70",
              "output": "input_1"
          }]
          }
        },
        "pos_x": -2330,
        "pos_y": 5120
      },
      "94": {
        "id": 94,
        "name": "IN-EXT-3RD-FH",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-EXT-3RD-FH (94)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n Fire Hydrant Mains Systems \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1": {
            "connections": []
          }
        },          
        "outputs": {
          "output_1":{"connections":[{"node":"70","output":"input_1"}]},
          "output_2":{"connections":[{"node":"32","output":"input_2"}]}
        },
        "pos_x": -2650,
        "pos_y": 5120
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
               
            ]
          }
        },          
        "outputs": {
          "output_1": {
            "connections": [{"node":"33","output":"input_1" }]}
        },
        "pos_x": -2150,
        "pos_y": 2350
      },
      "96": {
        "id": 96,
        "name": "IN-GD-PW-SC",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-GD-PW-SC (96)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  S&amp;C System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1": { "connections": []}
        },          
        "outputs": {
          "output_1": {
            "connections": [{"node":"33","output":"input_1"}]
          }
        },
        "pos_x": -2150,
        "pos_y": 2470
      },
      "97": {
        "id": 97,
        "name": "IN-CM",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box-orange\"><i class=\"fas fa-code-branch\"></i> IN-CM (97)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n   Control &amp; Monitoring System \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {"input_1":{"connections":[{"node":"98","input":"output_1"},
                                             {"node":"99","input":"output_1"},
                                             {"node":"121","input":"output_1"}]}},          
        "outputs": {
          "output_1": {
            "connections": [{"node":"1","output":"input_1"}]
          },
          "output_2": {
            "connections": []
          }
        },
        "pos_x": -1100,
        "pos_y": -100
      },
      "98": {
        "id": 98,
        "name": "IN-CM-MO",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box-darkblue\"><i class=\"fas fa-code-branch\"></i> IN-CM-MO (98)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Monitoring System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1": {
            "connections": [{"node":"122","input":"output_1"},
                            {"node":"125","input":"output_1"},
                            {"node":"126","input":"output_1"},
                            {"node":"127","input":"output_1"},
                            {"node":"128","input":"output_1"}]
          }
        },          
        "outputs": {
          "output_1": {
            "connections": [
              {
                "node": "97",
                "output": "input_1"
            }
            ]
          }
        },
        "pos_x": -1650,
        "pos_y": 125
      },
      "99": {
        "id": 99,
        "name": "IN-CM-CA",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box-darkblue\"><i class=\"fas fa-code-branch\"></i> IN-CM-CA (99)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Camera System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1": {
            "connections": [{"node":"129","input":"output_1"},
                            {"node":"130","input":"output_1"},
                            {"node":"131","input":"output_1"}]
          }
        },          
        "outputs": {
          "output_1": {
            "connections": [
              {
                "node": "97",
                "output": "input_1"
            }
            ]
          }
        },
        "pos_x": -1800,
        "pos_y": -270
      },
      "100": {
        "id": 100,
        "name": "IN-GT",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box-orange\"><i class=\"fas fa-code-branch\"></i> IN-GT (100)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Geo-Technical System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1": {
            "connections": [
              {
                "node": "102",
                "input": "output_1"
            },
            {
                "node": "101",
                "input": "output_1"
            }
            ]
          }
        },          
        "outputs": {
          "output_1": {
            "connections": [
              {
                "node": "1",
                "output": "input_1"
            }
            ]
          }
        },
        "pos_x": -1120,
        "pos_y": 2920
      },
      "101": {
        "id": 101,
        "name": "IN-GT-EW",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box-darkblue\"><i class=\"fas fa-code-branch\"></i> IN-GT-EW (101)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Earthwork System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1": {
            "connections": [
              {
                "node": "104",
                "input": "output_1"
            },
            {
                "node": "103",
                "input": "output_1"
            },
            {
                "node": "49",
                "input": "output_1"
            }
            ]
          }
        },          
        "outputs": {
          "output_1": {
            "connections": [
              {
                "node": "100",
                "output": "input_1"
            }
            ]
          }
        },
        "pos_x": -1650,
        "pos_y": 2790
      },
      "102": {
        "id": 102,
        "name": "IN-GT-GI",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box-darkblue\"><i class=\"fas fa-code-branch\"></i> IN-GT-GI (102)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Ground Improvement / Remediation System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1": {
            "connections": []
          }
        },          
        "outputs": {
          "output_1": {
            "connections": [{
              "node": "100",
              "output": "input_1"
          }]
          }
        },
        "pos_x": -1650,
        "pos_y": 2970
      },
      "103": {
        "id": 103,
        "name": "IN-GT-EW-CUT",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-GT-EW-CUT (103)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Cutting System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1": {
            "connections": []
          }
        },          
        "outputs": {
          "output_1": {
            "connections": [{
              "node": "101",
              "output": "input_1"
          }]
          }
        },
        "pos_x": -2200,
        "pos_y": 2790
      },
      "104": {
        "id": 104,
        "name": "IN-GT-EW-EMB",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-GT-EW-EMB (104)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Embankment System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1": {
            "connections": []
          }
        },          
        "outputs": {
          "output_1": {
            "connections": [{
              "node": "101",
              "output": "input_1"
          }]
          }
        },
        "pos_x": -2200,
        "pos_y": 2970
      },
      "105": {
        "id": 105,
        "name": "IN-STR",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box-orange\"><i class=\"fas fa-code-branch\"></i> IN-STR (105)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Civils &amp; Structures System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
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
                "node":"139",
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
          }
        },          
        "outputs": {
          "output_1": {
            "connections": [{}]
          },
          "output_2": {
            "connections": [
              {"node":"60","output":"input_2"}
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
        "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-STR-AUX-MAST (111)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Tower / Mast Structure System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1":{"connections":[{"node":"106","input":"output_1"}]},
          "input_2":{"connections":[{"node":"123","input":"output_1"}]}
        },          
        "outputs": {
          "output_1": {"connections":[]},
          "output_2" : {"connections":[]}
        },
        "pos_x": 891,
        "pos_y": 4010
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
        "name": "IN-STR-AUX-CMS",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-STR-AUX-CMS (113)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Cable Management System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
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
        "html": "\n <div>\n <div class=\"title-box-orange\"><i class=\"fas fa-code-branch\"></i> IN-TEL (119)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Telecommunications System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
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
          "output_1": {"connections":[{"node":"1","output":"input_1"}]},
          "output_2": {"connections":[{"node":"41","output":"input_1"}]}
        },
        "pos_x": -1100,
        "pos_y": 850
      },
      "120": {
        "id": 120,
        "name": "IN-TEL-NET",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box-darkblue\"><i class=\"fas fa-code-branch\"></i> IN-TEL-NET (120)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Corporate Telecomms Network System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1": {
            "connections": [
              {
                "node": "124",
                "input": "output_1"
            },
            {
                "node": "123",
                "input": "output_1"
            }
            ]
          }
        },          
        "outputs": {
          "output_1": {
            "connections": [
              {
                "node": "119",
                "output": "input_1"
            }
            ]
          }
        },
        "pos_x": -1650,
        "pos_y": 825
      },
      "121": {
        "id": 121,
        "name": "IN-CM-CT",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box-darkblue\"><i class=\"fas fa-code-branch\"></i> IN-CM-CT (121)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Control &amp; Management System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1": {
            "connections": [{"node":"132","input":"output_1"},
                            {"node":"148","input":"output_1"},
                            {"node":"149","input":"output_1"},
                            {"node":"150","input":"output_1"},
                            {"node":"151","input":"output_1"}]
          }
        },          
        "outputs": {
          "output_1": {
            "connections": [
              {
                "node": "97",
                "output": "input_1"
            }
            ]
          }
        },
        "pos_x": -1650,
        "pos_y": -600
      },
      "122": {
        "id": 122,
        "name": "IN-CM-MO-OC",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-CM-MO-OC (122)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Occupancy Monitoring System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1": {
            "connections": []
          }
        },          
        "outputs": {
          "output_1": {
            "connections": [
              {
                "node": "98",
                "output": "input_1"
            }
            ]
          }
        },
        "pos_x": -2170,
        "pos_y": 300
      },
      "123": {
        "id": 123,
        "name": "IN-TEL-NET-W",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-TEL-NET-W (123)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Wireless Communications Network System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1": {
            "connections": [
              {
                "node": "133",
                "input": "output_1"
            },
            {
                "node": "135",
                "input": "output_1"
            },
            {
                "node": "136",
                "input": "output_1"
            },
            {
                "node": "134",
                "input": "output_1"
            }
            ]
          },
          "input_2":{"connections":[]}
        },          
        "outputs": {
          "output_1": {"connections":[{"node":"120","output":"input_1"}]},
          "output_2": {"connections":[{"node":"111","output":"input_2"},
                                      {"node":"14","output":"input_2"}]}
        },
        "pos_x": -2170,
        "pos_y": 570
      },
      "124": {
        "id": 124,
        "name": "IN-TEL-NET-F",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-TEL-NET-F (124)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Fixed Communications Network System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1": {
            "connections": [
              {
                "node": "138",
                "input": "output_1"
            },
            {
                "node": "137",
                "input": "output_1"
            }
            ]
          }
        },          
        "outputs": {
          "output_1": {
            "connections": [{
              "node": "120",
              "output": "input_1"
          }]
          }
        },
        "pos_x": -2180,
        "pos_y": 1020
      },
      "125": {
        "id": 125,
        "name": "IN-CM-MO-WT",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-CM-MO-WT (125)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Weather/Temperature Monitoring System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1": {
            "connections": []
          }
        },          
        "outputs": {
          "output_1": {
            "connections": [
              {
                "node": "98",
                "output": "input_1"
            }
            ]
          }
        },
        "pos_x": -2170,
        "pos_y": 180
      },
      "126": {
        "id": 126,
        "name": "IN-CM-MO-AC",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-CM-MO-AC (126)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Asset/System Condition Monitoring System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1": {
            "connections": []
          }
        },          
        "outputs": {
          "output_1": {
            "connections": [
              {
                "node": "98",
                "output": "input_1"
            }
            ]
          }
        },
        "pos_x": -2170,
        "pos_y": 50
      },
      "127": {
        "id": 127,
        "name": "IN-CM-MO-ST",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-CM-MO-ST (127)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Staff Location Monitoring System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1": {
            "connections": []
          }
        },          
        "outputs": {
          "output_1": {
            "connections": [
              {
                "node": "98",
                "output": "input_1"
            }
            ]
          }
        },
        "pos_x": -2170,
        "pos_y": -75
      },
      "128": {
        "id": 128,
        "name": "IN-CM-MO-CU",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-CM-MO-CU (128)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Customer Monitoring System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1": {
            "connections": []
          }
        },          
        "outputs": {
          "output_1": {
            "connections": [
              {
                "node": "98",
                "output": "input_1"
            }
            ]
          }
        },
        "pos_x": -2170,
        "pos_y": -200
      },
      "129": {
        "id": 129,
        "name": "IN-CM-CA-TV",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-CM-CA-TV (129)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  CCTV System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1": {
            "connections": []
          }
        },          
        "outputs": {
          "output_1": {
            "connections": [
              {
                "node": "99",
                "output": "input_1"
            }
            ]
          }
        },
        "pos_x": -2650,
        "pos_y": -390
      },
      "130": {
        "id": 130,
        "name": "IN-CM-CA-VI",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-CM-CA-VI (130)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Automatic Vehicle Inspection System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1": {
            "connections": []
          }
        },          
        "outputs": {
          "output_1": {
            "connections": [
              {
                "node": "99",
                "output": "input_1"
            }
            ]
          }
        },
        "pos_x": -2650,
        "pos_y": -280
      },
      "131": {
        "id": 131,
        "name": "IN-CM-CA-NP",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-CM-CA-NP (131)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Automatic Number Plate Recognition (ANPR) System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1": {
            "connections": []
          }
        },          
        "outputs": {
          "output_1": {
            "connections": [
              {
                "node": "99",
                "output": "input_1"
            }
            ]
          }
        },
        "pos_x": -2650,
        "pos_y": -150
      },
      "132": {
        "id": 132,
        "name": "IN-CM-CT-SC",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-CM-CT-SC (132)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Supervisory Control And Data Acquisition (SCADA)  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1": {
            "connections": []
          }
        },          
        "outputs": {
          "output_1": {
            "connections": [
              {
                "node": "121",
                "output": "input_1"
            }
            ]
          }
        },
        "pos_x": -2170,
        "pos_y": -370
      },
      "133": {
        "id": 133,
        "name": "IN-TEL-NET-W-5G",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box-lightblue\" ><i class=\"fas fa-code-branch\"></i> IN-TEL-NET-W-5G (133)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  5G FRMCS Radio System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1": {
            "connections": []
          }
        },          
        "outputs": {
          "output_1": {
            "connections": [{
              "node": "123",
              "output": "input_1"
          }]
          }
        },
        "pos_x": -2660,
        "pos_y": 720
      },
      "134": {
        "id": 134,
        "name": "IN-TEL-NET-W-GSMR",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-TEL-NET-W-GSMR (134)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  GSMR-R System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1": {
            "connections": []
          }
        },          
        "outputs": {
          "output_1": {
            "connections": [{
              "node": "123",
              "output": "input_1"
          }]
          }
        },
        "pos_x": -2640,
        "pos_y": 270
      },
      "135": {
        "id": 135,
        "name": "IN-TEL-NET-W-WF",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-TEL-NET-W-WF (135)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  WiFi System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1": {
            "connections": []
          }
        },          
        "outputs": {
          "output_1": {
            "connections": [{
              "node": "123",
              "output": "input_1"
          }]
          }
        },
        "pos_x": -2650,
        "pos_y": 560
      },
      "136": {
        "id": 136,
        "name": "IN-TEL-NET-W-BT",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box-lightblue\" ><i class=\"fas fa-code-branch\"></i> IN-TEL-NET-W-BT (136)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Bluetooth System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1": {
            "connections": []
          }
        },          
        "outputs": {
          "output_1": {
            "connections": [{
              "node": "123",
              "output": "input_1"
          }]
          }
        },
        "pos_x": -2650,
        "pos_y": 420
      },
      "137": {
        "id": 137,
        "name": "IN-TEL-NET-F-BLD",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box-lightblue\" ><i class=\"fas fa-code-branch\"></i> IN-TEL-NET-F-BLD (137)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Building Telephone System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1": {
            "connections": []
          }
        },          
        "outputs": {
          "output_1": {
            "connections": [ {
              "node": "124",
              "output": "input_1"
          }]
          }
        },
        "pos_x": -2650,
        "pos_y": 990
      },
      "138": {
        "id": 138,
        "name": "IN-TEL-NET-F-LT",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box-lightblue\" ><i class=\"fas fa-code-branch\"></i> IN-TEL-NET-F-LT (138)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Lineside Telephone System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1": {
            "connections": []
          }
        },          
        "outputs": {
          "output_1": {
            "connections": [{
              "node": "124",
              "output": "input_1"
          }]
          }
        },
        "pos_x": -2660,
        "pos_y": 1170
      },
      "139": {
        "id": 139,
        "name": "IN-STR-IN-PLF",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-STR-IN-PLF (139)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Platform System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
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
        "pos_x": 1180,
        "pos_y": 4640
      },
      "140": {
        "id": 140,
        "name": "IN-ENV-LAN-GI",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-ENV-LAN-GI (140)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Green Infrastructure  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1": {
            "connections": [
               {
                "node": "26",
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
          },
          "output_2": {
            "connections": []
          }
        },
        "pos_x": 1300,
        "pos_y": 2850
      },
      "141": {
        "id": 141,
        "name": "IN-ENV-ECO",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box-darkblue\"><i class=\"fas fa-code-branch\"></i> IN-ENV-ECO (141)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Ecology System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1": {
            "connections": [
               {
                "node": "25",
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
            "connections": [{"node":"142","output":"input_1"},
                            {"node":"143","output":"input_1"},
                            {"node":"144","output":"input_1"}

            ]
          },
          "output_2": {
            "connections": []
          }
        },
        "pos_x": 580,
        "pos_y": 2890
      },
      "142": {
        "id": 142,
        "name": "IN-ENV-ECO-BIO",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-ENV-ECO-BIO (142)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Biodiversity Net Gain System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1": {
            "connections": [
               {
                "node": "141",
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
            "connections": [

            ]
          },
          "output_2": {
            "connections": []
          }
        },
        "pos_x": 910,
        "pos_y": 2850
      },
      "143": {
        "id": 143,
        "name": "IN-ENV-ECO-HC",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-ENV-ECO-HC (143)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Habitat Connectivity System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1": {
            "connections": [
               {
                "node": "141",
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
            "connections": [

            ]
          },
          "output_2": {
            "connections": []
          }
        },
        "pos_x": 900,
        "pos_y": 2970
      },
      "144": {
        "id": 144,
        "name": "IN-ENV-ECO-MC",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-ENV-ECO-MC (144)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Mitigation &amp; Compensation System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1": {
            "connections": [
               {
                "node": "141",
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
            "connections": [

            ]
          },
          "output_2": {
            "connections": []
          }
        },
        "pos_x": 910,
        "pos_y": 3090
      },
      "145": {
        "id": 145,
        "name": "IN-ENV-NM",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box-darkblue\"><i class=\"fas fa-code-branch\"></i> IN-ENV-NM (145)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Noise Mitigation System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1": {
            "connections": [
               {
                "node": "25",
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
          },
          "output_2": {
            "connections": []
          }
        },
        "pos_x": 581,
        "pos_y": 3100
      },
      "146": {
        "id": 146,
        "name": "IN-ENV-CO",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box-darkblue\"><i class=\"fas fa-code-branch\"></i> IN-ENV-CO (146)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Carbon Offsetting System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1": {
            "connections": [
               {
                "node": "25",
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
            "connections": [

            ]
          },
          "output_2": {
            "connections": []
          }
        },
        "pos_x": 581,
        "pos_y": 3220
      },
      "147": {
        "id": 147,
        "name": "IN-ENV-CFS",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box-darkblue\"><i class=\"fas fa-code-branch\"></i> IN-ENV-CFS (147)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Compensatory Flood Storage System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1": {
            "connections": [
               {
                "node": "25",
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
            "connections": [

            ]
          },
          "output_2": {
            "connections": []
          }
        },
        "pos_x": 581,
        "pos_y": 3340
      },
      "148": {
        "id": 148,
        "name": "IN-CM-CT-BM",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-CM-CT-BM (148)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Building Management System (BMS)  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1": {
            "connections": []
          }
        },          
        "outputs": {
          "output_1":{"connections":[{"node":"121","output":"input_1"}]},
          "output_2":{"connections":[{"node":"46","output":"input_2"}]}
        },
        "pos_x": -2170,
        "pos_y": -500
      },
      "149": {
        "id": 149,
        "name": "IN-CM-CT-EM",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-CM-CT-EM (149)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Engineering Management System (EMS)  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1": {
            "connections": []
          }
        },          
        "outputs": {
          "output_1": {
            "connections": [
              {
                "node": "121",
                "output": "input_1"
            }
            ]
          },
          "output_2":{"connections":[{"node":"46","output":"input_2"}]}
        },
        "pos_x": -2170,
        "pos_y": -630
      },
      "150": {
        "id": 150,
        "name": "IN-CM-CT-ME",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-CM-CT-ME (150)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Metering System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1": {
            "connections": []
          }
        },          
        "outputs": {
          "output_1": {
            "connections": [
              {
                "node": "121",
                "output": "input_1"
            }
            ]
          },
          "output_2":{"connections":[{"node":"46","output":"input_2"}]}
        },
        "pos_x": -2170,
        "pos_y": -730
      },
      "151": {
        "id": 151,
        "name": "IN-CM-CT-SI",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-CM-CT-SI (151)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Station Information Management System (SIMS)  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1": {
            "connections": []
          }
        },          
        "outputs": {
          "output_1":{"connections":[{"node":"121","output":"input_1"}]},
          "output_2":{"connections":[{"node":"3","output":"input_2"}]}
        },
        "pos_x": -2170,
        "pos_y": -890
      },
      "152": {
        "id": 152,
        "name": "IN-RS",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box-orange\"><i class=\"fas fa-code-branch\"></i> IN-RS (152)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Rolling Stock System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
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
            "connections": [{"node":"153","output":"input_1"},
                            {"node":"154","output":"input_1"}]
          }
        },
        "pos_x": 200,
        "pos_y": 4900
      },
      "153": {
        "id": 153,
        "name": "IN-RS-P",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box-darkblue\"><i class=\"fas fa-code-branch\"></i> IN-RS-P (153)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Passenger Rolling Stock System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1": {"connections":[{"node":"152","input":"output_1"}]}
        },          
        "outputs": {
          "output_1": {
            "connections": []
          }
        },
        "pos_x": 584,
        "pos_y": 4808
      },
      "154": {
        "id": 154,
        "name": "IN-RS-F",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box-darkblue\"><i class=\"fas fa-code-branch\"></i> IN-RS-F (154)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Freight Rolling Stock System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1": {"connections":[{"node":"152","input":"output_1"}]}
        },          
        "outputs": {
          "output_1": {
            "connections": []
          }
        },
        "pos_x": 584,
        "pos_y": 4960
      },
      "155": {
        "id": 155,
        "name": "IN-IT",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box-orange\"><i class=\"fas fa-code-branch\"></i> IN-IT (155)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n   I.T. System \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
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
            "connections": [{"node":"156","output":"input_1"},
                            {"node":"157","output":"input_1"}]
          }
        },
        "pos_x": 207,
        "pos_y": -900
      },
      "156": {
        "id": 156,
        "name": "IN-IT-CORP",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box-darkblue\"><i class=\"fas fa-code-branch\"></i> IN-IT-CORP (156)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Corporate I.T. System \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1": {
            "connections": [
               {
                "node": "155",
                "input": "output_1"
               }
            ]
          }
        },          
        "outputs": {
          "output_1": {
            "connections": [{"node":"158","output":"input_1"}]
          }
        },
        "pos_x": 745,
        "pos_y": -650
      },
      "157": {
        "id": 157,
        "name": "IN-IT-CUST",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box-darkblue\"><i class=\"fas fa-code-branch\"></i> IN-IT-CUST (157)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Customer I.T. System \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1": {
            "connections": [
               {
                "node": "155",
                "input": "output_1"
               }
            ]
          }
        },          
        "outputs": {
          "output_1": {
            "connections": [{"node":"159","output":"input_1"},
                            {"node":"160","output":"input_1"},
                            {"node":"161","output":"input_1"},
                            {"node":"162","output":"input_1"},
                            {"node":"163","output":"input_1"},
                            {"node":"164","output":"input_1"},
                            {"node":"165","output":"input_1"},
                            {"node":"166","output":"input_1"}
          ]}
        },
        "pos_x": 745,
        "pos_y": -1050
      },
      "158": {
        "id": 158,
        "name": "IN-IT-CORP-OB",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-IT-CORP-OB (158)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Operational &amp; Business System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1": {
            "connections": [
               {
                "node": "156",
                "input": "output_1"
               }
            ]
          }
        },          
        "outputs": {},
        "pos_x": 1200,
        "pos_y": -600
      },
      "159": {
        "id": 159,
        "name": "IN-IT-CUST-DC",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-IT-CUST-DC (159)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Digital Clock System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1": {
            "connections": [
               {
                "node": "157",
                "input": "output_1"
               }
            ]
          }
        },          
        "outputs": {},
        "pos_x": 1200,
        "pos_y": -720
      },
      "160": {
        "id": 160,
        "name": "IN-IT-CUST-EN",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-IT-CUST-EN (160)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Entertainment System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1": {
            "connections": [
               {
                "node": "157",
                "input": "output_1"
               }
            ]
          }
        },          
        "outputs": {},
        "pos_x": 1200,
        "pos_y": -840
      },
      "161": {
        "id": 161,
        "name": "IN-IT-CUST-RPOS",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-IT-CUST-RPOS (161)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Retail Point Of Sale System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1": {
            "connections": [
               {
                "node": "157",
                "input": "output_1"
               }
            ]
          }
        },          
        "outputs": {},
        "pos_x": 1200,
        "pos_y": -960
      },
      "162": {
        "id": 162,
        "name": "IN-IT-CUST-KO",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-IT-CUST-KO (162)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Kiosk System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1": {
            "connections": [
               {
                "node": "157",
                "input": "output_1"
               }
            ]
          }
        },          
        "outputs": {},
        "pos_x": 1200,
        "pos_y": -1080
      },
      "163": {
        "id": 163,
        "name": "IN-IT-CUST-SF",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-IT-CUST-SF (163)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Satisfaction System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1": {
            "connections": [
               {
                "node": "157",
                "input": "output_1"
               }
            ]
          }
        },          
        "outputs": {},
        "pos_x": 1200,
        "pos_y": -1200
      },
      "164": {
        "id": 164,
        "name": "IN-IT-CUST-PY",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-IT-CUST-PY (164)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Payment System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1": {
            "connections": [
               {
                "node": "157",
                "input": "output_1"
               }
            ]
          }
        },          
        "outputs": {},
        "pos_x": 1200,
        "pos_y": -1320
      },
      "165": {
        "id": 165,
        "name": "IN-IT-CUST-HP",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-IT-CUST-HP (165)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Help Point System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1": {
            "connections": [
               {
                "node": "157",
                "input": "output_1"
               }
            ]
          }
        },          
        "outputs": {},
        "pos_x": 1200,
        "pos_y": -1440
      },
      "166": {
        "id": 166,
        "name": "IN-IT-CUST-DS",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-IT-CUST-DS (166)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Digital Screen System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1": {
            "connections": [
               {
                "node": "157",
                "input": "output_1"
               }
            ]
          }
        },          
        "outputs": {},
        "pos_x": 1200,
        "pos_y": -1560
      },
      "167": {
        "id": 167,
        "name": "IN-BLD-URS",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box-darkblue\"><i class=\"fas fa-code-branch\"></i> IN-BLD-URS (167)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Urban Realm System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
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
          "output_1": {"connections":[{"node":"168","output":"input_1"},
                                      {"node":"169","output":"input_1"},
                                      {"node":"170","output":"input_1"},
                                      {"node":"171","output":"input_1"},
                                      {"node":"172","output":"input_1"},
                                      {"node":"173","output":"input_1"},
                                      {"node":"174","output":"input_1"},
                                      {"node":"175","output":"input_1"},
                                      {"node":"176","output":"input_1"}]}},
        "pos_x": 2185,
        "pos_y": 0
      },
      "168": {
        "id": 168,
        "name": "IN-BLD-URS-AT",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-BLD-URS-AT (168)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Active Travel System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1":{"connections":[{"node":"167","input":"output_1"}]}
        },          
        "outputs": {
          "output_1": {
            "connections": [
              
            ]
          }
        },
        "pos_x": 2750,
        "pos_y": -280
      },
      "169": {
        "id": 169,
        "name": "IN-BLD-URS-SF",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-BLD-URS-SF (169)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Street Furniture System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1":{"connections":[{"node":"167","input":"output_1"}]}
        },          
        "outputs": {
          "output_1": {
            "connections": [
              
            ]
          }
        },
        "pos_x": 2750,
        "pos_y": -160
      },
      "170": {
        "id": 170,
        "name": "IN-BLD-URS-WF",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-BLD-URS-WF (170)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Way Finding &amp; Signage System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1":{"connections":[{"node":"167","input":"output_1"}]}
        },          
        "outputs": {
          "output_1": {
            "connections": [
              
            ]
          }
        },
        "pos_x": 2750,
        "pos_y": -40
      },
      "171": {
        "id": 171,
        "name": "IN-BLD-URS-FA",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-BLD-URS-FA (171)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Facilities / Amenity System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1":{"connections":[{"node":"167","input":"output_1"}]}
        },          
        "outputs": {
          "output_1": {
            "connections": [
              
            ]
          }
        },
        "pos_x": 2750,
        "pos_y": 80
      },
      "172": {
        "id": 172,
        "name": "IN-BLD-URS-PV",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-BLD-URS-PV (172)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  PAVA System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1":{"connections":[{"node":"167","input":"output_1"}]}
        },          
        "outputs": {
          "output_1": {
            "connections": [
              
            ]
          }
        },
        "pos_x": 2750,
        "pos_y": 200
      },
      "173": {
        "id": 173,
        "name": "IN-BLD-URS-LI",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-BLD-URS-LI (173)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Lighting System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1":{"connections":[{"node":"167","input":"output_1"}]}
        },          
        "outputs": {
          "output_1": {
            "connections": [
              
            ]
          }
        },
        "pos_x": 2750,
        "pos_y": 320
      },
      "174": {
        "id": 174,
        "name": "IN-BLD-URS-PA",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-BLD-URS-PA (174)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Public Art System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1":{"connections":[{"node":"167","input":"output_1"}]}
        },          
        "outputs": {
          "output_1": {
            "connections": [
              
            ]
          }
        },
        "pos_x": 2750,
        "pos_y": 440
      },
      "175": {
        "id": 175,
        "name": "IN-BLD-URS-AI",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-BLD-URS-AI (175)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Accesibility &amp; Inclusivity System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1":{"connections":[{"node":"167","input":"output_1"}]}
        },          
        "outputs": {
          "output_1": {
            "connections": [
              
            ]
          }
        },
        "pos_x": 2750,
        "pos_y": 560
      },
      "176": {
        "id": 176,
        "name": "IN-BLD-URS-VH",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-BLD-URS-VH (176)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Vehicular Interface System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1":{"connections":[{"node":"167","input":"output_1"}]},
          "input_2":{"connections":[{"node":"88","input":"output_2"}]}
        },          
        "outputs": {
          "output_1":{"connections":[ ]}
        },
        "pos_x": 2750,
        "pos_y": 680
      }
    }
  }