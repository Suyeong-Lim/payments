import React, { useState } from "react";

const CardAddPage = () => {
  const [cardInput, setCardInput] = useState({
    cardNum1: "",
    cardNum2: "",
    cardNum3: "",
    cardNum4: "",
  });

  const inputHandler = (e) => {
    const inputValue = e.target.value;
    if (!isNaN(inputValue)) {
      setCardInput({
        [e.target.value]: e.target.value,
      });
    }
    return;
  };
  return (
    <>
      <h2 className="page-title">카드 추가</h2>
      {/* card 부분  */}
      <div className="card-box">
        <div className="empty-card">
          <div className="card-top"></div>
          <div className="card-middle">
            <div className="small-card__chip"></div>
            <label></label>
          </div>

          <div className="card-bottom">
            <div className="card-bottom__info">
              <span className="card-text">NAME</span>
              <span className="card-text">MM / YY</span>
            </div>
          </div>
        </div>
      </div>

      <div className="input-container">
        <span className="input-title">카드 번호</span>
        <div className="input-box">
          <input
            className="input-basic"
            type="text"
            maxLength={4}
            value={cardInput.cardNum1}
            onChange={inputHandler}
          />
          <input
            className="input-basic"
            type="text"
            maxLength={4}
            value={cardInput.cardNum2}
            onChange={inputHandler}
          />
          <input
            className="input-basic"
            type="password"
            maxLength={4}
            value={cardInput.cardNum3}
            onChange={inputHandler}
          />
          <input
            className="input-basic"
            type="password"
            maxLength={4}
            value={cardInput.cardNum4}
            onChange={inputHandler}
          />
        </div>
      </div>
    </>
  );
};

export default CardAddPage;
