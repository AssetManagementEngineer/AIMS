var cust = {
    "data": {
      "1": {
        "id": 1,
        "name": "IN-CU",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box\"><i class=\"fas fa-code-branch\"></i> IN-CU (1)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n   Customer System \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {},          
        "outputs": {
          "output_1": {
            "connections": [
              {
              "node": "2",
              "output":"input_1"
            } , 
            {
              "node": "3",
              "output":"input_1"
            }, 
            {
              "node": "4",
              "output":"input_1"
            } 
          ]
          },
          "output_2": {
            "connections": []
          }
        },
        "pos_x": 207,
        "pos_y": 284
      },
      "2": {
        "id": 2,
        "name": "IN-CU-FT",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box\"><i class=\"fas fa-code-branch\"></i> IN-CU-FT (2)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Fare Transaction System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
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
                "node": "9",
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
                "node":"6",
                "output":"input_1"
              } 
            ]
          },
          "output_2": {
            "connections": []
          }
        },
        "pos_x": 616,
        "pos_y": 472
      },
      "3": {
        "id": 3,
        "name": "IN-CU-IN",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box\"><i class=\"fas fa-code-branch\"></i> IN-CU-IN (3)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Customer Information System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
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
                "node":"50",
                "output":"input_1"
              },
              {
                "node":"51",
                "output":"input_1"
              } 
            ]
          },
          "output_2": {
            "connections": []
          }
        },
        "pos_x": 608,
        "pos_y": 312
      },
      "4": {
        "id": 4,
        "name": "IN-CU-JRN",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box\"><i class=\"fas fa-code-branch\"></i> IN-CU-JRN (4)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Customer Journey Planning System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
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
            "connections": [{} ]
          },
          "output_2": {
            "connections": []
          }
        },
        "pos_x": 596,
        "pos_y": 155
      },
      "5": {
        "id": 5,
        "name": "IN-CU-FT-POS",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box\"><i class=\"fas fa-code-branch\"></i> IN-CU-FT-POS (5)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n Retail Point Of Sale System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
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
          }},
        "pos_x": 975,
        "pos_y": 756
      },
      "6": {
        "id": 6,
        "name": "IN-CU-FT-REV",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box\"><i class=\"fas fa-code-branch\"></i> IN-CU-FT-REV (6)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n Revenue Protection System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
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
        "outputs": {"output_1": {
            "connections": []
          },
          "output_2": {
            "connections": []
          }},
        "pos_x": 942,
        "pos_y": 597
      },
      "7": {
        "id": 7,
        "name": "IN-CU-IN-ONB",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box\"><i class=\"fas fa-code-branch\"></i> IN-CU-IN-ONB (7)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n Onboard Customer Information System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
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
        "outputs": {"output_1": {
            "connections": []
          },
          "output_2": {
            "connections": []
          }},
        "pos_x": 932,
        "pos_y": 212
      },
      "8": {
        "id": 8,
        "name": "IN-CU-IN-STN",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box\"><i class=\"fas fa-code-branch\"></i> IN-CU-IN-STN (8)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n Station Customer Information System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
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
            "connections":[
            {
                "node":"9",
                "input":"output_2"
              }
            ]
          }
        },          
        "outputs": {"output_1": {
            "connections": []
          },
          "output_2": {
            "connections": []
          }},
        "pos_x": 933,
        "pos_y": 408
      },
      "9": {
        "id": 9,
        "name": "IN-BLD-ST",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box\"><i class=\"fas fa-code-branch\"></i> IN-BLD-ST (9)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n   Station System \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {},          
        "outputs": {
          "output_1": {
            "connections":[]
          },
          "output_2": {
            "connections":[
              {
              "node":"8",
              "output": "input_2"
            },
            {
              "node":"2",
              "output": "input_2"
            }
          ]
          }
        },
        "pos_x": 225,
        "pos_y": 731
      }
    }
  }