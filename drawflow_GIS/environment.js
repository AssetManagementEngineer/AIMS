var environ = {
    "data": {
      "1": {
        "id": 1,
        "name": "GIS-ENV",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box-red\"><i class=\"fas fa-code-branch\"></i> GIS-EN (1)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Environmental  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {"input_1":{"connections":[]}},          
        "outputs": {
          "output_1": {
            "connections": [
              {"node":"2","output":"input_1"},
              {"node":"3","output":"input_1"},
              {"node":"4","output":"input_1"},
              {"node":"5","output":"input_1"},
              {"node":"6","output":"input_1"},
              {"node":"7","output":"input_1"},
              {"node":"8","output":"input_1"},
              {"node":"12","output":"input_1"}
            ]
          }
        },
        "pos_x": 100,
        "pos_y": 1000
      },
      "2": {
        "id": 2,
        "name": "GIS-ENV-SNV",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box-darkblue\"><i class=\"fas fa-code-branch\"></i> GIS-ENV-SNV (2)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Sound Noise Vibration (SNV)  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1": {"connections":[{"node":"1","input":"output_1"}
            ]
          }
        },          
        "outputs": {
          "output_1": {
            "connections": [{"node":"9","output":"input_1"}]
          }
        },
        "pos_x": 720,
        "pos_y": -270
      },
      "3": {
        "id": 3,
        "name": "GIS-ENV-WFD",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box-darkblue\"><i class=\"fas fa-code-branch\"></i> GIS-ENV-WFD (3)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Water Framework Directive (WFD)  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
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
            "connections": [{"node":"13","output":"input_1"},
            {"node":"14","output":"input_1"}]
          }
        },
        "pos_x": 720,
        "pos_y": 10
      },
      "4": {
        "id": 4,
        "name": "GIS-ENV-FIA",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box-darkblue\"><i class=\"fas fa-code-branch\"></i> GIS-ENV-FIA (4)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Farm Impact Assessment (FIA)  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
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
            "connections": [{"node":"20","output":"input_1"}]
          }
        },
        "pos_x": 720,
        "pos_y": 650
      },
      "5": {
        "id": 5,
        "name": "GIS-ENV-BS",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box-darkblue\"><i class=\"fas fa-code-branch\"></i> GIS-ENV-BS (5)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Bat Surveys  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
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
            "connections": [{"node":"23","output":"input_1"}]
          }
        },
        "pos_x": 720,
        "pos_y": 930
      },
      "6": {
        "id": 6,
        "name": "GIS-ENV-AS",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box-darkblue\"><i class=\"fas fa-code-branch\"></i> GIS-ENV-AS (6)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Arboricultural Surveys  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
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
            "connections": [{"node":"26","output":"input_1"}]
          }
        },
        "pos_x": 720,
        "pos_y": 1250
      },
      "7": {
        "id": 7,
        "name": "GIS-ENV-KS",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box-darkblue\"><i class=\"fas fa-code-branch\"></i> GIS-ENV-KS (7)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Kingfisher Surveys  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1":{"connections":[{"node": "1","input":"output_1"}
        ]}
        },          
        "outputs": {
          "output_1": { "connections": [{"node":"32","output":"input_1"}] }
        },
        "pos_x": 720,
        "pos_y": 1920
      },
      "8": {
        "id": 8,
        "name": "GIS-ENV-GM",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box-darkblue\"><i class=\"fas fa-code-branch\"></i> GIS-ENV-GM (8)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  GeoMoRPH Surveys  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
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
          "output_1": {"connections": [{"node":"34","output":"input_1"}]}
        },
        "pos_x": 720,
        "pos_y": 2240
      },
      "9": {
        "id": 9,
        "name": "GIS-ENV-SNV-ED",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> GIS-ENV-SNV-ED (9)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  SNV Surveys - Editing  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
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
          "output_1": {"connections": [
          {"node":"10","output":"input_1"},
          {"node":"11","output":"input_1"}]}
        },
        "pos_x": 1200,
        "pos_y": -400
      },
      "10": {
        "id": 10,
        "name": "GIS-ENV-SNV-ED S2",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box-green\"><i class=\"fas fa-code-branch\"></i> GIS-ENV-SNV-ED S2 (10)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  SNV Surveys - Stage 2 QA  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1": {
            "connections": [
               {
                "node": "9",
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
        "pos_x": 1600,
        "pos_y": -600
      },
      "11": {
        "id": 11,
        "name": "GIS-ENV-SNV-ED-S3",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box-green\"><i class=\"fas fa-code-branch\"></i>GIS-ENV-SNV-ED S3 (11)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  SNV Surveys - Stage 3 QA  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1": {"connections":[{"node":"9","input":"output_1"}
            ]
          }
        },          
        "outputs": {
          "output_1": {
            "connections": [

            ]
          }
        },
        "pos_x": 1600,
        "pos_y": -430
      },
      "12": {
        "id": 12,
        "name": "GIS-ENV-HAB",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box-darkblue\"><i class=\"fas fa-code-branch\"></i> GIS-ENV-HAB (12)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Habitat Surveys  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
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
          "output_1":{"connections":[{"node":"30","output":"input_1"}]}
        },
        "pos_x": 720,
        "pos_y": 1630
      },
      "13": {
        "id": 13,
        "name": "GIS-ENV-WFD-MR",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> GIS-ENV-WFD-MR (13)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  WFD MoRPH Recon - Stage 3 QA  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1": {"connections": [{"node":"3","input":"output_1"}]
          }
        },          
        "outputs": {
          "output_1": {
            "connections": [{"node":"16","output":"input_1"}]
          }
        },
        "pos_x": 1200,
        "pos_y": 10
      },
      "14": {
        "id": 14,
        "name": "GIS-ENV-WFD-FG",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> GIS-ENV-WFD-FG (14)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  WFD Fluvial Geomorphology - Stage 3 QA  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1": {"connections": [{"node":"3","input":"output_1"}]
          }
        },          
        "outputs": {
          "output_1": {
            "connections": [{"node":"18","output":"input_1"}]
          }
        },
        "pos_x": 1200,
        "pos_y": 290
      },
      "15": {
        "id": 15,
        "name": "GIS-ENV-WFD-ED",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box-orange\"><i class=\"fas fa-code-branch\"></i> GIS-ENV-WFD-ED (15)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  WFD Surveys - Editing  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1": {"connections": [{"node":"3","input":"output_1"}]
          }
        },          
        "outputs": {
          "output_1": {
            "connections": [{}]
          }
        },
        "pos_x": 1600,
        "pos_y": -200
      },
      "16": {
        "id": 16,
        "name": "GIS-ENV-WFD-MR-S2",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box-orange\"><i class=\"fas fa-code-branch\"></i> GIS-ENV-WFD-MR-S2 (16)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  WFD MoRPH Recon - Stage 2 QA  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1": {"connections": [{"node":"13","input":"output_1"}]
          }
        },          
        "outputs": {
          "output_1": {
            "connections": [{}]
          }
        },
        "pos_x": 1600,
        "pos_y": -80
      },
      "17": {
        "id": 17,
        "name": "GIS-ENV-WFD-MR-ED",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box-orange\"><i class=\"fas fa-code-branch\"></i> GIS-ENV-WFD-MR-ED (17)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  WFD MoRPH Recon - Editing  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1": {"connections": [{"node":"13","input":"output_1"}]
          }
        },          
        "outputs": {
          "output_1": {
            "connections": [{}]
          }
        },
        "pos_x": 1600,
        "pos_y": 60
      },
      "18": {
        "id": 18,
        "name": "GIS-ENV-WFD-FG-S2",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box-orange\"><i class=\"fas fa-code-branch\"></i> GIS-ENV-WFD-FG-S2 (18)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  WFD Fluvial Geomorphology - Stage 2 QA  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1": {"connections": [{"node":"14","input":"output_1"}]
          }
        },          
        "outputs": {
          "output_1": {
            "connections": [{}]
          }
        },
        "pos_x": 1600,
        "pos_y": 220
      },
      "19": {
        "id": 19,
        "name": "GIS-ENV-WFD-FG-ED",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box-orange\"><i class=\"fas fa-code-branch\"></i> GIS-ENV-WFD-FG-ED (19)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  WFD Fluvial Geomorphology - Editing  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1": {"connections": [{"node":"14","input":"output_1"}]
          }
        },          
        "outputs": {
          "output_1": {
            "connections": [{}]
          }
        },
        "pos_x": 1600,
        "pos_y": 380
      },
      "20": {
        "id": 20,
        "name": "GIS-ENV-FIA-ED",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> GIS-ENV-FIA-ED (20)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  FIA Farm Surveys - Editing  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1": {"connections": [{"node":"4","input":"output_1"}]
          }
        },          
        "outputs": {
          "output_1": {
            "connections": [{"node":"21","output":"input_1"},
            {"node":"22","output":"input_1"}]
          }
        },
        "pos_x": 1200,
        "pos_y": 600
      },
      "21": {
        "id": 21,
        "name": "GIS-ENV-FIA-S2",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box-orange\"><i class=\"fas fa-code-branch\"></i> GIS-ENV-FIA-S2 (21)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  FIA Farm Surveys - Stage 2 QA  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1": {"connections": [{"node":"20","input":"output_1"}]
          }
        },          
        "outputs": {
          "output_1": {
            "connections": [{}]
          }
        },
        "pos_x": 1600,
        "pos_y": 520
      },
      "22": {
        "id": 22,
        "name": "GIS-ENV-FIA-S3",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box-orange\"><i class=\"fas fa-code-branch\"></i> GIS-ENV-FIA-S3 (22)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  FIA Farm Surveys - Stage 3 QA  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1": {"connections": [{"node":"20","input":"output_1"}]
          }
        },          
        "outputs": {
          "output_1": {
            "connections": [{}]
          }
        },
        "pos_x": 1600,
        "pos_y": 650
      },
      "23": {
        "id": 23,
        "name": "GIS-ENV-BS-ED",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> GIS-ENV-BS-ED (23)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Bat Tree Surveys, BA3 Bat Woodland Transects &amp; BA5 Bat Radio Trapping Surveys - Editing  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1": {"connections": [{"node":"5","input":"output_1"}]
          }
        },          
        "outputs": {
          "output_1": {
            "connections": [{"node":"24","output":"input_1"}]
          }
        },
        "pos_x": 1200,
        "pos_y": 820
      },
      "24": {
        "id": 24,
        "name": "GIS-ENV-BS-ED-FS2",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box-orange\"><i class=\"fas fa-code-branch\"></i> GIS-ENV-BS-ED-FS2 (24)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Bat Surveys - Stage 2 QA  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1": {"connections": [{"node":"23","input":"output_1"}]
          }
        },          
        "outputs": {
          "output_1": {
            "connections": [{}]
          }
        },
        "pos_x": 1600,
        "pos_y": 780
      },
      "25": {
        "id": 25,
        "name": "GIS-ENV-BS-ED-FS3",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box-orange\"><i class=\"fas fa-code-branch\"></i> GIS-ENV-BS-ED-FS3 (25)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Bat Surveys - Stage 3 QA  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1": {"connections": [{"node":"23","input":"output_1"}]
          }
        },          
        "outputs": {
          "output_1": {
            "connections": [{}]
          }
        },
        "pos_x": 1600,
        "pos_y": 910
      },
      "26": {
        "id": 26,
        "name": "GIS-ENV-AS-ED",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> GIS-ENV-AS-ED (26)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Arb Veteran Tree Surveys - Editing  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1": {"connections": [{"node":"6","input":"output_1"}]
          }
        },          
        "outputs": {
          "output_1": {
            "connections": [{"node":"27","output":"input_1"},
                            {"node":"28","output":"input_1"},
                            {"node":"29","output":"input_1"}]
          }
        },
        "pos_x": 1200,
        "pos_y": 1220
      },
      "27": {
        "id": 27,
        "name": "GIS-ENV-AS-ED-S2",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box-orange\"><i class=\"fas fa-code-branch\"></i> GIS-ENV-AS-ED-S2 (27)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Arb Surveys - Stage 2 QA  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1": {"connections": [{"node":"26","input":"output_1"}]
          }
        },          
        "outputs": {
          "output_1": {
            "connections": [{}]
          }
        },
        "pos_x": 1600,
        "pos_y": 1110
      },
      "28": {
        "id": 28,
        "name": "GIS-ENV-AS-ED-S3",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box-orange\"><i class=\"fas fa-code-branch\"></i> GIS-ENV-AS-ED-S3 (28)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Arb Surveys - Stage 3 QA  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1": {"connections": [{"node":"26","input":"output_1"}]
          }
        },          
        "outputs": {
          "output_1": {
            "connections": [{}]
          }
        },
        "pos_x": 1600,
        "pos_y": 1230
      },
      "29": {
        "id": 29,
        "name": "GIS-ENV-AS-ED-AW",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box-orange\"><i class=\"fas fa-code-branch\"></i> GIS-ENV-AS-ED-AW (29)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Ancient Woodland Survey  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1": {"connections": [{"node":"26","input":"output_1"}]
          }
        },          
        "outputs": {
          "output_1": {
            "connections": [{}]
          }
        },
        "pos_x": 1600,
        "pos_y": 1350
      },
      "30": {
        "id": 30,
        "name": "GIS-ENV-HS-ED",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> GIS-ENV-HS-ED (30)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Habitat Surveys - Editing  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1": {"connections": [{"node":"12","input":"output_1"}]
          }
        },          
        "outputs": {
          "output_1": {
            "connections": [{"node":"31","output":"input_1"}]
          }
        },
        "pos_x": 1200,
        "pos_y": 1540
      },
      "31": {
        "id": 31,
        "name": "GIS-ENV-HS-ED-S2",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box-orange\"><i class=\"fas fa-code-branch\"></i> GIS-ENV-HS-ED-S2 (31)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Habitat Survey Stage 2 QA \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1": {"connections": [{"node":"30","input":"output_1"}]
          }
        },          
        "outputs": {
          "output_1": {
            "connections": [{}]
          }
        },
        "pos_x": 1600,
        "pos_y": 1470
      },
      "32": {
        "id": 32,
        "name": "GIS-ENV-KS-ED",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> GIS-ENV-KS-ED (32)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Kingfisher, Otter, Watervole Survey - Editing  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1": {"connections": [{"node":"7","input":"output_1"}]
          }
        },          
        "outputs": {
          "output_1": {
            "connections": []
          }
        },
        "pos_x": 1200,
        "pos_y": 1840
      },
      "33": {
        "id": 33,
        "name": "GIS-ENV-KS-ED-S2",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box-orange\"><i class=\"fas fa-code-branch\"></i> GIS-ENV-KS-ED-S2 (33)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Kingfisher, Otter, Watervole Survey - Stage 2 QA \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1": {"connections": [{"node":"32","input":"output_1"}]
          }
        },          
        "outputs": {
          "output_1": {
            "connections": [{}]
          }
        },
        "pos_x": 1600,
        "pos_y": 1700
      },
      "34": {
        "id": 34,
        "name": "GIS-ENV-GM-ED",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> GIS-ENV-GM-ED (34)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  GeoMoRPH Survey - Editing  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1": {"connections": [{"node":"8","input":"output_1"}]
          }
        },          
        "outputs": {
          "output_1": {
            "connections": [{"node":"35","output":"input_1"},
                            {"node":"36","output":"input_1"}]
          }
        },
        "pos_x": 1200,
        "pos_y": 2100
      },
      "35": {
        "id": 35,
        "name": "GIS-ENV-GM-ED-S2",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box-orange\"><i class=\"fas fa-code-branch\"></i> GIS-ENV-GM-ED-S2 (35)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  GeoMoRPH Surveys - Stage 2 QA \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1": {"connections": [{"node":"34","input":"output_1"}]
          }
        },          
        "outputs": {
          "output_1": {
            "connections": [{}]
          }
        },
        "pos_x": 1600,
        "pos_y": 2000
      },
      "36": {
        "id": 36,
        "name": "GIS-ENV-GM-ED-S3",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box-orange\"><i class=\"fas fa-code-branch\"></i> GIS-ENV-GM-ED-S3 (36)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  GeoMoRPH Surveys - Stage 3 QA \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1": {"connections": [{"node":"34","input":"output_1"}]
          }
        },          
        "outputs": {
          "output_1": {
            "connections": [{}]
          }
        },
        "pos_x": 1600,
        "pos_y": 2200
      }
    }
  }