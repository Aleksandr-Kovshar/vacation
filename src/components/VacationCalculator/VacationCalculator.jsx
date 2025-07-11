import React,  { useState } from "react";


export default function VacationСalculator() {
 
  const [available, setAvailable] = useState(27);
  const [used, setUsed] = useState(0);
  const [remaining, setRemaining] = useState(27);
  const [result, setResult] = useState("");

  const available_max = 27;
  const used_max = 27;
  const remaining_max = 27;
  const available_divide_max = 13;
  const used_divide_max = 13;
  const remaining_divide_max = 13;
  const available_notdivide_max = 14;
  const used_notdivide_max = 14;
  const remaining_notdivide_max = 14;

  const calculate = () => {
    let remaining_divide = 0;

    if (available === available_max && used === 0) {
      return setResult(
        `Можна використати ${remaining_notdivide_max} днів неподільної і ${remaining_divide_max} подільної відпустки.`
      );
    }

    if (available === 0) {
      return setResult("У тебе ще немає відпустки");
    }

    if (used === used_max) {
      return setResult(`Всі ${available_max} днів відпустки вже використано`);
    }

    if (used >= used_notdivide_max && remaining === 0 && available < available_max) {
      return setResult(
        `Всі ${available_notdivide_max} неподільної відпустки вже використано. Подільної відпустки ще немає.`
      );
    }

    if (used >= used_notdivide_max && remaining !== 0 && available <= available_max) {
      remaining_divide = remaining;
      return setResult(
        `Всі ${available_notdivide_max} неподільної відпустки вже використано. Доступно ${remaining_divide} днів подільної відпустки.`
      );
    }

    if (remaining > remaining_notdivide_max && used < used_divide_max) {
      remaining_divide = remaining - remaining_notdivide_max;
      return setResult(
        `Можна використати ${remaining_notdivide_max} днів неподільної і ${remaining_divide} подільної відпустки.`
      );
    }

    if (remaining === remaining_notdivide_max && available < available_max && used < used_divide_max) {
      return setResult(`Можна використати ${remaining_notdivide_max} днів неподільної відпустки.`);
    }

    if (remaining === remaining_notdivide_max && available === available_max) {
      return setResult(`Залишилось тільки ${remaining_notdivide_max} днів неподільної відпустки.`);
    }

    if (remaining > 0 && used === used_divide_max) {
      return setResult(
        `Є ${remaining} днів неподільної відпустки. Для використання потрібно накопичити ${remaining_notdivide_max} днів.`
      );
    }

    return setResult("Немає специфічної інформації за такими умовами.");
  };

    return (
    <div
      style={{
        maxWidth: "600px",
        margin: "40px auto",
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "10px",
      }}
    >
      <h2>Розрахунок відпустки</h2>
      <div
        style={{
          display: "flex",
          gap: "15px",
          alignItems: "center",
          marginTop: "20px",
          flexWrap: "wrap",
        }}
      >
        <label style={{ display: "flex", flexDirection: "column", fontSize: "14px" }}>
          Доступно днів
          <input
            type="number"
            value={available}
            onChange={(e) => {
              const val = Number(e.target.value);
              if (val >= 0 && val <= 27) setAvailable(val);
            }}
            max={27}
            min={0}
            style={{ width: "80px", marginTop: "4px" }}
          />
        </label>

        <label style={{ display: "flex", flexDirection: "column", fontSize: "14px" }}>
          Використано днів
          <input
            type="number"
            value={used}
            onChange={(e) => {
              const val = Number(e.target.value);
              if (val >= 0 && val <= 27) setUsed(val);
            }}
            max={27}
            min={0}
            style={{ width: "80px", marginTop: "4px" }}
          />
        </label>

        <label style={{ display: "flex", flexDirection: "column", fontSize: "14px" }}>
          Залишилось днів
          <input
            type="number"
            value={remaining}
            onChange={(e) => {
              const val = Number(e.target.value);
              if (val >= 0 && val <= 27) setRemaining(val);
            }}
            max={27}
            min={0}
            style={{ width: "80px", marginTop: "4px" }}
          />
        </label>

        <button
          onClick={calculate}
          style={{ height: "32px", padding: "0 16px", cursor: "pointer", marginTop: "22px" }}
        >
          Розрахувати
        </button>
      </div>
      {result && (
        <div
          style={{
            backgroundColor: "#f5f5f5",
            padding: "10px",
            borderRadius: "5px",
            marginTop: "20px",
            minHeight: "40px",
          }}
        >
          {result}
        </div>
      )}
    </div>
  );
}

