var geo= {
    "data": {
        "100": {
            "id": 100,
            "name": "IN-GT",
            "data": {},
            "class": "SCH",
            "html": "\n <div>\n <div class=\"title-box-orange\"><i class=\"fas fa-code-branch\"></i> IN-GT (100)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Geo-Technical System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
            "typenode": false,
            "inputs": {},          
            "outputs": {
              "output_1": {
                "connections": [
                  {
                    "node":"101",
                    "output":"input_1"
                  },
                  {
                    "node":"102",
                    "output":"input_1"
                  }
                ]
              }
            },
            "pos_x": 100,
            "pos_y": 242
          },
          "101": {
            "id": 101,
            "name": "IN-GT-EW",
            "data": {},
            "class": "SCH",
            "html": "\n <div>\n <div class=\"title-box-darkblue\"><i class=\"fas fa-code-branch\"></i> IN-GT-EW (101)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Earthwork System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
            "typenode": false,
            "inputs": {
              "input_1": {
                "connections": [
                   {
                    "node": "100",
                    "input": "output_1"
                   }
                ]
              },
              "input_2": {
                "connections":[
                    {
                        "node":"115",
                        "input":"output_2"
                    },
                    {
                        "node":"28",
                        "input":"output_2"
                    },
                    {
                      "node":"117",
                      "input":"output_1"
                    },
                    {
                      "node":"11",
                      "input":"output_2"
                    }
                ]
              }
            },          
            "outputs": {
              "output_1": {
                "connections": [
                  {
                    "node":"103",
                    "output":"input_1"
                  },
                  {
                    "node":"104",
                    "output":"input_1"
                  }
                ]
              }
            },
            "pos_x": 500,
            "pos_y": 285
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
                "connections": [
                   {
                    "node": "100",
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
            "pos_x": 500,
            "pos_y": 145
          },
          "103": {
            "id": 103,
            "name": "IN-GT-EW-CUT",
            "data": {},
            "class": "SCH",
            "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-GT-EW-CUT (103)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Cutting System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
            "typenode": false,
            "inputs": {
              "input_1": {
                "connections": [
                   {
                    "node": "101",
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
            "pos_x": 950,
            "pos_y": 170
          },
          "104": {
            "id": 104,
            "name": "IN-GT-EW-EMB",
            "data": {},
            "class": "SCH",
            "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-GT-EW-EMB (104)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Embankment System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
            "typenode": false,
            "inputs": {
              "input_1": {
                "connections": [
                   {
                    "node": "101",
                    "input": "output_1"
                   }
                ]
              },
              "input_2":{
                "connections":[
                    {
                        "node":"33",
                        "input":"output_2"
                    }
                ]
              }
            },          
            "outputs": {
              "output_1": {
                "connections": [{}]
              }
            },
            "pos_x": 950,
            "pos_y": 400
          },
          "105": {
            "id": 105,
            "name": "IN-GT-EW-APP",
            "data": {},
            "class": "SCH",
            "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-GT-EW-APP (105)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Approach Earthworks System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
            "typenode": false,
            "inputs": {
              "input_1": {
                "connections": [
                   {
                    "node": "101",
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
            "pos_x": 950,
            "pos_y": 275
          },
          "115": {
            "id": 115,
            "name": "IN-STR-IN-BRG",
            "data": {},
            "class": "SCH",
            "html": "\n <div>\n <div class=\"title-box\"><i class=\"fas fa-code-branch\"></i> IN-STR-IN-BRG (115)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Bridge System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
            "typenode": false,
            "inputs": {},          
            "outputs": {
              "output_1": {
                "connections": [{}]
              },
              "output_2":{
                "connections":[
                    {
                        "node":"101",
                        "output":"input_2"
                    }
                ]
              }
            },
            "pos_x": 100,
            "pos_y": 430
          },
          "33": {
            "id": 33,
            "name": "IN-GD-PW",
            "data": {},
            "class": "SCH",
            "html": "\n <div>\n <div class=\"title-box\"><i class=\"fas fa-code-branch\"></i> IN-GD-PW (33)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Permanent Way System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
            "typenode": false,
            "inputs": {},          
            "outputs": {
              "output_1": {
                "connections": [
                    {
                        "node":"104",
                        "output":"input_2"
                    }
                ]
              },
              "output_2": {
                "connections": [
                  {
                    "node":"34",
                    "output":"input_2"
                  }
                ]
              }
            },
            "pos_x": 100,
            "pos_y": 920
          },
          "28": {
            "id": 28,
            "name": "IN-ENV-LAN-PS",
            "data": {},
            "class": "SCH",
            "html": "\n <div>\n <div class=\"title-box\"><i class=\"fas fa-code-branch\"></i> IN-ENV-LAN-PS (28)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Planting System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
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
                        "node":"101",
                        "output":"input_2"
                    }
                ]
              }
            },
            "pos_x": 100,
            "pos_y": 550
          },
          "117": {
            "id": 117,
            "name": "IN-STR-IN-RW",
            "data": {},
            "class": "SCH",
            "html": "\n <div>\n <div class=\"title-box\"><i class=\"fas fa-code-branch\"></i> IN-STR-IN-RW (117)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Retaining Wall System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
            "typenode": false,
            "inputs": {},          
            "outputs": {
              "output_1": {
                "connections": [{}]
              },
              "output_2": {
                "connections": [
                    {
                        "node":"101",
                        "output":"input_2"
                    }
                ]
              }
            },
            "pos_x": 100,
            "pos_y": 680
          },
          "11": {
            "id": 11,
            "name": "IN-DR-RL-EW",
            "data": {},
            "class": "SCH",
            "html": "\n <div>\n <div class=\"title-box\"><i class=\"fas fa-code-branch\"></i> IN-DR-RL-EW (11)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Earthworks Drainage System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
            "typenode": false,
            "inputs": {},          
            "outputs": {
              "output_1": {
                "connections": []
              },
              "output_2":{
                "connections":[
                  {
                    "node":"101",
                    "output":"input_2"
                  }
                ]
              }
            },
            "pos_x": 100,
            "pos_y": 780
          }
    }
}