'use strict';

(function($){

    $(function() {
  
      var datascource = {
        'name': 'IN',
        'title': 'Infrastructure Systems',
        'className': 'INFRA',
        'children': [
          { 'name': 'IN-BLD', 'title': 'Buildings & Stations System', 'className': 'IN-BLD',
            'children': [
              { 'name': 'IN-BLD-ANC', 'title': 'Anciliary Building System', 'className': 'IN-BLD_A',
              'children': [
                { 'name': 'IN-BLD-ANC-BSS', 'title': 'Building Services System', 'className': 'IN-BLD_B' },
                { 'name': 'IN-BLD-ANC-URS', 'title': 'Urban Realm System', 'className': 'IN-BLD_B' }
              ]},
              { 'name': 'IN-BLD-DPT', 'title': 'Depot Building System', 'className': 'IN-BLD_A',
                'children': [
                  { 'name': 'IN-BLD-DPT-BSS', 'title': 'Building Services System', 'className': 'IN-BLD_B' },
                  { 'name': 'IN-BLD-DPT-STB', 'title': 'Stabling System', 'className': 'IN-BLD_B' },
                  { 'name': 'IN-BLD-DPT-URS', 'title': 'Urban Realm System', 'className': 'IN-BLD_B' }
                ]
              },
              { 'name': 'IN-BLD-FRS', 'title': 'Freight Site System', 'className': 'IN-BLD_A',
                'children': [
                  { 'name': 'IN-BLD-FRS-BSS', 'title': 'Building Services System', 'className': 'IN-BLD_B' },
                  { 'name': 'IN-BLD-FRS-URS', 'title': 'Urban Realm System', 'className': 'IN-BLD_B' }
                ]
              },
              { 'name': 'IN-BLD-NMC', 'title': 'Network Management Control Centre System', 'interfaces':'IN-CCS-TMS', 'interfaceClass':'1eae13', 'className': 'IN-BLD_A-IN-CCS_A',
                'children': [
                  { 'name': 'IN-BLD-NMC-BSS', 'title': 'Building Services System', 'className': 'IN-BLD_B' },
                  { 'name': 'IN-BLD-NMC-URS', 'title': 'Urban Realm System', 'className': 'IN-BLD_B' }
                ]
              },
              { 'name': 'IN-BLD-ST', 'title': 'Station System','interfaces':'IN-CU-FT &amp; IN-CU-IN-STN', 'className': 'IN-BLD_ST-IN-CU-FT-IN-CU-IN-STN',
                'children': [
                  { 'name': 'IN-BLD-ST-BSS', 'title': 'Building Services System', 'className': 'IN-BLD_B' },
                  { 'name': 'IN-BLD-ST-FAC', 'title': 'Facilities / Amenities System', 'className': 'IN-BLD_B' },
                  { 'name': 'IN-BLD-ST-PLF', 'title': 'Platform System', 'className': 'IN-BLD_B' },
                  { 'name': 'IN-BLD-ST-URS', 'title': 'Urban Realm System', 'className': 'IN-BLD_B' }
                ]
              }
            ]
          },
          { 'name': 'IN-CCS', 'title': 'Command,Control & Signalling', 'className': 'IN-CCS',
            'children': [
              { 'name': 'IN-CCS-SIG', 'title': 'Conventional Signalling System','interfaces':'IN-STR-IN-LVL', 'className': 'IN-CCS-SIG-IN-STR-IN-LVL',
              'children': [
                { 'name': 'IN-CCS-SIG-INT', 'title': 'Interlocking System', 'className': 'IN-CCS_B' },
                { 'name': 'IN-CCS-SIG-LC', 'title': 'Level Crossing System', 'className': 'IN-CCS_B' },
                { 'name': 'IN-CCS-SIG-POS', 'title': 'Point Operating System', 'interfaces':'IN-GD-PW-SC', 'className': 'IN-CCS-SIG-POS-IN-GD-PW-SC' },
                { 'name': 'IN-CCS-SIG-ROC', 'title': 'Rail Operating Centre System', 'className': 'IN-CCS_B' },
                { 'name': 'IN-CCS-SIG-SPT', 'title': 'Signals Post Telephone System', 'className': 'IN-CCS_B' },
                { 'name': 'IN-CCS-SIG-SS', 'title': 'Signals &amp; Signs System','interfaces':'IN-STR-AUX-GNT', 'className': 'IN-CCS-SIG-SS-IN-STR-AUX-GNT' },
                { 'name': 'IN-CCS-SIG-TDS', 'title': 'Train Detection System', 'className': 'IN-CCS_B' },
                { 'name': 'IN-CCS-SIG-TRTS', 'title': 'TRTS System', 'className': 'IN-CCS_B' },
                { 'name': 'IN-CCS-SIG-WS', 'title': 'TPWS/AWS System', 'className': 'IN-CCS_B' }
              ]},
              { 'name': 'IN-CCS-TCS', 'title': 'ETCS System','interfaces':'IN-TEL-XXXX-W', 'className': 'IN-CCS-TCS-IN-TEL-XXXX-W',
                'children': [
                  { 'name': 'IN-CCS-TCS-OB', 'title': 'ETCS Onboard System', 'className': 'IN-CCS_B' },
                  { 'name': 'IN-CCS-TCS-TR', 'title': 'ETCS Trackside System', 'className': 'IN-CCS_B' }
                ]
              },
              { 'name': 'IN-CCS-TMS', 'title': 'Traffic Management System','interfaces':'IN-BLD-NMC', 'interfaceClass':'3e9cca', 'className': 'IN-CCS_A-IN-BLD_A',
                'children': [
                  { 'name': 'IN-CCS-TMS-ATS', 'title': 'Automatic Train Service (ATS) System', 'className': 'IN-CCS_B' }
                ]
              }
            ]
          },
          {'name': 'IN-CU', 'title': 'Customer Systems', 'className': 'IN-CU',
          'children':[
            {'name':'IN-CU-FT', 'title':'Fare Transaction System','interfaces':'IN-BLD-ST', 'className':'IN-CU-FT-IN-BLD_ST',
            'children':[
                {'name':'IN-CU-FT-POS','title':'Retail Point Of Sale System','className':'IN-CU_B'},
                {'name':'IN-CU-FT-REV','title':'Revenue Protection System','className':'IN-CU_B'}
                ]
            },
            {'name':'IN-CU-IN','title':'Customer Information System','className':'IN-CU_A',
            'children':[
                {'name':'IN-CU-IN-ONB','title':'Onboard Customer Information System','className':'IN-CU_B'},
                {'name':'IN-CU-IN-STN','title':'Station Customer Information System','interfaces':'IN-BLD-ST', 'className':'IN-CU-IN-STN-IN-BLD_ST'}
            ]
            },
            {'name':'IN-CU-JRN','title':'Customer Journey Planning System','className':'IN-CU_A'}
          ]
          },
          {'name':'IN-DR','title':'Drainage System','className':'IN-DR',
          'children':[
            {'name':'IN-DR-BLD','title':'Buildings &amp; Stations Drainage System','className':'IN-DR_A',
        'children':[
            {'name':'IN-DR-BLD-PS','title':'Pumping Station System','className':'IN-DR_B'}
        ]},
        {'name':'IN-DR-HW','title':'Highway Drainage System','className':'IN-DR_A',
        'children':[
            {'name':'IN-DR-HW-PS','title':'Pumping Staion System','className':'IN-DR_B'}
        ]},
        {'name':'IN-DR-LND','title':'Land Drainage System','className':'IN-DR_A',
    'children':[
        {'name':'IN-DR-LND-PS','title':'Pumping Station System','className':'IN-DR_B'}
        ] },
        {'name':'IN-DR-RL','title':'Railway Drainage System','className':'IN-DR_A',
    'children':[
        {'name':'IN-DR-RL-EW','title':'Earthworks Drainage System','className':'IN-DR_B'},
        {'name':'IN-DR-RL-PS','title':'Pumping Station System','className':'IN-DR_B'},
        {'name':'IN-DR-RL-STR','title':'Civils &amp; Structures Drainage System','className':'IN-DR_B'},
        {'name':'IN-DR-RL-TRA','title':'Track Drainage System','interfaces':'IN-GD-PW', 'className':'IN-DR-RL-TRA-IN-GD-PW'}
        ]}
          ]
          },
          {'name':'IN-EN','title':'Power/Energy System','className':'IN-EN',
        'children':[
            {'name':'IN-EN-DNO','title':'Distribution System','className':'IN-EN_A',
        'children':[
            {'name':'IN-EN-DNO-ACDC','title':'AC/DC Conversion System','className':'IN-EN_B'},
            {'name':'IN-EN-DNO-BND','title':'Earthing &amp; Bonding System','className':'IN-EN_B'},
            {'name':'IN-EN-DNO-CBL','title':'HV/LV Cable System','interfaces':'IN-STR-AUX-WMS', 'className':'IN-EN-XXX-CBL-IN-STR-AUX-WMS'},
            {'name':'IN-EN-DNO-ISO','title':'Protection/Isolation System','className':'IN-EN_B'},
            {'name':'IN-EN-DNO-NT','title':'Non-Traction Power System','className':'IN-EN_B'},
            {'name':'IN-EN-DNO-SW','title':'Changeover/Switching System','className':'IN-EN_B'},
            {'name':'IN-EN-DNO-TRX','title':'Transformer System','className':'IN-EN_B'}
        ]},
            {'name':'IN-EN-EWR','title':'Generation System','className':'IN-EN_A',
            'children':[
                {'name':'IN-EN-EWR-ACDC','title':'AC/DC Conversion System','className':'IN-EN_B'},
                {'name':'IN-EN-EWR-BND','title':'Earthing &amp; Bonding System','className':'IN-EN_B'},
                {'name':'IN-EN-EWR-CBL','title':'HV/LV Cable System','interfaces':'IN-STR-AUX-WMS','className':'IN-EN-XXX-CBL-IN-STR-AUX-WMS'},
                {'name':'IN-EN-EWR-ISO','title':'Protection/Isolation System','className':'IN-EN_B'},
                {'name':'IN-EN-EWR-PWR','title':'Power Storage System','className':'IN-EN_B'},
                {'name':'IN-EN-EWR-SW','title':'Changeover/Switching System','className':'IN-EN_B'},
                {'name':'IN-EN-EWR-TRX','title':'Transformer System','className':'IN-EN_B'}
            ]},
            {'name':'IN-EN-TNO','title':'Transmission System','className':'IN-EN_A',
            'children':[
                {'name':'IN-EN-TNO-ACDC','title':'AC/DC Conversion System','className':'IN-EN_B'},
                {'name':'IN-EN-TNO-BND','title':'Earthing &amp; Bonding System','className':'IN-EN_B'},
                {'name':'IN-EN-TNO-CBL','title':'HV/LV Cable System','interfaces':'IN-STR-AUX-WMS','className':'IN-EN-XXX-CBL-IN-STR-AUX-WMS'},
                {'name':'IN-EN-TNO-ISO','title':'Protection/Isolation System','className':'IN-EN_B'},
                {'name':'IN-EN-TNO-FDR','title':'Feeder Sub-Station System','className':'IN-EN_B',
            'children':[
                {'name':'IN-EN-TNO-FDR-OLE','title':'OLE System','interfaces':'IN-STR-AUX-CANT', 'className':'IN-EN-TNO-FDR-OLE-IN-STR-AUX-CANT'}
            ]},
                {'name':'IN-EN-TNO-SW','title':'Changeover/Switching System','className':'IN-EN_B'},
                {'name':'IN-EN-TNO-TRX','title':'Transformer System','className':'IN-EN_B'}
            ]}
        ]},
        {'name':'IN-ENV','title':'Environment System','className':'IN-ENV',
    'children':[
        {'name':'IN-ENV-LAN','title':'Landscape System','className':'IN-ENV_A',
    'children':[
        {'name':'IN-ENV-LAN-OS','title':'Public Open Space &amp; Recreation System','className':'IN-ENV_B'},
                {'name':'IN-ENV-LAN-PS','title':'Planting System','className':'IN-ENV_B'}
    ]}
    ]},
    {'name':'IN-GD','title':'Guidance System','className':'IN-GD',
    'children':[
        {'name':'IN-GD-AC','title':'Access Way System','className':'IN-GD_A',
    'children':[
        {'name':'IN-GD-AC-RD','title':'Access Road System','className':'IN-GD_B'}
    ]},
        {'name':'IN-GD-HI','title':'HighWay System','className':'IN-GD_A',
    'children':[
        {'name':'IN-GD-HI-M','title':'Motorway System','className':'IN-GD_B'},
        {'name':'IN-GD-HI-RD','title':'Road System','className':'IN-GD_B'}
    ]},
        {'name':'IN-GD-PR','title':'PRoW Way System','className':'IN-GD_A',
    'children':[
        {'name':'IN-GD-PR-BDW','title':'Bridleway System','className':'IN-GD_B'},
        {'name':'IN-GD-PR-BW','title':'Byway System','className':'IN-GD_B'},
        {'name':'IN-GD-PR-CYC','title':'Cycle Way System','className':'IN-GD_B'},
        {'name':'IN-GD-PR-FT','title':'Footpath System','className':'IN-GD_B'}
    ]},
        {'name':'IN-GD-PW','title':'Permanent Way System','interfaces':'IN-DR-RL-TRA', 'className':'IN-GD-PW-IN-DR-RL-TRA',
    'children':[
        {'name':'IN-GD-PW-PL','title':'Track (Plain Line) System','className':'IN-GD_B'},
        {'name':'IN-GD-PW-SC','title':'S&amp;C System','interfaces':'IN-CCS-SIG-POS', 'className':'IN-GD-PW-SC-IN-CCS-SIG-POS'}
    ]}
    ]
    },
    {'name':'IN-GT','title':'Geo-Technical System','className':'IN-GT',
'children':[
    {'name':'IN-GT-EW','title':'Earthwork System','className':'IN-GT_A',
'children':[
    {'name':'IN-GT-EW-CUT','title':'Cutting System','className':'IN-GT_B'},
    {'name':'IN-GT-EW-EMB','title':'Embankment System','className':'IN-GT_B'}
]},
    {'name':'IN-GT-GI','title':'Ground Improvement/Remediation System','className':'IN-GT_A'}
]},
{'name':'IN-ICT','title':'ICT System','className':'IN-ICT',
'children':[
    {'name':'IN-ICT-CORP','title':'Corporate ICT System','className':'IN-ICT_A'},
    {'name':'IN-ICT-CUST','title':'Customer ICT System','className':'IN-ICT_A',
'children':[
    {'name':'IN-ICT-CUST-AUG','title':'Augmented Wayfinding System','className':'IN-ICT_B'},
    {'name':'IN-ICT-CUST-COMP','title':'Compensation System','className':'IN-ICT_B'},
    {'name':'IN-ICT-CUST-EXT','title':'External Content Management System','className':'IN-ICT_B'},
    {'name':'IN-ICT-CUST-LIV','title':'Live Information Management System','className':'IN-ICT_B'},
    {'name':'IN-ICT-CUST-PN','title':'Push Notification System','className':'IN-ICT_B'},
    {'name':'IN-ICT-CUST-RET','title':'Retail Sales Management System','className':'IN-ICT_B'}
]},
    {'name':'IN-ICT-OP','title':'Operational ICT System','className':'IN-ICT_A'}
]},
{'name':'IN-MNTR','title':'Monitoring System','className':'IN-MNTR',
'children':[
    {'name':'IN-MNTR-CAM','title':'Camera System','className':'IN-MNTR_A'},
    {'name':'IN-MNTR-SNR','title':'Sensor System','className':'IN-MNTR_A'}
]},
{'name':'IN-RS','title':'Rolling Stock System','className':'IN-RS',
'children':[
    {'name':'IN-RS-FR','title':'Freight Rolling Stock System','className':'IN-RS_A'},
    {'name':'IN-RS-PAS','title':'Passenger Rolling Stock System','className':'IN-RS_A'}
]},
{'name':'IN-STR','title':'Civils &amp; Structures System','className':'IN-STR',
'children':[
    {'name':'IN-STR-AUX','title':'Auxiliary Structures System','className':'IN-STR_A',
'children':[
    {'name':'IN-STR-AUX-CANT','title':'Cantilever Structure System','interfaces':'IN-EN-TNO-FDR-OLE', 'className':'IN-STR-AUX-CANT-IN-EN-TNO-FDR-OLE'},
    {'name':'IN-STR-AUX-FDT','title':'Structrural Base/Foundation System','className':'IN-STR_B'},
    {'name':'IN-STR-AUX-GNT','title':'Gantry System','interfaces':'IN-CCS-SIG-SS', 'className':'IN-STR-AUX-GNT-IN-CCS-SIG-SS'},
    {'name':'IN-STR-AUX-MAST','title':'Tower/Mast Structure System','interfaces':'IN-TEL-XXXX-W' ,'className':'IN-STR-AUX-MAST-IN-TEL-XXXX-W'},
    {'name':'IN-STR-AUX-POST','title':'Column/Post System','className':'IN-STR_B'},
    {'name':'IN-STR-AUX-WMS','title':'Wall Mounted Support System','interfaces':'IN-EN-XXX-CBL', 'className':'IN-STR-AUX-WMS-IN-EN-XXX-CBL'}
]},
    {'name':'IN-STR-IN','title':'Intersection System','className':'IN-STR_A',
'children':[
    {'name':'IN-STR-IN-BND','title':'Boundary Protection System','className':'IN-STR_B'},
    {'name':'IN-STR-IN-BRG','title':'Bridge System','className':'IN-STR_B'},
    {'name':'IN-STR-IN-LVL','title':'Level Crossing System','interfaces':'IN-CCS-SIG', 'className':'IN-STR-IN-LVL-IN-CCS-SIG'},
    {'name':'IN-STR-IN-RW','title':'Retaining Wall System','className':'IN-STR_B'},
    {'name':'IN-STR-IN-TUN','title':'Tunnel System','className':'IN-STR_B'}
]}
]},
{'name':'IN-TEL','title':'Telecommunications System','className':'IN-TEL',
'children':[
    {'name':'IN-TEL-CORP','title':'Corporate Telecomms Network System','className':'IN-TEL_A',
'children':[
    {'name':'IN-TEL-CORP-F','title':'Fixed Communications Network System','className':'IN-TEL_B'},
    {'name':'IN-TEL-CORP-W','title':'Wireless Communications Network System','interfaces':'IN-STR-AUX-MAST &amp; IN-CCS-TCS', 'className':'IN-TEL-XXXX-W-IN-CCS-TCS-IN-STR-AUX-MAST',
'children':[
    {'name':'IN-TEL-CORP-W-5G','title':'5G FRMCS Radio System','className':'IN-TEL_C'},
    {'name':'IN-TEL-CORP-W-GSMR','title':'GSM-R System','className':'IN-TEL_C'}
]}
]},
    {'name':'IN-TEL-CUST','title':'Customer Telecomms Network System','className':'IN-TEL_A',
    'children':[
        {'name':'IN-TEL-CUST-F','title':'Fixed Communications Network System','className':'IN-TEL_B'},
        {'name':'IN-TEL-CUST-W','title':'Wireless Communications Network System','interfaces':'IN-STR-AUX-MAST &amp; IN-CCS-TCS','className':'IN-TEL-XXXX-W-IN-CCS-TCS-IN-STR-AUX-MAST',
    'children':[
        {'name':'IN-TEL-CUST-W-5G','title':'5G FRMCS Radio System','className':'IN-TEL_C'},
        {'name':'IN-TEL-CUST-W-GSMR','title':'GSM-R System','className':'IN-TEL_C'}
    ]}
    ]},
    {'name':'IN-TEL-STN','title':'Station Telecomms Network System','className':'IN-TEL_A',
    'children':[
        {'name':'IN-TEL-STN-F','title':'Fixed Communications Network System','className':'IN-TEL_B'},
        {'name':'IN-TEL-STN-W','title':'Wireless Communications Network System','interfaces':'IN-STR-AUX-MAST &amp; IN-CCS-TCS','className':'IN-TEL-XXXX-W-IN-CCS-TCS-IN-STR-AUX-MAST',
    'children':[
        {'name':'IN-TEL-STN-W-5G','title':'5G FRMCS Radio System','className':'IN-TEL_C'},
        {'name':'IN-TEL-STN-W-GSMR','title':'GSM-R System','className':'IN-TEL_C'}
    ]}
    ]}
]}
        ]
      };
  
      var oc = $('#chart-container').orgchart({
        'data' : datascource,
        'nodeContent': 'title'
      });
  
    });
  
  })(jQuery);