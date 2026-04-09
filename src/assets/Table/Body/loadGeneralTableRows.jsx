//BUG Rows are not assigned perfectly
export function LoadTableRows({ children }) {
  return (
    <>
      <tbody className="mal-container">{children}</tbody>
    </>
  );
}
