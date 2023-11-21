import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

interface Props
{
  headers: string[];
  rows: string[][];
}

const links = [ "/", "/login", "/about"];

const Plans = ({ headers, rows }: Props) =>
{
  return (
    <>
      <Header links={ links }>
        Plans
      </Header>
      <article>
        <table>
          <thead>
            <tr>
              <th></th>
              <th>Basic</th>
              <th>Standart</th>
              <th>Advanced</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1.</td>
              <td>Basic Info</td>
              <td>Standart Info</td>
              <td>Advanced Info</td>
            </tr>
          </tbody>
        </table>
      </article>
      <Footer />
    </>
  )
}

export default Plans;
