import React, { ChangeEvent, FC, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  changeStatusAction,
  showFieldAction,
} from "../store/actions/statusActions";
import { IStatusState } from "../types/status";

export const Header: FC = () => {
  const { status, edited } = useSelector((state: IStatusState) => state);
  const dispatch = useDispatch();

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current !== null) {
      inputRef.current.focus();
    }
  }, [edited]);

  const changeStatus = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(changeStatusAction(event.target.value));
  };

  const editStatus = () => {
    dispatch(showFieldAction());
  };

  return (
    <div className="header">
      <h1 className="title">
        Здравствуйте, <span>Человек №3596941</span>
      </h1>

      <button onClick={editStatus} className="header__button">
        {edited ? "Сохранить" : "Сменить статус"}
      </button>

      <div className={edited ? "status status_active" : "status"}>
        {edited ? (
          <input
            className="status__input"
            type="text"
            ref={inputRef}
            value={status}
            onChange={changeStatus}
          />
        ) : (
          <p className="status__text">{status}</p>
        )}
      </div>
    </div>
  );
};
