import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { TextArea } from '../interfaces/textArea';
export const SortInput = (props: { textArea: any }) => {
  const [toSort, setToSort] = useState({});
  const [button, setButton] = useState(false);
  const [sortByQuantity, setSortByQuantity] = useState<Array<TextArea>>();
  const [alphabetical, setAlphabetical] = useState<Array<TextArea>>([]);
  if (toSort !== props.textArea) {
    setToSort(props.textArea);
    let quantity: Array<TextArea> = [];
    let sorting: Array<TextArea> = [];
    Object.keys(props.textArea)
      .sort()
      .forEach((v) => {
        sorting.push({ value: v, qty: props.textArea[v] });
        quantity.push({
          qty: props.textArea[v],
          value: v,
        });
      });

    setAlphabetical(sorting);
    quantity = quantity.sort(function (a, b) {
      return parseFloat(b.qty) - parseFloat(a.qty);
    });
    setSortByQuantity(quantity);
  }
  function sortByQuantityF() {
    if (button === false) {
      return setButton(true);
    }
    return setButton(false);
  }

  return (
    <div>
      <div>
        <Button onClick={sortByQuantityF}>
          {button ? 'Sort by quantity' : 'Sort alphabetical'}
        </Button>
      </div>
      <div>
        {sortByQuantity !== undefined && alphabetical !== undefined ? (
          sortByQuantity[0].value === '' ? (
            <h1>Next word</h1>
          ) : button ? (
            alphabetical.map((val) => {
              return (
                <h1>
                  val:{val.value} qty:{val.qty}
                </h1>
              );
            })
          ) : (
            sortByQuantity.map((val) => {
              return (
                <h1>
                  qty:{val.qty} val:{val.value}
                </h1>
              );
            })
          )
        ) : (
          ''
        )}
      </div>
    </div>
  );
};
