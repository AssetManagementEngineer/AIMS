var drainage= {
    "data": {
        "1": {
            "id": 1,
            "name": "IN-DR",
            "data": {},
            "class": "SCH",
            "html": "\n <div>\n <div class=\"title-box-orange\"><i class=\"fas fa-code-branch\"></i> IN-DR (1)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Drainage System  <p class=ifc><a class=ifc target=\"_blank\" href=\"https://search.bsdd.buildingsmart.org/uri/buildingsmart/ifc/4.3/class/IfcDistributionSystemDRAINAGE\" title=\"IfcRoot&nbsp;\\&nbsp;IfcObjectDefinition&nbsp;\\&nbsp;IfcObject&nbsp;\\&nbsp;IfcGroup&nbsp;\\&nbsp;IfcSystem&nbsp;\\&nbsp;IfcDistributionSystem.DRAINAGE\">IfcDistributionSystem</a></p> <p class=uniclass><a class=uniclass target=\"_blank\" href=\"https://uniclass.thenbs.com/taxon/ss_50_70\" title=\"Drainage storage, treatment and disposal systems\">Ss_50_70</a></p>\n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
            "typenode": false,
            "inputs": {
              "input_1":{
                "connections":[]
              },
              "input_2": {
                "connections":[
                  {
                    "node":"18",
                    "input":"output_2"
                  },
                  {
                    "node":"19",
                    "input":"output_2"
                  }
                ]
              }
            },          
            "outputs": {
              "output_1": {
                "connections": [
                  {
                    "node":"2",
                    "output":"input_1"
                  },
                  {
                    "node":"3",
                    "output":"input_1"
                  },
                  {
                    "node":"4",
                    "output":"input_1"
                  },
                  {
                    "node":"5",
                    "output":"input_1"
                  }
                ]
              },
              "output_2":{
                "connections":[]
              }
            },
            "pos_x": 100,
            "pos_y": 200
          },
          "2": {
            "id": 2,
            "name": "IN-DR-BLD",
            "data": {},
            "class": "SCH",
            "html": "\n <div>\n <div class=\"title-box-darkblue\"><i class=\"fas fa-code-branch\"></i> IN-DR-BLD (2)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Buildings &amp; Stations Drainage System <p class=ifc><a class=uniclass target=\"_blank\" href=\"https://search.bsdd.buildingsmart.org/uri/buildingsmart/ifc/4.3/class/IfcDistributionSystemDRAINAGE\" title=\"IfcRoot&nbsp;\\&nbsp;IfcObjectDefinition&nbsp;\\&nbsp;IfcObject&nbsp;\\&nbsp;IfcGroup&nbsp;\\&nbsp;IfcSystem&nbsp;\\&nbsp;IfcDistributionSystem.DRAINAGE\" ></a></p> <p class=uniclass><a class=uniclass target=\"_blank\" title=\"Drainage storage, treatment and disposal systems\" href=\"https://uniclass.thenbs.com/taxon/ss_50_70\" >Ss_50_70</a></p> \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
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
                    "node":"13",
                    "input":"output_2"
                  }
                ]
              }
            },          
            "outputs": {
              "output_1": {
                "connections": [
                  {
                    "node":"6",
                    "output":"input_1"
                  }
                ]
              },
              "output_2":{
                "connections":[]
              }
            },
            "pos_x": 520,
            "pos_y": -80
          },
          "3": {
            "id": 3,
            "name": "IN-DR-HW",
            "data": {},
            "class": "SCH",
            "html": "\n <div>\n <div class=\"title-box-darkblue\"><i class=\"fas fa-code-branch\"></i> IN-DR-HW (3)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Highway Drainage System  \n <p class=uniclass><a class=uniclass target=\"_blank\" href=\"https://uniclass.thenbs.com/taxon/ss_50_30_04\" title=\"Above-ground wastewater drainage systems\">Ss_50_30_04</a></p>  <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
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
              "input_2":{"connections":[]}
            },          
            "outputs": {
              "output_1": {
                "connections": []
              },
              "output_2":{
                "connections":[]
              }
            },
            "pos_x": 520,
            "pos_y": 100
          },
          "4": {
            "id": 4,
            "name": "IN-DR-LND",
            "data": {},
            "class": "SCH",
            "html": "\n <div>\n <div class=\"title-box-darkblue\"><i class=\"fas fa-code-branch\"></i> IN-DR-LND (4)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Land Drainage System  <p class=uniclass><a class=uniclass target=\"_blank\" href=\"https://uniclass.thenbs.com/taxon/ss_50_70_45\" title=\"Land drainage systems\">Ss_50_70_45</a></p>\n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
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
            "pos_x": 520,
            "pos_y": 260
          },
          "5": {
            "id": 5,
            "name": "IN-DR-RL",
            "data": {},
            "class": "SCH",
            "html": "\n <div>\n <div class=\"title-box-darkblue\"><i class=\"fas fa-code-branch\"></i> IN-DR-RL (5)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Railway Drainage System  <p class=ifc><a class=ifc target=\"_blank\" href=\"https://search.bsdd.buildingsmart.org/uri/buildingsmart/ifc/4.3/class/IfcDistributionSystemDRAINAGE\" title=\"IfcRoot&nbsp;\\&nbsp;IfcObjectDefinition&nbsp;\\&nbsp;IfcObject&nbsp;\\&nbsp;IfcGroup&nbsp;\\&nbsp;IfcSystem&nbsp;\\&nbsp;IfcDistributionSystem.DRAINAGE\">IfcDistributionSystem</a></p> <p class=uniclass><a class=uniclass target=\"_blank\" href=\"https://uniclass.thenbs.com/taxon/ss_50_70\" title=\"Drainage storage, treatment and disposal systems\">Ss_50_70</a></p> \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
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
                    "node":"17",
                    "input":"output_2"
                  }
                ]
              }
            },          
            "outputs": {
              "output_1": {
                "connections": [
                  {
                    "node":"10",
                    "output":"input_1"
                  },
                  {
                    "node":"11",
                    "output":"input_1"
                  },
                  {
                    "node":"12",
                    "output":"input_1"
                  }
                ]
              },
              "output_2":{
                "connections":[]
              }
            },
            "pos_x": 520,
            "pos_y": 620
          },
          "6": {
            "id": 6,
            "name": "IN-DR-PS",
            "data": {},
            "class": "SCH",
            "html": "\n <div>\n <div class=\"title-box-darkblue\"><i class=\"fas fa-code-branch\"></i> IN-DR-PS (6)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Pumping Station System <p class=uniclass> <a class=uniclass target=\"_blank\" href=\"https://uniclass.thenbs.com/taxon/ss_50_35_10_10\" title=\"Below-ground pumping station drainage systems\" ></a> </p> \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
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
                    "node":"20",
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
            "pos_x": 520,
            "pos_y": -200
          },
          "10": {
            "id": 10,
            "name": "IN-DR-RL-STR",
            "data": {},
            "class": "SCH",
            "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-DR-RL-STR (10)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Civils &amp; Structures Drainage System  <p class=ifc><a class=ifc target=\"_blank\" href=\"https://search.bsdd.buildingsmart.org/uri/buildingsmart/ifc/4.3/class/IfcDistributionSystemDRAINAGE\" title=\"IfcRoot&nbsp;\\&nbsp;IfcObjectDefinition&nbsp;\\&nbsp;IfcObject&nbsp;\\&nbsp;IfcGroup&nbsp;\\&nbsp;IfcSystem&nbsp;\\&nbsp;IfcDistributionSystem.DRAINAGE\">IfcDistributionSystem</a></p>  <p class=uniclass><a class=uniclass target=\"_blank\" href=\"https://uniclass.thenbs.com/taxon/ss_50_70\" title=\"Drainage storage, treatment and disposal systems\">Ss_50_70</a></p>\n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
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
                "connections":[
                  {
                    "node":"15",
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
            "pos_x": 920,
            "pos_y": 830
          },
          "11": {
            "id": 11,
            "name": "IN-DR-RL-EW",
            "data": {},
            "class": "SCH",
            "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-DR-RL-EW (11)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Earthworks Drainage System  <p class=ifc><a class=ifc target=\"_blank\" href=\"https://search.bsdd.buildingsmart.org/uri/buildingsmart/ifc/4.3/class/IfcDistributionSystemDRAINAGE\" title=\"IfcRoot&nbsp;\\&nbsp;IfcObjectDefinition&nbsp;\\&nbsp;IfcObject&nbsp;\\&nbsp;IfcGroup&nbsp;\\&nbsp;IfcSystem&nbsp;\\&nbsp;IfcDistributionSystem.DRAINAGE\">IfcDistributionSystem</a></p>  <p class=uniclass><a class=uniclass target=\"_blank\" href=\"https://uniclass.thenbs.com/taxon/ss_50_70\" title=\"Drainage storage, treatment and disposal systems\">Ss_50_70</a></p>\n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
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
                "connections":[
                  {
                  "node":"16",
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
            "pos_x": 920,
            "pos_y": 400
          },
          "12": {
            "id": 12,
            "name": "IN-DR-RL-TRA",
            "data": {},
            "class": "SCH",
            "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-DR-RL-TRA (12)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Track Drainage System System  <p class=ifc><a class=ifc target=\"_blank\" href=\"https://search.bsdd.buildingsmart.org/uri/buildingsmart/ifc/4.3/class/IfcDistributionSystemDRAINAGE\" title=\"IfcRoot&nbsp;\\&nbsp;IfcObjectDefinition&nbsp;\\&nbsp;IfcObject&nbsp;\\&nbsp;IfcGroup&nbsp;\\&nbsp;IfcSystem&nbsp;\\&nbsp;IfcDistributionSystem.DRAINAGE\">IfcDistributionSystem</a></p>  <p class=uniclass><a class=uniclass target=\"_blank\" href=\"https://uniclass.thenbs.com/taxon/ss_50_70\" title=\"Drainage storage, treatment and disposal systems\">Ss_50_70</a></p>\n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
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
              "input_2": {
                "connections": []
              }
            },          
            "outputs": {
              "output_1": {
                "connections": []
              }
            },
            "pos_x": 920,
            "pos_y": 610
          },
          "13": {
            "id": 13,
            "name": "IN-BLD",
            "data": {},
            "class": "SCH",
            "html": "\n <div>\n <div class=\"title-box\"><i class=\"fas fa-code-branch\"></i> IN-BLD (13)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n   Bulidings &amp; Stations System \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
            "typenode": false,
            "inputs": {},          
            "outputs": {
              "output_1": {
                "connections": [{}]
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
            "pos_x": -320,
            "pos_y": -180
          },
          "15": {
            "id": 15,
            "name": "IN-STR-IN-BRG",
            "data": {},
            "class": "SCH",
            "html": "\n <div>\n <div class=\"title-box\"><i class=\"fas fa-code-branch\"></i> IN-STR-IN-BRG (15)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Bridge System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
            "typenode": false,
            "inputs": {},          
            "outputs": {
              "output_1": {
                "connections": [{}]
              },
              "output_2":{
                "connections":[
                  {
                    "node":"10",
                    "output":"input_2"
                  }
                ]
              }
            },
            "pos_x": -320,
            "pos_y": 730
          },
          "16": {
            "id": 16,
            "name": "IN-GT-EW",
            "data": {},
            "class": "SCH",
            "html": "\n <div>\n <div class=\"title-box\"><i class=\"fas fa-code-branch\"></i> IN-GT-EW (16)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Earthwork System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
            "typenode": false,
            "inputs": {},          
            "outputs": {
              "output_1": {
                "connections": [{}]
              },
              "output_2":{
                "connections":[
                  {
                    "node":"11",
                    "output":"input_2"
                  }
                ]
              }
            },
            "pos_x": -320,
            "pos_y": 470
          },
          "17": {
            "id": 17,
            "name": "IN-STR-IN-TUN",
            "data": {},
            "class": "SCH",
            "html": "\n <div>\n <div class=\"title-box\"><i class=\"fas fa-code-branch\"></i> IN-STR-IN-TUN (17)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Tunnel System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
            "typenode": false,
            "inputs": {},          
            "outputs": {
              "output_1": {
                "connections": [{}]
              },
              "output_2":{
                "connections":[
                  {
                    "node":"5",
                    "output":"input_2"
                  }
                ]
              }
            },
            "pos_x": -330,
            "pos_y": 600
          },
          "18": {
            "id": 18,
            "name": "IN-ENV-CFS",
            "data": {},
            "class": "SCH",
            "html": "\n <div>\n <div class=\"title-box\"><i class=\"fas fa-code-branch\"></i> IN-ENV-CFS (18)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Compensatory Flood Storage System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
            "typenode": false,
            "inputs": {},          
            "outputs": {
              "output_1": {
                "connections": [{}]
              },
              "output_2": {
                "connections": [
                  {
                    "node":"1",
                    "output":"input_2"
                  }
                ]
              }
            },
            "pos_x": -320,
            "pos_y": 150
          },
          "19": {
            "id": 19,
            "name": "IN-ENV-LAN-PS",
            "data": {},
            "class": "SCH",
            "html": "\n <div>\n <div class=\"title-box\"><i class=\"fas fa-code-branch\"></i> IN-ENV-LAN-PS (19)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Planting System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
            "typenode": false,
            "inputs": {},          
            "outputs": {
              "output_1": {
                "connections": []
              },
              "output_2":{
                "connections":[
                  {
                    "node":"1",
                    "output":"input_2"
                  }
                ]
              }
            },
            "pos_x": -320,
            "pos_y": 330
          },
          "20": {
            "id": 20,
            "name": "IN-EN-NT",
            "data": {},
            "class": "SCH",
            "html": "\n <div>\n <div class=\"title-box\"><i class=\"fas fa-code-branch\"></i> IN-EN-NT (20)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Non-Traction Power System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
            "typenode": false,
            "inputs": {},          
            "outputs": {
              "output_1": {
                "connections": []
              },
              "output_2":{
                "connections":[
                  {
                    "node":"6",
                    "output":"input_2"
                  }
                ]
              }
            },
            "pos_x": -320,
            "pos_y": -290
          }
    }
}