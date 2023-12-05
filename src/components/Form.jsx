import React, { useState } from "react";
import { MainProvider } from "../context/contextProvider.jsx";
import { useContext } from "react";
const Form = () => {
  const { color,changeColor } = useContext(MainProvider);
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [search, setSearch] = useState("");
  const [cards, setCards] = useState([]);
  const handleChange = () => {
    const newCard = { title, text, color };
    if(title!="" && text!=""){
      setCards([...cards, newCard]);
    }
  
    setTitle("");
    setText("");
  };

  const filteredCards = cards.filter((card) =>
  card.title.toLowerCase().includes(search.toLowerCase())
);
const handleSearchChange = (e) => {
  setSearch(e.target.value);
};
const handleDelete = (index) => {
  const updatedCards = [...cards];
  updatedCards.splice(index, 1);
  setCards(updatedCards);
};
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        marginTop: "20px",
      }}
    >
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Note Title"
        maxlength="22"
        style={{
          padding: "15px",
          border: "1px solid rgb(126, 87, 194)",
          outlineColor: "rgb(81, 45, 168)",
          borderRadius: "7px",
          width: "40%",
        }}
      ></input>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Write note..."
        rows="8"
        style={{
          width: "40%",
          padding: "15px",
          marginTop: "25px",
          border: "1px solid rgb(126, 87, 194)",
          outlineColor: "rgb(81, 45, 168)",
          borderRadius: "7px",
        }}
      ></textarea>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          marginTop: "20px",
          width: "40%",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "5px",
          }}
        >
          <div
            style={{
              backgroundColor: "rgb(240, 98, 146)",
              color: "white",
              width: "50px",
              height: "50px",
              borderRadius: "50%",
            }}
            onClick={() => changeColor("rgb(240, 98, 146)")}
          ></div>
          <div
            style={{
              backgroundColor: "rgb(186, 104, 200)",
              color: "white",
              width: "50px",
              height: "50px",
              borderRadius: "50%",
            }}
            onClick={() => changeColor("rgb(186, 104, 200)")}
          ></div>
          <div
            style={{
              backgroundColor: "rgb(79, 195, 247)",
              color: "white",
              width: "50px",
              height: "50px",
              borderRadius: "50%",
            }}
            onClick={() => changeColor("rgb(79, 195, 247)")}
          ></div>
          <div
            style={{
              backgroundColor: "rgb(255, 213, 79)",
              color: "white",
              width: "50px",
              height: "50px",
              borderRadius: "50%",
            }}
            onClick={() => changeColor("rgb(255, 213, 79)")}
          ></div>
          <div
            style={{
              backgroundColor: "rgb(174, 213, 129)",
              color: "white",
              width: "50px",
              height: "50px",
              borderRadius: "50%",
            }}
            onClick={() => changeColor("rgb(174, 213, 129)")}
          ></div>
        </div>

        <div>
          <button
            onClick={handleChange}
            style={{
              padding: "15px 20px ",
              color: "white",
              backgroundColor: "rgb(126, 87, 194)",
              boxShadow:
                "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
              fontWeight: 500,
              border: "none",
              borderRadius: "10px",
            }}
          >
            Save
          </button>
        </div>
      </div>
      <input
        type="text"
        placeholder="Search"
        value={search}
        onChange={handleSearchChange}
        style={{
          width: "40%",
          padding: "15px ",
          border: "1px solid rgb(126, 87, 194)",
          outlineColor: "rgb(81, 45, 168)",
          borderRadius: "7px",
          margin: "20px",
        }}
      />
      {filteredCards.map((card, index) => (
        <div
          key={index}
          style={{
            width: "12rem",
            height: "10rem",
            padding: "5px",
            border: `2px solid ${color}`,
            marginBottom: "10px",
            borderRadius: "10%",
            textAlign: "center",
          }}
        >
          <h3 style={{ backgroundColor: color }}>{card.title}</h3>
          <p>{card.text}</p>
          <button
            style={{
              padding: " 10px 15px",
              border: "none",
              color: "white",
              backgroundColor: "red",
            }}
            onClick={() => handleDelete(index)}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};
export default Form;
