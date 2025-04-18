import {
  Fragment,
  lazy,
  Suspense,
  useEffect,
  useReducer,
  useCallback,
} from "react";
import Title from "../../component/title";
import Grid from "../../component/grid";
import Box from "../../component/box";
import PostCreate from "../post-create";
import { Alert, Skeleton } from "../../component/load";
import { getDate } from "../../util/getDate";
import {
  requestInitialState,
  requestReducer,
  REQUEST_ACTION_TYPE,
} from "../../util/request";

const PostItem = lazy(() => import("../post-item"));

export default function Container() {
  const [state, dispatch] = useReducer(requestReducer, requestInitialState);

  const getData = useCallback(async () => {
    dispatch({ type: REQUEST_ACTION_TYPE.PROGRESS });

    try {
      // метод method: "GET" іде за замовчуванням і його можна не вказувати
      const res = await fetch("/api/post-list");

      const data = await res.json();

      if (res.ok) {
        dispatch({
          type: REQUEST_ACTION_TYPE.SUCCESS,
          payload: convertData(data),
        });
      } else {
        dispatch({ type: REQUEST_ACTION_TYPE.ERROR, payload: data.message });
      }
    } catch (error) {
      dispatch({ type: REQUEST_ACTION_TYPE.ERROR, payload: error.message });
    }
  }, []);
  const convertData = (raw) => ({
    list: [...(raw.list || [])]
      .reverse()
      .map(({ id, username, text, date }) => ({
        id,
        username,
        text,
        date: getDate(date),
      })),
    isEmpty: raw.list.length === 0,
  });

  useEffect(() => {
    getData();
  }, [getData]);

  return (
    <Grid>
      <Box>
        <Grid>
          <Title>Home</Title>
          <PostCreate
            onCreate={getData}
            placeholder="What is happening?!"
            button="Post"
          />
        </Grid>
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
      {state.status === REQUEST_ACTION_TYPE.SUCCESS && (
        <Fragment>
          {state.data.isEmpty ? (
            <Alert message="Список постів пустий" />
          ) : (
            state.data.list.map((item) => (
              <Fragment key={item.id}>
                <Suspense
                  fallback={
                    <Box>
                      <Skeleton />
                    </Box>
                  }
                >
                  <PostItem {...item} />
                </Suspense>
              </Fragment>
            ))
          )}
        </Fragment>
      )}
    </Grid>
  );
}
