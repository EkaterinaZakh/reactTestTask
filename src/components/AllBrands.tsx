export default function AllBrands() {
  return (
    <>
      <div className="brands_container">
        <h4>All brands</h4>

        <div className="list-group">
          <button
            type="button"
            className="list-group-item list-group-item-action "
            aria-current="true"
          >
            The current button
          </button>
          <button
            type="button"
            className="list-group-item list-group-item-action"
          >
            A second item
          </button>
          <button
            type="button"
            className="list-group-item list-group-item-action"
          >
            A third button item
          </button>
          <button
            type="button"
            className="list-group-item list-group-item-action"
          >
            A fourth button item
          </button>
          <button
            type="button"
            className="list-group-item list-group-item-action"
          >
            A disabled button item
          </button>
        </div>
      </div>
    </>
  );
}
