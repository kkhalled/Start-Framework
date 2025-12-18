
import './Divider.css';
export default function Divider({ className = "" }) {
    
  return (
    <div className={`divider-wrapper ${className}`}>
      <div className="divider">
        <i className="fa-solid fa-star"></i>
      </div>
    </div>
  );
}
