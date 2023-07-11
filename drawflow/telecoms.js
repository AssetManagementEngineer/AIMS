var telecoms = {
    "data": {
        "119": {
          "id": 119,
          "name": "IN-TEL",
          "data": {},
          "class": "SCH",
          "html": "\n <div>\n <div class=\"title-box-orange\"><i class=\"fas fa-code-branch\"></i> IN-TEL (119)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Telecommunications System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
          "typenode": false,
          "inputs": {},          
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
            },
            "output_2":{
              "connections":[]
            }
          },
          "pos_x": 100,
          "pos_y": 153
        },
        "120": {
          "id": 120,
          "name": "IN-TEL-CORP",
          "data": {},
          "class": "SCH",
          "html": "\n <div>\n <div class=\"title-box-darkblue\"><i class=\"fas fa-code-branch\"></i> IN-TEL-CORP (120)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Corporate Telecomms Network System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
          "typenode": false,
          "inputs": {
            "input_1": {
              "connections": [
                 {
                  "node": "119",
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
                  "node":"123",
                  "output":"input_1"
                },
                {
                  "node":"124",
                  "output":"input_1"
                }
              ]
            },
            "output_2":{
              "connections":[]
            }
          },
          "pos_x": 551,
          "pos_y": 153
        },
        "121": {
          "id": 121,
          "name": "IN-TEL-CUST",
          "data": {},
          "class": "SCH",
          "html": "\n <div>\n <div class=\"title-box-darkblue\"><i class=\"fas fa-code-branch\"></i> IN-TEL-CUST (121)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Customer Telecomms Network System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
          "typenode": false,
          "inputs": {
            "input_1": {
              "connections": [
                 {
                  "node": "119",
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
                  "node":"125",
                  "output":"input_1"
                },
                {
                  "node":"126",
                  "output":"input_1"
                }
              ]
            },
            "output_2":{
              "connections":[]
            }
          },
          "pos_x": 551,
          "pos_y": 293
        },
        "122": {
          "id": 122,
          "name": "IN-TEL-STN",
          "data": {},
          "class": "SCH",
          "html": "\n <div>\n <div class=\"title-box-darkblue\"><i class=\"fas fa-code-branch\"></i> IN-TEL-STN (122)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Station Telecomms Network System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
          "typenode": false,
          "inputs": {
            "input_1": {
              "connections": [
                 {
                  "node": "119",
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
                  "node":"127",
                  "output":"input_1"
                },
                {
                  "node":"128",
                  "output":"input_1"
                }
              ]
            },
            "output_2":{
              "connections":[]
            }
          },
          "pos_x": 551,
          "pos_y": 433
        },
        "123": {
          "id": 123,
          "name": "IN-TEL-CORP-W",
          "data": {},
          "class": "SCH",
          "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-TEL-CORP-W (123)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Wireless Communications Network System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
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
              "connections":[]
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
            },
            "output_2":{
              "connections":[]
            }
          },
          "pos_x": 1080,
          "pos_y": 425
        },
        "124": {
          "id": 124,
          "name": "IN-TEL-CORP-F",
          "data": {},
          "class": "SCH",
          "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-TEL-CORP-F (124)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Fixed Communications Network System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
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
          "pos_x": 1087,
          "pos_y": -55
        },
        "125": {
          "id": 125,
          "name": "IN-TEL-CUST-W",
          "data": {},
          "class": "SCH",
          "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-TEL-CUST-W (125)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Wireless Communications Network System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
          "typenode": false,
          "inputs": {
            "input_1": {
              "connections": [
                 {
                  "node": "121",
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
                  "node":"131",
                  "output":"input_1"
                },
                {
                  "node":"132",
                  "output":"input_1"
                }
              ]
            },
            "output_2":{
              "connections":[]
            }
          },
          "pos_x": 1079,
          "pos_y": 549
        },
        "126": {
          "id": 126,
          "name": "IN-TEL-CUST-F",
          "data": {},
          "class": "SCH",
          "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-TEL-CUST-F (126)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Fixed Communications Network System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
          "typenode": false,
          "inputs": {
            "input_1": {
              "connections": [
                 {
                  "node": "121",
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
          "pos_x": 1083,
          "pos_y": 72
        },
        "127": {
          "id": 127,
          "name": "IN-TEL-STN-W",
          "data": {},
          "class": "SCH",
          "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-TEL-STN-W (127)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Wireless Communications Network System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
          "typenode": false,
          "inputs": {
            "input_1": {
              "connections": [
                 {
                  "node": "122",
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
                  "node":"129",
                  "output":"input_1"
                },
                {
                  "node":"130",
                  "output":"input_1"
                }
              ]
            },
            "output_2":{
              "connections":[]
            }
          },
          "pos_x": 1081,
          "pos_y": 667
        },
        "128": {
          "id": 128,
          "name": "IN-TEL-STN-F",
          "data": {},
          "class": "SCH",
          "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-TEL-STN-F (128)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Fixed Communications Network System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
          "typenode": false,
          "inputs": {
            "input_1": {
              "connections": [
                 {
                  "node": "122",
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
          "pos_x": 1083,
          "pos_y": 196
        },
        "129": {
          "id": 129,
          "name": "IN-TEL-STN-W-5G",
          "data": {},
          "class": "SCH",
          "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-TEL-STN-W-5G (129)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  5G FRMCS Radio System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
          "typenode": false,
          "inputs": {
            "input_1": {
              "connections": [
                 {
                  "node": "127",
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
          "pos_x": 1659,
          "pos_y": 854
        },
        "130": {
          "id": 130,
          "name": "IN-TEL-STN-W-GSMR",
          "data": {},
          "class": "SCH",
          "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-TEL-STN-W-GSMR (130)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  GSMR-R System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
          "typenode": false,
          "inputs": {
            "input_1": {
              "connections": [
                 {
                  "node": "127",
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
          "pos_x": 1661,
          "pos_y": 453
        },
        "131": {
          "id": 131,
          "name": "IN-TEL-CUST-W-5G",
          "data": {},
          "class": "SCH",
          "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-TEL-CUST-W-5G (131)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  5G FRMCS Radio System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
          "typenode": false,
          "inputs": {
            "input_1": {
              "connections": [
                 {
                  "node": "125",
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
          "pos_x": 1657,
          "pos_y": 755
        },
        "132": {
          "id": 132,
          "name": "IN-TEL-CUST-W-GSMR",
          "data": {},
          "class": "SCH",
          "html": "\n <div>\n <div class=\"title-box-lightblue\" ><i class=\"fas fa-code-branch\"></i> IN-TEL-CUST-W-GSMR (132)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  GSMR-R System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
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
            "output_1":{
            "connections":[]
          },
            "output_2":{
            "connections":[]
          }
        },
          "pos_x": 1662,
          "pos_y": 352
        },
        "133": {
          "id": 133,
          "name": "IN-TEL-CORP-W-5G",
          "data": {},
          "class": "SCH",
          "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-TEL-CORP-W-5G (133)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  5G FRMCS Radio System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
          "typenode": false,
          "inputs": {
            "input_1": {
              "connections": [
                 {
                  "node": "123",
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
          "pos_x": 1657,
          "pos_y": 651
        },
        "134": {
          "id": 134,
          "name": "IN-TEL-CORP-W-GSMR",
          "data": {},
          "class": "SCH",
          "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-TEL-CORP-W-GSMR (134)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  GSMR-R System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
          "typenode": false,
          "inputs": {
            "input_1": {
              "connections": [
                 {
                  "node": "123",
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
          "pos_x": 1661,
          "pos_y": 254
        }
    }
}