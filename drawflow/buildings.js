var buildings = {
    "data": {
        "2": {
          "id": 2,
          "name": "IN-BLD",
          "data": {},
          "class": "SCH",
          "html": "\n <div>\n <div class=\"title-box-orange\"><i class=\"fas fa-code-branch\"></i> IN-BLD (2)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n   Bulidings &amp; Stations System \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
          "typenode": false,
          "inputs": {},          
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
            },
            "output_2":{
                "connections":[]
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
          "pos_x": 755,
          "pos_y": 575
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
      "pos_x": 748,
      "pos_y": 66
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
      "pos_x": 1001,
      "pos_y": 127
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
      "pos_x": 757,
      "pos_y": 360
    },
    "35": {
      "id": 35,
      "name": "IN-BLD-ANC-BSS",
      "data": {},
      "class": "SCH",
      "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-BLD-ANC-BSS (35)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Building Services System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
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
            "connections":[]
        }
      },          
      "outputs": {
            "output_1":{
                "connections":[]
            },
        "output_2":{
            "connections":[]
        }},
      "pos_x": 1330,
      "pos_y": -63
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
      "pos_x": 1329,
      "pos_y": -178
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
      "pos_x": 1776,
      "pos_y": -64
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
      "pos_x": 1772,
      "pos_y": 163
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
      "pos_x": 1770,
      "pos_y": 45
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
      "pos_x": 1326,
      "pos_y": 297
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
      "pos_x": 1327,
      "pos_y": 191
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
      "pos_x": 1776,
      "pos_y": 431
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
      "pos_x": 1769,
      "pos_y": 317
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
      "pos_x": 1549,
      "pos_y": 528
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
      "pos_x": 1329,
      "pos_y": 601
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
      "pos_x": 1325,
      "pos_y": 460
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
      "pos_x": 1553,
      "pos_y": 676
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
      "pos_x": 210,
      "pos_y": 450
    }
}
}