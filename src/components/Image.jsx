export default function Image({ src, alt = "pic", className = "" }) {
  return <img src={src} alt={alt} className={className} />;
}
