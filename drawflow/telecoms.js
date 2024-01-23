var telecoms = {
    "data": {
        "1": {
          "id": 1,
          "name": "IN-TEL",
          "data": {},
          "class": "SCH",
          "html": "\n <div>\n <div class=\"title-box-orange\"><i class=\"fas fa-code-branch\"></i> IN-TEL (1)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Telecommunications System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
          "typenode": false,
          "inputs": {"input_1":{"connections":[]},
        "input_2":{"connections":[{"node":"13","input":"output_2"}]}},          
          "outputs": {
            "output_1": {
              "connections": [
                {
                  "node":"2",
                  "output":"input_1"
                }
              ]
            },
            "output_2":{
              "connections":[]
            }
          },
          "pos_x": 100,
          "pos_y": 150
        },
        "2": {
          "id": 2,
          "name": "IN-TEL-NET",
          "data": {},
          "class": "SCH",
          "html": "\n <div>\n <div class=\"title-box-darkblue\"><i class=\"fas fa-code-branch\"></i> IN-TEL-NET (2)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Telecomms Network System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
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
              "connections":[{"node":"12","input":"output_2"}]
            }
          },          
          "outputs": {
            "output_1": {
              "connections": [
                {
                  "node":"3",
                  "output":"input_1"
                },
                {
                  "node":"4",
                  "output":"input_1"
                }
              ]
            },
            "output_2":{
              "connections":[]
            }
          },
          "pos_x": 550,
          "pos_y": 150
        },
        "3": {
          "id": 3,
          "name": "IN-TEL-NET-W",
          "data": {},
          "class": "SCH",
          "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-TEL-NET-W (123)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Wireless Communications Network System  <p class=ifc><a class=ifc target=\"_blank\" href=\"https://search.bsdd.buildingsmart.org/uri/buildingsmart/ifc/4.3/class/IfcDistributionPortWIRELESS\" title=\"IfcRoot&nbsp;\\&nbsp;IfcObjectDefinition&nbsp;\\&nbsp;IfcObject&nbsp;\\&nbsp;IfcProduct&nbsp;\\&nbsp;IfcPort&nbsp;\\&nbsp;IfcDistributionPort&nbsp;\\&nbsp;IfcDistributionPort.WIRELESS\">WIRELESS</a></p>   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
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
                  "node":"11",
                  "input":"output_2"
                }
              ]
            }
          },          
          "outputs": {
            "output_1": {
              "connections": [{"node":"5", "output":"input_1" },
                              {"node":"6", "output":"input_1" },
                              {"node":"7", "output":"input_1" },
                              {"node":"8", "output":"input_1" }
              ]
            },
            "output_2":{
              "connections":[ ]
            }
          },
          "pos_x": 1080,
          "pos_y": 425
        },
        "4": {
          "id": 4,
          "name": "IN-TEL-NET-F",
          "data": {},
          "class": "SCH",
          "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-TEL-NET-F (124)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Fixed Communications Network System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
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
              "connections":[{"node":"11", "input":"output_2" }]
            }
          },          
          "outputs": {            
            "output_1":{
            "connections":[{"node":"9", "output":"input_1"},
                           {"node":"10","output":"input_1"}]
          },
            "output_2":{
            "connections":[]
          }
        },
          "pos_x": 1090,
          "pos_y": -55
        },
        "5": {
          "id": 5,
          "name": "IN-TEL-NET-W-5G",
          "data": {},
          "class": "SCH",
          "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-TEL-NET-W-5G (5)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  5G FRMCS Radio System (After 2030) \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
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
          "outputs": {            
            "output_1":{
            "connections":[]
          },
            "output_2":{
            "connections":[]
          }
        },
          "pos_x": 1550,
          "pos_y": 550
        },
        "6": {
          "id": 6,
          "name": "IN-TEL-NET-W-GSMR",
          "data": {},
          "class": "SCH",
          "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-TEL-NET-W-GSMR (6)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  GSMR-R System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
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
          "outputs": {            
            "output_1":{
            "connections":[]
          },
            "output_2":{
            "connections":[]
          }
        },
          "pos_x": 1550,
          "pos_y": 440
        },
        "7": {
          "id": 7,
          "name": "IN-TEL-NET-W-WF",
          "data": {},
          "class": "SCH",
          "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-TEL-NET-W-WF (7)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  WiFi System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
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
          "outputs": {            
            "output_1":{
            "connections":[]
          },
            "output_2":{
            "connections":[]
          }
        },
          "pos_x": 1550,
          "pos_y": 300
        },
        "8": {
          "id": 8,
          "name": "IN-TEL-NET-W-BT",
          "data": {},
          "class": "SCH",
          "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-TEL-NET-W-BT (7)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Bluetooth System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
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
          "outputs": {            
            "output_1":{
            "connections":[]
          },
            "output_2":{
            "connections":[]
          }
        },
          "pos_x": 1550,
          "pos_y": 190
        },
        "9": {
          "id": 9,
          "name": "IN-TEL-NET-F-LT",
          "data": {},
          "class": "SCH",
          "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-TEL-NET-F-LT (9)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Lineside Telephone System  <p class=ifc><a class=ifc target=\"_blank\" href=\"https://search.bsdd.buildingsmart.org/uri/buildingsmart/ifc/4.3/class/IfcAudioVisualApplianceTELEPHONE\" title=\"IfcRoot&nbsp;\\&nbsp;IfcObjectDefinition&nbsp;\\&nbsp;IfcObject&nbsp;\\&nbsp;IfcProduct&nbsp;\\&nbsp;IfcElement&nbsp;\\&nbsp;IfcDistributionElement&nbsp;\\&nbsp;IfcDistributionFlowElement&nbsp;\\&nbsp;IfcFlowTerminal&nbsp;\\&nbsp;IfcAudioVisualAppliance&nbsp;\\&nbsp;IfcAudioVisualAppliance.TELEPHONE\">TELEPHONE</a></p>  <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
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
            "output_1":{
            "connections":[]
          },
            "output_2":{
            "connections":[]
          }
        },
          "pos_x": 1550,
          "pos_y": 20
        },
        "10": {
          "id": 10,
          "name": "IN-TEL-NET-F-BLD",
          "data": {},
          "class": "SCH",
          "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-TEL-NET-F-BLD (10)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Building Telephone System  <p class=ifc><a class=ifc target=\"_black\" href=\"https://search.bsdd.buildingsmart.org/uri/buildingsmart/ifc/4.3/class/IfcAudioVisualApplianceTELEPHONE\" title=\"IfcRoot&nbsp;\\&nbsp;IfcObjectDefinition&nbsp;\\&nbsp;IfcObject&nbsp;\\&nbsp;IfcProduct&nbsp;\\&nbsp;IfcElement&nbsp;\\&nbsp;IfcDistributionElement&nbsp;\\&nbsp;IfcDistributionFlowElement&nbsp;\\&nbsp;IfcFlowTerminal&nbsp;\\&nbsp;IfcAudioVisualAppliance&nbsp;\\&nbsp;IfcAudioVisualAppliance.TELEPHONE\">TELEPHONE</a></p>  <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
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
            "output_1":{
            "connections":[]
          },
            "output_2":{
            "connections":[]
          }
        },
          "pos_x": 1550,
          "pos_y": -150
        },
        "11": {
          "id": 11,
          "name": "IN-CCS-TCS",
          "data": {},
          "class": "SCH",
          "html": "\n <div>\n <div class=\"title-box\"><i class=\"fas fa-code-branch\"></i> IN-CCS-TCS (11)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  ETCS System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n",
          "typenode": false,
          "inputs": {},          
          "outputs": {
            "output_1": {
              "connections": []
            },
            "output_2":{"connections":
            [
              {
                "node":"3",
                "output":"input_2"
              },
              {
                "node":"4",
                "output":"input_2"
              }
            ]}
          },
          "pos_x": -320,
          "pos_y": 670
        },
        "12": {
          "id": 12,
          "name": "IN-EXT-3RD-TEL",
          "data": {},
          "class": "SCH",
          "html": "\n <div>\n <div class=\"title-box\"><i class=\"fas fa-code-branch\"></i> IN-EXT-3RD-TEL (12)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Telecoms Infrastructure Network \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
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
          "pos_x": -320,
          "pos_y": 500
        },
        "13": {
          "id": 13,
          "name": "IN-BLD-ANC-LOC",
          "data": {},
          "class": "SCH",
          "html": "\n <div>\n <div class=\"title-box\"><i class=\"fas fa-code-branch\"></i> IN-BLD-ANC-LOC (13)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  LOC / Cabinet System \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
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
          "pos_x": -320,
          "pos_y": 150
        }
    }
}