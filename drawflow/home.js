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
        "html": "\n <div>\n <div class=\"title-box-orange\"><i class=\"fas fa-code-branch\"></i> IN-BLD (2)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n   Bulidings &amp; Stations System <p class=ifc><a class=ifc target=\"_blank\" href=\"https://search.bsdd.buildingsmart.org/uri/buildingsmart/ifc/4.3/class/IfcBuilding\" title=ifcRoot&nbsp;\\&nbsp;IfcObjectDefinition&nbsp;\\&nbsp;IfcObject&nbsp;\\&nbsp;IfcProduct&nbsp;\\&nbsp;IfcSpatialElement&nbsp;\\&nbsp;IfcSpatialStructureElement&nbsp;\\&nbsp;ifcFacility&nbsp;\\&nbsp;ifcBuilding>ifcBuilding</a></p><p class=uniclass><a target=\"_blank\" href=\"https://uniclass.thenbs.com/taxon/en_80_50_74\" title=\"Railway stations\">En_80_50_74</a></p> \n  <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
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
        "pos_y": 25
      },
      "3": {
        "id": 3,
        "name": "IN-BLD-ST",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box-darkblue\"><i class=\"fas fa-code-branch parentasset\" ></i> IN-BLD-ST (3)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n   Station System <p class=uniclass><a class=uniclass target=\"_blank\" href=\"https://uniclass.thenbs.com/taxon/en_80_50_74\" title=\"Railway stations\">En_80_50_74</a></p>  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
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
        "pos_y": 90
      },
      "4": {
        "id": 4,
        "name": "IN-BLD-BS-WM",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-BLD-BS-WM (19)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Waste Management System <p class=uniclass><a class=uniclass target=\"_blank\" href=\"https://uniclass.thenbs.com/taxon/ac_50\" title=\"Waste disposal activities\">Ac_50</a></p>\n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
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
        "pos_x": 2170,
        "pos_y": 170
      },
      "5": {
        "id": 5,
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
        "pos_x": 760,
        "pos_y": -270
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
        "pos_x": 750,
        "pos_y": -530
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
          }
        },          
        "outputs": {
          "output_1": {
            "connections": [
              
            ]
          }
        },
        "pos_x": 750,
        "pos_y": -100
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
        "pos_x": 760,
        "pos_y": 460
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
        "pos_x": 1540,
        "pos_y": 740
      },
      "10": {
        "id": 10,
        "name": "IN-BLD-BS-FF",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-BLD-BS-FF (12)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Fixtures &amp; Fittings System  <p class=uniclass><a class=uniclass target=\"_blank\" href=\"https://uniclass.thenbs.com/taxon/ss_40_15_35_35\" title=\"General fixtures systems\">Ss_40_15_35_35</a></p>\n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
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
        "pos_x": 2170,
        "pos_y": 580
      },
      "11": {
        "id": 11,
        "name": "IN-BLD-BS-ME",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-BLD-BS-ME (10)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Mechanical System <p class=uniclass><a class=uniclass target=\"_blank\" href=\"https://uniclass.thenbs.com/taxon/ss_75_70_52\" title=\"Mechanical engineering services control and management systems\">Ss_75_70_52</a></p>\n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
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
        "pos_y": 620
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
          },
          "output_2":{"connections":[{"node":"113","output":"input_2"}]}
        },
        "pos_x": 220,
        "pos_y": 1100
      },
      "13": {
        "id": 13,
        "name": "IN-CCS-SIG",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box-darkblue\"><i class=\"fas fa-code-branch\"></i> IN-CCS-SIG (2)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Conventional Signalling System  <p class=uniclass><a class=uniclass target=\"_blank\" href=\"https://uniclass.thenbs.com/taxon/ss_75_30_70_70\" title=\"Rail Signal systems\">Ss_75_30_70_70</a></p> \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
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
          "input_2": {"connections":[]}
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
          "output_2":{"connections":[{"node":"40","output":"input_2"},
                                     {"node":"116","output":"input_2"}]}
        },
        "pos_x": 750,
        "pos_y": 1220
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
          "input_2":{"connections":[{"node":"123","input":"output_2"},
                                    {"node":"124","input":"output_2"}]}
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
        "pos_x": 750,
        "pos_y": 1060
      },
      "15": {
        "id": 15,
        "name": "IN-CCS-TMS",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box-darkblue\"><i class=\"fas fa-code-branch\"></i> IN-CCS-TMS (4)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Traffic Management System  \n <p class=uniclass><a class=uniclass target=\"_blank\" href=\"https://uniclass.thenbs.com/taxon/ss_75_70_90_91\" title=\"Traffic management control systems\">Ss_75_70_90_91</a></p>\n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
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
        "html": "\n <div>\n <div class=\"title-box-orange\"><i class=\"fas fa-code-branch\"></i> IN-DR (1)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Drainage System  <p class=ifc><a class=ifc target=\"_blank\" href=\"https://search.bsdd.buildingsmart.org/uri/buildingsmart/ifc/4.3/class/IfcDistributionSystemDRAINAGE\" title=\"IfcRoot&nbsp;\\&nbsp;IfcObjectDefinition&nbsp;\\&nbsp;IfcObject&nbsp;\\&nbsp;IfcGroup&nbsp;\\&nbsp;IfcSystem&nbsp;\\&nbsp;IfcDistributionSystem.DRAINAGE\">IfcDistributionSystem</a></p> <p class=uniclass><a class=uniclass target=\"_blank\" href=\"https://uniclass.thenbs.com/taxon/ss_50_70\" title=\"Drainage storage, treatment and disposal systems\">Ss_50_70</a></p>\n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
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
          "output_1":{"connections":[{"node":"1","output":"input_1"}]},
          "output_2":{"connections":[{"node":"28","output":"input_2"},
                                     {"node":"147","output":"input_2"}]}
        },
        "pos_x": -1100,
        "pos_y": 1500
      },
      "17": {
        "id": 17,
        "name": "IN-DR-BLD",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box-darkblue\"><i class=\"fas fa-code-branch\"></i> IN-DR-BLD (2)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Buildings &amp; Stations Drainage System <p class=ifc><a class=uniclass target=\"_blank\" href=\"https://search.bsdd.buildingsmart.org/uri/buildingsmart/ifc/4.3/class/IfcDistributionSystemDRAINAGE\" title=\"IfcRoot&nbsp;\\&nbsp;IfcObjectDefinition&nbsp;\\&nbsp;IfcObject&nbsp;\\&nbsp;IfcGroup&nbsp;\\&nbsp;IfcSystem&nbsp;\\&nbsp;IfcDistributionSystem.DRAINAGE\" ></a></p> <p class=uniclass><a class=uniclass target=\"_blank\" title=\"Drainage storage, treatment and disposal systems\" href=\"https://uniclass.thenbs.com/taxon/ss_50_70\" >Ss_50_70</a></p> \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1": {
            "connections": []} },          
        "outputs": {
          "output_1": {"connections":[{"node":"16","output":"input_1"}]},
          "output_1": {"connections":[{"node":"2","output":"input_1"}]}
        },
        "pos_x": -1650,
        "pos_y": 1500
      },
      "18": {
        "id": 18,
        "name": "IN-DR-HW",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box-darkblue\"><i class=\"fas fa-code-branch\"></i> IN-DR-HW (3)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Highway Drainage System  \n <p class=uniclass><a class=uniclass target=\"_blank\" href=\"https://uniclass.thenbs.com/taxon/ss_50_30_04\" title=\"Above-ground wastewater drainage systems\">Ss_50_30_04</a></p>  <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
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
        "pos_x": -1940,
        "pos_y": 1500
      },
      "19": {
        "id": 19,
        "name": "IN-DR-LND",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box-darkblue\"><i class=\"fas fa-code-branch\"></i> IN-DR-LND (4)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Land Drainage System  <p class=uniclass><a class=uniclass target=\"_blank\" href=\"https://uniclass.thenbs.com/taxon/ss_50_70_45\" title=\"Land drainage systems\">Ss_50_70_45</a></p>\n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
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
        "pos_x": -2270,
        "pos_y": 1500
      },
      "20": {
        "id": 20,
        "name": "IN-DR-RL",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box-darkblue\"><i class=\"fas fa-code-branch\"></i> IN-DR-RL (5)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Railway Drainage System  <p class=ifc><a class=ifc target=\"_blank\" href=\"https://search.bsdd.buildingsmart.org/uri/buildingsmart/ifc/4.3/class/IfcDistributionSystemDRAINAGE\" title=\"IfcRoot&nbsp;\\&nbsp;IfcObjectDefinition&nbsp;\\&nbsp;IfcObject&nbsp;\\&nbsp;IfcGroup&nbsp;\\&nbsp;IfcSystem&nbsp;\\&nbsp;IfcDistributionSystem.DRAINAGE\">IfcDistributionSystem</a></p> <p class=uniclass><a class=uniclass target=\"_blank\" href=\"https://uniclass.thenbs.com/taxon/ss_50_70\" title=\"Drainage storage, treatment and disposal systems\">Ss_50_70</a></p> \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
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
          },
          "output_2":{"connections":[{"node":"118","output":"input_2"}]}
        },
        "pos_x": -1650,
        "pos_y": 1820
      },
      "21": {
        "id": 21,
        "name": "IN-EN",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box-orange\"><i class=\"fas fa-code-branch\"></i> IN-EN (1)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Power / Energy System  <p class=ifc> <a class=ifc target=\"_blank\" href=\"https://search.bsdd.buildingsmart.org/uri/buildingsmart/ifc/4.3/class/IfcDistributionSystemELECTRICAL\" title=\"ifcRoot&nbsp;\\&nbsp;ifcObjectDefinition&nbsp;\\&nbsp;ifcObject&nbsp;\\&nbsp;ifcGroup&nbsp;\\&nbsp;ifcSystem&nbsp;\\&nbsp;ifcDistributionSystem&nbsp;\\&nbsp;ifcDistributionSystem.ELECTRICAL\" >ifcDistributionSystem</a></p> <p class=uniclass><a class=uniclass target=\"_blank\" href=\"https://uniclass.thenbs.com/taxon/ss_82_70_65\" title=\"Rail power supply systems\" >Ss_82_70_65</a></p>  <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1":{"connections":[{"node":"1","input":"output_1"}]},
          "input_2":{"connections":[{"node":"74","input":"output_2"},
                                    {"node":"75","input":"output_2"},
                                    {"node":"80","input":"output_2"},
                                    {"node":"132","input":"output_2"}]}
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
          "output_2": {"connections":[{"node":"35","output":"input_2"}]}
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
          },
          "input_2":{"connections":[{"node":"67","input":"output_2"}]}
        },          
        "outputs": {
          "output_1": {
            "connections": []
          }
        },
        "pos_x": 850,
        "pos_y": 1760
      },
      "23": {
        "id": 23,
        "name": "IN-EN-STO",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box-darkblue\" ><i class=\"fas fa-code-branch\"></i> IN-EN-STO (7)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Power Storage System  <p class=ifc><a class=ifc target=\"_blank\" href=\"https://search.bsdd.buildingsmart.org/uri/buildingsmart/ifc/4.3/class/IfcElectricFlowStorageDevice\" title=\"IfcRoot&nbsp;\\&nbsp;IfcObjectDefinition&nbsp;\\&nbsp;IfcObject&nbsp;\\&nbsp;IfcProduct&nbsp;\\&nbsp;IfcElement&nbsp;\\&nbsp;IfcDistributionElement&nbsp;\\&nbsp;IfcDistributionFlowElement&nbsp;\\&nbsp;IfcFlowStorageDevice&nbsp;\\&nbsp;IfcElectricFlowStorageDevice&nbsp;\\&nbsp;IfcElectricFlowStorageDevice\" >IfcElectricFlowStorageDevice</a></p> <p class=uniclass> <a class=uniclass target=\"_blank\" href=\"https://uniclass.thenbs.com/taxon/ss_70_30_45_92\" title=\"Uninterruptible power supply systems\" >Ss_70_30_45_92</a> </p>   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> <div class=container><div class=attrHeader>Attribute</div><div class=attrHeader>Value</div><div class=attrData>Model</div><div class=attrData>Smart-UPS</div><div class=attrData>Power Rating</div><div class=attrData>600W</div><div class=attrData>VA Rating</div><div class=attrData>1000VA</div><div class=attrData>Output Voltage</div><div class=attrData>230V</div><div class=attrData>Input Voltage</div><div class=attrData>230V</div><div class=attrData>Mounting Type</div><div class=attrData>Stand Alone</div><div class=attrData>No Of Outlets</div><div class=attrData>8</div><div class=attrData>Type</div><div class=attrData>Line Interactive</div><div class=attrData>Current Rating</div><div class=attrData>4.3A</div><div class=attrData>Length</div><div class=attrData>171mm</div><div class=attrData>Width</div><div class=attrData>439mm</div><div class=attrData>Depth</div><div class=attrData>219mm</div></div><img width=100% src=\"R2010843-01.jpg\" />\n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
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
        "pos_x": 1200,
        "pos_y": 2050
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
        "pos_x": 1540,
        "pos_y": 2060
      },
      "25": {
        "id": 25,
        "name": "IN-ENV",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box-orange\"><i class=\"fas fa-code-branch\"></i> IN-ENV (1)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Environment System <p class=uniclass> <a class=uniclass target=\"_blank\" href=\"https://uniclass.thenbs.com/taxon/ss_65_80_15\" title=\"Controlled environment systems\">Ss_65_80_15</a></p> \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
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
        "pos_x": 600,
        "pos_y": 2730
      },
      "27": {
        "id": 27,
        "name": "IN-ENV-LAN-OS",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-ENV-LAN-OS (3)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Public Open Space &amp; Recreation System  <p class=uniclass><a class=uniclass target=\"_blank\" href=\"https://uniclass.thenbs.com/taxon/co_40_75_71\" title=\"Recreation Grounds\">Co_40_75_71</a></p>   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
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
        "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-ENV-LAN-PS (4)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Planting System <p class=uniclass> <a class=uniclass target=\"_blank\" href=\"https://uniclass.thenbs.com/search?query=planting+system&filter=status%3ACurrent\" title=\"External planting systems\" >Ss_45_40_28_85</a> </p> \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1":{"connections":[{"node":"26","input":"output_1"}]},
          "input_2":{"connections":[{"node":"16","input":"output_2"},
                                    {"node":"114","input":"output_2"},
                                    {"node":"101","input":"output_2"}]}
        },          
        "outputs": {
          "output_1": {
            "connections": [{}]
          }
        },
        "pos_x": 1310,
        "pos_y": 2740
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
          },"input_2":{"connections":[{"node":"51","input":"output_2"}]}
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
        "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-EN-NTP-VC (30)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Vehicle Charging System <p class=uniclass> <a class=uniclass target=\"_blank\" href=\"https://uniclass.thenbs.com/taxon/ss_70_30_94\" title=\"Vehicle charging systems\" >Ss_70_30_94</a> </p> \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
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
        "pos_x": 1940,
        "pos_y": 2080
      },
      "31": {
        "id": 31,
        "name": "IN-EN-LV-RP",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-EN-LV-RP (18)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Renewable Power System <p class=uniclass> <a class=uniclass target=\"_blank\" href=\"https://uniclass.thenbs.com/taxon/ef_70_10_70\" title=\"Renewable power generation\" >EF_70_10_70</a> </p> \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
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
        "pos_x": 1940,
        "pos_y": 1960
      },
      "32": {
        "id": 32,
        "name": "IN-BLD-BS-FS",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-BLD-BS-FS (32)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Fire &amp; Safety System <p class=uniclass><a class=uniclass target=\"_blank\" href=\"https://uniclass.thenbs.com/taxon/ss_75_50_28_29\" title=\"Fire detection and alarm systems\">Ss_75_50_28_29</a></p>\n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
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
        "pos_y": 440
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
                                    {"node":"96","input":"output_1"}]},
          "input_2":{"connections":[{"node":"104","input":"output_2"}]}
        },          
        "outputs": {
          "output_1": {
            "connections": [
                {
                    "node": "29",
                    "output": "input_1"
                }
            ]
        },"output_2":{"connections":[]}
        },
        "pos_x": -1650,
        "pos_y": 2340
      },
      "34": {
        "id": 34,
        "name": "IN-DR-RL-TRA",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-DR-RL-TRA (12)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Track Drainage System System  <p class=ifc><a class=ifc target=\"_blank\" href=\"https://search.bsdd.buildingsmart.org/uri/buildingsmart/ifc/4.3/class/IfcDistributionSystemDRAINAGE\" title=\"IfcRoot&nbsp;\\&nbsp;IfcObjectDefinition&nbsp;\\&nbsp;IfcObject&nbsp;\\&nbsp;IfcGroup&nbsp;\\&nbsp;IfcSystem&nbsp;\\&nbsp;IfcDistributionSystem.DRAINAGE\">IfcDistributionSystem</a></p>  <p class=uniclass><a class=uniclass target=\"_blank\" href=\"https://uniclass.thenbs.com/taxon/ss_50_70\" title=\"Drainage storage, treatment and disposal systems\">Ss_50_70</a></p>\n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
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
        "pos_x": -2160,
        "pos_y": 1730
      },
      "35": {
        "id": 35,
        "name": "IN-BLD-ANC-SUB",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-BLD-ANC-SUB (34)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Substation System \n  <p class=uniclass><a target=\"_blank\" class=uniclass href=\"https://uniclass.thenbs.com/taxon/ss_70_20_30\" title=\"High-voltage substation systems\">Ss_70_20_30</a></p> <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1": {"connections":[{"node":"5","input":"output_1"}]},
          "input_2": {"connections":[{"node":"21","input":"output_2"}]}
        },          
        "outputs": {},
        "pos_x": 1200,
        "pos_y": -160
      },
      "36": {
        "id": 36,
        "name": "IN-BLD-ANC-SW",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-BLD-ANC-SW (35)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Switching Station System  <p class=uniclass><a class=uniclass target=\"_blank\" href=\"https://uniclass.thenbs.com/taxon/en_70_20_22\" title=\"Direct current (d.c.) switching stations\">En_70_20_22</a></p> <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
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
        "pos_x": 1200,
        "pos_y": -340
      },
      "37": {
        "id": 37,
        "name": "IN-BLD-BS-EE",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-BLD-BS-EE (18)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Energy Efficiency System  <p class=uniclass><a class=uniclass target=\"_blank\" href=\"https://uniclass.thenbs.com/taxon/pc_35_27_27\" title=\"Energy efficiency\">PC_35_27_27</a></p>   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
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
        "pos_x": 2170,
        "pos_y": 340
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
          }
        },          
        "outputs": {},
        "pos_x": 1200,
        "pos_y": -530
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
        "pos_y": 310
      },
      "40": {
        "id": 40,
        "name": "IN-BLD-ANC-REB",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-BLD-ANC-REB (5)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Relocatable Equipment Building (REB) System <p class=uniclass><a class=\"uniclass\" target=\"_blank\" title=\"Plant and equipment buildings\" href=\"https://uniclass.thenbs.com/taxon/en_90_90_64\">En_90_90_64<a/></p>\n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1":{"connections":[{"node":"5","input":"output_1"}]},
          "input_2":{"connections":[{"node":"13","input":"output_1"},
                                    {"node":"111","input":"output_1"}]}
        },          
        "outputs": {},
        "pos_x": 1520,
        "pos_y": -160
      },
      "41": {
        "id": 41,
        "name": "IN-BLD-ANC-LOC",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-BLD-ANC-LOC (33)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  LOC / Cabinet System <br><p class=uniclass><a class=\"uniclass\" target=\"_blank\" href=\"https://uniclass.thenbs.com/taxon/pr_40_30_75\" title=\"Safes and security cabinets\">Pr_40_30_75</a></p>\n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1":{"connections":[{"node":"5","input":"output_1"}]},
          "input_2":{"connections":[{"node":"119","input":"output_1"}]}
        },          
        "outputs": {},
        "pos_x": 1520,
        "pos_y": -340
      },
      "42": {
        "id": 42,
        "name": "IN-BLD-BS-BC",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-BLD-BS-BC (16)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Building Control System  <p class=uniclass><a class=uniclass target=\"_blank\" href=\"https://uniclass.thenbs.com/taxon/ss_75_70_54_10\" title=\"Building monitoring and management systems\">Ss_75_70_54_10</a></p>  <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
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
        "pos_x": 2170,
        "pos_y": 460
      },
      "43": {
        "id": 43,
        "name": "IN-BLD-BS-SEC",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-BLD-BS-SEC (43)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Security &amp; Safety System <p class=uniclass><a class=uniclass target=\"_blank\" href=\"https://uniclass.thenbs.com/taxon/ss_75_40\" title=\"Security systems\">Ss_75_40</a></p>\n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
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
        "pos_y": 570
      },
      "44": {
        "id": 44,
        "name": "IN-BLD-BS-WF",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-BLD-BS-WF (22)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Way Finding &amp; Signage System  <p class=uniclass><a class=uniclass target=\"_blank\" href=\"https://uniclass.thenbs.com/taxon/ss_40_10_20_96\" title=\"Wayfinding signage systems\">Ss_40_10_20_96</a></p>\n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1": {"connections":[{"node":"46","input":"output_1" }]}
        },          
        "outputs": {},
        "pos_x": 1550,
        "pos_y": 160
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
          }
        },          
        "outputs": {},
        "pos_x": 1200,
        "pos_y": 90
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
        "pos_x": 750,
        "pos_y": 330
      },
      "47": {
        "id": 47,
        "name": "IN-BLD-BS-EL",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div  class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-BLD-BS-EL (11)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Electrical System  <p class=ifc><a class=ifc target=\"_blank\" href=\"https://search.bsdd.buildingsmart.org/uri/buildingsmart/ifc/4.3/class/IfcDistributionSystemELECTRICAL\" title=\"ifcRoot&nbsp;\\&nbsp;ifcObjectDefinition&nbsp;\\&nbsp;ifcObject&nbsp;\\&nbsp;ifcGroup&nbsp;\\&nbsp;ifcSystem&nbsp;\\&nbsp;IfcDistributionSystem.ELECTRICAL\">ELECTRICAL</a></p> <p class=uniclass><a class=uniclass target=\"_blank\" href=\"https://uniclass.thenbs.com/taxon/ss_70\" title=\"Electrical Systems\">Ss_70</a></p>\n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
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
        "pos_x": 1540,
        "pos_y": 350
      },
      "48": {
        "id": 48,
        "name": "IN-BLD-BS-NC",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-BLD-BS-NC (17)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Sustainability &amp; Net Carbon Zero System  <p class=uniclass><a class=uniclass target=\"_blank\" href=\"https://uniclass.thenbs.com/taxon/pm_35_40\" title=\"Environmentally sustainable design requirements\" >PM_35_40</a></p>\n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
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
        "pos_y": 160
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
        "pos_x": -2370,
        "pos_y": 2820
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
          },"ouput_2":{"connections":[{"node":"29","output":"input_2"}]}
        },
        "pos_x": -1650,
        "pos_y": 3570
      },
      "52": {
        "id": 52,
        "name": "IN-CCS-TMS-ATS",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-CCS-TMS-ATS (5)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n Automatic Train Service (ATS) System <p class=uniclass><a class=uniclass target=\"_blank\" href=\"https://uniclass.thenbs.com/taxon/ss_75_30_70_04\" title=\"Automatic train stop (ATS) systems\">Ss_75_30_70_04</a></p> \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1":{"connections":[{"node":"15","input":"output_1"}]},
          "input_2":{"connections":[{"node":"153","input":"output_2"}]}
        },          
        "outputs": {},
        "pos_x": 1430,
        "pos_y": 910
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
          },
          "input_2":{"connections":[{"node":"153","input":"output_2"}]}
        },          
        "outputs": {},
        "pos_x": 1090,
        "pos_y": 830
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
        "pos_x": 1100,
        "pos_y": 940
      },
      "55": {
        "id": 55,
        "name": "IN-CCS-SIG-INT",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-CCS-SIG-INT (8)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n Interlocking System  <p class=uniclass><a class=uniclass target=\"_blank\" href=\"https://uniclass.thenbs.com/taxon/ss_75_30_70_42\" title=\"Interlocking System\" >Ss_75_30_70_42</a></p> \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
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
        "pos_x": 1090,
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
        "pos_x": 1430,
        "pos_y": 1100
      },
      "57": {
        "id": 57,
        "name": "IN-CCS-SIG-POS",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-CCS-SIG-POS (10)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n Point Operating System   <p class=uniclass><a class=uniclass target=\"_blank\" href=\"https://uniclass.thenbs.com/taxon/pr_70_75_70_63\" title=\"Points operating equipment\">Pr_70_75_70_63</a></p>\n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
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
          "input_2":{"connections":[{"node":"96","input":"output_2"}]}
        },          
        "outputs": {},
        "pos_x": 1780,
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
        "pos_x": 1100,
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
        "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-CCS-SIG-SS (13)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n Signals &amp; Signs System  <p class=ifc><a class=ifc target=\"_blank\" href=\"https://search.bsdd.buildingsmart.org/uri/buildingsmart/ifc/4.3/class/IfcSignal\" title=\"IfcRoot&nbsp;\\&nbsp;IfcObjectDefinition&nbsp;\\&nbsp;IfcObject&nbsp;\\&nbsp;IfcProduct&nbsp;\\&nbsp;IfcElement&nbsp;\\&nbsp;IfcDistributionElement&nbsp;\\&nbsp;IfcDistributionFlowElement&nbsp;\\&nbsp;IfcFlowTerminal&nbsp;\\&nbsp;IfcSignal\">IfcSignal</a></p><p class=ifc><a class=ifc target=\"_blank\" href=\"https://search.bsdd.buildingsmart.org/uri/buildingsmart/ifc/4.3/class/IfcSign\" title=\"IfcRoot&nbsp;\\&nbsp;IfcObjectDefinition&nbsp;\\&nbsp;IfcObject&nbsp;\\&nbsp;IfcProduct&nbsp;\\&nbsp;IfcElement&nbsp;\\&nbsp;IfcElementComponent&nbsp;\\&nbsp;IfcSign\">IfcSign</a></p> <p class=uniclass><a class=uniclass target=\"_blank\" href=\"https://uniclass.thenbs.com/taxon/ss_75_30_70\" title=\"Railway signal and control systems\">Ss_75_30_70</a></p> <p class=uniclass><a class=uniclass target=\"_blank\" href=\"https://uniclass.thenbs.com/taxon/pr_40_10_77_70\" title=\"Railway signs\">Pr_40_10_77_70</a></p>\n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
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
        "pos_x": 1780,
        "pos_y": 1230
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
        "pos_x": 1100,
        "pos_y": 1300
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
        "pos_x": 1430,
        "pos_y": 1220
      },
      "63": {
        "id": 63,
        "name": "IN-CCS-SIG-WS",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-CCS-SIG-WS (16)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n TPWS/AWS System  <p class=uniclass><a class=uniclass target=\"_blank\" href=\"https://uniclass.thenbs.com/taxon/ss_75_30_70_90\" title=\"Train protection warning systems (TPWS)\">Ss_75_30_70_90</a></p> \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
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
        "pos_x": 1780,
        "pos_y": 1530
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
        "name": "IN-DR-PS",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box-darkblue\"><i class=\"fas fa-code-branch\"></i> IN-DR-PS (6)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Pumping Station System <p class=uniclass> <a class=uniclass target=\"_blank\" href=\"https://uniclass.thenbs.com/taxon/ss_50_35_10_10\" title=\"Below-ground pumping station drainage systems\" ></a> </p> \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
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
          },
          "output_2":{"connections":[{"node":"22","output":"input_2"}]}
        },
        "pos_x": -1640,
        "pos_y": 1940
      },
      "68": {
        "id": 68,
        "name": "IN-DR-RL-EW",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-DR-RL-EW (11)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Earthworks Drainage System  <p class=ifc><a class=ifc target=\"_blank\" href=\"https://search.bsdd.buildingsmart.org/uri/buildingsmart/ifc/4.3/class/IfcDistributionSystemDRAINAGE\" title=\"IfcRoot&nbsp;\\&nbsp;IfcObjectDefinition&nbsp;\\&nbsp;IfcObject&nbsp;\\&nbsp;IfcGroup&nbsp;\\&nbsp;IfcSystem&nbsp;\\&nbsp;IfcDistributionSystem.DRAINAGE\">IfcDistributionSystem</a></p>  <p class=uniclass><a class=uniclass target=\"_blank\" href=\"https://uniclass.thenbs.com/taxon/ss_50_70\" title=\"Drainage storage, treatment and disposal systems\">Ss_50_70</a></p>\n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
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
          },
          "output_2":{"connections":[{"node":"101","output":"input_2"}]}
        },
        "pos_x": -2160,
        "pos_y": 1860
      },
      "69": {
        "id": 69,
        "name": "IN-DR-RL-STR",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-DR-RL-STR (10)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Civils &amp; Structures Drainage System  <p class=ifc><a class=ifc target=\"_blank\" href=\"https://search.bsdd.buildingsmart.org/uri/buildingsmart/ifc/4.3/class/IfcDistributionSystemDRAINAGE\" title=\"IfcRoot&nbsp;\\&nbsp;IfcObjectDefinition&nbsp;\\&nbsp;IfcObject&nbsp;\\&nbsp;IfcGroup&nbsp;\\&nbsp;IfcSystem&nbsp;\\&nbsp;IfcDistributionSystem.DRAINAGE\">IfcDistributionSystem</a></p>  <p class=uniclass><a class=uniclass target=\"_blank\" href=\"https://uniclass.thenbs.com/taxon/ss_50_70\" title=\"Drainage storage, treatment and disposal systems\">Ss_50_70</a></p>\n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
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
          },
          "output_2":{"connections":[{"node":"69","output":"input_2"}]}
        },
        "pos_x": -2160,
        "pos_y": 1980
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
        "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-EXT-HS-AW (10)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Accessway Systems <p class=uniclass><a class=uniclass target=\"_blank\" href=\"https://uniclass.thenbs.com/taxon/en_80_35_01\" title=\"Access roads\">En_80_35_01</a></p>  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
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
        "pos_x": -2610,
        "pos_y": 3580
      },
      "72": {
        "id": 72,
        "name": "IN-EXT-HS-RD",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-EXT-HS-RD (8)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n   Road Systems <p class=ifc><a class=ifc target=\"_blank\" href=\"https://search.bsdd.buildingsmart.org/uri/buildingsmart/ifc/4.3/class/IfcRoad\" title=\"IfcRoot&nbsp;\\&nbsp;IfcObjectDefinition&nbsp;\\&nbsp;IfcObject&nbsp;\\&nbsp;IfcProduct&nbsp;\\&nbsp;IfcSpatialElement&nbsp;\\&nbsp;IfcSpatialStructureElement&nbsp;\\&nbsp;IfcFacility&nbsp;\\&nbsp;IfcRoad\">IfcRoad</a></p> <p class=uniclass><a class=uniclass target=\"_blank\" href=\"https://uniclass.thenbs.com/taxon/sl_80_35\" title=\"Road spaces\">SL_80_35</a></p> <p class=uniclass><a class=uniclass target=\"_blank\" href=\"https://uniclass.thenbs.com/taxon/en_80_35_74\" title=\"Roads\">En_80_35_74</a></p> \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
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
        "pos_x": -2300,
        "pos_y": 3580
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
        "pos_x": -2930,
        "pos_y": 3590
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
          },"output_2":{"connections":[{"node":"21","output":"input_2"}]}
        },
        "pos_x": -2690,
        "pos_y": 3930
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
          },"output_2":{"connections":[{"node":"21","output":"input_2"}]}
        },
        "pos_x": -2690,
        "pos_y": 4060
      },
      "76": {
        "id": 76,
        "name": "IN-EXT-US-H2O",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-EXT-US-H2O (13)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Water Mains Infrastructure Network <p class=ifc><a class=ifc target=\"_blank\" href=\"https://search.bsdd.buildingsmart.org/uri/buildingsmart/ifc/4.3/class/IfcDistributionSystem\" title=\"IfcRoot&nbsp;\\&nbsp;IfcObjectDefinition&nbsp;\\&nbsp;IfcObject&nbsp;\\&nbsp;IfcGroup&nbsp;\\&nbsp;IfcSystem&nbsp;\\&nbsp;IfcDistributionSystem\">IfcDistributionSystem</a></p> <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
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
        "pos_y": 3920
      },
      "77": {
        "id": 77,
        "name": "IN-EXT-US-SWR",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-EXT-US-SWR (14)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Sewer Mains Infrastructure Network <p class=ifc><a class=ifc target=\"_blank\" href=\"https://search.bsdd.buildingsmart.org/uri/buildingsmart/ifc/4.3/class/IfcDistributionSystem\" title=\"IfcRoot&nbsp;\\&nbsp;IfcObjectDefinition&nbsp;\\&nbsp;IfcObject&nbsp;\\&nbsp;IfcGroup&nbsp;\\&nbsp;IfcSystem&nbsp;\\&nbsp;IfcDistributionSystem\">IfcDistributionSystem</a></p> <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
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
        "pos_x": -2370,
        "pos_y": 4060
      },
      "78": {
        "id": 78,
        "name": "IN-EXT-US-GAS",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-EXT-US-GAS (15)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Gas Infrastructure Network <p class=ifc><a class=ifc target=\"_blank\" href=\"https://search.bsdd.buildingsmart.org/uri/buildingsmart/ifc/4.3/class/IfcDistributionSystem\" title=\"IfcRoot&nbsp;\\&nbsp;IfcObjectDefinition&nbsp;\\&nbsp;IfcObject&nbsp;\\&nbsp;IfcGroup&nbsp;\\&nbsp;IfcSystem&nbsp;\\&nbsp;IfcDistributionSystem\">IfcDistributionSystem</a></p> <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
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
        "pos_x": -3020,
        "pos_y": 3920
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
          },"output_2":{"connections":[{"node":"152","output":"input_2"}]}
        },
        "pos_x": -3020,
        "pos_y": 4050
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
          },"output_2":{"connections":[{"node":"21","output":"input_2"}]}
        },
        "pos_x": -2360,
        "pos_y": 4200
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
        "pos_y": 4800
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
        "pos_x": -2670,
        "pos_y": 4800
      },
      "83": {
        "id": 83,
        "name": "IN-EXT-3RD-TEL",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-EXT-3RD-TEL (20)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Telecoms Infrastructure Network <p class=uniclass><a class=uniclass target=\"_blank\" href=\"https://uniclass.thenbs.com/taxon/ss_75_10_21_88\" title=\"Telecommunications systems\">Ss_75_10_21_88</a></p> \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
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
          },"output_2":{"connections":[{"node":"120","output":"input_2"}]}
        },
        "pos_x": -2990,
        "pos_y": 4970
      },
      "84": {
        "id": 84,
        "name": "IN-EN-ACDC",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box-darkblue\"><i class=\"fas fa-code-branch\"></i> IN-EN-ACDC (3)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  AC/DC Conversion System  <p class=ifc><a class=ifc target=\"_blank\" href=\"https://search.bsdd.buildingsmart.org/uri/buildingsmart/ifc/4.3/class/IfcTransformerINVERTER\" title=\"IfcRoot&nbsp;\\&nbsp;IfcObjectDefinition&nbsp;\\&nbsp;IfcObject&nbsp;\\&nbsp;IfcProduct&nbsp;\\&nbsp;IfcElement&nbsp;\\&nbsp;IfcDistributionElement&nbsp;\\&nbsp;IfcDistributionFlowElement&nbsp;\\&nbsp;IfcEnergyConversionDevice&nbsp;\\&nbsp;IfcTransformer\">IfcTransformer</a></p> <p class=uniclass><a class=uniclass target=\"_blank\" href=\"https://uniclass.thenbs.com/taxon/pr_65_72_43_42\" title=\"Inverters\">Pr_65_72_43_42</a></p>  <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
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
        "pos_x": 1180,
        "pos_y": 1760
      },
      "85": {
        "id": 85,
        "name": "IN-EN-BND",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box-darkblue\"><i class=\"fas fa-code-branch\"></i> IN-EN-BND (4)</div>\n <div class=\"box dbclickbox\" ondblclick=\"window.open('IN-EN-BND.pdf');\"> \n  Earthing &amp; Bonding System  <p class=uniclass> <a class=uniclass target=\"_blank\" href=\"https://uniclass.thenbs.com/taxon/ss_70_30_25_25\" title=\"Earthing and bonding systems\" >Ss_70_30_25_25</a> </p> \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
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
        "pos_x": 850,
        "pos_y": 1890
      },
      "86": {
        "id": 86,
        "name": "IN-EN-CBL",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box-darkblue\"><i class=\"fas fa-code-branch\"></i> IN-EN-CBL (5)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  HV/LV Cable System <p class=ifc><a class=ifc target=\"_blank\" href=\"https://search.bsdd.buildingsmart.org/uri/buildingsmart/ifc/4.3/class/IfcCableSegment\" title=ifcRoot&nbsp;\\&nbsp;ifcObjectDefinition&nbsp;\\&nbsp;ifcObject&nbsp;\\&nbsp;ifcProduct&nbsp;\\&nbsp;ifcElementn&nbsp;\\&nbsp;ifcDistributionElement&nbsp;\\&nbsp;ifcDistributionFlowElement&nbsp;\\&nbsp;ifcFlowSegment&nbsp;\\&nbsp;ifcCableSegment>ifcCableSegment</a></p> <p class=uniclass> <a class=uniclass target=\"_blank\" href=\"https://uniclass.thenbs.com/taxon/ss_70_30_10\" title=\"Cable management systems\" >Ss_70_30_10</a> </p> \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
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
          "input_2": {"connections":[]}
        },          
        "outputs": {
          "output_1": {
            "connections": [{}]
          },
          "output_2":{"connections":[{"node":"113","output":"input_2"}]}
        },
        "pos_x": 850,
        "pos_y": 2000
      },
      "87": {
        "id": 87,
        "name": "IN-EN-ISO",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box-darkblue\"><i class=\"fas fa-code-branch\"></i> IN-EN-ISO (6)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Protection/Isolation System  <p class=ifc><a class=ifc target=\"_blank\" href=\"https://search.bsdd.buildingsmart.org/uri/buildingsmart/ifc/4.3/class/IfcProtectiveDevice\" title=\"IfcRoot&nbsp;\\&nbsp;IfcObjectDefinition&nbsp;\\&nbsp;IfcObject&nbsp;\\&nbsp;IfcElement&nbsp;\\&nbsp;IfcProduct&nbsp;\\&nbsp;IfcElement&nbsp;\\&nbsp;IfcDistributionElement&nbsp;\\&nbsp;IfcDistributionFlowElement&nbsp;\\&nbsp;IfcFlowController&nbsp;\\&nbsp;IfcProtectiveDevice\">IfcProtectiveDevice</a></p> <p class=uniclass> <a class=uniclass target=\"_blank\" href=\"https://uniclass.thenbs.com/taxon/ss_70_30_25\" title=\"Electrical protection systems\" >Ss_70_30_25</a> </p>  <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
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
        "pos_x": 1190,
        "pos_y": 1880
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
        "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-EN-TRP-OLE (11)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  OLE System <p class=ifc><a class=ifc target=\"_blank\" href=\"https://search.bsdd.buildingsmart.org/uri/buildingsmart/ifc/4.3/class/IfcDistributionSystemOVERHEAD_CONTACTLINE_SYSTEM\" title=ifcRoot&nbsp;\\&nbsp;ifcObjectDefinition&nbsp;\\&nbsp;ifcObject&nbsp;\\&nbsp;ifcGroup&nbsp;\\&nbsp;ifcSystem&nbsp;\\&nbsp;IfcDistributionSystem&nbsp;\\&nbsp;IfcDistributionSystem.OVERHEAD_CONTACTLINE_SYSTEM>OVERHEAD_CONTACTLINE...</a></p> <p class=uniclass> <a class=uniclass target=\"_blank\" href=\"https://uniclass.thenbs.com/taxon/ss_70_30_60\" title=\"Overhead line traction power distribution systems\">Ss_70_30_60</a></p> \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
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
            "connections":[{"node":"108","input":"output_2"}]
          }
        },          
        "outputs": {
          "output_1": {
            "connections": [{}]
          }
        },
        "pos_x": 1950,
        "pos_y": 2200
      },
      "90": {
        "id": 90,
        "name": "IN-EN-LV",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box-darkblue\"><i class=\"fas fa-code-branch\"></i> IN-EN-LV (8)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  LV Distribution Power System <p class=ifc><a class=ifc target=\"_blank\" href=\"https://search.bsdd.buildingsmart.org/uri/buildingsmart/ifc/4.3/class/IfcDistributionSystemELECTRICAL\" title=\"ifcRoot&nbsp;\\&nbsp;ifcObjectDefinition&nbsp;\\&nbsp;ifcObject&nbsp;\\&nbsp;ifcGroup&nbsp;\\&nbsp;ifcSystem&nbsp;\\&nbsp;ifcDistributionSystem&nbsp;\\&nbsp;ifcDistributionSystem.ELECTRICAL\">ELECTRICAL</a></p> <p class=uniclass> <a class=uniclass target=\"_blank\" href=\"https://uniclass.thenbs.com/taxon/ss_85_50_65\" title=\"Power supply systems\" >Ss_85_50_65</a></p> \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
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
        "pos_x": 1550,
        "pos_y": 1930
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
        "pos_x": 1540,
        "pos_y": 2200
      },
      "92": {
        "id": 92,
        "name": "IN-EXT-3RD-WF",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-EXT-3RD-WF (22)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Weather Forecasting Systems <p class=uniclass><a class=uniclass target=\"_blank\" href=\"https://uniclass.thenbs.com/taxon/pm_30_30_98\" title=\"Weather forecasting information\">PM_30_30_98</a></p> \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
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
          },"output_2":{"connections":[{"node":"125","output":"input_2"}]}
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
        "pos_y": 5160
      },
      "94": {
        "id": 94,
        "name": "IN-EXT-3RD-FH",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-EXT-3RD-FH (24)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Fire Hydrant Mains Systems <p class=uniclass><a class=uniclass target=\"_blank\" href=\"https://uniclass.thenbs.com/taxon/ss_55_30_96_30\" title=\"Water firefighting systems\">Ss_55_30_96_30</a></p>  <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
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
        "pos_x": -2670,
        "pos_y": 5160
      },
      "95": {
        "id": 95,
        "name": "IN-GD-PW-PL",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-GD-PW-PL (3)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Track (Plain line) System <p class=ifc><a class=ifc target=\"_blank\" href=\"https://search.bsdd.buildingsmart.org/uri/buildingsmart/ifc/4.3/class/IfcBuiltSystemRAILWAYTRACK\" title=ifcRoot&nbsp;\\&nbsp;ifcObjectDefinition&nbsp;\\&nbsp;ifcObject&nbsp;\\&nbsp;ifcGroup&nbsp;\\&nbsp;ifcSystem&nbsp;\\&nbsp;IfcBuiltSystem.RAILWAYTRACK>RAILWAYTRACK</a></p>  <p class=uniclass> <a class=uniclass target=\"_blank\" href=\"https://uniclass.thenbs.com/taxon/ss_80_70_70\" title=\"Rail track systems\" >Ss_80_70_70</a> </p> \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
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
        "pos_x": -2140,
        "pos_y": 2290
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
          },
          "output_2":{"connections":[{"node":"57","output":"input_2"}]}
        },
        "pos_x": -2150,
        "pos_y": 2470
      },
      "97": {
        "id": 97,
        "name": "IN-CM",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box-orange\"><i class=\"fas fa-code-branch\"></i> IN-CM (1)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n   Control &amp; Monitoring System <p class=uniclass> <a class=uniclass target=\"_blank\" href=\"https://uniclass.thenbs.com/taxon/ss_75_70_75\" title=\"Rail control and monitoring systems\">Ss_75_70_75</a> </p>\n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
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
        "html": "\n<div>\n<div class=\"title-box-darkblue\"><i class=\"fas fa-code-branch\"></i>IN-CM-MO (2)</div>\n<div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\">\nMonitoring System <p class=uniclass><a class=uniclass target=\"_blank\" href=\"https://uniclass.thenbs.com/taxon/ss_75_40_53\" title=\"Monitoring systems\">Ss_75_40_53</a></p> \n<div class=\"modal\" style=\"display:none\">\n<div class=\"modal-content\">\n<span class=\"close\" onclick=\"closemodal(event)\">&times;</span></div>\n</div>\n</div>\n</div>\n",
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
        "pos_x": -1650,
        "pos_y": -230
      },
      "100": {
        "id": 100,
        "name": "IN-GT",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box-orange\"><i class=\"fas fa-code-branch\"></i> IN-GT (100)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Geo-Technical System <p class=ifc> <a class=ifc target=\"_blank\" href=\"https://search.bsdd.buildingsmart.org/uri/buildingsmart/ifc/4.3/class/IfcGeotechnicalElement\" title=\"ifcRoot&nbsp;\\&nbsp;ifcObjectDefinition&nbsp;\\&nbsp;ifcObject&nbsp;\\&nbsp;ifcProduct&nbsp;\\&nbsp;ifcElement&nbsp;\\&nbsp;ifcGeotechnicalElement\"  >ifcGeotechnicalElement</a> </p> \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
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
        "html": "\n <div>\n <div class=\"title-box-darkblue\"><i class=\"fas fa-code-branch\"></i> IN-GT-EW (101)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Earthwork System  <p class=ifc><a class=ifc target=\"_blank\" href=\"https://search.bsdd.buildingsmart.org/uri/buildingsmart/ifc/4.3/class/IfcEarthworksElement\" title=\"IfcRoot&nbsp;\\&nbsp;IfcObjectDefinition&nbsp;\\&nbsp;IfcObject&nbsp;\\&nbsp;IfcProduct&nbsp;\\&nbsp;IfcElement&nbsp;\\&nbsp;IfcBuiltElement&nbsp;\\&nbsp;IfcEarthworksElement\">IfcEarthworksElement</a></p>  <p class=uniclass><a class=uniclass target=\"_blank\" href=\"https://uniclass.thenbs.com/taxon/ss_15_10\" title=\"Groundworks and earthworks systems\" >Ss_15_10</a></p> <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
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
          },
          "input_2":{"connections":[{"node":"68","input":"output_2"}]}
        },          
        "outputs": {
          "output_1": {
            "connections": [
              {
                "node": "100",
                "output": "input_1"
            }
            ]
          },"output_2":{"connections":[{"node":"28","output":"input_2"},
                                       {"node":"115","output":"input_2"},
                                       {"node":"117","output":"input_2"}]}
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
        "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-GT-EW-CUT (103)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Cutting System  <p class=ifc><a class=ifc target=\"_blank\" href=\"https://search.bsdd.buildingsmart.org/uri/buildingsmart/ifc/4.3/class/IfcEarthworksCut\" title=\"IfcRoot&nbsp;\\&nbsp;IfcObjectDefinition&nbsp;\\&nbsp;IfcObject&nbsp;\\&nbsp;IfcProduct&nbsp;\\&nbsp;IfcElement&nbsp;\\&nbsp;IfcFeatureElement&nbsp;\\&nbsp;IfcFeatureElementSubtraction&nbsp;\\&nbsp;IfcEarthworksCut\">IfcEarthworksCut</a></p>  <p class=uniclass><a class=uniclass target=\"_blank\" href=\"https://uniclass.thenbs.com/taxon/en_32_40_20\" title=\"Cuttings\" >En_32_40_20</a></p>  <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
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
        "pos_x": -2680,
        "pos_y": 2820
      },
      "104": {
        "id": 104,
        "name": "IN-GT-EW-EMB",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-GT-EW-EMB (104)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Embankment System  <p class=ifc><a class=ifc target=\"_blank\" href=\"https://search.bsdd.buildingsmart.org/uri/buildingsmart/ifc/4.3/class/IfcEarthworksFillEMBANKMENT\" title=\"IfcRoot&nbsp;\\&nbsp;IfcObjectDefinition&nbsp;\\&nbsp;IfcObject&nbsp;\\&nbsp;IfcProduct&nbsp;\\&nbsp;IfcElement&nbsp;\\&nbsp;IfcBuiltElement&nbsp;\\&nbsp;IfcEarthworksElement&nbsp;\\&nbsp;IfcEarthworksFill&nbsp;\\&nbsp;IfcEarthworksFill.EMBANKMENT\">EMBANKMENT</a></p>  <p class=uniclass> <a class=uniclass target=\"_blank\" href=\"https://uniclass.thenbs.com/taxon/en_32_40_26\" title=\"Embankments\" >En_32_40_26</a></p> <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
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
          },"output_2":{"connections":[{"node":"33","output":"input_2"}]}
        },
        "pos_x": -2050,
        "pos_y": 2820
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
        "name": "IN-STR-SUP",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box-darkblue\"><i class=\"fas fa-code-branch\"></i> IN-STR-SUP (106)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Support Structures System  <p class=ifc><a class=ifc target=\"_blank\" href=\"https://search.bsdd.buildingsmart.org/uri/buildingsmart/ifc/4.3/class/IfcSpatialStructureElement\" title=\"IfcRoot&nbsp;\\&nbsp;IfcObjectDefinition&nbsp;\\&nbsp;IfcObject&nbsp;\\&nbsp;IfcProduct&nbsp;\\&nbsp;IfcSpatialElement&nbsp;\\&nbsp;IfcSpatialStructureElement\">IfcSpatialStructureElement</a></p>   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
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
        "pos_x": 580,
        "pos_y": 3840
      },
      "107": {
        "id": 107,
        "name": "IN-STR-IS",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box-darkblue\"><i class=\"fas fa-code-branch\"></i> IN-STR-IS (107)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Intersection System  <p class=uniclass><a class=uniclass target=\"_blank\" href=\"https://uniclass.thenbs.com/taxon/sl_80_35_42\" title=\"Intersections\">SL_80_35_42</a></p>  <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
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
        "pos_y": 4530
      },
      "108": {
        "id": 108,
        "name": "IN-STR-SUP-CANT",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-STR-SUP-CANT (108)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Cantilever Structure System  <p class=ifc><a class=ifc target=\"_blank\" href=\"https://search.bsdd.buildingsmart.org/uri/buildingsmart/ifc/4.3/class/IfcBridgeCANTILEVER\" title=\"IfcRoot&nbsp;\\&nbsp;IfcObjectDefinition&nbsp;\\&nbsp;IfcObject&nbsp;\\&nbsp;IfcProduct&nbsp;\\&nbsp;IfcSpatialElement&nbsp;\\&nbsp;IfcSpatialStructureElement&nbsp;\\&nbsp;IfcFacility&nbsp;\\&nbsp;IfcBridge&nbsp;\\&nbsp;IfcBridge.CANTILEVER\">CANTILEVER</a></p><p class=uniclass><a class=uniclass target=\"_blank\" href=\"https://uniclass.thenbs.com/taxon/ss_37_17_35_11\" title=\"Cantilever Gantry systems\">Ss_37_17_35_11</a></p>\n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
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
        "pos_x": 920,
        "pos_y": 3630
      },
      "109": {
        "id": 109,
        "name": "IN-STR-SUP-FDT",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-STR-SUP-FDT (109)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Structural Base / Foundation System <p class=ifc><a class=ifc target=\"_blank\" href=\"https://search.bsdd.buildingsmart.org/uri/buildingsmart/ifc/4.3/class/IfcFooting\" title=\"IfcRoot&nbsp;\\&nbsp;IfcObjectDefinition&nbsp;\\&nbsp;IfcObject&nbsp;\\&nbsp;IfcProduct&nbsp;\\&nbsp;IfcElement&nbsp;\\&nbsp;IfcBuiltElement&nbsp;\\&nbsp;IfcFooting\">ifcFooting</a></p><p class=uniclass><a class=uniclass target=\"_blank\" href=\"https://uniclass.thenbs.com/taxon/ef_20_05_30\" title=\"Foundations\">EF_20_05_30</a></p> \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
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
        "pos_x": 910,
        "pos_y": 3810
      },
      "110": {
        "id": 110,
        "name": "IN-STR-SUP-GNT",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-STR-SUP-GNT (110)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Gantry System  <p class=ifc><a class=ifc target=\"_blank\" href=\"https://search.bsdd.buildingsmart.org/uri/buildingsmart/ifc/4.3/class/IfcElementAssemblyRIGID_FRAME\" title=\"IfcRoot&nbsp;\\&nbsp;IfcObjectDefinition&nbsp;\\&nbsp;IfcObject&nbsp;\\&nbsp;IfcProduct&nbsp;\\&nbsp;IfcElement&nbsp;\\&nbsp;IfcElementAssembly&nbsp;\\&nbsp;IfcElementAssembly.RIGID_FRAME\">RIGID_FRAME</a></p><p class=uniclass><a class=uniclass target=\"_blank\" href=\"https://uniclass.thenbs.com/taxon/ss_37_17_35\" title=\"Gantry systems\">Ss_37_17_35</a></p>\n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
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
        "pos_x": 1270,
        "pos_y": 3830
      },
      "111": {
        "id": 111,
        "name": "IN-STR-SUP-MAST",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-STR-SUP-MAST (111)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Tower / Mast Structure System <p class=ifc><a class=ifc target=\"_blank\" href=\"https://search.bsdd.buildingsmart.org/uri/buildingsmart/ifc/4.3/class/IfcElementAssemblyMAST\" title=\"IfcRoot&nbsp;\\&nbsp;IfcObjectDefinition&nbsp;\\&nbsp;IfcObject&nbsp;\\&nbsp;IfcProduct&nbsp;\\&nbsp;IfcElement&nbsp;\\&nbsp;IfcElementAssembly&nbsp;\\&nbsp;IfcElementAssembly.MAST\">MAST</a></p><p class=uniclass><a class=uniclass target=\"_blank\" href=\"https://uniclass.thenbs.com/taxon/ef_37_17_50\" title=\"Masts\">EF_37_17_50</a></p> \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1":{"connections":[{"node":"106","input":"output_1"}]},
          "input_2":{"connections":[{"node":"123","input":"output_1"}]}
        },          
        "outputs": {
          "output_1": {"connections":[]},
          "output_2" : {"connections":[]}
        },
        "pos_x": 910,
        "pos_y": 4010
      },
      "112": {
        "id": 112,
        "name": "IN-STR-SUP-POST",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-STR-SUP-POST (112)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Column / Post System <p class=ifc><a class=ifc target=\"_blank\" href=\"https://search.bsdd.buildingsmart.org/uri/buildingsmart/ifc/4.3/class/IfcColumn\" title=ifcRoot&nbsp;\\&nbsp;ifcObjectDefinition&nbsp;\\&nbsp;ifcObject&nbsp;\\&nbsp;ifcProduct&nbsp;\\&nbsp;ifcElement&nbsp;\\&nbsp;ifcBuiltElement&nbsp;\\&nbsp;ifcColumn>ifcColumn</a></p><p class=uniclass><a class=uniclass target=\"_blank\" href=\"https://uniclass.thenbs.com/taxon/pr_20_85_16\" title=\"Columns and column accessories\">Pr_20_85_16</a></p> \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
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
        "pos_x": 1270,
        "pos_y": 3610
      },
      "113": {
        "id": 113,
        "name": "IN-STR-SUP-CMS",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-STR-SUP-CMS (113)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Cable Management System  <p class=uniclass><a class=uniclass target=\"_blank\" href=\"https://uniclass.thenbs.com/taxon/ef_70_30_10\" title=\"Cable Management\">EF_70_30_10</a></p>\n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
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
          "input_2":{"connections":[{"node":"12","input":"output_2"},
                                    {"node":"86","input":"output_2"}]}
        },          
        "outputs": {
          "output_1":{"connections":[]},
          "output_2":{"connections":[]}
        },
        "pos_x": 1270,
        "pos_y": 4000
      },
      "114": {
        "id": 114,
        "name": "IN-STR-IS-BND",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-STR-IS-BND (114)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Boundary Protection System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
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
          },"output_2":{"connections":[{"node":"28","output":"input_2"}]}
        },
        "pos_x": 890,
        "pos_y": 4410
      },
      "115": {
        "id": 115,
        "name": "IN-STR-IS-BRG",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-STR-IS-BRG (115)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Bridge System  <p class=ifc><a class=ifc target=\"_blank\" href=\"https://search.bsdd.buildingsmart.org/uri/buildingsmart/ifc/4.3/class/IfcBridge\" title=\"ifcRoot&nbsp;\\&nbsp;ifcObjectDefinition&nbsp;\\&nbsp;ifcObject&nbsp;\\&nbsp;ifcProduct&nbsp;\\&nbsp;IfcSpatialElement&nbsp;\\&nbsp;IfcSpatialStructureElement&nbsp;\\&nbsp;ifcFacility&nbsp;\\&nbsp;ifcBridge\">ifcBridge</a></p><p class=uniclass><a class=uniclass target=\"_blank\" href=\"https://uniclass.thenbs.com/taxon/ef_20_50\" title=\"Bridge structures\">EF_20_50</a></p>\n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
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
          "input_2":{"connections":[{"node":"69","input":"output_2"},
                                    {"node":"101","input":"output_2"}]}
        },          
        "outputs": {
          "output_1": {
            "connections": [{}]
          }
        },
        "pos_x": 1190,
        "pos_y": 4410
      },
      "116": {
        "id": 116,
        "name": "IN-STR-IS-LVL",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-STR-IS-LVL (116)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Level Crossing System <p class=uniclass><a class=uniclass target=\"_blank\" href=\"https://uniclass.thenbs.com/taxon/ss_80_70_46\" title=\"Level crossing systems\">Ss_80_70_46</a></p> \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
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
          "input_2":{"connections":[{"node":"13","input":"output_2"}]}
        },          
        "outputs": {
          "output_1": {
            "connections": [{}]
          }
        },
        "pos_x": 2130,
        "pos_y": 4410
      },
      "117": {
        "id": 117,
        "name": "IN-STR-IS-RW",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-STR-IS-RW (117)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Retaining Wall System <p class=ifc><a class=ifc target=\"_blank\" href=\"https://search.bsdd.buildingsmart.org/uri/buildingsmart/ifc/4.3/class/IfcWallRETAININGWALL\" title=\"ifcRoot&nbsp;\\&nbsp;ifcObjectDefinition&nbsp;\\&nbsp;ifcObject&nbsp;\\&nbsp;ifcProduct&nbsp;\\&nbsp;IfcElement&nbsp;\\&nbsp;ifcBuiltElement&nbsp;\\&nbsp;ifcWall.RETAININGWALL\">ifcWall.RETAININGWALL</a><p class=uniclass><a class=uniclass target=\"_blank\" href=\"https://uniclass.thenbs.com/taxon/ss_20_60\" title=\"Retaining wall systems\">Ss_20_60</a></p>\n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
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
          "input_2":{"connections":[{"node":"101","input":"output_2"}]}
        },          
        "outputs": {
          "output_1": {
            "connections": [{}]
          }
        },
        "pos_x": 1500,
        "pos_y": 4410
      },
      "118": {
        "id": 118,
        "name": "IN-STR-IS-TUN",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-STR-IS-TUN (118)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Tunnel System  <p class=ifc><a class=ifc target=\"_blank\" href=\"https://search.bsdd.buildingsmart.org/uri/buildingsmart/ifc/4.3/class/IfcFacility\" title=\"IfcRoot&nbsp;\\&nbsp;IfcObjectDefinition&nbsp;\\&nbsp;IfcOject&nbsp;\\&nbsp;IfcProduct&nbsp;\\&nbsp;IfcSpatialElement&nbsp;\\&nbsp;IfcSpatialStructureElement&nbsp;\\&nbsp;IfcFacility\">IfcFacility</a></p><p class=uniclass><a class=uniclass target=\"_blank\" href=\"https://uniclass.thenbs.com/taxon/ef_37_50\" title=\"Tunnels and Shafts\">EF_37_50</a></p>\n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
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
          "input_2":{"connections":[{"node":"20","input":"output_2"}]}
        },          
        "outputs": {
          "output_1": {
            "connections": [{}]
          }
        },
        "pos_x": 1810,
        "pos_y": 4410
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
        "html": "\n <div>\n <div class=\"title-box-darkblue\"><i class=\"fas fa-code-branch\"></i> IN-TEL-NET (120)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Telecomms Network System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
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
          },"input_2":{"connections":[{"node":"83","input":"output_2"}]}
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
        "html": "\n<div>\n<div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i>IN-CM-MO-OC (12)</div>\n<div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\">\n Occupancy Monitoring System  <p class=uniclass><a class=uniclass target=\"_blank\" href=\"https://uniclass.thenbs.com/taxon/pr_75_50_76_58\" title=\"Occupancy detectors\">Pr_75_50_76_58</a></p> \n<div class=\"modal\" style=\"display:none\">\n<div class=\"modal-content\">\n<span class=\"close\" onclick=\"closemodal(event)\">&times;</span></div>\n</div>\n</div>\n</div>\n",
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
        "pos_y": 380
      },
      "123": {
        "id": 123,
        "name": "IN-TEL-NET-W",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-TEL-NET-W (123)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Wireless Communications Network System  <p class=ifc><a class=ifc target=\"_blank\" href=\"https://search.bsdd.buildingsmart.org/uri/buildingsmart/ifc/4.3/class/IfcDistributionPortWIRELESS\" title=\"IfcRoot&nbsp;\\&nbsp;IfcObjectDefinition&nbsp;\\&nbsp;IfcObject&nbsp;\\&nbsp;IfcProduct&nbsp;\\&nbsp;IfcPort&nbsp;\\&nbsp;IfcDistributionPort&nbsp;\\&nbsp;IfcDistributionPort.WIRELESS\">WIRELESS</a></p>   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
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
          },
          "output_2":{"connections":[{"node":"14","output":"input_2"}]}
        },
        "pos_x": -2180,
        "pos_y": 1020
      },
      "125": {
        "id": 125,
        "name": "IN-CM-MO-WT",
        "data": {},
        "class": "SCH",
        "html": "\n<div>\n<div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i>IN-CM-MO-WT (11)</div>\n<div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\">\n Weather/Temperature Monitoring System <p class=uniclass><a class=uniclass target=\"_blank\" href=\"https://uniclass.thenbs.com/taxon/ss_75_60_50_95\" title=\"Weather observation systems\">Ss_75_60_50_95</a></p>  \n<div class=\"modal\" style=\"display:none\">\n<div class=\"modal-content\">\n<span class=\"close\" onclick=\"closemodal(event)\">&times;</span></div>\n</div>\n</div>\n</div>\n",
        "typenode": false,
        "inputs": {
          "input_1": {
            "connections": []
          },"input_2":{"connections":[{"node":"92","input":"output_2"}]}
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
        "html": "\n<div>\n<div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i>IN-CM-MO-AC (10)</div>\n<div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\">\n Asset/System Condition Monitoring System  <p class=uniclass> <a class=uniclass target=\"_blank\" href=\"https://uniclass.thenbs.com/taxon/ss_70_20_70_58\" title=\"Online condition monitoring systems\">Ss_70_20_70_58</a> </p>  \n<div class=\"modal\" style=\"display:none\">\n<div class=\"modal-content\">\n<span class=\"close\" onclick=\"closemodal(event)\">&times;</span></div>\n</div>\n</div>\n</div>\n",
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
        "html": "\n<div>\n<div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i>IN-CM-CA-TV (5)</div>\n<div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\">\nCCTV System  <p class=uniclass><a class=uniclass target=\"_blank\" href=\"https://uniclass.thenbs.com/taxon/ss_75_40_53_86\" title=\"Surveillance CCTV systems\">Ss_75_40_53_86</a></p> \n<div class=\"modal\" style=\"display:none\">\n<div class=\"modal-content\">\n<span class=\"close\" onclick=\"closemodal(event)\">&times;</span></div>\n</div>\n</div>\n</div>\n",
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
        "html": "\n<div>\n<div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i>IN-CM-CA-VI (6)</div>\n<div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\">\n Automatic Vehicle Inspection System <p class=uniclass><a class=uniclass target=\"_blank\" href=\"https://uniclass.thenbs.com/taxon/ac_80_45_95\" title=\"Vehicle inspecting\">Ac_80_45_95</a></p> \n<div class=\"modal\" style=\"display:none\">\n<div class=\"modal-content\">\n<span class=\"close\" onclick=\"closemodal(event)\">&times;</span></div>\n</div>\n</div>\n</div>\n",
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
        "pos_x": -2660,
        "pos_y": -220
      },
      "131": {
        "id": 131,
        "name": "IN-CM-CA-NP",
        "data": {},
        "class": "SCH",
        "html": "\n<div>\n<div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i>IN-CM-CA-NP (7)</div>\n<div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\">\n Automatic Number Plate Recognition (ANPR) System <p class=uniclass><a class=uniclass target=\"_blank\" href=\"https://uniclass.thenbs.com/taxon/ss_75_70_90_05\" title=\"Automatic number plate recognition (ANPR) systems\">Ss_75_70_90_05</a></p>\n<div class=\"modal\" style=\"display:none\">\n<div class=\"modal-content\">\n<span class=\"close\" onclick=\"closemodal(event)\">&times;</span></div>\n</div>\n</div>\n</div>\n",
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
        "pos_y": -30
      },
      "132": {
        "id": 132,
        "name": "IN-CM-CT-SC",
        "data": {},
        "class": "SCH",
        "html": "\n<div>\n<div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i>IN-CM-CT-SC (13)</div>\n<div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\">\n Supervisory Control And Data Acquisition (SCADA) <p class=uniclass> <a class=uniclass target=\"_blank\" href=\"https://uniclass.thenbs.com/taxon/ss_75_70_54_75\" title=\"Supervisory control and data acquisition (SCADA)\">Ss_75_70_54_75</a></p> \n<div class=\"modal\" style=\"display:none\">\n<div class=\"modal-content\">\n<span class=\"close\" onclick=\"closemodal(event)\">&times;</span></div>\n</div>\n</div>\n</div>\n",
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
          },"output_2":{"connections":[{"node":"21","output":"input_2"}]}
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
        "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-TEL-NET-F-BLD (10)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Building Telephone System  <p class=ifc><a class=uniclass target=\"_black\" href=\"https://search.bsdd.buildingsmart.org/uri/buildingsmart/ifc/4.3/class/IfcAudioVisualApplianceTELEPHONE\" title=\"IfcRoot&nbsp;\\&nbsp;IfcObjectDefinition&nbsp;\\&nbsp;IfcObject&nbsp;\\&nbsp;IfcProduct&nbsp;\\&nbsp;IfcElement&nbsp;\\&nbsp;IfcDistributionElement&nbsp;\\&nbsp;IfcDistributionFlowElement&nbsp;\\&nbsp;IfcFlowTerminal&nbsp;\\&nbsp;IfcAudioVisualAppliance&nbsp;\\&nbsp;IfcAudioVisualAppliance.TELEPHONE\">TELEPHONE</a></p>  <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
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
        "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-TEL-NET-F-LT (9)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Lineside Telephone System  <p class=ifc><a class=ifc target=\"_blank\" href=\"https://search.bsdd.buildingsmart.org/uri/buildingsmart/ifc/4.3/class/IfcAudioVisualApplianceTELEPHONE\" title=\"IfcRoot&nbsp;\\&nbsp;IfcObjectDefinition&nbsp;\\&nbsp;IfcObject&nbsp;\\&nbsp;IfcProduct&nbsp;\\&nbsp;IfcElement&nbsp;\\&nbsp;IfcDistributionElement&nbsp;\\&nbsp;IfcDistributionFlowElement&nbsp;\\&nbsp;IfcFlowTerminal&nbsp;\\&nbsp;IfcAudioVisualAppliance&nbsp;\\&nbsp;IfcAudioVisualAppliance.TELEPHONE\">TELEPHONE</a></p>  <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
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
        "pos_x": -2650,
        "pos_y": 1130
      },
      "139": {
        "id": 139,
        "name": "IN-STR-IS-PLF",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-STR-IS-PLF (139)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Platform System <p class=ifc><a class=ifc target=\"_blank\" href=\"https://search.bsdd.buildingsmart.org/uri/buildingsmart/ifc/4.3/class/IfcElementAssemblyDECK\" title=\"IfcRoot&nbsp;\\&nbsp;IfcObjectDefinition&nbsp;\\&nbsp;IfcObject&nbsp;\\&nbsp;IfcProduct&nbsp;\\&nbsp;IfcElement&nbsp;\\&nbsp;IfcElementAssembly&nbsp;\\&nbsp;IfcElementAssembly.DECK\">DECK</a></p><p class=uniclass><a class=uniclass target=\"_blank\" href=\"https://uniclass.thenbs.com/taxon/en_80_50_58\" title=\"Platforms\">En_80_50_58</a></p> \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
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
        "pos_x": 890,
        "pos_y": 4650
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
        "pos_x": 1310,
        "pos_y": 2870
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
        "pos_x": 590,
        "pos_y": 3070
      },
      "142": {
        "id": 142,
        "name": "IN-ENV-ECO-BIO",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-ENV-ECO-BIO (7)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Biodiversity Net Gain System  <p class=uniclass><a class=uniclass target=\"_blank\"  href=\"https://uniclass.thenbs.com/taxon/ss_45_35_08\" title=\"Biodiversity and environmental conservation systems\">Ss_45_35_08</a></p>   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
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
        "pos_x": 950,
        "pos_y": 2950
      },
      "143": {
        "id": 143,
        "name": "IN-ENV-ECO-HC",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-ENV-ECO-HC (8)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Habitat Connectivity System  <p class=uniclass><a class=uniclass target=\"_blank\" href=\"https://uniclass.thenbs.com/taxon/pm_35_40_34\" title=\"Habitat creation and protection requirements\">PM_35_40_34</a></p>   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
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
        "pos_x": 940,
        "pos_y": 3070
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
        "pos_x": 950,
        "pos_y": 3180
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
        "pos_x": 590,
        "pos_y": 2940
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
        "pos_x": 590,
        "pos_y": 3190
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
          "input_2":{"connections":[{"node":"16","input":"output_2"}]}
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
        "pos_x": 590,
        "pos_y": 3320
      },
      "148": {
        "id": 148,
        "name": "IN-CM-CT-BM",
        "data": {},
        "class": "SCH",
        "html": "\n<div>\n<div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i>IN-CM-CT-BM (14)</div>\n<div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\">\n Building Management System (BMS) <p class=uniclass> <a class=uniclass target=\"_blank\" href=\"https://uniclass.thenbs.com/taxon/ss_75_70_54_10\" title=\"Building monitoring and management systems\" >Ss_75_70_54_10</a> </p> \n<div class=\"modal\" style=\"display:none\">\n<div class=\"modal-content\">\n<span class=\"close\" onclick=\"closemodal(event)\">&times;</span></div>\n</div>\n</div>\n</div>\n",
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
        "html": "\n<div>\n<div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i>IN-CM-CT-EM (15)</div>\n<div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\">\n Engineering Management System (EMS) <p class=uniclass> <a class=uniclass target=\"_blank\" href=\"https://uniclass.thenbs.com/taxon/ss_75_70_52\" title=\"Mechanical engineering services control and management systems\" >Ss_75_70_52</a> </p>\n<div class=\"modal\" style=\"display:none\">\n<div class=\"modal-content\">\n<span class=\"close\" onclick=\"closemodal(event)\">&times;</span></div>\n</div>\n</div>\n</div>\n",
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
        "html": "\n<div>\n<div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i>IN-CM-CT-ME (17)</div>\n<div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\">\n Metering System (MS) <p class=uniclass><a class=uniclass target=\"_blank\" title=\"Metering, monitoring and management systems\" href=\"https://uniclass.thenbs.com/taxon/ss_75_70_54\"  >Ss_75_70_54</a></p>\n<div class=\"modal\" style=\"display:none\">\n<div class=\"modal-content\">\n<span class=\"close\" onclick=\"closemodal(event)\">&times;</span></div>\n</div>\n</div>\n</div>\n",
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
          },"input_2":{"connections":[{"node":"79","input":"output_2"}]}
        },          
        "outputs": {
          "output_1": {
            "connections": [{"node":"153","output":"input_1"},
                            {"node":"154","output":"input_1"}]
          }
        },
        "pos_x": 200,
        "pos_y": 5000
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
          "output_1": {"connections":[]},
          "output_2": {"connections":[{"node":"52","output":"input_2"},
                                      {"node":"53","output":"input_2"}]}
        },
        "pos_x": 584,
        "pos_y": 4920
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
        "pos_y": 5090
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
        "pos_x": 750,
        "pos_y": -810
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
        "pos_y": -810
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
        "pos_x": 2130,
        "pos_y": -1060
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
        "pos_x": 1810,
        "pos_y": -1060
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
        "pos_x": 1500,
        "pos_y": -1070
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
        "pos_x": 1510,
        "pos_y": -1200
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
        "pos_x": 1820,
        "pos_y": -1190
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
        "pos_x": 2140,
        "pos_y": -1190
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
        "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-BLD-URS-AT (24)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Active Travel System  <p class=uniclass><a class=uniclass target=\"_blank\" href=\"https://uniclass.thenbs.com/taxon/en_80_40_02\" title=\"Active travel networks\" >En_80_40_02</a></p>\n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
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
        "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-BLD-URS-SF (169)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Street Furniture System  <br><p class=uniclass><a nohref title=\"Furnishings\">Pr_40_50</a></p>\n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
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
        "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-BLD-URS-WF (26)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Way Finding &amp; Signage System  <p class=uniclass><a class=uniclass target=\"_blank\" href=\"https://uniclass.thenbs.com/taxon/ss_40_10\" title=\"Wayfinding signage systems\">Ss_40_10_20_96</a></p>\n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
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
        "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-BLD-URS-FA (27)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Facilities / Amenity System  \n  <p class=uniclass><a class=uniclass href=\"https://uniclass.thenbs.com/taxon/en_40_05_68\" target=\"_blank\" title=\"Public amenities\">En_40_05_68</a></p> <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
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
        "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-BLD-URS-LI (29)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Lighting System <p class=uniclass><a class=uniclass target=\"_blank\" href=\"https://uniclass.thenbs.com/taxon/ef_70_80\" title=\"Lighting\">EF_70_80</a></p> \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
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
        "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-BLD-URS-PA (30)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Public Art System  <p class=uniclass><a class=uniclass target=\"_blank\" href=\"https://uniclass.thenbs.com/taxon/pr_40_50_05\" title=\"Artworks\">Pr_40_50_05</a></p>\n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
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
        "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-BLD-URS-AI (23)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Accesibility &amp; Inclusivity System <p class=uniclass><a class=uniclass target=\"_blank\" href=\"https://uniclass.thenbs.com/taxon/ss_80_50_02\" title=\"Accessibility lifts and platform systems\">Ss_80_50_02</a></p> \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
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
        "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-BLD-URS-VH (31)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Vehicular Interface System  <p class=ifc><a class=ifc target=\"_blank\" href=\"https://search.bsdd.buildingsmart.org/uri/buildingsmart/ifc/4.3/class/IfcDistributionPort\" title=ifcRoot&nbsp;\\&nbsp;ifcObjectDefinition&nbsp;\\&nbsp;ifcObject&nbsp;\\&nbsp;ifcProduct&nbsp;\\&nbsp;ifcPort&nbsp;\\&nbsp;ifcDistributionPort>ifcDistributionPort</a></p>\n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
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