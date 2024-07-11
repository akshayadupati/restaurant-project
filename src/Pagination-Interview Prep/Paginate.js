const Paginate = ({ items, numberOfItemsPerPage, setCurrentPage }) => {
  let buttons = [];
  let numberOfButtons = items.length / numberOfItemsPerPage;
  for (let i = 1; i <= numberOfButtons; i++) {
    buttons.push(i);
  }
  return (
    <div>
      {buttons.map((btn) => {
        return <button onClick={() => setCurrentPage(btn)}> {btn}</button>;
      })}
    </div>
  );
};

export default Paginate;
