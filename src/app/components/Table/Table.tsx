import styles from './Table.module.css';

interface Props
{
  columns: string[];
  rows: string[][];
}

const Table = ({ columns, rows }: Props) =>
{
  return (
    <section className={ styles.table }>
      <table>
        <thead>
          <tr>{columns.map(column => <th>{ column }</th>)}</tr>
        </thead>
        <tbody>
          {rows.map(row => <tr>{row.map(ceil => <td>{ ceil }</td>)}</tr>)}
        </tbody>
      </table>
    </section>
  )
}

export default Table;
