import routerRgE5 from "../pichtures/male/routerRgE5.jpg"
import archerAX50 from "../pichtures/male/archerAX50.jpg"
import glx750v2 from "../pichtures/male/glx750v2.jpg"
import gryphon from "../pichtures/male/gryphon.jpg"
import wireless from "../pichtures/male/wireless.jpg"
import edgeRouter from "../pichtures/male/edgeRouter.jpg"
import edgeRouterX from "../pichtures/male/edgeRouterX.jpg"
import edgeRouterSFP from "../pichtures/male/edgeRouterSFP.jpg"
import  v2766 from "../pichtures/male/v2766.jpg"
import manageSwitch from "../pichtures/female/manageSwitch.jpg"
import tplink8port from "../pichtures/female/tplink8port.jpg"
import NETGEAR24Port from "../pichtures/female/NETGEAR24Port.jpg"
import NETGEAR8port from "../pichtures/female/NETGEAR8port.jpg"
import ubiquiti from "../pichtures/female/ubiquiti.jpg"
import unmanagedSwitch from "../pichtures/female/unmanagedSwitch.jpg"
import TPLinkTLSG108 from "../pichtures/female/TPLinkTLSG108.jpg"
import tplink16port from "../pichtures/female/tplink16port.jpg"
import cisco from "../pichtures/female/cisco.jpg"    
import dlinkdgs100 from "../pichtures/female/dlinkdgs100.jpg"

export const gender = {
    female: [
        {
          id: "0",
          name: "Managed Switch",
          pichtures: manageSwitch,
          types: [
              {   
                  id: "5",
                  name: "black ",
                  items: [
                      {
                          name: "Tplink 8 port",
                          price: "30$",
                          pichtures: tplink8port
                      },
                      {
                        name: "NETGEAR",
                        price: "180$",
                        pichtures: NETGEAR24Port
                      }
                  ]
              },
              {     
                  id: "6",
                  name: "white",
                  items: [
                    {
                        name: "NETGEAR 8port",
                        price: "20$",
                        pichtures: NETGEAR8port
                    },
                    {
                      name: "Ubiquiti",
                      price: "30$",
                      pichtures: ubiquiti
                  }
                ]
              }
          ]
        },
        {
          id: "1",
          name: "Unmanaged Switc8888h",
          pichtures: unmanagedSwitch,
          types: [
              {   
                  id: "7",
                  name: "black",
                  items: [
                    {
                        name: "TL-SG108",
                        price: "20$",
                        pichtures: TPLinkTLSG108
                    },
                    {
                      name: "TP-Link 16 Port",
                      price: "70$",
                      pichtures: tplink16port
                  }
                ]
              },
              {   
                  id: "8",
                  name: "white",
                  items: [
                    {
                        name: "Cisco CBS110",
                        price: "56$", 
                        pichtures: cisco
                    },
                    {
                      name: "DGS 100",
                      price: "35$",
                      pichtures: dlinkdgs100
                  }
                ]
              }
          ]
        }
    ],
    male: [
        {
            id: "3",
            name: "Wireless",
            pichtures: wireless,
            types: [
                {
                    id: "11",
                    name: "black",
                    items: [
                        {
                            name: "Reyee RG-E5",
                            price: "150$",
                            pichtures: routerRgE5
                        },
                        {
                          name: "Archer AX50",
                          price: "130$",
                          pichtures: archerAX50
                      }
                    ]
                },
                {
                    id: "13",
                    name: "white",
                    items: [
                        {
                            name: "GL-X750V2",
                            price: "115$",
                            pichtures: glx750v2
                        },
                        {
                          name: "Gryphon",
                          price: "80$",
                          pichtures: gryphon
                      }
                    ]
                }
            ]
        },
        {
            id: "4",  
            name: "Edge Router" ,
            pichtures: edgeRouter,
            types: [
                {
                    id: "12",
                    name: "black",
                    items: [
                        {
                            name: "EdgeRouter X",
                            price: "59$",
                            pichtures: edgeRouterX
                        },
                        {
                          name: "EdgeRouter SFP",
                          price: "99$",
                          pichtures: edgeRouterSFP
                      }
                    ]
                },
                {
                    id: "13",
                    name: "white",
                    items: [
                        {
                            name: "V2766",
                            price: "80$",
                            pichtures: v2766
                        }
                    ]
                }
              ]
        }
    ]
}