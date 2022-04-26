import React, { FC } from "react";

export const SaveChanges: FC = () => {
  return (
    <div className="save-changes">
      <button className="save-changes__button">Изменить</button>
      <span className="save-changes__text">
        последние изменения 15 мая 2012 в 14:55:17
      </span>
    </div>
  );
};
