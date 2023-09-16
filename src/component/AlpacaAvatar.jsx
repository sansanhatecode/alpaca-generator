import React from "react";

const AlpacaAvatar = React.forwardRef((props, ref) => {
  const {
    data,
    hair,
    ears,
    eyes,
    mouth,
    neck,
    leg,
    nose,
    accessories,
    background,
  } = props;
  return (
    <div ref={ref} className="relative">
      <img
        className="z-50 absolute"
        src={`img/${data[0].directory}/${data[0].items[hair].filename}.png`}
        alt=""
      />
      <img
        className="z-40 absolute"
        src={`img/${data[1].directory}/${data[1].items[ears].filename}.png`}
        alt=""
      />
      <img
        className="z-[70] absolute"
        src={`img/${data[2].directory}/${data[2].items[eyes].filename}.png`}
        alt=""
      />
      <img
        className="z-[100] absolute"
        src={`img/${data[3].directory}/${data[3].items[mouth].filename}.png`}
        alt=""
      />
      <img
        className="z-20 absolute"
        src={`img/${data[4].directory}/${data[4].items[neck].filename}.png`}
        alt=""
      />
      <img
        className="z-30 absolute"
        src={`img/${data[5].directory}/${data[5].items[leg].filename}.png`}
        alt=""
      />
      <img className="z-[90] absolute" src={`img/nose.png`} alt="" />
      <img
        className="z-[60] absolute"
        src={`img/${data[7].directory}/${data[7].items[accessories].filename}.png`}
        alt=""
      />
      <img
        className="z-10"
        src={`img/${data[8].directory}/${data[8].items[background].filename}.png`}
        alt=""
      />
    </div>
  );
})

export default AlpacaAvatar
