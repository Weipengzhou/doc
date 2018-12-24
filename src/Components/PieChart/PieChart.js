import React from 'react'
import {Chart,Geom,Axis,Tooltip,Coord,Label,Legend} from "bizcharts";
import DataSet from "@antv/data-set";
const { DataView } = DataSet;

const Labelline =(props)=> { 
    const data = [
        {
          item: "female",
          count: props.data.female/(props.data.female+props.data.male)
        },
        {
          item: "male",
          count: props.data.male/(props.data.female+props.data.male)
        }
      ];
      const dv = new DataView();
      dv.source(data).transform({
        type: "percent",
        field: "count",
        dimension: "item",
        as: "percent"
      });
      const cols = {
        percent: {
          formatter: val => {
            val = val * 100 + "%";
            return val;
          }
        }
      };
      return (
        <div>
          <Chart
            height={400}
            data={dv}
            scale={cols}
            padding={[10, 100, 80, 80]}
            forceFit
          >
            <Coord type="theta" radius={0.75} />
            <Axis name="percent" />
            <Legend
              position="right"
              offsetY={-window.innerHeight / 2 + 120}
              offsetX={-100}
            />
            <Tooltip
              showTitle={false}
              itemTpl="<li><span style=&quot;background-color:{color};&quot; class=&quot;g2-tooltip-marker&quot;></span>{name}: {value}</li>"
            />
            <Geom
              type="intervalStack"
              position="percent"
              color="item"
              tooltip={[
                "item*percent",
                (item, percent) => {
                  percent = percent * 100 + "%";
                  return {
                    name: item,
                    value: percent
                  };
                }
              ]}
              style={{
                lineWidth: 1,
                stroke: "#fff"
              }}
            >
              <Label
                content="percent"
                formatter={(val, item) => {
                  return item.point.item + ": " + val;
                }}
              />
            </Geom>
          </Chart>
        </div>
      );
  }
  
  export default Labelline;