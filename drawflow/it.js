var it= {
    "data": {
        "1": {
            "id": 1,
            "name": "IN-IT",
            "data": {},
            "class": "SCH",
            "html": "\n <div>\n <div class=\"title-box-orange\"><i class=\"fas fa-code-branch\"></i> IN-IT (1)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  I.T. System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
            "typenode": false,
            "inputs": {},          
            "outputs": {
              "output_1": {"connections":[
                {
                    "node":"2",
                    "output":"input_1"
                },
                {
                    "node":"3",
                    "output":"input_1"
                }
            ]},
              "output_2": {"connections":[]}
            },
            "pos_x": 200,
            "pos_y": 200
          },
        "2": {
            "id": 2,
            "name": "IN-IT-CORP",
            "data": {},
            "class": "SCH",
            "html": "\n <div>\n <div class=\"title-box-darkblue\"><i class=\"fas fa-code-branch\"></i> IN-IT-CORP (2)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Corporate I.T. System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
            "typenode": false,
            "inputs": {
                "input_1": {"connections":[
                    {
                        "node":"1",
                        "input":"output_1"
                    }
                ]},
                "input_2": {"connections":[]}
            },          
            "outputs": {
                "output_1": {"connections":[]},
                "output_2": {"connections":[]}
            },
            "pos_x": 550,
            "pos_y": 120
        },
        "3": {
            "id": 3,
            "name": "IN-IT-CUST",
            "data": {},
            "class": "SCH",
            "html": "\n <div>\n <div class=\"title-box-darkblue\"><i class=\"fas fa-code-branch\"></i> IN-IT-CUST (3)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Customer I.T. System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
            "typenode": false,
            "inputs": {
                "input_1": {"connections":[
                    {
                        "node":"1",
                        "input":"output_1"
                    }
                ]},
                "input_2": {"connections":[]}
            },          
            "outputs": {
                "output_1": {"connections":[{"node":"4","output":"input_1"},
                                            {"node":"5","output":"input_1"},
                                            {"node":"6","output":"input_1"},
                                            {"node":"7","output":"input_1"},
                                            {"node":"8","output":"input_1"},
                                            {"node":"9","output":"input_1"},
                                            {"node":"10","output":"input_1"}]},
                "output_2": {"connections":[]}
            },
            "pos_x": 550,
            "pos_y": 260
        },
        "4": {
            "id": 4,
            "name": "IN-IT-CUST-DS",
            "data": {},
            "class": "SCH",
            "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-IT-CUST-DS (4)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Digital Screen System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
            "typenode": false,
            "inputs": {
                "input_1": {"connections":[
                    {
                        "node":"3",
                        "input":"output_1"
                    }
                ]},
                "input_2": {"connections":[]}
            },          
            "outputs": {
                "output_1": {"connections":[]},
                "output_2": {"connections":[]}
            },
            "pos_x": 900,
            "pos_y": 0
        },
        "5": {
            "id": 5,
            "name": "IN-IT-CUST-HP",
            "data": {},
            "class": "SCH",
            "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-IT-CUST-HP (5)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Help Point System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
            "typenode": false,
            "inputs": {
                "input_1": {"connections":[
                    {
                        "node":"3",
                        "input":"output_1"
                    }
                ]},
                "input_2": {"connections":[]}
            },          
            "outputs": {
                "output_1": {"connections":[]},
                "output_2": {"connections":[]}
            },
            "pos_x": 900,
            "pos_y": 120
        },
        "6": {
            "id": 6,
            "name": "IN-IT-CUST-PY",
            "data": {},
            "class": "SCH",
            "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-IT-CUST-PY (6)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Payment System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
            "typenode": false,
            "inputs": {
                "input_1": {"connections":[
                    {
                        "node":"3",
                        "input":"output_1"
                    }
                ]},
                "input_2": {"connections":[]}
            },          
            "outputs": {
                "output_1": {"connections":[]},
                "output_2": {"connections":[]}
            },
            "pos_x": 900,
            "pos_y": 240
        },
        "7": {
            "id": 7,
            "name": "IN-IT-CUST-SF",
            "data": {},
            "class": "SCH",
            "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-IT-CUST-SF (7)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Satisfaction System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
            "typenode": false,
            "inputs": {
                "input_1": {"connections":[
                    {
                        "node":"3",
                        "input":"output_1"
                    }
                ]},
                "input_2": {"connections":[]}
            },          
            "outputs": {
                "output_1": {"connections":[]},
                "output_2": {"connections":[]}
            },
            "pos_x": 900,
            "pos_y": 360
        },
        "8": {
            "id": 8,
            "name": "IN-IT-CUST-KO",
            "data": {},
            "class": "SCH",
            "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-IT-CUST-KO (8)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Kiosk System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
            "typenode": false,
            "inputs": {
                "input_1": {"connections":[
                    {
                        "node":"3",
                        "input":"output_1"
                    }
                ]},
                "input_2": {"connections":[]}
            },          
            "outputs": {
                "output_1": {"connections":[]},
                "output_2": {"connections":[]}
            },
            "pos_x": 900,
            "pos_y": 480
        },
        "9": {
            "id": 9,
            "name": "IN-IT-CUST-RPOS",
            "data": {},
            "class": "SCH",
            "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-IT-CUST-RPOS (9)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Retail Point Of Sale System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
            "typenode": false,
            "inputs": {
                "input_1": {"connections":[
                    {
                        "node":"3",
                        "input":"output_1"
                    }
                ]},
                "input_2": {"connections":[]}
            },          
            "outputs": {
                "output_1": {"connections":[]},
                "output_2": {"connections":[]}
            },
            "pos_x": 900,
            "pos_y": 600
        },
        "10": {
            "id": 10,
            "name": "IN-IT-CUST-EN",
            "data": {},
            "class": "SCH",
            "html": "\n <div>\n <div class=\"title-box-lightblue\"><i class=\"fas fa-code-branch\"></i> IN-IT-CUST-EN (10)</div>\n <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\"> \n  Entertainment System  \n   <div class=\"modal\" style=\"display:none\">\n <div class=\"modal-content\"> \n  <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>  </div>\n </div>\n  </div>\n </div>\n            ",
            "typenode": false,
            "inputs": {
                "input_1": {"connections":[
                    {
                        "node":"3",
                        "input":"output_1"
                    }
                ]},
                "input_2": {"connections":[]}
            },          
            "outputs": {
                "output_1": {"connections":[]},
                "output_2": {"connections":[]}
            },
            "pos_x": 900,
            "pos_y": 720
        }
    }
}