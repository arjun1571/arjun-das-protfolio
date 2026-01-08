// components/Education/Card.tsx
interface CardProps {
  duration: string;
  title: string;
  description: string;
}

const Card = ({ duration, title, description }: CardProps) => (
  <div className="bg-white rounded-xl shadow hover:shadow-xl transition p-6 border border-gray-200 cursor-pointer">
    <span className="text-sm font-semibold text-primary">{duration}</span>
    <h3 className="text-2xl font-bold mt-2">{title}</h3>
    <p className="text-gray-600 mt-2">{description}</p>
  </div>
);

export default Card;
