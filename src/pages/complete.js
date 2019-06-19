import React, { useEffect, createRef } from "react";
import Reward from "react-rewards";

import developer from "../images/developer.svg";
import Layout from "../components/layout";
import NextBtn from "../components/splitter/next-btn";

function Complete() {
  const rewards = createRef(null);
  useEffect(() => {
    requestAnimationFrame(() => {
      if (rewards.current) {
        rewards.current.rewardMe();
      }
    });
  });
  return (
    <Layout>
      <Reward ref={rewards} />
      <div
        css={`
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
        `}
      >
        <img
          src={developer}
          alt=""
          css={`
            height: 30%;
            width: 30%;
          `}
        />
        <h1
          css={`
            margin-top: 4rem;
            margin-bottom: 0;
          `}
        >
          CONGRATS!
        </h1>
        <h2>on taking the first step to be a web developer</h2>
        <NextBtn to="/">Start Afresh</NextBtn>
      </div>
    </Layout>
  );
}

export default Complete;
