import * as React from 'react';
import { MapNode } from './UndergroundLines';

interface MapTextProps {
  x: number;
  y: number;
  node: MapNode;
}

export const MapTextAbove = (props: MapTextProps) => {
  const tx = props.x + -40;
  const ty = props.y + -220;
  const transform = `rotate(20, ${tx}, ${ty})`;
  return (
    <text
      x={props.x - 8}
      y={props.y - 40}
      transform={transform}
      className="map-text-bold"
    >
      {props.node.name}
    </text>
  );
};

export const MapTextRight = (props: MapTextProps) => {
  return (
    <g>
      <text
        x={props.x + 20}
        y={props.y + 8}
        className="map-text-bold"
      >
        {props.node.name}
      </text>

      <text
        x={props.x + 120}
        y={props.y + 8}
        className="map-text"
      >
        {props.node.owner}
      </text>
    </g>
  );
};

export const MapText = (props: MapTextProps) => {
  switch (props.node.direction) {
    case 'sw':
    case 'ne':
      return (
        <MapTextRight
          x={props.x}
          y={props.y}
          node={props.node}
        />
      );
    case 'w':
    case 'e':
      return (
        <MapTextAbove
          x={props.x}
          y={props.y}
          node={props.node}
        />
      );

    default:
      return (
        <MapTextRight
          x={props.x}
          y={props.y}
          node={props.node}
        />
      );
  }
  // return (
  // <MapTextRight
  //   x={props.x}
  //   y={props.y}
  //   node={props.node}
  // />
  // );
};