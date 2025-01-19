import { ButtonProps } from "@/components/ui/button";

export const ButtonSubmit: React.FC<ButtonProps> = ({ children, ...rest }) => {
  return (
    <button
      className="w-full p-2 text-white rounded-lg bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300"
      {...rest}
    >
      {children || "Envoyer"} {/* Affiche "Envoyer" si aucun enfant n'est fourni */}
    </button>
  );
};

