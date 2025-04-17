import { useState, Fragment, useEffect, useReducer, useCallback } from "react";
import {
  requestInitialState,
  requestReducer,
  REQUEST_ACTION_TYPE,
} from "../../util/request";
import Grid from "../../component/grid";
import Box from "../../component/box";
import PostCreate from "../post-create";
import { getDate } from "../../util/getDate";
import PostContent from "../../component/post-content";
import { Skeleton, Alert } from "../../component/load";

export default function Container({ id, username, text, date }) {
  const [state, dispatch] = useReducer(
    requestReducer,
    requestInitialState,
    (state) => ({ ...state, data: { id, username, text, date, reply: null } })
  );

  const getData = useCallback(async () => {
    dispatch(REQUEST_ACTION_TYPE.PROGRESS);
    try {
      // метод method: "GET" іде за замовчуванням і його можна не вказувати
      const res = await fetch(`/api/post-item?id=${state.data.id}`);

      const resData = await res.json();

      if (res.ok) {
        dispatch({
          type: REQUEST_ACTION_TYPE.SUCCESS,
          payload: convertData(resData),
        });
      } else {
        dispatch({ type: REQUEST_ACTION_TYPE.ERROR, payload: resData.message });
      }
    } catch (error) {
      dispatch({ type: REQUEST_ACTION_TYPE.ERROR, payload: error.message });
    }
  }, [state.data.id]);

  const [isOpen, setIsOpen] = useState(false);

  const convertData = ({ post }) => ({
    id: post.id,
    username: post.username,
    text: post.text,
    date: getDate(post.date),

    reply: post.reply.reverse().map(({ id, username, text, date }) => ({
      id,
      username,
      text,
      date: getDate(date),
    })),
    isEmpty: post.reply.length === 0,
  });

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen === true) getData();
  }, [isOpen, getData]);

  return (
    <Box style={{ padding: "0" }}>
      <div style={{ padding: "20px", cursor: "pointer" }} onClick={handleOpen}>
        <PostContent
          username={state.data.username}
          date={state.data.date}
          text={state.data.text}
        />
      </div>
      {isOpen && (
        <div style={{ padding: "0 20px 20px 20px" }}>
          <Grid>
            <Box>
              <PostCreate
                placeholder="Post your reply"
                button="Reply"
                id={state.data.id}
                onCreate={getData}
              />
            </Box>
            {state.status === REQUEST_ACTION_TYPE.PROGRESS && (
              <Fragment>
                <Box>
                  <Skeleton />
                </Box>
                <Box>
                  <Skeleton />
                </Box>
              </Fragment>
            )}
            {state.status === REQUEST_ACTION_TYPE.ERROR && (
              <Alert status={state.status} message={state.message} />
            )}
            {state.status === REQUEST_ACTION_TYPE.SUCCESS &&
              state.data.isEmpty === false &&
              state.data.reply.map((item) => (
                <Fragment key={item.id}>
                  <Box>
                    <PostContent {...item} />
                  </Box>
                </Fragment>
              ))}
          </Grid>
        </div>
      )}
    </Box>
  );
}
