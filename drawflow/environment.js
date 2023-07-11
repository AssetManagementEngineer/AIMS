var environ = {
    "data": {
      "1": {
        "id": 1,
        "name": "IN-ENV",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box-orange\"><i class=\"fas fa-code-branch\"></i> IN-ENV (1)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Environment System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {},          
        "outputs": {
          "output_1": {
            "connections": [
              {
                "node":"2",
                "output":"input_1"
              }
            ]
          }
        },
        "pos_x": 201,
        "pos_y": 214
      },
      "2": {
        "id": 2,
        "name": "IN-ENV-LAN",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box-darkblue\"><i class=\"fas fa-code-branch\"></i> IN-ENV-LAN (2)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Landscape System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
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
            "connections": []
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
          "output_2": {
            "connections": []
          }
        },
        "pos_x": 1025,
        "pos_y": 140
      },
      "3": {
        "id": 3,
        "name": "IN-ENV-LAN-OS",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-ENV-LAN-OS (3)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Public Open Space &amp; Recreation System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
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
          "input_2": {
            "connections": []
          }
        },          
        "outputs": {
          "output_1": {
            "connections": [{}]
          },
          "output_2": {
            "connections": []
          }
        },
        "pos_x": 1460,
        "pos_y": 10
      },
      "4": {
        "id": 4,
        "name": "IN-ENV-LAN-PS",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-ENV-LAN-PS (4)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Planting System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
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
          "input_2": {
            "connections": [{
              "node":"114",
              "input":"output_2"
            }]
          }
        },          
        "outputs": {
          "output_1": {
            "connections": []
          }
        },
        "pos_x": 1450,
        "pos_y": 260
      },
      "5": {
        "id": 5,
        "name": "IN-ENV-LAN-GI",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-ENV-LAN-GI (5)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Green Infrastructure  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
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
        "pos_x": 1450,
        "pos_y": 150
      },
      "6": {
        "id": 6,
        "name": "IN-ENV-ECO",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box-darkblue\"><i class=\"fas fa-code-branch\"></i> IN-ENV-ECO (6)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Ecology System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
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
        "pos_x": 580,
        "pos_y": 420
      },
      "7": {
        "id": 7,
        "name": "IN-ENV-ECO-BIO",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-ENV-ECO-BIO (7)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Biodiversity Net Gain System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1": {
            "connections": [
               {
                "node": "6",
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
        "pos_x": 920,
        "pos_y": 280
      },
      "8": {
        "id": 8,
        "name": "IN-ENV-ECO-HC",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-ENV-ECO-HC (8)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Habitat Connectivity System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1": {
            "connections": [
               {
                "node": "6",
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
        "pos_x": 915,
        "pos_y": 420
      },
      "9": {
        "id": 9,
        "name": "IN-ENV-ECO-MC",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-ENV-ECO-MC (9)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Mitigation &amp; Compensation System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1": {
            "connections": [
               {
                "node": "6",
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
        "pos_x": 920,
        "pos_y": 550
      },
      "10": {
        "id": 10,
        "name": "IN-ENV-NM",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box-darkblue\"><i class=\"fas fa-code-branch\"></i> IN-ENV-NM (10)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Noise Mitigation System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
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
            "connections": [{
              "node":"114",
              "input":"output_2"
            }]
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
        "pos_x": 580,
        "pos_y": 780
      },
      "11": {
        "id": 11,
        "name": "IN-ENV-CO",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box-darkblue\"><i class=\"fas fa-code-branch\"></i> IN-ENV-CO (11)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Carbon Offsetting System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
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
        "pos_x": 580,
        "pos_y": 530
      },
      "12": {
        "id": 12,
        "name": "IN-ENV-CFS",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box-darkblue\"><i class=\"fas fa-code-branch\"></i> IN-ENV-CFS (12)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Compensatory Flood Storage System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
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
        "pos_x": 580,
        "pos_y": 640
      },
      "114": {
        "id": 114,
        "name": "IN-STR-IN-BND",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box\"><i class=\"fas fa-code-branch\"></i> IN-STR-IN-BND (114)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Boundary Protection System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {},          
        "outputs": {
          "output_1": {
            "connections": [{}]
          },
          "output_2": {
            "connections": [{
              "node":"10",
              "output":"input_2"
            },
            {
              "node":"4",
              "output":"input_2"
            }]
          }
        },
        "pos_x": 210,
        "pos_y": 890
      }
    }
  }