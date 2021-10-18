import { CountdownCircleTimer } from "react-countdown-circle-timer";

const countDownAnimation = ({ key = 1, timer = 20, animate = true, children }) => {
  /*
    parameters: 
        key: indicator 
        timer: int
        animate: boolean
        children: int (is basically the numbers that we will see on the screen)
    */
  return (
    <CountdownCircleTimer
      key={key}
      isPlaying={animate}
      duration={timer * 60} //so it can be in seconds
      colors={("#fe6f6b", 0.33)}
      strokeWidth={6}
      trailColor="#151932" //color that it's appearing everytime the color of timers is running
      onComplete={() => {
        //stopAnimate()
      }}
    >
      {children}
    </CountdownCircleTimer>
  );
};
export default countDownAnimation;
