var ccs = {
    "data": {
      "1": {
        "id": 1,
        "name": "IN-CCS",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box-orange\"><i class=\"fas fa-code-branch\"></i> IN-CCS (1)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Command, Control &amp; Signalling System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {"input_1":{"connections":[]},
      "input_2":{"connections":[{"node":"113","input":"output_2"}]}},          
        "outputs": {
          "output_1": {
            "connections": [
              {
                "node":"2",
                "output":"input_1"
              } ,
              {
                "node":"3",
                "output":"input_1"
              } ,
              {
                "node":"4",
                "output":"input_1"
              } 
            ]
          },
          "output_2":{"connections":[]}
        },
        "pos_x": 250,
        "pos_y": 700
      },
      "2": {
        "id": 2,
        "name": "IN-CCS-SIG",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box-darkblue\"><i class=\"fas fa-code-branch\"></i> IN-CCS-SIG (2)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Conventional Signalling System  <p class=uniclass><a class=uniclass target=\"_blank\" href=\"https://uniclass.thenbs.com/taxon/ss_75_30_70_70\" title=\"Rail Signal systems\">Ss_75_30_70_70</a></p> \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
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
            "connections": [
               {
                "node": "19",
                "input": "output_2"
               },
               {
                "node": "129",
                "input": "output_2"
               }
            ]
          }
        },          
        "outputs": {
          "output_1": {
            "connections": [
              {
                "node":"8",
                "output":"input_1"
              },
              {
                "node":"10",
                "output":"input_1"
              },
              {
                "node":"11",
                "output":"input_1"
              },
              {
                "node":"13",
                "output":"input_1"
              },
              {
                "node":"14",
                "output":"input_1"
              },
              {
                "node":"15",
                "output":"input_1"
              },
              {
                "node":"16",
                "output":"input_1"
              }
            ]
          },
          "output_2":{"connections":[]}
        },
        "pos_x": 747,
        "pos_y": 950
      },
      "3": {
        "id": 3,
        "name": "IN-CCS-TCS",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box-darkblue\"><i class=\"fas fa-code-branch\"></i> IN-CCS-TCS (3)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  ETCS System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n",
        "typenode": false,
        "inputs": {
          "input_1": {
            "connections": [
               {
                "node": "1",
                "input": "output_1"
               }
            ]
          },"input_2":{"connections":[
            {
              "node":"123",
              "input":"output_2"
            },
            {
              "node":"124",
              "input":"output_2"
            }
          ]}
        },          
        "outputs": {
          "output_1": {
            "connections": [
              {
                "node":"6",
                "output":"input_1"
              },
              {
                "node":"7",
                "output":"input_1"
              }
             ]
          },
          "output_2":{"connections":[]}
        },
        "pos_x": 750,
        "pos_y": 630
      },
      "4": {
        "id": 4,
        "name": "IN-CCS-TMS",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box-darkblue\"><i class=\"fas fa-code-branch\"></i> IN-CCS-TMS (4)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Traffic Management System  \n <p class=uniclass><a class=uniclass target=\"_blank\" href=\"https://uniclass.thenbs.com/taxon/ss_75_70_90_91\" title=\"Traffic management control systems\">Ss_75_70_90_91</a></p>\n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
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
            "connections": [
               {
                "node": "17",
                "input": "output_2"
               }
            ]
          }
        },          
        "outputs": {
          "output_1": {
            "connections": [
              {
                "node":"5",
                "output":"input_1"
              },
              {
                "node":"18",
                "output":"input_1"
              }
            ]
          },
          "output_2":{"connections":[]}
        },
        "pos_x": 750,
        "pos_y": 340
      },
      "5": {
        "id": 5,
        "name": "IN-CCS-TMS-ATS",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-CCS-TMS-ATS (5)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n Automatic Train Service (ATS) System <p class=uniclass><a class=uniclass target=\"_blank\" href=\"https://uniclass.thenbs.com/taxon/ss_75_30_70_04\" title=\"Automatic train stop (ATS) systems\">Ss_75_30_70_04</a></p> \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1": {
            "connections": [
               {
                "node": "4",
                "input": "output_1"
               }
            ]
          },"input_2":{"connections":[
               {
                "node": "22",
                "input": "output_2"
               }
          ]}
        },          
        "outputs": {"output_1":{"connections":[]},
                    "output_2":{"connections":[]}},
        "pos_x": 1090,
        "pos_y": 430
      },
      "6": {
        "id": 6,
        "name": "IN-CCS-TCS-OB",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-CCS-TCS-OB (6)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n ETCS Onboard System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1": {
            "connections": [
               {
                "node": "3",
                "input": "output_1"
               }
            ]
          },"input_2":{"connections":[
            {
              "node":"22",
              "input":"output_2"
            }
          ]}
        },          
        "outputs": {"output_1":{"connections":[]},
                    "output_2":{"connections":[]}},
        "pos_x": 1090,
        "pos_y": 560
      },
      "7": {
        "id": 7,
        "name": "IN-CCS-TCS-TR",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-CCS-TCS-TR (7)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n ETCS Trackside System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1": {
            "connections": [
               {
                "node": "3",
                "input": "output_1"
               }
            ]
          },"input_2":{"connections":[]}
        },          
        "outputs": {"output_1":{"connections":[]},
                    "output_2":{"connections":[]}},
        "pos_x": 1090,
        "pos_y": 690
      },
      "8": {
        "id": 8,
        "name": "IN-CCS-SIG-INT",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-CCS-SIG-INT (8)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n Interlocking System  <p class=uniclass><a class=uniclass target=\"_blank\" href=\"https://uniclass.thenbs.com/taxon/ss_75_30_70_42\" title=\"Interlocking System\" >Ss_75_30_70_42</a></p> \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1": {
            "connections": [
               {
                "node": "2",
                "input": "output_1"
               }
            ]
          },"input_2":{"connections":[]}
        },          
        "outputs": {"output_1":{"connections":[]},
                    "output_2":{"connections":[]}},
        "pos_x": 1090,
        "pos_y": 850
      },
      "10": {
        "id": 10,
        "name": "IN-CCS-SIG-POS",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-CCS-SIG-POS (10)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n Point Operating System   <p class=uniclass><a class=uniclass target=\"_blank\" href=\"https://uniclass.thenbs.com/taxon/pr_70_75_70_63\" title=\"Points operating equipment\">Pr_70_75_70_63</a></p>\n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1": {
            "connections": [
               {
                "node": "2",
                "input": "output_1"
               }
            ]
          },"input_2":{"connections":[{"node":"21","input":"output_2"}]}
        },          
        "outputs": {"output_1":{"connections":[]},
                    "output_2":{"connections":[]}},
        "pos_x": 1100,
        "pos_y": 1370
      },
      "11": {
        "id": 11,
        "name": "IN-CCS-SIG-TD",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-CCS-SIG-TD (11)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n Train Describer System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1": {
            "connections": [
               {
                "node": "2",
                "input": "output_1"
               }
            ]
          },"input_2":{"connections":[]}
        },          
        "outputs": {"output_1":{"connections":[]},
                    "output_2":{"connections":[]}},
        "pos_x": 1685,
        "pos_y": 1075
      },
      "13": {
        "id": 13,
        "name": "IN-CCS-SIG-SS",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-CCS-SIG-SS (13)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n Signals &amp; Signs System  <p class=ifc><a class=ifc target=\"_blank\" href=\"https://search.bsdd.buildingsmart.org/uri/buildingsmart/ifc/4.3/class/IfcSignal\" title=\"IfcRoot&nbsp;\\&nbsp;IfcObjectDefinition&nbsp;\\&nbsp;IfcObject&nbsp;\\&nbsp;IfcProduct&nbsp;\\&nbsp;IfcElement&nbsp;\\&nbsp;IfcDistributionElement&nbsp;\\&nbsp;IfcDistributionFlowElement&nbsp;\\&nbsp;IfcFlowTerminal&nbsp;\\&nbsp;IfcSignal\">IfcSignal</a></p><p class=ifc><a class=ifc target=\"_blank\" href=\"https://search.bsdd.buildingsmart.org/uri/buildingsmart/ifc/4.3/class/IfcSign\" title=\"IfcRoot&nbsp;\\&nbsp;IfcObjectDefinition&nbsp;\\&nbsp;IfcObject&nbsp;\\&nbsp;IfcProduct&nbsp;\\&nbsp;IfcElement&nbsp;\\&nbsp;IfcElementComponent&nbsp;\\&nbsp;IfcSign\">IfcSign</a></p> <p class=uniclass><a class=uniclass target=\"_blank\" href=\"https://uniclass.thenbs.com/taxon/ss_75_30_70\" title=\"Railway signal and control systems\">Ss_75_30_70</a></p> <p class=uniclass><a class=uniclass target=\"_blank\" href=\"https://uniclass.thenbs.com/taxon/pr_40_10_77_70\" title=\"Railway signs\">Pr_40_10_77_70</a></p>\n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
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
            "connections":[{
              "node":"20",
              "input":"output_2"
            }]
          }
        },          
        "outputs": {"output_1":{"connections":[]},
                    "output_2":{"connections":[]}},
        "pos_x": 1100,
        "pos_y": 1080
      },
      "14": {
        "id": 14,
        "name": "IN-CCS-SIG-TDS",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-CCS-SIG-TDS (14)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n Train Detection System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
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
        "outputs": {"output_1":{"connections":[]},
                    "output_2":{"connections":[]}},
        "pos_x": 1700,
        "pos_y": 850
      },
      "15": {
        "id": 15,
        "name": "IN-CCS-SIG-TRTS",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-CCS-SIG-TRTS (15)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n TRTS System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
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
        "outputs": {"output_1":{"connections":[]},
                    "output_2":{"connections":[]}},
        "pos_x": 1400,
        "pos_y": 1070
      },
      "16": {
        "id": 16,
        "name": "IN-CCS-SIG-WS",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-CCS-SIG-WS (16)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n TPWS/AWS System  <p class=uniclass><a class=uniclass target=\"_blank\" href=\"https://uniclass.thenbs.com/taxon/ss_75_30_70_90\" title=\"Train protection warning systems (TPWS)\">Ss_75_30_70_90</a></p> \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
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
        "outputs": {"output_1":{"connections":[]},
                    "output_2":{"connections":[]}},
        "pos_x": 1400,
        "pos_y": 850
      },
      "17": {
        "id": 17,
        "name": "IN-BLD-NMC",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box\"><i class=\"fas fa-code-branch\"></i> IN-BLD-NMC (17)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Network Management Control Centre System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {},          
        "outputs": {
          "output_1": {"connections":[]},
          "output_2": {
            "connections": [
              {
                "node":"4",
                "output":"input_2"
              } 
            ]
          }
        },
        "pos_x": -200,
        "pos_y": 260
      },
      "18": {
        "id": 18,
        "name": "IN-CCS-TMS-ROC",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-CCS-TMS-ROC (18)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n Rail Operating Centre System (ROC)  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1": {
            "connections": [
               {
                "node": "4",
                "input": "output_1"
               }
            ]
          },"input_2":{"connections":[]}
        },          
        "outputs": {"output_1":{"connections":[]},
                    "output_2":{"connections":[]}},
        "pos_x": 1090,
        "pos_y": 290
      },
      "19": {
        "id": 19,
        "name": "IN-STR-IN-LVL",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box\"><i class=\"fas fa-code-branch\"></i> IN-STR-IN-LVL (19)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Level Crossing System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {},          
        "outputs": {
          "output_1": {
            "connections": []
          },
          "output_2": {
            "connections": [
              {
                "node": "2",
                "output":"input_2"
              }
            ]
          }
        },
        "pos_x": -200,
        "pos_y": 830
      },
      "20": {
        "id": 20,
        "name": "IN-STR-AUX-GNT",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box\"><i class=\"fas fa-code-branch\"></i> IN-STR-AUX-GNT (20)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Gantry System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1": {
            "connections": []
          }
        },          
        "outputs": {
          "output_1": {
            "connections": []
          },
          "output_2": {
            "connections": [
              {
                "node":"13",
                "output":"input_2"
              }
            ]
          }
        },
        "pos_x": -200,
        "pos_y": 1110
      },
      "21": {
        "id": 21,
        "name": "IN-GD-PW-SC",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box\"><i class=\"fas fa-code-branch\"></i> IN-GD-PW-SC (21)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  S&amp;C System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1": {
            "connections": []
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
            "connections":[{
              "node":"10",
              "output":"input_2"
            }]
          }
        },
        "pos_x": -200,
        "pos_y": 1230
      },
      "22": {
        "id": 22,
        "name": "IN-RS-P",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box\"><i class=\"fas fa-code-branch\"></i> IN-RS-P (22)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Passenger Rolling Stock System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1":{
            "connections":[]
          }},          
        "outputs": {
          "output_1": {
            "connections": []
          },
          "output_2":{"connections":[
            {
              "node":"6",
              "output":"input_2"
            },
            {
              "node":"5",
              "output":"input_2"
            }
          ]}
        },
        "pos_x": -200,
        "pos_y": 130
      },
      "113": {
        "id": 113,
        "name": "IN-STR-SUP-CMS",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box\"><i class=\"fas fa-code-branch\"></i> IN-STR-SUP-CMS (113)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Cable Management System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
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
        "pos_x": -200,
        "pos_y": 710
      },
      "123": {
        "id": 123,
        "name": "IN-TEL-NET-W",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box\"><i class=\"fas fa-code-branch\"></i> IN-TEL-CORP-W (123)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Wireless Communications Network System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1": {
            "connections": []
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
            "connections":[
              {"node":"3","output":"input_2"}
            ]
          }
        },
        "pos_x": -200,
        "pos_y": 530
      },
      "124": {
        "id": 124,
        "name": "IN-TEL-NET-F",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box\"><i class=\"fas fa-code-branch\"></i> IN-TEL-CORP-F (124)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Fixed Communications Network System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1": {
            "connections": []
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
          "connections":[{"node":"3","output":"input_2"}]
        }
      },
        "pos_x": -200,
        "pos_y": 400
      },
      "129": {
        "id": 129,
        "name": "IN-BLD-ANC-REB",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box\"><i class=\"fas fa-code-branch\"></i> IN-BLD-ANC-REB (129)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Relocatable Equipment Building (REB) System \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
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
        "pos_y": 950
      }
    }
  }