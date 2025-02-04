import React from "react";
import Colors from "./Color";
import { Star, StarHalf } from "lucide-react";

export default function RatingGenerator({
  stroke = "0",
  rating,
  fill = Colors.customYellow,
  size,
}) {
  return Array.from({ length: 5 }, (_, index) => {
    const number = index + 0.5;

    return (
      <span key={index}>
        {rating >= index + 1 ? (
          <Star fill={fill} stroke={stroke} size={size} />
        ) : rating >= number ? (
          <StarHalf fill={fill} stroke={stroke} size={size} />
        ) : (
          <Star stroke={Colors.customYellow} size={size} />
        )}
      </span>
    );
  });
}