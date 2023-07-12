var buildings = {
    "data": {
        "2": {
          "id": 2,
          "name": "IN-BLD",
          "data": {},
          "class": "SCH",
          "html": "\n <div>\n <div class=\"title-box-orange\"><i class=\"fas fa-code-branch\"></i> IN-BLD (2)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n   Bulidings &amp; Stations System \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
          "typenode": false,
          "inputs": {
            "input_1":{
              "connections":[]
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
                "node": "9",
                "output": "input_1"
               }
          ]
            },
            "output_2":{
                "connections":[]
            }
          },
          "pos_x": 200,
          "pos_y": 200
        },
        "3": {
          "id": 3,
          "name": "IN-BLD-ST",
          "data": {},
          "class": "SCH",
          "html": "\n <div>\n <div class=\"title-box-darkblue\"><i class=\"fas fa-code-branch\"></i> IN-BLD-ST (3)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n   Station System \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
          "typenode": false,
          "inputs": {
            "input_1": {
              "connections": [
                {
                  "node": "2",
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
              "connections":[]
            }
          },
          "pos_x": 750,
          "pos_y": 725
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
        },
        "input_2":{
            "connections":[]
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
        },
        "output_2":{
            "connections":[]
        }
      },
      "pos_x": 1200,
      "pos_y": 50
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
        },
        "input_2":{
            "connections":[]
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
        },
        "output_2":{
            "connections":[]
        }
      },
      "pos_x": 750,
      "pos_y": -150
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
        },
        "input_2":{
            "connections":[]
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
        },
        "output_2":{
            "connections":[]
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
        },
        "input_2":{
            "connections":[
              {
                "node":"4",
                "input":"output_2"
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
      "pos_x": 1200,
      "pos_y": 400
    },
    "9": {
      "id": 9,
      "name": "IN-BLD-BS",
      "data": {},
      "class": "SCH",
      "html": "\n <div>\n <div class=\"title-box-darkblue\"><i class=\"fas fa-code-branch\"></i> IN-BLD-BS (9)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Building Services System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
      "typenode": false,
      "inputs": {
        "input_1": {
          "connections": [
             {
              "node": "2",
              "input": "output_1"
             }
          ]
        },
        "input_2":{
            "connections":[]
        }
      },          
      "outputs": {
            "output_1":{ "connections":[{"node":"10","output":"input_1"},
                                        {"node":"11","output":"input_1"},
                                        {"node":"12","output":"input_1"},
                                        {"node":"13","output":"input_1"},
                                        {"node":"14","output":"input_1"},
                                        {"node":"15","output":"input_1"},
                                        {"node":"16","output":"input_1"},
                                        {"node":"17","output":"input_1"},
                                        {"node":"18","output":"input_1"}] },
            "output_2":{ "connections":[] }},
      "pos_x": 1200,
      "pos_y": 1040
    },
    "36": {
      "id": 36,
      "name": "IN-BLD-ANC-URS",
      "data": {},
      "class": "SCH",
      "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-BLD-ANC-URS (36)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Urban Realm System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
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
      "outputs": {"output_1":{
        "connections":[]
    },
"output_2":{
    "connections":[]
}},
      "pos_x": 1760,
      "pos_y": -120
    },
    "37": {
      "id": 37,
      "name": "IN-BLD-DPT-BSS",
      "data": {},
      "class": "SCH",
      "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-BLD-DPT-BSS (37)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Building Services System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
      "typenode": false,
      "inputs": {
        "input_1": {
          "connections": [
             {
              "node": "6",
              "input": "output_1"
             }
          ]
        },
        "input_2":{
            "connections":[]
        }
      },          
      "outputs": {"output_1":{
        "connections":[]
    },
"output_2":{
    "connections":[]
}},
      "pos_x": 1300,
      "pos_y": -300
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
        },
        "input_2":{
            "connections":[]
        }
      },          
      "outputs": {"output_1":{
        "connections":[]
    },
"output_2":{
    "connections":[]
}},
      "pos_x": 1300,
      "pos_y": -70
    },
    "39": {
      "id": 39,
      "name": "IN-BLD-DPT-URS",
      "data": {},
      "class": "SCH",
      "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-BLD-DPT-URS (39)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Urban Realm System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
      "typenode": false,
      "inputs": {
        "input_1": {
          "connections": [
             {
              "node": "6",
              "input": "output_1"
             }
          ]
        },
        "input_2":{
            "connections":[]
        }
      },          
      "outputs": {},
      "pos_x": 1300,
      "pos_y": -180
    },
    "40": {
      "id": 40,
      "name": "IN-BLD-FRS-BSS",
      "data": {},
      "class": "SCH",
      "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-BLD-FRS-BSS (40)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Building Services System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
      "typenode": false,
      "inputs": {
        "input_1": {
          "connections": [
             {
              "node": "7",
              "input": "output_1"
             }
          ]
        },
        "input_2":{
            "connections":[]
        }
      },          
      "outputs": {"output_1":{
        "connections":[]
    },
"output_2":{
    "connections":[]
}},
      "pos_x": 1300,
      "pos_y": 270
    },
    "41": {
      "id": 41,
      "name": "IN-BLD-FRS-URS",
      "data": {},
      "class": "SCH",
      "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-BLD-FRS-URS (41)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Urban Realm System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
      "typenode": false,
      "inputs": {
        "input_1": {
          "connections": [
             {
              "node": "7",
              "input": "output_1"
             }
          ]
        },
        "input_2":{
            "connections":[]
        }
      },          
      "outputs": {"output_1":{
        "connections":[]
    },
"output_2":{
    "connections":[]
}},
      "pos_x": 1300,
      "pos_y": 170
    },
    "42": {
      "id": 42,
      "name": "IN-BLD-NMC-BSS",
      "data": {},
      "class": "SCH",
      "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-BLD-NMC-BSS (42)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Building Services System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
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
      "outputs": {"output_1":{
        "connections":[]
    },
"output_2":{
    "connections":[]
}},
      "pos_x": 1800,
      "pos_y": 450
    },
    "43": {
      "id": 43,
      "name": "IN-BLD-NMC-URS",
      "data": {},
      "class": "SCH",
      "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-BLD-NMC-URS (43)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Urban Realm System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
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
      "outputs": {"output_1":{
        "connections":[]
    },
"output_2":{
    "connections":[]
}},
      "pos_x": 1800,
      "pos_y": 340
    },
    "44": {
      "id": 44,
      "name": "IN-BLD-ST-BSS",
      "data": {},
      "class": "SCH",
      "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-BLD-ST-BSS (44)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Building Services System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
      "typenode": false,
      "inputs": {
        "input_1": {
          "connections": [
             {
              "node": "3",
              "input": "output_1"
             }
          ]
        },
        "input_2":{
            "connections":[]
        }
      },          
      "outputs": {"output_1":{
        "connections":[]
    },
"output_2":{
    "connections":[]
}},
      "pos_x": 1300,
      "pos_y": 920
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
        },
        "input_2":{
            "connections":[]
        }
      },          
      "outputs": {"output_1":{
        "connections":[]
    },
"output_2":{
    "connections":[]
}},
      "pos_x": 1300,
      "pos_y": 780
    },
    "46": {
      "id": 46,
      "name": "IN-BLD-ST-PLF",
      "data": {},
      "class": "SCH",
      "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-BLD-ST-PLF (46)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n Platform System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
      "typenode": false,
      "inputs": {
        "input_1": {
          "connections": [
             {
              "node": "3",
              "input": "output_1"
             }
          ]
        },
        "input_2":{
            "connections":[]
        }
      },          
      "outputs": {"output_1":{
        "connections":[]
    },
"output_2":{
    "connections":[]
}},
      "pos_x": 1300,
      "pos_y": 650
    },
    "47": {
      "id": 47,
      "name": "IN-BLD-ST-URS",
      "data": {},
      "class": "SCH",
      "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-BLD-ST-URS (47)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n Urban Realm System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
      "typenode": false,
      "inputs": {
        "input_1": {
          "connections": [
             {
              "node": "3",
              "input": "output_1"
             }
          ]
        },
        "input_2":{
            "connections":[]
        }
      },          
      "outputs": {"output_1":{
        "connections":[]
    },
"output_2":{
    "connections":[]
}},
      "pos_x": 1300,
      "pos_y": 540
    },
    "4": {
      "id": 4,
      "name": "IN-CCS-TMS",
      "data": {},
      "class": "SCH",
      "html": "\n <div>\n <div class=\"title-box\"><i class=\"fas fa-code-branch\"></i> IN-CCS-TMS (4)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Traffic Management System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
      "typenode": false,
      "inputs": {},          
      "outputs": {
        "output_1": {
          "connections": [{}]
        },
        "output_2":{"connections":[
          {
            "node":"8",
            "output":"input_2"
          }
        ]}
      },
      "pos_x": -200,
      "pos_y": 580
    },
    "20": {
      "id": 20,
      "name": "IN-DR-BLD",
      "data": {},
      "class": "SCH",
      "html": "\n <div>\n <div class=\"title-box\"><i class=\"fas fa-code-branch\"></i> IN-DR-BLD (20)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Buildings &amp; Stations Drainage System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
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
      "pos_y": 100
    },
    "10": {
      "id": 10,
      "name": "IN-BLD-BS-ME",
      "data": {},
      "class": "SCH",
      "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-BLD-BS-ME (10)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Mechanical System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
      "typenode": false,
      "inputs": {
        "input_1": {"connections": [{"node":"9", "input":"output_1"}] }
      },          
      "outputs": {
        "output_1": {"connections": [] },
        "output_2": {"connections": [] }
      },
      "pos_x": 1800,
      "pos_y": 730
    },
    "11": {
      "id": 11,
      "name": "IN-BLD-BS-EL",
      "data": {},
      "class": "SCH",
      "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-BLD-BS-EL (11)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Electrical System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
      "typenode": false,
      "inputs": {
        "input_1": {"connections": [{"node":"9", "input":"output_1"}] }
      },          
      "outputs": {
        "output_1": {"connections": [] },
        "output_2": {"connections": [] }
      },
      "pos_x": 1800,
      "pos_y": 850
    },
    "12": {
      "id": 12,
      "name": "IN-BLD-BS-FF",
      "data": {},
      "class": "SCH",
      "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-BLD-BS-FF (12)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Fixtures &amp; Fittings System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
      "typenode": false,
      "inputs": {
        "input_1": {"connections": [{"node":"9", "input":"output_1"}] }
      },          
      "outputs": {
        "output_1": {"connections": [] },
        "output_2": {"connections": [] }
      },
      "pos_x": 1800,
      "pos_y": 970
    },
    "13": {
      "id": 13,
      "name": "IN-BLD-BS-FS",
      "data": {},
      "class": "SCH",
      "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-BLD-BS-FS (13)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Fire &amp; Safety System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
      "typenode": false,
      "inputs": {
        "input_1": {"connections": [{"node":"9", "input":"output_1"}] }
      },          
      "outputs": {
        "output_1": {"connections": [] },
        "output_2": {"connections": [] }
      },
      "pos_x": 1800,
      "pos_y": 1090
    },
    "14": {
      "id": 14,
      "name": "IN-BLD-BS-UT",
      "data": {},
      "class": "SCH",
      "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-BLD-BS-UT (14)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Utilities System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
      "typenode": false,
      "inputs": {
        "input_1": {"connections": [{"node":"9", "input":"output_1"}] }
      },          
      "outputs": {
        "output_1": {"connections": [] },
        "output_2": {"connections": [] }
      },
      "pos_x": 1800,
      "pos_y": 1210
    },
    "15": {
      "id": 15,
      "name": "IN-BLD-BS-SEC",
      "data": {},
      "class": "SCH",
      "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-BLD-BS-SEC (15)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Security &amp; Safety System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
      "typenode": false,
      "inputs": {
        "input_1": {"connections": [{"node":"9", "input":"output_1"}] }
      },          
      "outputs": {
        "output_1": {"connections": [] },
        "output_2": {"connections": [] }
      },
      "pos_x": 1800,
      "pos_y": 1330
    },
    "16": {
      "id": 16,
      "name": "IN-BLD-BS-BC",
      "data": {},
      "class": "SCH",
      "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-BLD-BS-BC (16)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Building Control System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
      "typenode": false,
      "inputs": {
        "input_1": {"connections": [{"node":"9", "input":"output_1"}] }
      },          
      "outputs": {
        "output_1": {"connections": [] },
        "output_2": {"connections": [] }
      },
      "pos_x": 1800,
      "pos_y": 1450
    },
    "17": {
      "id": 17,
      "name": "IN-BLD-BS-NC",
      "data": {},
      "class": "SCH",
      "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-BLD-BS-NC (17)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Sustainability &amp; Net Carbon Zero System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
      "typenode": false,
      "inputs": {
        "input_1": {"connections": [{"node":"9", "input":"output_1"}] }
      },          
      "outputs": {
        "output_1": {"connections": [] },
        "output_2": {"connections": [] }
      },
      "pos_x": 1800,
      "pos_y": 1570
    },
    "18": {
      "id": 18,
      "name": "IN-BLD-BS-EE",
      "data": {},
      "class": "SCH",
      "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-BLD-BS-EE (18)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Energy Efficiency System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
      "typenode": false,
      "inputs": {
        "input_1": {"connections": [{"node":"9", "input":"output_1"}] }
      },          
      "outputs": {
        "output_1": {"connections": [] },
        "output_2": {"connections": [] }
      },
      "pos_x": 1800,
      "pos_y": 1690
    }
}
}