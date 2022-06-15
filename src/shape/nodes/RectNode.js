import React from "react";
import { RegisterNode, setAnchorPointsState } from "gg-editor";

class RectNode extends React.Component {
  render() {
    const config = {
      setState(name, value, item) {
        setAnchorPointsState.call(
          this,
          name,
          value,
          item,
          (item, anchorPoint) => {
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
          }
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
      labelPosition: "top"
    };

    return <RegisterNode name="rect-node" config={config} extend={"rect"} />;
  }
}

export default RectNode;
