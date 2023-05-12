import { DELETE_TODOS, GET_TODOS, POST_TODOS } from "constants/todoConstants";
import { rest } from 'msw';

export const todosMock = () => {
  return [
    rest.get(`${process.env.REACT_APP_API_URL}${GET_TODOS}`, (req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json([
          {
            id: "23",
            title: "제목입니다.",
            describe: "설명입니다."
          }
        ])
      )
    }),
    rest.post(`${process.env.REACT_APP_API_URL}${POST_TODOS}`, (req, res, ctx) => {

    }),
    rest.delete(`${process.env.REACT_APP_API_URL}${DELETE_TODOS("1")}`, (req, res, ctx) => {

    })
  ]
}