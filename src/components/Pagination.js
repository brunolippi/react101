import Pagination from "react-bootstrap/Pagination";
import "./Pagination.css";

const PaginationBasic = ({ page, setPage }) => {
  let items = [];
  const active = page + 1;
  for (let number = 1; number <= 5; number++) {
    items.push(
      <Pagination.Item
        key={number}
        active={number === active}
        onClick={() => setPage(number - 1)}
      >
        {number}
      </Pagination.Item>
    );
  }
  return (
    <div className="pagination">
      <Pagination size="lg">{items}</Pagination>
      <br />
    </div>
  );
};

export default PaginationBasic;
