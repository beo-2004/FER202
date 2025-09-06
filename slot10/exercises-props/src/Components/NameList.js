import { Button } from "react-bootstrap";
const NameList = ({ names, handleAddName }) => {
    return (
      <div>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            {names.map((name, index) => (
              <tr key={index}>  
                <td>{index + 1}</td>
                <td>{name}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <Button variant="primary" onClick={handleAddName}>Add Name</Button>
        
      </div>
    );
  };
  export default NameList;
  