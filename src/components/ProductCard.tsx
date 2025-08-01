interface Product {
  id: string;
  name: string;
  farm: string;
  category: string;
  image: string;
  video?: string;
  prices: {
    "5g": number;
    "10g": number;
    "25g": number;
    "50g": number;
    "100g": number;
    "200g": number;
  };
}

interface ProductCardProps {
  product: Product;
  onClick: (product: Product) => void;
}

export default function ProductCard({ product, onClick }: ProductCardProps) {
  return (
    <div 
      onClick={() => onClick(product)}
      className="bg-black/60 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] cursor-pointer group touch-manipulation w-full"
    >
      {/* Container image avec badge */}
      <div className="relative aspect-square overflow-hidden">
        <img 
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
          sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, (max-width: 1280px) 20vw, 16vw"
        />
        
        {/* Badge catégorie - responsive */}
        <div className="absolute top-2 left-2 bg-white text-black text-xxs sm:text-xs font-bold px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-md shadow-lg max-w-[80%] truncate">
          {product.category}
        </div>
        
        {/* Indicateur vidéo - responsive */}
        {product.video && (
          <div className="absolute top-2 right-2 bg-black/80 text-white p-1 sm:p-1.5 rounded-full shadow-lg">
            <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 6a2 2 0 012-2h6l2 2h6a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
            </svg>
          </div>
        )}
        
        {/* Overlay gradient au survol */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      
      {/* Informations produit - responsive */}
      <div className="p-2 sm:p-3 md:p-4">
        <h3 className="text-white font-bold text-responsive-xs sm:text-responsive-sm mb-1 uppercase tracking-wide leading-tight break-words line-clamp-2">
          {product.name}
        </h3>
        <p className="text-gray-400 text-xxs sm:text-xs font-medium uppercase tracking-widest break-words line-clamp-1">
          {product.farm}
        </p>
      </div>
    </div>
  );
}

export type { Product };