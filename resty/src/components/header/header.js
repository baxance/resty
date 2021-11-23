import './header.scss';

function Header() {

  // const getButton = () => {
  //   alert("get button functional");
  // }
  // const putButton = () => {
  //   alert("put button functional");
  // }
  // const postButton = () => {
  //   alert("post button functional");
  // }
  // const deleteButton = () => {
  //   alert("delete button functional");
  // }

  return (
    <header>
      <h1>LAB 26 RESTy</h1>
      {/* <ul>
        <li>
          <button type="button" onClick={getButton}>Get</button>
        </li>
        <li>
          <button type="button" onClick={putButton}>Put</button>
        </li>
        <li>
          <button type="button" onClick={postButton}>Post</button>
        </li>
        <li>
          <button type="button" onClick={deleteButton}>Delete</button>
        </li>
      </ul> */}
    </header>
  )
}

export default Header;