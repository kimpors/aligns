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
          <tr>
            {
              columns.map((column, index) => (
                <th key={ index }>
                  { column }
                </th>
              ))
            }
          </tr>
        </thead>
        <tbody>
          {
            rows.map((row, index) => (
              <tr key={ index }>
                {
                  row.map(ceil => (
                    <td key={ ceil }>
                      { ceil }
                    </td>
                  ))
                }
              </tr>
            ))
          }
        </tbody>
      </table>
    </section>
  )
}

export default Table;
