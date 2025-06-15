export default function LinkButton({ href, target, className, children }) {
  return (
    <a href={href} target={target} className={className}>
      {children}
    </a>
  );
}
