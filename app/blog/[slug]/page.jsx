import React from "react";

export default function Post({ params }) {
  return (
    <>
      <h1>Single Post</h1>
      <p>{params.slug}</p>
    </>
  );
}
