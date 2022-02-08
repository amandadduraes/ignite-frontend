import { Sumarry } from "../Summary";
import { TransactionsTable } from "../TransactionsTable";
import { css } from "./styles";

export function Dashboard() {
  return (
    <css.Container>
      <Sumarry />
      <TransactionsTable />
    </css.Container>
  )
}