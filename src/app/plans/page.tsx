import styles from './styles.module.css'


const Plans = () =>
{
  const columns = ["", "Basic", "Standart", "Advanced"];
  const rows = [
    ["Monthly Fee", "0$", "2$", "3$"],
    ["Setup Fee", "0$", "0$", "0$"],
    ["Setup Fee", "0$", "0$", "0$"],
    ["Plan Name", "MK1", "MK2", "MK3"],
    ["Web Space", "5GB", 'Unlimited', "Unlimited"],
    ];

  return (
    <main role="main">
      <article className={ styles.table }>
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
      </article>
    </main>
  )
}

export default Plans;
