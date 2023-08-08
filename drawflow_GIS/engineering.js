var engineering = {
    "data": {
        "1": {
          "id": 1,
          "name": "GIS-EN",
          "data": {},
          "class": "SCH",
          "html": "\n <div>\n <div class=\"title-box-red\"><i class=\"fas fa-code-branch\"></i> GIS-EN (1)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Engineering, Land &amp; Property plus miscellaneous  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
          "typenode": false,
          "inputs": {"input_1":{"connections":[]}},          
          "outputs": {
            "output_1":{"connections":[{"node":"2","output":"input_1"},
                                       {"node":"3","output":"input_1"},
                                       {"node":"4","output":"input_1"},
                                       {"node":"5","output":"input_1"},
                                       {"node":"6","output":"input_1"}
              ]
            }
          },
          "pos_x": 30,
          "pos_y": 710
        },
        "2": {
          "id": 2,
          "name": "GIS-EN-IS",
          "data": {},
          "class": "SCH",
          "html": "\n <div>\n <div class=\"title-box-darkblue\"><i class=\"fas fa-code-branch\"></i> GIS-EN-IS (2)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Incidental Surveys  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
          "typenode": false,
          "inputs": {
            "input_1":{"connections": [{"node":"1","input":"output_1"}
              ]}
          },          
          "outputs": {
            "output_1": {
              "connections": [{"node":"7","output":"input_1"},
                              {"node":"8","output":"input_1"}]
            }
          },
          "pos_x": 550,
          "pos_y": 0
        },
        "3": {
          "id": 3,
          "name": "GIS-EN-EN",
          "data": {},
          "class": "SCH",
          "html": "\n <div>\n <div class=\"title-box-darkblue\"><i class=\"fas fa-code-branch\"></i> GIS-EN-EN (3)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n Engineering  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
          "typenode": false,
          "inputs": {
            "input_1": {
              "connections": [{"node":"1","input":"output_1"}
              ]
            }
          },          
          "outputs": {
            "output_1": {
              "connections": [{"node":"9","output":"input_1"},
                              {"node":"10","output":"input_1"},
                              {"node":"11","output":"input_1"},
                              {"node":"12","output":"input_1"},
                              {"node":"13","output":"input_1"},
                              {"node":"14","output":"input_1"}]
            }
          },
          "pos_x": 550,
          "pos_y": 400
        },
        "4": {
          "id": 4,
          "name": "GIS-EN-HZ",
          "data": {},
          "class": "SCH",
          "html": "\n <div>\n <div class=\"title-box-darkblue\"><i class=\"fas fa-code-branch\"></i> GIS-EN-HZ (4)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n Hazards  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
          "typenode": false,
          "inputs": {
            "input_1": {
              "connections": [{"node":"1","input":"output_1"}
              ]
            }
          },          
          "outputs": {
            "output_1": {
              "connections": [{"node":"15","output":"input_1"},
                              {"node":"16","output":"input_1"}]
            }
          },
          "pos_x": 550,
          "pos_y": 730
        },
        "5": {
          "id": 5,
          "name": "GIS-EN-MSC",
          "data": {},
          "class": "SCH",
          "html": "\n <div>\n <div class=\"title-box-darkblue\"><i class=\"fas fa-code-branch\"></i> GIS-EN-MSC (5)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n Miscellaneous  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
          "typenode": false,
          "inputs": {
            "input_1": {
              "connections": [{"node":"1","input":"output_1"}
              ]
            }
          },          
          "outputs": {
            "output_1": {
              "connections": [{"node":"17","output":"input_1"},
                              {"node":"18","output":"input_1"},
                              {"node":"19","output":"input_1"}]
            }
          },
          "pos_x": 550,
          "pos_y": 1070
        },
        "6": {
          "id": 6,
          "name": "GIS-EN-LP",
          "data": {},
          "class": "SCH",
          "html": "\n <div>\n <div class=\"title-box-darkblue\"><i class=\"fas fa-code-branch\"></i> GIS-EN-LP (6)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n Land &amp; Property  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
          "typenode": false,
          "inputs": {
            "input_1": {
              "connections": [{"node":"1","input":"output_1"}
              ]
            }
          },          
          "outputs": {
            "output_1": {
              "connections": [{"node":"20","output":"input_1"}]
            }
          },
          "pos_x": 550,
          "pos_y": 1480
        },
        "7": {
          "id": 7,
          "name": "GIS-EN-IS-S2",
          "data": {},
          "class": "SCH",
          "html": "\n <div>\n <div class=\"title-box-green\"><i class=\"fas fa-code-branch\"></i> GIS-EN-IS-S2 (7)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n Incidental Survey - Stage 2 QA  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
          "typenode": false,
          "inputs": {
            "input_1": {
              "connections": [{"node":"2","input":"output_1"}
              ]
            }
          },          
          "outputs": {
            "output_1": {
              "connections": []
            }
          },
          "pos_x": 1000,
          "pos_y": -100
        },
        "8": {
          "id": 8,
          "name": "GIS-EN-IS-S3",
          "data": {},
          "class": "SCH",
          "html": "\n <div>\n <div class=\"title-box-green\"><i class=\"fas fa-code-branch\"></i> GIS-EN-IS-S3 (8)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n Incidental Survey - Stage 3 QA  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
          "typenode": false,
          "inputs": {
            "input_1": {
              "connections": [{"node":"2","input":"output_1"}
              ]
            }
          },          
          "outputs": {
            "output_1": {
              "connections": []
            }
          },
          "pos_x": 1000,
          "pos_y": 40
        },
        "9": {
          "id": 9,
          "name": "GIS-EN-EN-O2C",
          "data": {},
          "class": "SCH",
          "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> GIS-EN-EN-O2C (9)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n Oxford to Cambridge Affordable Connections  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
          "typenode": false,
          "inputs": {
            "input_1": {
              "connections": [{"node":"3","input":"output_1"}
              ]
            }
          },          
          "outputs": {
            "output_1": {
              "connections": []
            }
          },
          "pos_x": 1000,
          "pos_y": 200
        },
        "10": {
          "id": 10,
          "name": "GIS-EN-EN-WEB",
          "data": {},
          "class": "SCH",
          "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> GIS-EN-EN-WEB (10)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n Engineering Web Map  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
          "typenode": false,
          "inputs": {
            "input_1": {
              "connections": [{"node":"3","input":"output_1"}
              ]
            }
          },          
          "outputs": {
            "output_1": {
              "connections": []
            }
          },
          "pos_x": 1000,
          "pos_y": 340
        },
        "11": {
          "id": 11,
          "name": "GIS-EN-EN-DF2",
          "data": {},
          "class": "SCH",
          "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> GIS-EN-EN-DF2 (11)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n Oxford to Cambridge Design Freeze 2  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
          "typenode": false,
          "inputs": {
            "input_1": {
              "connections": [{"node":"3","input":"output_1"}
              ]
            }
          },          
          "outputs": {
            "output_1": {
              "connections": []
            }
          },
          "pos_x": 1000,
          "pos_y": 460
        },
        "12": {
          "id": 12,
          "name": "GIS-EN-EN-CS3",
          "data": {},
          "class": "SCH",
          "html": "\n <div>\n <div class=\"title-box-orange\"><i class=\"fas fa-code-branch\"></i> GIS-EN-EN-CS3 (12)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n CS3 3D Alignment Viewer  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
          "typenode": false,
          "inputs": {
            "input_1": {
              "connections": [{"node":"3","input":"output_1"}
              ]
            }
          },          
          "outputs": {
            "output_1": {
              "connections": []
            }
          },
          "pos_x": 1400,
          "pos_y": 300
        },
        "13": {
          "id": 13,
          "name": "GIS-EN-EN-NRA",
          "data": {},
          "class": "SCH",
          "html": "\n <div>\n <div class=\"title-box-orange\"><i class=\"fas fa-code-branch\"></i> GIS-EN-EN-NRA (13)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n Network Rail Assets  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
          "typenode": false,
          "inputs": {
            "input_1": {
              "connections": [{"node":"3","input":"output_1"}
              ]
            }
          },          
          "outputs": {
            "output_1": {
              "connections": []
            }
          },
          "pos_x": 1400,
          "pos_y": 440
        },
        "14": {
          "id": 14,
          "name": "GIS-EN-EN-CS1",
          "data": {},
          "class": "SCH",
          "html": "\n <div>\n <div class=\"title-box-orange\"><i class=\"fas fa-code-branch\"></i> GIS-EN-EN-CS1 (14)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n CS1 Drone Videos  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
          "typenode": false,
          "inputs": {
            "input_1": {
              "connections": [{"node":"3","input":"output_1"}
              ]
            }
          },          
          "outputs": {
            "output_1": {
              "connections": []
            }
          },
          "pos_x": 1400,
          "pos_y": 560
        },
        "15": {
          "id": 15,
          "name": "GIS-EN-HZ-HL",
          "data": {},
          "class": "SCH",
          "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> GIS-EN-HZ-HL (15)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n Hazard Layers  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
          "typenode": false,
          "inputs": {
            "input_1": {
              "connections": [{"node":"4","input":"output_1"}
              ]
            }
          },          
          "outputs": {
            "output_1": {
              "connections": []
            }
          },
          "pos_x": 1000,
          "pos_y": 660
        },
        "16": {
          "id": 16,
          "name": "GIS-EN-HZ-HR",
          "data": {},
          "class": "SCH",
          "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> GIS-EN-HZ-HR (16)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n Hazard Reporting  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
          "typenode": false,
          "inputs": {
            "input_1": {
              "connections": [{"node":"4","input":"output_1"}
              ]
            }
          },          
          "outputs": {
            "output_1": {
              "connections": []
            }
          },
          "pos_x": 1000,
          "pos_y": 800
        },
        "17": {
          "id": 17,
          "name": "GIS-EN-MSC-AIV",
          "data": {},
          "class": "SCH",
          "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> GIS-EN-MSC-AIV (17)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n Aerial Imagery Viewer  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
          "typenode": false,
          "inputs": {
            "input_1": {
              "connections": [{"node":"5","input":"output_1"}
              ]
            }
          },          
          "outputs": {
            "output_1": {
              "connections": []
            }
          },
          "pos_x": 1000,
          "pos_y": 940
        },
        "18": {
          "id": 18,
          "name": "GIS-EN-MSC-PMP",
          "data": {},
          "class": "SCH",
          "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> GIS-EN-MSC-PMP (18)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n EWR Programme Management Plan  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
          "typenode": false,
          "inputs": {
            "input_1": {
              "connections": [{"node":"5","input":"output_1"}
              ]
            }
          },          
          "outputs": {
            "output_1": {
              "connections": []
            }
          },
          "pos_x": 1000,
          "pos_y": 1060
        },
        "19": {
          "id": 19,
          "name": "GIS-EN-MSC-ERM",
          "data": {},
          "class": "SCH",
          "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> GIS-EN-MSC-ERM (19)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n EWR External Route Map (Local Representative Group etc.)  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
          "typenode": false,
          "inputs": {
            "input_1": {
              "connections": [{"node":"5","input":"output_1"}
              ]
            }
          },          
          "outputs": {
            "output_1": {
              "connections": []
            }
          },
          "pos_x": 1000,
          "pos_y": 1180
        },
        "20": {
          "id": 20,
          "name": "GIS-EN-LP-PRT",
          "data": {},
          "class": "SCH",
          "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> GIS-EN-LP-PRT (20)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n Land &amp; Property Portal  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
          "typenode": false,
          "inputs": {
            "input_1": {
              "connections": [{"node":"6","input":"output_1"}
              ]
            }
          },          
          "outputs": {
            "output_1": {
              "connections": [{"node":"21","output":"input_1"},
                              {"node":"22","output":"input_1"},
                              {"node":"23","output":"input_1"}]
            }
          },
          "pos_x": 1000,
          "pos_y": 1480
        },
        "21": {
          "id": 21,
          "name": "GIS-EN-LP-PRT-AHL",
          "data": {},
          "class": "SCH",
          "html": "\n <div>\n <div class=\"title-box-orange\"><i class=\"fas fa-code-branch\"></i> GIS-EN-LP-PRT-AHL (21)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n Adams Hendry Land &amp; Property Study  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
          "typenode": false,
          "inputs": {
            "input_1": {
              "connections": [{"node":"20","input":"output_1"}
              ]
            }
          },          
          "outputs": {
            "output_1": {
              "connections": []
            }
          },
          "pos_x": 1400,
          "pos_y": 1320
        },
        "22": {
          "id": 22,
          "name": "GIS-EN-LP-PRT-AHP",
          "data": {},
          "class": "SCH",
          "html": "\n <div>\n <div class=\"title-box-orange\"><i class=\"fas fa-code-branch\"></i> GIS-EN-LP-PRT-AHP (21)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n Adams Hendry Planning Applications  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
          "typenode": false,
          "inputs": {
            "input_1": {
              "connections": [{"node":"20","input":"output_1"}
              ]
            }
          },          
          "outputs": {
            "output_1": {
              "connections": []
            }
          },
          "pos_x": 1400,
          "pos_y": 1460
        },
        "23": {
          "id": 23,
          "name": "GIS-EN-LP-PRT-DB",
          "data": {},
          "class": "SCH",
          "html": "\n <div>\n <div class=\"title-box-orange\"><i class=\"fas fa-code-branch\"></i> GIS-EN-LP-PRT-DB (22)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n Land and Property Dashboard  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
          "typenode": false,
          "inputs": {
            "input_1": {
              "connections": [{"node":"20","input":"output_1"}
              ]
            }
          },          
          "outputs": {
            "output_1": {
              "connections": []
            }
          },
          "pos_x": 1400,
          "pos_y": 1600
        }
    }
}