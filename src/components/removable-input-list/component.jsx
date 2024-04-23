export default function RemovableInputList({ removeFunc, children }) {
  return (
    <div>
      {children}
      <button type="button" onClick={removeFunc}>
        Remove
      </button>
    </div>
  );
}
