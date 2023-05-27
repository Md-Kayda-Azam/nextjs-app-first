import React from "react";

export default function SingleDevs({ params }) {
  return (
    <>
      <h1> SingleDevs Devs</h1>
      <p>{params.username[1]}</p>
    </>
  );
}
