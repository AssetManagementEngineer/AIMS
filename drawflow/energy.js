var energy = {
  "data": {
    "1": {
      "id": 1,
      "name": "IN-EN",
      "data": {},
      "class": "SCH",
      "html": "\n <div>\n <div class=\"title-box-orange\"><i class=\"fas fa-code-branch\"></i> IN-EN (1)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Power / Energy System  <p class=ifc> <a class=ifc target=\"_blank\" href=\"https://search.bsdd.buildingsmart.org/uri/buildingsmart/ifc/4.3/class/IfcDistributionSystemELECTRICAL\" title=\"ifcRoot&nbsp;\\&nbsp;ifcObjectDefinition&nbsp;\\&nbsp;ifcObject&nbsp;\\&nbsp;ifcGroup&nbsp;\\&nbsp;ifcSystem&nbsp;\\&nbsp;ifcDistributionSystem&nbsp;\\&nbsp;ifcDistributionSystem.ELECTRICAL\" >ifcDistributionSystem</a></p> <p class=uniclass><a class=uniclass target=\"_blank\" href=\"https://uniclass.thenbs.com/taxon/ss_82_70_65\" title=\"Rail power supply systems\" >Ss_82_70_65</a></p>  <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
      "typenode": false,
      "inputs": {
        "input_1":{"connections":[]},
        "input_2":{"connections":[{"node":"20","input":"output_2"},
                                  {"node":"21","input":"output_2"},
                                  {"node":"22","input":"output_2"},
                                  {"node":"23","input":"output_2"},
                                  {"node":"24","input":"output_2"}]}
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
    "2": {//Non-Traction Power System
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
      "pos_x": 750,
      "pos_y": -80
    },
    "3": {//AC/DC Conversion System
      "id": 3,
      "name": "IN-EN-ACDC",
      "data": {},
      "class": "SCH",
      "html": "\n <div>\n <div class=\"title-box-darkblue\"><i class=\"fas fa-code-branch\"></i> IN-EN-ACDC (3)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  AC/DC Conversion System  <p class=ifc><a class=ifc target=\"_blank\" href=\"https://search.bsdd.buildingsmart.org/uri/buildingsmart/ifc/4.3/class/IfcTransformerINVERTER\" title=\"IfcRoot&nbsp;\\&nbsp;IfcObjectDefinition&nbsp;\\&nbsp;IfcObject&nbsp;\\&nbsp;IfcProduct&nbsp;\\&nbsp;IfcElement&nbsp;\\&nbsp;IfcDistributionElement&nbsp;\\&nbsp;IfcDistributionFlowElement&nbsp;\\&nbsp;IfcEnergyConversionDevice&nbsp;\\&nbsp;IfcTransformer\">IfcTransformer</a></p> <p class=uniclass><a class=uniclass target=\"_blank\" href=\"https://uniclass.thenbs.com/taxon/pr_65_72_43_42\" title=\"Inverters\">Pr_65_72_43_42</a></p>  <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
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
      "pos_x": 750,
      "pos_y": 30
    },
    "4": {//Earthing & Bonding System
      "id": 4,
      "name": "IN-EN-BND",
      "data": {},
      "class": "SCH",
      "html": "\n <div>\n <div class=\"title-box-darkblue\"><i class=\"fas fa-code-branch\"></i> IN-EN-BND (4)</div>\n <div class=\"box dbclickbox\" ondblclick=\"window.open('IN-EN-BND.pdf');\"> \n  Earthing &amp; Bonding System  <p class=uniclass> <a class=uniclass target=\"_blank\" href=\"https://uniclass.thenbs.com/taxon/ss_70_30_25_25\" title=\"Earthing and bonding systems\" >Ss_70_30_25_25</a> </p> \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
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
      "pos_x": 750,
      "pos_y": 230
    },
    "5": {//HV/LV Cable System 
      "id": 5,
      "name": "IN-EN-CBL",
      "data": {},
      "class": "SCH",
      "html": "\n <div>\n <div class=\"title-box-darkblue\"><i class=\"fas fa-code-branch\"></i> IN-EN-CBL (5)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  HV/LV Cable System <p class=ifc><a class=ifc target=\"_blank\" href=\"https://search.bsdd.buildingsmart.org/uri/buildingsmart/ifc/4.3/class/IfcCableSegment\" title=ifcRoot&nbsp;\\&nbsp;ifcObjectDefinition&nbsp;\\&nbsp;ifcObject&nbsp;\\&nbsp;ifcProduct&nbsp;\\&nbsp;ifcElementn&nbsp;\\&nbsp;ifcDistributionElement&nbsp;\\&nbsp;ifcDistributionFlowElement&nbsp;\\&nbsp;ifcFlowSegment&nbsp;\\&nbsp;ifcCableSegment>ifcCableSegment</a></p> <p class=uniclass> <a class=uniclass target=\"_blank\" href=\"https://uniclass.thenbs.com/taxon/ss_70_30_10\" title=\"Cable management systems\" >Ss_70_30_10</a> </p> \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
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
      "pos_x": 750,
      "pos_y": 600
    },
    "6": { //Protection/Isolation System
      "id": 6,
      "name": "IN-EN-ISO",
      "data": {},
      "class": "SCH",
      "html": "\n <div>\n <div class=\"title-box-darkblue\"><i class=\"fas fa-code-branch\"></i> IN-EN-ISO (6)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Protection/Isolation System  <p class=ifc><a class=ifc target=\"_blank\" href=\"https://search.bsdd.buildingsmart.org/uri/buildingsmart/ifc/4.3/class/IfcProtectiveDevice\" title=\"IfcRoot&nbsp;\\&nbsp;IfcObjectDefinition&nbsp;\\&nbsp;IfcObject&nbsp;\\&nbsp;IfcElement&nbsp;\\&nbsp;IfcProduct&nbsp;\\&nbsp;IfcElement&nbsp;\\&nbsp;IfcDistributionElement&nbsp;\\&nbsp;IfcDistributionFlowElement&nbsp;\\&nbsp;IfcFlowController&nbsp;\\&nbsp;IfcProtectiveDevice\">IfcProtectiveDevice</a></p> <p class=uniclass> <a class=uniclass target=\"_blank\" href=\"https://uniclass.thenbs.com/taxon/ss_70_30_25\" title=\"Electrical protection systems\" >Ss_70_30_25</a> </p>  <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
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
      "pos_x": 750,
      "pos_y": 400
    },
    "7": { //Power Storage System
      "id": 7,
      "name": "IN-EN-STO",
      "data": {},
      "class": "SCH",
      "html": "\n <div>\n <div class=\"title-box-darkblue\" ><i class=\"fas fa-code-branch\"></i> IN-EN-STO (7)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Power Storage System  <p class=ifc><a class=ifc target=\"_blank\" href=\"https://search.bsdd.buildingsmart.org/uri/buildingsmart/ifc/4.3/class/IfcElectricFlowStorageDevice\" title=\"IfcRoot&nbsp;\\&nbsp;IfcObjectDefinition&nbsp;\\&nbsp;IfcObject&nbsp;\\&nbsp;IfcProduct&nbsp;\\&nbsp;IfcElement&nbsp;\\&nbsp;IfcDistributionElement&nbsp;\\&nbsp;IfcDistributionFlowElement&nbsp;\\&nbsp;IfcFlowStorageDevice&nbsp;\\&nbsp;IfcElectricFlowStorageDevice&nbsp;\\&nbsp;IfcElectricFlowStorageDevice\" >IfcElectricFlowStorageDevice</a></p> <p class=uniclass> <a class=uniclass target=\"_blank\" href=\"https://uniclass.thenbs.com/taxon/ss_70_30_45_92\" title=\"Uninterruptible power supply systems\" >Ss_70_30_45_92</a> </p>   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> <div class=container><div class=attrHeader>Attribute</div><div class=attrHeader>Value</div><div class=attrData>Model</div><div class=attrData>Smart-UPS</div><div class=attrData>Power Rating</div><div class=attrData>600W</div><div class=attrData>VA Rating</div><div class=attrData>1000VA</div><div class=attrData>Output Voltage</div><div class=attrData>230V</div><div class=attrData>Input Voltage</div><div class=attrData>230V</div><div class=attrData>Mounting Type</div><div class=attrData>Stand Alone</div><div class=attrData>No Of Outlets</div><div class=attrData>8</div><div class=attrData>Type</div><div class=attrData>Line Interactive</div><div class=attrData>Current Rating</div><div class=attrData>4.3A</div><div class=attrData>Length</div><div class=attrData>171mm</div><div class=attrData>Width</div><div class=attrData>439mm</div><div class=attrData>Depth</div><div class=attrData>219mm</div></div><img width=100% src=\"R2010843-01.jpg\" />\n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
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
      "pos_x": 1080,
      "pos_y": -70
    },
    "8": {
      "id": 8,
      "name": "IN-EN-LV",
      "data": {},
      "class": "SCH",
      "html": "\n <div>\n <div class=\"title-box-darkblue\"><i class=\"fas fa-code-branch\"></i> IN-EN-LV (8)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  LV Distribution Power System <p class=ifc><a class=ifc target=\"_blank\" href=\"https://search.bsdd.buildingsmart.org/uri/buildingsmart/ifc/4.3/class/IfcDistributionSystemELECTRICAL\" title=\"ifcRoot&nbsp;\\&nbsp;ifcObjectDefinition&nbsp;\\&nbsp;ifcObject&nbsp;\\&nbsp;ifcGroup&nbsp;\\&nbsp;ifcSystem&nbsp;\\&nbsp;ifcDistributionSystem&nbsp;\\&nbsp;ifcDistributionSystem.ELECTRICAL\">ELECTRICAL</a></p> <p class=uniclass> <a class=uniclass target=\"_blank\" href=\"https://uniclass.thenbs.com/taxon/ss_85_50_65\" title=\"Power supply systems\" >Ss_85_50_65</a></p> \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
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
      "pos_x": 1080,
      "pos_y": 130
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
      "pos_x": 1080,
      "pos_y": 330
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
      "pos_x": 1080,
      "pos_y": 460
    },
    "11": {
      "id": 11,
      "name": "IN-EN-TRP-OLE",
      "data": {},
      "class": "SCH",
      "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-EN-TRP-OLE (11)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  OLE System <p class=ifc><a class=ifc target=\"_blank\" href=\"https://search.bsdd.buildingsmart.org/uri/buildingsmart/ifc/4.3/class/IfcDistributionSystemOVERHEADCONTACTLINESYSTEM\" title=ifcRoot&nbsp;\\&nbsp;ifcObjectDefinition&nbsp;\\&nbsp;ifcObject&nbsp;\\&nbsp;ifcGroup&nbsp;\\&nbsp;ifcSystem&nbsp;\\&nbsp;IfcDistributionSystem&nbsp;\\&nbsp;IfcDistributionSystem.OVERHEAD_CONTACTLINE_SYSTEM>OVERHEAD_CONTACTLINE...</a></p> <p class=uniclass> <a class=uniclass target=\"_blank\" href=\"https://uniclass.thenbs.com/taxon/ss_70_30_60\" title=\"Overhead line traction power distribution systems\">Ss_70_30_60</a></p> \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
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
      "pos_x": 1560,
      "pos_y": 550
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
      "pos_y": 680
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
      "pos_y": -120
    },
    "18": {
      "id": 18,
      "name": "IN-EN-LV-RP",
      "data": {},
      "class": "SCH",
      "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-EN-LV-RP (18)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Renewable Power System <p class=uniclass> <a class=uniclass target=\"_blank\" href=\"https://uniclass.thenbs.com/taxon/ef_70_10_70\" title=\"Renewable power generation\" >EF_70_10_70</a> </p> \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
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
      "pos_x": 1550,
      "pos_y": 220
    },
    "19": {
      "id": 19,
      "name": "IN-EN-NTP-VC",
      "data": {},
      "class": "SCH",
      "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-EN-NTP-VC (30)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Vehicle Charging System <p class=uniclass> <a class=uniclass target=\"_blank\" href=\"https://uniclass.thenbs.com/taxon/ss_70_30_94\" title=\"Vehicle charging systems\" >Ss_70_30_94</a> </p> \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
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
      "pos_x": 1550,
      "pos_y": 380
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
    },
    "24": {
      "id": 24,
      "name": "IN-CM-CT-SC",
      "data": {},
      "class": "SCH",
      "html": "\n<div>\n<div class=\"title-box\"><i class=\"fas fa-code-branch\"></i>IN-CM-CT-SC (24)</div>\n<div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\">\n Supervisory Control And Data Acquisition (SCADA) \n<div class=\"modal\" style=\"display:none\">\n<div class=\"modal-content\">\n<span class=\"close\" onclick=\"closemodal(event)\">&times;</span></div>\n</div>\n</div>\n</div>\n",
      "typenode": false,
      "inputs": {},          
      "outputs": {
        "output_1": {
          "connections": []
        },
        "output_2": {
          "connections": [{"node":"1","output":"input_2"}]
        }
      },
      "pos_x": -200,
      "pos_y": 540
    }
  }
}
