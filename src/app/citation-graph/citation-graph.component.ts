import { Component, OnInit } from '@angular/core';
import citation_network from "../../assets/citation/network.json";

@Component({
  selector: 'app-citation-graph',
  templateUrl: './citation-graph.component.html',
  styleUrls: ['./citation-graph.component.css']
})
export class CitationGraphComponent implements OnInit {

  citation_net_options;
  networkInstance
  network
  onChartInit(event)
  {
    this.networkInstance = event
  }

  render_graph()
  {
    this.network.nodes.forEach(function (node) {
        node.itemStyle = {
          color: "black"
        };
        node.value = node.symbolSize;
        node.symbolSize /= 1.5;
        node.label = {
            show: node.symbolSize > 30
        };
        // node.category = node.attributes.modularity_class;
    });
    this.citation_net_options = {
        title: {
            text: 'Citation Network',
            subtext: 'Default layout',
            top: 'bottom',
            left: 'right'
        },
        tooltip: {},

        animationDuration: 1500,
        animationEasingUpdate: 'quinticInOut',
        series : [
            {
                draggable: true,
                type: 'graph',
                layout: 'none',
                edgeSymbol: ["none", "arrow"],
                edgeSymbolSize: 6,
                data: this.network.nodes,
                links: this.network.links,
                // categories: categories,
                roam: true,
                focusNodeAdjacency: true,
                itemStyle: {
                    borderColor: '#fff',
                    borderWidth: 1,
                    shadowBlur: 10,
                    shadowColor: 'rgba(0, 0, 0, 0.3)'
                },
                label: {
                    position: 'right',
                    formatter: '{b}'
                },
                lineStyle: {
                    color: 'red',
                    curveness: 0.5
                },
                emphasis: {
                    lineStyle: {
                        width: 5
                    }
                }
            }
        ]
    };
  }
  constructor() { }

  ngOnInit(): void {
    this.network = citation_network
    console.log(this.network)
    this.render_graph()
  }

}
