import { useState } from "react";
import styles from "./multi-list.module.scss";
import TextInput from "../text-input/component";
import RemovableInputList from "../removable-input-list/component";

export default function MultiList({
  listItems,
  setListItems,
  ListItemClass,
  addButtonText,
}) {
  const inputOnChangeFactory = (listItemId) => {
    return (e) => {
      const propName = e.target.dataset.fieldName;
      const val = e.target.value;
      setListItems(
        listItems.map((listItem) => {
          if (listItem.id !== listItemId) return listItem;
          else {
            const updatedListItem = Object.assign(listItem);
            updatedListItem[propName] = val;
            return updatedListItem;
          }
        }),
      );
    };
  };

  return (
    <div className={styles["multi-list"]}>
      {listItems.map((keyListItem) => {
        const stateChanger = inputOnChangeFactory(keyListItem.id);
        return (
          <RemovableInputList
            key={keyListItem.id}
            removeFunc={() => {
              setListItems(
                listItems.filter((listItem) => listItem.id !== keyListItem.id),
              );
            }}
          >
            {Object.keys(keyListItem)
              .filter((key) => key !== "id")
              .map((key, index) => {
                return (
                  <TextInput
                    key={index}
                    labelText={ListItemClass.keyToLabelMap.get(key)}
                    name={key}
                    dataId={keyListItem.id}
                    onChange={stateChanger}
                    value={keyListItem[key]}
                  ></TextInput>
                );
              })}
          </RemovableInputList>
        );
      })}
      <button
        type="button"
        onClick={() => setListItems([...listItems, new ListItemClass()])}
      >
        {addButtonText}
      </button>
    </div>
  );
}
