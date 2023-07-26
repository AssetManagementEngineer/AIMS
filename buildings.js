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
                },
                {"node":"101","input":"output_2"},
                {"node":"102","input":"output_2"}
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
               },
               {
                "node": "41",
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
                "connections":[{"node":"39","input":"output_2"}]
            }
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
              "connections":[]
            }
          },
          "pos_x": 750,
          "pos_y": 725
        },
    "4": {
      "id": 4,
      "name": "IN-BLD-ANC",
      "data": {},
      "class": "SCH",
      "html": "\n <div>\n <div class=\"title-box-darkblue\"><i class=\"fas fa-code-branch\"></i> IN-BLD-ANC (4)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Anciliary Building System \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
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
          "connections": [{"node":"5", "output":"input_1" },
                          {"node":"33", "output":"input_1" },
                          {"node":"34", "output":"input_1" },
                          {"node":"35", "output":"input_1" }]
        },
        "output_2":{
            "connections":[]
        }
      },
      "pos_x": 1200,
      "pos_y": 50
    },
    "5": {
      "id": 5,
      "name": "IN-BLD-ANC-REB",
      "data": {},
      "class": "SCH",
      "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-BLD-ANC-REB (5)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Relocatable Equipment Building (REB) System \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
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
        "input_2":{
            "connections":[{"node":"104","input":"output_2"},
                           {"node":"105","input":"output_2"}]
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
      "pos_x": 1620,
      "pos_y": 260
    },
    "33": {
      "id": 33,
      "name": "IN-BLD-ANC-LOC",
      "data": {},
      "class": "SCH",
      "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-BLD-ANC-LOC (33)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  LOC / Cabinet System \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
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
        "input_2":{
            "connections":[{"node":"107","input":"output_2"}]
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
      "pos_x": 1620,
      "pos_y": 150
    },
    "34": {
      "id": 34,
      "name": "IN-BLD-ANC-SUB",
      "data": {},
      "class": "SCH",
      "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-BLD-ANC-SUB (34)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Substation System \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
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
        "input_2":{
            "connections":[{"node":"106","input":"output_2"}]
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
      "pos_x": 1620,
      "pos_y": 40
    },
    "35": {
      "id": 35,
      "name": "IN-BLD-ANC-SW",
      "data": {},
      "class": "SCH",
      "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-BLD-ANC-SW (35)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Switching Station System \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
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
      "pos_x": 1620,
      "pos_y": -80
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
          "connections": [{"node":"38","output":"input_1"}]},
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
          "connections": []
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
                "node":"32",
                "input":"output_2"
              }
            ]
        }
      },          
      "outputs": {
        "output_1": {
          "connections": []
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
            "connections":[{"node":"36","input":"output_2"},
                           {"node":"37","input":"output_2"},
                           {"node":"40","input":"output_2"}]
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
                                        {"node":"18","output":"input_1"},
                                        {"node":"19","output":"input_1"},
                                        {"node":"21","output":"input_1"},
                                        {"node":"22","output":"input_1"}]},
            "output_2":{ "connections":[] }},
      "pos_x": 1200,
      "pos_y": 1040
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
      "pos_y": -220
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
    "32": {
      "id": 32,
      "name": "IN-CCS-TMS",
      "data": {},
      "class": "SCH",
      "html": "\n <div>\n <div class=\"title-box\"><i class=\"fas fa-code-branch\"></i> IN-CCS-TMS (32)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Traffic Management System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
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
      "pos_y": 830
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
      "pos_x": 2100,
      "pos_y": 970
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
        "input_1": {"connections": [{"node":"9", "input":"output_1"}] },
        "input_2": {"connections":[{"node":"103","input":"output_2"}]}
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
      "pos_x": 2100,
      "pos_y": 1200
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
      "pos_x": 2100,
      "pos_y": 1330
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
      "pos_x": 2100,
      "pos_y": 1090
    },
    "19": {
      "id": 19,
      "name": "IN-BLD-BS-WM",
      "data": {},
      "class": "SCH",
      "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-BLD-BS-WM (19)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Waste Management System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
      "typenode": false,
      "inputs": {
        "input_1": {"connections": [{"node":"9", "input":"output_1"}] }
      },          
      "outputs": {
        "output_1": {"connections": [] },
        "output_2": {"connections": [] }
      },
      "pos_x": 2100,
      "pos_y": 720
    },
    "21": {
      "id": 21,
      "name": "IN-BLD-BS-PV",
      "data": {},
      "class": "SCH",
      "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-BLD-BS-PV (21)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  PAVA System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
      "typenode": false,
      "inputs": {
        "input_1": {"connections": [{"node":"9", "input":"output_1"}] }
      },          
      "outputs": {
        "output_1": {"connections": [] },
        "output_2": {"connections": [] }
      },
      "pos_x": 2100,
      "pos_y": 850
    },
    "22": {
      "id": 22,
      "name": "IN-BLD-BS-WF",
      "data": {},
      "class": "SCH",
      "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-BLD-BS-WF (22)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Way Finding &amp; Signage System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
      "typenode": false,
      "inputs": {
        "input_1": {"connections": [{"node":"9", "input":"output_1"}] }
      },          
      "outputs": {
        "output_1": {"connections": [] },
        "output_2": {"connections": [] }
      },
      "pos_x": 1800,
      "pos_y": 720
    },
    "41": {
      "id": 41,
      "name": "IN-BLD-URS",
      "data": {},
      "class": "SCH",
      "html": "\n <div>\n <div class=\"title-box-darkblue\"><i class=\"fas fa-code-branch\"></i> IN-BLD-URS (41)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Urban Realm System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
      "typenode": false,
      "inputs": {
        "input_1": {
          "connections": [{"node":"2","input":"output_1"}] },
        "input_2":{
            "connections":[]
        }
      },          
      "outputs": {
        "output_1":{"connections":[{"node":"23", "output":"input_1"},
                                   {"node":"24", "output":"input_1"},
                                   {"node":"25", "output":"input_1"},
                                   {"node":"26", "output":"input_1"},
                                   {"node":"27", "output":"input_1"},
                                   {"node":"28", "output":"input_1"},
                                   {"node":"29", "output":"input_1"},
                                   {"node":"30", "output":"input_1"},
                                   {"node":"31", "output":"input_1"}]},
        "output_2":{"connections":[]}},
      "pos_x": 750,
      "pos_y": 1500
    },
    "23": {
      "id": 23,
      "name": "IN-BLD-URS-AI",
      "data": {},
      "class": "SCH",
      "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-BLD-URS-AI (23)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Accesibility &amp; Inclusivity System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
      "typenode": false,
      "inputs": {
        "input_1": {"connections": [{"node":"41", "input":"output_1"}] }
      },          
      "outputs": {
        "output_1": {"connections": [] },
        "output_2": {"connections": [] }
      },
      "pos_x": 1300,
      "pos_y": 1200
    },
    "24": {
      "id": 24,
      "name": "IN-BLD-URS-AT",
      "data": {},
      "class": "SCH",
      "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-BLD-URS-AT (24)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Active Travel System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
      "typenode": false,
      "inputs": {
        "input_1": {"connections": [{"node":"41", "input":"output_1"}] }
      },          
      "outputs": {
        "output_1": {"connections": [] },
        "output_2": {"connections": [] }
      },
      "pos_x": 1300,
      "pos_y": 1340
    },
    "25": {
      "id": 25,
      "name": "IN-BLD-URS-SF",
      "data": {},
      "class": "SCH",
      "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-BLD-URS-SF (25)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Street Furniture System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
      "typenode": false,
      "inputs": {
        "input_1": {"connections": [{"node":"41", "input":"output_1"}] }
      },          
      "outputs": {
        "output_1": {"connections": [] },
        "output_2": {"connections": [] }
      },
      "pos_x": 1300,
      "pos_y": 1460
    },
    "26": {
      "id": 26,
      "name": "IN-BLD-URS-WF",
      "data": {},
      "class": "SCH",
      "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-BLD-URS-WF (26)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Way Finding &amp; Signage System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
      "typenode": false,
      "inputs": {
        "input_1": {"connections": [{"node":"41", "input":"output_1"}] }
      },          
      "outputs": {
        "output_1": {"connections": [] },
        "output_2": {"connections": [] }
      },
      "pos_x": 1300,
      "pos_y": 1580
    },
    "27": {
      "id": 27,
      "name": "IN-BLD-URS-FA",
      "data": {},
      "class": "SCH",
      "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-BLD-URS-FA (27)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Facilities / Amenity System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
      "typenode": false,
      "inputs": {
        "input_1": {"connections": [{"node":"41", "input":"output_1"}] }
      },          
      "outputs": {
        "output_1": {"connections": [] },
        "output_2": {"connections": [] }
      },
      "pos_x": 1300,
      "pos_y": 1720
    },
    "28": {
      "id": 28,
      "name": "IN-BLD-URS-PV",
      "data": {},
      "class": "SCH",
      "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-BLD-URS-PV (28)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  PAVA System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
      "typenode": false,
      "inputs": {
        "input_1": {"connections": [{"node":"41", "input":"output_1"}] }
      },          
      "outputs": {
        "output_1": {"connections": [] },
        "output_2": {"connections": [] }
      },
      "pos_x": 1300,
      "pos_y": 1860
    },
    "29": {
      "id": 29,
      "name": "IN-BLD-URS-LI",
      "data": {},
      "class": "SCH",
      "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-BLD-URS-LI (29)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Lighting System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
      "typenode": false,
      "inputs": {
        "input_1": {"connections": [{"node":"41", "input":"output_1"}] }
      },          
      "outputs": {
        "output_1": {"connections": [] },
        "output_2": {"connections": [] }
      },
      "pos_x": 1300,
      "pos_y": 1980
    },
    "30": {
      "id": 30,
      "name": "IN-BLD-URS-PA",
      "data": {},
      "class": "SCH",
      "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-BLD-URS-PA (30)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Public Art System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
      "typenode": false,
      "inputs": {
        "input_1": {"connections": [{"node":"41", "input":"output_1"}] }
      },          
      "outputs": {
        "output_1": {"connections": [] },
        "output_2": {"connections": [] }
      },
      "pos_x": 1300,
      "pos_y": 2100
    },
    "31": {
      "id": 31,
      "name": "IN-BLD-URS-VH",
      "data": {},
      "class": "SCH",
      "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-BLD-URS-VH (31)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Vehicular Interface System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
      "typenode": false,
      "inputs": {
        "input_1": {"connections": [{"node":"41", "input":"output_1"}] },
        "input_2": {"connections": [{"node":"100","input":"output_2"}]}
      },          
      "outputs": {
        "output_1": {"connections": [] },
        "output_2": {"connections": [] }
      },
      "pos_x": 1300,
      "pos_y": 2220
    },
    "100": {
      "id": 100,
      "name": "IN-EXT-3RD-ATM",
      "data": {},
      "class": "SCH",
      "html": "\n <div>\n <div class=\"title-box\"><i class=\"fas fa-code-branch\"></i> IN-EXT-3RD-ATM (100)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Adjacent Transport Mode Systems (Road/Sea/Air) \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
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
          "connections": []
        },
        "output_2":{
            "connections":[{"node":"31","output":"input_2"}]
        }
      },
      "pos_x": -200,
      "pos_y": 1800
    },
    "101": {
      "id": 101,
      "name": "IN-EXT-US-H2O",
      "data": {},
      "class": "SCH",
      "html": "\n <div>\n <div class=\"title-box\"><i class=\"fas fa-code-branch\"></i> IN-EXT-US-H2O (101)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Water Mains Infrastructure Network \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
      "typenode": false,
      "inputs": {},          
      "outputs": {
        "output_1": {
          "connections": []
        },
        "output_2":{
            "connections":[{"node":"2","input":"output_2"}]
        }
      },
      "pos_x": -200,
      "pos_y": 280
    },
    "102": {
      "id": 102,
      "name": "IN-EXT-US-GAS",
      "data": {},
      "class": "SCH",
      "html": "\n <div>\n <div class=\"title-box\"><i class=\"fas fa-code-branch\"></i> IN-EXT-US-GAS (102)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Gas Infrastructure Network \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
      "typenode": false,
      "inputs": {},          
      "outputs": {
        "output_1": {
          "connections": []
        },
        "output_2":{
            "connections":[{"node":"2","output":"input_2"}]
        }
      },
      "pos_x": -200,
      "pos_y": 430
    },
    "103": {
      "id": 103,
      "name": "IN-EXT-3RD-FH",
      "data": {},
      "class": "SCH",
      "html": "\n <div>\n <div class=\"title-box\"><i class=\"fas fa-code-branch\"></i> IN-EXT-3RD-FH (103)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Fire Hydrant Mains Systems \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
      "typenode": false,
      "inputs": {},          
      "outputs": {
        "output_1": {
          "connections": []
        },
        "output_2":{
            "connections":[{"node":"13","output":"input_2"}]
        }
      },
      "pos_x": -200,
      "pos_y": 1500
    },
    "104": {
      "id": 104,
      "name": "IN-CCS-SIG",
      "data": {},
      "class": "SCH",
      "html": "\n <div>\n <div class=\"title-box\"><i class=\"fas fa-code-branch\"></i> IN-CCS-SIG (104)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Conventional Signalling System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
      "typenode": false,
      "inputs": {},          
      "outputs": {
        "output_1": {
          "connections": []
        },
        "output_2":{"connections":[{"node":"5","output":"input_2"}]}
      },
      "pos_x": -200,
      "pos_y": 560
    },
    "105": {
      "id": 105,
      "name": "IN-STR-SUP-MAST",
      "data": {},
      "class": "SCH",
      "html": "\n <div>\n <div class=\"title-box\"><i class=\"fas fa-code-branch\"></i> IN-STR-SUP-MAST (105)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Tower / Mast Structure System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
      "typenode": false,
      "inputs": {},          
      "outputs": {
        "output_1": {
          "connections": [{}]
        },
        "output_2" : {
          "connections":[
          {
              "node":"5",
              "output":"input_2"
            }
          ]
        }
      },
      "pos_x": -200,
      "pos_y": 700
    },
    "106": {
      "id": 106,
      "name": "IN-EN",
      "data": {},
      "class": "SCH",
      "html": "\n <div>\n <div class=\"title-box\"><i class=\"fas fa-code-branch\"></i> IN-EN (106)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Power / Energy System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
      "typenode": false,
      "inputs": {},          
      "outputs": {
        "output_1": {
          "connections": []
        },
        "output_2":{
          "connections":[{"node":"34","output":"input_2"}]
        }
      },
      "pos_x": -200,
      "pos_y": -140
    },
    "107": {
      "id": 107,
      "name": "IN-TEL",
      "data": {},
      "class": "SCH",
      "html": "\n <div>\n <div class=\"title-box\"><i class=\"fas fa-code-branch\"></i> IN-TEL (107)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Telecommunications System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
      "typenode": false,
      "inputs": {},          
      "outputs": {
        "output_1": {
          "connections": []
        },
        "output_2":{
          "connections":[{"node":"33","output":"input_2"}]
        }
      },
      "pos_x": -200,
      "pos_y": -20
    },
    "36": {
      "id": 36,
      "name": "IN-CM-CT-BM",
      "data": {},
      "class": "SCH",
      "html": "\n<div>\n<div class=\"title-box\"><i class=\"fas fa-code-branch\"></i>IN-CM-CT-BM (36)</div>\n<div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\">\n Building Management System (BMS) \n<div class=\"modal\" style=\"display:none\">\n<div class=\"modal-content\">\n<span class=\"close\" onclick=\"closemodal(event)\">&times;</span></div>\n</div>\n</div>\n</div>\n",
      "typenode": false,
      "inputs": {},          
      "outputs": {
        "output_1": {
          "connections": []
        },
        "output_2": {
          "connections": [{"node":"9","output":"input_2"}]
        }
      },
      "pos_x": -200,
      "pos_y": 1120
    },
    "37": {
      "id": 37,
      "name": "IN-CM-CT-ME",
      "data": {},
      "class": "SCH",
      "html": "\n<div>\n<div class=\"title-box\"><i class=\"fas fa-code-branch\"></i>IN-CM-CT-ME (37)</div>\n<div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\">\n Metering System (MS) \n<div class=\"modal\" style=\"display:none\">\n<div class=\"modal-content\">\n<span class=\"close\" onclick=\"closemodal(event)\">&times;</span></div>\n</div>\n</div>\n</div>\n",
      "typenode": false,
      "inputs": {},          
      "outputs": {
        "output_1": {
          "connections": []
        },
        "output_2": {
          "connections": [{"node":"9","output":"input_2"}]
        }
      },
      "pos_x": -200,
      "pos_y": 1250
    },
    "39": {
      "id": 39,
      "name": "IN-CM-CT-SI",
      "data": {},
      "class": "SCH",
      "html": "\n<div>\n<div class=\"title-box\"><i class=\"fas fa-code-branch\"></i>IN-CM-CT-SI (39)</div>\n<div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\">\n Station Information Management System (SIMS) \n<div class=\"modal\" style=\"display:none\">\n<div class=\"modal-content\">\n<span class=\"close\" onclick=\"closemodal(event)\">&times;</span></div>\n</div>\n</div>\n</div>\n",
      "typenode": false,
      "inputs": {},          
      "outputs": {
        "output_1": {
          "connections": []
        },
        "output_2": {
          "connections": [{"node":"3","output":"input_2"}]
        }
      },
      "pos_x": -200,
      "pos_y": 960
    },
    "40": {
      "id": 40,
      "name": "IN-CM-CT-EM",
      "data": {},
      "class": "SCH",
      "html": "\n<div>\n<div class=\"title-box\"><i class=\"fas fa-code-branch\"></i>IN-CM-CT-EM (40)</div>\n<div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\">\n Engineering Management System (EMS) \n<div class=\"modal\" style=\"display:none\">\n<div class=\"modal-content\">\n<span class=\"close\" onclick=\"closemodal(event)\">&times;</span></div>\n</div>\n</div>\n</div>\n",
      "typenode": false,
      "inputs": {},          
      "outputs": {
        "output_1": {
          "connections": []
        },
        "output_2": {
          "connections": [{"node":"9","output":"input_2"}]
        }
      },
      "pos_x": -200,
      "pos_y": 1360
    }
}
}