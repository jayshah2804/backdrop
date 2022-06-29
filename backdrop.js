{(isClicked.login || isClicked.signup) &&
        <div className="backdrop" onClick={closeClickHandler}>
          <div style={{zIndex: "100"}} className="s_b">
            <button onClick={closeClickHandler} className="closeButton">X</button>
