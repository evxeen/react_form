import React, { ChangeEvent, FC, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Header.scss";

import {
  changeStatusAction,
  showFieldAction,
} from "../../store/actions/statusActions";

export const Header: FC = () => {
  const { status, edited } = useSelector((state: any) => state.status);
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
      <h1 className="header__title">
        Здравствуйте, <span className="header__person">Человек №3596941</span>
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
