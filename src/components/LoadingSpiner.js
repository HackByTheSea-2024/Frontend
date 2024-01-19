import { useState } from "react";
import FadeLoader from "react-spinners/CircleLoader";

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

export default function LoadingSpiner({ loading }) {
  return (
    <FadeLoader
      color={"#5463FF"}
      loading={loading}
      cssOverride={override}
      aria-label="Loading Spinner"
      data-testid="loader"
      radius={10}
    />
  );
}
