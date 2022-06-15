import React from "react";
import { RegisterNode, setAnchorPointsState } from "gg-editor";

class CircleNode extends React.Component {
  render() {
    const config = {
      setState(name, value, item) {
        setAnchorPointsState.call(
          this,
          name,
          value,
          item,
          (item, anchorPoint) => {
            console.log(item)
            const { width, height } = item.getKeyShape().getBBox();
            const [x, y] = anchorPoint;
            return {
              x: width * x - width / 2,
              y: height * y - height / 2,
            };
          },
          (item, anchorPoint) => {
            const { width, height } = item.getKeyShape().getBBox();
            const [x, y] = anchorPoint;
            return {
              x: width * x - width / 2,
              y: height * y - height / 2,
            };
          },
        );
      },
      getAnchorPoints() {
        return [
          [0.5, 0],
          [0.5, 1],
          [0, 0.5],
          [1, 0.5],
        ];
      },
    };

    return (
      <RegisterNode name="circle-node" config={config} extend={"circle"} />
    );
  }
}

export default CircleNode;
