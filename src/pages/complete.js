import React, { useLayoutEffect, createRef } from "react";
import Reward from "react-rewards";

import developer from "../images/developer.svg";
import Layout from "../components/layout";
import { PrimaryBtn, SecondaryBtn } from "../components/btn";

const rewardConfig = {
  lifetime: 200,
  angle: 90,
  decay: 0.91,
  spread: 100,
  startVelocity: 35,
  elementCount: 100,
  springAnimation: true,
};

function Complete() {
  const rewards = createRef(null);
  useLayoutEffect(() => {
    requestAnimationFrame(() => {
      if (rewards.current) {
        rewards.current.rewardMe();
      }
    });
  });
  return (
    <Layout>
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
        <Reward ref={rewards} type="confetti" config={rewardConfig}>
          <h1
            css={`
              margin-top: 4rem;
              margin-bottom: 0;
            `}
          >
            CONGRATS!
          </h1>
        </Reward>
        <h2>on taking the first step to be a web developer</h2>
        <div role="group">
          <PrimaryBtn
            to="/"
            css={`
              margin: 1rem;
            `}
          >
            Start Afresh
          </PrimaryBtn>
          <SecondaryBtn
            to="/feedback"
            css={`
              margin: 1rem;
            `}
          >
            Feedback
          </SecondaryBtn>
        </div>
      </div>
    </Layout>
  );
}

export default Complete;
