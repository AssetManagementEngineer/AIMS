var buildings = {
    "data": {
        "2": {
          "id": 2,
          "name": "IN-BLD",
          "data": {},
          "class": "SCH",
          "html": "\n <div>\n <div class=\"title-box-orange\"><i class=\"fas fa-code-branch\"></i> IN-BLD (2)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n   Bulidings &amp; Stations System <p class=ifc><a class=ifc target=\"_blank\" href=\"https://search.bsdd.buildingsmart.org/uri/buildingsmart/ifc/4.3/class/IfcBuilding\" title=ifcRoot&nbsp;\\&nbsp;IfcObjectDefinition&nbsp;\\&nbsp;IfcObject&nbsp;\\&nbsp;IfcProduct&nbsp;\\&nbsp;IfcSpatialElement&nbsp;\\&nbsp;IfcSpatialStructureElement&nbsp;\\&nbsp;ifcFacility&nbsp;\\&nbsp;ifcBuilding>ifcBuilding</a></p><p class=uniclass><a class=uniclass target=\"_blank\" href=\"https://uniclass.thenbs.com/taxon/en_80_50_74\" title=\"Railway stations\">En_80_50_74</a></p> \n  <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
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
          "html": "\n <div>\n <div class=\"title-box-darkblue\"><i class=\"fas fa-code-branch parentasset\" ></i> IN-BLD-ST (3)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n   Station System <p class=uniclass><a class=uniclass target=\"_blank\" href=\"https://uniclass.thenbs.com/taxon/en_80_50_74\" title=\"Railway stations\">En_80_50_74</a></p>  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
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
      "html": "\n <div>\n <div class=\"title-box-darkblue\"><i class=\"fas fa-code-branch parentasset\"></i> IN-BLD-ANC (4)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Anciliary Building System <p class=ifc><a class=ifc target=\"_blank\" href=\"https://search.bsdd.buildingsmart.org/uri/buildingsmart/ifc/4.3/class/IfcBuilding\" title=ifcRoot&nbsp;\\&nbsp;IfcObjectDefinition&nbsp;\\&nbsp;IfcObject&nbsp;\\&nbsp;IfcProduct&nbsp;\\&nbsp;IfcSpatialElement&nbsp;\\&nbsp;IfcSpatialStructureElement&nbsp;\\&nbsp;ifcFacility&nbsp;\\&nbsp;ifcBuilding>ifcBuilding</a></p>\n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
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
      "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-BLD-ANC-REB (5)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Relocatable Equipment Building (REB) System <p class=uniclass><a class=\"uniclass\" target=\"_blank\" title=\"Plant and equipment buildings\" href=\"https://uniclass.thenbs.com/taxon/en_90_90_64\">En_90_90_64<a/></p>\n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
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
      "pos_y": 370
    },
    "6": {
      "id": 6,
      "name": "IN-BLD-DPT",
      "data": {},
      "class": "SCH",
      "html": "\n <div>\n <div class=\"title-box-darkblue\"><i class=\"fas fa-code-branch parentasset\"></i> IN-BLD-DPT (6)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Depot Building System <p class=ifc><a class=ifc target=\"_blank\" href=\"https://search.bsdd.buildingsmart.org/uri/buildingsmart/ifc/4.3/class/IfcBuilding\" title=ifcRoot&nbsp;\\&nbsp;IfcObjectDefinition&nbsp;\\&nbsp;IfcObject&nbsp;\\&nbsp;IfcProduct&nbsp;\\&nbsp;IfcSpatialElement&nbsp;\\&nbsp;IfcSpatialStructureElement&nbsp;\\&nbsp;ifcFacility&nbsp;\\&nbsp;ifcBuilding>ifcBuilding</a></p> <p class=uniclass><a class=uniclass target=\"_blank\" href=\"https://uniclass.thenbs.com/taxon/ss_40_85_75\" title=\"Rolling Stock depot systems\">Ss_40_85_75</a></p>\n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
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
      "html": "\n <div>\n <div class=\"title-box-darkblue\"><i class=\"fas fa-code-branch\"></i> IN-BLD-FRS (7)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Freight Site System <p class=ifc><a class=ifc target=\"_blank\" href=\"https://search.bsdd.buildingsmart.org/uri/buildingsmart/ifc/4.3/class/IfcSite\" title=\"ifcRoot&nbsp;\\&nbsp;ifcObjectDefinition&nbsp;\\&nbsp;ifcObject&nbsp;\\&nbsp;ifcProduct&nbsp;\\&nbsp;ifcSpatialElement&nbsp;\\&nbsp;ifcSpatialStructureElement&nbsp;\\&nbsp;ifcSite\">ifcSite</a></p> <p class=uniclass><a class=uniclass target=\"_blank\" href=\"https://uniclass.thenbs.com/taxon/en_80_90_30\" title=\"Freight depots\" >En_80_90_30</a></p> \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
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
      "html": "\n <div>\n <div class=\"title-box-darkblue\"><i class=\"fas fa-code-branch\"></i> IN-BLD-NMC (8)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Network Management Control Centre System <p class=uniclass><a class=uniclass target=\"_blank\" href=\"https://uniclass.thenbs.com/taxon/ss_75_10_21\" title=\"Data distribution and telecommunications systems\">Ss_75_10_21</a></p> \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
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
      "pos_y": 500
    },
    "9": {
      "id": 9,
      "name": "IN-BLD-BS",
      "data": {},
      "class": "SCH",
      "html": "\n <div>\n <div class=\"title-box-darkblue\"><i class=\"fas fa-code-branch\"></i> IN-BLD-BS (9)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Building Services System  <p class=uniclass><a class=uniclass target=\"_blank\" href=\"https://uniclass.thenbs.com/taxon/pm_40_35_10\" title=\"Building services models\">PM_40_35_10</a></p>   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
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
    "10": {
      "id": 10,
      "name": "IN-BLD-BS-ME",
      "data": {},
      "class": "SCH",
      "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-BLD-BS-ME (10)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Mechanical System <p class=uniclass><a class=uniclass target=\"_blank\" href=\"https://uniclass.thenbs.com/taxon/ss_75_70_52\" title=\"Mechanical engineering services control and management systems\">Ss_75_70_52</a></p>\n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
      "typenode": false,
      "inputs": {
        "input_1": {"connections": [{"node":"9", "input":"output_1"}] }
      },          
      "outputs": {
        "output_1": {"connections": [] },
        "output_2": {"connections": [] }
      },
      "pos_x": 2100,
      "pos_y": 1020
    },
    "11": {
      "id": 11,
      "name": "IN-BLD-BS-EL",
      "data": {},
      "class": "SCH",
      "html": "\n <div>\n <div  class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-BLD-BS-EL (11)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Electrical System  <p class=ifc><a class=ifc target=\"_blank\" href=\"https://search.bsdd.buildingsmart.org/uri/buildingsmart/ifc/4.3/class/IfcDistributionSystemELECTRICAL\" title=\"ifcRoot&nbsp;\\&nbsp;ifcObjectDefinition&nbsp;\\&nbsp;ifcObject&nbsp;\\&nbsp;ifcGroup&nbsp;\\&nbsp;ifcSystem&nbsp;\\&nbsp;IfcDistributionSystem.ELECTRICAL\">ELECTRICAL</a></p> <p class=uniclass><a class=uniclass target=\"_blank\" href=\"https://uniclass.thenbs.com/taxon/ss_70\" title=\"Electrical Systems\">Ss_70</a></p>\n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
      "typenode": false,
      "inputs": {
        "input_1": {"connections": [{"node":"9", "input":"output_1"}] }
      },          
      "outputs": {
        "output_1": {"connections": [] },
        "output_2": {"connections": [] }
      },
      "pos_x": 1800,
      "pos_y": 910
    },
    "12": {
      "id": 12,
      "name": "IN-BLD-BS-FF",
      "data": {},
      "class": "SCH",
      "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-BLD-BS-FF (12)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Fixtures &amp; Fittings System  <p class=uniclass><a class=uniclass target=\"_blank\" href=\"https://uniclass.thenbs.com/taxon/ss_40_15_35_35\" title=\"General fixtures systems\">Ss_40_15_35_35</a></p>\n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
      "typenode": false,
      "inputs": {
        "input_1": {"connections": [{"node":"9", "input":"output_1"}] }
      },          
      "outputs": {
        "output_1": {"connections": [] },
        "output_2": {"connections": [] }
      },
      "pos_x": 1800,
      "pos_y": 1110
    },
    "13": {
      "id": 13,
      "name": "IN-BLD-BS-FS",
      "data": {},
      "class": "SCH",
      "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-BLD-BS-FS (32)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Fire &amp; Safety System <p class=uniclass><a class=uniclass target=\"_blank\" href=\"https://uniclass.thenbs.com/taxon/ss_75_50_28_29\" title=\"Fire detection and alarm systems\">Ss_75_50_28_29</a></p>\n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
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
      "pos_y": 1280
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
      "pos_y": 1450
    },
    "15": {
      "id": 15,
      "name": "IN-BLD-BS-SEC",
      "data": {},
      "class": "SCH",
      "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-BLD-BS-SEC (43)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Security &amp; Safety System <p class=uniclass><a class=uniclass target=\"_blank\" href=\"https://uniclass.thenbs.com/taxon/ss_75_40\" title=\"Security systems\">Ss_75_40</a></p>\n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
      "typenode": false,
      "inputs": {
        "input_1": {"connections": [{"node":"9", "input":"output_1"}] }
      },          
      "outputs": {
        "output_1": {"connections": [] },
        "output_2": {"connections": [] }
      },
      "pos_x": 1800,
      "pos_y": 1560
    },
    "16": {
      "id": 16,
      "name": "IN-BLD-BS-BC",
      "data": {},
      "class": "SCH",
      "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-BLD-BS-BC (16)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Building Control System  <p class=uniclass><a class=uniclass target=\"_blank\" href=\"https://uniclass.thenbs.com/taxon/ss_75_70_54_10\" title=\"Building monitoring and management systems\">Ss_75_70_54_10</a></p>  <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
      "typenode": false,
      "inputs": {
        "input_1": {"connections": [{"node":"9", "input":"output_1"}] }
      },          
      "outputs": {
        "output_1": {"connections": [] },
        "output_2": {"connections": [] }
      },
      "pos_x": 2100,
      "pos_y": 1360
    },
    "17": {
      "id": 17,
      "name": "IN-BLD-BS-NC",
      "data": {},
      "class": "SCH",
      "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-BLD-BS-NC (17)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Sustainability &amp; Net Carbon Zero System  <p class=uniclass><a class=uniclass target=\"_blank\" href=\"https://uniclass.thenbs.com/taxon/pm_35_40\" title=\"Environmentally sustainable design requirements\" >PM_35_40</a></p>\n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
      "typenode": false,
      "inputs": {
        "input_1": {"connections": [{"node":"9", "input":"output_1"}] }
      },          
      "outputs": {
        "output_1": {"connections": [] },
        "output_2": {"connections": [] }
      },
      "pos_x": 2100,
      "pos_y": 1540
    },
    "18": {
      "id": 18,
      "name": "IN-BLD-BS-EE",
      "data": {},
      "class": "SCH",
      "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-BLD-BS-EE (18)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Energy Efficiency System  <p class=uniclass><a class=uniclass target=\"_blank\" href=\"https://uniclass.thenbs.com/taxon/pc_35_27_27\" title=\"Energy efficiency\">PC_35_27_27</a></p>   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
      "typenode": false,
      "inputs": {
        "input_1": {"connections": [{"node":"9", "input":"output_1"}] }
      },          
      "outputs": {
        "output_1": {"connections": [] },
        "output_2": {"connections": [] }
      },
      "pos_x": 2100,
      "pos_y": 1190
    },
    "19": {
      "id": 19,
      "name": "IN-BLD-BS-WM",
      "data": {},
      "class": "SCH",
      "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-BLD-BS-WM (19)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Waste Management System <p class=uniclass><a class=uniclass target=\"_blank\" href=\"https://uniclass.thenbs.com/taxon/ac_50\" title=\"Waste disposal activities\">Ac_50</a></p>\n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
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
      "pos_y": 910
    },
    "22": {
      "id": 22,
      "name": "IN-BLD-BS-WF",
      "data": {},
      "class": "SCH",
      "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-BLD-BS-WF (22)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Way Finding &amp; Signage System  <p class=uniclass><a class=uniclass target=\"_blank\" href=\"https://uniclass.thenbs.com/taxon/ss_40_10_20_96\" title=\"Wayfinding signage systems\">Ss_40_10_20_96</a></p>\n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
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
    "23": {
      "id": 23,
      "name": "IN-BLD-URS-AI",
      "data": {},
      "class": "SCH",
      "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-BLD-URS-AI (23)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Accesibility &amp; Inclusivity System <p class=uniclass><a class=uniclass target=\"_blank\" href=\"https://uniclass.thenbs.com/taxon/ss_80_50_02\" title=\"Accessibility lifts and platform systems\">Ss_80_50_02</a></p> \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
      "typenode": false,
      "inputs": {
        "input_1": {"connections": [{"node":"41", "input":"output_1"}] }
      },          
      "outputs": {
        "output_1": {"connections": [] },
        "output_2": {"connections": [] }
      },
      "pos_x": 1300,
      "pos_y": 1370
    },
    "24": {
      "id": 24,
      "name": "IN-BLD-URS-AT",
      "data": {},
      "class": "SCH",
      "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-BLD-URS-AT (24)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Active Travel System  <p class=uniclass><a class=uniclass target=\"_blank\" href=\"https://uniclass.thenbs.com/taxon/en_80_40_02\" title=\"Active travel networks\" >En_80_40_02</a></p>\n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
      "typenode": false,
      "inputs": {
        "input_1": {"connections": [{"node":"41", "input":"output_1"}] }
      },          
      "outputs": {
        "output_1": {"connections": [] },
        "output_2": {"connections": [] }
      },
      "pos_x": 1300,
      "pos_y": 1550
    },
    "25": {
      "id": 25,
      "name": "IN-BLD-URS-SF",
      "data": {},
      "class": "SCH",
      "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-BLD-URS-SF (25)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Street Furniture System  <p class=uniclass><a class=uniclass target=\"_blank\" href=\"https://uniclass.thenbs.com/taxon/pr_40_50\" title=\"Furnishings\">Pr_40_50</a></p>\n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
      "typenode": false,
      "inputs": {
        "input_1": {"connections": [{"node":"41", "input":"output_1"}] }
      },          
      "outputs": {
        "output_1": {"connections": [] },
        "output_2": {"connections": [] }
      },
      "pos_x": 1630,
      "pos_y": 1730
    },
    "26": {
      "id": 26,
      "name": "IN-BLD-URS-WF",
      "data": {},
      "class": "SCH",
      "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-BLD-URS-WF (26)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Way Finding &amp; Signage System  <p class=uniclass><a class=uniclass target=\"_blank\" href=\"https://uniclass.thenbs.com/taxon/ss_40_10\" title=\"Wayfinding signage systems\">Ss_40_10_20_96</a></p>\n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
      "typenode": false,
      "inputs": {
        "input_1": {"connections": [{"node":"41", "input":"output_1"}] }
      },          
      "outputs": {
        "output_1": {"connections": [] },
        "output_2": {"connections": [] }
      },
      "pos_x": 1300,
      "pos_y": 1710
    },
    "27": {
      "id": 27,
      "name": "IN-BLD-URS-FA",
      "data": {},
      "class": "SCH",
      "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-BLD-URS-FA (27)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Facilities / Amenity System  \n  <p class=uniclass><a class=uniclass href=\"https://uniclass.thenbs.com/taxon/en_40_05_68\" target=\"_blank\" title=\"Public amenities\">En_40_05_68</a></p> <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
      "typenode": false,
      "inputs": {
        "input_1": {"connections": [{"node":"41", "input":"output_1"}] }
      },          
      "outputs": {
        "output_1": {"connections": [] },
        "output_2": {"connections": [] }
      },
      "pos_x": 1300,
      "pos_y": 1900
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
      "pos_x": 1630,
      "pos_y": 1900
    },
    "29": {
      "id": 29,
      "name": "IN-BLD-URS-LI",
      "data": {},
      "class": "SCH",
      "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-BLD-URS-LI (29)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Lighting System <p class=uniclass><a class=uniclass target=\"_blank\" href=\"https://uniclass.thenbs.com/taxon/ef_70_80\" title=\"Lighting\">EF_70_80</a></p> \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
      "typenode": false,
      "inputs": {
        "input_1": {"connections": [{"node":"41", "input":"output_1"}] }
      },          
      "outputs": {
        "output_1": {"connections": [] },
        "output_2": {"connections": [] }
      },
      "pos_x": 1630,
      "pos_y": 2000
    },
    "30": {
      "id": 30,
      "name": "IN-BLD-URS-PA",
      "data": {},
      "class": "SCH",
      "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-BLD-URS-PA (30)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Public Art System  <p class=uniclass><a class=uniclass target=\"_blank\" href=\"https://uniclass.thenbs.com/taxon/pr_40_50_05\" title=\"Artworks\">Pr_40_50_05</a></p>\n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
      "typenode": false,
      "inputs": {
        "input_1": {"connections": [{"node":"41", "input":"output_1"}] }
      },          
      "outputs": {
        "output_1": {"connections": [] },
        "output_2": {"connections": [] }
      },
      "pos_x": 1300,
      "pos_y": 2060
    },
    "31": {
      "id": 31,
      "name": "IN-BLD-URS-VH",
      "data": {},
      "class": "SCH",
      "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-BLD-URS-VH (31)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Vehicular Interface System  <p class=ifc><a class=ifc target=\"_blank\" href=\"https://search.bsdd.buildingsmart.org/uri/buildingsmart/ifc/4.3/class/IfcDistributionPort\" title=ifcRoot&nbsp;\\&nbsp;ifcObjectDefinition&nbsp;\\&nbsp;ifcObject&nbsp;\\&nbsp;ifcProduct&nbsp;\\&nbsp;ifcPort&nbsp;\\&nbsp;ifcDistributionPort>ifcDistributionPort</a></p>\n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
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
      "pos_y": 2230
    },
    "32": {
      "id": 32,
      "name": "IN-CCS-TMS",
      "data": {},
      "class": "SCH",
      "html": "\n <div>\n <div class=\"title-box\"><i class=\"fas fa-code-branch\"></i> IN-CCS-TMS (32)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Traffic Management System  <p class=uniclass><a class=uniclass target=\"_blank\" href=\"https://uniclass.thenbs.com/taxon/ss_75_70_90_91\" title=\"Traffic management control systems\" >Ss_75_70_90_91</a></p> \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
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
    "33": {
      "id": 33,
      "name": "IN-BLD-ANC-LOC",
      "data": {},
      "class": "SCH",
      "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-BLD-ANC-LOC (33)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  LOC / Cabinet System <br><p class=uniclass><a class=\"uniclass\" target=\"_blank\" href=\"https://uniclass.thenbs.com/taxon/pr_40_30_75\" title=\"Safes and security cabinets\">Pr_40_30_75</a></p>\n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
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
      "pos_y": 200
    },
    "34": {
      "id": 34,
      "name": "IN-BLD-ANC-SUB",
      "data": {},
      "class": "SCH",
      "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-BLD-ANC-SUB (34)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Substation System \n  <p class=uniclass><a class=uniclass target=\"_blank\" href=\"https://uniclass.thenbs.com/taxon/ss_70_20_30\" title=\"High-voltage substation systems\">Ss_70_20_30</a></p> <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
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
      "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-BLD-ANC-SW (35)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Switching Station System  <p class=uniclass><a class=uniclass target=\"_blank\" href=\"https://uniclass.thenbs.com/taxon/en_70_20_22\" title=\"Direct current (d.c.) switching stations\">En_70_20_22</a></p> <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
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
      "pos_y": -120
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
    "38": {
      "id": 38,
      "name": "IN-BLD-DPT-STB",
      "data": {},
      "class": "SCH",
      "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-BLD-DPT-STB (38)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Stabling System <p class=uniclass><a class=uniclass target=\"_blank\" href=\"https://uniclass.thenbs.com/taxon/sl_80_50_85\" title=\"Stabling yards\">SL_80_50_85</a></p> \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
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
      "pos_x": 740,
      "pos_y": 1800
    },
    "45": {
      "id": 45,
      "name": "IN-BLD-ST-FAC",
      "data": {},
      "class": "SCH",
      "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-BLD-ST-FAC (45)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Facilities / Amenities System  <p class=uniclass><a class=uniclass target=\"_blank\" href=\"https://uniclass.thenbs.com/taxon/ss_90\" title=\"Soft facility management systems\">Ss_90</a></p> <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
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
    }
}
}