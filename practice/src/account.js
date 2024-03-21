
import { useSelector } from 'react-redux';

const Account = ()=>
{

    let data = useSelector((state)=>
    {
        return state;
    });

    return(
        <>
<>
  <title>Bootstrap Example</title>
  <meta charSet="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
    rel="stylesheet"
  />
  <div className="container mt-3">
   m
    <table className="table">
      <thead>
        <tr>
          <th>Balance</th>
          <th>name</th>
          <th>Mobile number</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{data.balance}</td>
          <td>{data.name}</td>
          <td>{data.mobilenumber}</td>
        </tr>
        
      </tbody>
    </table>
  </div>
</>


        </>
    )
}
export default Account;