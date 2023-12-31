var rollingStock = {
    "data": {
      "1": {
        "id": 1,
        "name": "IN-RS",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box-orange\"><i class=\"fas fa-code-branch\"></i> IN-RS (1)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Rolling Stock System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1":{"connections":[]},
          "input_2":{"connections":[{"node":"6","input":"output_2"}]}
        },          
        "outputs": {
          "output_1": {
            "connections": [
              {
                "node":"2",
                "output":"input_1"
              },
              {
                "node":"3",
                "output":"input_1"
              }
            ]
          },
          "output_2":{"connections":[]}
        },
        "pos_x": 200,
        "pos_y": 294
      },
      "2": {
        "id": 2,
        "name": "IN-RS-P",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box-darkblue\"><i class=\"fas fa-code-branch\"></i> IN-RS-P (2)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Passenger Rolling Stock System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1":{
            "connections":[
              {
                "node":"1",
                "input":"output_1"
              }]
          },
        "input_2" :{
          "connections":[
            {
              "node":"4",
              "input":"output_2"
            },
            {
              "node":"5",
              "input":"output_2"
            }
          ]
        }},          
        "outputs": {
          "output_1": {
            "connections": []
          },
          "output_2":{"connections":[]}
        },
        "pos_x": 550,
        "pos_y": 200
      },
      "3": {
        "id": 3,
        "name": "IN-RS-F",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box-darkblue\"><i class=\"fas fa-code-branch\"></i> IN-RS-F (3)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Freight Rolling Stock System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {
          "input_1":{
            "connections":[
              {
                "node":"1",
                "input":"output_1"
              }]
          }},          
        "outputs": {
          "output_1": {
            "connections": []
          },
          "output_2":{"connections":[]}
        },
        "pos_x": 550,
        "pos_y": 380
      },
      "4": {
        "id": 4,
        "name": "IN-CCS-TMS-ATS",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box\"><i class=\"fas fa-code-branch\"></i> IN-CCS-TMS-ATS (4)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n Automatic Train Service (ATS) System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {},          
        "outputs": {"output_1":{"connections":[]},
                    "output_2":{"connections":[
                      {
                        "node":"2",
                        "output":"input_2"
                      }
                    ]}},
        "pos_x": -200,
        "pos_y": 0
      },
      "5": {
        "id": 5,
        "name": "IN-CCS-TCS-OB",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box\"><i class=\"fas fa-code-branch\"></i> IN-CCS-TCS-OB (5)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n ETCS Onboard System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {},          
        "outputs": {"output_1":{"connections":[]},
                    "output_2":{"connections":[
                      {
                        "node":"2",
                        "output":"input_2"
                      }
                    ]}},
        "pos_x": -200,
        "pos_y": 140
      },
      "6": {
        "id": 6,
        "name": "IN-EXT-US-PC",
        "data": {},
        "class": "SCH",
        "html": "\n <div>\n <div class=\"title-box\"><i class=\"fas fa-code-branch\"></i> IN-EXT-US-PC (6)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Petrochemical Infrastructure Network \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
        "typenode": false,
        "inputs": {},          
        "outputs": {
          "output_1": {"connections": []},
          "output_2": {"connections": [{"node":"1","output":"input_2"}]
          }
        },
        "pos_x": -200,
        "pos_y": 280
      }
    }
}