var monitoring = {
    "data": {
        "1": {
            "id": 1,
            "name": "IN-CM",
            "data": {},
            "class": "SCH",
            "html": "\n <div>\n <div class=\"title-box-orange\"><i class=\"fas fa-code-branch\"></i> IN-CM (1)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n   Control &amp; Monitoring System \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
            "typenode": false,
            "inputs": {},          
            "outputs": {
              "output_1": {
                "connections": [{"node":"2","output":"input_1"},
                                {"node":"3","output":"input_1"},
                                {"node":"4","output":"input_1"}]
              },
              "output_2": {
                "connections": []
              }
            },
            "pos_x": 200,
            "pos_y": 300
          },
          "2": {
            "id": 2,
            "name": "IN-CM-MO",
            "data": {},
            "class": "SCH",
            "html": "\n<div>\n<div class=\"title-box-darkblue\"><i class=\"fas fa-code-branch\"></i>IN-CM-MO (2)</div>\n<div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\">\nMonitoring System\n<div class=\"modal\" style=\"display:none\">\n<div class=\"modal-content\">\n<span class=\"close\" onclick=\"closemodal(event)\">&times;</span></div>\n</div>\n</div>\n</div>\n",
            "typenode": false,
            "inputs": {
                "input_1":{"connections":[{"node":"1","input":"output_1"}]}
            },          
            "outputs": {
              "output_1": {
                "connections": [{"node":"8","input":"output_1"},
                                {"node":"9","input":"output_1"},
                                {"node":"10","input":"output_1"},
                                {"node":"11","input":"output_1"},
                                {"node":"12","input":"output_1"}]
              },
              "output_2": {
                "connections": []
              }
            },
            "pos_x": 600,
            "pos_y": 0
          },
          "3": {
            "id": 3,
            "name": "IN-CM-CA",
            "data": {},
            "class": "SCH",
            "html": "\n<div>\n<div class=\"title-box-darkblue\"><i class=\"fas fa-code-branch\"></i>IN-CM-CA (3)</div>\n<div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\">\nCamera System\n<div class=\"modal\" style=\"display:none\">\n<div class=\"modal-content\">\n<span class=\"close\" onclick=\"closemodal(event)\">&times;</span></div>\n</div>\n</div>\n</div>\n",
            "typenode": false,
            "inputs": {
                "input_1":{"connections":[{"node":"1","input":"output_1"}]}
            },          
            "outputs": {
              "output_1": {
                "connections": [{"node":"5","output":"input_1"},
                                {"node":"6","output":"input_1"},
                                {"node":"7","output":"input_1"}]
              },
              "output_2": {
                "connections": []
              }
            },
            "pos_x": 600,
            "pos_y": 300
          },
          "4": {
            "id": 4,
            "name": "IN-CM-CT",
            "data": {},
            "class": "SCH",
            "html": "\n<div>\n<div class=\"title-box-darkblue\"><i class=\"fas fa-code-branch\"></i>IN-CM-CT (4)</div>\n<div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\">\nControl &amp; Management System\n<div class=\"modal\" style=\"display:none\">\n<div class=\"modal-content\">\n<span class=\"close\" onclick=\"closemodal(event)\">&times;</span></div>\n</div>\n</div>\n</div>\n",
            "typenode": false,
            "inputs": {
                "input_1":{"connections":[{"node":"1","input":"output_1"}]}
            },          
            "outputs": {
              "output_1": {
                "connections": []
              },
              "output_2": {
                "connections": [{"node":"13","input":"output_1"},
                                {"node":"14","input":"output_1"},
                                {"node":"15","input":"output_1"},
                                {"node":"16","input":"output_1"},
                                {"node":"17","input":"output_1"}]
              }
            },
            "pos_x": 600,
            "pos_y": 700
          },
          "5": {
            "id": 5,
            "name": "IN-CM-CA-TV",
            "data": {},
            "class": "SCH",
            "html": "\n<div>\n<div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i>IN-CM-CA-TV (5)</div>\n<div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\">\nCCTV System\n<div class=\"modal\" style=\"display:none\">\n<div class=\"modal-content\">\n<span class=\"close\" onclick=\"closemodal(event)\">&times;</span></div>\n</div>\n</div>\n</div>\n",
            "typenode": false,
            "inputs": {
                "input_1":{"connections":[{"node":"3","input":"output_1"}]}
            },          
            "outputs": {
              "output_1": {
                "connections": []
              },
              "output_2": {
                "connections": []
              }
            },
            "pos_x": 1000,
            "pos_y": 180
          },
          "6": {
            "id": 6,
            "name": "IN-CM-CA-VI",
            "data": {},
            "class": "SCH",
            "html": "\n<div>\n<div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i>IN-CM-CA-VI (6)</div>\n<div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\">\n Automatic Vehicle Inspection System\n<div class=\"modal\" style=\"display:none\">\n<div class=\"modal-content\">\n<span class=\"close\" onclick=\"closemodal(event)\">&times;</span></div>\n</div>\n</div>\n</div>\n",
            "typenode": false,
            "inputs": {
                "input_1":{"connections":[{"node":"3","input":"output_1"}]}
            },          
            "outputs": {
              "output_1": {
                "connections": []
              },
              "output_2": {
                "connections": []
              }
            },
            "pos_x": 1000,
            "pos_y": 300
          },
          "7": {
            "id": 7,
            "name": "IN-CM-CA-NP",
            "data": {},
            "class": "SCH",
            "html": "\n<div>\n<div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i>IN-CM-CA-NP (7)</div>\n<div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\">\n Automatic Number Plate Recognition (ANPR) System\n<div class=\"modal\" style=\"display:none\">\n<div class=\"modal-content\">\n<span class=\"close\" onclick=\"closemodal(event)\">&times;</span></div>\n</div>\n</div>\n</div>\n",
            "typenode": false,
            "inputs": {
                "input_1":{"connections":[{"node":"3","input":"output_1"}]}
            },          
            "outputs": {
              "output_1": {
                "connections": []
              },
              "output_2": {
                "connections": []
              }
            },
            "pos_x": 1000,
            "pos_y": 450
          },
          "8": {
            "id": 8,
            "name": "IN-CM-MO-CU",
            "data": {},
            "class": "SCH",
            "html": "\n<div>\n<div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i>IN-CM-MO-CU (8)</div>\n<div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\">\n Customer Monitoring System\n<div class=\"modal\" style=\"display:none\">\n<div class=\"modal-content\">\n<span class=\"close\" onclick=\"closemodal(event)\">&times;</span></div>\n</div>\n</div>\n</div>\n",
            "typenode": false,
            "inputs": {
                "input_1":{"connections":[{"node":"2","input":"output_1"}]},
                "input_2":{"connections":[{"node":"18","input":"output_2"}]}
            },          
            "outputs": {
              "output_1": {
                "connections": []
              },
              "output_2": {
                "connections": []
              }
            },
            "pos_x": 1400,
            "pos_y": 260
          },
          "9": {
            "id": 9,
            "name": "IN-CM-MO-ST",
            "data": {},
            "class": "SCH",
            "html": "\n<div>\n<div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i>IN-CM-MO-ST (9)</div>\n<div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\">\n Staff Location Monitoring System\n<div class=\"modal\" style=\"display:none\">\n<div class=\"modal-content\">\n<span class=\"close\" onclick=\"closemodal(event)\">&times;</span></div>\n</div>\n</div>\n</div>\n",
            "typenode": false,
            "inputs": {
                "input_1":{"connections":[{"node":"2","input":"output_1"}]}
            },          
            "outputs": {
              "output_1": {
                "connections": []
              },
              "output_2": {
                "connections": []
              }
            },
            "pos_x": 1400,
            "pos_y": 120
          },
          "10": {
            "id": 10,
            "name": "IN-CM-MO-AC",
            "data": {},
            "class": "SCH",
            "html": "\n<div>\n<div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i>IN-CM-MO-AC (10)</div>\n<div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\">\n Asset/System Condition Monitoring System\n<div class=\"modal\" style=\"display:none\">\n<div class=\"modal-content\">\n<span class=\"close\" onclick=\"closemodal(event)\">&times;</span></div>\n</div>\n</div>\n</div>\n",
            "typenode": false,
            "inputs": {
                "input_1":{"connections":[{"node":"2","input":"output_1"}]}
            },          
            "outputs": {
              "output_1": {
                "connections": []
              },
              "output_2": {
                "connections": []
              }
            },
            "pos_x": 1400,
            "pos_y": -20
          },
          "11": {
            "id": 11,
            "name": "IN-CM-MO-WT",
            "data": {},
            "class": "SCH",
            "html": "\n<div>\n<div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i>IN-CM-MO-WT (11)</div>\n<div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\">\n Weather/Temperature Monitoring System\n<div class=\"modal\" style=\"display:none\">\n<div class=\"modal-content\">\n<span class=\"close\" onclick=\"closemodal(event)\">&times;</span></div>\n</div>\n</div>\n</div>\n",
            "typenode": false,
            "inputs": {
                "input_1":{"connections":[{"node":"2","input":"output_1"}]}
            },          
            "outputs": {
              "output_1": {
                "connections": []
              },
              "output_2": {
                "connections": []
              }
            },
            "pos_x": 1400,
            "pos_y": -160
          },
          "12": {
            "id": 12,
            "name": "IN-CM-MO-OC",
            "data": {},
            "class": "SCH",
            "html": "\n<div>\n<div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i>IN-CM-MO-OC (12)</div>\n<div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\">\n Occupancy Monitoring System\n<div class=\"modal\" style=\"display:none\">\n<div class=\"modal-content\">\n<span class=\"close\" onclick=\"closemodal(event)\">&times;</span></div>\n</div>\n</div>\n</div>\n",
            "typenode": false,
            "inputs": {
                "input_1":{"connections":[{"node":"2","input":"output_1"}]}
            },          
            "outputs": {
              "output_1": {
                "connections": []
              },
              "output_2": {
                "connections": []
              }
            },
            "pos_x": 1400,
            "pos_y": -290
          },
          "13": {
            "id": 13,
            "name": "IN-CM-CT-SC",
            "data": {},
            "class": "SCH",
            "html": "\n<div>\n<div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i>IN-CM-CT-SC (13)</div>\n<div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\">\n Supervisory Control And Data Acquisition (SCADA) \n<div class=\"modal\" style=\"display:none\">\n<div class=\"modal-content\">\n<span class=\"close\" onclick=\"closemodal(event)\">&times;</span></div>\n</div>\n</div>\n</div>\n",
            "typenode": false,
            "inputs": {
                "input_1":{"connections":[{"node":"4","input":"output_1"}]},
                "input_2":{"connections":[{"node":"19","input":"output_2"}]}
            },          
            "outputs": {
              "output_1": {
                "connections": []
              },
              "output_2": {
                "connections": []
              }
            },
            "pos_x": 1400,
            "pos_y": 470
          },
          "14": {
            "id": 14,
            "name": "IN-CM-CT-BM",
            "data": {},
            "class": "SCH",
            "html": "\n<div>\n<div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i>IN-CM-CT-BM (14)</div>\n<div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\">\n Building Management System (BMS) \n<div class=\"modal\" style=\"display:none\">\n<div class=\"modal-content\">\n<span class=\"close\" onclick=\"closemodal(event)\">&times;</span></div>\n</div>\n</div>\n</div>\n",
            "typenode": false,
            "inputs": {
                "input_1":{"connections":[{"node":"4","input":"output_1"}]},
                "input_2":{"connections":[{"node":"20","input":"output_2"}]}
            },          
            "outputs": {
              "output_1": {
                "connections": []
              },
              "output_2": {
                "connections": []
              }
            },
            "pos_x": 1400,
            "pos_y": 610
          },
          "15": {
            "id": 15,
            "name": "IN-CM-CT-EM",
            "data": {},
            "class": "SCH",
            "html": "\n<div>\n<div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i>IN-CM-CT-EM (15)</div>\n<div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\">\n Engineering Management System (EMS) \n<div class=\"modal\" style=\"display:none\">\n<div class=\"modal-content\">\n<span class=\"close\" onclick=\"closemodal(event)\">&times;</span></div>\n</div>\n</div>\n</div>\n",
            "typenode": false,
            "inputs": {
                "input_1":{"connections":[{"node":"4","input":"output_1"}]},
                "input_2":{"connections":[{"node":"20","input":"output_2"}]}
            },          
            "outputs": {
              "output_1": {
                "connections": []
              },
              "output_2": {
                "connections": []
              }
            },
            "pos_x": 1400,
            "pos_y": 760
          },
          "16": {
            "id": 16,
            "name": "IN-CM-CT-SI",
            "data": {},
            "class": "SCH",
            "html": "\n<div>\n<div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i>IN-CM-CT-SI (16)</div>\n<div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\">\n Station Information Management System (SIMS) \n<div class=\"modal\" style=\"display:none\">\n<div class=\"modal-content\">\n<span class=\"close\" onclick=\"closemodal(event)\">&times;</span></div>\n</div>\n</div>\n</div>\n",
            "typenode": false,
            "inputs": {
                "input_1":{"connections":[{"node":"4","input":"output_1"}]},
                "input_2":{"connections":[{"node":"21","input":"output_2"}]}
            },          
            "outputs": {
              "output_1": {
                "connections": []
              },
              "output_2": {
                "connections": []
              }
            },
            "pos_x": 1400,
            "pos_y": 990
          },
          "17": {
            "id": 17,
            "name": "IN-CM-CT-ME",
            "data": {},
            "class": "SCH",
            "html": "\n<div>\n<div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i>IN-CM-CT-ME (17)</div>\n<div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\">\n Metering System (MS) \n<div class=\"modal\" style=\"display:none\">\n<div class=\"modal-content\">\n<span class=\"close\" onclick=\"closemodal(event)\">&times;</span></div>\n</div>\n</div>\n</div>\n",
            "typenode": false,
            "inputs": {
                "input_1":{"connections":[{"node":"4","input":"output_1"}]},
                "input_2":{"connections":[{"node":"20","input":"output_2"}]}
            },          
            "outputs": {
              "output_1": {
                "connections": []
              },
              "output_2": {
                "connections": []
              }
            },
            "pos_x": 1400,
            "pos_y": 890
          },
          "18": {
            "id": 18,
            "name": "IN-EXT-3RD-WF",
            "data": {},
            "class": "SCH",
            "html": "\n <div>\n <div class=\"title-box\"><i class=\"fas fa-code-branch\"></i> IN-EXT-3RD-WF (18)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Weather Forecasting Systems \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
            "typenode": false,
            "inputs": {},          
            "outputs": {
              "output_1": {
                "connections": []
              },
              "output_2":{
                  "connections":[{"node":"11","output":"input_2"}]
              }
            },
            "pos_x": -200,
            "pos_y": 800
          },
          "19": {
            "id": 19,
            "name": "IN-EN",
            "data": {},
            "class": "SCH",
            "html": "\n <div>\n <div class=\"title-box\"><i class=\"fas fa-code-branch\"></i> IN-EN (19)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Power / Energy System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
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
            "pos_y": 940
          },
          "20": {
            "id": 20,
            "name": "IN-BLD-BS",
            "data": {},
            "class": "SCH",
            "html": "\n <div>\n <div class=\"title-box\"><i class=\"fas fa-code-branch\"></i> IN-BLD-BS (20)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Building Services System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
            "typenode": false,
            "inputs": {},          
            "outputs": {
                  "output_1":{ "connections":[]},
                  "output_2":{ "connections":[{"node":"14","output":"input_2"},
                                              {"node":"17","output":"input_2"},
                                              {"node":"15","output":"input_2"}] }},
            "pos_x": -200,
            "pos_y": 1060
          },
          "21": {
            "id": 21,
            "name": "IN-BLD-ST",
            "data": {},
            "class": "SCH",
            "html": "\n <div>\n <div class=\"title-box\"><i class=\"fas fa-code-branch\"></i> IN-BLD-ST (21)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n   Station System \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
            "typenode": false,
            "inputs": {},          
            "outputs": {
              "output_1": {
                "connections":[]
              },
              "output_2": {
                "connections":[{"node":"16","output":"input_2"}]
              }
            },
            "pos_x": -200,
            "pos_y": 1160
          }

    }
}